'use server';

import getReportStats from "../server/get-report-stats";

export default async function Header() {

    const { total, important, covered } = await getReportStats();

    return (
        <div className="flex rounded-lg bg-stack h-full gap-4 px-2 items-center w-full text-sm text-brighten">
            <p> covered: {covered} </p>
            <p> important: {important} </p>
            <p> total: {total} </p>
        </div>
    );
}