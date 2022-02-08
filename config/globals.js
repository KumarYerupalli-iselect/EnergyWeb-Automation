let HtmlReporter = require('nightwatch-html-reporter');
let reporter = new HtmlReporter({
  openBrowser: true,
  relativeScreenshots: true,
  themeName: 'compact',
  reportsDirectory: __dirname + './../../tests_output/',
});

module.exports = {
  timeoutValue: 50000,
  xtraLongTimeout: 75000,
  password: 'xxxxx',
  userName: 'xxxxx',
  testSearchData: 'xxxxx',
  reporter: reporter.fn,
};

const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
  }
};
