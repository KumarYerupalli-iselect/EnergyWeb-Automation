"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveToElementUtil {
    moveToElement(browser, selector, message) {
        return browser.useXpath()
            .waitForElementVisible(selector, 20000, true, null, message)
            .getLocationInView(selector, (result) => {
            browser.moveToElement(selector, result.value[0], result.value[1]);
        });
    }
    ;
    click(browser, selector, message) {
        return browser.useXpath().waitForElementVisible(selector, 20000, false, null, message)
            .click(selector);
    }
    validateTitle(browser, selector, message) {
        return browser.waitForElementVisible(selector, 20000, false, null, message);
    }
    random(length) {
        return Math.random().toString(16).substr(2, length);
    }
    ;
}
exports.default = MoveToElementUtil;
