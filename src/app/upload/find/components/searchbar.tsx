"use client";

import Image from "next/image";
import { search } from "@/assets/assets";
import { ChangeEvent } from "react";
import useUploadContext from "../../hooks/useUploadContext";
import getContent from "../../server/get-content";

export default function Searchbar() {

    const { query, setQuery, setSongs, setArtists } = useUploadContext();

    async function updateResult() {
        setQuery("");
        const { songs, artists } = await getContent({ query });
        setSongs(songs);
        setArtists(artists);
    }

    return (
        <div className="flex flex-1 bg-stack rounded-lg h-8">
            <input
                value={query}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    setQuery(e.target.value);
                }}
                placeholder="Query"
                className="flex-1 px-2 bg-transparent"
            />
            <button
                onClick={updateResult}
                className="aspect-square">
                <Image
                    src={search}
                    height={24}
                    width={24}
                    alt="Search Icon"
                    title="Search Icon"
                />
            </button>
        </div>
    );
}