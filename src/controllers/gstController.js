const prisma = require("../../prismaClient");
console.log("DATABASE_URL:", process.env.DATABASE_URL);

exports.getUpcomingDeadlines = async (req, res) => {
    try {
        await prisma.$connect();
        console.log("✅ Prisma connected inside controller");
        const userId = req.user.id;
        const deadlines = await prisma.gSTReminderLog.findMany({
            where: {
                dueDate: {
                    gte: new Date()
                },
                gstProfile: {
                    userId: userId
                }
            },
            orderBy: {
                dueDate: "asc"
            },
            include: {
                gstProfile: {
                    select: {
                        gstin: true,
                        businessName: true,
                        filingFrequency: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            count: deadlines.length,
            data: deadlines
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};