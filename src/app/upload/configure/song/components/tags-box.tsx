export default async function TagsBox({ tags }: { tags: string[] }) {


    return (
        <div className="bg-stack flex flex-col gap-4 rounded-lg p-4">
            <p className="text-xl font-bold"> Tags </p>
            <div className="flex-1 flex rounded-lg gap-2 flex-wrap overflow-y-scroll max-h-64">
                {tags.map((tag: string, i: number) => (
                    <div
                        key={i}
                        className="px-2 py-1 text-sm bg-stack rounded-full">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}