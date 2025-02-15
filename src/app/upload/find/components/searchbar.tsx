import Image from "next/image";
import { search } from "@/assets/assets";
import Form from 'next/form'

export default function Searchbar() {
    return (
        <Form
            action={`/upload/find`}
            replace
            className="flex flex-1 rounded-lg h-8"
        >
            <input
                name="query"
                placeholder="What do you want to listen to?"
                className="flex-1 px-2 bg-transparent"
            />
            <button
                type="submit"
                className="aspect-square">
                <Image
                    src={search}
                    height={24}
                    width={24}
                    alt="Search Icon"
                    title="Search Icon"
                />
            </button>
        </Form>
    );
}