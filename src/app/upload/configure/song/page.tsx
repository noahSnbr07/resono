import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { redirect } from "next/navigation";
import stylesheet from "../../stylesheet";
import getDetailedSongMeta from "../server/get-detailed-song-meta";
import SongPreview from "./components/song-preview";
import TagsBox from "./components/tags-box";
import ExplicitIndicator from "./components/explicit-indicator";
import UploadButton from "./components/upload-button";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function page({ searchParams }: { searchParams: SearchParams }) {
    const id = searchParams?.id;
    if (!id || id.length < 1) return redirect("/not-found");

    const song = await getDetailedSongMeta(String(id));
    if (!song) return redirect("/not-found");

    return (
        <PageWrapper
            stylesheet={stylesheet}
            title={song.title}>
            <SongPreview title={song.title}
                artist={song.artist.title}
                cover={song.thumbnail} />
            <TagsBox
                tags={song.tags} />
            <ExplicitIndicator
                isExplicit={song.explicit} />
            <UploadButton />
        </PageWrapper>
    );
}