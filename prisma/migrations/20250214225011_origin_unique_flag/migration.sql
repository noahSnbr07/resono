/*
  Warnings:

  - A unique constraint covering the columns `[originId]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[originId]` on the table `Song` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Artist_originId_key" ON "Artist"("originId");

-- CreateIndex
CREATE UNIQUE INDEX "Song_originId_key" ON "Song"("originId");
