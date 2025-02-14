"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

interface SongEntryInterface {
    title: string;
    id: string;
    thumbnail: string;
    index: number;
}

export default function SongEntry({ title, id, thumbnail, index }: SongEntryInterface) {

    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: index * .1, type: "tween", duration: .5 }}
            className="w-24 flex-shrink-0 snap-start">
            <Link
                className='items-center gap-1 w-full flex flex-col'
                href={`/details?song=${id}`}>
                <Image
                    key={id}
                    className="flex-shrink-0 rounded-lg object-cover aspect-square"
                    src={thumbnail}
                    height={96}
                    width={96}
                    alt={`"${title}" Thumbnail`}
                    title={`"${title}" Thumbnail`}
                />
                <p className="text-sm w-full text-center truncate text-brighten"> {title} </p>
            </Link>
        </motion.div>
    );
}