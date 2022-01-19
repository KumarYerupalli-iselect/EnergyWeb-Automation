var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');

module.exports = {
  write : function(results, options, done) {

    let testcases=[];
    let files=Object.keys(results.modules);
    for(let file of files){
      let tcs=Object.keys(results.modules[file]["completed"]);
      for(let tc of tcs){
        let t={};
        t["testScenario"]=file;
        t["testCase"]=tc;
        t["time"]=results.modules[file]["completed"][tc]["time"];
        t["passed"]=results.modules[file]["completed"][tc]["passed"];
        t["failed"]=results.modules[file]["completed"][tc]["failed"];
        console.log(tc);
        testcases.push(t);
      }
    }
    console.log(testcases);

    var day = new Date();
    let monthNames =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let currDate = day.getDate() + "-" + monthNames[day.getMonth()] + "-" + day.getFullYear();
    let time = '[' + day.getHours() + ' Hr ' + day.getMinutes() + ' Min ]';
    var reportFilename = 'Energy-Web TestReport ' + currDate + ' ' + time + '.html';
    var reportFilePath = path.join(__dirname, options.output_folder, reportFilename);

    // read the html template
    fs.readFile('html-reporter.hbs', function(err, data) {
      if (err) throw err;

      var template = data.toString();

      // merge the template with the test results data
      var html = handlebars.compile(template)({
        results   : results,
        options   : options,
        timestamp : new Date().toString(),
        browser   : options.filename_prefix.split('_').join(' '),
        total     : results.passed+results.failed,
        testcases : testcases,
        totalTests: results.passed + results.failed + results.errors
      });

      // write the html to a file
      fs.writeFile(reportFilePath, html, function(err) {
        if (err) throw err;
        console.log('Report generated: ' + reportFilePath);
        done();
      });
    });
  }
};