/** Data Object */
import * as data from '../../data/HomePageData.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Home Page Object */
import HomePage from "../../page/HomePage";
const home = new HomePage();
/**Utils Object */
import Util from '../../utils/Util';
const util = new Util();



module.exports = {

    /**
     * Test Cases Covered : Verify that the Energy UAT site
                            Verify the functionality of “iSelect” - always get it right button
                            Verify if "Your Usage" page is displayed when clicked on Start button
                            Verify "Your Usage" page header
                            Verify that the "Enter Postcode or suburb” field is displayed to the user
                            Verify that Start button is available beside Postcode field
                            Verify that dropdown list is displayed while entering data in Postcode field
     */
    'TC001 Verify the functionality of iSelect.. always get it right button': function (browser: NightwatchBrowser) {
        browser.url(data.TC003Data.iSelectWordPressURL)
        home.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle)
        home.clickOnElecandGasIcon(browser)
        home.enterAddress(browser, data.CommonData.PostCode)
        home.clickOnAddressOption(browser)
        home.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle)
        home.clickOniSelectIconinYourUsagePage(browser)
        home.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle)
    },

    /**
     * Test Case Covered : Verify  “We compare some of Australia's biggest brands” section
     */
    'TC002 Verify We compare some of Australias biggest brands section': function (browser : NightwatchBrowser) {
        home.validateOurPartnersHeaderDisplayed(browser)
        home.validateViewOurPartnersBtnDisplayed(browser)
        home.clickOnViewOurPartnersBtn(browser)
        home.validateOurPartnersPage(browser)
    },

    /**
     * Test Case Covered : Verify “We compare some of Australia's biggest brands” section 
     */
    'TC003 Verify View Our Partners Page and Partners Displayed on Page': function (browser: NightwatchBrowser) {
        home.clickOnViewOurPartnersBtn(browser)
        home.validateOurPartnersPage(browser)
        home.validateHealthPartnersLogosDisplayed(browser)
        home.validateEnergyPartnersLogosDisplayed(browser)
        home.validateInternetPartnersLogosDisplayed(browser)
    },

    /**
     * Test Case Covered : Verify the “You may be interested in...” section 
     */
    'TC004 Verify the You may be interested in... section' : function(browser: NightwatchBrowser) {
        home.validateYouMightBeInterestHeader(browser)
        home.validateLinksPresentInYouMightBeInterSection(browser, data.TC004Data.SolarEnergyBasicsPageTitle, 
            data.TC004Data.SwitchElecAndGasPageTitle, data.TC004Data.ElecPlanPageTitle, data.TC004Data.GridConnectPageTitle,
            data.TC004Data.SaveEnergyPageTitle)
    },

    /**
     * Test Case Covered : Verify the Tool tip support center number(131920)
     */
    'TC005 Verify the Tool tip support center number(131920)' : function (browser: NightwatchBrowser) {
        home.validateCallUsToolTip(browser)
    },

    /**
     * Test Case Covered : Verify the functionality of “Compare Electricity & Gas” button
     */
    'TC006 Verify the functionality of “Compare Electricity & Gas” button': function (browser : NightwatchBrowser) {
        home.moveToBottomofPage(browser)
        home.clickAndValidateCompElecandGasBtn(browser)
    },

    /**
     * Test Case Covered : Verify social media links available at the bottom of the page
     */
    'TC007 Verify social media links available at the bottom of the page': function (browser : NightwatchBrowser) {
        home.moveToBottomofPage(browser)
        home.validateSocialMediaLinks(browser)
    },

    /**
     * Test Case Covered : Verify the links available below "About iSelect"
     */
    'TC008 Verify the links available below About iSelect': function (browser : NightwatchBrowser) {
        home.moveToBottomofPage(browser)
        for(let i=0; i<data.TC008Data.AboutIselectLink.length-2; i++){
            home.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[i], false)
        }
        /**For Asserting the Multiple Xpaths*/
        home.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[11], true)
        home.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[12], true)
        
    },

    /**
     * Test Case Covered : Verify the links available below "2019 Partner Awards"
     */
    'TC009 Verify the links available below 2019 Partner Awards': function (browser : NightwatchBrowser) {
        home.moveToBottomofPage(browser)
        home.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[0])
        home.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[1])
    },

    /**
     * Runs Before Each Test Case
     * @param browser NightWatch Browser
     */
    beforeEach: function (browser: NightwatchBrowser) {
        browser
            .resizeWindow(1400,900)
            .maximizeWindow()
            .timeoutsImplicitWait(30000)
            .url(browser.launch_url)
    },

    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser: NightwatchBrowser) {
        browser.end()
        if (browser.currentTest.results.failed >= 1)
            browser.saveScreenshot('./screenshots/'+util.random(8)+'.png',() => console.log('screenshot catured for the failed test case'));
    },
};