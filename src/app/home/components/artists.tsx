'use server';

import database from "@/database/database";
import { Artist } from "@prisma/client";
import ArtistEntry from "./artist";

export default async function Artists() {

    const artists: Artist[] = await database.artist.findMany({ take: 10, orderBy: { title: "asc" } });

    return (
        <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Artists</p>
            <div className="flex gap-2 snap-x overflow-x-auto">
                {artists.map((artist, i) =>
                    <ArtistEntry
                        index={i}
                        artist={artist}
                        key={i} />
                )}
            </div>
        </div>
    );
}