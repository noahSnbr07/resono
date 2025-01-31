-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "important" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);
