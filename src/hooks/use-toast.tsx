import { ToastContext } from "@/context/toast-context";
import { useContext } from "react";

export default function useToast() {

    const context = useContext(ToastContext);
    if (!context) throw new Error("context");
    return context;

}