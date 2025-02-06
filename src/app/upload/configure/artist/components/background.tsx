import Image from "next/image";
import { ReactNode } from "react";

export default function BackgroundWrapper({ url, children }: { url: string; children: ReactNode }) {
    return (
        <div className="relative flex-1 flex">
            <Image
                priority
                src={url}
                alt="Background Image"
                fill
                className="absolute object-cover blur-3xl brightness-50"
            />
            <div className="flex-1 z-10 flex justify-between flex-col">
                {children}
            </div>
        </div>
    );
}