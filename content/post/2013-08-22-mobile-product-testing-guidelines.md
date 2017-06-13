---


date: 2013-08-22 1:45:01 -0400
title: 'Mobile Product Testing Guidelines and Resources'
summary: 'You have started developing your mobile product, but you may be wondering what and how to test. As with any form of software development, mobile testing should be done intermittently throughout all development stages. This article was developed as part of the Mobile Application Development Program to provide agencies with some general testing strategies, types,'
authors: [jparcell]
categories:
  - Mobile
  - 'User Testing &amp; Research'
tags:
  - mobile apps
  - user experience
  - UX
---

You have started developing your mobile product, but you may be wondering what and how to test. As with any form of software development, mobile testing should be done intermittently throughout all development stages.

This article was developed as part of the [Mobile Application Development Program](https://digitalgov.sites.usa.gov/resources/mobile-application-development-program/ "Mobile Application Development Program") to provide agencies with some general testing strategies, types, tools and testing scripts. The information on these testing pages has been pulled from the Mobile Gov Community of Practice and private sector resources. Specific guidance on testing has been split into four broad categories.

  * [Functionality/Usability](https://www.WHATEVER/2013/05/25/functionality-and-usability-testing-resources/)
  * [Security/Privacy](https://digitalgov.sites.usa.gov/2013/08/05/mobile-product-security-and-privacy-testing-resources/ "Mobile Product Security and Privacy Testing Resources")
  * [Accessibility](https://digitalgov.sites.usa.gov/2013/07/31/mobile-product-accessibility-testing-resources/ "Mobile Product Accessibility Testing Resources")
  * [Performance (how your mobile product affects a device&#8217;s ecosystem)](https://digitalgov.sites.usa.gov/2013/08/05/mobile-product-performance-testing-resources/ "Mobile Product Performance Testing")

Each of these pages provides government guidance, further strategies, resources and tools like testing scripts and checklists. If you are in the early stages of mobile development, be sure to check out the [User Experience Guidelines and Recommendations](https://digitalgov.sites.usa.gov/resources/mobile-user-experience-guidelines-and-recommendations/ "Mobile User Experience Guidelines and Recommendations") which contain resources for the design stage, as well as our [sample Mobile SOW&#8217;s](https://www.WHATEVER/resources/mobile-sow-and-developer-qualifications/ "Mobile SOW and Developer Qualifications") pages which contain sample contracting language for vendor testing. The [Federal CrowdSource Mobile Testing Program](https://www.WHATEVER/services/open-opportunities-mobile-application-testing-program/ "Federal CrowdSource Mobile Testing Program") offers agencies the ability to have their web-based mobile products tested on many different devices by federal employee volunteers through the Open Opportunities program.

In June 2012, the testing group at NIH provided guidance on different types of mobile testing.

## <a name="x-General Testing Strategies"></a>General Testing Strategies {#toc0}

### <a name="x-General Testing Strategies-Test Driven Development"></a>**Test Driven Development** {#toc1}

  * Automated testing of each piece of code to ensure that it does not generate errors
  * Limit time to trouble shoot entire application

### <a name="x-General Testing Strategies-Emulators/simulators (Native Apps)"></a>**Emulators/simulators (Native Apps)** {#toc2}

  * Possibly the most convenient and cheapest. Testing can be done on the developer’s laptop.
  * Can test design (e.g. layout, screen size), usability (e.g. button usage), functionality (e.g data input), etc.
  * Many app companies use simulators to identify bugs at the early stages of development.
  * Not always specific enough – not OS, device/hardware or carrier specific.
  * Examples of emulators/simulators: 
      * <a href="http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/125-Using_iOS_Simulator/ios_simulator_application.html" rel="nofollow">iOS Developer Library &#8211; iOS simulator</a>
      * [Android SDK mobile device emulator](http://developer.android.com/guide/developing/tools/emulator.html)
      * [Blackberry smartphone simulator](http://docs.blackberry.com/en/developers/deliverables/5716/The_BB_Smrtphn_simulator_447179_11.jsp)

### <a name="x-General Testing Strategies-Real world"></a>**Real world** {#toc3}

  * Testing can be done with a real device tethered to a workstation or a real device, on a real network, in a real location. Testers generally adhere to a [testing script](http://gsa.github.io/Mobile-Code-Catalog/testing.html).
  * Types of real world testing: 
      * Third party 
          * Outside Party 
              * Hiring an outside company to run all testing.
              * Will gain feedback from a variety of users using a variety of devices on a variety of networks.
              * Example: 
                  * <a href="http://www.deviceanywhere.com/" rel="nofollow">Deviceanywhere.com</a>
              * Third Party Monitoring &#8212; web services that track and aggregate errors, generate crash reports, logs, etc. 
                  * Airbrake
                  * <a href="http://www.crittercism.com" rel="nofollow">Crittercism.com </a>
      * Crowdsourced solutions 
          * Can be through a free open-source environment or hired through a third party company that specializes in crowdsourcing solutions.
          * Will gain feedback from a variety of users using a variety of devices on a variety of networks.
          * Examples: 
              * Utest
              * <a href="http://www.mob4hire.com/" rel="nofollow">Mob4hire</a>
              * <a href="http://www.usertesting.com/" rel="nofollow">Usertesting.com</a>
              * The [Federal Mobile Crowdsource Testing program](https://digitalgov.sites.usa.gov/services/open-opportunities-mobile-application-testing-program/ "Federal CrowdSource Mobile Testing Program") provides this service for free to federal agencies.
      * In-house (Using resources available on-hand) 
          * Limited to what is available.
          * Can be expensive if thoroughness is a goal.
          * Testing with a real device (tethered to a workstation).
          * Testing with a real device, on a real network, in a real location.
          * Feedback from a variety of users using a variety of devices on a variety of networks
      * Repetition 
          * Repetition of testing through all stages of development
      * Testing Updated Versions & Revisions 
          * Ensure application is not out of date for certain features (Android and iOS change frequently)
          * Testers should understand what is available in newest version and make comments for improvements on future revisions
          * Make testers feel like they can contribute to improvements
      * Platform Testing Resources 
          * [Android testing](http://developer.android.com/guide/developing/testing/index.html)
          * Apple testing
          * [Blackberry testing](http://us.blackberry.com/sites/developers/resources/simulators.html)

# <a name="Types of Testing"></a>**Types of Testing** {#toc4}

  * Stability 
      * Ensure there are no crashes – not really a problem for apps submitted to the Apple Store because of their strict approval process, but other app markets may have looser standards.
      * App should be bug and defect free. 
          * The most frequent types of updates after app deployment are bug fixes.
          * Bug fixes should not change the appearance nor the function set of the app.
  * Update policy 
      * Android – able to push out updates whenever needed.
      * Apple, Amazon, Microsoft – updates go through same approval process as initial app submission. Apple allows for fast-track approval for updates, but is only reserved for apps that constantly crash or issues concerning security
  * [Functionality](https://digitalgov.sites.usa.gov/2014/01/21/functionality-and-usability-testing-resources/ "Functionality and Usability Testing Resources") 
      * Needs to be tested on specific/targeted devices to make sure it is functional on different pieces of hardware.
      * Test on different OS versions (latest and legacy OS).
      * Test on different carriers.
      * Test on different browsers (if a web app).
      * Check our article on [Compatibility Testing](https://www.WHATEVER/2013/11/21/mobile-product-compatibility-and-functional-testing-101/ "Mobile Product Compatibility and Functional Testing 101")
  * [Security](https://digitalgov.sites.usa.gov/2013/08/05/mobile-product-security-and-privacy-testing-resources/ "Mobile Product Security and Privacy Testing Resources") 
      * Is private data kept private? 
          * Stored personal data is password protected and/or encrypted.
          * Transmission of personal data from device to device is encrypted.
          * Limit user privileges (i.e. limiting access to certain files).
  * [Load and Performance](https://digitalgov.sites.usa.gov/2013/08/05/mobile-product-performance-testing-resources/ "Mobile Product Performance Testing") 
      * Test for lagging issues on lesser-ended devices/hardware.
      * Test download speeds on different networks in different areas.
      * Battery usage – does the app heavily drain the device’s battery.
      * Scalability &#8212; ensure the app can handle the success scenario of getting used by a large group of people 
          * Web services available to mimic load
          * Utest
  * [Accessibility/Usability](https://digitalgov.sites.usa.gov/2013/07/31/mobile-product-accessibility-testing-resources/ "Mobile Product Accessibility Testing Resources") 
      * Currently, there are no clear Section 508 rules for native apps.
      * Web apps _should_ be fully accessible and Section 508 compliant. 
          * iOS 
              * Accessibility Inspector in iOS Simulator – checks elements for accessibility in an application
              * VoiceOver on device – screen reader for those with impaired vision
          * Android 
              * Enable Accessibility on Android devices and activate a screen reader (TalkBack is preinstalled on many devices). Other screen readers and text-to-speech libraries are free in the Android Market.
          * BlackBerry 
              * Applications should be tested on a production screen reader or other assistive technology application that is installed on a BlackBerry device.
          * Web Services 
              * Webaim

Final product should be stable when first released to the public. A survey by Harris Interactive found usability and user experience is more important than brand name. Users that have a bad experience will tend to avoid other apps from the same developer.