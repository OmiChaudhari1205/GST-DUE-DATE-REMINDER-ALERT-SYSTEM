const prisma = require("./prismaClient");

async function createGSTProfile() {
  try {
    const profile = await prisma.gSTFilingProfile.create({
      data: {
        userId: 1,
        gstin: "24ABCDE1234F1Z5",
        businessName: "Aline Pvt Ltd",
        filingFrequency: "Monthly",
        reminderDays: 4
      }
    });

    console.log(profile);
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

createGSTProfile();