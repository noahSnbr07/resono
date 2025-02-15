"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function UploadButton() {

    const [pending, setPending] = useState(false);

    async function postSong() {
        setPending(true);
        alert("out of service");
        setPending(false);
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