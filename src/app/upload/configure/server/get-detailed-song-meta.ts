"use server";

import { Artist } from "@prisma/client";
import ISOToNumber from "../functions/iso-to-number";
import getDetailedArtistMetaData from "./get-detailed-artist-meta";

interface DetailedSong {
    thumbnail: string;
    tags: string[];
    title: string;
    explicit: boolean;
    artist: Artist;
    duration: number;
    audio: string;
}

export default async function getDetailedSongMeta(id: string): Promise<DetailedSong> {

    //construct request url
    const apiKey = process.env.GOOGLE_CLOUD_CONSOLE_API;
    const songId = id;
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${songId}&key=${apiKey}`;

    //validate response
    const response = await fetch(url);
    const data = await response.json();

    //destruct parent containers
    const snippet = data.items[0].snippet;
    const contentDetails = data.items[0].contentDetails;
    const thumbnails = snippet.thumbnails

    //extract required data
    const thumbnail =
        thumbnails.maxres?.url ||
        thumbnails.high?.url ||
        thumbnails.medium?.url ||
        thumbnails.standard?.url ||
        thumbnails.default?.url || "";
    const tags = snippet.tags;
    const title = snippet.title;
    const explicit = contentDetails.contentRating.ytRating === "ytAgeRestricted";
    const artist = await getDetailedArtistMetaData(snippet.channelId) as Artist;
    const duration = await ISOToNumber(contentDetails.duration);
    const audio = /*await uploadAudio(id) || "" */ "";

    return { thumbnail, tags, title, explicit, artist, duration, audio };

}