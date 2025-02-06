'use server';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { redirect } from "next/navigation";
import getDetailedArtistMetaData from "../server/get-detailed-artist-meta";
import Banner from "./components/banner";
import stylesheet from "./stylesheet";
import Intro from "./components/intro";
import BackgroundWrapper from "./components/background";
import UploadButton from "./components/upload-button";

export default async function Page({ searchParams }: { searchParams: { id?: string } }) {
    const id = searchParams.id;

    // If `id` is missing, redirect to a "not found" page
    if (!id) {
        return redirect("/not-found");
    }

    // Fetch detailed artist metadata
    const artist = await getDetailedArtistMetaData(id);

    // If artist data doesn't exist, redirect
    if (!artist) {
        return redirect("/not-found");
    }

    // Render the page with the fetched artist data
    return (
        <PageWrapper
            title={artist.title}
            stylesheet={stylesheet}
        >
            <BackgroundWrapper
                url={artist.banner}
            >
                <div>
                    <Banner
                        title={artist.title}
                        url={artist.banner}
                    />
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