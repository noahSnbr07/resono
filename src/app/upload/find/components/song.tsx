import Link from "next/link";
import APISongResponse from "../../types/api-song-response";
import Image from "next/image";

export default function Song({ song, index }: { song: APISongResponse, index: number }) {

    if (!song.videoID) return;

    return (
        <Link
            href={`/upload/configure/song?id=${song.videoID}`}
            key={index}
            className="flex gap-2 py-2 items-center">
            <Image
                src={song.thumbnail}
                alt={`${song.channel} - ${song.title} Cover`}
                title={`${song.channel} - ${song.title} Cover`}
                height={64}
                width={64}
                className="size-16 aspect-square object-cover rounded-lg" />
            <div className="truncate flex-1">
                <p className="font-bold">{song.title}</p>
                <p className="text-sm">{song.channel}</p>
            </div>
        </Link>

    );
}