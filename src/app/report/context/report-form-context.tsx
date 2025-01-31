import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ReportFormContextInterface {
    title: string;
    description: string;
    resolved: boolean;
    important: boolean;
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    setResolved: Dispatch<SetStateAction<boolean>>;
    setImportant: Dispatch<SetStateAction<boolean>>;
}

export const ReportFormContext = createContext<ReportFormContextInterface | null>(null);

export default function ReportFormProvider({ children }: { children: ReactNode }) {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [resolved, setResolved] = useState<boolean>(false);
    const [important, setImportant] = useState<boolean>(false);

    const values: ReportFormContextInterface =
        { title, description, resolved, important, setTitle, setDescription, setResolved, setImportant };

    return (
        <ReportFormContext.Provider value={values}>
            {children}
        </ReportFormContext.Provider>
    );
}