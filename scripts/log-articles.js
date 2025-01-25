const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {

   const selection = {
      title: true,
      body: true,
   }

   try {
      const articles = await db.article.findMany({ select: selection });
      console.table(articles);
      console.log(`count: ${articles.length}`);
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