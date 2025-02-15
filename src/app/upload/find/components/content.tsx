import APISongResponse from "../../types/api-song-response";
import APIArtistResponse from "../../types/api-artist-response";
import Song from "./song";
import Artist from "./artist";

interface ContentProps {
    songs: APISongResponse[];
    artists: APIArtistResponse[];
}

export default function Content({ songs, artists }: ContentProps) {

    return (
        <div className="overflow-y-scroll h-dvh">
            <p className="text-xl font-bold"> Songs - {songs.length} </p>
            {songs.map((song: APISongResponse, i: number) => <Song key={i} song={song} index={i} />)}
            <p className="text-xl font-bold"> Artists - {artists.length} </p>
            {artists.map((artist: APIArtistResponse, i: number) => <Artist key={i} artist={artist} index={i} />)}
        </div>
    );
}