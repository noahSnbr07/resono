"use server";

export default async function getDetailedArtistMetaData(artistID: string) {

    const apiKey = process.env.GOOGLE_CLOUD_CONSOLE_API;
    const channelId = artistID;

    const url = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const channel = data.items[0];
            const bannerUrl = channel.brandingSettings?.image?.bannerExternalUrl;

            console.log('Banner URL:', bannerUrl);
            return bannerUrl;
        } else {
            console.error('No channel found or invalid response data');
        }
    } catch (error) {
        console.error('Error fetching YouTube channel data:', error);
    }
}