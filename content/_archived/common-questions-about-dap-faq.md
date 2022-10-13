---
url: /services/dap/common-questions-about-dap-faq/
date: 2013-12-02 7:37:00 -0400
title: 'Common Questions about DAP (FAQ)'
summary: 'This guidance is part of the Digital Analytics Program (DAP): Support to Help Agencies Implement the Tool. See more on the DAP. Below are the questions we hear most often about the Digital Analytics Program (DAP).'
authors:
  - tlowden
---

{{< legacy-img src="/2013/11/digitaltunnel.jpg" alt="Tunnel made from blue digital bits" >}}

**This guidance is part of the [Digital Analytics Program]({{< link "/dap/" >}} "DAP: Digital Analytics Program") (DAP): Support to Help Agencies Implement the Tool. [See more on the DAP]({{< link "/dap/" >}} "DAP: Digital Analytics Program").**

Below are the questions we hear most often about the [Digital Analytics Program (DAP)]({{< link "/dap/" >}} "DAP: Digital Analytics Program").

* [User Agreement](#part-7) "Common Questions about DAP (FAQ): User Agreement"
* [Implementation](#part-1) "Common Questions about DAP (FAQ): Implementation"
* [Customization and Access](#part-2) "Common Questions about DAP (FAQ): Customization and Access"
* [Google Universal Analytics](#part-3) "Common Questions about DAP (FAQ): Google Universal Analytics"
* [Data Access, Retention and Privacy](#part-4) "Common Questions about DAP (FAQ): Data Access, Retention and Privacy"
* [Reporting](#part-5) "Common Questions about DAP (FAQ): Reporting"
* [Customer Satisfaction Tool Implementation](#part-6) "Common Questions about DAP (FAQ): Customer Satisfaction Tool Implementation"

<h2 id="part-7">
  User Agreement
</h2>

### What are my responsibilities as a DAP user?

By logging in and accessing data within the tools of the Digital Analytics Program (DAP), you understand and agree that:

* Access to the government-wide view of the Digital Analytics Program (DAP) is to assist participating agencies in improving websites across the government.
* Portions of the data are available to the public on [analytics.usa.gov](http://analytics.usa.gov). Access to data beyond that on analytics.usa.gov is restricted to DAP users only.
* Each participating agency controls the distribution and sharing of their own agency-specific data beyond what is shown on [analytics.usa.gov](http://analytics.usa.gov) at the discretion of the agency’s designated DAP POC.
* Agencies are not authorized to communicate or share findings derived from the DAP tools about another agency without the other agency’s explicit, written permission.
* For questions regarding these and other scenarios on the use of the DAP data, agencies should contact the Office of Management and Budget by emailing <eGov@omb.eop.gov>.
* The Google Analytics code is designed to collect data in a consistent way across all .gov websites. Any modifications to the code without DAP authorization is prohibited. DAP requires oversight of the code in order to ensure the data is reported accurately for agency sites. Agencies can continue to run their own metrics tools in addition to DAP.

<h2 id="part-1">
  Implementation
</h2>

### What tool is being used to collect the data?

Currently, we’re using Google Analytics 360 to collect and analyze the Web traffic data.

### Does this tool have to go on all websites? Or just top-level domains?

In the [Digital Strategy, OMB calls for agencies to implement performance and customer satisfaction measuring tools on all .gov websites](http://www.whitehouse.gov/sites/default/files/omb/egov/digital-government/digital-government.html#measure-performance). The government-wide code snippet is available to agencies to help them meet this requirement.

### We don’t currently use Google Analytics on our site. What should we do?

You don’t need your own Google Analytics code on your site for the government-wide analytics to work.

### Can the government-wide code run with other Google Analytics code?

Yes. The government-wide analytics code is sensitive to the Google Analytics code you already have on your site and synchronizes itself with your existing Google Analytics code. The government-wide code is being collected into its own account so it does not interfere with your existing Google Analytics data.

### Will the code affect other analytics code running on my site, such as WebTrends, WebTrends Live, SiteCatalyst or Urchin?

The code will not interfere at all with WebTrends, WebTrends Live, SiteCatalyst, and it synchronizes itself with Urchin. Learn more about [incorporating the DAP tool into your current metrics program]({{< link "/dap/" >}} "DAP: Digital Analytics Program").

### If the government-wide tracking code suffers an error, will the code stop other code from running?

No. The code makes itself “secondary” to other code by safely exiting if it encounters any problems and allows other code to continue running.

### If we already have premium GA implemented, and contractors supporting our tags add customizations, how will this affect us? Will it overwrite all of our current work?

The only issue is customizations that affect:

* Cookie timeout periods
* Use _setAllowHash
* Use _setDomain with a leading period
* Use the old Urchin tracking code

The current deployment is designed to insulate itself from and be unobtrusive to existing implementations. The government-wide tool looks at the existing cookies and adjusts its own configuration to match the existing GA code configuration. The only caveat is if your existing customizations changed cookie timeout periods. In these unusual cases, this code will write to the same cookies with the standard timeout periods. Learn more about [incorporating the DAP tool into your current metrics program]({{< link "/dap/" >}} "DAP: Digital Analytics Program").

### What kind of testing was done to ensure that the code doesn’t cause conflicts with other script-based code already in use?

Testing has been conducted to ensure that the government-wide code script does not conflict with other script-based code. However, it’s impossible to test every possible scenario when the possibilities are unknown, especially with custom code already deployed on agency websites. To ensure that the government-wide code snippet does not conflict with the other existing script-based code, each implementation will be handled uniquely, driven by the agency Web infrastructure, existing code, etc.

### Can the Digital Analytics Code track websites and webpages using HTTPS?

Yes, DAP code can track HTTPS websites and webpages. The current DAP GA code serves the script and accepts the .gif request under HTTPS by default.

### For agencies who have a “legacy” metrics program (e.g. Urchin), is there a way to pull in some of that historical data (log files) into our new profile so that we can continue to compare current performance with historical data? Or do we need to just save that data somewhere else?

No, there is no way to import legacy/historical data or log files into the Government-wide, agency-specific profile. The goal of the Gov-wide, GA collection is to provide consistent tracking methodology for Web traffic data, using the same Web analytics tool. Mixing new GA data with historical data from other Web analytics tools will create inaccurate and misleading trends. Learn more about [incorporating the DAP tool into your current metrics program]({{< link "/dap/" >}} "DAP: Digital Analytics Program").

### Can the DAP GA code be deployed on internal agency websites (available only for internal employees)?

No. At this time, the DAP GA code can be deployed only on public-facing agency websites.

### How is the DAP Google Analytics account architected?

DAP GA Gov-wide account uses _Views (formerly called &#8216;Profiles&#8217;)_ to categorize and report on federal government agencies’ website traffic. Views are assigned at the main federal agency level (e.g. DOD, DOC, Department of Education etc.), and the traffic for sub-agencies/bureaus websites is reported under their main agency profile. There’s also an overarching, government-wide reporting profile, which combines all of the federal websites’ traffic into a single profile.

DAP staff is responsible for creating all agency profiles, as well as maintaining each of the profiles’ filters used to distribute incoming traffic data. For security purposes, all DAP GA user access requests must be first approved by the respective agency’s DAP POC. Once approved, all DAP users are granted view-only rights to access the GA views. After user access is granted, users can view website traffic within the DAP profiles. At this time, all of the user management and other admin functions are handled by the DAP staff only.

To zoom into the specific website’s traffic, each DAP user can create up to 100 advanced custom segments and/or custom reports. Each user also can create up to 25 dashboards for high-level, executive-type reporting. All of the user-based reports, segments, and dashboards can be shared with other GA DAP users, if requested. Additionally, a user can create various alerts to monitor their website performance and traffic, as well as campaigns and campaign-related reports. Watch the <a href="https://www.youtube.com/watch?v=CKMTK77PrJE&list=PLd9b-GuOJ3nFwlyvLFUtmDpYFKezhot8P&index=4" target="_blank">DAP 101 recorded training</a> (Youtube), to learn more about profiles, segments and dashboards.

<h2 id="part-2">
  <a name="customization-access"></a>Customization and Access
</h2>

### Who can use the tool?

DAP implementation and usage is limited to agencies of the U.S. federal government.

### Can my agency use it at no cost?

Yes. There is no cost for federal government agencies to use this tool.

### Is a Gmail or Google account the only way to access this data?

A Google account is required, but a Gmail email address is not—any email address can be used to create a Google account. Personal Gmail accounts will not be granted access. You should sign up for the Digital Analytics Program using your work email address.

### Am I allowed to modify the gov-wide DAP GA code to customize it for my agency/website?

No. The gov-wide Google Analytics code is designed to collect data in a consistent way across all .gov websites. Any modifications to the code without DAP authorization is prohibited. DAP requires oversight of the code in order to ensure the data is reported accurately for agency sites. Agencies can continue to run their own metrics in addition to DAP.

<h2 id="part-3">
  Google Universal Analytics
</h2>

### What is Google Universal Analytics?

In the last several years, Google Analytics has grown to serve not just individual users and websites, but also entire corporations and government agencies. With that, it has gone through a series of transformations, and its reporting and development evolved. To continue to enhance its future feature development and tracking, and to provide more flexibility for customization, Google decided to gradually phase out its classic ga.js code and to start using its brand new Universal Analytics (UA) tracking code. Universal Analytics (also known as analytics.js) is now the operating standard for Google Analytics.

If your agency is still using a ga.js DAP code, an upgrade to Universal Analytics is essential for data integrity. More information on implementing the most recent code can be found on our [Implementation Instructions]({{< link "analytics-tool-instructions.md" >}}) page and our <a href="https://github.com/digital-analytics-program/gov-wide-code" target="_blank">Github repo</a>.

### What&#8217;s the difference between classic GA and Universal Analytics (UA)?

Compared to the classic GA (ga.js), UA gives GA users more control over tracking settings (e.g. session timeouts, campaign timeouts, exclusion of referrals, addition of search engines, removal of certain search terms etc.). UA also gives users the ability to create custom dimensions and custom metrics (in the current classic GA, users can only create custom variables), and other customization enhancements.

If your agency is still using a ga.js DAP code, an upgrade to Universal Analytics is essential for data integrity. More information on implementing the most recent code can be found on our [Implementation Instructions]({{< link "analytics-tool-instructions.md" >}}) page and our <a href="https://github.com/digital-analytics-program/gov-wide-code" target="_blank">Github repo</a>.

<h2 id="part-4">
  <a name="data-access-retention-privacy"></a>Data Access, Retention and Privacy
</h2>

### Will a change be required to a website&#8217;s privacy policy when opting in to track demographics information as part of DAP?

Yes, it will be. We recommend using USA.gov&#8217;s privacy policy page under &#8220;[Use of Persistent Cookies](https://www.usa.gov/policies)&#8221; as an example of how a website&#8217;s privacy policy statement should be updated to reflect the demographics information collection.

### Can visitors to government websites opt-out from being tracked by Google Analytics?

Yes. Google officially allows people to [opt out of Google Analytics](https://support.google.com/analytics/answer/181881?hl=en) through a [browser extension](https://tools.google.com/dlpage/gaoptout) for many major browsers.

### Does Google or GSA collect Personally Identifiable Information (PII)?

No. Personal information is information that personally identifies you, like name, email address, or other data which can be reasonably linked to such information. GSA does not track or collect any of this information using the Digital Analytics Program tool.

Every computer and device connected to the Internet is assigned a unique number known as an Internet protocol (IP) address. The DAP code is set to anonymize IP addresses at the earliest available point, and the original IP address is not stored at any point.

### Do agencies have access to the data that is gathered from the government-wide code?

The Digital Analytics Program at GSA administers the government wide analytics account to help agencies meet metrics reporting requirements from OMB e-gov office.

In August, 2014, the U.S. Chief Information Officer notified agencies that access to DAP government-wide data would become available to DAP users. This action was completed in September, 2014. In a memo to the CIO Council, he said:

&#8220;opening the DAP government-wide data will let participating agencies see other agency’s public-facing website analytics, gain valuable knowledge about shared customers, benchmark against similar agencies, and, most importantly, engage in collaboration and exchange lessons learned.&#8221;

### Are the metrics we collect available to Google’s corporate advertising partners?

No. None of the federal government data tracked as part of the Digital Analytics Program will be shared with or available to Google’s corporate advertising partners.

### Does Google or GSA ever store IP addresses?

IP anonymization/masking takes place as soon as data is received by Google Analytics and before any storage or takes place. At no time is the full IP address written to disk as all anonymization happens in memory nearly instantaneously after the request has been received. The full IP address is never written to disk when the anonymization flag is turned on as it is with GSA’s account. This process was created to meet strict EU privacy requirements. [Read more about IP Anonymization in Google Analytics](http://support.google.com/analytics/bin/answer.py?hl=en&answer=2763052).

### What type of security measures/testing was done on the code that GSA is asking us to install?

GSA has done an IT security review of the DAP custom GA code. No significant issues were found. Agencies can review our analysis and, in the context of their own infrastructure, follow their processes for securing applications in their infrastructure, adding applications to their Certification and Accreditation analysis, etc. Please contact <a href="mailto:dap@support.digitalgov.gov" target="_blank">dap@support.digitalgov.gov</a> to request a copy of our security report.

### Does my agency need a TOS with Google to use the services provided under GSA’s Digital Analytics Program?

GSA has negotiated a federal terms of service for Google Analytics Premium. Therefore, agencies do not need to sign a new TOS to use DAP. If an agency would like its own separate (not DAP) implementation of Google Analytics Premium, it can use the DAP TOS as a starting point, but will need to sign a separate agreement.  Please contact <dap@support.digitalgov.gov> to request a copy of the terms.

For agencies to view the Google Analytics Dashboard, you will need a Google account. Agencies that have YouTube, Google+, or are using Google Analytics already have a Google account. You can check with your Office of General Counsel or your TOS lead for further guidance.

### Is a new privacy notice needed on my agency website if we add Google Analytics Premium?

We recommend adding the following language:

> This website uses Google Analytics Premium. Please refer to the following policies on Google’s website for more information:
>
> * [Google’s main privacy policy](http://www.google.com/intl/en/policies/privacy)
> * [Cookies & Google Analytics on Websites](https://developers.google.com/analytics/resources/concepts/gaConceptsCookies)
> * [Opt out of Google Analytics Cookies](https://tools.google.com/dlpage/gaoptout?hl=en)

See [this notice]({{< link "policies.md" >}}) on our Site Policies page.

<h2 id="part-5">
  <a name="reporting"></a>Reporting
</h2>

### With many people coming in via dynamic IP services, how can you tell the difference between new and returned visitors?

Because of  cookie deletion, unique, and new vs. returning visitors metrics can never be 100% accurate, regardless of whether Google Analytics or any other cookie-based Web analytics tool is used. If  a visitor deletes their browser cookies, he or she will be counted as a new visitor.

### Where can I find benchmarks for things like bounce rate, returning users, unique visitors, etc.?

There are several reliable sources of competitive/benchmark data, including commercial providers like Compete, Hitwise, ComScore, and Nielsen, as well as free tools like Google Trends. Each source/solution has a specific methodology to measure Internet traffic, so their findings may not always be consistent.

There are also a variety of Web analytics blogs that publish the _Google Analytics Monthly Benchmark Report_, a report that Google Analytics users receive by email on a monthly basis if they opt-in to share data anonymously with Google. For example, Google Analytics Benchmark Averages for Bounce Rate are as follows:

* **40-60%** Content websites
* **30-50%** Lead generation sites
* **70-98%** Blogs
* **20-40%** Retail sites
* **10-30%** Service sites
* **70-90%** Landing pages

Ultimately, while there are many sources for benchmarking information, your Web data interpretation and analysis should be based on the website/department/agency goals that make sense within your organization. Industry-based benchmark percentages only make sense to measure against when they are in the proper context, and align to your specific website, the mission of your site, and other factors specific to YOUR needs and goals.

### How are bounce rates measured?

Bounce rates are calculated as the percentage of single-page visits to total visits. The “Bounce Rate” calculation will include a visit with a single page view followed by 1) closing the browser, 2) browser expiration after 30 minutes due to inactivity, directly typing in a different site’s URL into the browser’s navigation bar, or clicking on the browser “back” button.

The code will track off-site/outbound links as part of a visit, so a visit will not be considered a Bounce if the user clicks on any of the external links on your website page.

### Are clicks tied to bounce rate? Is it the % of people who looked at one page and left without clicking?

Most common Bounce Rate scenarios:

* Clicks the back button (most common)
* Closes the browser (window/tab)
* Types a new URL
* Does nothing (session times out after 30 min)

Bounce rate is the % of visits that only had one page view. A click is tied to a specific action, like a new page, search box, an offsite/outbound/external link, a sign-up form etc., so, it is considered to be interaction/engagement with that page, and hence, would not be considered a bounce.

<h2 id="part-6">
  <a name="customer-satisfaction-tool-implementation"></a>Customer Satisfaction Tool Implementation
</h2>

### Is there a free survey tool to use on public sites to capture the Customer Satisfaction data?

GSA has negotiated federal friendly Terms of Service with the following tools that can be used to collect Customer Satisfaction data:

* [4Q Survey.com](http://www.4qsurvey.com/)
* [Survey Analytics](http://www.surveyanalytics.com/)
* [SurveyMonkey](http://www.surveymonkey.com/)
* [UserVoice](http://www.uservoice.com/)

Take a look at the process for [signing the terms and using the tool]({{< link "federal-compatible-terms-of-service-agreements.md" >}} "Federal-Compatible Terms of Service Agreements") and talk to [your agency POC]({{< link "agency-points-of-contact-for-federal-compatible-terms-of-service-agreements.md" >}} "Agency Points of Contact for Federal Compatible Terms of Service Agreements").

### Is there exact wording for the Customer Satisfaction questions? Should it be exactly what’s outlined in the DAP Metrics Guidance under the Customer Satisfaction Metrics Section?

The [Digital Metrics guidance]({{< link "/guides/dap/_index.md" >}} "DAP: Digital Metrics Guidance and Best Practices") provides suggested wording for gathering the four core customer satisfaction measures. This wording is based on research and is a common way that these measures are collected. You do not need to use this exact wording. The requirement is to collect and report on four measures and to ensure they’re collected in a structured, machine processable way. [
  ](http://www.howto.gov/web-content/digital-metrics#customer-satisfaction-metrics)

### How should we report the Customer Satisfaction Metrics?

Plan to report the data on your /digitalstrategy pages. The [OMB guidance](https://login.max.gov/cas/login?service=https%3A%2F%2Fmax.omb.gov%2Fcommunity%2Flogin.action%3Fos_destination%3D%252Fdownload%252Fattachments%252F636161243%252F8_2_DGS_Implementation_Instructions_v_final.docx%253Fversion%253D1%2526modificationDate%253D1350935840136) identifies these reporting requirements: Agencies should report progress publicly via their /digitalstrategy pages. According to Digital Government Strategy Milestone #8.2:

For Customer Satisfaction:

* Describe the tool(s) utilized, progress toward implementing on all public-facing .gov websites (pursuant to privacy and security laws and regulations), and approach to finishing implementation on all .gov websites (if not yet complete).
* Provide links to any places where this customer satisfaction data is being shared publicly.

### How should we structure the data? Open ended? Numeric scale?

The data you report should be structured and quantitative. Don’t report the open ended answers to questions. The requirement is to collect and report on four measures and to ensure they’re collected in a structured, machine processable way. [See the guidance on customer satisfaction metrics.]({{< link "/guides/dap/_index.md" >}}"Digital Metrics for Federal Agencies")

### How frequently should we be prompting for a survey?

Survey frequency should be determined by your survey goals, how frequently you plan to act on the data you collect, and your resources for running the survey. Most commercial survey tools will have a built-in methodology for this, and you can work with the vendor to adjust as needed, to ensure you get a sufficient response rate to ensure reliable data.
