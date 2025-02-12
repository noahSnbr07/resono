"use client";

import { useState } from "react";
import uploadArtist from "../../server/upload-artist";
import MutationResponse from "@/app/interfaces/mutation-response";
import useToast from "@/hooks/use-toast";
import { ClipLoader } from "react-spinners";

interface UploadButtonComponentProps {
    banner: string;
    thumbnail: string;
    title: string;
    description: string;
    listeners: number;
    uploads: number;
}

export default function UploadButton({ banner, thumbnail, title, description, listeners, uploads }: UploadButtonComponentProps) {

    const [pending, setPending] = useState(false);
    const { success, error } = useToast();

    async function postArtist() {
        if (pending) return;
        setPending(true);
        try {
            const response: MutationResponse = await uploadArtist({ banner, thumbnail, title, description, listeners, uploads });
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
        <div className="w-full p-4">
            <button
                onClick={postArtist}
                style={{ opacity: pending ? .5 : 1 }}
                className="w-full bg-accent p-4 rounded-lg font-bold text-xl transition-all">
                {pending ? (<ClipLoader color="white" size={15} />) : ("Upload")}
            </button>
        </div>
    );
}