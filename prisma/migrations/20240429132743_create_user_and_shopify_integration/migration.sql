-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "otp_enabled" BOOLEAN NOT NULL DEFAULT false,
    "otp_verified" BOOLEAN NOT NULL DEFAULT false,
    "otp_ascii" TEXT,
    "otp_hex" TEXT,
    "otp_base32" TEXT,
    "otp_auth_url" TEXT,
    "otp_backup" TEXT,
    "otp_verify" TEXT,
    "terms" BOOLEAN NOT NULL DEFAULT false,
    "verifiedUser" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "recover" TEXT,
    "recoverExpiration" TIMESTAMP(3),
    "shopifyIntegrationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopifyIntegration" (
    "id" TEXT NOT NULL,
    "shopify_token" TEXT NOT NULL,
    "shopify_api_secret" TEXT NOT NULL,
    "shopify_store_name" TEXT NOT NULL,
    "active_checkout_gateway" BOOLEAN NOT NULL DEFAULT true,
    "skip_shopify_cart" BOOLEAN NOT NULL DEFAULT true,
    "integration_status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopifyIntegration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_otp_backup_key" ON "User"("otp_backup");

-- CreateIndex
CREATE UNIQUE INDEX "User_otp_verify_key" ON "User"("otp_verify");

-- CreateIndex
CREATE UNIQUE INDEX "User_recover_key" ON "User"("recover");

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyIntegration_shopify_token_key" ON "ShopifyIntegration"("shopify_token");

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyIntegration_shopify_api_secret_key" ON "ShopifyIntegration"("shopify_api_secret");

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyIntegration_shopify_store_name_key" ON "ShopifyIntegration"("shopify_store_name");
