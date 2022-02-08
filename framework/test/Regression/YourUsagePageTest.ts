/** Data Object */
import * as data from '../../data/HomePageData.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Home Page Object */
import {homePage} from "../../page/HomePage";
/**Utils Object */
import {helperUtils} from "../../utils/helperUtils";
/** Your Usage Page Object */
import {yourUsagePage} from '../../page/YourUsagePage'

module.exports = {
    /**
     * Test cases Covered : Verify contact number on the header
                            Verify "Opening Hours" link
     */
    '@disabled': false,
    '@tags':['TC010'],
    'TC010 Verify the Contact Us Section in Your Usage Page': (browser: NightwatchBrowser) => {
        homePage.enterAddress(browser, data.CommonData.PostCode)
        homePage.clickOnAddressOption(browser)
        homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle)
        yourUsagePage.validateCallUsSection(browser);
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
        // browser.end()
        // if (browser.currentTest.results.failed >= 1)
        //     browser.saveScreenshot('./screenshots/'+util.random(8)+'.png',() => console.log('screenshot catured for the failed test case'));
    },

};