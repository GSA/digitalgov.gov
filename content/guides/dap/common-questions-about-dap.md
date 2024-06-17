---
date: 2019-07-31 09:00:00 -0500

expiryDate: "2024-06-14"

title: "Common questions about DAP"
summary: "The most common questions about implementing, customizing, and utilizing the DAP program."
guide: dap
primary_image: guide-dap
summary_box: true
aliases:
  - /services/dap/common-questions-about-dap-faq/
  - /services/dap/common-questions-about-dap/
  - /guide/dap/common-questions-about-dap/

---

{{< box >}}
**Do you have a question for the DAP team?** Send an email to [dap@gsa.gov](mailto:dap@gsa.gov).
{{< /box >}}

---
## About the Digital Analytics Program’s migration to Google Analytics 4
Understand how and why DAP is transitioning from Universal Analytics to Google Analytics 4.

### Q: When will the Digital Analytics program migrate to Google Analytics 4?

A: On July 1, 2024, the [Digital Analytics Program](https://digital.gov/guides/dap/) (DAP) will replace Universal Analytics (UA) with [Google Analytics 4](https://support.google.com/analytics/answer/10089681) (GA4). 

Between August 1, 2023, and June 31, 2024, DAP users will have access to both the legacy UA data and the new GA4 data. This overlap will allow everyone to become accustomed to interpreting and analyzing data in GA4. 

Keep reading to learn more about how the DAP team is preparing for the transition and what you need to do.

### Q: How is DAP preparing for the GA4 migration?

A: GA4 is very different from UA — from data collection and metrics, to user interface and reporting features. For example, GA4 tracks analytics for both websites and applications, while UA tracks analytics for websites only. Also, while UA uses measurement based on pageviews, GA4 uses a measurement model based solely on events. 

The DAP team is taking several steps to prepare for the GA4 migration.

- **The DAP team released dual tracking code.** To best serve the DAP customers during the migration to GA4, the DAP team released new custom code for `dual tracking` on August 1, 2023. This dual tracking code collects both UA and GA4 data. It continues to collect UA data in the governmentwide and agency-specific profiles until July 1, 2024. In other words, there is no change to existing DAP governmentwide and agency profiles. In parallel, the dual tracking code kicks off collecting and reporting for the GA4 governmentwide DAP property and agency-specific GA4 subproperties. [Subproperties](https://support.google.com/analytics/answer/11525732?hl=en) are similar to UA profiles or views.

- **The DAP team set up a new GA4 account structure.** The DAP team has created agency subproperties for GA4. This account structure ensures federal agencies continue to benefit from DAP’s dedicated agency-specific reporting and analysis structure and to be able to analyze governmentwide data. The GA4 agency subproperties collect analytics using the same rules and filters as the UA agency profiles. 
- **The DAP team is creating new GA4 custom reports.** Using the GA4 user interface, DAP customers will be able to view governmentwide and agency-specific metrics using DAP's custom reports. Those reports will be published by a DAP administrator under `DAP reports` on the left navigation bar. 
- **The DAP team is creating training and customer support.** As GA4 collects more data, the DAP team plans to release training to help support DAP customers throughout the migration and beyond. The training plan includes short videos, such as “DAP (GA4) in a minute” as well as a more comprehensive introduction to DAP GA4. The DAP team also plans to hold monthly office hours for DAP customers to attend and ask questions. 
- **The DAP team is planning necessary updates for analytics.usa.gov.** The DAP team is evaluating solutions for analytics.usa.gov real-time and trend reporting. 
- **The DAP team is planning to retain access to historical data**. After the DAP UA account is deprecated on July 1, 2024, it will no longer be available to DAP customers. The DAP team is working to ensure that customers continue to have access to over 10 years of historical data from the UA property. 
- **The DAP team is supporting the parallel UA (PUA) tracking parameter.** They will provide more information about the parallel GA4 tracking parameter soon
The DAP team will continue to update this page and provide more information in the coming months. 

### Q: What actions are required for me to move to GA4?

A: As a DAP customer, you should begin to explore the new GA4 data, reports, and available training resources. You should also complete the following two actions as soon as possible.

**Action 1: Review whether you use central hosting or host the DAP code locally.**

Most agencies call the DAP code from the centrally hosted file, [https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js](https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js). If you use central hosting, no action is needed to switch to DAP GA4 and the latest code. 

If your agency hosts the DAP code locally on your own servers, you will be required to replace the existing DAP code version with the new DAP dual tracking code. See the latest [Universal-Federated-Analytics-Min.js](https://github.com/digital-analytics-program/gov-wide-code/blob/master/Universal-Federated-Analytics-Min.js) file under the `gov-wide-code` repository in the [Digital Analytics program Github organization](https://github.com/digital-analytics-program) (published on August 1, 2023).

**Action 2: Use the agency parameter.**

Use the custom agency parameter to more efficiently analyze and filter data in GA4 and understand differences in trends across participating agencies. Also use the custom sub-agency parameter, if applicable. See, for example, the agency parameter used in a DAP tag with central hosting:

`<script async type="text/javascript" id="_fed_an_ua_tag" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=GSA"></script>`

Contact the DAP team at [dap@gsa.gov](dap@gsa.gov) with any questions about these two action items.

**Connect with others interested in the DAP GA4 migration.**

Want to learn more? 
Join the [Web Analytics community of practice](https://digital.gov/communities/web-analytics-and-optimization/) to connect with other federal analytics professionals who are using data to transform how the government interacts with the public.

## Digital Analytics Program (DAP) User Agreement

**Q. What are my responsibilities as a DAP user?**

A. By logging in and accessing the Digital Analytics Program account, you understand and agree that: 

- Access to the government-wide view of the Digital Analytics Program (DAP) is to assist participating agencies in improving websites across the government.
- Access to this full set of data is restricted to DAP users only.
- Each participating agency controls the distribution and sharing of their own agency-specific data, at the discretion of the agency’s designated DAP point of contact (POC).
- Agencies are not authorized to communicate or share findings derived from the DAP account about another agency without the other agency’s explicit, written permission (unless those data are already part of the data publicly available on [analytics.usa.gov](https://analytics.usa.gov/)).
- The Google Analytics (GA) code is designed to collect data in a consistent way across all .gov websites. Any modifications to the code without DAP authorization is prohibited. DAP requires oversight of the code in order to ensure the data is reported accurately for agency sites. Agencies can continue to run their own metrics tools in addition to DAP.

## Implementation

**Q. What tool is being used to collect the data?**

A. Currently, DAP uses Google Analytics 360 to collect and analyze the Web traffic data.

**Q. Can the DAP code be implemented with other Google Analytics and/or other web analytics tools?**

A. Yes. The DAP account script tag does not interfere with your existing analytics tools script tags and should not affect any data. The DAP team encourages all participating sites to implement their own web analytics tools in addition to the DAP tool.

**Q. Why doesn’t DAP data exactly match our free, independently managed Google Analytics account?**

A. Different analytics tools often do not exactly match because of minor or major configuration differences. It is unlikely that any Google Analytics implementation will match the DAP account exactly. If the difference is significant, email the team at [dap@gsa.gov](mailto:dap@gsa.gov) and we’ll try to help troubleshoot.

**Q. Can the Digital Analytics Code track websites and webpages using HTTPS?**

A. Yes, DAP code can track HTTPS websites and webpages. The current DAP GA code serves the script and accepts the xhr request under HTTPS by default.

**Q. For agencies who have a pre-existing metrics program, is there a way to pull in some of that historical data into our DAP profile so that we can continue to compare current performance with historical data? Or do we need to just save that data somewhere else?**

A. There is no way to import legacy or historical data or log files into the DAP account. 

**Q. Can the DAP GA code be deployed on internal agency websites (available only for internal employees)?**

A. No. The DAP Google Analytics code should be deployed only on public-facing agency website pages.

**Q. How is the DAP Google Analytics account architected?**

A. DAP Google Analytics account uses Views (formerly called ‘Profiles’) to categorize and report on federal government agencies’ website traffic. Views are assigned at the main or cabinet federal agency level (e.g. DOD, DOC, Department of Education etc.), and the traffic for sub-agency or bureau websites is reported under that main agency profile. There’s also an overarching, government-wide reporting profile, which combines all of the federal websites’ traffic into a single profile.

DAP staff is responsible for creating all agency profiles, as well as maintaining each of the profile filters used to distribute incoming traffic data. All DAP GA user access requests must be first approved by the respective agency’s DAP POC. Once approved, all DAP users are granted view-only rights to access the Google Analytics views. After user access is granted, users can view website traffic within the DAP profiles. All user management and other admin functions are handled by the DAP staff only. 

To view data related to a specific website’s traffic, each DAP user can create up to 100 advanced custom segments and/or custom reports. All of the user-based reports, segments, and dashboards can be shared with other GA DAP users, if requested. Additionally, a user can create various alerts to monitor their website performance and traffic, as well as campaigns and campaign-related reports. Watch the [DAP 101 recorded training](https://www.youtube.com/watch?v=CKMTK77PrJE&list=PLd9b-GuOJ3nFwlyvLFUtmDpYFKezhot8P&index=4) (YouTube), to learn more about profiles, segments, and dashboards.

## Customization and Access

**Q. Who can use the tool?**

A. DAP implementation and usage is limited to employees or contractors of agencies of the U.S. federal government.

**Q. Can my agency use it at no cost?**

A. Yes. There is no cost for federal government agencies to use this tool.

**Q. Is a Gmail or Google account the only way to access this data?**

A. A Google account is required, but a Gmail email address is not—any email address can be used to create a Google account. Personal Gmail accounts will not be granted access. You should sign up for the Digital Analytics Program using your .gov or contractor company email address.

**Q. Am I allowed to modify the DAP GA code to customize it for my agency/website?**

A. No. The gov-wide Google Analytics code is designed to collect data in a consistent way across all .gov websites. Any modifications to the code without DAP authorization is prohibited. The DAP team requires oversight of the code in order to ensure the data is reported accurately for agency sites. Agencies can continue to run their own metrics in addition to DAP.

## Data Access, Retention, and Privacy

**Q. Can visitors to government websites opt-out from being tracked by Google Analytics?**

A. Yes. Google allows people to [opt out of Google Analytics](https://support.google.com/analytics/answer/181881?hl=en) through a [browser extension](https://tools.google.com/dlpage/gaoptout) for many major browsers.

**Q. Does Google or GSA collect Personally Identifiable Information (PII)?**

A. No. Personal information is information that personally identifies you, such as your name, email address, or other data which can be reasonably linked to such information. GSA does not have any processes in place to collect any of this information using the Digital Analytics Program tool, and agencies are forbidden to pass any PII into the DAP account. 

In addition, the DAP code is set to anonymize IP addresses at the earliest available point, and the original IP address is not stored at any point.

**Q. Are the metrics we collect available to Google’s corporate advertising partners?**

A. No. None of the federal government data tracked as part of the Digital Analytics Program are shared with to Google’s corporate advertising partners.

**Q. Does Google or GSA ever store IP addresses?**

A. IP anonymization/masking takes place as soon as data is received by Google Analytics and before any storage or takes place. At no time is the full IP address written to disk as all anonymization happens in memory nearly instantaneously after the request has been received. The full IP address is never written to disk when the anonymization flag is turned on as it is with GSA’s account. [Read more about IP Anonymization in Google Analytics](http://support.google.com/analytics/bin/answer.py?hl=en&answer=2763052). 

**Q. Does my agency need a terms of service with Google to use the services provided under DAP?**

GSA has negotiated a federal terms of service for Google Analytics 360. Therefore, agencies do not need to sign a new TOS to use DAP. If an agency would like its own separate (not DAP) implementation of Google Analytics 360, it can use the DAP terms of service as a starting point, but will need to sign a separate agreement. Please contact [dap@gsa.gov](mailto:dap@gsa.gov) to request a copy of the terms.

**Q. Is a new privacy notice needed on my agency website if we add Google Analytics 360?**

A. Most likely, yes. We recommend using USA.gov’s privacy policy page under “[Use of Persistent Cookies](https://www.usa.gov/policies)” as an example of how a website’s privacy policy statement should be updated to reflect the information collection.
