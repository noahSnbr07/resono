'use server';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import stylesheet from "./stylesheet";
import { redirect } from "next/navigation";
import database from "@/database/database";
import Thumbnail from "./components/thumbnail";
import Credits from "./components/credits";
import Controls from "./components/controls";
import { SearchParams } from "@/types/SearchParams";

export default async function page(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams;
    const id = searchParams.id;

    const song = await database.song.findUnique({ where: { id: String(id) } });
    if (!song) redirect("not-found");

    const artist = await database.artist.findUnique({ where: { id: song.artistId }, select: { title: true } });
    if (!artist) redirect("not-found");

    return (
        <PageWrapper stylesheet={stylesheet}>
            <Thumbnail
                url={song.thumbnail}
                title={song.title}
            />
            <div className="flex gap-2 flex-col w-full xl:w-1/4">
                <Credits
                    title={song.title}
                    artist={artist.title}
                />
                <Controls />
            </div>
        </PageWrapper>
    );
}