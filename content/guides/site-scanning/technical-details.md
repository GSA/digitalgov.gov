---
date: 2023-07-19 09:00:00 -0500
title: "Technical details"
guide: site-scanning
primary_image: guide-site-scanning
summary: "Learn about the automated processes behind the site scanning program."
aliases:
  - /guide/site-scanning/technical-details/

---

The Site Scanning program maintains a number of automated processes that, together, consitute the entire project and seek to deliver useful data. The basic flow of these events are as follows:

- Each week, a comprehensive list of public federal .gov websites is assembled as the **Federal Website Index**.
  - [Direct download of the current Federal Website Index](https://raw.githubusercontent.com/GSA/federal-website-index/main/data/site-scanning-target-url-list.csv).
  - [Process description](https://github.com/GSA/federal-website-index/blob/main/process/index-creation.md), including details about the sources used, how the list is combined, and which criteria are used to remove entries.
  - [Snapshots from each step in the assembly process](https://github.com/GSA/federal-website-index/tree/main/data/snapshots#readme), including which URLs are removed at each step and which remain.
  - [Data dictionary](https://github.com/GSA/site-scanning-documentation/blob/main/data/Target_URL_List_Data_Dictionary.csv) for the Federal Website Index.
  - [Summary report for the assembly process](https://github.com/GSA/federal-website-index/blob/main/data/site-scanning-target-url-list-analysis.csv).
  - [Summary report for the completed Federal Website Index](https://github.com/GSA/site-scanning-analysis/blob/main/reports/target-url-list.csv).
  - [Task repository](https://github.com/GSA/federal-website-index).

- Every day, the Federal Website Index is then scanned. This is done by loading each Target URL in a virtual browser and noting the results. This information is the **Site Scanning data**.
  - [Scanning process description](https://github.com/GSA/site-scanning-documentation/blob/main/pages/scan_steps.md), including what criteria are used to create each field of data.
  - [Data dictionary](https://github.com/GSA/site-scanning-documentation/blob/main/data/Site_Scanning_Data_Dictionary.csv) for the Site Scanning data.

- The resulting information is stored in a database that is queryable via API, but each week, a series of static snapshot of the data are generated and made available for download.  
  - [API Documentation](https://open.gsa.gov/api/site-scanning-api/).
  - The ['All' snapshot](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot-all.csv) (CSV) includes every URL in the Federal Website Index.
  - The ['Primary' snapshot](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv) (CSV) is a subset of the initial snapshot and includes only live, human-readable URLs. This is likely the best starting point for most users.
  - The ['Unique Final URL' snapshot](https://raw.githubusercontent.com/GSA/site-scanning-analysis/main/unique_website_list/results/weekly-snapshot-unique-final-urls.csv) (CSV) then further trims the Primary snapshot by removing duplicative Final URLs ([details](https://github.com/GSA/site-scanning-analysis/tree/main/unique_website_list/results#readme)).
  - The ['Unique Final Website' snapshot](https://raw.githubusercontent.com/GSA/site-scanning-analysis/main/unique_website_list/results/weekly-snapshot-unique-final-websites.csv) (CSV) then finally trims the Unique Final URL snapshot by removing duplicative Final URL - Base Websites ([details](https://github.com/GSA/site-scanning-analysis/tree/main/unique_website_list/results#readme)). This is arguably the best count of federal public .gov websites.

- After these snapshots are generated, a series of reports are run that analyze or pull information out of them.
  - [Summary report of the 'All' snapshot](https://github.com/GSA/site-scanning-analysis/blob/main/reports/snapshot-all.csv).
  - [Summary report of the 'Primary' snapshot](https://github.com/GSA/site-scanning-analysis/blob/main/reports/snapshot-primary.csv).
  - [Summary report for the 'Unique Final URL' snapshot](https://github.com/GSA/site-scanning-analysis/blob/main/reports/unique-url.csv).
  - [Summary report for the 'Unique Final Website' snapshot](https://github.com/GSA/site-scanning-analysis/blob/main/reports/unique-website.csv).

- Other useful information
  - [Schedule for the above processes is the schedule](https://github.com/GSA/site-scanning-documentation/blob/main/pages/schedule.md) for the above, automated processes.
  - [Description of how the list of websites is filtered down at each step](https://github.com/GSA/site-scanning-documentation/blob/main/pages/index_narrowing_steps.md)
  - [Sample dataset that represents different edge cases](https://github.com/GSA/site-scanning-documentation/blob/main/data/Representative_Sample_Dataset.csv).
  - [List of proposed but not yet built scans](https://github.com/GSA/site-scanning-documentation/blob/main/pages/candidate-scans.md).
  - [Archive of historical snapshots](https://github.com/GSA/site-scanning-snapshots/tree/main/snapshots).
  - [Description of the federal web presence](https://github.com/GSA/federal-website-index/blob/main/criteria/federal-web-presence.md)
  - [Program issue tracker](https://github.com/GSA/site-scanning/issues).
  - [Program website](https://digital.gov/site-scanning/).

- Project Repositories
  - [Primary](https://github.com/GSA/site-scanning)
  - [Documentation](https://github.com/GSA/site-scanning-documentation)
  - [Analysis](https://github.com/GSA/site-scanning-analysis)
  - [Federal Website Index](https://github.com/GSA/federal-website-index)
  - [Site Scanning Engine](https://github.com/GSA/site-scanning-engine)
  - [Snapshots](https://github.com/GSA/site-scanning-snapshots)
