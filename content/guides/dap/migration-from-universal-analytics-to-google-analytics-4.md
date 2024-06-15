---
date: 2019-07-31 09:00:00 -0500
title: "Migration Guidelines"
deck: "Learn about the migration from Universal Analytics to Google Analytics 4"
summary: "Understand what you need to do to migrate from Universal Analytics to Google Analytics 4."
guide: dap
primary_image: guide-dap
aliases:
  - /services/dap/guidelines-for-sharing-dap-data/
  - /guide/dap/guidelines-for-sharing-dap-data/
---

On July 1, 2024, the Digital Analytics Program (DAP) will replace Universal Analytics (UA) with Google Analytics 4 (GA4).

Between August 1, 2023, and June 30, 2024, DAP users will have access to both the legacy UA data and the new GA4 data. This overlap will allow everyone to become accustomed to interpreting and analyzing data in GA4.

In March 2024, DAP relaunched the [analytics.usa.gov](http://analytics.usa.gov/) website following its migration from Universal Analytics to Google Analytics 4. The website delivers valuable analytical data on real-time and historical traffic across federal websites, enabling the public to understand interactions across government. To ensure a smooth transition, users should explore new GA4 data, reports, and [our training videos](https://www.youtube.com/playlist?list=PLd9b-GuOJ3nEz1NYl66orgVZIu17laKba).

Want to learn more? Join the [Web Analytics community of practice](https://digital.gov/communities/web-analytics-and-optimization/) to connect with other federal analytics professionals who are using data to transform how the government interacts with the public.

## Differences between GA4 and UA

From data collection and metrics, to user interface and reporting features, GA4 is very different from UA. For example, GA4 tracks analytics for both websites and applications, while UA tracks analytics for websites only. Also, while UA uses measurement based on pageviews, GA4 uses a measurement model based solely on `events`, which is a measure of a specific user interaction with a website, such as a click or a file download.

The DAP team took several steps to prepare for GA4:

- **Dual tracking code.** To best serve the DAP customers during the migration to GA4, the DAP team released new custom code for `dual tracking` on August 1, 2023. This dual tracking code collects both UA and GA4 data. It continues to collect UA data in the governmentwide account and agency-specific profiles until July 1, 2024. In other words, there is no change to existing DAP governmentwide accounts (property) and agency profiles (subproperty).
- **New GA4 account structure.** The DAP team has created agency subproperties for GA4. This account structure ensures federal agencies continue to benefit from DAP’s dedicated agency-specific reporting and analysis structure, and to analyze governmentwide data. The GA4 agency subproperties collect analytics using the same rules and filters as the UA agency profiles.
- **New GA4 custom reports.** Using the GA4 user interface, DAP customers will be able to view governmentwide and agency-specific metrics using DAP’s custom reports. Those reports will be published by a DAP administrator under `DAP reports` on the left navigation bar.
- **Training and customer support.** DAP released the training videos linked above and plans to create additional training materials focused on building custom reports data explorations in GA4 to help ease the learning process. The DAP team is working to ensure that customers continue to have access to over 10 years of historical data from the UA property before July 1, 2024.

{{< box >}}
**Do you have a question for the DAP team?** Send an email to [dap@gsa.gov](mailto:dap@gsa.gov), and they’ll get back to you.
{{< /box >}}
