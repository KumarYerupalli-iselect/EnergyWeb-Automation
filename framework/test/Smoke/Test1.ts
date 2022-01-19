import * as data from '../../data/HomePageData.json';
import { NightwatchBrowser } from "nightwatch";
import HomePage from "../../page/HomePage";
import Util from '../../utils/Util';
const home = new HomePage();
const util = new Util();


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

    'TC009 Verify the links available below 2019 Partner Awards': function (browser : NightwatchBrowser) {
        home.moveToBottomofPage(browser)
        home.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[0])
        home.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[1])
    },

    beforeEach: function (browser: NightwatchBrowser) {
        browser
            .resizeWindow(1400,900)
            .maximizeWindow()
            .timeoutsImplicitWait(30000)
            .url(browser.launch_url)
    },

    afterEach: function (browser: NightwatchBrowser) {
        browser.end()
        if (browser.currentTest.results.failed >= 1)
            browser.saveScreenshot('./screenshots/'+util.random(8)+'.png',() => console.log('screenshot catured for the failed test case'));
    },
};