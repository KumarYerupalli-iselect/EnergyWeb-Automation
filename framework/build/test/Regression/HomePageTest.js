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
Object.defineProperty(exports, "__esModule", { value: true });
/** Data Object */
const data = __importStar(require("../../data/HomePageData.json"));
/** Home Page Object */
const HomePage_1 = require("../../page/HomePage");
module.exports = {
    /**
     * Test Cases Covered : Verify that the Energy UAT site
                            Verify the functionality of “iSelect” - always get it right button
                            Verify if "Your Usage" page is displayed when clicked on Start button
                            Verify "Your Usage" page header
                            Verify that the "Enter Postcode or suburb” field is displayed to the user
                            Verify that Start button is available beside Postcode field
                            Verify that dropdown list is displayed while entering data in Postcode field
                            Verify that selected value from the dropdown list is populated in the Postcode field
                            Verify that Your Usage page displayed when clicked on Start button
     */
    'TC001_Verify_the_functionality_of_iSelect_always_get_it_right_button': function (browser) {
        browser.url(data.TC003Data.iSelectWordPressURL);
        HomePage_1.homePage.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle);
        HomePage_1.homePage.clickOnElecandGasIcon(browser);
        HomePage_1.homePage.enterAddress(browser, data.CommonData.PostCode);
        HomePage_1.homePage.clickOnAddressOption(browser);
        HomePage_1.homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
        HomePage_1.homePage.clickOniSelectIconinYourUsagePage(browser);
        HomePage_1.homePage.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle);
    },
    /**
     * Test Case Covered : Verify  “We compare some of Australia's biggest brands” section
     */
    'TC002 Verify We compare some of Australias biggest brands section': function (browser) {
        HomePage_1.homePage.validateOurPartnersHeaderDisplayed(browser);
        HomePage_1.homePage.validateViewOurPartnersBtnDisplayed(browser);
        HomePage_1.homePage.clickOnViewOurPartnersBtn(browser);
        HomePage_1.homePage.validateOurPartnersPage(browser);
    },
    /**
     * Test Case Covered : Verify “We compare some of Australia's biggest brands” section
     */
    'TC003 Verify View Our Partners Page and Partners Displayed on Page': function (browser) {
        HomePage_1.homePage.clickOnViewOurPartnersBtn(browser);
        HomePage_1.homePage.validateOurPartnersPage(browser);
        HomePage_1.homePage.validateHealthPartnersLogosDisplayed(browser);
        HomePage_1.homePage.validateEnergyPartnersLogosDisplayed(browser);
        HomePage_1.homePage.validateInternetPartnersLogosDisplayed(browser);
    },
    /**
     * Test Case Covered : Verify the “You may be interested in...” section
     */
    'TC004 Verify the You may be interested in... section': function (browser) {
        HomePage_1.homePage.validateYouMightBeInterestHeader(browser);
        HomePage_1.homePage.validateLinksPresentInYouMightBeInterSection(browser, data.TC004Data.SolarEnergyBasicsPageTitle, data.TC004Data.SwitchElecAndGasPageTitle, data.TC004Data.ElecPlanPageTitle, data.TC004Data.GridConnectPageTitle, data.TC004Data.SaveEnergyPageTitle);
    },
    /**
     * Test Case Covered : Verify the Tool tip support center number(131920)
     */
    'TC005 Verify the Tool tip support center number(131920)': function (browser) {
        HomePage_1.homePage.validateCallUsToolTip(browser);
    },
    /**
     * Test Case Covered : Verify the functionality of “Compare Electricity & Gas” button
     */
    'TC006 Verify the functionality of “Compare Electricity & Gas” button': function (browser) {
        HomePage_1.homePage.moveToBottomofPage(browser);
        HomePage_1.homePage.clickAndValidateCompElecandGasBtn(browser);
    },
    /**
     * Test Case Covered : Verify social media links available at the bottom of the page
     */
    'TC007 Verify social media links available at the bottom of the page': function (browser) {
        HomePage_1.homePage.moveToBottomofPage(browser);
        HomePage_1.homePage.validateSocialMediaLinks(browser);
    },
    /**
     * Test Case Covered : Verify the links available below "About iSelect"
     */
    'TC008 Verify the links available below About iSelect': function (browser) {
        HomePage_1.homePage.moveToBottomofPage(browser);
        for (let i = 0; i < data.TC008Data.AboutIselectLink.length - 2; i++) {
            HomePage_1.homePage.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[i], false);
        }
        /**For Asserting the Multiple Xpaths*/
        HomePage_1.homePage.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[11], true);
        HomePage_1.homePage.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[12], true);
    },
    /**
     * Test Case Covered : Verify the links available below "2019 Partner Awards"
     */
    'TC009 Verify the links available below 2019 Partner Awards': function (browser) {
        HomePage_1.homePage.moveToBottomofPage(browser);
        HomePage_1.homePage.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[0]);
        HomePage_1.homePage.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[1]);
    },
    /**
     * Runs Before Each Test Case
     * @param browser NightWatch Browser
     */
    beforeEach: function (browser) {
        browser
            .resizeWindow(1400, 900)
            .maximizeWindow()
            .timeoutsImplicitWait(20000)
            .url(browser.launch_url);
        browser.globals.abortOnAssertionFailure = false;
    },
    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser) {
        // if (browser.currentTest.results.failed >= 1)
        //     browser.saveScreenshot('./screenshots/'+util.random(8)+'.png',() => console.log('screenshot catured for the failed test case'));
        browser.end();
    },
};
