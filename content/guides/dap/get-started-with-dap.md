---
date: 2019-07-31 09:00:00 -0500
title: "Get started with DAP"
deck: "Use DAP to better understand user behavior"
summary: "Learn how to use DAP to better understand user behavior."
guide: dap
primary_image: guide-dap
aliases:
  - /services/dap/add-your-site-dap/
  - /guide/dap/add-your-site-dap/

---

Are you ready to start using the Digital Analytics Program (DAP) to understand how the public finds, accesses, and uses your agency’s online information and services? Get started in three easy steps:

1. [Register as a DAP user](#step-1-register-as-a-dap-user)
2. [Add the DAP code to collect data](#step-2-add-the-dap-code-to-your-website-to-collect-data)
3. [Explore the data](#step-3-explore-the-data)

## Step 1. Register as a DAP user

All federal employees and contractors who work for a participating agency can register for access to DAP. After a user fills out the registration form, the DAP team will request approval from the agency's DAP point of contact and grant access once approval is received.

Email the DAP team at [dap@gsa.gov](mailto:dap@gsa.gov) to request a registration form.

{{< note >}} 
You must associate your .gov or .mil email address with Google. 

If your agency uses Google, this association is done automatically. You don’t need to do anything.

If your agency does not use Google, visit [https://accounts.google.com/SignUpWithoutGmail](https://accounts.google.com/SignUpWithoutGmail) and follow the prompts to associate your .gov or .mil email account with Google Analytics.

Do not use your personal Gmail address or create a new Gmail address. 

Also, if applicable, unlink any personal `gmail.com` accounts from your government email account in Google Analytics. Linking these addresses could result in your removal from DAP.
{{< /note >}}

## Step 2. Add the DAP code to your website to collect data

You have two options for implementing the DAP code. For both options, the governmentwide DAP data flows into its own separate Google Analytics account; they do not affect any other Google Analytics data you may be collecting.

### Option 1: Use the centrally-hosted code (recommended)

The DAP team recommends using their centrally-hosted code file. The biggest advantage is that the DAP team updates this file periodically, and your site will always be on the latest version. This option reduces the burden on your team to maintain the code.

Follow the instructions in the DAP Quick Technical Guide on GitHub to [use the centrally-hosted code](https://github.com/digital-analytics-program/gov-wide-code/wiki/DAP-Quick-Technical-Guide#dap-centrally-hosted-url-implementation-instructions).

### Option 2. Host the code locally (not typically recommended)

The second option is to host the DAP code locally. Some agencies did this in the past, but it isn’t typically recommended. You will need to upgrade your code each time the DAP team releases a new version. Failure to update your locally-hosted code may impact data quality, security, and functionality.

If you determine this is the best approach for your agency, follow the instructions in the DAP Quick Technical Guide on GitHub to [host the code locally](https://github.com/digital-analytics-program/gov-wide-code/wiki/DAP-Quick-Technical-Guide#local-host-implementation-instructions).

{{< note >}}
**Technical examples**

Review the [DAP Quick Technical Guide on GitHub](https://github.com/digital-analytics-program/gov-wide-code/wiki/DAP-Quick-Technical-Guide) for more details and examples on how to add the DAP code to your site.
{{< /note >}}

### Determine where to add the code

Add the DAP code to all `public-facing websites`. Public-facing websites are defined as sites that are primarily intended for public users. In other words, websites with users who are NOT exclusively federal government employees or contractors.

Also, add the DAP code to sign-in pages that serve as the entry point to authenticated content on public-facing websites. Beyond sign-in pages, implementation of the DAP code on authenticated pages is permitted on a case-by-case basis only. Email the DAP team at [dap@gsa.gov](mailto:dap@gsa.gov) to request their approval and coordinate the prerequisite tests.

## Step 3. Explore the data

Everyone, including the public, can visit [analytics.usa.gov](https://analytics.usa.gov/) to see how many people are on government websites right now. Explore this dashboard for a governmentwide view of how the public interacts with federal websites.

{{< img src="analytics-usa-gov-over-1-point-five-million-visitors-at-3-39-pm-may-29-2024" >}}

Registered DAP users can also access more detailed governmentwide and agency-level data in DAP. 

Watch the video below, Guide to the Digital Analytics Program (DAP): How to access DAP and find your agency data, for a brief introduction on how to access DAP and find your agency data. Then, visit [https://google.com/analytics](https://google.com/analytics) and sign in with your official .gov or .mil email address.

{{< youtube id="tjvQlkVBCqQ" title="Guide to the Digital Analytics Program (DAP): How to access DAP and find your agency data" >}}

[View the slides (Google Slides presentation, 3.8 MB, 22 pages)](https://docs.google.com/presentation/d/1Ao6r3LXjpzMJUkQX2qdB4h_ADK_fYYqAn23TrogmGBU/edit)

## Other web analytics tools 

The DAP team encourages participating agencies to implement other web analytics tools in addition to DAP. The DAP code does not interfere with the code for other analytics tools or affect data collection.

The data from other web analytics tools likely will not match the data in DAP because of differences in their configurations. If the variations are significant, email the team at [dap@gsa.gov](mailto:dap@gsa.gov), and they’ll help you troubleshoot the issue.

{{< box >}}
**Do you have a question for the DAP team?** Send an email to [dap@gsa.gov](mailto:dap@gsa.gov), and they’ll get back to you.
{{< /box >}}
