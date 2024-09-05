/*
  Warnings:

  - Made the column `websiteUrl` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `Business` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Business` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Business_businessEmail_key";

-- DropIndex
DROP INDEX "Business_businessPhone_key";

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "businessLicenseNumber" INTEGER,
ALTER COLUMN "websiteUrl" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;
