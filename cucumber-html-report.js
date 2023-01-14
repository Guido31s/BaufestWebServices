const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs", // Path of .json file //
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "108"
        },
        device: "Local Test Machine",
        platform: {
            name: "Windows",
            version: "10"
        },
    }
}
)