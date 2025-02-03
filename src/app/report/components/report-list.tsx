import { report } from "@prisma/client";
import database from "@/database/database";
import PostReportLink from "./post-report-link";
import Report from "./report";

export default async function ReportList() {
    const reports = await database.report.findMany();

    return (
        <div className="flex flex-col overflow-y-scroll gap-2">
            <PostReportLink />
            {reports.map((report: report, i: number) => <Report key={i} report={report} />)}
        </div>
    );
}