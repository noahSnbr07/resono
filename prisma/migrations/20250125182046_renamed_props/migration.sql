/*
  Warnings:

  - You are about to drop the column `cover_url` on the `artist` table. All the data in the column will be lost.
  - You are about to drop the column `audio_Url` on the `song` table. All the data in the column will be lost.
  - You are about to drop the column `cover_url` on the `song` table. All the data in the column will be lost.
  - Added the required column `thumbnail` to the `artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audio` to the `song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "artist" DROP COLUMN "cover_url",
ADD COLUMN     "thumbnail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "song" DROP COLUMN "audio_Url",
DROP COLUMN "cover_url",
ADD COLUMN     "audio" TEXT NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL;
