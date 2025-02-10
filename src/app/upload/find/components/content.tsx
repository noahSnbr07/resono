"use client";
import useUploadContext from "../../hooks/useUploadContext";
import APISongResponse from "../../types/api-song-response";
import APIArtistResponse from "../../types/api-artist-response";
import Song from "./song";
import Artist from "./artist";

export default function Content() {
    const { songs, artists } = useUploadContext();

    return (
        <div className="overflow-y-scroll h-dvh">
            <p className="text-xl font-bold"> Songs - {songs.length} </p>
            {songs.map((song: APISongResponse, i: number) => <Song song={song} index={i} />)}
            <p className="text-xl font-bold"> Artists - {artists.length} </p>
            {artists.map((artist: APIArtistResponse, i: number) => <Artist artist={artist} index={i} />)}
        </div>
    );
}