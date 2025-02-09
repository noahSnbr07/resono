'use client';

import { ReactNode } from "react";
import UploadContextProvider from "./context/upload-context";
import ToastContextProvider from "@/context/toast-context";

export default function layout({ children }: { children: ReactNode }) {


    return (
        <>
            <UploadContextProvider>
                <ToastContextProvider>
                    {children}
                </ToastContextProvider>
            </UploadContextProvider>
        </>
    );
}