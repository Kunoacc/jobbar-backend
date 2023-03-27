/*
  Warnings:

  - You are about to drop the column `profile_id` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `profile_id` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `job_id` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `JobApplication` table. All the data in the column will be lost.
  - You are about to drop the column `profile_id` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionType_id` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_id` on the `SubscriptionPayments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Education" DROP COLUMN "profile_id";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "profile_id";

-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "job_id",
DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "profile_id";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "subscriptionType_id";

-- AlterTable
ALTER TABLE "SubscriptionPayments" DROP COLUMN "subscription_id";
