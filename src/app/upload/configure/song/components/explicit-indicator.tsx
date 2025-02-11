'use server';

import { explicit } from "@/assets/assets";
import Image from "next/image";

export default async function ExplicitIndicator({ isExplicit }: { isExplicit: boolean }) {

    if (!isExplicit) return;

    return (
        <div className="flex p-4 gap-4 items-center bg-stack rounded-lg">
            <Image
                src={explicit}
                height={24}
                width={24}
                title="Explicit icon"
                alt="Explicit icon"
            />
            <p className="text-brighten"> Song may contain explicit content </p>
        </div>
    );
}