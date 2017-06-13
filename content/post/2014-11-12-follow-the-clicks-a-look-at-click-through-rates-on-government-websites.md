---


date: 2014-11-12 10:00:51 -0400
title: 'Follow the Clicks\: A Look at Click-through Rates on Government Websites'
summary: 'How important is it to show the most relevant result at the top of your search results page? Very. Searchers expect to find what they&amp;#8217;re looking for quickly and easily&mdash;and without scrolling&mdash;when they search on government websites. If a Web page isn&amp;#8217;t &ldquo;above the fold&rdquo; as one of the first listings on the first results'
authors: [ammie-farraj-feijoo]
categories:
  - Content
  - Our Work
tags:
  - analytics
  - DigitalGov Search
---

How important is it to show the most relevant result at the top of your search results page? Very.

Searchers expect to find what they&#8217;re looking for quickly and easily—and without scrolling—when they search on government websites. If a Web page isn&#8217;t “[above the fold](http://moz.com/blog/life-above-and-beyond-the-fold)” as one of the _first_ listings on the _first_ results page, the data shows that there is little chance of it ever being clicked. If it happens to fall on page 2 or beyond, it becomes a vanishingly small part of a very long tail.

That&#8217;s why we continually work to expose more and more query and click data to our agency customers and give them the tools they need to make [data-informed decisions](https://keen.io/blog/99413806176/data-informed-product-design).

We recently upgraded our backend analytics framework to use the [Elasticsearch ELK stack](http://www.elasticsearch.org/overview/), which has allowed us to give our agency customers real-time, unfiltered search and click data. It has also allowed us to analyze and make sense of massive amounts of data in real-time. Using [Kibana dashboards](http://www.elasticsearch.org/overview/kibana/), we analyzed click-through rates (CTR) on search results across the 1,500 government websites that use [DigitalGov Search](http://search.WHATEVER/). We looked at the click data for October 2014.

## Who’s on First?

Sixty percent of all searches resulted in a click on a organic Web result. Of these clicks, we found that 92% are on page 1 and 6% are on page 2. Clicks fall off precipitously after that with only 1% of clicks on pages 3 or 4 and 0.5% on page 5 and beyond.

### Table 1. Click-through Rates by Page

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-56-Table-1-Click-through-Rates-by-Page.jpg" alt="Table 1. Click-through Rates by Page. 1 page is 92 point 3 percent, 2 pages is 6 point 1 percent, 3 pages is zero point 7 or seven tenths of a percent, 4 pages is zero point 3 or three tenths of a percent, and 5 or more pages is zero point 5 or 5 tenths of a percent." %}


Drilling down into page 1, nearly half of searchers that click on a result click on the first-listed search result. Nearly three-fourths click on the first, second, or third result. Below is a chart showing click-through rates by exact position.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-345-Chart-Click-through-Rates-on-Page-1-by-Position.jpg" alt="A bar graph chart showing the Click-through Rates on Page 1 by Exact Position" %} Below is a table showing the same data, including the cumulative click-through rate by exact position.

### Table 2. Click-through Rates on Page 1 by Position

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-211-Table-2-Click-through-Rates-on-Page-1-by-Position.jpg" alt="Table 2. Click-through Rates on Page 1 by Position." %}


These rates are in line with [click-through rates for Google organic search results](http://marketingland.com/new-click-rate-study-google-organic-results-102149).

Give it a try. Search for something on your agency’s website. Don’t scroll. Look at the search results. Are the results that you’re seeing above the fold relevant? Try the same search from a mobile phone or tablet. Odds are you’re seeing even fewer results above the fold. Are they relevant?

## Dig Deeper into the Data

We’re using the data to inform the design of our results page.

Agencies who use DigitalGov Search to power the search box on their website can also dig into detailed, actionable CTR data for their specific site by logging into our [Admin Center](https://search.usa.gov/sites). Site-specific CTR rates and click data are provided by:

  * [Searchers’ top query terms](http://search.WHATEVER/manual/queries.html)—Use the data to find and analyze the [short head](http://www.searchtools.com/analysis/long-tail.html) of your most popular search queries, which are typically the same as your site&#8217;s top tasks. You may opt to create new content or update existing content to ensure it&#8217;s current, accurate, and complete.
  * [Top clicked URLs](http://search.WHATEVER/manual/clicks.html)—Use the data to find and analyze the short head of your most popular URLs. For URLs with an unexpectedly low number of clicks, you may opt to incorporate language from popular search terms into your titles and descriptions to improve the relevance of results.
  * [Month and module](http://search.WHATEVER/manual/monthly-reports.html)—Use the data to inform which modules you opt to display. The average CTR across all DigitalGov Search customers is provided so you can see how your rate compares to the average rate.
  * [Best bet drilldowns](http://search.WHATEVER/manual/best-bets-text.html)—Use the data to inform your titles, descriptions, and keywords and your decision to deactivate or delete an entry. Review and edit best bets as needed. Focus on those with a high number of impressions and low CTR to make the biggest impact on searchers&#8217; experience (and on your overall CTR).