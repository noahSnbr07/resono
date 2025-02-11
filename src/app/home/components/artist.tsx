"use client";

import { motion } from 'framer-motion';
import Image from "next/image";

interface ArtistEntryInterface {
    title: string;
    id: string;
    thumbnail: string;
    index: number;
}

export default function ArtistEntry({ title, id, thumbnail, index }: ArtistEntryInterface) {

    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: index * .1, type: "tween", duration: .5 }}
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
        </motion.div>
    );
}