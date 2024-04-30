/*
  Warnings:

  - You are about to drop the column `active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_ascii` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_auth_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_backup` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_base32` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_enabled` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_hex` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `otp_verify` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `recover` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `recoverExpiration` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `terms` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedUser` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `RateSettingsDefault` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_otp_backup_key";

-- DropIndex
DROP INDEX "User_otp_verify_key";

-- DropIndex
DROP INDEX "User_recover_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "active",
DROP COLUMN "deleted",
DROP COLUMN "otp_ascii",
DROP COLUMN "otp_auth_url",
DROP COLUMN "otp_backup",
DROP COLUMN "otp_base32",
DROP COLUMN "otp_enabled",
DROP COLUMN "otp_hex",
DROP COLUMN "otp_verified",
DROP COLUMN "otp_verify",
DROP COLUMN "recover",
DROP COLUMN "recoverExpiration",
DROP COLUMN "role",
DROP COLUMN "terms",
DROP COLUMN "verifiedUser";

-- DropTable
DROP TABLE "RateSettingsDefault";
