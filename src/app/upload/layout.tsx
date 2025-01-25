'use client';

import { ReactNode } from "react";
import UploadContextProvider from "./context/upload-context";

export default function layout({ children }: { children: ReactNode }) {


    return (
        <>
            <UploadContextProvider>
                {children}
            </UploadContextProvider>
        </>
    );
}