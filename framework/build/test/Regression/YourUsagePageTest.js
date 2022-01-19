"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** Data Object */
const data = __importStar(require("../../data/HomePageData.json"));
/** Home Page Object */
const HomePage_1 = __importDefault(require("../../page/HomePage"));
const home = new HomePage_1.default();
/**Utils Object */
const Util_1 = __importDefault(require("../../utils/Util"));
const util = new Util_1.default();
/** Your Usage Page Object */
const YourUsagePage_1 = require("../../page/YourUsagePage");
module.exports = {
    /**
     * Test cases Covered : Verify contact number on the header
                            Verify "Opening Hours" link
     */
    '@disabled': false,
    '@tags': ['TC010'],
    'TC010 Verify the Contact Us Section in Your Usage Page': (browser) => {
        home.enterAddress(browser, data.CommonData.PostCode);
        home.clickOnAddressOption(browser);
        home.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
        YourUsagePage_1.yourUsagePage.validateCallUsSection(browser);
    },
    /**
     * Runs Before Each Test Case
     * @param browser NightWatch Browser
     */
    beforeEach: function (browser) {
        browser
            .resizeWindow(1400, 900)
            .maximizeWindow()
            .timeoutsImplicitWait(30000)
            .url(browser.launch_url);
    },
    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser) {
        browser.end();
        if (browser.currentTest.results.failed >= 1)
            browser.saveScreenshot('./screenshots/' + util.random(8) + '.png', () => console.log('screenshot catured for the failed test case'));
    },
};
