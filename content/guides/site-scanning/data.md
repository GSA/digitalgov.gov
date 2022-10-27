---
date: 2020-07-28 09:00:00 -0500
title: "Access the Data"
guide: site-scanning
aliases:
  - /guide/site-scanning/data/
  - /guides/site-scanning/download-the-data/

---

There's a complete API available for accessing all of the scan data. Full documentation, including API key registration, [can be found on open.gsa.gov](https://open.gsa.gov/api/site-scanning-api/).

**Direct Downloads**

The scan data is also exported on a weekly basis and can be downloaded in one of two sets. The primary set includes scan data for all live URLs (those that return a 2xx server code):

* [CSV](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv)
* [JSON](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.json)

The second set includes scan data for all URLs that were scanned, regardless of whether they are live or not (some may be inaccessible over the public internet, no longer live, or experiencing downtime):

* [CSV](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.csv)
* [JSON](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.json)
