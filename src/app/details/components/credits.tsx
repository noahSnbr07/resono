'use server';
export default async function Credits({ title, artist }: { title: string; artist: string; }) {


    return (
        <div className="flex flex-col gap-1 w-full">
            <p className="text-xl font-bold truncate"> {title} </p>
            <p className="text-brighten truncate"> {artist} </p>
        </div>
    );
}