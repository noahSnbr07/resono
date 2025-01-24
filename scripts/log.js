const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {

   try {

   } finally {
      await db.$disconnect();
      console.log("Database disconnected.");
   }
}

main()
   .catch((err) => {
      console.error("An error occurred:", err);
      process.exit(1);
   });

process.on("SIGINT", async () => {
   console.log("Shutting down...");
   await db.$disconnect();
   process.exit(0);
});