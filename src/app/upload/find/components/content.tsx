"use client";

import Image from "next/image";
import useUploadContext from "../../hooks/useUploadContext";
import APISongResponse from "../../types/api-song-response";
import APIArtistResponse from "../../types/api-artist-response";
import Link from "next/link";

export default function Content() {
    const { songs, artists } = useUploadContext();

    return (
        <div className="overflow-y-scroll h-dvh">
            <p className="text-xl font-bold"> Songs - {songs.length} </p>
            {songs.map((song: APISongResponse, i: number) => (
                <Link
                    href={`/upload/configure?video=${song.videoID}?method=song`}
                    key={i}
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
            ))}
            <p className="text-xl font-bold"> Artists - {artists.length} </p>
            {artists.map((artist: APIArtistResponse, i: number) => (
                <Link
                    href={`/upload/configure?video=${artist.artistID}?method=song`}
                    key={i}
                    className="flex gap-2 py-2 items-center">
                    <Image
                        src={artist.thumbnail}
                        alt={`${artist.title} Cover`}
                        title={`${artist.title} Cover`}
                        height={64}
                        width={64}
                        className="size-16 aspect-square object-cover rounded-full" />
                    <div className="truncate">
                        <p>{artist.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}