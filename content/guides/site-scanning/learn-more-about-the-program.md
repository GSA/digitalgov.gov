---
date: 2020-07-28 09:00:00 -0500
title: "Learn More About The Program"
deck: ""
summary: ""
guide: site-scanning
aliases:
  - /guide/site-scanning/learn-more-about-the-program/
---

The Site Scanning program builds on a series of [earlier projects](https://github.com/18F/site-scanning-documentation/blob/main/about/project-management/project-history.md) to try and offer real-time, automatic data about all federal websites.  It begins by taking the [.gov registry export](https://github.com/GSA/data/tree/master/dotgov-domains) and then uses several sources to then aggregate a list of the subdomains on those domains.  The result is approximately 25,000 websites on 1,200 domains.  

The systems then runs a series of scans against the complete list of websites every day and makes the results [available as open data](/data/). Though many users simply want the data in a spreadsheet or machine-readable file, we've also [created an API](https://open.gsa.gov/api/site-scanning-api/) that allows interactive access to the data.  

To learn more about this program, be sure to check out the [documentation repository](https://github.com/18F/site-scanning-documentation). To get in touch with the team, [file an issue](https://github.com/18F/site-scanning/issues) or email us at site-scanning@gsa.gov.  
