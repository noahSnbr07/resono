/*
  Warnings:

  - Added the required column `description` to the `artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "artist" ADD COLUMN     "description" TEXT NOT NULL;
