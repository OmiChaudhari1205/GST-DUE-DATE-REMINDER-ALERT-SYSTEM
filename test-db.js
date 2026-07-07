require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        console.log("DATABASE_URL =", process.env.DATABASE_URL);

        await prisma.$connect();
        console.log("✅ Connected to PostgreSQL");

        const data = await prisma.gSTFilingProfile.findMany();
        console.log(data);

    } catch (err) {
        console.error(err);
    } finally {
        await prisma.$disconnect();
    }
}

main();