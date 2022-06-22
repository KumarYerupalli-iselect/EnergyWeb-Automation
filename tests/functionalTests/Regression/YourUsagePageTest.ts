/** Data Object */
import * as data from '../../appData/HomePageData.json';
/** Data Object */
import * as yourUsageData from '../../appData/YourUsagePageData.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Home Page Object */
import {homePage} from "../../pageObjects/HomePage";
/** Your Usage Page Object */
import {yourUsagePage} from '../../pageObjects/YourUsagePage'

module.exports = {
    // /**
    //  * Test cases Covered : Verify contact number on the header
    //                         Verify "Opening Hours" link
    //  */
    // '@disabled': false,
    // '@tags':['TC010'],
    // 'TC010 Verify the Contact Us Section in Your Usage Page': (browser: NightwatchBrowser) => {
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     yourUsagePage.validateCallUsSection(browser);
    // },

    // /**
    //  * Test cases Covered : Verify "Approved Product List" link in first mandatory checkbox
    //                         Verify "Terms & Conditions" link in second mandatory checkbox
    //                         Verify "Privacy Collection Notice" link in second mandatory checkbox
    //                         Verify that “Prefer to talk?Call 13 19 20” is displayed below Postcode field
    //                         Verify that Participating Providers popup window is displayed when clicked on Approved Product List link in first mandatory checkbox
    //                         Verify that Terms&Conditions popup window is displayed when clicked on Terms & Conditions link in second mandatory checkbox
    //                         Verify that user navigated to http://www.iselect.com.au/privacy-policy/ when clicked on Privacy Collection Notice link in second mandatory checkbox
    //  */
    // 'TC011 Verify the links in Mandatory Checkbox section' : (browser : NightwatchBrowser) => {
    //     yourUsagePage.validatePreferToTalk(browser)
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     yourUsagePage.clickAndValidateApprProdList(browser);
    //     yourUsagePage.clickAndValidateTClink(browser);
    //     yourUsagePage.clickAndValidatePrivCollNotilink(browser);
    // },

    // /**
    //  * Test cases Covered : "Verify that below options are available for “What are you looking to compare?” field
    //                             - Electricity&Gas
    //                             - Electricity
    //                             - Gas"
    //                         "Verify that below options are available for “What type of property?”
    //                             - My Home
    //                             - My Business"
    //                         "Verify that below options are available for “Do you own or rent the property?”
    //                             - Own
    //                             - Rent"
    //                         "Verify that below options are available for “Are you moving into this property?”
    //                             - Yes
    //                             - No"
    //                         "Verify that below fields are not displayed when selected No in “Are you moving into this property?” field
    //                             - What is your move in date?
    //                             - Do you also need to connect a broadband service?"
    //                         "Verify that below fields are displayed when selected No in “Are you moving into this property?” field 
    //                             - Do you have a recent electricity bill in front of you?
    //                             - Do you have a recent gas bill in front of you?"
    //                         Verify if "YOUR SUMMARY" section is displayed on the right side of the page
    //                         Verify "Do you have rooftop solar panels?" field
    //                         Verify that “Are you considering Solar Panels in the next 12 months?” field displayed when selected No in  Do you have rooftop solar panels? Field
    //                         Verify "Who is your current electricity provider?" dropdown field
    //                         Verify "Who is your current gas provider?" dropdown field 
    //  */
    // 'TC012 Verify the questions and options present in your usage section' : (browser : NightwatchBrowser) => {
    //     /** Enters the Address */
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     /** Clicks on the Address Option from Address dropdown */
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     /** Validates the Your Usage Page */
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     /** Validates the " What are you looking to compare? " Options */
    //     yourUsagePage.validateLookToCompQtnAndOptns(browser);
    //     /** Validates the " What type of property? " Options */
    //     yourUsagePage.validateTypeOfPropQtnAndOptns(browser);
    //     /** Validates the " Do you own or rent the property? " Options */
    //     yourUsagePage.validateOwnOrRentQtnAndOptns(browser);  
    //     /** Validates the " Are you moving into this property? " Options */
    //     yourUsagePage.validateAreYouMovInToPropertOptions(browser);
    //     /** Validates the " Your Summary " Options */
    //     yourUsagePage.validateYourSummarySection(browser);
    //     /** Clicks on " Electricity and Gas " option in " What are you looking to compare? " Question */
    //     yourUsagePage.clickOnLookToCompOpts(browser, yourUsageData.TC012.LookingToCompareOpts[0]);
    //     /** Clicks on " My Home " option in " What type of property? " Question */
    //     yourUsagePage.clickOnTypeOfPropertyOpts(browser, yourUsageData.TC012.TypeOfPropertyOpts[0]);
    //     /** Clicks on " Own " option in " Do you own or rent the property? " Question */
    //     yourUsagePage.clickOnOwnOrRentPropOpts(browser, yourUsageData.TC012.ownOrRentPropertyOprt[0]);
        
    //     /**"Verify that below fields are not displayed when selected No in “Are you moving into this property?” field
    //                             -  What is your move in date?
    //                             - Do you also need to connect a broadband service?"*/
    //     /** Clicks on " No " option in " Are you moving into this property? " Question */
    //     yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.TC012.movingToHouseOpts[1]);
    //     /** Validates the Move in Date is not visible */
    //     yourUsagePage.validateMoveinDateNotPresent(browser);
        
        
    //     /** Validates the "Do you have a recent gas bill available? *" and Do you have a recent electricity bill available? * questions Visible or not" */
    //     yourUsagePage.validateElecAndGasBillQtns(browser);
    //     /** Clicks on " Yes " option in " Are you moving into this property? " Question */
    //     yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.TC012.movingToHouseOpts[0]);
    //     /** Validates the " Do you have rooftop solar panels? " options */
    //     yourUsagePage.validateDoYouHaveRoofTopSolarPanelsOptions(browser);
    //     /** Cicks on Do you have Solar Panel No Option */
    //     yourUsagePage.clickOnSolarPanelOption(browser, yourUsageData.TC012.SolarPanelOpts[1]);
    //     /**Validates the " Are you considering Solar Panels in the next 12 months? "  question Yes Option*/
    //     yourUsagePage.validateAreYouConsideringSolarPanelOpt(browser, yourUsageData.TC012.ConsiderSolPanelOpts[0]);
    //     /**Validates the " Are you considering Solar Panels in the next 12 months? "  question No Option*/
    //     yourUsagePage.validateAreYouConsideringSolarPanelOpt(browser, yourUsageData.TC012.ConsiderSolPanelOpts[1]);
    //     /** Validates the " Who is your current electricity provider? " dropdown field */
    //     for(let i = 0; i < yourUsageData.TC012.ElecProviderOpts.length; i++) {
    //         yourUsagePage.validateWhoIsYourCurrElecProv(browser, yourUsageData.TC012.ElecProviderOpts[i]);
    //     }
    //     /** Validates the " Who is your current Gas provider? " dropdown field */
    //     for(let i = 0; i < yourUsageData.TC012.GasProviderOpts.length; i++) {
    //         yourUsagePage.validateWhoIsYourCurrGasProv(browser, yourUsageData.TC012.GasProviderOpts[i]);
    //     }

    //  },

    // /**
    //  * Test Cases Covered : Verify the warning text displayed on "What are you looking to compare?" field
    //                         Verify the warning text displayed on "What type of property?" field
    //                         Verify the warning text displayed on "Do you own or rent the property?" field
    //                         Verify the warning text displayed on "Are you moving into this property?" field
    //                         Verify the warning text displayed on "Do you have a recent electricity bill in front of you?" field
    //                         Verify the warning text displayed on "Do you have rooftop solar panels?" field
    //                         Verify the warning text displayed on "Who is your current electricity provider?" field
    //                         Verify the warning text displayed on "What level best describes your typical electricity usage?" field
    //                         Verify the warning text displayed on "Who is your current gas provider?" field
    //                         Verify the warning text displayed on "What level best describes your typical gas usage?" field
    //                         Verify the warning text displayed on the first mandatory checkbox
    //                         Verify the warning text displayed on the second mandatory checkbox
    //                         Verify that below fields are displayed when selected Yes in “Are you moving into this property?” field
    //                         -  What is your move in date?
    //                         - Do you also need to connect a broadband service?
    //                         "Verify that below options are available for “What level best describes your typical electricity usage?”
    //                          - Low
    //                          - Medium
    //                          - High"
     
    //  */
    // 'TC013 Verify the error messages for mandatory fields' : (browser : NightwatchBrowser) => {
    //     /** Entering the Address */
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     /** Clicking on Address Option */
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     /** Validates the Your Usage Page */
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Wait for 3 secs */
    //     browser.pause(3000);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " What are you looking to compare? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[0]);
    //     /** Selecting 'ELECTRICITY & GAS' option in "What are you looking to compare?" Question */
    //     yourUsagePage.clickOnLookToCompOpts(browser, yourUsageData.TC012.LookingToCompareOpts[0]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " What type of property? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[1]);
    //     /** Selecting 'My Home' option in " What type of property? " Question */
    //     yourUsagePage.clickOnTypeOfPropertyOpts(browser, yourUsageData.TC012.TypeOfPropertyOpts[0]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Do you own or rent the property? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[2]);
    //     /** Selecting 'Own' option in " Do you own or rent the property? " Question */
    //     yourUsagePage.clickOnOwnOrRentPropOpts(browser, yourUsageData.TC012.ownOrRentPropertyOprt[0]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Are you moving into this property? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[3]);
    //     /** Selecting 'No' option in " Are you moving into this property? " Question */
    //     yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.TC012.movingToHouseOpts[1]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Do you have a recent electricity bill available? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[4]);
    //     /** Selecting 'YES' option in " Are you moving into this property? " Question */
    //     yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.TC012.movingToHouseOpts[0]);
    //     /** Fills the MoveIn Date */
    //     yourUsagePage.fillMoveInDate(browser);
    //     /** Clicks on 'YES' option in Connect to Broadband */
    //     yourUsagePage.clickOnConnToBBOpts(browser, yourUsageData.TC012.ConnectionToBBOpts[0]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Do you have rooftop solar panels?  " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[5]);
    //     /** Clicks on 'YES' Option in 'Do you have rooftop solar panels?' */
    //     yourUsagePage.clicksOnRoofTopPanelOpts(browser, yourUsageData.TC012.SolarPanelOpts[0])
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Who is your current electricity provider?  " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[6]);
    //     /** Selectes the Elec Provider from 'Who is your current electricity provider?' Question */
    //     yourUsagePage.selectElecProvFromList(browser, yourUsageData.TC013.ElecProvider[0]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " What level best describes your typical electricity usage? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[7]);
    //     /** Clicks on "Medium" Electricity Usage  */
    //     yourUsagePage.selectElecUsage(browser, yourUsageData.TC013.ElecUsageOpt[1]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Who is your current gas provider? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[8], true);
    //     /** Selects the Gas Provider */
    //     yourUsagePage.selectGasProvFromList(browser, yourUsageData.TC013.GasProvider[0]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " What level best describes your typical gas usage? " Question Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[9]);
    //     /** Clicks on "Medium" Gas Usage  */
    //     yourUsagePage.selectGasUsage(browser, yourUsageData.TC013.GasUsageOpt[1]);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Terms & Conditions Checkbox 1 " Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[10]);
    //     /** Clicks on Compliance Checkbox */
    //     yourUsagePage.clickOnComplianceCB(browser);
    //     /** Clicks on Continue Button  */
    //     yourUsagePage.clickOnContinueBtn(browser);
    //     /** Validates the " Terms & Conditions Checkbox 2 " Error Message */
    //     yourUsagePage.validateErrorMsgNotif(browser, yourUsageData.TC012.ErrorMsgs[10], true);
    // },
    
    // /**
    //  * Test Cases Covered : Verify that “What is your move in date?” field is calendar picker
    //  *                      Verify that that let us call you button is displayed when selected dates in Calendar picker within 3 working days
    //                         "Verify that below fields are displayed when clicked on let us call you button
    //                         - First Name
    //                         - Last Name
    //                         - Mobile Number
    //                         - Other Number
    //                         - Postcode/Suburb
    //                         - What type of property?
    //                         - CALL ME button"
    //  */
    // 'TC014 Verify Call Us Button after selecting date within 3 working days' : (browser : NightwatchBrowser) => {
    //     /** Entering the Address */
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     /** Clicking on Address Option */
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     /** Validates the Your Usage Page */
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     /** Selecting 'ELECTRICITY & GAS' option in "What are you looking to compare?" Question */
    //     yourUsagePage.clickOnLookToCompOpts(browser, yourUsageData.TC012.LookingToCompareOpts[0]);
    //     /** Selecting 'My Home' option in " What type of property? " Question */
    //     yourUsagePage.clickOnTypeOfPropertyOpts(browser, yourUsageData.TC012.TypeOfPropertyOpts[0]);
    //     /** Selecting 'Own' option in " Do you own or rent the property? " Question */
    //     yourUsagePage.clickOnOwnOrRentPropOpts(browser, yourUsageData.TC012.ownOrRentPropertyOprt[0]);
    //     /** Selecting 'No' option in " Are you moving into this property? " Question */
    //     yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.TC012.movingToHouseOpts[0]);
    //     /** Fills the MoveIn Date */
    //     yourUsagePage.selectMoveInDate(browser, 2);
    //     /** Validates the Let Us Call Form */
    //     yourUsagePage.validateLetUsCallForm(browser);
    // },

    // /**
    //  * Test Cases Covered : "Verify that below links are available under Customer Info section
    //                         - Participating Providers
    //                         - How iSelect Works
    //                         - Privacy Policy
    //                         - Terms & Conditions
    //                         - Refer a Friend T&Cs
    //                         - Disclaimer
    //                         - Contact us and continue button"
    //  */
    // 'TC015 Verify the links in Your Usage Page' : (browser : NightwatchBrowser) => {
    //     /** Entering the Address */
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     /** Clicking on Address Option */
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     /** Validates the Your Usage Page */
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     for(let i=0; i<yourUsageData.TC015.NeedsPageLinks.length; i++){
    //         yourUsagePage.validateYourNeedsPageLinks(browser, yourUsageData.TC015.NeedsPageLinks[i]);
    //     }
        
    // },

    // /**
    //  * Test Cases Covered : "Verify that below sections are displayed when selected Electricity&Gas in What are you looking to compare? * field
    //                             - Electricity
    //                             - Gas"
    //                         "Verify that below fields are displayed when selected Yes in “Do you have a recent electricity bill in front of
    //                         You?” 
    //                             - How much is your bill?
    //                             - How many days are in the billing period?
    //                             - How are you charged for electricity?"
    //                         Verify that that “ What level best describes your typical electricity usage?” field is displayed when selected No in “Do you have a recent electricity bill in front of you?” field
    //                         "Verify that below fields are displayed when selected Yes in “Do you have a recent gas bill in front of
    //                         You?” 
    //                             - How much is your bill?
    //                             - How many days are in the billing period?
    //                             - What is the usage amount on your bill?"
    //                         Verify that that “ What level best describes your typical gas usage?” field is displayed when selected No in “Do you have a recent gas bill in front of you?” field
    //  */
    // 'TC016 Verify Electricity and Gas Details Section when selected Yes and No options in Do you have Electricity and Gas Bill' : (browser : NightwatchBrowser) => {
    //     /** Entering the Address */
    //     homePage.enterAddress(browser, data.CommonData.PostCode);
    //     /** Clicking on Address Option */
    //     homePage.clickOnAddressOption(browser, data.CommonData.Address);
    //     /** Validates the Your Usage Page */
    //     homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
    //     /** Clicks on " Electricity and Gas " option in " What are you looking to compare? " Question */
    //     yourUsagePage.clickOnLookToCompOpts(browser, yourUsageData.TC012.LookingToCompareOpts[0]);
    //     /** Clicks on " My Home " option in " What type of property? " Question */
    //     yourUsagePage.clickOnTypeOfPropertyOpts(browser, yourUsageData.TC012.TypeOfPropertyOpts[0]);
    //     /** Clicks on " Own " option in " Do you own or rent the property? " Question */
    //     yourUsagePage.clickOnOwnOrRentPropOpts(browser, yourUsageData.TC012.ownOrRentPropertyOprt[0]);
    //     /** Clicks on " No " option in " Are you moving into this property? " Question */
    //     yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.TC012.movingToHouseOpts[1]);
    //     /** Clicks on "Yes" option in "Do you have a recent electricity bill available? *" */
    //     yourUsagePage.clickOnRecentElecBillQtnOpts(browser, yourUsageData.TC016.RecElecBillOpts[0]);
    //     /** Validates the Your Electricity Details When Selected the "Yes" option in "Do you have a recent electricity bill available? */
    //     yourUsagePage.validateYourElectricityDetailsForm(browser);
    //     /** Clicks on "No" option in "Do you have a recent gas bill available? *" */
    //     yourUsagePage.clickOnRecentGasBillQtnOpts(browser, yourUsageData.TC016.RecGasBillOpts[0]);
    //     /** Validates the Your Gas Details When Selected the "Yes" option in "Do you have a recent Gas bill available? */
    //     yourUsagePage.validateYourGasDetailsForm(browser);
        
    //     ////Verify that that “ What level best describes your typical electricity usage?” field is displayed when selected No in “Do you have a recent electricity bill in front of you?” field
    //     ////Verify that that “ What level best describes your typical gas usage?” field is displayed when selected No in “Do you have a recent gas bill in front of you?” field
    //     /** Clicks on "No" option in "Do you have a recent electricity bill available? *" */
    //     yourUsagePage.clickOnRecentElecBillQtnOpts(browser, yourUsageData.TC016.RecElecBillOpts[1]);
    //     /** Clicks on "No" option in "Do you have a recent gas bill available? *" */
    //     yourUsagePage.clickOnRecentGasBillQtnOpts(browser, yourUsageData.TC016.RecGasBillOpts[1]);
    //     /** Validates the Electricity and Gas Usage questions */
    //     yourUsagePage.validateElecAndGasUsageQts(browser);
        
    // },

    /**
     * Test Cases Covered : Verify Your Details page 
     *                      Verify that COMPARE page displayed when clicked on View results button
     *                      Verify that Your Details page is removed from the ribbon when entered data in Your Details page and clicked on View Results button
     *                      Verify that the UI in COMPARE page
     *                      Verify that that “An email will be sent to you shortly.” message is displayed when clicked on Save button
     *                      Verify that that selected Products are unselected when clicked on Clear all link
     *                      "Verify that that below are displayed under each Provider
                            - Apply Now button
                            - View Plan Details button"
                            Verify the UI of View Details page displayed when clicked on View details button
                            Verify that Estimated Cost Popup window displayed when clicked on Read more link
                            Verify that bill details button is displayed and enabled to the user for Gas and Electricity
     */
    'TC017 Verify YourDetails Page and Compare Page' : (browser : NightwatchBrowser) => {
        /** Entering the Address */
        homePage.enterAddress(browser, data.CommonData.PostCode);
        /** Clicking on Address Option */
        homePage.clickOnAddressOption(browser, data.CommonData.Address);
        /** Validates the Your Usage Page */
        homePage.validateYourUsagePage(browser, data.TC003Data.YourUsagePageTitle);
        /** Selecting 'ELECTRICITY & GAS' option in "What are you looking to compare?" Question */
        yourUsagePage.clickOnLookToCompOpts(browser, yourUsageData.CommonData.LookingToCompareOpts[0]);
        /** Selecting 'My Home' option in " What type of property? " Question */
        yourUsagePage.clickOnTypeOfPropertyOpts(browser, yourUsageData.CommonData.TypeOfPropertyOpts[0]);
        /** Selecting 'Own' option in " Do you own or rent the property? " Question */
        yourUsagePage.clickOnOwnOrRentPropOpts(browser, yourUsageData.CommonData.ownOrRentPropertyOpt[1]);
        /** Selecting 'No' option in " Are you moving into this property? " Question */
        yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.CommonData.movingToHouseOpts[1]);
        /** Selecting 'NO' option in " Are you moving into this property? " Question */
        yourUsagePage.clickOnMoveIntoThisPropOpts(browser, yourUsageData.CommonData.movingToHouseOpts[1]);
        /** Clicks on "No" option in "Do you have a recent electricity bill available? *" */
        yourUsagePage.clickOnRecentElecBillQtnOpts(browser, yourUsageData.TC016.RecElecBillOpts[1]);
        /** Clicks on "No" option in "Do you have a recent gas bill available? *" */
        yourUsagePage.clickOnRecentGasBillQtnOpts(browser, yourUsageData.TC016.RecGasBillOpts[1]);
        /** Clicks on 'YES' Option in 'Do you have rooftop solar panels?' */
        yourUsagePage.clicksOnRoofTopPanelOpts(browser, yourUsageData.CommonData.SolarPanelOpts[0])
        /** Selectes the "People Energy" Elec Provider from 'Who is your current electricity provider?' Question */
        yourUsagePage.selectElecProvFromList(browser, yourUsageData.CommonData.ElecProvider[16]);
        /** Clicks on "Medium" Electricity Usage  */
        yourUsagePage.selectElecUsage(browser, yourUsageData.CommonData.ElecUsageOpt[0]);
        /** Selects the Gas Provider */
        yourUsagePage.selectGasProvFromList(browser, yourUsageData.CommonData.GasProvider[1]);
        /** Clicks on "Medium" Gas Usage  */
        yourUsagePage.selectGasUsage(browser, yourUsageData.CommonData.GasUsageOpt[0]);
        /** Clicks on Compliance Checkbox */
        yourUsagePage.clickOnComplianceCB(browser);
        /** Clicks on Terms And Conditions CheckBox */
        yourUsagePage.clickOnTermsAndCOnditionsCB(browser);
        /** Clicks on Continue Button  */
        yourUsagePage.clickOnContinueBtn(browser);
        /** Validates the Your Details Page */
        yourUsagePage.validateAndFillYourDetPage(browser, true);
        /** Fills the Your details Page */
        yourUsagePage.validateAndFillYourDetPage(browser);
        /** Validates the Compare Page */
        yourUsagePage.validateComparePage(browser);
        /** Validates the Save Search Mail */
        yourUsagePage.validateSaveSearchMail(browser);
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
        browser.end();
    },

};