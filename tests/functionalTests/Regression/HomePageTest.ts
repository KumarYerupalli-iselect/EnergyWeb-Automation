/** Data Object */
import * as data from '../../appData/HomePageData.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Home Page Object */
import {homePage} from "../../pageObjects/HomePage";



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
    'TC001 Verify the functionality of iSelect always get it right button': function (browser: NightwatchBrowser) {
        browser.url(data.TC003Data.iSelectWordPressURL)
        homePage.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle)
        homePage.clickOnElecandGasIcon(browser)
        homePage.enterAddress(browser, data.CommonData.PostCode)
        homePage.clickOnAddressOption(browser, data.CommonData.Address)
        homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle)
        homePage.clickOniSelectIconinYourUsagePage(browser)
        homePage.validateIselectWordPressPage(browser, data.TC003Data.iSelectWordPressURL, data.TC003Data.iSelectWordPressTitle)
    },

    /**
     * Test Case Covered : Verify  “We compare some of Australia's biggest brands” section
     */
    'TC002 Verify We compare some of Australias biggest brands section': function (browser : NightwatchBrowser) {
        homePage.validateOurPartnersHeaderDisplayed(browser)
        homePage.validateViewOurPartnersBtnDisplayed(browser)
        homePage.clickOnViewOurPartnersBtn(browser)
        homePage.validateOurPartnersPage(browser)
    },

    /**
     * Test Case Covered : Verify “We compare some of Australia's biggest brands” section 
     */
    'TC003 Verify View Our Partners Page and Partners Displayed on Page': function (browser: NightwatchBrowser) {
        homePage.clickOnViewOurPartnersBtn(browser)
        homePage.validateOurPartnersPage(browser)
        homePage.validateHealthPartnersLogosDisplayed(browser)
        homePage.validateEnergyPartnersLogosDisplayed(browser)
        homePage.validateInternetPartnersLogosDisplayed(browser)
    },

    /**
     * Test Case Covered : Verify the “You may be interested in...” section 
     */
    'TC004 Verify the You may be interested in... section' : function(browser: NightwatchBrowser) {
        homePage.validateYouMightBeInterestHeader(browser)
        homePage.validateLinksPresentInYouMightBeInterSection(browser, data.TC004Data.SolarEnergyBasicsPageTitle, 
            data.TC004Data.SwitchElecAndGasPageTitle, data.TC004Data.ElecPlanPageTitle, data.TC004Data.GridConnectPageTitle,
            data.TC004Data.SaveEnergyPageTitle)
    },

    /**
     * Test Case Covered : Verify the Tool tip support center number(131920)
     */
    'TC005 Verify the Tool tip support center number(131920)' : function (browser: NightwatchBrowser) {
        homePage.validateCallUsToolTip(browser);
    },

    /**
     * Test Case Covered : Verify the functionality of “Compare Electricity & Gas” button
     */
    'TC006 Verify the functionality of “Compare Electricity & Gas” button': function (browser : NightwatchBrowser) {
        homePage.moveToBottomofPage(browser)
        homePage.clickAndValidateCompElecandGasBtn(browser)
    },

    /**
     * Test Case Covered : Verify social media links available at the bottom of the page
     */
    'TC007 Verify social media links available at the bottom of the page': function (browser : NightwatchBrowser) {
        homePage.moveToBottomofPage(browser)
        homePage.validateSocialMediaLinks(browser)
    },

    /**
     * Test Case Covered : Verify the links available below "About iSelect"
     */
    'TC008 Verify the links available below About iSelect': function (browser : NightwatchBrowser) {
        homePage.moveToBottomofPage(browser)
        for(let i=0; i<data.TC008Data.AboutIselectLink.length-2; i++){
            homePage.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[i], false)
        }
        /**For Asserting the Multiple Xpaths*/
        homePage.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[11], true)
        homePage.validateAboutIselectLinks(browser, data.TC008Data.AboutIselectLink[12], true)
        
    },

    /**
     * Test Case Covered : Verify the links available below "2019 Partner Awards"
     */
    'TC009 Verify the links available below 2019 Partner Awards': function (browser : NightwatchBrowser) {
        homePage.moveToBottomofPage(browser)
        homePage.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[0])
        homePage.validate2019PartnerAwardsLinks(browser, data.TC009Data.PartnersAwardsLink[1])
    },

    /**
     * Runs Before Each Test Case
     * @param browser NightWatch Browser
     */
    beforeEach: function (browser: NightwatchBrowser) {
        browser
            .resizeWindow(1400,900)
            .maximizeWindow()
            .timeoutsImplicitWait(20000)
            .url(browser.launch_url);
        browser.globals.abortOnAssertionFailure = false
    },

    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser: NightwatchBrowser) {
        browser.end();
    },
};