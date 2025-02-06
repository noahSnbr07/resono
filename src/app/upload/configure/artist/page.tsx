'use server';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { redirect } from "next/navigation";
import getDetailedArtistMetaData from "../server/get-detailed-artist-meta";
import Banner from "./components/banner";
import stylesheet from "./stylesheet";
import Intro from "./components/intro";
import BackgroundWrapper from "./components/background";
import UploadButton from "./components/upload-button";

type SearchParamsType = {
    searchParams: Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: SearchParamsType) {


    const { id } = await searchParams;


    //retrieve artist meta data via params
    const artist = await getDetailedArtistMetaData(String(id));

    //early return if no params
    if (!id || !artist) redirect("/not-found");


    return (
        <PageWrapper
            title={artist.title}
            stylesheet={stylesheet}>
            <BackgroundWrapper
                url={artist.banner}>
                <div>
                    <Banner
                        title={artist?.title}
                        url={artist?.banner} />
                    <Intro artist={artist} />
                </div>
                <UploadButton
                    banner={artist.banner}
                    thumbnail={artist.thumbnail}
                    title={artist.title}
                    description={artist.description}
                    listeners={artist.listeners}
                    uploads={artist.uploads}
                />
            </BackgroundWrapper>
        </PageWrapper>
    );
}