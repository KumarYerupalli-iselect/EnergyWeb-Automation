let HtmlReporter = require("nightwatch-html-reporter"),
  reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + "/reports",
    reportFilename: "EnergyWeb-TestReport.html",
    themeName: "compact",
    relativeScreenshots: true,
    //uniqueFilename: false,
    //separateReportPerSuite: true,
  });

module.exports = {
  write: function (results, options, done) {
    reporter.fn(results, done);
  },
};
