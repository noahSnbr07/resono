/*
  Warnings:

  - The `tag` column on the `article` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "article" DROP COLUMN "tag",
ADD COLUMN     "tag" TEXT[];
