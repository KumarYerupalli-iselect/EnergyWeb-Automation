const path = require('path');

module.exports = {

  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.

  src_folders: ["./framework/build/test/Regression"],
  custom_commands_path: [
    'node_modules/nightwatch-vrt/commands',
  ],
  custom_assertions_path: [
    'node_modules/nightwatch-vrt/assertions',
  ],
   globals_path : "../config/global.js",

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  test_settings: {
    uat: {
      screenshots : {
        "enabled" : true,
        "on_failure" : true,
        "path" : "./screens"
      },
      launch_url: 'https://wwwuat.iselect.com.au/energy/',
      skip_testcases_on_fail: false,
      globals: {
        "visual_regression_settings": {
          "generate_screenshot_path": generateScreenshotFilePath,
          "latest_screenshots_path": "./framework/vrt/latest",
          "latest_suffix": "",
          "baseline_screenshots_path": "./framework/vrt/baseline",
          "baseline_suffix": "",
          "diff_screenshots_path": "./framework/vrt/diff",
          "diff_suffix": "",
          "threshold": 0,
          "prompt": false,
          "always_save_diff_screenshot": process.env.UPDATE == 1,
        },

      },

      desiredCapabilities: {
        browserName: 'chrome',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'goog:chromeOptions': {
            "w3c": true,
            args: [
              // '-headless',
              // '-verbose'
            ],
            
          }
        }
      }
    },

    prod: {
      screenshots : {
        "enabled" : true,
        "on_failure" : true,
        "path" : "./screens"
      },
      launch_url: 'https://www.iselect.com.au/energy/',
      skip_testcases_on_fail: false,
      globals: {
        "visual_regression_settings": {
          "generate_screenshot_path": generateScreenshotFilePath,
          "latest_screenshots_path": "./framework/vrt/latest",
          "latest_suffix": "",
          "baseline_screenshots_path": "./framework/vrt/baseline",
          "baseline_suffix": "",
          "diff_screenshots_path": "./framework/vrt/diff",
          "diff_suffix": "",
          "threshold": 0,
          "prompt": false,
          "always_save_diff_screenshot": process.env.UPDATE == 1,
        },

      },
      desiredCapabilities: {
        browserName: 'chrome',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'goog:chromeOptions': {
            "w3c": true,
            args: [
              // '-headless',
              // '-verbose'
            ],
            
          }
        }
      }
    }


  }
};

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
  const moduleName = nightwatchClient.currentTest.module,
    testName = nightwatchClient.currentTest.name

  return path.join(process.cwd(), basePath, moduleName, testName, fileName)
}