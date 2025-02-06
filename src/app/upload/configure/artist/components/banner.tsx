import Image from "next/image";

export default function Banner({ url, title }: { url: string, title: string }) {
    return (
        <div className="relative bg-stack w-full h-32">
            <Image
                src={url}
                layout="fill"
                objectFit="cover"
                className=""
                priority
                title={`banner of ${title}`}
                alt={`banner of ${title}`}
            />
        </div>
    );
}