import PageWrapper from "@/components/page-wrapper/page-wrapper";
import Searchbar from "./components/searchbar";
import stylesheet from "../stylesheet";
import Content from "./components/content";
import getContent from "../server/get-content";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
    const { query } = await searchParams || "";

    const { songs, artists } = await getContent({ query: String(query) });

    return (
        <PageWrapper stylesheet={stylesheet} header={<Searchbar />}>
            <Content songs={songs} artists={artists} />
        </PageWrapper>
    );
}