import { NightwatchBrowser } from "nightwatch";
import Util from '../utils/Util';
import * as data from '../data/HomePageData.json';
const util = new Util();


class HomePage {
  
  elements = {

    energyPartnersHeader : "//h2[text()='See our range of energy providers*']",
    viewOurPartnersBtn : "//a[text()='View our energy partners']",
    ourPartnersPageTitle : 'iSelect - Partners',
    /** Health Insurance Partners Logos Elements */
    healthInsuranceLogosTitle : "//strong[text()='Health Insurance']",
    ahmLogoHealth : '//a[@href="/health-insurance/ahm/"]//img',
    aiaLogoHealth : '//a[@href="/health-insurance/aia/"]//img',
    ausUnityLogoHealth : '//a[@href="/health-insurance/australian-unity/"]//img',
    bupaLogoHealth : '//a[@href="/health-insurance/bupa/"]//img',
    frankLogoHealth : '//a[@href="/health-insurance/frank-health-insurance/"]//img',
    latrobeLogoHealth : '//a[@href="/health-insurance/latrobe-health-services/"]//img',
    nibLogoHealth : '//a[@href="/health-insurance/nib/"]//img',
    tuhLogoHealth : '//a[@href="/health-insurance/tuh/"]//img',
    /** Energy Partners Logos Elements */
    energyPartnersLogosTitle : "//strong[text()='Energy']",
    aglLogoEnergy : '//a[@href="/energy/energy-providers/agl/"]//img',
    lumoLogoEnergy : '//a[@href="/energy/energy-providers/lumo-energy/"]//img',
    redEnergLogoEnergy : '//a[@href="/energy/energy-providers/red-energy/"]//img',
    momentumEnergLogoEnergy : '//a[@href="/energy-providers/momentum-energy/"]//img',
    originLogoEnergy : '//a[@href="/energy/energy-providers/origin/"]//img',
    energyAustraliaLogoEnergy : '//a[@href="/energy/energy-providers/energy-australia/"]//img',
    simplyEnergLogoEnergy : '//a[@href="/energy-providers/simply-energy/"]//img',
    actewaglLogoEnergy : '//a[@href="/energy/energy-providers/actewagl/"]//img',
    /** Internet Partners Logos Elements */
    internetPartnersLogosTitle : "//strong[text()='Internet']",
    belongLogoInternet : '//a[@href="/internet/internet-providers/belong/"]//img',
    telstraLogoInternet : '//a[@href="/internet/internet-providers/telstra"]//img',
    harbourISPLogoInternet : '//a[@href="/internet/internet-providers/harbour-isp/"]//img',
    originLogoInternet : '(//a[@href="/energy/energy-providers/origin/"]//img)[2]',
    optusLogoInternet : '//a[@href="/internet/internet-providers/optus/"]//img',

    energyAddressBar : '//input[@id="address"]',
    energyAddressDDoption : '//div[text()="'+ data.CommonData.Address +'"]',
    elecAndGasIcon : '(//a[@href="/energy/"]//div)[1]',
    startBtn : '//button[text()="Start"]',
    iSelectIconInYourUsagePage : '//a[@href="http://www.iselect.com.au"]//img',
    yourUsagePageTitleXpath : '//title[text()="iSelect - Electricity Comparison | Gas Rates | Compare Energy Rates"]',
  
    youMightBeInterestedHeader : '//h2[text()="You might be interested in..."]',
    solarBasicLink : '//h3[text()="The solar energy basics "]/..',
    solarBasicImg : '//h3[text()="The solar energy basics "]/../../../div[1]',
    switchingElecAndGasLink : '//h3[text()="Switching electricity & gas"]/..',
    switchingElecImg : '//h3[text()="Switching electricity & gas"]/../../../div[1]',
    electricityPlanLink : '//h3[text()="How to find the electricity plan that suits you"]/..',
    electricityPlanImg : '//h3[text()="How to find the electricity plan that suits you"]/../../../div[1]',
    gridConnectLink : '//h3[text()="Grid connect and off grid"]/..',
    gridConnectImg : '//h3[text()="Grid connect and off grid"]/../../../div[1]',
    saveEnergyLink : '//h3[text()="How to save energy"]/..',
    saveEnergyImg : '//h3[text()="How to save energy"]/../../../div[1]',
    nextBtnInYurUsageSection : '//button[text()="Next"]',

    phoneUsElement : '(//span[text()="13 19 20"]/..)[1]',
    openingHrsToolTip : '(//div[@class="opening-hours"])[1]',

    compElecAndGasSideBtn : '//a[text()="Compare Electricity And Gas "]',
    energyFooter : '//footer[@data-vertical="energy"]',

    facebookLink : '//a[@title="iSelect on Facebook"]',
    twitterLink : '//a[@title="iSelect on Twitter"]',
    linkedInLink : '//a[@title="iSelect on LinkedIn"]',
    youtubeLink : '//a[@title="iSelect on YouTube"]',
    yourUsageHeader : '//div[@class="container h1Txt "]//span'

  };

