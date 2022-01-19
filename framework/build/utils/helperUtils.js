"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperUtils = void 0;
exports.helperUtils = {
    click(browser, selector, successMessage) {
        browser.useXpath().waitForElementPresent(selector, 10000, false, null, successMessage)
            .click(selector, () => {
            console.log("CallBack : clicked the webElement : " + successMessage);
        });
    },
    enterInputValue(browser, selector, value) {
        return browser
            .sendKeys(selector, value, () => {
            console.log("CallBack :entering input value as " + value);
        });
    },
    /**
     * @param verificationType : element is present or displayed is checked
     * then we do other user actions on this webElement
     */
    verifyWebElementExistForInteraction(browser, verificationType, selector, waitTime, abortOnFailure, successMessage) {
        if (verificationType === "present") {
            browser.useXpath().waitForElementPresent(selector, waitTime, abortOnFailure, () => {
                console.log("CallBack : Status of webElement present");
            }, successMessage);
        }
        else if (verificationType === "visible") {
            browser.useXpath().waitForElementVisible(selector, waitTime, abortOnFailure, () => {
                console.log("CallBack : Status of webElement visible");
            }, successMessage);
        }
        else if (verificationType === "isVisible") {
            browser.useXpath().assert.visible(selector, successMessage);
        }
        else if (verificationType === "enabled") {
            browser.expect.element(selector).to.be.enabled;
        }
    },
    /**
     * We check for the element to be absent (i.e) not present or visible
     * Eg: like loading Icon or etc
     */
    verifyElementDoesNotExist(browser, verificationType, selector, waitTime, abortOnFailure) {
        if (verificationType === "notPresent") {
            browser.waitForElementNotPresent(selector, waitTime, abortOnFailure, (status) => {
                console.log("CallBack : Status of webElement present" + status);
                return status;
            });
        }
        else if (verificationType === "notVisible") {
            browser.waitForElementNotVisible(selector, waitTime, abortOnFailure, (status) => {
                console.log("CallBack : Status of webElement visible" + status);
                return status;
            });
        }
        else if (verificationType === "notEnabled") {
            browser.expect.element(selector).to.not.be.enabled;
        }
    },
    /**
     *
     * @param whichFrame   - parent or child frames which we want to navigate to
     * @param frameIdentifier - name of the frameID or frameName which we want to switch to
     */
    handleFrames(browser, whichFrame, frameIdentifier) {
        if (whichFrame == "parent" && frameIdentifier == null) {
            browser.frameParent((result) => {
                console.log("callBack : switching to parent frame " + result);
                return result;
            });
        }
        else if (whichFrame == "childFrames" && frameIdentifier != null) {
            browser.frame(frameIdentifier, (result) => {
                console.log("callBack : switching to parent frame " + result);
                return result;
            });
        }
    },
    assertWebElementOrItsText(browser, assertionType, selector, expectedText) {
        switch (assertionType) {
            case "isEqual":
                browser.expect.element(selector).text.to.equal(expectedText);
                break;
            case "toContain":
                browser.expect.element(selector).text.to.contain(expectedText);
            case "isNotEqual":
                browser.expect.element(selector).text.to.not.equal(expectedText);
                break;
            case "doesNotContain":
                browser.expect.element(selector).text.to.not.contain(expectedText);
                break;
        }
    },
    switchToPrimaryWindow(browser) {
        browser.windowHandles((result) => {
            let handle = result.value[0];
            browser.switchWindow(handle);
        });
        return browser;
    },
    openURL(browser) {
        browser.url(browser.launch_url, (result) => {
            console.log(result);
        });
        return browser;
    },
    switchToOtherWindow(browser, windowIndexValue) {
        browser.windowHandles((result) => {
            let handle = result.value[windowIndexValue];
            browser.switchWindow(handle);
        });
        return browser;
    },
    browserActions(browser, action) {
        if (action == "forward") {
            browser.forward();
        }
        else if (action == "back") {
            browser.back();
        }
    },
    getAndAssertURL(browser, assertionType, expectedURL) {
        let savedUrl;
        if (assertionType == "completeURL") {
            browser.url((result) => {
                savedUrl = result;
            });
            browser.assert.urlEquals(expectedURL);
        }
        else if (assertionType == "partOfURL") {
            browser.url((result) => {
                savedUrl = result;
            });
            browser.assert.urlContains(expectedURL);
        }
        console.log("URL from browser : " + savedUrl + "And our expected URL " + expectedURL);
    },
    getAndAssertPageTitle(browser, expectedTitle) {
        let actualTitle;
        browser.title(function (result) {
            actualTitle = result.value;
        });
        browser.assert.title(expectedTitle);
        console.log("URL from browser : " + actualTitle + "And our expected URL " + expectedTitle);
    },
    clearAndEnterInput(browser, selector, value) {
        browser.clearValue(selector, () => {
            console.log("callBack : cleared the value of input field");
        });
        browser.sendKeys(selector, value, () => {
            console.log("CallBack :entering input value as " + value);
        });
    }
};
