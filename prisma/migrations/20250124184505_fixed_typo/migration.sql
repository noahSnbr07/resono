/*
  Warnings:

  - You are about to drop the column `tag` on the `article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "article" DROP COLUMN "tag",
ADD COLUMN     "tags" TEXT[];
