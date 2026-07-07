require("dotenv").config();

const { Resend } = require("resend");
const getGSTReminderTemplate = require("./src/lib/gst-reminder-template");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  const html = getGSTReminderTemplate({
    userName: "Omi Chaudhari",
    businessName: "Aline Pvt Ltd",
    gstin: "24ABCDE1234F1Z5",
    returnType: "GSTR-3B",
    filingFrequency: "Monthly",
    dueDate: "20 July 2026",
    reminderDays: 3
  });

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Change after verifying your domain
      to: "omichaudhari122005@gmail.com", // Your verified testing email
      subject: "GST Due Date Reminder",
      html: html
    });

    if (error) {
      console.error(" Email sending failed:");
      console.error(error);
      return;
    }

    console.log("Email sent successfully!");
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}

sendTestEmail();