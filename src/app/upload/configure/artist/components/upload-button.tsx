"use client";

import MutationResponse from "@/app/interfaces/mutation-response";
import createArtist from "@/app/server/create-artist";
import useToast from "@/hooks/use-toast";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function UploadButton({ artist }: { artist: ArtistOmit }) {

    const { success, error } = useToast();

    const [pending, setPending] = useState(false);

    async function postArtist() {
        setPending(true);

        /* create artist */
        try {
            await createArtist(artist).then((response: MutationResponse) => {
                if (!response.success) error(`${response.status} | ${response.title}`);

                success(`${response.status} | ${response.title}`);

            });
        } catch (exception) {
            if (exception instanceof Error) error(exception.name)
        }

        setPending(false);
    }

    return (
        <div className="w-full p-4">
            <button
                disabled={pending}
                onClick={postArtist}
                style={{ opacity: pending ? .5 : 1 }}
                className="w-full bg-accent p-4 rounded-lg font-bold text-xl transition-all">
                {pending ? <ClipLoader color="white" size={15} /> : ("Upload")}
            </button>
        </div>
    );
}