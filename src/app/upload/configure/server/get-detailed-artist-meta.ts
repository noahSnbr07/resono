"use server";

interface DetailedArtist {
    title: string;
    description: string;
    banner: string;
    thumbnail: string;
    listeners: number;
    uploads: number;
}

export default async function getDetailedArtistMetaData(artistID: string): Promise<DetailedArtist | undefined> {

    const apiKey = process.env.GOOGLE_CLOUD_CONSOLE_API;
    const channelId = artistID;

    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics,brandingSettings,snippet&id=${channelId}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {

            const channel = data.items[0];

            const title = channel.snippet.title;
            const description = channel.snippet.description;
            const banner = channel.brandingSettings?.image?.bannerExternalUrl;
            const thumbnail =
                channel.snippet.thumbnails.high.url ||
                channel.snippet.thumbnails.medium.url ||
                channel.snippet.thumbnails.default.url;
            const listeners = Number(channel.statistics.subscriberCount);
            const uploads = Number(channel.statistics.videoCount);


            return { banner, thumbnail, title, description, listeners, uploads }
        } else {
            console.error('No channel found or invalid response data');
        }
    } catch (error) {
        console.error('Error fetching YouTube channel data:', error);
    }
}