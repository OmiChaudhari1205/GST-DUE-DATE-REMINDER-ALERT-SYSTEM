const prisma = require("../../prismaClient");
const resend = require("../lib/resend");
const getGSTReminderTemplate = require("../lib/gst-reminder-template");
const { getUpcomingDueDates } = require("../lib/due-date_engine");

async function runGSTReminderJob() {
  try {
    console.log("Starting GST Reminder Job...");

    const profiles = await prisma.gSTFilingProfile.findMany({
      where: {
        isActive: true
      },
      include: {
        user: true
      }
    });

    for (const profile of profiles) {

      const dueDates = getUpcomingDueDates(profile.filingFrequency);

      const nextDue = dueDates[0];

      // ==========================
      // Duplicate Protection
      // ==========================

      const existingReminder = await prisma.gSTReminderLog.findFirst({
        where: {
          gstProfileId: profile.id,
          dueDate: nextDue.dueDate
        }
      });

      if (existingReminder) {
        console.log(
          `Reminder already sent for ${profile.businessName}. Skipping...`
        );
        continue;
      }

      // ==========================
      // Generate Email
      // ==========================

      const html = getGSTReminderTemplate({
        userName: profile.user.uname,
        businessName: profile.businessName,
        gstin: profile.gstin,
        returnType: nextDue.returnType,
        filingFrequency: profile.filingFrequency,
        dueDate: nextDue.dueDate.toDateString(),
        reminderDays: profile.reminderDays
      });

      // ==========================
      // Send Email
      // ==========================

      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev", // Replace after verifying domain
        to: "omichaudhari122005@gmail.com",
        subject: `GST Reminder - ${nextDue.returnType}`,
        html
      });

      if (error) {
        console.log(error);

        await prisma.gSTReminderLog.create({
          data: {
            gstProfileId: profile.id,
            dueDate: nextDue.dueDate,
            reminderDate: new Date(),
            status: "Failed",
            message: error.message
          }
        });

        continue;
      }

      // ==========================
      // Save Reminder Log
      // ==========================

      await prisma.gSTReminderLog.create({
        data: {
          gstProfileId: profile.id,
          dueDate: nextDue.dueDate,
          reminderDate: new Date(),
          status: "Sent",
          message: "GST Reminder Email Sent Successfully",
          sentAt: new Date()
        }
      });

      console.log(
        `Reminder sent successfully to ${profile.user.email}`
      );
    }

    console.log("GST Reminder Job Completed.");

  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = runGSTReminderJob;