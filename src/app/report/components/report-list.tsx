import { report } from "@prisma/client";
import database from "@/database/database";
import Image from "next/image";
import { check, close, priority } from "@/assets/assets";
import PostReportLink from "./post-report-link";

export default async function ReportList() {
    const reports = await database.report.findMany();

    return (
        <div className="flex flex-col overflow-y-scroll gap-2">
            <PostReportLink />
            {reports.map((report: report, i: number) => {

                const { resolved, title, description, important, created, updated } = report;
                return (
                    <div
                        key={i}
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
            })}
        </div>
    );
}