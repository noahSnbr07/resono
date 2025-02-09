"use server";

import MutationResponse from "@/app/interfaces/mutation-response";
import database from "@/database/database";
import { artist } from "@prisma/client";

type ArtistInput = Omit<artist, "id" | "created" | "updated" | "songId">;

export default async function uploadArtist(artistData: ArtistInput): Promise<MutationResponse> {
    const { title } = artistData;

    try {

        //check for existing artist
        const existingArtist = await database.artist.findFirst({ where: { title } });
        if (existingArtist) return {
            success: false,
            status: 500,
            title: `Artist "${existingArtist.title}" already registered`,
            message: "Artists already exists",
        }

        //upload
        const newArtist = await database.artist.create({ data: artistData });
        return {
            success: true,
            status: 200,
            title: `"${newArtist.title}" has been added`,
            message: "successful mutation",
        }

    }

    catch (error) {

        if (error instanceof Error) {
            return {
                success: false,
                status: 500,
                title: "Internal Server Error",
                message: error.message,
            }
        }

    }
    return {
        success: false,
        status: 500,
        title: "Unexpected Server Error",
        message: "Unexpected Error",
    }
}