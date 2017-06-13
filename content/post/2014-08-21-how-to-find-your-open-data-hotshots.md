---


date: 2014-08-21 11:00:30 -0400
title: 'How to Find Your Open Data Hotshots'
summary: 'How can you find the top 5 users of your open data? We were recently asked this question on the&nbsp;Open Data listserv, and while this information can be a good measure of success for open data programs, we also figured some of the answers shared would be of interest to the broader community. This blog'
authors: [nick-sinai]
categories:
  - API
  - Data
  - Metrics
tags:
  - API
  - Census
  - data.gov
  - EPA
  - metadata
  - mobile apps
  - National Oceanic and Atmospheric Administration
  - NOAA
  - open data
  - U.S. Environmental Protection Agency
  - United States Census Bureau
---

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/featured-301-x-212-December-17-2010-US-Air-Force-pilot-documents-an-F-15E-Strike-Eagle-aircraft-during-a-training-mission-over-North-Carolina-Stocktrek-Images-Stocktrek-Images-Thinkstock.jpg" alt="A U.S. Air Force pilot documents an F-15E Strike Eagle aircraft during a training mission over North Carolina on December 17, 2010." %}
 

How can you find the top 5 users of your open data?

We were recently asked this question on the Open Data listserv, and while this information can be a good measure of success for open data programs, we also figured some of the answers shared would be of interest to the broader community. This blog post seeks to summarize and clarify those answers.

## What Defines a Top Third-Party Developer?

Is it volume of data they use? Is it the potential impact on a major strategic initiative for the department? Is the objective to cater to new small businesses with compelling business models? Do we measure success by the size of the company using the data?

These sorts of questions are difficult to answer formulaically. There are a number of metrics you might consider. Depending upon your mission multiple may apply, but not all metrics are transparent to the data provider. Most likely, some digging will be required for a more comprehensive understanding of the landscape.

On that note, here&#8217;s a list of tips and tricks from folks routinely involved in this within government that you might consider:

## First, Define Your Objectives and Corresponding KPIs

The first step in finding and measuring to compare who your ‘top users are’ is to figure out what are you trying to achieve and—thereby—how you will measure and rank that achievement.

Here’s a list of potential objectives and some corresponding key performance indicators (KPIs):

<div style="float: left; width: 49%; height: 50px; background-color: #fff; margin-bottom: 10px;">
  <strong>Data Objective</strong>
</div>

<div style="float: left; margin-left: 2%; width: 49%; height: 50px; background-color: #fff; margin-bottom: 10px;">
   <strong>Metrics</strong>
</div>

<div style="float: left; width: 49%; height: 100px; background-color: #fff; margin-bottom: 10px;">
  Maximize Reach / Exposure
</div>

<div style="float: left; margin-left: 2%; width: 49%; height: 100px; background-color: #fff; margin-bottom: 10px;">
  Users / Unique Visitors Viewing the Data
</div>

<div style="float: left; width: 49%; height: 100px; background-color: #fff; margin-bottom: 10px;">
  Maximize Economic Impact
</div>

<div style="float: left; margin-left: 2%; width: 49%; height: 100px; background-color: #fff; margin-bottom: 10px;">
  Revenues of Companies Leveraging Data
</div>

<div style="float: left; width: 49%; height: 100px; background-color: #fff; margin-bottom: 10px;">
  Maximize Social Impact
</div>

<div style="float: left; margin-left: 2%; width: 49%; height: 100px; background-color: #fff; margin-bottom: 10px;">
  Positive Sentiment in News (Social, Mainstream / Testimonials)
</div>

<div style="float: left; width: 49%; height: 50px; background-color: #fff; margin-bottom: 10px;">
  Maximize Engagement
</div>

<div style="float: left; margin-left: 2%; width: 49%; height: 50px; background-color: #fff; margin-bottom: 10px;">
  Total Traffic / Views of Data / Visits / Volume of Downloads
</div>

## How to Find/Cultivate Your Hotshots

### Online

Going online is the fastest way to find out who’s out there and what they’re doing with your data. Here are some digital channels where you might begin/focus your first searches:

**Your API Management Software**

Pull down your API key holders (from all time) and send them all emails asking what they&#8217;re building&#8230; Better yet, have your API key management system gather this info when the user is applying for their key so you can just check out their work without having to ask them.

Often, your best third-party data users will pull your data down and create their own Database, so you can’t really use API traffic as a metric of success. However, if you&#8217;ve set up your API key management to collect the users&#8217; contact information, you can always reach out to them and ask how many users they are serving, either in unique visitors per month/year or downloads (if a mobile app). If you pitch them well, they might even become your friend (what you want).

**Metadata**

An additional approach to gain insight regarding usage is Data Citation, which means assigning persistent IDs to datasets and providing guidance on how to cite them (as one would cite a paper) when the data are used in a paper, a derived product, an application, or other context. The ID can be used to access the original dataset, and the ID doesn&#8217;t change even if you need to move the data to a different URL. This enables downstream users to see where the data come from, supports reproducibility of scientific results, and lets you gather statistics on how many people have followed the link from the ID to the dataset.

NOAA has started assigning IDs to archival datasets. They use the Digital Object Identifier (DOI) scheme, which is widely used for science articles, and increasingly for data, and has a globally-supported infrastructure for resolving the DOI to the actual URL. We require that the dataset (1) have appropriate documentation, in the form of an ISO 19115 metadata record, and (2) be archived (because the DOI is intended to be permanent, and we guarantee that we will preserve the data forever, or at least the metadata record and an explanation for deletion in those rare cases).

