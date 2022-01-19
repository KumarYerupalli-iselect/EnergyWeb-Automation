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
/** Your Usage Page Object */
import {yourUsagePage} from '../../page/YourUsagePage'

export = {
    /**
     * Test cases Covered : Verify contact number on the header
                            Verify "Opening Hours" link
     */
    '@disabled': false,
    '@tags':['TC010'],
    'TC010 Verify the Contact Us Section in Your Usage Page': (browser: NightwatchBrowser) => {
        home.enterAddress(browser, data.CommonData.PostCode)
        home.clickOnAddressOption(browser)
        home.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle)
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
        browser.end()
        if (browser.currentTest.results.failed >= 1)
            browser.saveScreenshot('./screenshots/'+util.random(8)+'.png',() => console.log('screenshot catured for the failed test case'));
    },

};