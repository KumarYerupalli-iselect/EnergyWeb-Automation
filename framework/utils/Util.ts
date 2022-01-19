import { NightwatchBrowser } from "nightwatch";

class MoveToElementUtil {

  public moveToElement(browser: NightwatchBrowser, selector: string, message : string) {
    return browser.useXpath()
      .waitForElementVisible(selector, 20000, true, null, message)
      .getLocationInView(selector, (result) => {
        browser.moveToElement(selector, result.value[0], result.value[1])
      });

  };

  public click(browser: NightwatchBrowser, selector : string, message : string) {
    return browser.useXpath().waitForElementVisible(selector, 20000, false, null, message)
                             .click(selector);
  }

  public validateTitle(browser : NightwatchBrowser, selector : string, message : string) {
    return browser.waitForElementVisible(selector, 20000, false, null, message);
  }

  public random(length: number) {
    return Math.random().toString(16).substr(2, length);
  };

}

export default MoveToElementUtil;