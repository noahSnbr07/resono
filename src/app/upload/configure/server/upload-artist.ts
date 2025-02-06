"use server";

import { artist } from "@prisma/client";

type ArtistInput = Omit<artist, "id" | "created" | "updated" | "songId">;

export default async function uploadArtist(artistData: ArtistInput) {
    console.table(artistData);
}
