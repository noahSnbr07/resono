'use server';

import database from "@/database/database";
import { artist } from "@prisma/client";
import Artist from "./artist";

export default async function Artists() {

    const artists: artist[] = await database.artist.findMany({ take: 10, orderBy: { title: "asc" } });

    return (
        <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Artists</p>
            <div className="flex gap-2 snap-x overflow-x-auto">
                {artists.map((artist, i) =>
                    <Artist
                        index={i}
                        artist={artist}
                        key={i} />
                )}
            </div>
        </div>
    );
}