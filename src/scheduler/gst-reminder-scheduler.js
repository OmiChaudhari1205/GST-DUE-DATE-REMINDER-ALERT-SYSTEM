const cron = require("node-cron");
const runGSTReminderJob = require("../jobs/gst-reminder-jobs");


cron.schedule("* * * * *", async () => {
    console.log("==================================");
    console.log("Running GST Reminder Scheduler...");
    console.log("11/07/2026 , 12:56:00 pm");

    await runGSTReminderJob();

    console.log("GST Reminder Job Completed.");
    console.log("==================================");
});

console.log("GST Reminder Scheduler Started...");