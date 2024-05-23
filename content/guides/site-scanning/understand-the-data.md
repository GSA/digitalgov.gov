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
</table>

_Have ideas for what else we should be scanning for? Please [file an issue](https://github.com/gsa/site-scanning/issues) or add your idea [to the list of proposed future scans](https://github.com/GSA/site-scanning-documentation/blob/main/pages/candidate-scans.md)!_
