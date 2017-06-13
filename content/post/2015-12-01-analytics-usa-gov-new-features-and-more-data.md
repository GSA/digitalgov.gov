---


date: 2015-12-01 1:00:53 -0400
title: 'Analytics.usa.gov\: New Features and More Data'
summary: ' As of writing this post, 25,225 of the 124,878 total visitors on federal government websites participating in the Digital Analytics Program (DAP) are NOT located in the United States. And as a result of a'
authors: [gray-brooks, tlowden, eric-mill, julia-winn, gabriel-ramirez]
categories:
  - Data
  - Metrics
  - "What's New"
tags:
  - 18F
  - analytics
  - data
  - Digital Analytics Program
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/12/600-x-290-AnalyticsGov-Screen-Shot-2015-11-25-at-12.25.jpg" alt="A screencapture from the analytics.usa.gov dahsboard showing 124,878 people were visiting U.S. government websites at that moment." %}

As of writing this post, 25,225 of the 124,878 total visitors on federal government websites participating in the <a href="https://www.WHATEVER/services/dap/" target="_blank">Digital Analytics Program</a> (DAP) are NOT located in the United States. And as a result of a new location feature on the expanded <a href="https://analytics.usa.gov/" target="_blank">analytics.usa.gov</a>, you are free to check for yourself how many current users are from outside the country, anytime you’d like.

<a href="http://mashable.com/2015/03/19/white-house-open-source-analytics/#lw5sIJFfwqq9" target="_blank">Back in March of this year</a>, DAP released <a href="https://analytics.usa.gov/" target="_blank">analytics.usa.gov</a> in collaboration with <a href="https://18f.gsa.gov/" target="_blank">18F</a>, which provides the technical support to take DAP data and turn it into a <a href="https://18f.gsa.gov/2015/03/19/how-we-built-analytics-usa-gov/" target="_blank">beautiful, open-source, public dashboard</a>. We have been overwhelmed with positive response via <a href="https://twitter.com/18F/status/578563466018963456" target="_blank">social media</a>, <a href="https://www.washingtonpost.com/news/the-switch/wp/2015/03/19/the-most-popular-government-web-sites-ranked/" target="_blank">press coverage</a>, and thoughtful comments on <a href="https://github.com/18F/analytics.usa.gov" target="_blank">Github</a>. To our delight, a few other folks used portions of our code to stand up their own web analytics dashboards, including the city governments of <a href="http://analytics.phila.gov/" target="_blank">Philadelphia, Pennsylvania</a>, and <a href="https://bouldercolorado.gov/stats" target="_blank">Boulder, Colorado</a>. We even got <a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/12/POTUSdap.jpeg" target="_blank">President Obama to check it out</a>.

We’ve recently added a few new features to <a href="https://analytics.usa.gov/" target="_blank">analytics.usa.gov</a>: location data, download data, and expanded downloadable files.

## Location Data

We’ve created two new location charts on the dashboard: one showing the cities providing the most visitors and one showing U.S. vs. international traffic, including a breakdown of the countries with the most visitors outside the U.S. Both of the visualizations reflect data in real-time (updating every minute), so you can wake-up to see which countries are visiting U.S. government websites while you are asleep! Additionally, while most of the time you’ll see U.S. cities on that particular chart, it is not limited to the United States. If there is a world event and for some reason a large proportion of people in Mumbai, India (for example), are visiting U.S. government websites, the chart will reflect that.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/12/600-x-548-Visitor-Locations-Right-Now-by-city-Screen-Shot-2015-11-25-at-12.23.jpg" %}

One thing to keep in mind about location information is that since we anonymize IP addresses of visitors at the earliest possible point, the location data is not accurate enough to pinpoint exact locations of visitors. With IP addresses anonymized, we rely on the network domain and service provider to determine a relative location. As a result, people visiting from a suburb may appear as visiting from the closest city.

## Download Data

You can now see not just the popular pages and sites along the right-hand column, but also the most frequently accessed “downloads”.

Two important things to understand about downloads:

  1. Here, “downloads” just means “things other than web pages”, like PDFs and spreadsheets. It doesn’t necessarily mean a visitor chose to save the file, since many browsers open PDFs and other files directly in a separate tab.
  2. Downloads are logged when visitors click links to them from a page that participates in the Digital Analytics Program. It does not include visits from direct links to files, such as links that were emailed, posted on social media, or posted on websites that do not participate in DAP.

PDF files seem to dominate the list, but other extensions in the category include .doc, .xls, and .mp3, among others. The data reflect the number of times the file was accessed in the past seven days.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/12/587-x-161-USCIS-Top-Downloads.jpg" %}

You can click on the page title, “<a href="http://www.uscis.gov/n-400" target="_blank">Application for Naturalization | USCIS</a>,” to go to the page where the file is located, or you can click on the file name, “<a href="http://www.uscis.gov/sites/default/files/files/form/n-400.pdf" target="_blank">n-400.pdf</a>”, to download (or open) the file right from <a href="https://analytics.usa.gov/" target="_blank">analytics.usa.gov</a>!

## Expanded Downloadable Files


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/12/250-x-510-Download-the-Data-Screen-Shot-2015-11-25-at-12.29.jpg" alt="Download the Data provides links to various data files that are updated daily, and every minute." %}There’s a limit to how much data we can display on the page for you, so we have greatly expanded the downloadable data reports. We offer downloads of various types of data (some in CSV format and some in JSON) so that you can work with the data yourself!

Previously, the downloadable files generally only contained the same data that was displayed on <a href="https://analytics.usa.gov/" target="_blank">analytics.usa.gov</a>. Now, some of the files include hundreds or even thousands of rows, where applicable. We have set lower limits on the larger datasets to remove the “long tail” effect. We list pages that have least 10 visitors on the page in real-time, and domains which have received at least 1,000 visits in 30 days.

Over the coming months, we will continue to expand and improve on <a href="https://analytics.usa.gov/" target="_blank">analytics.usa.gov</a>. We hope you like what we’ve done so far, but there is more to come. We’re continuously evaluating new ideas, and welcome your feedback <a href="https://github.com/18F/analytics.usa.gov/issues" target="_blank">on GitHub</a> or <a href="mailto:dap@support.WHATEVER" target="_blank">via email</a>. Tell us what you think, and what you’d like to see in the future.

_The <a href="https://www.WHATEVER/services/dap/" target="_blank">Digital Analytics Program</a> currently tracks analytics data on over 4,000 U.S. federal government websites across 45 agencies. To learn more or to find out how your agency/website can participate in the program, please <a href="mailto:dap@support.WHATEVER" target="_blank">email us</a>. For more on 18F, visit <a href="https://18f.gsa.gov/" target="_blank">18f.gsa.gov</a>._