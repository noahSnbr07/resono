import { useContext } from "react";
import { ReportFormContext } from "../context/report-form-context";

export default function useReportForm() {

    const context = useContext(ReportFormContext);
    if (!context) throw new Error("error custom hook");

    return context;

}