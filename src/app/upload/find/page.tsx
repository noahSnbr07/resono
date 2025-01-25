import PageWrapper from "@/components/page-wrapper/page-wrapper";
import Searchbar from "./components/searchbar";
import stylesheet from "../stylesheet";
import Content from "./components/content";

export default async function page() {

    return (
        <PageWrapper
            stylesheet={stylesheet}
            header={<Searchbar />}>
            <Content />
        </PageWrapper>
    );
}