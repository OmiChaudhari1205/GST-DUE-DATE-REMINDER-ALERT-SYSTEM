const prisma = require("../../prismaClient");

exports.createGSTProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const {
            gstin,
            businessName,
            filingFrequency,
            reminderDays,
            isActive
        } = req.body;

        // Validation
        if (
            !gstin ||
            !businessName ||
            !filingFrequency ||
            reminderDays === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "All required fields are mandatory."
            });
        }

        // Check duplicate GSTIN
        const existingProfile = await prisma.gSTFilingProfile.findFirst({
            where: {
                gstin,
                userId
            }
        });

        if (existingProfile) {
            return res.status(409).json({
                success: false,
                message: "GST Profile already exists."
            });
        }

        // Create profile
        const profile = await prisma.gSTFilingProfile.create({
            data: {
                userId,
                gstin,
                businessName,
                filingFrequency,
                reminderDays,
                isActive: isActive ?? true
            }
        });

        return res.status(201).json({
            success: true,
            message: "GST Profile created successfully.",
            data: profile
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};