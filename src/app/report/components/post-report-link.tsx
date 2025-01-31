'use server';

import Link from "next/link";

export default async function PostReportLink() {


    return (
        <Link
            className="w-full p-4 text-xl text-brighten text-center font-bold bg-stack rounded-lg mb-2"
            href={"/report/post"}>
            Post Report
        </Link>
    );
}