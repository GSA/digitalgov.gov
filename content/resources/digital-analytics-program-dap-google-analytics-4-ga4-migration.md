---
date: 2023-07-28 15:45:00 -0500
title: Digital Analytics Program (DAP) Google Analytics 4 (GA4) Migration
deck: Understand how and why DAP is transitioning from Universal Analytics to GA4
summary: >
  Understand how, when, and why DAP is transitioning from Universal Analytics to
  GA4 and what steps you need to take to prepare. 
# See all topics at https://digital.gov/topics
topics:
  - metrics
  - content-strategy
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1
slug: digital-analytics-program-dap-google-analytics-4-ga4-migration
---
## What is the DAP GA4 migration?

Digital Analytics Program (DAP) Google Analytics (GA) Universal Analytics (UA) will be replaced by DAP [Google Analytics 4](https://support.google.com/analytics/answer/10089681) (GA4) on July 1, 2024. With the update from UA to GA4, Google is creating a new analytics platform that provides new metrics and data to more effectively measure digital content usage and engagement, and more flexibility for ad-hoc and custom reporting. Between August 1, 2023 and July 1, 2024, DAP users will have access to both the legacy UA data and the new GA4 data. This overlap will allow all of us to become accustomed to interpreting and analyzing data within the GA4 version of DAP.

GA4 is vastly different from UA - from data collection and metrics to User Interface and reporting features. For example, GA4 tracks analytics of both websites and applications, while UA can track analytics for websites only. And, while UA uses measurement based on page views, GA4 uses a measurement model based solely on events.

Due to the fundamental differences between UA and GA4, Google will not carry over historical UA data and metrics into GA4. As a result, the DAP GA4 migration should be treated as a new software service rather than as an update to existing software. DAP customers should be prepared for a steep learning curve associated with GA4 and are encouraged to begin exploring the new GA4 data, reports and available training resources prior to the transition deadline. 

## How is DAP preparing for the GA4 migration?

* Releasing dual tracking DAP code. To best serve the DAP customers during the GA4 migration, DAP will be releasing new custom code that will contain dual tracking (both UA and GA4 collection) on August 1, 2023. The dual tracking code will continue to collect UA data in the Government-wide and agency-specific profiles until July 1, 2024 (no change to existing DAP gov-wide and agency profiles). In parallel, it will kick off new GA4 collection and reporting for GA4 Gov-wide DAP property and agency-specific GA4 [sub-properties](https://support.google.com/analytics/answer/11525732?hl=en) (similar to UA profiles or views). The dual tracking code is currently being tested by several agencies to ensure that it’s ready for launch on August 1, 2023. 
* Setting up a new DAP GA4 Account Structure. To ensure that federal agencies continue to benefit from DAP’s dedicated agency-specific reporting and analysis structure, as well as to continue to be able to analyze government-wide data, the DAP team is creating agency-specific sub-properties for GA4 (see below). The GA4 agency sub-profiles will collect analytics using the same rules and filters as the UA agency profiles. 

\[Insert ‘government-wide.png’ near here]

\[Insert ‘agency.png’ near here]

* Creating new GA4 DAP custom reports. Using the GA4 UI, DAP users will be able to view gov-wide and agency-specific metrics using DAP's custom reports. Those reports will be published by a DAP admin under DAP Reports on the left Navigation Bar (see example below). 

\[Insert ‘custom-report.png’ near here]

* Creating GA4 DAP training and customer support. As GA4 collects more data, DAP will be releasing training to help support DAP users throughout the migration and beyond. The training plan will include short videos, such as “DAP (GA4) in a Minute” as well as a more comprehensive introduction to DAP GA4. DAP also will be holding monthly office hours for DAP users to call and ask questions. All this and more information is forthcoming and will be shared with the DAP users in the near future post DAP GA4 launch. 
* Planning necessary updates for analytics.usa.gov. The DAP team is evaluating solutions for analytics.usa.gov real-time and trend reporting post GA4 launch. More information will be provided as it becomes available. 
* Planning for post July 1, 2024 activities. On July 1, 2024, DAP UA account will be deprecated and no longer available to DAP users. To ensure that DAP users continue to have access to 10+ years of historical data from the UA property post July 1, 2024, the DAP team is planning to leverage Big Query. More information and updates are forthcoming.

## Call to action before August 1, 2023

1. Most DAP-participating agencies already call the DAP code from the central hosting <https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js>, so no action is needed on their part to switch to DAP GA4 and the latest code. However, if agencies host the DAP code locally on their own servers, they will be required to replace their existing DAP code version with the new DAP dual tracking code (the latest code will be posted on the [DAP Github repo](https://github.com/digital-analytics-program/gov-wide-code/blob/master/Universal-Federated-Analytics-Min.js) before July 31, 2023). 
2. DAP-participating agencies must ensure that they use an agency parameter (and sub-agency, where applicable) in the DAP tag. Using an agency custom parameter will allow for more efficient data analysis and filtering in GA4 to understand differences in trends across participating agencies and data analysis (see example of an agency parameter used in a DAP tag with central hosting) 

**`<script async type="text/javascript" id="_fed_an_ua_tag" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=GSA"></script>`**