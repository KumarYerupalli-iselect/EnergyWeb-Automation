/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Helper Utils Object */
import {helperUtils} from '../utilities/helperUtils'

/**
 * Your Needs Page PageObject and Related Methods
 */
export const yourUsagePage = {

    /**
     * update locators in elements section which is captured from DOM section of web browser
     */
    elements: {
        callUsElement : '//a[text()="13 19 20"]',
        openingHoursLink : '//a[text()="Opening Hours"]',
        opeingHrsPage : '//div[@id="primary"]',

        approvedProductListLink : '//a[text()="Approved Product List"]',
        approvedProductListPopUp: '//h2[text()="Participating Providers and Plans for Comparison"]',
        header : '//h2[text()="Residential Providers"]',
        tcLink : '//a[text()="Terms and Conditions"]',
        tcPopup : '//h1[text()="Terms and conditions for the use of the iSelect website"]/..',
        privacyCollectionNoticeLink : '//a[text()="Privacy Collection Notice"]',
        privacyCollectionNoticePageTitle : 'iSelect - Privacy Collection Notice - Energy',
        privacyCollectionNoticeHeader : '//h1[text()="Privacy Collection Notice – Energy"]',
        frameCloseBtn : '//button[@title="Close (Esc)"]',

        preferToTalkText : '//p[@class="prefer-to-call"]//span',

        lookToCompareQtn : '         What are you looking to compare?                  ',
        elecAndGasOpt : '//span[text()="Electricity & Gas"]/../../input',
        elecOpt : '//span[text()=" Electricity"]/../../input',
        gasOpt : '//span[text()="Gas"]/../../input',

        typeOfPropertyQtn : '         What type of property?         ',
        myHomeOpt : '//span[text()="My home"]/../../input',
        myBusinessOpt : '//span[text()=" My business"]/../../input',

        ownOpt : '//label[text()="Own"]/../input',
        rentOpt : '//label[text()="Rent"]/../input',

        movingToHouseYesOpt : '//input[@id="movehouse"]',
        movintToHouseNoOpt : '//input[@id="compareplans"]',

        solarPanelYesOpt : '(//h2[text()="Your Electricity Details"]/../fieldset/div[1]/div[2]/div/div/input)[1]',
        solarPanelNoOpt:'(//h2[text()="Your Electricity Details"]/../fieldset/div[1]/div[2]/div/div/input)[2]',

        considerSolarPanel : '//h2[text()="Your Electricity Details"]/../fieldset/div[2]/div[2]/div/div/input/..//label[text()="Yes"]',


        
        continueBtn : '//input[@value="Continue"]',

        moveInDate : '//input[@id="datepicker"]',
        connectToBroadBandYesOption : '//label[text()="Yes"]/../input[@id="broadbandyesproperty"]',
        connectToBroadBandNoOption : '//label[text()="No"]/../input[@id="broadbandnoproperty"]',
        elecProvListDD : '//select[@id="elecproviderlist_usage"]',
        elecProvListOpt : '//select[@id="elecproviderlist_usage"]//option[text()="Cova U"]',

        gasProvListDD : '//select[@id="gasproviderlist_usage"]',
        gasProvListOpt : '//select[@id="gasproviderlist_usage"]//option[text()="ActewAGL"]',

        complianceCB : '//input[@name="Compliancecheckbox"]',
        termsAndConditionsCB : '//input[@name="privacycheckbox"]',

        letusCallBtn : '//a[@class="btn_letUsCall sf2CTC"]',
        callFormfirstName : '//div[text()="First Name:"]/../input',
        callFormLastName : '//div[text()="Surname:"]/../input',
        callFormMobileNo : '//div[text()="Mobile Number:"]/../div[2]/input',
        callFormOtherNo : '//div[text()="Mobile Number:"]/../div[3]/input',
        callFormAddress : '//div[text()="Postcode / Suburb:"]/../div[2]/div/input',
        callFormMyHomeProperty : '//div[text()="What type of property?:"]/../label[1]',
        callFormMyBusinessProperty : '//div[text()="What type of property?:"]/../label[2]',
        callFormCallMeBtn : '//input[@value="Call me"]',

        recntElecBillQtn : '//input[@id="elecbill3"]/../../../../div[1]',
        recentElecBillOpt : '//input[@id="elecbill3"]/../label[text()="No"]',
        
        iHavePaperBillBox : '//div[text()="I have a paper bill"]/../..',
        howMuchElecBillField : '//input[@id="Electricity_Bill"]',
        howManDaysBillPeriod : '//input[@id="Electricity_BillingDays"]',
        hoeMuchChargedForElec : '//input[@id="singleRate"]/../../../../../../../div[1]',
        singleRateOpt : '//input[@id="singleRate"]',
        singleRateControlledLoadOpt : '//input[@id="twoRate"]',
        timeOfUseOpt : '//input[@id="TOU"]',

        howMuchGasBillField : '//input[@id="Gas_Bill"]',
        howManyDaysGasBillPeriod : '//input[@id="Gas_BillingDays"]',
        gasPeakField : '//input[@id="Gas_peak"]',
        gasOffPeakField : '//input[@id="Gas_offPeak"]',

        recentGasBillQtn : '//input[@id="gasbill3"]/../../../../div[1]',
        recentGasBillOpt : '//input[@id="gasbill3"]/../label[text()="No"]',

        electUsageQtn : '//input[@name="UsageLevel"]/../../../../../../../div[1]',
        gasUageQtn : '//input[@name="gasUsageLevel"]/../../../../../../../div[1]',

        /** Your Details Page */
        yourName : '//input[@name="fullName"]',
        yourMobileNo : '//input[@name="MobileNo"]',
        yourEmail : '//input[@name="EmailAddress"]',
        viewResultsBtn : '//input[@value="View Results"]',
        backBtn : '//input[@value="BACK"]',

        yourSummarySection : '//h2[text()="Your summary"]/..',
        didYouKnowSection : '//h2[text()="Did you know?"]/../../..',

        /**Compare page */
        comparePageHeader : '//h1[text()="Electricity & Gas Comparison"]',
        yourSearchHeader : '//h2[text()="SEARCH"]/..//h2[text()="YOUR"]',

        yourSearchSection : '//div[@id="urSum"]',
        saveSearchBtn : '//li[text()="Search saved"]',
        shareSearchBtn : '//a[text()="Share this search"]',
        providerSection : '//div[@id="refOpt"]//h2[text()="Provider"]/..',
        contAndEnergyFacSheetSection : '//div[@id="refOpt"]//h2[text()="Contract length "]/..',
        lookingToCompSection : '//div[text()="I am looking to compare"]/..',
        plsBeAwareSection : '//b[text()="Please be aware:"]/../..',
        paginationSection : '//b[text()="View page"]/../..',
        shareSearchEmail : '//input[@id="email"]',
        shareSearchSaveBtn : '//input[@value="Save"]',
        emailSentMsg : '//h3[text()="An email will be sent to you shortly."]',

        providerCB : '//input[@value="EnergyAustralia"]',
        providerClearAllBtn : '(//a[text()="Clear All"])[1]',
        applyNowBtn : '(//a[text()="apply now"])[1]',
        viewPlanDetBtn : '(//a[text()="VIEW PLAN DETAILS"])[8]',
        viewPlanDetApplyBtn : '(//a[@id="applyBtn"])[2]',
        viewPlanDetEmailPlanDetBtn : '//a[@id="emailPlan"]',
        viewPlanDetDetailsPage : '//h3[text()="Features"]/..',

        estimatedCostToolTipBtn : '(//h2[text()="Estimated Costs"]/../div/div[2]/a)[8]',
        estimatedCostPopUp : '//h1[text()="Estimated Cost"]/..',
        
        addElecBillBtn : '//a[text()="Add my electricity bill"]',
        selectElecProviderField : '//select[@id="elecproviderlist"]',
        electricityBillingDayField : '//input[@id="Electricity_BillingDays"]',
        singleRateField : '//input[@id="singleRate"]/..',
        twoRateField : '//input[@id="twoRate"]/..',
        touField : '//input[@id="TOU"]/..',
        elecGetYourEstimatedCost : '(//input[@value="Get your estimated cost"])[1]',
        elecCancelBtn :'(//input[@value="CANCEL"])[1]',

        addGasBillBtn : '//a[text()="Add my gas bill"]',
        selectGasProvField : '//select[@id="gasproviderlist"]',
        gasBillingDayField : '//input[@name="Gas_BillingDays"]',
        gassPeakField : '//input[@id="Gas_peak"]',
        gassOffPeakField : '//input[@id="Gas_offPeak"]',
        gasGetYourEstimatedCost : '(//input[@value="Get your estimated cost"])[2]',
        gasCancelBtn :'(//input[@value="CANCEL"])[2]',

        estmtdElecPrice : '(//b[text()="Electricity"]/../../div[2]/div//p[text()="/30 days"])[8]',
        estmtdGasPrice : '(//b[text()="Gas"]/../../div[2]/div//p[text()="/30 days"])[8]',

        aglApplyNowBtn : '(//a[text()="apply now"])[13]',
        continueWithThisPlanBtn : '//input[@value="Continue with this plan"]',
        /** Contact details Page */
        titleDD : '//select[@name="title"]',
        dayField : '//select[@id="birthDay"]',
        monthField : '//select[@id="birthMonth"]',
        yearFiled : '//select[@id="birthYear"]',
        addAccHolderNoOpt : '//input[@id="secAccNo"]',
        addAccHolderYesOpt : '//input[@id="secAccYes"]',
        contactDetNextBtn : '//input[@id="sec1Btn"]',

        /** Personal Details Page */
        identificationTypeField : '//select[@id="holderCurDrive"]',
        identificationTypeOpt : '//option[text()="Drivers Licence - VIC"]',

        identificationNumberField : '//input[@id="Electricity_License"]',
        licenseExpiryday : '//select[@id="Licence_expiry_day"]',
        licenseExpiryMonth : '//select[@id="Licence_expiry_month"]',
        licenseExpiryYear : '//select[@id="Licence_expiry_year"]',
        
        concessionHolderField : '//select[@id="holderConsCard"]',

        personalDetNextBtn : '//input[@id="sec2Btn"]',

        /** Connection Details Page*/
        unitField : '//input[@id="resunitno"]',
        streetNo : '//input[@id="resstreetno"]',
        streetName : '//input[@id="streetNameRes"]',
        streetType : '//select[@id="streetNameResType_S"]',
        findAddr : '//a[@id="res"]',
        findaddrRadioBtn : '//input[@name="resAddress"]',
        connectionDetNextBtn : '//input[@id="sec3Btn"]',

        /** Terms and conditions Page */
        productDetailsCB : '(//input[@name="productdetailsConsent"])[1]',
        compliancCB : '//input[@name="complianceCheck1"]',
        digitalSignCB : '(//input[@name="productdetailsConsent"])[2]',
        emaiConsentCB : '//input[@name="emailConsent"]',
        creditConsentCB : '//input[@name="creditConsent"]',
        digiSignField : '//input[@id="digiFullName"]',
        submitBtn : '//input[@id="secAllBtn"]',
        confirmationMsg : '//td[text()="Reference ID"]'

    },

    fillCheckBoxesInApplyNowPage(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.productDetailsCB, 'Product Details CheckBox checked.');
        helperUtils.click(browser, 'xpath', this.elements.compliancCB, 'Compliance CheckBox checked.');
        helperUtils.click(browser, 'xpath', this.elements.emaiConsentCB, 'Email Consent CheckBox checked.');
        helperUtils.click(browser, 'xpath', this.elements.creditConsentCB, 'Credit Consent CheckBox checked.');
        helperUtils.click(browser, 'xpath', this.elements.digitalSignCB, 'Digital Signature CheckBox checked.');
        helperUtils.enterKeys(browser, 'xpath', this.elements.digiSignField, 'iselect test', 'Entered Signature');
        helperUtils.click(browser, 'xpath', this.elements.submitBtn, 'Clicked on Submit Button');
        helperUtils.verifyWebElementExistForInteraction(browser, 'isVisible', this.elements.confirmationMsg, 30000, 300, undefined, 'Order Succesfully Submitted');
    },

    fillConnectionDetaislInApplyNowPage(browser:NightwatchBrowser) {
        helperUtils.enterKeys(browser, 'xpath', this.elements.unitField, '100', 'Entered Unit No.');
        helperUtils.enterKeys(browser, 'xpath', this.elements.streetNo, '10', 'Entered Street No.');
        helperUtils.enterKeys(browser, 'xpath', this.elements.streetName, 'King', 'Entered Street Name.');
        helperUtils.click(browser, 'xpath', this.elements.streetType, 'Clicked on Street Type Field');
        helperUtils.click(browser, 'xpath', '(//option[text()="STREET - ST"])[1]', 'Selected Street Option');

        browser.click(this.elements.findAddr);
        browser.click('(//input[@id="Postaladdress_check"])[1]');
        helperUtils.click(browser, 'xpath', this.elements.findaddrRadioBtn, 'Clicked on Find Address Button');

        helperUtils.click(browser, 'xpath', this.elements.connectionDetNextBtn, 'Clicked on Connection Details Button');


    },

    fillPersonalDetailsInApplyNowPage(browser:NightwatchBrowser) {
        browser.doubleClick(this.elements.identificationTypeField);
        helperUtils.click(browser, 'xpath', this.elements.identificationTypeOpt, 'Selected Indetification Type Option');
        
        helperUtils.enterKeys(browser, 'xpath', this.elements.identificationNumberField, '4672822', 'Enetered Identification Number');

        browser.doubleClick(this.elements.licenseExpiryday);
        helperUtils.click(browser, 'xpath', '//div[text()="Identification expiry date"]/../div[2]/div/select//option[text()="3"]', 'Selected 3 Option in Day field');
        browser.doubleClick(this.elements.licenseExpiryMonth);
        helperUtils.click(browser, 'xpath', '//div[text()="Identification expiry date"]/../div[2]/div[2]/select//option[text()="April"]', 'Selected April Option in Month field');
        browser.doubleClick(this.elements.licenseExpiryYear);
        helperUtils.click(browser, 'xpath', '//div[text()="Identification expiry date"]/../div[2]/div[3]/select//option[text()="2026"]', 'Selected 2026 Option in Year field');

        browser.click(this.elements.concessionHolderField);
        helperUtils.click(browser, 'xpath', '//option[text()="Not Applicable"]', 'Selected Not Applicable Option');

        helperUtils.click(browser, 'xpath', '(//input[@value="No"])[1]', 'Selected No option');

        helperUtils.click(browser, 'xpath', this.elements.personalDetNextBtn, 'Clicked on Next Button in Personal Details Section');

    },

    fillContactDetailsinApplyNowPage(browser:NightwatchBrowser) {
        browser.waitForElementVisible(this.elements.yourSearchHeader, 10000, 100, undefined, undefined, 'Validation Successful... View Results Page Loaded..');
        browser.click('//div[@class="closeBubble"]');
        //helperUtils.click(browser, 'xpath', this.elements.aglApplyNowBtn, 'Clicked on Apply Now Button');
        browser.doubleClick(this.elements.aglApplyNowBtn);
        //helperUtils.click(browser, 'xpath', this.elements.continueWithThisPlanBtn, 'Clicked on Continue with this Plan Button');
        browser.doubleClick(this.elements.titleDD);
        helperUtils.click(browser, 'xpath', '(//option[text()="Mr"])[1]', 'Selected Mr Option');

        browser.doubleClick(this.elements.dayField);
        helperUtils.click(browser, 'xpath', '(//div[text()="Date of birth"]/../div[2]/select//option[text()="3"])[1]', 'Selected 3 Option in Day field');
        browser.doubleClick(this.elements.monthField);
        helperUtils.click(browser, 'xpath', '(//div[text()="Date of birth"]/../div[2]/div/select//option[text()="April"])[1]', 'Selected April Option in Month field');
        browser.doubleClick(this.elements.yearFiled);
        helperUtils.click(browser, 'xpath', '(//div[text()="Date of birth"]/../div[2]/div[2]/select//option[text()="1986"])[1]', 'Selected 1986 Option in Year field');
        
        //helperUtils.click(browser, 'xpath', this.elements.addAccHolderNoOpt, 'Clicked on Add Additional Account Holder No Option');
        helperUtils.click(browser, 'xpath', this.elements.contactDetNextBtn, 'Clicked on Next Button in Contact Details Form');
        //browser.pause(5000);
    },

    validateEstimatedElecAndGasPrice(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.estmtdElecPrice, 'Validation Successful.... Estimated Electrictity Price is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.estmtdGasPrice, 'Validation Successful.... Estimated Gas Price is Visible');
    },
    /**
     * Fills the Add Electricity Details Form
     */
    fillAddElecDetailsForm(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.addElecBillBtn, 'Clicking on Add Electricity Button');
        browser.pause(2000);
        browser.doubleClick(this.elements.selectElecProviderField);
        helperUtils.click(browser, 'xpath', '(//option[text()="Other"])[1]', 'Selected Other Option' );
        helperUtils.enterKeys(browser, 'xpath', this.elements.electricityBillingDayField, '30', 'Entered 30 days');
        helperUtils.click(browser, 'xpath', this.elements.singleRateField, 'Selected Singale Rate Option');
        helperUtils.enterKeys(browser, 'xpath', '//input[@id="Electricity_singleRate_peak"]', '600', 'Entered Usage : 600');
        helperUtils.click(browser, 'xpath', this.elements.elecGetYourEstimatedCost, 'Clicked on Get your Estimated Cost Button');
    },

    /**
     * Fills the Add Gas Details Form
     */
     fillAddGasDetailsForm(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.addGasBillBtn, 'Clicking on Add Gas Button');
        browser.doubleClick(this.elements.selectGasProvField);
        helperUtils.click(browser, 'xpath', '(//option[text()="Other"])[2]', 'Selected Other Option' );
        helperUtils.enterKeys(browser, 'xpath', this.elements.gasBillingDayField, '30', 'Entered 30 days');
        helperUtils.enterKeys(browser, 'xpath', this.elements.gassPeakField, '2000', 'Entered Usage : 2000');
        helperUtils.click(browser, 'xpath', this.elements.gasGetYourEstimatedCost, 'Clicked on Get your Estimated Cost Button');
    },

    /**
     * Validates the Add Electricity and Add Gas button Forms in Results Page
     */
    validateAddElecAndGasFormsinResultsPage(browser:NightwatchBrowser){
        helperUtils.click(browser, 'xpath', this.elements.addElecBillBtn, 'Clicking on Add Electricity Button');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.selectElecProviderField, 'Validation Successful.... Select Electricity Provider Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.electricityBillingDayField, 'Validation Successful.... Electricity Billing Day Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.singleRateField, 'Validation Successful.... Single Rate Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.twoRateField, 'Validation Successful....Two Rate Field is Visible');
        //helperUtils.assertElementStatus(browser, 'visible', this.elements.touField, 'Validation Successful.... TOU Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.elecGetYourEstimatedCost, 'Validation Successful.... Electricity Estimated Cost Button is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.elecCancelBtn, 'Validation Successful.... Cancel Button is Visible');
        helperUtils.click(browser, 'xpath', this.elements.elecCancelBtn, 'Clicking on Cancel Button');

        helperUtils.click(browser, 'xpath', this.elements.addGasBillBtn, 'Clicking on Add Gas Button');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.selectGasProvField, 'Validation Successful.... Select Gas Provider Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasBillingDayField, 'Validation Successful.... Gas Billing Day Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gassPeakField, 'Validation Successful.... Gas Peak Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gassOffPeakField, 'Validation Successful....Gas Off Peak Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasGetYourEstimatedCost, 'Validation Successful.... Get Your Estimated Cost Field is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasCancelBtn, 'Validation Successful.... Cancel Button is Visible');
        helperUtils.click(browser, 'xpath', this.elements.gasCancelBtn, 'Clicking on Cancel Button');
    },

    /**
     * Validate and fill the Your Details Page
     */
    validateAndFillYourDetPage(browser : NightwatchBrowser, validate? : boolean) {
        if(validate == true) {
            browser.waitForElementVisible(this.elements.yourName, 10000, 100, undefined, undefined, 'Your Details Page Loaded..');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourName, 'Validation Successful.... Your Name Field is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourMobileNo, 'Validation Successful.... Your Mobile No Field is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourEmail, 'Validation Successful.... Your Email Address Field is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourSummarySection, 'Validation Successful.... Your Summary Section is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.didYouKnowSection, 'Validation Successful.... Did You Know Section is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.viewResultsBtn, 'Validation Successful.... View Results Button is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.backBtn, 'Validation Successful.... Back Button is Visible');
        } else {
            helperUtils.enterKeys(browser, 'xpath', this.elements.yourName, 'iSelect Test', 'Entered the Name : iSelect Test');
            helperUtils.enterKeys(browser, 'xpath', this.elements.yourMobileNo, '0400-000-000', 'Entered the Mobile Number : 0400-000-000');
            helperUtils.enterKeys(browser, 'xpath', this.elements.yourEmail, 'kumar.yerupalli@iselect.com.au', 'Entered the Email : kumar.yerupalli@iselect.com.au');
            browser.pause(3000);
            helperUtils.click(browser, 'xpath', this.elements.viewResultsBtn, 'Clicked on View results Button');
        }
        
    },

    /**
     * Validate Compare page
     */
    validateComparePage(browser: NightwatchBrowser) {
        browser.waitForElementVisible(this.elements.yourSearchHeader, 10000, 100, undefined, undefined, 'Validation Successful... View Results Page Loaded..');
        browser.click('//div[@class="closeBubble"]');
        //browser.refresh();
        browser.waitForElementVisible(this.elements.yourSearchHeader, 10000, 100, undefined, undefined, 'Page Refreshed..');
        browser.pause(5000);
        browser.assert.titleEquals('View Your Results | iSelect', 'Title Matches');

        helperUtils.assertElementStatus(browser, 'visible', this.elements.addElecBillBtn, 'Validation Successful... Add Electricity Bill Button is Visible and Enabled');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.addGasBillBtn, 'Validation Successful... Add Gas Bill Button is Visible and Enabled');

        helperUtils.assertElementStatus(browser, 'visible', this.elements.yourSearchSection, 'Validation Successful... Your Search Section is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.saveSearchBtn, 'Validation Successful... Save Search Button is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.shareSearchBtn, 'Validation Successful... Share Search Button is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.providerSection, 'Validation Successful... Provider Section is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.contAndEnergyFacSheetSection, 'Validation Successful... Contract length and Energy Fact Sheet Section is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.lookingToCompSection, 'Validation Successful... Im Looking to Compare Section is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.plsBeAwareSection, 'Validation Successful... Please be aware Section is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.paginationSection, 'Validation Successful... Pagination Section is Visible');
        
        browser.execute('window.scrollTo(0, 1000)');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.applyNowBtn, 'Validation Successful... Apply Now Button is Visible');
        browser.execute('window.scrollTo(0, -1000)');
        browser.pause(4000);
        browser.execute('window.scrollTo(0, 750)');

        helperUtils.click(browser, 'xpath', this.elements.estimatedCostToolTipBtn, 'Clicked on Estimated Cost Tool Tip Button');
        browser.pause(3000);
        browser.frame(0);
        helperUtils.verifyWebElementExistForInteraction(browser,'isVisible', this.elements.estimatedCostPopUp, 10000, 100, undefined, 'Estimated Cost PopUp is Visible');
        browser.frame(null);
        browser.click('//button[@title="Close (Esc)"]');

        helperUtils.assertElementStatus(browser, 'visible', this.elements.viewPlanDetBtn, 'Validation Successful... View Plan Details Button is Visible');
        helperUtils.click(browser, 'xpath', this.elements.viewPlanDetBtn, 'Clicked on View Plan Details Button.');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.viewPlanDetApplyBtn, 'Validation Successful... Apply Now Button is Visible in View Plan Details Page');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.viewPlanDetEmailPlanDetBtn, 'Validation Successful... Email Plan details Button is Visible View Plan Details Page');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.viewPlanDetDetailsPage, 'Validation Successful... View Plan Details Features Page is Visible');


        helperUtils.click(browser, 'xpath', this.elements.providerCB, 'Selected Provider');
        helperUtils.click(browser, 'xpath', this.elements.providerClearAllBtn, 'Clicked on Provider Clear All Button');
    },

    /**
     * Validates the Save Search Email
     */
    validateSaveSearchMail(browser : NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.shareSearchBtn, 'Clicked on Share Search Button');
        browser.pause(3000);
        browser.frame(0);
        helperUtils.enterKeys(browser, 'xpath', this.elements.shareSearchEmail, 'kumar.yerupalli@iselect.com.au', 'Email Entered..');
        helperUtils.click(browser, 'xpath', this.elements.shareSearchSaveBtn, 'Clicked on Save Button');
        helperUtils.verifyWebElementExistForInteraction(browser, 'isVisible', this.elements.emailSentMsg, 10000, 100, undefined, 'Validation Successful.. Email Sent Success Message is Displayed.');
        //browser.click('//button[@title="Close (Esc)"]');
        browser.back();
    },

    /**
     * Validates the Your Electricity details Page
     */
    validateYourElectricityDetailsForm(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.iHavePaperBillBox, 'Clicked on I have Paper Bill Option');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.howMuchElecBillField, 'Validation Successful... How much is your bill? Question is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.howManDaysBillPeriod, 'Validation Successful... How many days are in the billing period? Question is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.hoeMuchChargedForElec, 'Validation Successful... How are you charged for electricity? Question is Visible');
    },

    /**
     * Validates the Your Gas details Page
     */
     validateYourGasDetailsForm(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.howMuchGasBillField, 'Validation Successful... How much is your bill? Question for Gas Details is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.howManyDaysGasBillPeriod, 'Validation Successful... How many days are in the billing period? Question for Gas details is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasPeakField, 'Validation Successful... What is the usage amount on your bill? Question  with Gas Peak is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasOffPeakField, 'Validation Successful... What is the usage amount on your bill? Question  with Gas off-Peak Question is Visible');
    },

    /**
     * Validates the Electricity and Gas Usage Questions when clicked on No option for Recent Bills Questions
     */
    validateElecAndGasUsageQts(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.electUsageQtn, 'Validation Successful... " What level best describes your typical electricity usage? " Question is Visible');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasUageQtn, 'Validation Successful... " What level best describes your typical gas usage? " Question is Visible');
    },
  
    /**
     * Validates the Call Us Section in Your Usage Page
     * @param browser Night Watch Browser
     */
    validateCallUsSection(browser:NightwatchBrowser) {
        helperUtils.verifyWebElementExistForInteraction(browser, 'visibile', this.elements.callUsElement, 20000, 500, undefined, 'Call Us Element is Visbile.');
        helperUtils.click(browser, 'xpath', this.elements.openingHoursLink, 'Opening Hours Link is Visbile, Clicking on the link');
        helperUtils.switchToOtherWindow(browser, 1);
        helperUtils.verifyWebElementExistForInteraction(browser, 'visibile', this.elements.opeingHrsPage, 20000, 500, undefined, 'Opening Hrs Page Loaded');
    },

    /**
     * Click and validates the Approved Product link in Mandatory Section
     */
    clickAndValidateApprProdList(browser:NightwatchBrowser){
        helperUtils.click(browser, 'xpath', this.elements.approvedProductListLink, 'Approved Product List link is Visible Clicking on it.');
        browser.frame(0); // To switch to child frame
        helperUtils.assertElementStatus(browser, 'visible', this.elements.approvedProductListPopUp, 'Approved Product List Pop Up is Visible');
        browser.frame(null); // To switch back to the parent frame
        helperUtils.click(browser, 'xpath', this.elements.frameCloseBtn, 'Clicked on Close Button');
        
    },

    /**
     * Click and validates the Terms and Conditions link in Mandatory Section
     */
    clickAndValidateTClink(browser:NightwatchBrowser){
        helperUtils.click(browser, 'xpath', this.elements.tcLink, 'Terms And Conditions link is Visible Clicking on it.');
        browser.frame(0);
        helperUtils.assertElementStatus(browser, 'visible', this.elements.tcPopup, 'Terms And Conditions Pop Up is Visible');
        browser.frame(null);
        helperUtils.click(browser, 'xpath', this.elements.frameCloseBtn, 'Clicked on Close Button');
        
    },

    /**
     * Click and validates the Privacy Collection Notice link in Mandatory Section
     */
    clickAndValidatePrivCollNotilink(browser:NightwatchBrowser){
        helperUtils.click(browser, 'xpath', this.elements.privacyCollectionNoticeLink, 'Privacy Collection Notice link is Visible Clicking on it.');
        helperUtils.verifyWebElementExistForInteraction(browser, 'visibile', this.elements.privacyCollectionNoticeHeader, 10000, 500, undefined, 'Privacy Collection Notice Header is Visible.')
        helperUtils.validateTitle(browser, this.elements.privacyCollectionNoticePageTitle, 'Privacy Collection Notice Page is Loaded Successfully and Title Matches');
    },

    /**
     * Validates the Prefer to Talk Text is present below the Search Bar or not
     */
    validatePreferToTalk(browser : NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.preferToTalkText, 'Prefer to talk? Call 131920 Text is Visible');

    },

    /**
     * Clicks on "What you are looking to compare" Options Based on Data
     * @param browser NightWatchBrowser
     */
    clickOnLookToCompOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', '//span[text()="' + optValue + '"]/../../input', optValue + ' Value is Present and Clicked on it.'); 
    },

    /**
     * Clicks on "What type of property?" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnTypeOfPropertyOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', '//span[text()="' + optValue + '"]/../../input', optValue + ' Value is Present and Clicked on it.'); 
    },

    /**
     * Clicks on "Do you own or rent the property?" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnOwnOrRentPropOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', '//label[text()="' + optValue + '"]/../input', optValue + ' Value is Present and Clicked on it.');   
    },

    /**
     * Clicks on "Are you moving into this property?" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnMoveIntoThisPropOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', '//input[@id="' + optValue + '"]', optValue + ' Value is Present and Clicked on it.');
    },

    /**
     * Clicks on "Do you have a recent electricity bill available? *" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnRecentElecBillQtnOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', '//label[text()="'+ optValue +'"]/..//input[@name="elecScenario"]', optValue + ' is Clicked in.. Do you have a recent electricity bill available? *');
    },

    /**
     * Clicks on "Do you have a recent Gas bill available? *" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnRecentGasBillQtnOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', '//label[text()="'+ optValue +'"]/..//input[@name="gasScenario"]', optValue + ' is Clicked in.. Do you have a recent gas bill available? *');
    },


    /**
     * Select Move In Date
     */
    selectMoveInDate(browser:NightwatchBrowser, dateCount:number) {
        var day = new Date();
        let monthNames =["January","February","March","April", "May","June","July","August", "September", "October","November","December"];
        var date = (day.getDate() + dateCount ).toString();
        var date1 = date + "-" + (monthNames[day.getMonth()]).toString() + "-" + (day.getFullYear()).toString();
        var date2 = date1.split('-');
        var month = date2[1];
        var days = date2[0];
        browser.click(this.elements.moveInDate);
        helperUtils.click(browser, 'xpath', '//span[text()="'+ month +'"]/../../../table/tbody/tr/td//a[text()="'+ days +'"]', 'Selected ' + month + ' ' +days+' Date');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.letusCallBtn, 'Let Us call button is visible');
            
    },

    /**
     * Verify that Move in Date Should not be present
     */
    validateMoveinDateNotPresent(browser:NightwatchBrowser) {
        browser.waitForElementNotVisible(this.elements.moveInDate, 2000, 200, undefined, undefined, 'Validation SUccessful... Move in Date question is not visible.');
    },

    /**
     * Validates the Electricity and gas bill questions
     */
    validateElecAndGasBillQtns(browser:NightwatchBrowser) {
        browser.waitForElementVisible(this.elements.recntElecBillQtn, 5000, 200, undefined, undefined, 'Validation Successful... Do you have a recent electricity bill available? * is Visible');
        browser.waitForElementVisible(this.elements.recentGasBillQtn, 5000, 200, undefined, undefined, 'Validation Successful... Do you have a recent gas bill available? * is Visible');
    },

    /**
     * Fills the Move in Date
     * @param browser NightwatchBrowser
     */
    fillMoveInDate(browser : NightwatchBrowser) {
        helperUtils.enterKeys(browser, 'xpath', this.elements.moveInDate, '29-07-2022',  'Entered Move In Date : 29-07-2022');
        browser.pause(2000);
        browser.click(this.elements.yourSummarySection);
    },

    /**
     * Clicks on "Do you also need to connect a broadband or home entertainment service?" Options
     * @param browser NightwatchBrowser
     * @param optValue OptionValue
     */
    clickOnConnToBBOpts(browser : NightwatchBrowser, optValue : string) {
        if(optValue == 'YES') {
            helperUtils.click(browser, 'xpath', this.elements.connectToBroadBandYesOption, 'Clicked on ' + optValue + ' Option');
        } else {
            helperUtils.click(browser, 'xpath', this.elements.connectToBroadBandNoOption, 'Clicked on ' + optValue + ' Option');
        }
    },

    /**
     * Clicks on 'Do you have rooftop solar panels?' Options
     * @param browser NightWatchBrowser
     */
    clicksOnRoofTopPanelOpts(browser:NightwatchBrowser, optValue : string) {
        if(optValue == 'YES') {
            helperUtils.click(browser, 'xpath', this.elements.solarPanelYesOpt, 'Clicked on ' + optValue + ' Option');
        } else {
            helperUtils.click(browser, 'xpath', this.elements.solarPanelNoOpt, 'Clicked on ' + optValue + ' Option');
        }
    },

    /**
     * Selects the Electricity Provider From the List
     * @param browser NightWatchBrowser
     */
    selectElecProvFromList(browser:NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', this.elements.elecProvListDD, 'Clicked on Electricty Provider List Dropdown');
        helperUtils.click(browser, 'xpath', '//select[@id="elecproviderlist_usage"]//option[text()="' + optValue + '"]', optValue + ' Option Clicked')
    },

    /**
     * Selects Electricity Usage.
     * @param browser NightWatchBrowser
     * @param usage Electricity Usage
     */
    selectElecUsage(browser:NightwatchBrowser, usage:string) {
        helperUtils.click(browser, 'xpath', '//div[@data-form-showif="sfelec=1 and vert!=gas and customerType=RES"]/div[2]/ul/li/label/div/div/input[@value="' + usage + '"]', usage + ' Usage Type Selected.');
    },

    /**
     * Selects the Gas Provider From the List
     * @param browser NightWatchBrowser
     */
     selectGasProvFromList(browser:NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'xpath', this.elements.gasProvListDD, 'Clicked on Electricty Provider List Dropdown');
        helperUtils.click(browser, 'xpath', '//select[@id="gasproviderlist_usage"]//option[text()="' + optValue + '"]', optValue + ' Option Clicked')
    },

    /**
     * Selects Gas Usage.
     * @param browser NightWatchBrowser
     * @param usage Gas Usage
     */
     selectGasUsage(browser:NightwatchBrowser, usage:string) {
        helperUtils.click(browser, 'xpath', '//div[@data-form-showif="sfgas=1 and vert!=electricity and customerType=RES"]/div[2]/ul/li/label/div/div/input[@value="' + usage + '"]', usage + ' Usage Type Selected.');
    },

    /**
     * Validates the "What you are looking to compare" Question and its Options are Present or not.
     */
    validateLookToCompQtnAndOptns(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.elecAndGasOpt, 'Electricity and Gas Option is Visible in... "What you are looking to compare?" Question');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.elecOpt, 'Electricity Option is Visible in... "What you are looking to compare?" Question');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasOpt, 'Gas Option is Visible in... "What you are looking to compare?" Question');
    },

    /**
     * Validates the "What type of property?" Question and its Options are Present or not.
     */
     validateTypeOfPropQtnAndOptns(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.myHomeOpt, 'My Home Option is Visible in... "What type of property?" Question');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.myBusinessOpt, 'My Business Option is Visible in... "What type of property?" Question');
        
    },

     /**
     * Validates the "Do you own or rent the property?" Question and its Options are Present or not.
     */
      validateOwnOrRentQtnAndOptns(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'present', this.elements.ownOpt, 'Own Option is Visible in... "Do you own or rent the property?" Question');
        helperUtils.assertElementStatus(browser, 'present', this.elements.rentOpt, 'Rent Option is Visible in... "Do you own or rent the property?" Question');  
    },

    /**
     * Validates the "Are you moving into this property?" Question and its Options are Present or not.
     */
     validateAreYouMovInToPropertOptions(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'present', this.elements.movingToHouseYesOpt, 'Yes Option is Visible in... "Are you moving into this property?" Question');
        helperUtils.assertElementStatus(browser, 'present', this.elements.movintToHouseNoOpt, 'No Option is Visible in... "Are you moving into this property?" Question');   
    },

    /**
     * Validates the Your Summary Section in Your Needs Page
     */
    validateYourSummarySection(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.yourSummarySection, 'Your Summary Section is Visible');
    },

    /**
     * Validates the " Do you have rooftop solar panels? " Question and its Options are Present or not.
     */
     validateDoYouHaveRoofTopSolarPanelsOptions(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'present', this.elements.solarPanelYesOpt, 'Yes Option is Visible in... " Do you have rooftop solar panels? " Question');
        helperUtils.assertElementStatus(browser, 'present', this.elements.solarPanelNoOpt, 'No Option is Visible in... " Do you have rooftop solar panels? " Question');   
    },

    /**
     * click On Solar Panel Options
     */
    clickOnSolarPanelOption(browser:NightwatchBrowser, option: string) {
        if(option == 'YES') {
            helperUtils.click(browser, 'xpath', this.elements.solarPanelYesOpt, 'Clicked on SOlar Panel Yes Option');
        } else {
            helperUtils.click(browser, 'xpath', this.elements.solarPanelNoOpt, 'Clicked on Solar Panel No Option');
        }
    },

    /**
     * Validates the "Are you considering Solar Panels in the next 12 months?" Question and its Options are Present or not.
     */
     validateAreYouConsideringSolarPanelOpt(browser:NightwatchBrowser, considerSolOpt: string) {
        helperUtils.assertElementStatus(browser, 'present', '//h2[text()="Your Electricity Details"]/../fieldset/div[2]/div[2]/div/div/input/..//label[text()="'+ considerSolOpt +'"]', considerSolOpt + ' Option is Visible in... " Are you considering Solar Panels in the next 12 months? " Question');
    },

    /**
     * Selects the Are you COnsidering Solar Panels for next 12 months
     */
     clickOnConsSolPanForNext12MonthsOpt(browser:NightwatchBrowser, considerSolOpt: string) {
        helperUtils.click(browser, 'xpath', '//h2[text()="Your Electricity Details"]/../fieldset/div[2]/div[2]/div/div/input/..//label[text()="'+ considerSolOpt +'"]', 'Clicked on ' + considerSolOpt + ' Option');
    },

    /**
     * Validates the "Who is Your Current Electricity Provider? " Question and its Options are present or not.
     */
    validateWhoIsYourCurrElecProv(browser:NightwatchBrowser, optValue : string) {
        helperUtils.assertElementStatus(browser, 'present', '//select[@name="Electricity_SupplierNonSA"]//option[text()="' + optValue + '"]', optValue + ' Option Value is Present in " Who is Your Current Electricity Provider? " ');
    },

    /**
     * Validates the "Who is Your Current Gas Provider? " Question and its Options are present or not.
     */
     validateWhoIsYourCurrGasProv(browser:NightwatchBrowser, optValue : string) {
        helperUtils.assertElementStatus(browser, 'present', '//select[@name="Gas_Supplier"]//option[text()="' + optValue + '"]', optValue + ' Option Value is Present in " Who is Your Current Gas Provider? " ');
    },

    /**
     * Validates the Error Message Notification
     * @param multi : In Case of Multiple Xpaths Data: boolean value
     */
    validateErrorMsgNotif(browser : NightwatchBrowser, errMsg : string, multi?: boolean) {
        if(multi == true) {
            helperUtils.assertElementStatus(browser, 'visible', '(//div[text()="' + errMsg + '"])[2]', errMsg + ' - Error Message is Visible.');
        } else {
            helperUtils.assertElementStatus(browser, 'visible', '//div[text()="' + errMsg + '"]', errMsg + ' - Error Message is Visible.');
        }
        
    },

    /**
     * Clicks on Continue Button
     */
    clickOnContinueBtn(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.continueBtn, 'Clicked on Continue Button');
    },

    /**
     * Clicks on Compliance Checkbox in needs page
     */
    clickOnComplianceCB(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.complianceCB , 'Compliance Checkbox is Visible clicking On it.');
    },

     /**
     * Clicks on Terms And Conditions Checkbox in needs page
     */
      clickOnTermsAndCOnditionsCB(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.termsAndConditionsCB , 'Terms & Conditions Checkbox is Visible clicking On it.');
    },

    /**
     * Move in Date date Picker Validation
     */
    validateMoveInDatePicker(browser:NightwatchBrowser) {
        var moveInDate1 = helperUtils.getDate('dd-mm-yyyy', 2);
        var moveInDate = moveInDate1?.toString();
        
        // var day = moveInDate?.substring(0,2);
        // if(day?.charAt(0) == '0') {
        //     var day = moveInDate?.substring(1,2);
        //     console.log('Day is : ' + day);
        // } else {
        //     var day = moveInDate?.substring(0,2);
        //     console.log('Day1 is : ' + day);
        // }
        browser.click(this.elements.moveInDate);
        helperUtils.enterKeys(browser, 'xpath', this.elements.moveInDate, moveInDate, 'Enetered Move in Date : '+moveInDate);
        browser.getText(this.elements.moveInDate, (text)=>{
           console.log("Value is : " +text.value);
           if(text.value == ''){
            var moveInDate1 = helperUtils.getDate('dd-mm-yyyy', 3);
            var moveInDate = moveInDate1?.toString();
            helperUtils.enterKeys(browser, 'xpath', this.elements.moveInDate, moveInDate, 'Enetered Move in Date : '+moveInDate);
           } else {
               console.log("Date is Not disabled So enetered...");
           }
        })
        browser.pause(5000);
        browser.isEnabled('//span[text()="5"]/..', function(result) {
            console.log("Status is : "+result.status);
            console.log("Value is : " +result.value);
        });
    },

    /**
     * Validates the Let Us Call Form
     */
    validateLetUsCallForm(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'xpath', this.elements.letusCallBtn, 'Clicked on Let Us Call Button');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormfirstName, 'First name Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormLastName, 'Sur name Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormMobileNo, 'Mobile Number Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormOtherNo, 'Other Number Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormAddress, 'Address Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormMyHomeProperty, 'My Home Property Option Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormMyBusinessProperty, 'My Businesss Property Option Field is Visible in Let Us call Form');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.callFormCallMeBtn, 'Call Me Button is Visible in Let Us call Form');
    },

     /**
   * Validates the About iSelect section Links
   * @param browser Nightwatch Browser
   * @param yourNeedsPageLink About iSelect Links
   */
   validateYourNeedsPageLinks(browser:NightwatchBrowser, yourNeedsPageLink : string) {
    helperUtils.assertElementStatus(browser,'visible','//a[text()="' + yourNeedsPageLink + '"]', yourNeedsPageLink + ' Link in Your Needs Page is Visible');
},

};
  
