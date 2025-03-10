---
slug: introducing-the-federal-election-commissions-first-api
date: 2015-07-09 10:59:02 -0400
title: Introducing the Federal Election Commission’s First API
summary: ' The Federal Election Commission (FEC) empowers citizens with the information they need to make informed decisions about their democracy. Since opening its doors in the &lsquo;70s, the FEC has evolved to better serve the public with that information. As the'
authors:
  - lindsay-young
topics:
  - application-programming-interface
expirydate: 2025-01-01
---

{{< legacy-img src="2015/07/600-x-250-openfec-banner.jpg" alt="Federal Election Commission (FEC) OpenFEC banner for exploring campaign finance data" >}}

The Federal Election Commission (FEC) empowers citizens with the information they need to make informed decisions about their democracy.

Since opening its doors in the ‘70s, the FEC has evolved to better serve the public with that information. As the years progressed, records have gone from paper to microfilm and eventually to the web. Today marks the launch of the [FEC’s first API](https://api.open.fec.gov/developers).

With that API, searching for candidates and committees will be easier and more interactive. Information is organized around concepts like candidates, which are more welcoming than navigating buckets of information based on forms.

FEC staff scanning compliance forms, 1982 FEC staff scanning compliance forms, 1982. Image from the FEC.

{{< legacy-img src="2015/07/250-x-225-FEC-staff-scanning-compliance-forms-1982-IT004.jpg" alt="FEC staff scanning compliance forms, 1982" >}}All of these features are supported by our [public API](http://api.open.fec.gov/developers) so those outside of government can directly benefit from this technology, by making or using their own apps. For example, we created an endpoint that accepts partial names in queries, so you can make your own type-ahead search.

The API is the backbone of [OpenFEC](https://18f.gsa.gov/dashboard/project/openfec/)—the FEC&#8217;s next digital evolution. It’s also the first public release from our partnership. Be on the lookout for a new app and an eventual site redesign. As with all our projects, looking modern isn’t just an aesthetic choice, it comes from smart design and asking actual website users what they want. Take a look at our [interactive API documentation](https://api.open.fec.gov/developers). It not only has a fresh look, but it’s driven by modern technology underneath the hood.

Releasing the API before it’s complete allows 18F and FEC to get public feedback and ensure the project will continue to grow and adjust to better serve the people.

This first round of data focuses on essential information about candidates and the committees that spend money in elections.

## API endpoints

### Candidates

  * See important details about candidates
  * View candidate history over time
  * Find the committees that fundraise for a candidate

### Committees

  * See important information about groups that raise and spend money in elections
  * Look up how those groups change over time

### Financial

  * Look up total spending and fundraising
  * See major filing reports

### Search

  * Data is organized by ID, so search endpoints can help you find the data you want about the candidate or committee you are looking for.

## API improvements in the works

### Filings

  * Browse reports and other document data

### Schedules

  * Individual donations (Schedule A)
  * Granular spending data (Schedule B)
  * Subtotals for Schedule A by state and zip code

### And more!

OpenFEC is the most recent step toward a new website and the latest tool helping the FEC make campaign finance more accessible for journalists, academics, developers, and other transparency-seekers.

But don&#8217;t just read about the API, [sign up for an API key](https://api.data.gov/signup/) and [try it out yourself](http://api.open.fec.gov/developers).

_This post was originally published on the [18F blog](https://18f.gsa.gov/blog/) by Lindsay Young, an 18F team member._