'use server';

import { check, close, priority } from "@/assets/assets";
import { Report } from "@prisma/client";
import Image from "next/image";

export default async function ReportEntry({ report }: { report: Report }) {
    const { resolved, title, description, important, created, updated } = report;
    return (
        <div
            className="flex flex-col gap-2 bg-stack rounded-lg p-2">
            <p className="font-bold text-xl"> {title} </p>
            <p className="text-brighten" > {description}  </p>
            <div className="flex flex-col text-sm text-brighten">
                <p> created: {created.toDateString()} </p>
                <p> updated: {updated.toDateString()} </p>
            </div>

            <div className="flex gap-4">
                <div className="flex gap-2">
                    <p> {resolved ? 'resolved' : 'unresolved'} </p>
                    <Image
                        src={resolved ? check : close}
                        height={24}
                        width={24}
                        alt="Resolved Check"
                        title="Resolved Check"
                    />
                </div>

                {important && (<div className="flex">
                    <p> important </p>
                    <Image
                        src={priority}
                        height={24}
                        width={24}
                        alt="Priority"
                        title="Priority"
                    />
                </div>)}
            </div>

        </div>
    );
}