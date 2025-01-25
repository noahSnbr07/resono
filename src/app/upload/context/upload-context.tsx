import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import APISongResponse from "../types/api-song-response";
import APIArtistResponse from "../types/api-artist-response";

interface UploadContextInterface {
    songs: APISongResponse[];
    setSongs: Dispatch<SetStateAction<APISongResponse[]>>;
    artists: APIArtistResponse[];
    setArtists: Dispatch<SetStateAction<APIArtistResponse[]>>;
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}

export const UploadContext = React.createContext<UploadContextInterface | null>(null);

export default function UploadContextProvider({ children }: { children: ReactNode }) {

    const [songs, setSongs] = useState<APISongResponse[]>([]);
    const [artists, setArtists] = useState<APIArtistResponse[]>([]);
    const [query, setQuery] = useState("");

    const values = { songs, artists, query, setSongs, setArtists, setQuery };

    return (
        <UploadContext.Provider value={values}>
            {children}
        </UploadContext.Provider>
    );
}