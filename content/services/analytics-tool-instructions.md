---
url: /services/dap/analytics-tool-instructions/
date: 2014-05-13 8:42:03 -0400
title: Government-Wide Analytics Tool for Federal Agencies
summary: 'Milestone 8.2 of the Digital Government Strategy calls for agencies to implement performance and customer satisfaction measuring tools on all .gov websites. To help your agency meet this requirement, GSA&rsquo;s Digital Services Innovation Center procured a Google Analytics (GA) Premium custom solution that does the following: Provides a federal-wide view of .gov websites Is easy'
authors:
  - tlowden
---

Milestone 8.2 of the [Digital Government Strategy](http://www.whitehouse.gov/sites/default/files/omb/egov/digital-government/digital-government.html) calls for agencies to implement performance and customer satisfaction measuring tools on all .gov websites. To help your agency meet this requirement, GSA’s Digital Services Innovation Center procured a Google Analytics (GA) Premium custom solution that does the following:

  * Provides a federal-wide view of .gov websites
  * Is easy to add to your site with only one line of code
  * Smoothly integrates with GA code you may already have on your site

## Instructions for Adding Custom Web Analytics Code to Federal Agency Websites

Agencies have two options for the DAP code implementation, all described in detail in the <a href="https://s3.amazonaws.com/digitalgov/legacy-img/2014/05/DAP_v3.1_QuickGuide_Aug2016-1.pdf" target="_blank">DAP Implementation Guide</a> (PDF, 195 KB, 10 pages, August 2016) and outlined below.

  1. **Centrally hosted (recommended):**  the implementation involves calling the DAP code file via a central host location that the Digital Analytics Program hosts at: <a href="https://dap.WHATEVER/Universal-Federated-Analytics-Min.js" target="_blank">https://dap.WHATEVER/Universal-Federated-Analytics-Min.js</a>.
  
    The DAP team continuously updates this file with new versions and/or bug fixes periodically, and those changes w take effect immediately on sites implemented with the file via the above location. We’ve taken every measure possible to make this option easy and secure. Please see [our GitHub repo](https://github.com/digital-analytics-program/gov-wide-code) for more explanation and <a href="https://s3.amazonaws.com/digitalgov/legacy-img/2014/05/DAP_v3.1_QuickGuide_Aug2016-1.pdf" target="_blank">the implementation guide</a> for specific steps.
  2. **Locally hosted:** The other (original) option is to continue to host the DAP code file locally, as many agencies have done in the past. If you determine this is the right option for your agency website, please choose one of the below file versions (posted on Github) to host the DAP code locally and review <a href="https://s3.amazonaws.com/digitalgov/legacy-img/2014/05/DAP_v3.1_QuickGuide_Aug2016-1.pdf" target="_blank">the implementation guide</a> for specific steps.

<a style="line-height: 1.5" href="https://raw.githubusercontent.com/digital-analytics-program/gov-wide-code/master/Universal-Federated-Analytics.js" target="_blank">Regular version of the DAP code<br /> </a><a style="line-height: 1.5" href="https://raw.githubusercontent.com/digital-analytics-program/gov-wide-code/master/Universal-Federated-Analytics-Min.js">Minified version of the DAP code</a>

In addition, those implementing should read capabilities of the code in the <a href="https://s3.amazonaws.com/digitalgov/legacy-img/2014/05/DAP_v3.1_CodeSummary_Aug2016-1-1.pdf" target="_blank">version 3.1 Code Summary</a> (PDF, 182 KB, 15 pages, August 2016), and the <a href="https://s3.amazonaws.com/digitalgov/legacy-img/2014/05/DAP_v3.1_ReleaseNotes_Aug2016-1.pdf" target="_blank">version 3.1 Release Notes</a> (PDF, 70 KB, 4 pages, August 2016).

With either option (centrally or locally hosted), the Government-Wide Digital Analytics Program website traffic data is being filtered into its own separate Google Analytics account and should cause no material change in your independent Google Analytics account metrics._Note: When migrating from DAP Google Analytics &#8220;Classic&#8221; to DAP Universal Analytics (UA), you must replace both the old javascript code file and the script block/tag, as specified in the Implementation Guide, to follow the new UA format._

If you have any questions, please email us at <a href="mailto:dap@support.WHATEVER" target="_blank">dap@support.WHATEVER</a>. We&#8217;d be happy to assist.

## Recommended Privacy Notice for Agencies Using Google Analytics Premium

U.S. federal government agency websites using Google Analytics Premium as part of the Digital Government Strategy may place the following information on their website:

This website uses Google Analytics Premium. Please refer to the following policies on Google’s website for more information:

  * [Google’s main privacy policy](http://www.google.com/intl/en/policies/privacy)
  * [Cookies & Google Analytics on Websites](https://developers.google.com/analytics/resources/concepts/gaConceptsCookies)
  * [Opt out of Google Analytics Cookies](https://tools.google.com/dlpage/gaoptout?hl=en)

<p style="padding-left: 30px">