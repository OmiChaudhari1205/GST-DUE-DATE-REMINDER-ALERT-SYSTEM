function getGSTReminderTemplate(data) {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">

    <div style="background-color: #0d6efd; color: white; padding: 15px; text-align: center;">
      <h2>GST Due Date Reminder</h2>
    </div>

    <div style="padding: 20px;">

      <p>Dear <strong>${data.userName}</strong>,</p>

      <p>
        This is a friendly reminder that your GST return filing due date is approaching.
        Please review the details below and ensure timely filing.
      </p>

      <table style="width:100%; border-collapse: collapse; margin-top:15px;">
        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Business Name</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${data.businessName}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>GSTIN</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${data.gstin}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Return Type</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${data.returnType}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Filing Frequency</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${data.filingFrequency}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Due Date</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${data.dueDate}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Reminder Days</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${data.reminderDays} Days Before</td>
        </tr>
      </table>

      <div style="margin-top:20px; padding:15px; background:#fff3cd; border-left:5px solid #ffc107;">
        <strong>Reminder:</strong><br>
        Please file your GST return before the due date to avoid late fees, penalties, and interest.
      </div>

      <p style="margin-top:25px;">
        Thank you for using the <strong>GST Due Date Reminder & Alert System</strong>.
      </p>

      <p>
        Regards,<br>
        <strong>GST Due Date Reminder & Alert System</strong>
      </p>

    </div>

  </div>
  `;
}

module.exports = getGSTReminderTemplate;