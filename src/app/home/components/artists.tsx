'use server';

import database from "@/database/database";
import ArtistEntry from "./artist";

export default async function Artists() {

    const selectionConfig = {
        title: true,
        thumbnail: true,
        id: true
    }

    const artists = await database.artist.findMany({
        take: 10,
        orderBy: { title: "asc" },
        select: selectionConfig
    });

    return (
        <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Artists</p>
            <div className="flex gap-4 snap-x overflow-x-auto">
                {artists.map((artist, i) =>
                    <ArtistEntry
                        key={artist.id}
                        id={artist.id}
                        index={i}
                        thumbnail={artist.thumbnail}
                        title={artist.title}
                    />
                )}
            </div>
        </div>
    );
}