Example:

  * The World Ocean Atlas 2013 has been assigned DOI 10.7289/V5F769GT.
  * To get the real address, add [doi.org](http://www.doi.org/): <http://doi.org/10.7289/V5F769GT> .
  * This link redirects you to the current URL for the dataset&#8217;s human-readable landing page, which gives some background info, indicates how to cite the data, and provides links to both the data and the full XML metadata record.

The complete list of NOAA-assigned DOIs may be found in human-readable HTML at <http://search.datacite.org/ui?&q=10.7289> and as machine-readable XML at <http://search.datacite.org/api?&q=10.7289> .

NOAA is presently drafting a Procedural Directive for data producers and users to understand how to get a NOAA DOI and how to cite datasets.

**Your Digital Analytics Platform**

EPA has also been looking at their website traffic in Google Analytics for programs with data services. Same for the [Data.gov](http://data.gov/) hits list. They also have a couple of dashboards that extract information from selected server logs for data downloads and geoplatform usage. These are but a few of the variety of digital analytics platforms out there that you can use to see which of your datasets are being used the most. This is a good place to start when looking for popular keywords to conduct your searches with.

**Search!**

Get on your favorite search engine and start surfing…

**Check out the OpenData500**

This [site](http://www.opendata500.com/) is a project of NYU’s [GovLab](http://thegovlab.org/), and lists 500 companies that depend on open data. (To connect with the team, you can email [opendata500@thegovlab.org](mailto:%20opendata500@thegovlab.org).) We talked about OpenData500 in the Open Data Action Plan and WhiteHouse.gov blog posts, and really appreciate seeing the work they’ve done to study the community. This is a great resource.

**Apple / Google Play Stores**

Take a trip over to the [Apple](http://store.apple.com/us) and [Google](https://play.google.com/store/search?q=US%20census&c=apps) stores to find apps built on your agency&#8217;s data and record the number/range of downloads they&#8217;ve gotten. These are marvelous when you can find them, serving as an buzzworthy testament to the value of open data.

**GitHub**

Search [GitHub](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB8QFjAA&url=https%3A%2F%2Fgithub.com%2F&ei=2RrtU9HjF8LX8AGJ34DoBQ&usg=AFQjCNH3ZL3XV5BXG7wkswWu5GxjTFtoJg&bvm=bv.72938740,d.b2U). GitHub offers full text search over the &#8220;actual code&#8221; in roughly a bequillion open source projects, so you can search for domain names:

<https://github.com/search?q=%22congress.api.sunlightfoundation.com%22&type=Code&ref=searchresults>

<https://github.com/search?q=%22data.consumerfinance.gov%22&type=Code&ref=searchresults>

or the names of popular libraries (API clients) to find people leaning on your work indirectly. This is definitely a resource worth checking every so often.

**Google Alerts**

set up [Google Alerts](https://www.google.com/alerts) for news about [your agency] + &#8216;data&#8217; + &#8216;application&#8217;. You can see where people are talking about it, and follow the hits to the users. When you reach out to the folks behind the posts, they’re super excited to hear from a data producer and are usually very happy to talk to you.

**Twitter**

Search [Twitter](https://twitter.com/) for hashtags (#) of keywords including your agency and/or data. Seek out who on Twitter is interested in your data and follow them. Become a sounding board for your data. Share/retweet news about it. Often, this is THE channel through which you will find the most interesting and emergent use cases.

### Offline

When going offline, this mode of operation is more about the cultivation of interest, but you may find that these offline opportunities (especially really big open data events such as [Transparency Camp](http://transparencycamp.org/)) avail invaluable contacts who will both serve you developer recruits, as well as information that emerges via their social networks that are of interest to your mission.

**Meetups**

Go to local open data/open gov [Meetups](http://www.meetup.com/) and make connections with the Meetup leaders so they can have you as a resource for their contacts.

**Events**

See what’s out there. Do some [searching](http://www.eventbrite.com/directory?q=data&loc=Washington%2C+DC). Press some flesh…

  * Data Jams
  * Datapaloozas
  * Hackathons

 **Program offices!**

A great tip that was shared in a recent open data biweekly meeting (and I apologize that I can’t recall the person to credit!) was to reach out to the program offices that are producing key data, and asking them who calls/emails to ask them questions about the
  
data. These offices usually know these folks by heart, and can connect you.

## Reaching out/Engaging your Hotshots

### Create an Application Showcase

Create a showcase for developers to share their apps with the community at large. Better yet, give them a reason to (like showcasing/promoting the best somehow). If there&#8217;s one thing an app builder is a sucker for, it&#8217;s traffic. If you can help them attract more users, they might be less tight lipped about what they&#8217;re up to.

## Conclusion

This sort of work is not precision science. It’s a matter of &#8220;showing up&#8221; and &#8220;getting out there&#8221; in one way or another (even better, both). Talk to people, make connections, find out what they know and how you can help. The best way to learn about your data users is to help them. By becoming a helping hand, you become a broker of information. This is the best way to guarantee finding out who’s doing what with your data.

_Editor&#8217;s Note: This post was compiled with input from individuals at Census, EPA, and NOAA._