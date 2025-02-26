"use server";

import database from "@/database/database";
import MutationResponse from "../interfaces/mutation-response";
import ArtistOmit from "@/app/upload/types/artist-omit";

export default async function createArtist(artist: ArtistOmit): Promise<MutationResponse> {

    try {

        //check weather the artist already exists
        const existing = await database.artist.findUnique({ where: { originId: artist.originId } });
        if (existing) return {
            success: false,
            status: 500,
            title: `"${artist.title}" already exists`,
            message: "name reserved",
        }

        //insert artist
        const response = await database.artist.create({ data: artist });
        if (response) return {
            success: true,
            status: 200,
            title: `"${artist.title}" inserted successfully`,
            message: "artist inserted",
        }

        //caught exception
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                status: 500,
                title: error.name,
                message: error.message,
            }
        }

        //uncaught exception
    } return {
        success: false,
        status: 500,
        title: "Uncaught Exception",
        message: "Uncaught Exception",
    }
}