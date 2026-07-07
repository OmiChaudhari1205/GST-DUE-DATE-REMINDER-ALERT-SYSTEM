const {
    getUpcomingDueDates
} = require("./src/lib/due-date_engine");

console.log("Monthly Filing");
console.log(getUpcomingDueDates("Monthly"));

console.log();

console.log("Quarterly Filing");
console.log(getUpcomingDueDates("Quarterly"));