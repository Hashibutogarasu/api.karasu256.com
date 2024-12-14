/*
  Warnings:

  - A unique constraint covering the columns `[prismaUserId]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `prismaUserId` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "prismaUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_prismaUserId_key" ON "UserProfile"("prismaUserId");
