"use client";

import Image from "next/image";
import { search } from "@/assets/assets";
import { ChangeEvent, useEffect } from "react";
import useUploadContext from "../../hooks/useUploadContext";
import getContent from "../../server/get-content";
import { redirect, useSearchParams } from "next/navigation";

export default function Searchbar() {

    const { query, setQuery, setSongs, setArtists } = useUploadContext();

    const params = useSearchParams();

    useEffect(() => {
        const retrievedQuery = params.get("query")
        if (retrievedQuery) setQuery(retrievedQuery);
        updateResult()
    }, [params]);

    async function updateResult() {
        const { songs, artists } = await getContent({ query });
        setSongs(songs);
        setArtists(artists);
        redirect(`/upload/find?query=${encodeURIComponent(query)}`);
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