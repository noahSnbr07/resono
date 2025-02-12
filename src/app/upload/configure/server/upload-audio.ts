"use server";

import supabase from "../../../../../supabase/supabase.config";

export default async function uploadAudio(id: string): Promise<string | null> {
    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '21842dbbf9mshc14bbafcc241eefp14a072jsn05068eb957a1',
            'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        //refetch file
        const audioResponse = await fetch(result.link);
        const audioBlob = await audioResponse.blob();

        const { data, error } = await supabase
            .storage
            .from("audio")
            .upload(`/${id}`, audioBlob, {
                upsert: false,
            });
        console.log({ data, error });

        return data?.fullPath || "";

    } catch (error) {
        console.error(error);
    }

    return null;
}