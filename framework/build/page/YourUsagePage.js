"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yourUsagePage = void 0;
/** Helper Utils Object */
const helperUtils_1 = require("../utils/helperUtils");
/**
 * Your Needs Page PageObject and Related Methods
 */
exports.yourUsagePage = {
    /**
     * update locators in elements section which is captured from DOM section of web browser
     */
    elements: {
        callUsElement: '//a[text()="13 19 20"]',
        openingHoursLink: '//a[text()="Opening Hours"]',
        opeingHrsPage: '//div[@id="primary"]'
    },
    /**
     * Validates the Call Us Section in Your Usage Page
     * @param browser Night Watch Browser
     */
    validateCallUsSection(browser) {
        helperUtils_1.helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.callUsElement, 20000, false, 'Call Us Element is Visbile.');
        helperUtils_1.helperUtils.click(browser, this.elements.openingHoursLink, 'Opening Hours Link is Visbile, Clicking on the link');
        helperUtils_1.helperUtils.switchToOtherWindow(browser, 1);
        helperUtils_1.helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.opeingHrsPage, 20000, false, 'Opening Hrs Page Loaded');
    }
};
