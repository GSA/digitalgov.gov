---
date: 2019-07-31 09:00:00 -0500
title: "Add your site to DAP"
deck: ""
summary: "The best ways to participate in DAP and add analytics code to federal websites."
guide: dap
primary_image: guide-dap
aliases:
  - /services/dap/add-your-site-dap/
  - /guide/dap/add-your-site-dap/
---

## Participating in DAP

Any federal agency can sign up to use the Digital Analytics Program (DAP) web analytics tool. Here’s how it works: 

- Agencies define a DAP point of contact.
- The DAP team will send the agency point of contact a short registration form to register their agency, and work with them to implement the common page tag code.
- The DAP team will provide implementation support, access to training, and other resources to the agency point of contact.
- If you don’t have an identified point of contact, [send the DAP team an email](mailto:dap@gsa.gov).

## Where to place the DAP script

**The DAP script should only be applied to public-facing pages.** Public-facing web pages are defined as those that can be accessed without any authentication or login, and are not part of an otherwise "privileged session."

The DAP script tag should not be placed on pages visited during logged-in sessions. Notably, other seemingly “public” pages that can be accessed without authentication may also be part of _privileged sessions_; for example, a password reset page that is accessed by clicking a link in an email is not appropriate for DAP code because it assumes the visitor has the privilege of control over the email account used to provide the link. 

## How to add custom web analytics code

Agencies have two options for the DAP code implementation, all described in detail in the [DAP Implementation Guide](https://github.com/digital-analytics-program/gov-wide-code/blob/master/documentation/GSA%20DAP%204.1%20-%20Quick%20Guide.pdf) (PDF, 293 kb, 13 pages PDF), and outlined below. 

1. **Centrally hosted (recommended):** the implementation involves calling the DAP code file via a central host location that the Digital Analytics Program hosts at: [https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js](https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js). The DAP team continuously updates this file with new versions (and/or bug fixes periodically), and those changes take effect immediately on sites implemented with the file via the above location. We’ve taken every measure possible to make this option easy and secure. Please [see our GitHub repo](https://github.com/digital-analytics-program/gov-wide-code) for more explanation and [the implementation guide](https://github.com/digital-analytics-program/gov-wide-code/blob/master/documentation/GSA%20DAP%204.1%20-%20Quick%20Guide.pdf) (PDF, 293 kb, 13 pages PDF) for specific steps.
2. **Locally hosted:** The other option is to continue to host the DAP code file locally, as many agencies have done in the past. If you determine this is the right option for your agency website, please choose one of the file versions below (posted on Github) to host the DAP code locally, and review [the implementation guide](https://github.com/digital-analytics-program/gov-wide-code/blob/master/documentation/GSA%20DAP%204.1%20-%20Quick%20Guide.pdf) (PDF, 293 kb, 13 pages PDF) for specific steps. Please note that if you choose to implement using the locally hosted version, you will need to upgrade your code each time the DAP team releases a new code version. Failure to update your locally hosted code could impact the quality, security, and/or functionality of data collected in DAP. 
    - File number one: [Regular version of the DAP JavaScript code on GitHub](https://raw.githubusercontent.com/digital-analytics-program/gov-wide-code/master/Universal-Federated-Analytics.js). 
    - File number two: [Minified version of the DAP JavaScript code on GitHub](https://raw.githubusercontent.com/digital-analytics-program/gov-wide-code/master/Universal-Federated-Analytics-Min.js). 

In addition, those implementing should read capabilities of the code in the [version 4.1 Code Summary](https://github.com/digital-analytics-program/gov-wide-code/blob/master/documentation/GSA%20DAP%204.1%20-%20DAP%20Code%20Capabilities%20Summary%20and%20Reference.pdf) (PDF, 472 kb, 20 pages PDF), and the [version 4.1 Release Notes](https://github.com/digital-analytics-program/gov-wide-code/blob/master/documentation/GSA%20DAP%204.1%20-%20Release%20Notes.pdf) (PDF, 143 kb, 3 pages PDF).

With either option (centrally or locally hosted), the governmentwide DAP website traffic data flows into its own separate Google Analytics account, and should cause no change in your independent Google Analytics account metrics. 

If you have any questions, please email the DAP team at [dap@gsa.gov](mailto:dap@gsa.gov).
