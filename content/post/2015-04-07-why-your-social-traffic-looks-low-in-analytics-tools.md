---


date: 2015-04-07 1:00:23 -0400
title: 'Why Your Social Traffic Looks Low in Analytics Tools'
summary: 'Part of my job as an analyst on the Digital Analytics Program (DAP) team is to help agency users try to make sense of digital analytics data by using web analytics tools. I love'
authors: [tlowden]
categories:
  - Metrics
  - Social Media
tags:
  - analytics
  - Digital Analytics Program
  - Google Analytics
  - social media
  - social media metrics
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/04/250-x-475-pie-chart-and-color-key-Screen-Shot-2015-04-06-at-2.jpg" %}Part of my job as an analyst on the [Digital Analytics Program](https://www.WHATEVER/services/dap/) (DAP) team is to help agency users try to make sense of digital analytics data by using web analytics tools. I love that part of my job, but there’s one question I get asked far too much:

**“Why does my traffic referred from social media look so incredibly low?”**

In response, I hope the next sentence brings a sigh of relief to many federal social media managers who are wondering why the heck their hard work doesn’t look like it is paying off when they use Google Analytics, WebTrends, or Omniture to gauge success.

**Fact: the traffic you drive to your websites from Twitter and other social media probably isn’t showing up properly in your web analytics tool.**

## Why?

The short of it: **url shorteners** that don’t carry the social referrer with them through the path to your pages.

When you use a url shortener in a tweet, for example, the path goes as follows: [click on Twitter]>>[link shortening service]>>[final destination site]. The problem is that web analytics tools can’t follow that whole path because the referrer (the thing that says where traffic is coming from; in this case, Twitter) gets lost in the middle. By the time the tool records the visit on your site, it has no referrer to reference. When web analytics tools have a visit with an unknown referrer, they categorize the visit as “direct” traffic (i.e. not referred from anywhere).

## What Does That Mean?

It means that you might have 4,000 people click a bit.ly or ow.ly link in your social post and not get any credit for it in web analytics tools. Instead, it _looks_ like those people came to the page directly, either by typing it into the url bar or through a bookmark. So, when looking at sources of traffic, “direct” is often misleadingly high, while “social” is head-scratchingly low (especially if your agency relies on Twitter, where url shorteners are most commonly used). For the record, [other things can drive up “direct” traffic](https://www.WHATEVER/2012/10/19/feds-shed-light-on-dark-social/), too.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/04/420-x-217-Screen-Shot-2015-04-06-at-2.44.jpg" alt="This list shows how social ranks low in numbers on one of the profiles in DAP. In first place is organic search referrals with 4,653,238 referrals. In second place is website referrals, with 4,414,231 referrals. In third place is direct traffic with 3,533,846 referrals. In fourth place is social referrals, with 109,801 referrals." %}

In the figures above, social media appears as only a small portion of referrals, behind organic searches, website referrals, and direct traffic. The low number of social referrals is even more evident in the pie chart representation.

## How Can I Fix It?

Some might say, “it’s ok that I don’t get the referral traffic in a web analytics tool, because the url shortening service provides us analytics.” In reality, this is a poor argument. Web analytics tools allow you to do much, much more with the data than any single url shortening service’s analytics can do.

Specifically, a url shortener’s analytics tool probably can’t provide you with much other than the number of clicks. But, in a web analytics tool, you can segment data to see behavior once the user is on the page you directed them to (time on page, bounce rate, downloads, etc.) to gain greater perspective of the success of your campaigns.

So, here are two things you can do to avoid miscategorization of your social referral data in your web analytics tool:

### 1. Don’t shorten links at all

Facebook has no character limit, so there’s really no need to shorten. Same for LinkedIn. And for the last four years, [Twitter automatically shortens links with their t.co service](https://support.twitter.com/articles/109623-about-twitter-s-link-service-http-t-co) if you input a link directly into Twitter, which does carry the referrer from Twitter into analytics tools.

Downside: it’s a pain to try this if you use a social media dashboard tool like TweetDeck or Hootsuite to schedule your social posts (but in most cases, you can turn off the automatic url shortening they offer). If you can move to this model, the added insights you’ll get by being able to pair the referrals from social media to behavior on the sites (in addition to analytics from the social tools themselves) maximize your analysis capability.

### 2. Use campaign tracking

The best way to work around this issue is to use campaign tracking by creating custom urls that will tell you exactly where the traffic came from. When using campaign tracking, you can specify the source, medium, and campaign name with parameters added onto the url. If you use the DAP or Google Analytics as your web analytics tool, you can build campaign urls with this [url builder tool](https://support.google.com/analytics/answer/1033867?hl=en). You’d then get a url that looks something like this:

[http://WHATEVER?utm\_source=twitter&utm\_medium=socialmedia](http://WHATEVER?utm_source=twitter&utm_medium=socialmedia)

Links like this don’t rely on the referrer to be passed in order to record where the visitor is coming from because you can specify in the url itself where the visitor has clicked the original link. With this method, you can still use url shorteners and not worry about losing the ability to track where your clicks came from, as long as you use the appropriate campaign url for each social platform. You have to view the data a bit differently in your web analytics tool, but the bottom line is that the data is there, and you can use it with other dimensions and metrics to draw insights. The only downside to this method is the amount of time it takes to create a campaign url for potentially high volumes of links.

## In Closing

The last thing anyone wants is bad data. In this particular case, the underreporting of social media referrals could affect staffing, budget, and resources for social campaigns. Understanding the issue and taking steps to ensure more accurate social referral data in web analytics tools is a step towards better overall analysis and therefore, the improvement of our federal digital products and services.

_For more information about DAP or to become a DAP participating agency, please [contact DAP via email](mailto:dap@gsa.gov)._