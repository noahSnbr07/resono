'use server';

import Image from "next/image";

interface SongPreviewProps {
    title: string;
    artist: string;
    cover: string;
}

export default async function SongPreview({ title, artist, cover }: SongPreviewProps) {

    return (
        <div className="flex w-full bg-stack gap-4 p-2 rounded-lg">
            <Image
                className="bg-stack h-16 w-16 object-cover rounded-md"
                src={cover}
                height={64}
                width={64}
                alt={`Cover of "${title}" by "${artist}"`}
                title={`Cover of "${title}" by "${artist}"`}
                priority
            />
            <div className="flex flex-col flex-1">
                <p className="font-bold text-lg truncate">{title}</p>
                <p className="text-brighten truncate">{artist}</p>
            </div>
        </div>
    );
}