-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "port" INTEGER NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);
