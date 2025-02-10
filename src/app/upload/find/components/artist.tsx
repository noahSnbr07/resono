import Link from "next/link";
import APIArtistResponse from "../../types/api-artist-response";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Artist({ artist, index }: { artist: APIArtistResponse, index: number }) {

    if (!artist.artistID) return;

    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0, }}
            transition={{ delay: index * .1 }}
        >
            <Link
                href={`/upload/configure/artist?id=${artist.artistID}`}
                key={index}
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
        </motion.div>
    )
}