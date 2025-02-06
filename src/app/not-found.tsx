import PageWrapper from "@/components/page-wrapper/page-wrapper";
import stylesheet from "./admin/stylesheet";
import Link from "next/link";

export default function kms() {


    return (
        <PageWrapper
            stylesheet={{
                ...stylesheet,
                justifyContent: "center",
                alignItems: "center",
                gap: 32,
            }}
            title="Destination 404">
            <p className="font-bold text-3xl text-brighten"> 404 </p>
            <p> Invalid Request URI </p>
            <Link
                href={"/home"}
                className="px-8 py-2 rounded-lg font-bold bg-accent"> Home </Link>
        </PageWrapper>
    );
}