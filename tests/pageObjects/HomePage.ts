/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Data Object */
import * as data from '../appData/HomePageData.json';
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";


export const homePage = {
  
  elements : {

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

  },

  /**
   * Validates Our Partners Header in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateOurPartnersHeaderDisplayed(browser: NightwatchBrowser) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'present', this.elements.energyPartnersHeader, 20000, 500, undefined,'See our range of energy providers* -- Header is Present  ' );
  },
  
  /**
   * Validates Our Partners Button in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateViewOurPartnersBtnDisplayed(browser: NightwatchBrowser) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'present', this.elements.viewOurPartnersBtn, 20000, 500, undefined,'View Our Partners Button is Present');
  },

  /**
   * Clicks on View Our Partners Button in Energy Home Page
   * @param browser NightWatch Browser
   */
  clickOnViewOurPartnersBtn(browser : NightwatchBrowser) {
    helperUtils.click(browser, 'xpath', this.elements.viewOurPartnersBtn, 'View Our Partners Button is Present and Clicking on It');
  },

  /**
   * Validates Our Partners Page in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateOurPartnersPage(browser:NightwatchBrowser) {
    helperUtils.validateTitle(browser, this.elements.ourPartnersPageTitle, 'Our Partners Page is Loaded');
  },

  /**
   * Validates Health Partners Logos in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateHealthPartnersLogosDisplayed(browser: NightwatchBrowser) {
    helperUtils.assertElementStatus(browser, 'present', this.elements.healthInsuranceLogosTitle, 'Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.ahmLogoHealth, 'AHM Health Partner Logo is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.aiaLogoHealth, 'AIA Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.ausUnityLogoHealth, 'Australia Unity Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.bupaLogoHealth, 'Bupa Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.frankLogoHealth, 'Frank Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.latrobeLogoHealth, 'Latrobe Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.nibLogoHealth, 'NIB Health Insurance Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.tuhLogoHealth, 'TUH Health Insurance Logo Header is Present');                         
  },

  /**
   * Validates Energy Partners Logos in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateEnergyPartnersLogosDisplayed(browser: NightwatchBrowser) {
    helperUtils.assertElementStatus(browser, 'present', this.elements.energyPartnersLogosTitle, 'Energy Logo Header is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.aglLogoEnergy, 'AGL Energy Partner Logo is Present');
    helperUtils.assertElementStatus(browser, 'present', this.elements.lumoLogoEnergy, 'Lumo Energy Partner Logo is Present ');
    helperUtils.assertElementStatus(browser, 'present', this.elements.redEnergLogoEnergy, 'red-energy Energy Partner Logo is present  ');
    //helperUtils.assertElementStatus(browser, 'present', this.elements.momentumEnergLogoEnergy, 'momentum-energy Energy Partner Logo is Present  ');
    helperUtils.assertElementStatus(browser, 'present', this.elements.originLogoEnergy, 'Origin Energy Partner Logo is Present  ');
    helperUtils.assertElementStatus(browser, 'present', this.elements.energyAustraliaLogoEnergy, 'energy-australia Energy Partner Logo is Present  ');
    //helperUtils.assertElementStatus(browser, 'present', this.elements.simplyEnergLogoEnergy, 'simply-energy Energy Partner Logo is Present  ');
    helperUtils.assertElementStatus(browser, 'present', this.elements.actewaglLogoEnergy, 'actewagl Energy Partner Logo is Present  ');                            
  },

  /**
   * Validates Internet Partners Logos in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateInternetPartnersLogosDisplayed(browser: NightwatchBrowser) {
    helperUtils.assertElementStatus(browser, 'present', this.elements.internetPartnersLogosTitle, 'Internet Logo Header is Present  ')
    helperUtils.assertElementStatus(browser, 'present', this.elements.belongLogoInternet, 'Belong Internet Partner Logo is Present  ')
    helperUtils.assertElementStatus(browser, 'present', this.elements.telstraLogoInternet, 'Telstra Internet Partner Logo is Present ')
    helperUtils.assertElementStatus(browser, 'present', this.elements.harbourISPLogoInternet, 'Harbour-ISP Internet Partner Logo is present  ')
    helperUtils.assertElementStatus(browser, 'present', this.elements.originLogoInternet, 'Origin Internet Partner Logo is Present  ')
    helperUtils.assertElementStatus(browser, 'present', this.elements.optusLogoInternet, 'Optus Internet Partner Logo is Present  ');                           
  },

  /**
   * Click On Electricity and Gas Icon in Energy Home Page
   * @param browser NightWatch Browser
   */
  clickOnElecandGasIcon(browser:NightwatchBrowser){
    helperUtils.click(browser, 'xpath', this.elements.elecAndGasIcon, 'Electricity and Gas Icon Present and Clicking on It.' );
  },

  /**
   * Enters the Address in Energy Home Page
   * @param browser NightWatch Browser
   * @param postcode PostCode
   */
  enterAddress(browser:NightwatchBrowser, postcode : string){
    helperUtils.enterKeys(browser, 'xpath', this.elements.energyAddressBar, postcode, 'Address Search Bar is Visible And Entering Address');
  },

  /**
   * Clicks on Drop Down Option From Address Bar in Energy Home Page
   * @param browser NightWatch Browser
   * @param addrOption AddressOption DataObject
   */
  clickOnAddressOption(browser: NightwatchBrowser, addrOption : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'present','//div[text()="'+ addrOption +'"]',20000, 500, undefined, 'Drop Down Option is Visible');
    browser.pause(5000);
    helperUtils.moveToElement(browser, '//div[text()="'+ addrOption +'"]', 'Hovering to DropDown Option');
    helperUtils.click(browser, 'xpath', '//div[text()="'+ addrOption +'"]', 'Searched Address is Visible and Click on it');
    helperUtils.click(browser, 'xpath', this.elements.startBtn, 'Start Button is Visible and Clicking On it');
  },

  /**
   * Validates Your Usage Page
   * @param browser NightWatch Browser
   * @param yourUsagePageTitle YourUsageTitle
   */
  validateYourUsagePage(browser:NightwatchBrowser, yourUsagePageTitle : string) {
    helperUtils.verifyWebElementExistForInteraction(browser,'present',this.elements.yourUsagePageTitleXpath, 20000, 500, undefined,'Your Usage Page Title is Visbile')
    helperUtils.validateTitle(browser, yourUsagePageTitle, 'Your Usage Page Title Matches, Page Loaded');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.yourUsageHeader,'Your Usage Header is Visible');
  },

  /**
   * Clicks on iSelect Icon in Your Usage Page
   * @param browser NightWatch Browser
   */
  clickOniSelectIconinYourUsagePage(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'xpath', this.elements.iSelectIconInYourUsagePage, 'iSelect Icon in Your Usage Page is Visbile');
  },

  /**
   * Validates the iSelect WordPress Page
   * @param browser NightWatch Browser
   * @param iSelectWordPressURL iSelect WordPress URL
   * @param iSelectWordPressTitle iSelect WordPress Title
   */
  validateIselectWordPressPage(browser:NightwatchBrowser, iSelectWordPressURL : string, iSelectWordPressTitle : string) {
    helperUtils.validateURL(browser, 'completeURL', iSelectWordPressURL, 'iSelect WordPress Url Matches')
    helperUtils.validateTitle(browser,iSelectWordPressTitle, 'iSelect WordPress Title Matches and Page Loaded Successfully');
  },

  /**
   * Validates You Might be Interested Header in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateYouMightBeInterestHeader(browser:NightwatchBrowser) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile', this.elements.youMightBeInterestedHeader, 20000, 500, undefined, 'You Might Be Interested In.. Header is Visible');
  },

  /**
   * Validates links Present in You Might be Interested in Section
   * @param browser NightWatch Browser
   * @param solarEnergyTitle Solar Energy Basics Page Title
   * @param switchingElecAndGasTitle Switching Electricity and Gas Page Title
   * @param electricityPanTitle How to find the Electricity Plan that suits you Page Title
   * @param gtidConnectTitle Grid Connect and Off-Grid Page Title
   * @param saveEnergyTitle How to Save Energy Page Title
   */
  validateLinksPresentInYouMightBeInterSection(browser:NightwatchBrowser, solarEnergyTitle : string, switchingElecAndGasTitle : string, electricityPanTitle : string, gtidConnectTitle : string, saveEnergyTitle : string) {
    helperUtils.moveToElement(browser, this.elements.solarBasicLink, 'Hovering to You Might Be Interested in.. Section');
    browser.pause(5000);
    helperUtils.click(browser,'xpath', this.elements.solarBasicLink, 'The Solar Energy Basics Link is Present and Clicking on the link.');
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile','//h1', 20000, 500, undefined, 'The Solar Energy Basics Page Loaded.. Header is Visbile.');
    browser.pause(2000);
    helperUtils.validateTitle(browser,solarEnergyTitle, 'The Solar Energy Basics Page Title Matches.');
    helperUtils.browserActions(browser, 'back');
    
    helperUtils.moveToElement(browser, this.elements.switchingElecAndGasLink, 'Hovering to Switching Electricity and Gas Link');
    browser.pause(5000);
    helperUtils.click(browser,'xpath', this.elements.switchingElecAndGasLink, 'Switching Electricity and Gas Link is Present and Clicking on the link');
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile','//h1', 20000, 500, undefined, 'Switching Electricity and Gas Page Loaded... Header is Visbile.');
    browser.pause(2000);
    helperUtils.validateTitle(browser,switchingElecAndGasTitle, 'Switching Electricity and Gas Page Title Matches');
    helperUtils.browserActions(browser, 'back');
    
    helperUtils.moveToElement(browser, this.elements.electricityPlanLink, 'Hovering to How to find the Electricity Plan that suits you Link');
    browser.pause(5000);
    helperUtils.click(browser,'xpath', this.elements.electricityPlanLink, 'How to find the Electricity Plan that suits you Link is Present and Clicking on the link');
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile','//h1', 20000, 500, undefined, 'How to find the Electricity Plan that suits you Page Loaded... Header is Visbile.');
    browser.pause(2000);
    helperUtils.validateTitle(browser,electricityPanTitle, 'How to find the Electricity Plan that suits you Page Title Matches');
    helperUtils.browserActions(browser, 'back');
    
    helperUtils.moveToElement(browser, this.elements.gridConnectLink, 'Hovering to Grid Connect and Off-Grid Link');
    browser.pause(5000);
    helperUtils.click(browser,'xpath', this.elements.gridConnectLink, 'Grid Connect and Off-Grid Link is Present and Clicking on the link');
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile','//h1', 20000, 500, undefined, 'Grid Connect and Off-Grid Page Loaded... Header is Visbile.');
    browser.pause(2000);
    helperUtils.validateTitle(browser,gtidConnectTitle, 'Grid Connect and Off-Grid Page Title Matches');
    helperUtils.browserActions(browser, 'back');
    

    helperUtils.click(browser,'xpath', this.elements.nextBtnInYurUsageSection, 'Clicking on Next Button');
    browser.pause(5000);
    helperUtils.click(browser,'xpath', this.elements.saveEnergyLink, 'How to Save Energy Link is Present and Clicking on the link');
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile','//h1', 20000, 500, undefined, 'How to Save Energy Page Loaded... Header is Visbile.');
    browser.pause(2000);
    helperUtils.validateTitle(browser,saveEnergyTitle, 'How to Save Energy Page Title Matches');
    helperUtils.browserActions(browser, 'back');
  },

  /**
   * Validates Call Us Tool Tip in Energy Home Page
   * @param browser NightWatch Browser
   */
  validateCallUsToolTip(browser:NightwatchBrowser) {
    helperUtils.moveToElement(browser,this.elements.phoneUsElement, 'Call Us Elemenet is visible and Hovering on to it.');
    helperUtils.verifyWebElementExistForInteraction(browser, 'visibile', this.elements.openingHrsToolTip, 20000, 500, undefined, 'Tool tip is visible after hovering on Call Us Element.');
  },

  /**
   * Moves to the Bottom of the Page
   * @param browser NightWatch Browser
   */
  moveToBottomofPage(browser:NightwatchBrowser) {
    helperUtils.moveToElement(browser, this.elements.energyFooter, 'Scrolled down to Bottom of the Page');
  },

  /**
   * Click and Validates the Compare Electricity and Gas Button
   * @param browser NightWatch Browser
   */
  clickAndValidateCompElecandGasBtn(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'xpath', this.elements.compElecAndGasSideBtn, 'Clicking on "Compare Electricity and Gas" Right Side Button');
    browser.pause(3000);
    helperUtils.assertElementStatus(browser,'visible',this.elements.energyAddressBar, 'Scrolled to top of the Page by clicking on "Compare Electricity and Gas" button');
  },

  /**
   * Validates the Social Media Links
   * @param browser NightWatch Browser
   */
  validateSocialMediaLinks(browser:NightwatchBrowser) {
    helperUtils.assertElementStatus(browser,'visible',this.elements.facebookLink, 'Facebook Link in Footer Section is Visible');
    helperUtils.assertElementStatus(browser,'visible',this.elements.twitterLink, 'Twitter Link in Footer Section is Visible');
    helperUtils.assertElementStatus(browser,'visible',this.elements.linkedInLink, 'LinkedIn Link in Footer Section is Visible');
    helperUtils.assertElementStatus(browser,'visible',this.elements.youtubeLink, 'YouTube Link in Footer Section is Visible');
  },

  /**
   * Validates the About iSelect section Links
   * @param browser Nightwatch Browser
   * @param aboutIselectLink About iSelect Links
   * @param multiple About iSelect Links repeats two times
   */
  validateAboutIselectLinks(browser:NightwatchBrowser, aboutIselectLink : string, multiple : Boolean) {
    if(multiple == true) {
      helperUtils.assertElementStatus(browser,'visible','(//a[text()="' + aboutIselectLink + '"])[2]', aboutIselectLink + ' Link in About iSelect Section is Visible');
    } else {
      helperUtils.assertElementStatus(browser,'visible','//a[text()="' + aboutIselectLink + '"]', aboutIselectLink + ' Link in About iSelect Section is Visible');
    }
  },

  /**
   * Validates 2019 Partner Awards Links
   * @param browser NightWatch Browser
   * @param partnerawardslink Partner Awards link
   */
  validate2019PartnerAwardsLinks(browser:NightwatchBrowser, partnerawardslink: string) {
    helperUtils.assertElementStatus(browser, 'visible','//span[text()="' + partnerawardslink + '"]/..', partnerawardslink + ' Link in 2019 Partners Awards Section is Visible')
  }

 

};





