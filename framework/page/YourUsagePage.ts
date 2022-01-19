/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Helper Utils Object */
import {helperUtils} from '../utils/helperUtils'

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
      opeingHrsPage : '//div[@id="primary"]'
  },
  
  /**
   * Validates the Call Us Section in Your Usage Page
   * @param browser Night Watch Browser
   */
  validateCallUsSection(browser:NightwatchBrowser) {
      helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.callUsElement, 20000, false, 'Call Us Element is Visbile.');
      helperUtils.click(browser, this.elements.openingHoursLink, 'Opening Hours Link is Visbile, Clicking on the link');
      helperUtils.switchToOtherWindow(browser, 1);
      helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.opeingHrsPage, 20000, false, 'Opening Hrs Page Loaded');
  }


  };
  
