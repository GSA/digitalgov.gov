---
date: 2020-07-28 09:00:00 -0500
title: "Access the data"
guide: site-scanning
aliases:
  - /guide/site-scanning/data/
  - /guides/site-scanning/download-the-data/
summary: "Learn how to get started and download data from the Site Scanning program."
primary_image: guide-site-scanning

---

**Get Started**

The easiest way to begin accessing and using data from the Site Scanning program is to:
  1. Download the [primary CSV dataset](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv).
  2. Open the data in a spreadsheet program.
  3. Apply filters to view the websites for your agency, bureau, or domain only.
  4. Hide or delete any unused columns to make the spreadsheet faster and more responsive.
  5. Review the [data dictionary](https://github.com/GSA/site-scanning-documentation/blob/main/data/Site_Scanning_Data_Dictionary.csv) to understand the fields for each website.

Then, start looking at the data and using it to generate insights and make data-informed decisions.

Most data fields are straightforward. Review the [technical details](https://digital.gov/guides/site-scanning/technical-details/) if you want to dig deeper or pursue more sophisticated tasks.

**Download the data**

The scan data is exported on a weekly basis. You can download it with live URLs only or all URLs.

**Primary dataset with live URLs only**

The primary dataset includes scan data for all live URLs only. In other words, it only includes the websites for which `Final URL - Live` has a value of `TRUE`. The dataset excludes machine-readable data files such as XML and JSON files.
* [Download the primary CSV](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv)
* [Download the primary JSON](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.json)

**Full dataset with all URLs**

The  full dataset includes scan data for all URLs that were scanned, regardless of whether they are live or not. Some URLs may be inaccessible over the public internet, no longer live, or experiencing downtime.
* [Download the full CSV](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.csv)
* [Download the full JSON](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.json)

**Access the API**

The Site Scanning program provides an API that you can use to access all of the scan data. Visit the [Site Scanning API](https://open.gsa.gov/api/site-scanning-api/) page for documentation, including an API key registration.

**Contact the Site Scanning team**

If you have any questions, please email the Site Scanning team at [site-scanning@gsa.gov](site-scanning@gsa.gov).

They welcome your feedback, including suggestions for federal websites to add or remove from the [Federal Website Index](https://github.com/GSA/federal-website-index).
