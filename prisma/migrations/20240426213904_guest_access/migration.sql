/*
  Warnings:

  - Added the required column `auxField` to the `Access` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nanouuid` to the `Guest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Access" ADD COLUMN     "auxField" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "nanouuid" TEXT NOT NULL;
