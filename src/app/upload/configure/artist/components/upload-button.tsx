"use client";

import { useState } from "react";
import uploadArtist from "../../server/upload-artist";

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

    async function postArtist() {
        if (pending) return;
        setPending(true);
        try {

            await uploadArtist({ banner, thumbnail, title, description, listeners, uploads });

        } catch (error) {
            console.log(error);
        } finally {
            setPending(false);
        }
    }

    return (
        <div className="w-full p-4">
            <button onClick={postArtist} className="w-full bg-accent p-4 rounded-lg font-bold text-xl">
                Upload
            </button>
        </div>
    );
}