"use server";

import database from "@/database/database";
import MutationResponse from "../interfaces/mutation-response";

interface CreateArtistProps {
    title: string;
    thumbnail: string;
    banner: string;
    description: string;
    listeners: number;
    uploads: number;
}

export default async function createArtist(props: CreateArtistProps): Promise<MutationResponse> {

    try {

        //artist exists -> return
        const exists = await database.artist.findFirst({ where: { title: props.title } });
        if (exists) return {
            success: false,
            status: 400,
            title: `"${props.title}" Already Exists.`,
            message: "Duplication Error",
        }

        //insert operation
        const response = await database.artist.create({ data: props });
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