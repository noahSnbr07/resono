import { useContext } from "react";
import { UploadContext } from "../context/upload-context";

export default function useUploadContext() {

    const context = useContext(UploadContext);
    if (!context) throw new Error("error");
    return context;
}