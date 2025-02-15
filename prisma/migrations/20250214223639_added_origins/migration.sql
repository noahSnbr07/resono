/*
  Warnings:

  - Added the required column `originId` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originId` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "originId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "originId" TEXT NOT NULL;
