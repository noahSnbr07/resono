"use client";

import Image from "next/image";
import { search } from "@/assets/assets";
import { ChangeEvent, KeyboardEvent } from "react";
import useUploadContext from "../../hooks/useUploadContext";
import getContent from "../../server/get-content";

export default function Searchbar() {
    const { query, setQuery, setSongs, setArtists } = useUploadContext();

    async function updateResult() {
        if (query.length < 1) return;
        setQuery("");
        const { songs, artists } = await getContent({ query });
        setSongs(songs);
        setArtists(artists);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            updateResult();
        }
    };

    return (
        <div className="flex flex-1 rounded-lg h-8">
            <input
                autoFocus
                value={query}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    setQuery(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                placeholder="What do you want to listen to?"
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