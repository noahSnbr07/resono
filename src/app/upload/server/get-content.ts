"use server";

import APIArtistResponse from "../types/api-artist-response";
import APISongResponse from "../types/api-song-response";
import { YoutubeSearchResultItem } from "../types/youtube-search-response";

interface GetContentResponse {
   songs: APISongResponse[];
   artists: APIArtistResponse[];
}

export default async function getContent({ query }: { query: string; }): Promise<GetContentResponse> {

   // API key
   const key = process.env.GOOGLE_CLOUD_CONSOLE_API;

   // Results count
   const count = 20;

   // Construct URL
   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query.trim())}&key=${key}&maxResults=${count}`;

   // Parsing response
   const response = await fetch(url);
   const data = await response.json();

   //creating two lists
   const songs: APISongResponse[] = [];
   const artists: APIArtistResponse[] = [];

   //map over the response
   data.items.forEach((item: YoutubeSearchResultItem) => {

      //construct the song from the response
      const song: APISongResponse = {
         videoID: item.id.videoId,
         title: item.snippet.title,
         thumbnail: item.snippet.thumbnails.high.url,
         channel: item.snippet.channelTitle
      };

      //add it to the list
      songs.push(song);

      //extract 2 values
      const artistName = item.snippet.channelTitle;
      const artistThumbnail = item.snippet.thumbnails.default.url;
      const artistID = item.id.videoId

      //filter channels by matching title and name
      if (!artists.some(artist => artist.title === artistName)) {
         artists.push({
            thumbnail: artistThumbnail,
            title: artistName,
            artistID: artistID,
         });
      }
   });

   //returning both lists
   return { songs, artists };
}