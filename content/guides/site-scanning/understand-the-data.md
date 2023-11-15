---
date: 2020-07-28 09:00:00 -0500
title: "Understand the data"
deck: ""
summary: "Learn about the various types of data collected from scanned websites."
guide: site-scanning
primary_image: guide-site-scanning
aliases:
  - /guide/site-scanning/understand-the-data/
  - /guide/site-scanning/understanding-the-data/
---

The Site Scanning engine runs against the [full list of federal government websites](https://github.com/GSA/federal-website-index) and analyzes various aspects of them.

The scans operate without authentication over the public internet. Using a headless browser (a browser without a graphical interface), they load each Target URL and inspect what would normally be returned to a user who is visiting that page with a web browser. The results of these inspections form the data that Site Scanning makes available.

The scans currently collect the following data about each target URL. A [complete data dictionary with much more detail](https://github.com/GSA/site-scanning-documentation/blob/main/data/Site_Scanning_Data_Dictionary.csv) can be found in the program's [documentation hub](https://github.com/GSA/site-scanning-documentation).

<table class="usa-table usa-table--stacked">
    <thead>
      <tr>
        <th>General</th>
        <th>USWDS</th>
        <th>DAP</th>
        <th>SEO</th>
        <th>Third Party Services</th>
      </tr>
    </thead>
    <tr>
      <td data-label="General">Server Response Code</td>
      <td data-label="USWDS">Presence of USWDS components</td>
      <td data-label="DAP">Presence of DAP snippet</td>
      <td data-label="SEO">Meta Description Tags</td>
      <td data-label="Third Party Services">Presence of Third Party Services</td>
    </tr>
    <tr>
      <td data-label="General">Redirects</td>
      <td data-label="USWDS">USWDS Version</td>
      <td data-label="DAP">Customizations of the Snippet</td>
      <td data-label="SEO">Presence of Robots.txt</td>
      <td data-label="Third Party Services">Number of Third Party Services</td>
    </tr>
    <tr>
      <td data-label="General">Domain</td>
      <td data-label="USWDS">Degree of Implementation</td>
      <td data-label="DAP"></td>
      <td data-label="SEO">Elements of the Robots.txt</td>
      <td data-label="Third Party Services"></td>
    </tr>
    <tr>
      <td data-label="General">Agency</td>
      <td data-label="USWDS"></td>
      <td data-label="DAP"></td>
      <td data-label="SEO">Presence of Sitemap.xml</td>
      <td data-label="Third Party Services"></td>
    </tr>
    <tr>
      <td data-label="General">Bureau</td>
      <td data-label="USWDS"></td>
      <td data-label="DAP"></td>
      <td data-label="SEO">Elements of Sitemap.xml</td>
      <td data-label="Third Party Services"></td>
    </tr>
    <tr>
      <td data-label="General">404 Configuration</td>
      <td data-label="USWDS"></td>
      <td data-label="DAP"></td>
      <td data-label="SEO">Canonical URL</td>
      <td data-label="Third Party Services"></td>
    </tr>
    <tr>
      <td data-label="General">IPv6 Compliance</td>
      <td data-label="USWDS"></td>
      <td data-label="DAP"></td>
      <td data-label="SEO"></td>
      <td data-label="Third Party Services"></td>
    </tr>
    <tr>
      <td data-label="General">Underlying Technology</td>
      <td data-label="USWDS"></td>
      <td data-label="DAP"></td>
      <td data-label="SEO"></td>
      <td data-label="Third Party Services"></td>
    </tr>
    <tr>
      <td data-label="General">Mobile Friendliness</td>
      <td data-label="USWDS"></td>
      <td data-label="DAP"></td>
      <td data-label="SEO"></td>
      <td data-label="Third Party Services"></td>
    </tr>
</table>

_Have ideas for what else we should be scanning for? Please [file an issue](https://github.com/gsa/site-scanning/issues) or add your idea [to the list of proposed future scans](https://github.com/GSA/site-scanning-documentation/blob/main/pages/candidate-scans.md)!_



## Where to start

The easiest way to begin using data from the Site Scanning program is to download the [primary snapshot](https://api.gsa.gov/technology/site-scanning/data/weekly-snapshot.csv) and open it in your spreadsheet program of choice.  Next, apply filters to the sheet so that you can easily filter to just the websites for your agency, bureau, or domain.  

At this point, you'll want to take a quick look at the [data dictionary](https://github.com/GSA/site-scanning-documentation/blob/main/data/Site_Scanning_Data_Dictionary.csv), which gives a brief explanation of what data is collected about each website.  With these two things in hand, the best way to interact with this data is probably to go ahead and start looking at it and thinking about how you could use different fields.  One trick that some users do is to hide or delete columns that you don't expect to use so as to make the spreadsheet faster and more responsive.

Many of the data fields are fairly straightforward but if you'd like to get into much deeper detail and pursue more sophisticated tasks, the [technical details page](https://digital.gov/guides/site-scanning/technical-details/) should have all of the information you want (and more!).  

* To notify us about a public federal website [that is missing from our index](https://github.com/GSA/site-scanning-documentation/blob/main/pages/agency-questions.md#a-public-federal-gov-website-is-missing-from-the-the-site-scanning-data--how-can-i-add-it), please email us at [site-scanning@gsa.gov](mailto:site-scanning@gsa.gov).  
* To notify us about a website that you think [should not be included in our results](https://github.com/GSA/site-scanning-documentation/blob/main/pages/agency-questions.md#you-include-a-website-which-should-be-filtered-out--how-can-i-have-it-removed-from-the-site-scanning-data), please emails us at [site-scanning@gsa.gov](mailto:site-scanning@gsa.gov).

## Using Site Scanning data for 21st Century Idea implementation

Among the agency requirements laid out in [OMB 23-22](https://www.whitehouse.gov/wp-content/uploads/2023/09/M-23-22-Delivering-a-Digital-First-Public-Experience.pdf) ("Delivering a Digital-First Public Experience") are several that Site Scanning data can help with.  Helpful data fields include: 

* Fields that begin with `DAP` - "Agencies should use web analytics..."
* Fields that begin with `DAP` - "Agencies are required to participate in GSA’s government-wide Digital Analytics Program (DAP)."
* Fields that begin with `USWDS` - "Agencies should use the United States Web Design System (USWDS)..."
* `Target URL - Top Level Domain` and `Final URL - Top Level Domain` - "Agencies generally must use a .gov or .mil domain name..."
* `Site Search - Detected` - "Agencies’ public-facing websites must contain a search function..."
* Fields that begin with `SEO`, `Robots.txt` and `Sitemap.xml` - "Agencies should employ best practices to improve crawling or indexing of web content..."
* Fields that begin with `Third Party` - "Agencies must not embed static, unchanging web assets..."
* Fields that begin with `Mobile` - "...agencies must ensure that public-facing websites and digital services are mobile-friendly..."
* Fields that begin with `Required Links` - "For each website, agencies must post a link to that website’s Privacy Policy..."
* Fields that begin with `Required Links` - "In the footer of each agency’s principal website or principal sub-agency websites, the agency must include links to:..."
* Fields that begin with `Third Party` - "Agencies are encouraged to collect common customer metrics, measures, and outcomes for websites and digital services.... Agencies should regularly measure customer perceptions of trust, confidence, and satisfaction..."
* `CMS - Cloud.gov Pages Detected`, `Login - Provider`, `Site Search - Search.gov Detected`, `DAP - Final URL`, `Third Party - Service Domains`, and `USWDS - Count` - "Agencies should utilize government-wide programs provided by GSA, the Department of Homeland Security (DHS), and other Federal shared-service providers..."
