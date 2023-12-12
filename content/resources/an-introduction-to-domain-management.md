---
date: 2023-11-28 14:38:00 -0500
title: "An introduction to domain management"
deck: "Understand how and why to manage your domain"
summary: "A .gov domain instantly conveys credibility and trustworthiness, and proper domain management practices ensure that your website is secure and accessible."

# See all topics at https://digital.gov/topics
topics:
  - domain-management
  - security
  - trust

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1

slug: an-introduction-to-domain-management

---

## What is domain management?

It should be easy to identify governments on the internet, and using a **.gov** top-level domain (TLD) shows that you’re official. The public shouldn’t have to guess whether the site they’re on or the email that hits their inbox is genuine.

A domain uniquely identifies areas on the internet, like websites or email services. For example, `Digital.gov` is a domain, consisting of 1) the second-level domain `digital`, and 2) the top-level domain `.gov`. [Domain management](https://digital.gov/topics/domain-management/) is the process of overseeing and maintaining a domain or related domains so that they are consistent and safe.

Domain management and web hosting are often confused for one another. However, domain management is different from web hosting in the same way that a street address is different from the house it leads to. A domain is a location and a name, like Digital.gov. Digital.gov is a web address, but it is also the name of an organization. Web hosting, by contrast, happens only behind the scenes; as an online service, a web host provides the physical ("dedicated") and/or virtual servers needed to publish a discoverable website on the internet.

## Why is domain management important?

It’s important to make sure that domains are chosen and maintained well. Your domain name is one of the first lines of trust when it comes to interacting with your agency. If people navigating the internet can match the name of your domain with the name of your agency in such a way that the user can understand that they have found the correct place, that’s one step in [establishing trust](https://digital.gov/topics/trust/).

Managing domains is also key for [security](https://digital.gov/topics/security/). People with malicious intent can register domain names that are similar to agency sites, and, as a result, can trick people into giving away their personal information, and more. For example, malicious actors have sought to [impersonate election organizations](https://get.gov/about/elections/).

When you use a `.gov` TLD, it increases security because the [Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov/) (CISA) enforces [multi-factor authentication](https://get.gov/2018/10/1/doing-the-2-step/) on all accounts in the [.gov registrar](https://www.get.gov/).

## How to manage your domains well

**Choose** your domain name in a way that is consistent with your agency’s overall branding and marketing goals. Work with your communications or marketing department to select the most straightforward representation of your agency’s name.

**Measure** by using analytics tools to track how your domain names are performing in search engines and other online channels.

**Protect** your domain and your users by keeping domain registrations up-to-date and your [Domain Name System](https://get.gov/help/#dns) (DNS) records accurate. You should also be monitoring your domain name to protect against similar but fraudulent domains. Encrypt all web traffic across your websites and “[preload](https://get.gov/help/security-best-practices/#preload-your-domain)” all registered .gov or .mil domains as HTTPS-only for modern web browsers. Additionally, [email authentication best practices](https://get.gov/help/security-best-practices/#use-dmarc) make it difficult for malicious actors to successfully "spoof" (impersonate) your domain in email.

**Simplify** the user experience by maintaining as few domains and subdomains as possible. It can be tempting to add new domains for new projects, but keep in mind that more domains means more risk and more to manage as your agency grows.

## What can I do next?

Domain management is about more than just DNS. It’s also about ensuring a safe experience for your organization and your users. CISA provides several [domain security best practices](https://www.get.gov/help/security-best-practices/), including:

* Add a security contact
* Develop a vulnerability disclosure policy (VDP)
* Preload your domain

For example, having a security contact for .gov domains makes it easier for the public to tell you of a potential security issue with your online services. It is relatively easy to:

1. Check CISA’s [published domain data](https://flatgithub.com/cisagov/dotgov-data/blob/main/?filename=current-full.csv).
2. In the `Domain Name` column, type in your domain to filter the data and display the record for your domain.
3. Scroll right to confirm if an email for a security contact is listed.

Follow the instructions to [update or add a security contact](https://www.get.gov/help/security-best-practices/) if needed.
