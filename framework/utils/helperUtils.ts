import { NightwatchBrowser } from "nightwatch";

export const helperUtils= {

  click(browser: NightwatchBrowser, selector: string, successMessage: string) {
    browser.useXpath().waitForElementPresent(selector, 10000, false, null, successMessage)
                      .click(selector, () => {
                              console.log("CallBack : clicked the webElement : " + successMessage);
                            })
  },

    enterInputValue(browser: NightwatchBrowser , selector: string, value:string) {
      return browser
          .sendKeys(selector, value, () => {
            console.log("CallBack :entering input value as " + value );
           }); 
    },

    /**
     * @param verificationType : element is present or displayed is checked
     * then we do other user actions on this webElement
     */
    verifyWebElementExistForInteraction(browser: NightwatchBrowser , 
      verificationType: string, selector: string, waitTime: number, abortOnFailure: boolean, successMessage: string){
            if (verificationType === "present") {
              browser.useXpath().waitForElementPresent(selector, waitTime, abortOnFailure, () => {
                console.log("CallBack : Status of webElement present");
              }, successMessage);

            }
            else if (verificationType === "visible") {
              browser.useXpath().waitForElementVisible(selector, waitTime, abortOnFailure, () => {
                console.log("CallBack : Status of webElement visible" );
              },  successMessage);
              
            }
            else if (verificationType === "isVisible"){
              browser.useXpath().assert.visible(selector,successMessage);
            }

            else if (verificationType === "enabled"){
              browser.expect.element(selector).to.be.enabled; 
            }
    },

    /**
     * We check for the element to be absent (i.e) not present or visible 
     * Eg: like loading Icon or etc
     */
    verifyElementDoesNotExist(browser: NightwatchBrowser , 
      verificationType: string, selector: string, waitTime: number, abortOnFailure: boolean)
    {   
      if (verificationType === "notPresent") {
        browser.waitForElementNotPresent(selector, waitTime, abortOnFailure, (status) => {
          console.log("CallBack : Status of webElement present" + status);
          return status;
        })
      }
      
      else if (verificationType === "notVisible") {
        browser.waitForElementNotVisible(selector, waitTime, abortOnFailure, (status) =>{
          console.log("CallBack : Status of webElement visible" + status);
          return status;
        });       
      }

      else if (verificationType === "notEnabled"){
        browser.expect.element(selector).to.not.be.enabled; 
      }

    },

    /**
     * 
     * @param whichFrame   - parent or child frames which we want to navigate to 
     * @param frameIdentifier - name of the frameID or frameName which we want to switch to
     */
    handleFrames(browser: NightwatchBrowser, whichFrame: string, frameIdentifier: string) {
      if (whichFrame == "parent" && frameIdentifier == null) {
        browser.frameParent((result) => {
          console.log("callBack : switching to parent frame " + result);
          return result;
        });
      }
      else if (whichFrame == "childFrames" && frameIdentifier != null){
        browser.frame(frameIdentifier,(result) => {
          console.log("callBack : switching to parent frame " + result);
          return result;
        });
      } 
     },

     assertWebElementOrItsText(browser: NightwatchBrowser, assertionType: string, 
      selector: string, expectedText: string) {
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
  
     openURL(browser: NightwatchBrowser){
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

     browserActions(browser: NightwatchBrowser, action: string)
     {
       if (action == "forward"){
          browser.forward();
       }
       else if (action == "back"){
          browser.back();
       }
     },

     getAndAssertURL(browser: NightwatchBrowser, assertionType: string, expectedURL: string) {
       let savedUrl;
      if(assertionType == "completeURL")
      {
        browser.url((result) => {
        savedUrl = result;
        })
         browser.assert.urlEquals(expectedURL);       
      }
      else if (assertionType == "partOfURL") 
      {
        
        browser.url((result) => {
        savedUrl = result;
        })
         browser.assert.urlContains(expectedURL);  
      }

      console.log("URL from browser : " + savedUrl + "And our expected URL " + expectedURL);

     },

     getAndAssertPageTitle(browser: NightwatchBrowser, expectedTitle: string) {
       let actualTitle;
      browser.title(function(result) {
        actualTitle = result.value
      });
      browser.assert.title(expectedTitle);
      console.log("URL from browser : " + actualTitle + "And our expected URL " + expectedTitle);
     },

     clearAndEnterInput(browser: NightwatchBrowser, selector: string, 
      value: string)
     {
         browser.clearValue(selector, ()=>{
         console.log("callBack : cleared the value of input field");
       });

       browser.sendKeys(selector, value, () => {
          console.log("CallBack :entering input value as " + value );
       }); 
     }

     

     
     


    }



    

    

    








  
