-- CreateTable
CREATE TABLE "users" (
    "uid" SERIAL NOT NULL,
    "uname" CHAR(20),
    "email" VARCHAR(30),
    "password" VARCHAR(13),
    "phone" CHAR(10),
    "role" CHAR(20),
    "createdat" TIMESTAMP(6),
    "updatedat" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "business" (
    "bid" SERIAL NOT NULL,
    "uid" INTEGER,
    "bname" CHAR(30),
    "gstin" VARCHAR(15),
    "ownername" CHAR(20),
    "owstate" CHAR(20),
    "owaddress" VARCHAR(30),
    "bemail" VARCHAR(20),
    "bpassword" VARCHAR(13),
    "bcreatedat" TIMESTAMP(6),

    CONSTRAINT "business_pkey" PRIMARY KEY ("bid")
);

-- CreateTable
CREATE TABLE "GSTFilingProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "gstin" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "filingFrequency" TEXT NOT NULL,
    "reminderDays" INTEGER NOT NULL DEFAULT 3,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GSTFilingProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GSTReminderLog" (
    "id" SERIAL NOT NULL,
    "gstProfileId" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "reminderDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "message" TEXT,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GSTReminderLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GSTFilingProfile_gstin_key" ON "GSTFilingProfile"("gstin");

-- AddForeignKey
ALTER TABLE "GSTFilingProfile" ADD CONSTRAINT "GSTFilingProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GSTReminderLog" ADD CONSTRAINT "GSTReminderLog_gstProfileId_fkey" FOREIGN KEY ("gstProfileId") REFERENCES "GSTFilingProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
