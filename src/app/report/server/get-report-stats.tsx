"use server";

import database from "@/database/database";
import ReportStats from "../types/report-stats";
import { Report } from "@prisma/client";

export default async function getReportStats(): Promise<ReportStats> {
    const reports = await database.report.findMany();

    const covered = reports.filter((element: Report) => element.resolved).length;
    const important = reports.filter((element: Report) => element.important).length;
    const total = reports.length

    return { covered, total, important };
}