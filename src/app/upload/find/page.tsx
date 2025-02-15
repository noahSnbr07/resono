import PageWrapper from "@/components/page-wrapper/page-wrapper";
import Searchbar from "./components/searchbar";
import stylesheet from "../stylesheet";
import Content from "./components/content";
import getContent from "../server/get-content";
import { SearchParams } from "@/types/SearchParams";

export default async function page(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams;
    const query = searchParams.query;

    const { songs, artists } = await getContent({ query: String(query) });

    return (
        <PageWrapper stylesheet={stylesheet} header={<Searchbar />}>
            <Content songs={songs} artists={artists} />
        </PageWrapper>
    );
}