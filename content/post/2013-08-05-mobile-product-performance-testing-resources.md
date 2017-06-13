---


date: 2013-08-05 2:21:06 -0400
title: 'Mobile Product Performance Testing'
summary: 'Performance testing is used to verify that an&nbsp;app&nbsp;or&nbsp;web page&nbsp;will display quickly to the user and will continue to function as the number of users increases to peak loads. Performance is an important consideration for mobile applications because the connection speed of users is often slower and more variable for mobile users than desktop users. Surveys'
authors: [jparcell]
categories:
  - Mobile
  - 'User Testing &amp; Research'
tags:
  - GitHub
  - mobile apps
---

Performance testing is used to verify that an app or web page will display quickly to the user and will continue to function as the number of users increases to peak loads. Performance is an important consideration for mobile applications because the connection speed of users is often slower and more variable for mobile users than desktop users. Surveys have shown that users will often stop using applications or web sites that load slowly.

This article was developed as part of the [Mobile Application Development Program](https://digitalgov.sites.usa.gov/resources/mobile-application-development-program/ "Mobile Application Development Program"). See our [general guidelines to testing](https://digitalgov.sites.usa.gov/2013/08/22/mobile-product-testing-guidelines/ "Mobile Product Testing Guidelines and Resources") article for more resources on mobile product testing.

Performance testing will typically consider the following items:

  * Performance when device has low battery
  * Performance and download speeds on a variety of network speeds (e.g. 3G, 4G LTE)
  * Performance and potential lagging on a variety of mobile devices and OS versions
  * Performance when disconnected from network
  * Performance under heavy load by a large number of users
  * Battery consumption
  * Response time
  * Resource utilization (memory and processor)
  * Binary size of native applications

## <a name="x-Government Guidance"></a>Government Guidance {#toc0}

  * <a href="http://www.whitehouse.gov/sites/default/files/omb/memoranda/2011/m11-24.pdf" rel="nofollow">Executive Order on Improving Customer Service in Government</a>
  * <a href="http://www.whitehouse.gov/sites/default/files/omb/assets/inforeg/PRAPrimer_04072010.pdf" rel="nofollow">OMB Fast Track Process for Collecting Service Delivery Feedback</a>
  * <a href="http://www.whitehouse.gov/sites/default/files/omb/memoranda/2011/m11-15.pdf" rel="nofollow">OMB Guidance on Plain Language Writing Act</a>
  * <a href="http://www.whitehouse.gov/sites/default/files/omb/assets/inforeg/PRAPrimer_04072010.pdf" rel="nofollow">OMB Memo on Information Collection under the Paperwork Reduction Act</a>

## <a name="x-Resources Available"></a>Resources Available {#toc1}

Listed below are resources available that further describe and conduct performance testing. These services/companies or websites are offered as a sample of what is currently available for performance testing and do not indicate an endorsement of them or their products and/or services.

**Web Resources**

  * <a href="https://vts.inxpo.com/Launch/QReg.htm?ShowKey=13063&AffiliateData=Neo3" rel="nofollow">Mobile Performance Testing In The Wild</a> (recorded vendor webinar, registration required) &#8211; Discusses strategies and tools for mobile performance testing. Makes the point that mobile performance testing is very similar to conventional web performance testing.
  * <a href="http://www.agileload.com/agileload/blog/2013/01/14/mobile-performance-testing-overall-analysis---whitepaper" rel="nofollow">Mobile Performance Testing Overall Analysis Whitepaper</a> &#8211; Comprehensive discussion of mobile performance testing techniques.
  * <a href="http://mobile.smashingmagazine.com/2013/04/03/build-fast-loading-mobile-website/" rel="nofollow">Smashing Magazine: How To Make Your Websites Faster On Mobile Devices</a> &#8211; Provides valuable statistics regarding the importance of performance on mobile, in addition the development techniques to improve performance.
  * <a href="http://uxdesign.smashingmagazine.com/2011/07/18/seven-guidelines-for-designing-high-performance-mobile-user-experiences/" rel="nofollow">Smashing Magazine: Seven Guidelines For Designing High-Performance Mobile User Experiences</a> &#8211; Explains performance in the overall context of mobile application success.
  * <a href="http://www.methodsandtools.com/archive/mobileloadtesting.php" rel="nofollow">Testing Performance of Mobile Apps</a> &#8211; Provides detailed approach to mobile app performance testing.
  * <a href="http://www.gomez.com/resources/whitepapers/survey-report-what-users-want-from-mobile/" rel="nofollow">What Users Want From Mobile</a> (requires registration) &#8211; Survey results that describe user expectations. For example, 71% of users expected mobile web sites to load as quickly as desktop web sites.

### <a name="x-Resources Available-Testing Services"></a>Testing Services {#toc2}

These services/companies or web sites are offered as a sample of what is currently available and do not indicate an endorsement of them or their products and/or services.

  * <a href="http://mobitest.akamai.com/m/index.cgi" rel="nofollow">Akamai Mobitest</a> &#8211; A free mobile web performance tool from Akamai.
  * <a href="http://www.infostretch.com/" rel="nofollow">Infostretch</a> &#8211; Provide performance testing of mobile applications.
  * <a href="http://www.mob4hire.com/" rel="nofollow">mob4hire</a> &#8211; Similar to uTest, provides &#8220;crowdsourcing&#8221; testing through third-party testers.
  * <a href="http://www.utest.com/load-testing" rel="nofollow">uTest</a> &#8211; Paid &#8220;crowdsourcing&#8221; test service that manages load testing for web and mobile applications via third-party testers.

**Testing Tools**
  
These tools are installed locally for mobile performance testing.

  * <a href="http://jmeter.apache.org/" rel="nofollow">Apache JMeter</a> &#8211; Open source tool for performance testing web applications, including Mobile Web.
  * <a href="https://play.google.com/store/apps/details?id=com.aurorasoftworks.quadrant.ui.standard" rel="nofollow">Aurora Software Quadrant Standard Edition</a> &#8211; Free Android app to benchmark the performance of Android mobile devices. This may be useful when testing a mobile app on a limited number of real devices, in order to determine how the app will perform on other devices with similar resources.
  * <a href="https://developers.google.com/chrome-developer-tools/" rel="nofollow">Chrome Developer Tools</a> &#8211; These tools are bundled in the Chrome Browser. The <a href="https://developers.google.com/chrome-developer-tools/docs/network" rel="nofollow">Network Panel</a> page explains how to use Chrome Developer Tools to gather performance data about your mobile web page.
  * <a href="http://www.neotys.com/" rel="nofollow">NeoLoad by Neotys</a> &#8211; Load and stress testing solution for mobile web and native mobile apps.
  * <a href="http://www.soasta.com/products/cloudtest-lite/" rel="nofollow">SOASTA CloudTest Lite</a> &#8211; Free downloadable tool for automated performance testing.
  * <a href="http://unicorn.bogomips.org/" rel="nofollow">Unicorn</a>&#8211; Unicorn is an HTTP server for Rack applications
  * Web Analytics &#8211; Services such as <a href="http://analytics.blogspot.com/2012/03/measure-your-websites-performance-with.html" rel="nofollow">Google Analytics</a> and <a href="http://web.analytics.yahoo.com/" rel="nofollow">Yahoo Web Analytics</a> can be used to track mobile web site performance.

## <a name="x-Test Plans/Checklists available on GitHub"></a>Test Plans/Checklists available on GitHub {#toc4}

The [Mobile Code Sharing Catalog](http://gsa.github.io/Mobile-Code-Catalog/index.html) has [test plans or cases or checklists](http://gsa.github.io/Mobile-Code-Catalog/testing.html) that have been uploaded to GitHub and are available as samples and/or for use.

<em style="line-height: 1.5em;">Ryan Day, GSA, and Ben Weaver, USDA, contributed to this post.</em>