  /**
   * Validates Our Partners Header in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateOurPartnersHeaderDisplayed(browser: NightwatchBrowser) {
    return browser.useXpath().assert.elementPresent(this.elements.energyPartnersHeader, 'See our range of energy providers* -- Header is Present  ');
  }; 
  
  /**
   * Validates Our Partners Button in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateViewOurPartnersBtnDisplayed(browser: NightwatchBrowser) {
    return browser.useXpath().assert.elementPresent(this.elements.viewOurPartnersBtn, 'View Our Partners Button is Present  ' );
  }; 

  /**
   * Clicks on View Our Partners Button in Energy Home Page
   * @param browser NightWatch Browser
   */
  public clickOnViewOurPartnersBtn(browser : NightwatchBrowser) {
    return browser.useXpath().click(this.elements.viewOurPartnersBtn);
  };

  /**
   * Validates Our Partners Page in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateOurPartnersPage(browser:NightwatchBrowser) {
    return browser.assert.title(this.elements.ourPartnersPageTitle, 'Our Partners Page is Loaded  ');
  };

  /**
   * Validates Health Partners Logos in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateHealthPartnersLogosDisplayed(browser: NightwatchBrowser) {
    return browser.useXpath().assert.elementPresent(this.elements.healthInsuranceLogosTitle, 'Health Insurance Logo Header is Present  ')
                             .assert.elementPresent(this.elements.ahmLogoHealth, 'AHM Health Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.aiaLogoHealth, 'AIA Health Partner Logo is Present ')
                             .assert.elementPresent(this.elements.ausUnityLogoHealth, 'Australia Unity Health Partner Logo is present  ')
                             .assert.elementPresent(this.elements.bupaLogoHealth, 'Bupa Health Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.frankLogoHealth, 'Frank Health Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.latrobeLogoHealth, 'Latrobe Health Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.nibLogoHealth, 'NIB Health Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.tuhLogoHealth, 'TUH Health Partner Logo is Present  ');                            
  };

  /**
   * Validates Energy Partners Logos in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateEnergyPartnersLogosDisplayed(browser: NightwatchBrowser) {
    return browser.useXpath().assert.elementPresent(this.elements.energyPartnersLogosTitle, 'Energy Logo Header is Present  ')
                             .assert.elementPresent(this.elements.aglLogoEnergy, 'AGL Energy Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.lumoLogoEnergy, 'Lumo Energy Partner Logo is Present ')
                             .assert.elementPresent(this.elements.redEnergLogoEnergy, 'red-energy Energy Partner Logo is present  ')
                             .assert.elementPresent(this.elements.momentumEnergLogoEnergy, 'momentum-energy Energy Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.originLogoEnergy, 'Origin Energy Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.energyAustraliaLogoEnergy, 'energy-australia Energy Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.simplyEnergLogoEnergy, 'simply-energy Energy Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.actewaglLogoEnergy, 'actewagl Energy Partner Logo is Present  ');                            
  };

  /**
   * Validates Internet Partners Logos in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateInternetPartnersLogosDisplayed(browser: NightwatchBrowser) {
    return browser.useXpath().assert.elementPresent(this.elements.internetPartnersLogosTitle, 'Internet Logo Header is Present  ')
                             .assert.elementPresent(this.elements.belongLogoInternet, 'Belong Internet Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.telstraLogoInternet, 'Telstra Internet Partner Logo is Present ')
                             .assert.elementPresent(this.elements.harbourISPLogoInternet, 'Harbour-ISP Internet Partner Logo is present  ')
                             .assert.elementPresent(this.elements.originLogoInternet, 'Origin Internet Partner Logo is Present  ')
                             .assert.elementPresent(this.elements.optusLogoInternet, 'Optus Internet Partner Logo is Present  ');                           
  };

  /**
   * Click On Electricity and Gas Icon in Energy Home Page
   * @param browser NightWatch Browser
   */
  public clickOnElecandGasIcon(browser:NightwatchBrowser){
    return browser.useXpath().waitForElementVisible(this.elements.elecAndGasIcon, 20000, false, null, 'Electricity and Gas Icon is Visible and Clicking on Icon')
                             .click(this.elements.elecAndGasIcon)
  }

  /**
   * Enters the Address in Energy Home Page
   * @param browser NightWatch Browser
   * @param postcode PostCode
   */
  public enterAddress(browser:NightwatchBrowser, postcode : string){
    return browser.useXpath().waitForElementVisible(this.elements.energyAddressBar, 20000, false, null, 'Address Search Bar is Visible And Entering Address')
                             .sendKeys(this.elements.energyAddressBar, postcode);  
  };

