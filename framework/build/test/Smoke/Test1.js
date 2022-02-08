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
const data = __importStar(require("../../data/HomePageData.json"));
/** Home Page Object */
const HomePage_1 = require("../../page/HomePage");
/**Utils Object */
const helperUtils_1 = require("../../utils/helperUtils");
module.exports = {
    // //Energy Web tests starts here
    // 'TC001 Verify the functionality of iSelect.. always get it right button': function (browser: NightwatchBrowser) {
    //     browser.url(data.TC003Data.iSelectWordPressURL)
    //     home.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle)
    //     home.clickOnElecandGasIcon(browser)
    //     home.enterAddress(browser, data.CommonData.PostCode)
    //     home.clickOnAddressOption(browser)
    //     home.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle)
    //     home.clickOniSelectIconinYourUsagePage(browser)
    //     home.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle)
    // },
    // 'TC002 Verify We compare some of Australias biggest brands section': function (browser : NightwatchBrowser) {
    //     home.validateOurPartnersHeaderDisplayed(browser)
    //     home.validateViewOurPartnersBtnDisplayed(browser)
    //     home.clickOnViewOurPartnersBtn(browser)
    //     home.validateOurPartnersPage(browser)
    // },
    // 'TC003 Verify View Our Partners Page and Partners Displayed on Page': function (browser: NightwatchBrowser) {
    //     home.clickOnViewOurPartnersBtn(browser)
    //     home.validateOurPartnersPage(browser)
    //     home.validateHealthPartnersLogosDisplayed(browser)
    //     home.validateEnergyPartnersLogosDisplayed(browser)
    //     home.validateInternetPartnersLogosDisplayed(browser)
    // },
    // 'TC004 Verify the You may be interested in... section' : function(browser: NightwatchBrowser) {
    //     home.validateYouMightBeInterestHeader(browser)
    //     home.validateLinksPresentInYouMightBeInterSection(browser, data.TC004Data.SolarEnergyBasicsPageTitle, 
    //         data.TC004Data.SwitchElecAndGasPageTitle, data.TC004Data.ElecPlanPageTitle, data.TC004Data.GridConnectPageTitle,
    //         data.TC004Data.SaveEnergyPageTitle)
    // },
    // 'TC005 Verify the Tool tip support center number(131920)' : function (browser: NightwatchBrowser) {
    //     home.validateCallUsToolTip(browser)
    // },
    // 'TC006 Verify the functionality of “Compare Electricity & Gas” button': function (browser : NightwatchBrowser) {
    //     home.moveToBottomofPage(browser)
    //     home.clickAndValidateCompElecandGasBtn(browser)
    // },
    // 'TC007 Verify social media links available at the bottom of the page': function (browser : NightwatchBrowser) {
    //     home.moveToBottomofPage(browser)
    //     home.validateSocialMediaLinks(browser)
    // },
    // 'TC008 Verify the links available below About iSelect': function (browser : NightwatchBrowser) {
    //     home.moveToBottomofPage(browser)
    //     for(let i=0; i<data.TC008Data.AboutIselectLink.length-2; i++){
    //         home.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[i], false)
    //     }
    //     /**For Asserting the Multiple Xpaths*/
    //     home.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[11], true)
    //     home.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[12], true)
    // },
    'TC009 Verify the links available below 2019 Partner Awards': function (browser) {
        HomePage_1.homePage.moveToBottomofPage(browser);
        HomePage_1.homePage.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[0]);
        HomePage_1.homePage.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[1]);
    },
    beforeEach: function (browser) {
        browser
            .resizeWindow(1400, 900)
            .maximizeWindow()
            .timeoutsImplicitWait(30000)
            .url(browser.launch_url);
    },
    afterEach: function (browser) {
        browser.end();
        if (browser.currentTest.results.failed >= 1)
            browser.saveScreenshot('./screenshots/' + helperUtils_1.helperUtils.random(8) + '.png', () => console.log('screenshot catured for the failed test case'));
    },
};
