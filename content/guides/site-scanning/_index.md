---
date: 2020-06-25 09:00:00 -0500
title: "Understanding the Site Scanning program"
deck: "A set of daily scans of the federal web presence."
summary: "This program is available to automatically generate data about the health and best practices of federal websites."

guide: site-scanning
image: guide-site-scanning
layout: single
guide_weight: 3

# Redirects: Enter the paths of the old URLs that you want redirected to this page.
aliases:
  - /guide/site-scanning/
  - /site-scanning/
  - /sitescanning/
  - /site-scan/
  - /sitescan/
  - /site-scans/
  - /sitescans/

# See all topics at https://digital.gov/topics
topics:
  - analytics
  - budgeting-and-performance

# For social media shares; if not provided, the default Digital.gov logo card appears.
primary_image: guide-site-scanning

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
# 10, 9, 8, 7, or 6 -- for the five items that appear in the white box on homepage; 10 is first or at the top, and 6 is fifth or last.
weight: 2

---

**The Site Scanning program** automates a wide range of scans of public federal websites and generates data about website health, policy compliance, and best practices.

The program is a shared service provided at no cost for federal agencies and the public to use. At its core is the Federal Website Index, a reference dataset listing all public federal .gov sites by agency/department. Daily scans generate over 1.5 million fields of data about 26,000 federal .gov websites, made publicly available via API and bulk download.

**We scan federal domains for:**

- The presence of agency websites and subdomains
- Digital Analytics Program participation
- Use of the US Web Design System
- Search engine optimization
- Third party services
- IPv6 compliance
- Other best practices

## Access the data directly

All scan data can be downloaded directly as a [CSV or JSON file](data/) or accessed through the [Site Scanning API](https://open.gsa.gov/api/site-scanning-api/).

## Learn more about the program, the scans, and the underlying data

Much deeper program detail can be found in the program's [documentation hub](https://github.com/gsa/site-scanning-documentation). The major sections include:

- [About the program](https://github.com/gsa/site-scanning-documentation#about)
- [Understanding the data](https://github.com/gsa/site-scanning-documentation#understanding-the-data)
- [Program management](https://github.com/gsa/site-scanning-documentation#program-management)

The creation of the underlying website index is explained in the separate [Federal Website Index repository](https://github.com/GSA/federal-website-index). It includes links to the original datasets, as well as descriptions of how they are assembled and filtered in order to create the list of URLs that are then scanned.

## Contact the Site Scanning team

**Questions?** Email the Site Scanning team at [site-scanning@gsa.gov](mailto:site-scanning@gsa.gov).
