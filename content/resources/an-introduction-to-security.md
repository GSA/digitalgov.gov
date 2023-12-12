---
date: 2023-12-12 16:14:00 -0500
title: An introduction to security
deck: Understand how security impacts your website
summary: Guidance on meeting security requirements for federal websites.
# See all topics at https://digital.gov/topics
topics:
  - security
  - policy
  - digital-service-delivery
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1
slug: an-introduction-to-security
---
## What is web security?

A secure website protects information and keeps users safe. Web security means employing the latest security protocols, providing services through a secure connection, and implementing controls to ensure that the right person with the right privileges can access the right information at the right time (known as identity, credential, and access management, or ICAM). 

## Why is security important?

A core responsibility of federal agencies is to protect users and their information when using our websites and online systems. 

Follow current federal IT security policies, promptly install the latest security patches, deliver information via secure channels, and validate access to prevent the inappropriate disclosure of sensitive information. Your agency must also ensure information is resistant to tampering, remains confidential as necessary, and is available as intended by the agency, and expected by users.

## How to meet web security requirements

Provide general information to the public about security protocols, and provide a way for the public to report vulnerabilities.

* **Assessments and testing** - Regularly assess risks to your websites, and conduct security testing based on that assessment. Keep security certificates up-to-date, and patch any vulnerabilities immediately. 
* **Authentication** - If you need to provide authentication services, use a standard authentication tool such as [Login.gov](https://login.gov/) to provide multi-factor and phishing-resistant authentication. Follow U.S. Web Design System (USWDS) guidance to develop [authentication pages](https://designsystem.digital.gov/page-templates/authentication-pages/) that provide users with a consistent login experience. When appropriate, allow repeat visitors who have logged in to auto-populate forms with saved information, such as contact information. Use appropriate identity verification when greater assurance of identity is needed.
* **Embedded third-party resources** - If using web assets that are hosted on third-party services not under agency control, do not embed static third-party assets (such as PDF files); embedding dynamic third-party resources that are necessary for digital service delivery (like analytics services) is permitted.
* **Secure connections** - Provide content and services through a secure connection. Use a .gov or .mil domain name for public-facing websites and digital services, and work with the [DotGov program](http://get.gov) at the [Cybersecurity and Infrastructure Security Agency (CISA)](https://www.cisa.gov/stopransomware/cyber-hygiene-services) to “preload” agency-owned .gov domains as HTTPS-only in web browsers. Add the [USWDS Banner component](https://designsystem.digital.gov/components/banner/) to show that your site is an official government website and uses secure connections. Allow agencies to securely access resources across existing systems and emerging platforms with [Identity, Credential, and Access Management (ICAM) | CISA](https://www.cisa.gov/safecom/icam).
* **Vulnerabilities** - Publish a [Website Vulnerability Disclosure Policy (VDP)](https://digital.gov/resources/required-web-content-and-links/?dg#security-2) as a way for the public to safely report potential security vulnerabilities, and explain how your agency will respond to such reports.