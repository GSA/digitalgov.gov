---
date: 2019-07-31 09:00:00 -0500
title: "Common Questions about DAP"
summary: ""
guide: dap
aliases:
  - /services/dap/common-questions-about-dap-faq/
  - /services/dap/common-questions-about-dap/
  - /guide/dap/common-questions-about-dap/

---

{{< box >}}
**Have a question for the DAP team?** Send an email to [dap@sgsa.gov](mailto:dap@gsa.gov) and we’ll get back to you.
{{< /box >}}

{{< guide-toc >}}

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

**Q. Does this tool have to go on all websites? Or just top-level domains?**

A. On November 8, 2016, the [Office of Management and Budget](https://www.whitehouse.gov/omb/) (OMB) released a memorandum on [Policies for Federal Agency Public Websites and Digital Services](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2017/m-17-06.pdf) (PDF, 1.2 MB, 18 pages), which requires federal agencies to implement the DAP javascript code on all public facing federal websites. Please see the `Adding Your Site to DAP` page for more information.

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

**Q. Does my agency need a TOS with Google to use the services provided under GSA’s Digital Analytics Program?**

GSA has negotiated a federal terms of service for Google Analytics 360. Therefore, agencies do not need to sign a new TOS to use DAP. If an agency would like its own separate (not DAP) implementation of Google Analytics 360, it can use the DAP TOS as a starting point, but will need to sign a separate agreement. Please contact [dap@gsa.gov](mailto:dap@gsa.gov) to request a copy of the terms.

**Q. Is a new privacy notice needed on my agency website if we add Google Analytics 360?**

A. Most likely, yes. We recommend using USA.gov’s privacy policy page under “[Use of Persistent Cookies](https://www.usa.gov/policies)” as an example of how a website’s privacy policy statement should be updated to reflect the information collection.
