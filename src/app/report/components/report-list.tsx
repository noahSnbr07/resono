import { Report } from "@prisma/client";
import database from "@/database/database";
import PostReportLink from "./post-report-link";
import ReportEntry from "./report";

export default async function ReportList() {
    const reports = await database.report.findMany();

    return (
        <div className="flex flex-col overflow-y-scroll gap-2">
            <PostReportLink />
            {reports.map((report: Report, i: number) => <ReportEntry key={i} report={report} />)}
        </div>
    );
}