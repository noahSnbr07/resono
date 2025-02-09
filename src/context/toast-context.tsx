import React, { ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";

interface ToastContextInterface {
    error: (message: string) => void;
    success: (message: string) => void;
    info: (message: string) => void;
}

export const ToastContext = React.createContext<ToastContextInterface | null>(null);

export default function ToastContextProvider({ children }: { children: ReactNode }) {

    function error(message: string) {
        toast.error(message);
    }
    function success(message: string) {
        toast.success(message);
    }
    function info(message: string) {
        toast.info(message);
    }

    const values = { error, success, info };

    return (
        <ToastContext value={values}>
            {children}
            <ToastContainer
                theme="dark"
                autoClose={3000}
                position="top-center"
            />
        </ToastContext>
    );
}