let HtmlReporter = require('nightwatch-html-reporter');
let reporter = new HtmlReporter({
  openBrowser: true,
  relativeScreenshots: true,
  themeName: 'compact',
  reportsDirectory: __dirname + './../../reports/',
});

module.exports = {
  timeoutValue: 50000,
  xtraLongTimeout: 75000,
  password: 'Testing@LL',
  userName: 'test@yopmail.com',
  testSearchData: 'Elon Musk',
  reporter: reporter.fn,
};

const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
  }
};
