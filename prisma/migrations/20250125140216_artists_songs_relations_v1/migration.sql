-- CreateTable
CREATE TABLE "song" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "cover_url" TEXT NOT NULL,
    "audio_Url" TEXT NOT NULL,
    "explicit" BOOLEAN NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artist" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "cover_url" TEXT NOT NULL,
    "songId" TEXT,

    CONSTRAINT "artist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "artist" ADD CONSTRAINT "artist_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE SET NULL ON UPDATE CASCADE;
