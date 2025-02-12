"use server";

import MutationResponse from "@/app/interfaces/mutation-response";
import database from "@/database/database";
import { Artist } from "@prisma/client";

interface ClientSong {
    thumbnail: string;
    tags: string[];
    title: string;
    explicit: boolean;
    artist: Artist;
    duration: number;
    audio: string;
}

export default async function uploadSong({ thumbnail, tags, title, explicit, artist, duration, audio }: ClientSong): Promise<MutationResponse> {

    console.log("ARTIST: ", artist)

    let artistId;

    try {

        async function addRelatedArtist(): Promise<string> {
            const response = await database.artist.create({ data: artist });
            artistId = response.id;
            return response.id
        }

        const relatedArtist = await database.artist.findMany({ where: { id: artist.id } });
        if (!relatedArtist || relatedArtist.length < 1) {
            const addedArtist = await addRelatedArtist();
            console.log(addedArtist);
        }


        const existing = await database.song.findFirst({ where: { title } });
        if (existing) return {
            success: false,
            status: 500,
            title: `Song "${existing.title}" already exists`,
            message: "",
        }

        const added = await database.song.create({
            data: {
                thumbnail,
                tags,
                title,
                explicit,
                artistId,
                duration,
                audio
            }
        })
        return {
            success: true,
            status: 200,
            title: `Added "${added.title} to database"`,
            message: "Success",
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return {
                success: false,
                status: 400,
                title: error.name,
                message: error.message,
            }
        }
    } return {
        success: false,
        status: 500,
        title: "Unhandled Exception",
        message: "Error",
    }
}