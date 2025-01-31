"use server";

import database from "@/database/database";
import ReportStats from "../types/report-stats";
import { report } from "@prisma/client";

export default async function getReportStats(): Promise<ReportStats> {
    const reports = await database.report.findMany();
    console.log(reports);

    const covered = reports.filter((element: report) => element.resolved).length;
    const important = reports.filter((element: report) => element.important).length;
    const total = reports.length

    return { covered, total, important };
}