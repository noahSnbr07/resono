'use server';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { redirect } from "next/navigation";
import getDetailedArtistMetaData from "../server/get-detailed-artist-meta";
import Banner from "./components/banner";
import stylesheet from "./stylesheet";
import Intro from "./components/intro";
import BackgroundWrapper from "./components/background";
import UploadButton from "./components/upload-button";
import { SearchParams } from "@/types/SearchParams";


export default async function page({ searchParams }: { searchParams: SearchParams }) {
    const { id } = await searchParams;
    if (!id || id.length < 1) return redirect("/not-found");


    const artist = await getDetailedArtistMetaData(String(id));
    if (!artist) return redirect("/not-found");


    return (
        <PageWrapper
            title={artist.title}
            stylesheet={stylesheet}>
            <BackgroundWrapper
                url={artist.banner}>
                <div>
                    <Banner
                        title={artist.title}
                        url={artist.banner} />
                    <Intro artist={artist} />
                </div>
                <UploadButton />
            </BackgroundWrapper>
        </PageWrapper>
    );
}