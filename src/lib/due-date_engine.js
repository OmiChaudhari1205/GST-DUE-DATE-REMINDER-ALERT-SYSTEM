const GST_DUE_DATES = require("./gst-due-dates");

function getCurrentQuarter(month) {
    if (month >= 1 && month <= 3) return "Q4";
    if (month >= 4 && month <= 6) return "Q1";
    if (month >= 7 && month <= 9) return "Q2";
    return "Q3";
}

function getMonthlyDueDate(day) {
    const today = new Date();

    return new Date(
        today.getFullYear(),
        today.getMonth(),
        day
    );
}

function getQuarterlyDueDate(returnType) {
    const month = new Date().getMonth() + 1;
    const quarter = getCurrentQuarter(month);

    return new Date(
        GST_DUE_DATES[returnType].QUARTERLY[quarter]
    );
}

function getUpcomingDueDates(filingFrequency) {

    const dueDates = [];

    if (filingFrequency === "Monthly") {

        dueDates.push({
            returnType: "GSTR1",
            dueDate: getMonthlyDueDate(
                GST_DUE_DATES.GSTR1.MONTHLY
            )
        });

        dueDates.push({
            returnType: "GSTR3B",
            dueDate: getMonthlyDueDate(
                GST_DUE_DATES.GSTR3B.MONTHLY
            )
        });

    } else {

        dueDates.push({
            returnType: "GSTR1",
            dueDate: getQuarterlyDueDate("GSTR1")
        });

        dueDates.push({
            returnType: "GSTR3B",
            dueDate: getQuarterlyDueDate("GSTR3B")
        });

    }

    return dueDates;
}

module.exports = {
    getUpcomingDueDates,
    getMonthlyDueDate,
    getQuarterlyDueDate,
    getCurrentQuarter
};