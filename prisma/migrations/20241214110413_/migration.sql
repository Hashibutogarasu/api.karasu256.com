/*
  Warnings:

  - You are about to drop the column `prismaUserId` on the `UserProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[supabaseUserId]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `supabaseUserId` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserProfile_prismaUserId_key";

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "prismaUserId",
ADD COLUMN     "supabaseUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_supabaseUserId_key" ON "UserProfile"("supabaseUserId");
