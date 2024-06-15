---
date: 2019-07-31 09:00:00 -0500
title: "Glossary of terms"
deck: "Browse DAP terms"
summary: "Browse common terms that you will need to understand when using DAP."
guide: dap
primary_image: guide-dap
aliases:
  - /services/dap/gaining-access-to-dap-data/
  - /guide/dap/gaining-access-to-dap-data/
---

## What are common DAP terms?

There are some common terms that you will need to understand when using the Digital Analytics Program (DAP).

### Custom dimensions and parameters

Not every agency website or app is alike, so you can add `custom dimensions` in addition to the standard, default dimensions. DAP-specific custom parameters include:

- Agency
- Sub-agency
- Search term 
- File download type, such as pdf and csv
- DAP code version

### Hostnames and pages

A `hostname` is a unique name for a domain or website (such as `gsa.gov`, or `analytics.usa.gov`). Think of a hostname as a book.

A `page` is a portion of a hostname (such as `www.analytics.usa.gov/<strong>data</strong>/`, `www.irs.gov/<strong>newsroom</strong>`, or `www.nasa.gov/learning-resources/<strong>colleges-and-universities/</strong>`). Think of a page as a chapter or page in a book.

### Metrics and dimensions

A `metric` is a number. More specifically, a metric is a data measurement used to report on how a website performs. Common metrics in DAP include:

- Total pageviews
- Total sessions
- Bounce rate
- Total users
- Average session duration

A `dimension` is a data attribute or characteristic that provides additional information about your website or app user. Standard dimensions include:

- Device
- Platform
- Traffic source
- Country
- City
- Page path

### Sessions and views

A `session` (or visit) is a period of time during which a user interacts with your website or app. Total sessions is a count of the total number of sessions (visits) to your website and/or mobile app. Sessions tell you how much time users spend on your site. A session begins when a user opens a website and/or app and ends when they close the website and/or app or are inactive for 30 minutes. 

A `view` (or pageview) is the total number of web pages and/or app screens that users saw. A screenview is the app equivalent of a pageview. A user can view multiple pages or screens during a single session. Views show you the relative popularity of different pages.

### Properties and subproperties

A `property` refers to the account used for Google Analytics, DAP uses Google Analytics 360 to collect and analyze web traffic data.

A `subproperty` is a way to group data and measurements by parent agency, allowing agencies to find data for their websites more quickly. Agency-specific subproperties are set up at the parent agency level (e.g., Department of Health and Human Services, Department of Defense, General Services Administration). 

To use agency-specific data, choose the corresponding agency subproperty. Data for lower-level divisions within an agency (e.g., bureaus, departments, offices, sub-agencies, etc.) are reported inside the main agency subproperty.

To view governmentwide data for all websites using DAP, visit https://google.com/analytics and sign in with your official .gov or .mil email address. Then, choose the option, `0 - DAP Gov-wide View`.

{{< note >}} 
You must use the `Agency` and `Sub-agency` parameters when implementing the DAP code script. Visit the Get started with DAP page in this guide for more information.
{{< /note >}}

{{< box >}}
**Do you have a question for the DAP team?** Send an email to [dap@gsa.gov](mailto:dap@gsa.gov), and they’ll get back to you.
{{< /box >}}
