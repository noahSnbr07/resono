'use server';

import database from "@/database/database";
import SongEntry from "./song";

export default async function Songs() {

    const selectionConfig = {
        title: true,
        thumbnail: true,
        id: true
    }

    const songs = await database.song.findMany({
        take: 10,
        orderBy: { title: "asc" },
        select: selectionConfig
    });

    return (
        <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Songs</p>
            <div className="flex gap-4 snap-x overflow-x-auto">
                {songs.map((song, i) =>
                    <SongEntry
                        key={song.id}
                        id={song.id}
                        index={i}
                        thumbnail={song.thumbnail}
                        title={song.title}
                    />
                )}
            </div>
        </div>
    );
}