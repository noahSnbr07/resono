'use server';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import stylesheet from "../stylesheet";
import getDetailedArtistMetaData from "./server/get-detailed-artist-meta";

export default async function page() {

    await getDetailedArtistMetaData("L3vjm1gybU4")


    return (
        <PageWrapper
            stylesheet={stylesheet}>
        </PageWrapper>
    );
}