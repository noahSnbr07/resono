'use server';

import Image from "next/image";

export default async function Thumbnail({ url, title }: { url: string; title: string; }) {
    return (
        <div className="relative w-full aspect-square xl:w-1/4">
            <Image
                src={url}
                alt={`Thumbnail "${title}"`}
                title={`Thumbnail "${title}"`}
                fill
                className="object-cover max-w-full h-auto rounded-lg"
                priority
            />
        </div>
    );
}