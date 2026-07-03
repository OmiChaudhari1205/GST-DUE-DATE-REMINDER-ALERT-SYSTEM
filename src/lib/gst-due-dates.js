// GST Return Types
const GST_RETURN_TYPES = {
  GSTR1_MONTHLY: {
    name: "GSTR-1 (Monthly)",
    dueDay: 11,
    frequency: "MONTHLY"
  },

  GSTR1_QUARTERLY: {
    name: "GSTR-1 (Quarterly)",
    dueDay: 13,
    frequency: "QUARTERLY"
  },

  GSTR3B: {
    name: "GSTR-3B",
    dueDay: 20,
    frequency: "MONTHLY"
  }
};

// Reminder days before due date
const REMINDER_SCHEDULE_DAYS = [7, 3, 1];

module.exports = {
  GST_RETURN_TYPES,
  REMINDER_SCHEDULE_DAYS
};