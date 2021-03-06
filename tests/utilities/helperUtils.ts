import { NightwatchBrowser } from "nightwatch";

export const helperUtils = {
  
  click(browser: NightwatchBrowser, using: "css selector" | "xpath", selector: string, successMsg: string) {
    if(using == 'css selector') {
      browser.waitForElementPresent(selector, 10000, 100, undefined, undefined, successMsg)
      .click(selector, () => {
              console.log("CallBack : clicked the webElement : " + successMsg);
            });
    } else {
      browser.useXpath().waitForElementPresent(selector, 10000, 100, undefined, undefined, successMsg)
      .click(selector, () => {
              console.log("CallBack : clicked the webElement : " + successMsg);
            });
    }
  },

  enterKeys(browser: NightwatchBrowser, using: "css selector" | "xpath", selector: string, value : string | undefined, successMsg: string) {
    if(using == "css selector") {
      this.verifyWebElementExistForInteraction(browser, 'present', selector, 20000, 200, undefined, successMsg);
      browser.sendKeys(selector, value, () => {
        console.log("CallBack :entering input value as " + value);
      });
    } else {
      this.verifyWebElementExistForInteraction(browser, 'present', selector, 20000, 200, undefined, successMsg);
      browser.useXpath().sendKeys(selector, value, () => {
        console.log("CallBack :entering input value as " + value);
      });
    }
  },

  /**
   * @param verificationType : element is present or displayed is checked
   * then we do other user actions on this webElement
   */
  verifyWebElementExistForInteraction(
    browser: NightwatchBrowser,
    verificationType: "present" | "visibile" | "isVisible" | "isEnabled",
    selector: string,
    waitTime: number,
    polltime : number,
    abortOnFailure: boolean | undefined,
    successMsg: string
  ) {
    if (verificationType === "present") {
      browser.useXpath().waitForElementPresent(selector, waitTime, polltime, abortOnFailure,() => {
          console.log("CallBack : Status of webElement present");
        }, successMsg);
    } else if (verificationType === "visibile") {
      browser.useXpath().waitForElementVisible(selector, waitTime, polltime, abortOnFailure,() => {
          console.log("CallBack : Status of webElement visible");
        }, successMsg);
    } else if (verificationType === "isVisible") {
      browser.useXpath().isVisible(selector, () => {
        console.log("CallBack : Status of webElement isVisible");
      });
    } else if (verificationType === "isEnabled") {
      browser.useXpath().expect.element(selector).to.be.enabled;
    }
  },

  /**
   * We check for the element to be absent (i.e) not present or visible
   * Eg: like loading Icon or etc
   */
  verifyElementDoesNotExist(
    browser: NightwatchBrowser,
    verificationType: "notPresent" | "notVisible" | "notEnabled",
    selector: string,
    waitTime: number,
    polltime : number,
    abortOnFailure: boolean | undefined,
    successMsg : string
  ) {
    if (verificationType === "notPresent") {
      browser.useXpath().waitForElementNotPresent(selector, waitTime, polltime, abortOnFailure,
        (status) => {
          console.log("CallBack : Status of webElement present" + status);
          return status;
        }, successMsg);
    } else if (verificationType === "notVisible") {
      browser.useXpath().waitForElementNotVisible(selector, waitTime, polltime, abortOnFailure,
        (status) => {
          console.log("CallBack : Status of webElement visible" + status);
          return status;
        }, successMsg);
    } else if (verificationType === "notEnabled") {
      browser.useXpath().expect.element(selector).to.not.be.enabled;
    }
  },

  /**
   *
   * @param whichFrame   - parent or child frames which we want to navigate to
   * @param frameIdentifier - name of the frameID or frameName which we want to switch to
   */
  handleFrames(browser: NightwatchBrowser, whichFrame: "parent" | "childFrames", frameIdentifier?: string) {
    if (whichFrame == "parent" && frameIdentifier == null) {
      browser.frameParent((result) => {
        console.log("callBack : switching to parent frame " + result);
        return result;
      });
    } else if (whichFrame == "childFrames" && frameIdentifier != null) {
      browser.frame(frameIdentifier, (result) => {
        console.log("callBack : switching to parent frame " + result);
        return result;
      });
    }
  },

  assertWebElementOrItsText(
    browser: NightwatchBrowser,
    assertionType: "isEqual" | "toContain" | "isNotEqual" | "doesNotContain",
    selector: string,
    expectedText: string
  ) {
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

  switchToPrimaryWindow(browser: NightwatchBrowser) {
    browser.windowHandles((result) => {
      let handle = result.value[0];
      browser.switchWindow(handle);
    });
    return browser;
  },

  openURL(browser: NightwatchBrowser) {
    browser.url(browser.launch_url, (result) => {
      console.log(result);
    });
    return browser;
  },

  switchToOtherWindow(browser: NightwatchBrowser, windowIndexValue: number) {
    browser.windowHandles((result) => {
      let handle = result.value[windowIndexValue];
      browser.switchWindow(handle);
    });
    return browser;
  },

  browserActions(browser: NightwatchBrowser, action: "forward" | "back") {
    if (action == "forward") {
      browser.forward();
    } else if (action == "back") {
      browser.back();
    }
  },

  validateURL( browser: NightwatchBrowser, assertionType: "completeURL" | "partOfURL", expectedURL: string, successMsg : string) {
    let savedUrl;
    if (assertionType == "completeURL") {
      browser.url((result) => {
        savedUrl = result;
      });
      browser.verify.urlEquals(expectedURL, successMsg);
    } else if (assertionType == "partOfURL") {
      browser.url((result) => {
        savedUrl = result;
      });
      browser.verify.urlContains(expectedURL, successMsg);
    }
    console.log(
      "URL from browser : " + savedUrl + "And our expected URL " + expectedURL
    );
  },

  validateTitle(browser: NightwatchBrowser, expectedTitle: string, successMsg : string) {
    let actualTitle;
    browser.title(function (result) {
      actualTitle = result.value;
    });
    browser.verify.title(expectedTitle, successMsg);
    console.log(
      "URL from browser : " +
        actualTitle +
        "And our expected URL " +
        expectedTitle
    );
  },

  clearAndEnterInput(browser: NightwatchBrowser, selector: string, value: string) {
    browser.clearValue(selector, () => {
      console.log("callBack : cleared the value of input field");
    });
    browser.sendKeys(selector, value, () => {
      console.log("CallBack :entering input value as " + value);
    });
  },

  verifyAndEnterInputInElement(
    browser: NightwatchBrowser,
    selector,
    waitTime,
    pollTime,
    inputValue,
    selectorName
  ) {
    browser.waitForElementPresent(
      selector,
      waitTime,
      pollTime,
      undefined,
      undefined,
      selectorName + " >> element is present "
    );
    browser.sendKeys(selector, inputValue);
  },

  verifyAndClickElement(
    browser: NightwatchBrowser,
    selector,
    waitTime,
    pollTime,
    selectorName
  ) {
    browser.waitForElementPresent(
      selector,
      waitTime,
      pollTime,
      undefined,
      undefined,
      selectorName + " >> element is present "
    );

    browser.click(selector, selector);
  },

  moveToElement(browser: NightwatchBrowser, selector: string, message : string) {
    return browser.useXpath()
      .waitForElementVisible(selector, 20000, 200, undefined, undefined, message)
      .getLocationInView(selector, (result) => {
        browser.moveToElement(selector, result.value[0], result.value[1])
      });
    },

    random(length: number) {
      return Math.random().toString(16).substr(2, length);
    },

    assertElementStatus(browser: NightwatchBrowser, assertionType: "present" | "visible" ,  selector: string, successMsg : string){
      switch (assertionType) {
        case 'present':
          browser.useXpath().assert.elementPresent(selector, successMsg);
          break;
        case 'visible':
          browser.useXpath().assert.visible(selector, successMsg);
          break;
    }
  },

    getDate(format : string, dateCount : number) {
      if(dateCount == undefined)
          dateCount = 0;
      let monthNames =["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];
      var day = new Date();
      if(format == undefined) {
          return( day.getDate() + dateCount) + "-" + monthNames[day.getMonth()] + "-" + day.getFullYear();
      } else if(format == 'dd-mm-yyyy') {
          var date = (day.getDate() + dateCount).toString();
          var month = (day.getMonth() + 1).toString();
          if(date.length == 1)
              date = '0' + date;
          if(month.length == 1)
              month = '0' + month;
          return date + "-" + month + "-" + day.getFullYear();
      } else if (format == 'dd-mmm-yyy') {
        let monthNames =["January","February","March","April", "May","June","July","August", "September", "October","November","December"];
        var date = (day.getDate() + dateCount).toString();
        return date + "-" + (monthNames[day.getMonth()]).toString() + "-" + (day.getFullYear()).toString();
      }
    }

};
