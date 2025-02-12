"use server";

import database from "@/database/database";
import MutationResponse from "../interfaces/mutation-response";

interface CreateSongProps {
    title: string;
    duration: number;
    thumbnail: string;
    audio: string;
    explicit: boolean;
    tags: string[];
    artistId: string;
}

export default async function createSong(props: CreateSongProps): Promise<MutationResponse> {
    console.log("[artistId]:", props.artistId);

    try {

        //song exists -> return
        const exists = await database.song.findFirst({ where: { title: props.title } });
        if (exists) return {
            success: false,
            status: 400,
            title: `"${props.title}" Already Exists.`,
            message: "Duplication Error",
        }

        //insert operation
        const response = await database.song.create({ data: props });
        if (response) return {
            success: true,
            status: 200,
            title: `"${props.title}" Has Been Inserted`,
            message: `Success`,
        }

    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                status: 500,
                title: error.name,
                message: error.message,
            }
        }
    }

    return {
        success: false,
        status: 500,
        title: "Uncaught Exception Occurred",
        message: "Unhandled Error",
    }

}