"use client";

import { ReactNode } from "react";
import ReportFormProvider from "./context/report-form-context";

export default function layout({ children }: { children: ReactNode }) {

    return (
        <ReportFormProvider>
            {children}
        </ReportFormProvider>
    );
}