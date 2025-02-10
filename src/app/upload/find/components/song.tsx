import Link from "next/link";
import APISongResponse from "../../types/api-song-response";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Song({ song, index }: { song: APISongResponse, index: number }) {

    if (!song.videoID) return;

    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0, }}
            transition={{ delay: index * .1 }}
        >
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
        </motion.div>

    );
}