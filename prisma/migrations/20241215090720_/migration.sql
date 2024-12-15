/*
  Warnings:

  - You are about to drop the `_UserFollowing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserFollowing" DROP CONSTRAINT "_UserFollowing_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollowing" DROP CONSTRAINT "_UserFollowing_B_fkey";

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "followers" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "following" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- DropTable
DROP TABLE "_UserFollowing";
