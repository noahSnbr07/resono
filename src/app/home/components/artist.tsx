"use client";

import { artist } from "@prisma/client";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Artist({ artist, index }: { artist: artist, index: number }) {

    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: index * .1, type: "tween", duration: .5 }}
            className="flex-shrink-0 w-24 gap-1 flex flex-col snap-start">
            <Image
                key={artist.id}
                className="flex-shrink-0 rounded-lg"
                src={artist.thumbnail}
                height={96}
                width={96}
                alt={`"${artist.title}" Thumbnail`}
                title={`"${artist.title}" Thumbnail`}
            />
            <p className="text-sm truncate text-brighten"> {artist.title} </p>
        </motion.div>
    );
}