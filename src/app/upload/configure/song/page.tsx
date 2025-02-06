'use server';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import stylesheet from "../../stylesheet";

export default async function page() {


    return (
        <PageWrapper
            title="Song"
            stylesheet={stylesheet}>

        </PageWrapper>
    );
}