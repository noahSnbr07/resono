import Image from "next/image";

interface ArtistEntryInterface {
    title: string;
    id: string;
    thumbnail: string;
}

export default function ArtistEntry({ title, id, thumbnail }: ArtistEntryInterface) {

    return (
        <div
            className="flex-shrink-0 items-center w-24 gap-1 flex flex-col snap-start">
            <Image
                key={id}
                className="flex-shrink-0 rounded-full"
                src={thumbnail}
                height={96}
                width={96}
                alt={`"${title}" Thumbnail`}
                title={`"${title}" Thumbnail`}
            />
            <p className="text-sm w-full text-center truncate text-brighten"> {title} </p>
        </div>
    );
}