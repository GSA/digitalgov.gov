---


date: 2013-08-05 3:01:32 -0400
title: 'Mobile Product Security and Privacy Testing Resources'
summary: 'Security testing is used to ensure that a mobile product does not pose a threat to agency IT systems and databases. In addition, privacy testing ensures that an app does not put the user&rsquo;s personally identifiable information into a compromisable position. This article was developed as part of the Mobile Application Development Program. See our'
authors: [jparcell]
categories:
  - Code
  - Mobile
  - 'Strategy &amp; Policy'
  - 'User Testing &amp; Research'
tags:
  - GitHub
  - mobile testing
  - privacy
  - security
---

Security testing is used to ensure that a mobile product does not pose a threat to agency IT systems and databases. In addition, privacy testing ensures that an app does not put the user’s personally identifiable information into a compromisable position.

This article was developed as part of the [Mobile Application Development Program](https://digitalgov.sites.usa.gov/resources/mobile-application-development-program/ "Mobile Application Development Program"). See our [general guidelines to testing](https://digitalgov.sites.usa.gov/2013/08/22/mobile-product-testing-guidelines/ "Mobile Product Testing Guidelines and Resources") article for more resources on mobile product testing.

## <a name="x-Government Guidance"></a>Government Guidance {#toc0}

Please coordinate with your ISSO when creating mobile or digital products.

## <a name="x-Resources Available"></a>Resources Available {#toc2}

Listed below are resources available that further describe and conduct security and privacy testing. These services/companies or websites are offered as a sample of what is currently available for security and do not indicate an endorsement of them or their products and/or services.

### <a name="x-Resources Available-Web Resources"></a>Web Resources {#toc4}

_Security_

  * <a href="http://www.makeuseof.com/tag/app-permissions-work-care-android/" target="_blank" rel="nofollow">Application Permissions and Platform Security</a> &#8211; Link explains concept for Android
  * Authentication and Authorization
  * <a href="http://csrc.nist.gov/groups/SNS/mobile_security/index.html" target="_blank" rel="nofollow">NIST Mobile Security & Forensics Page</a>
  * <a href="https://www.owasp.org/index.php/OWASP_Mobile_Security_Project" target="_blank" rel="nofollow">Open Web Application Security Mobile Security Project</a>
  * <a href="http://www.makeuseof.com/tag/app-permissions-work-care-android/" target="_blank" rel="nofollow">Timeouts and Session Management</a>
  * <a href="https://www.owasp.org/index.php/Web_Application_Security_Testing_Cheat_Sheet" target="_blank" rel="nofollow">Web Application Security</a>

GPS, IMEI, device numbers, and customer personal information all have privacy implications that must be noted. At a minimum, the security assessment should be accomplished through a data sensitivity impact level process and/or privacy impact assessment requirement. Agencies should:

  * Handle Web history/caching
  * Securely transmit login data
  * Avoid “man-in-the-middle” attacks
  * Securely transmit sensitive data
  * Protect from session hijacking
  * Permanently deletes data
  * Securely handle interruptions
  * Properly secure data in backups

_Privacy_

  * <a href="http://www.mobileapptesting.com/important-mobile-app-privacy-recommendations/2013/02/" rel="nofollow">Important Mobile App Privacy Recommendations</a>

Other issues to consider:

  * Is private data kept private?
  * Stored personal data is password protected and/or encrypted.
  * Transmission of personal data from device to device is encrypted.
  * Limit user privileges (i.e. limiting access to certain files).

### <a name="x-Resources Available-Testing Services"></a>Testing Services {#toc5}

These services/companies or web sites are offered as a sample of what is currently available and do not indicate an endorsement of them or their products and/or services.

  * <a href="http://www8.hp.com/us/en/software-solutions/software.html?compURI=1338812#.UYGuF6LP3nN" target="_blank" rel="nofollow">Fortify</a> &#8211; Identifies security problems and prioritizes results
  * <a href="http://www-03.ibm.com/software/products/us/en/appscan" target="_blank" rel="nofollow">IBM AppScan</a> &#8211; Software designed to automate application security testing
  * <a href="http://www.kryptowire.com/" target="_blank" rel="nofollow">kryptowire</a> &#8211; Provides static and dynamic analysis of Android applications
  * <a href="http://developer.android.com/tools/help/lint.html" target="_blank" rel="nofollow">Lint</a> &#8211; Android tool that checks for for potential bugs and security optimization
  * <a href="http://www.tenable.com/solutions/mobile-device-security" target="_blank" rel="nofollow">Nessus</a> &#8211; Software identifies security and compliance exposure
  * <a href="http://docs.seleniumhq.org/" target="_blank" rel="nofollow">Selenium</a> &#8211; Tools for automating web applications for testing purposes
  * <a href="http://www.veracode.com/" target="_blank" rel="nofollow">Veracode</a> &#8211; Provides automated static and dynamic application security testing

## <a name="x-Test Plans/Checklists available on GitHub"></a>Test Plans/Checklists available on GitHub {#toc6}

The [Mobile Code Sharing Catalog](http://gsa.github.io/Mobile-Code-Catalog/index.html) has [test plans or cases or checklists](http://gsa.github.io/Mobile-Code-Catalog/testing.html) that have been uploaded to GitHub and are available as samples and/or for use.

_ Coqui Aspiazu, GSA; Ben Weaver and Lisa Wilcox, USDA, contributed to this post._