  /**
   * Clicks on Drop Down Option From Address Bar in Energy Home Page
   * @param browser NightWatch Browser
   */
  public clickOnAddressOption(browser: NightwatchBrowser) {
    browser.useXpath().waitForElementVisible('//div[text()="'+ data.CommonData.Address +'"]', 20000, false, null, 'Drop Down Option is Visible')
    browser.useXpath().assert.elementPresent('//div[text()="'+ data.CommonData.Address +'"]','Drop Down Option is Present')
    util.moveToElement(browser, '//div[text()="'+ data.CommonData.Address +'"]', 'Hovering to DropDown Option')
        .click('//div[text()="'+ data.CommonData.Address +'"]')
        .useXpath().click(this.elements.startBtn)
    return browser;
  };

  /**
   * Validates Your Usage Page
   * @param browser NightWatch Browser
   * @param yourUsagePageTitle YourUsageTitle
   */
  public validateYourUsagePage(browser:NightwatchBrowser, yourUsagePageTitle : string) {
    browser.waitForElementPresent(this.elements.yourUsagePageTitleXpath, 20000, false, null, 'Your Usage Page Title is Visbile')
                  .assert.title(yourUsagePageTitle, 'Your Usage Page Title Matches, Page Loaded')
                  .assert.visible(this.elements.yourUsageHeader,'Your Usage Header is Visible');
  }

  /**
   * Clicks on iSelect Icon in Your Usage Page
   * @param browser NightWatch Browser
   */
  public clickOniSelectIconinYourUsagePage(browser:NightwatchBrowser) {
    return browser.waitForElementPresent(this.elements.iSelectIconInYourUsagePage, 20000, false, null, 'iSelect Icon in Your Usage Page is Visbile')
                  .useXpath().click(this.elements.iSelectIconInYourUsagePage)
  }

  /**
   * Validates the iSelect WordPress Page
   * @param browser NightWatch Browser
   * @param iSelectWordPressURL iSelect WordPress URL
   * @param iSelectWordPressTitle iSelect WordPress Title
   */
  public validateIselectWordPressPage(browser:NightwatchBrowser, iSelectWordPressURL : string, iSelectWordPressTitle : string) {
    return browser.assert.urlEquals(iSelectWordPressURL,'iSelect WordPress Url Matches')
                  .assert.title(iSelectWordPressTitle, 'iSelect WordPress Title Matches and Page Loaded Successfully');
  }

  /**
   * Validates You Might be Interested Header in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateYouMightBeInterestHeader(browser:NightwatchBrowser) {
    return browser.useXpath().waitForElementVisible(this.elements.youMightBeInterestedHeader, 20000, false, null, 'You Might Be Interested In.. Header is Present');
  }

  /**
   * Validates links Present in You Might be Interested in Section
   * @param browser NightWatch Browser
   * @param solarEnergyTitle Solar Energy Basics Page Title
   * @param switchingElecAndGasTitle Switching Electricity and Gas Page Title
   * @param electricityPanTitle How to find the Electricity Plan that suits you Page Title
   * @param gtidConnectTitle Grid Connect and Off-Grid Page Title
   * @param saveEnergyTitle How to Save Energy Page Title
   */
  public validateLinksPresentInYouMightBeInterSection(browser:NightwatchBrowser, solarEnergyTitle : string, switchingElecAndGasTitle : string, electricityPanTitle : string, gtidConnectTitle : string, saveEnergyTitle : string) {
    util.moveToElement(browser, this.elements.solarBasicLink, 'Hovering to You Might Be Interested in.. Section');
    browser.pause(5000);
    util.click(browser, this.elements.solarBasicLink, 'The Solar Energy Basics Link is Present and Clicking on the link.');
    browser.useXpath().waitForElementVisible('//h1', 20000, false, null, 'The Solar Energy Basics Page Loaded.. Header is Visbile.');
    browser.pause(2000);
    browser.assert.title(solarEnergyTitle, 'The Solar Energy Basics Page Title Matches.')
           .back();
    
    util.moveToElement(browser, this.elements.switchingElecAndGasLink, 'Hovering to Switching Electricity and Gas Link');
    browser.pause(5000);
    util.click(browser, this.elements.switchingElecAndGasLink, 'Switching Electricity and Gas Link is Present and Clicking on the link');
    browser.useXpath().waitForElementVisible('//h1', 20000, false, null, 'Switching Electricity and Gas Page Loaded... Header is Visbile.');
    browser.pause(2000);
    browser.assert.title(switchingElecAndGasTitle, 'Switching Electricity and Gas Page Title Matches')
           .back();
    
    util.moveToElement(browser, this.elements.electricityPlanLink, 'Hovering to How to find the Electricity Plan that suits you Link');
    browser.pause(5000);
    util.click(browser, this.elements.electricityPlanLink, 'How to find the Electricity Plan that suits you Link is Present and Clicking on the link');
    browser.useXpath().waitForElementVisible('//h1', 20000, false, null, 'How to find the Electricity Plan that suits you Page Loaded... Header is Visbile.');
    browser.pause(2000);
    browser.assert.title(electricityPanTitle, 'How to find the Electricity Plan that suits you Page Title Matches')
          .back();
    
    util.moveToElement(browser, this.elements.gridConnectLink, 'Hovering to Grid Connect and Off-Grid Link');
    browser.pause(5000);
    util.click(browser, this.elements.gridConnectLink, 'Grid Connect and Off-Grid Link is Present and Clicking on the link');
    browser.useXpath().waitForElementVisible('//h1', 20000, false, null, 'Grid Connect and Off-Grid Page Loaded... Header is Visbile.');
    browser.pause(2000);
    browser.assert.title(gtidConnectTitle, 'Grid Connect and Off-Grid Page Title Matches')
          .back();
    

    util.click(browser, this.elements.nextBtnInYurUsageSection, 'Clicking on Next Button');
    browser.pause(5000);
    util.click(browser, this.elements.saveEnergyLink, 'How to Save Energy Link is Present and Clicking on the link');
    browser.useXpath().waitForElementVisible('//h1', 20000, false, null, 'How to Save Energy Page Loaded... Header is Visbile.');
    browser.pause(2000);
    browser.assert.title(saveEnergyTitle, 'How to Save Energy Page Title Matches')
          .back();
  }

