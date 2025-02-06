/*
  Warnings:

  - Added the required column `listeners` to the `artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploads` to the `artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "artist" ADD COLUMN     "listeners" INTEGER NOT NULL,
ADD COLUMN     "uploads" INTEGER NOT NULL;
