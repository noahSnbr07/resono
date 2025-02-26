import Image from "next/image";
import ArtistOmit from "@/app/upload/types/artist-omit";

export default function Intro({ artist }: { artist: ArtistOmit }) {
    const { title, thumbnail, listeners, uploads } = artist;

    return (
        <div className="bg-stack rounded-lg p-4 flex gap-4 m-4">
            <Image
                src={thumbnail}
                height={96}
                width={96}
                alt={`thumbnail of ${title}`}
                title={`thumbnail of ${title}`}
                priority
                className="rounded-full bg-stack aspect-square h-24 w-24"
            />
            <div className="flex-1 flex flex-col gap-2">
                <p className="font-bold text-xl"> {title} </p>
                <div className="flex flex-col text-brighten">
                    <p> listeners: {listeners.toLocaleString("en-Us")} </p>
                    <p> songs: {uploads.toLocaleString("en-Us")} </p>
                </div>
            </div>
        </div>
    );
}