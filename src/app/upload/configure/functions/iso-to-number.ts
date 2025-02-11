"use server";

export default async function ISOToNumber(iso: string): Promise<number> {
    const match = iso.match(/PT(\d+M)?(\d+S)?/);
    if (!match) return 0;
    const minutes = match[1] ? parseInt(match[1]) : 0;
    const seconds = match[2] ? parseInt(match[2]) : 0;
    return minutes * 60 + seconds;
}