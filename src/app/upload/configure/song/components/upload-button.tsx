"use client";

import { useState } from "react";
import useToast from "@/hooks/use-toast";
import { ClipLoader } from "react-spinners";
import { Artist } from "@prisma/client";
import createSong from "@/app/server/createSong";

interface UploadButtonComponentProps {
    title: string;
    thumbnail: string;
    tags: string[];
    explicit: boolean;
    artist: Artist;
    audio: string;
    duration: number;
}

export default function UploadButton({ title, thumbnail, explicit, tags, /* artist, */ audio, duration }: UploadButtonComponentProps) {

    const [pending, setPending] = useState(false);
    const { success, error } = useToast();

    async function postSong() {
        if (pending) return;
        setPending(true);
        try {

            const response = await createSong({
                title,
                thumbnail,
                explicit,
                tags,
                artistId: "886a91a2-0a3e-4ceb-a367-2ef48499271f",
                audio,
                duration
            });
            console.log(response);
            if (response.success) return success(response.title);
            return error(response.title);

        } catch (error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    }

    return (
        <button
            onClick={postSong}
            style={{ opacity: pending ? .5 : 1 }}
            className="w-full bg-accent p-4 rounded-lg font-bold text-xl transition-all">
            {pending ? (<ClipLoader color="white" size={15} />) : ("Upload")}
        </button>
    );
}