  /**
   * Validates Call Us Tool Tip in Energy Home Page
   * @param browser NightWatch Browser
   */
  public validateCallUsToolTip(browser:NightwatchBrowser) {
    util.moveToElement(browser,this.elements.phoneUsElement, 'Call Us Elemenet is visible and Hovering on to it.');
    browser.useXpath().waitForElementVisible(this.elements.openingHrsToolTip, 20000, true, null, 'Tool tip is visible after hovering on Call Us Element.');
  }

  /**
   * Moves to the Bottom of the Page
   * @param browser NightWatch Browser
   */
  public moveToBottomofPage(browser:NightwatchBrowser) {
    util.moveToElement(browser, this.elements.energyFooter, 'Scrolled down to Bottom of the Page');
  }

  /**
   * Click and Validates the Compare Electricity and Gas Button
   * @param browser NightWatch Browser
   */
  public clickAndValidateCompElecandGasBtn(browser:NightwatchBrowser) {
    util.click(browser, this.elements.compElecAndGasSideBtn, 'Clicking on "Compare Electricity and Gas" Right Side Button');
    browser.pause(3000);
    browser.useXpath().assert.visible(this.elements.energyAddressBar, 'Scrolled to top of the Page by clicking on "Compare Electricity and Gas" button');
  }

  /**
   * Validates the Social Media Links
   * @param browser NightWatch Browser
   */
  public validateSocialMediaLinks(browser:NightwatchBrowser) {
    browser.useXpath().assert.visible(this.elements.facebookLink, 'Facebook Link in Footer Section is Visible')
                      .assert.visible(this.elements.twitterLink, 'Twitter Link in Footer Section is Visible')
                      .assert.visible(this.elements.linkedInLink, 'LinkedIn Link in Footer Section is Visible')
                      .assert.visible(this.elements.youtubeLink, 'YouTube Link in Footer Section is Visible')
  }

  /**
   * Validates the About iSelect section Links
   * @param browser Nightwatch Browser
   * @param aboutIselectLink About iSelect Links
   * @param multiple About iSelect Links repeats two times
   */
  public validateAboutIselectLinks(browser:NightwatchBrowser, aboutIselectLink : string, multiple : Boolean) {
    if(multiple == true) {
      browser.useXpath().assert.visible('(//a[text()="' + aboutIselectLink + '"])[2]', aboutIselectLink + ' Link in About iSelect Section is Visible');
    } else {
      browser.useXpath().assert.visible('//a[text()="' + aboutIselectLink + '"]', aboutIselectLink + ' Link in About iSelect Section is Visible');
    }
  }

  /**
   * Validates 2019 Partner Awards Links
   * @param browser NightWatch Browser
   * @param partnerawardslink Partner Awards link
   */
  public validate2019PartnerAwardsLinks(browser:NightwatchBrowser, partnerawardslink: string) {
    browser.useXpath().assert.visible('//span[text()="' + partnerawardslink + '"]/..', partnerawardslink + ' Link in 2019 Partners Awards Section is Visible')
  }

}


export default HomePage;


