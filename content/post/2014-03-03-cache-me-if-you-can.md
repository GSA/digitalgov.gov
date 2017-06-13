---


date: 2014-03-03 8:47:36 -0400
title: 'DigitalGov Search\: Cache Me If You Can'
summary: 'Slowness Hurts Web Pages Have you ever been frustrated when visiting a Web page that doesn&amp;#8217;t load quickly? Have you ever left a slow Web page before it finished loading? You&amp;#8217;re not alone. Several recent studies have quantified customers&amp;#8217; frustration with slow Web pages. Customers now expect results in the blink'
authors: [ammie-farraj-feijoo]
categories:
  - Content
  - Data
  - Our Work
tags:
  - Customer Experience
  - DigitalGov Search
  - GitHub
---

## Slowness Hurts Web Pages{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/03/speed-dial.png" alt="speed dial" %}


Have you ever been frustrated when visiting a Web page that doesn&#8217;t load quickly? Have you ever left a slow Web page before it finished loading? You&#8217;re not alone.

Several recent studies have quantified customers&#8217; frustration with slow Web pages. Customers now [expect results in the blink of an eye](http://www.nytimes.com/2012/03/01/technology/impatient-web-users-flee-slow-loading-sites.html?_r=0). This expectation means that your [customers are won or lost in one second](http://www.aberdeen.com/Aberdeen-Library/5136/RA-performance-web-application.aspx). A one second delay in loading a Web page equals 11% fewer page views, 16% decrease in customer satisfaction, and 7% loss in conversions.

## Slowness Kills Search Results Pages

As little time as websites have to keep users on their pages, search engines have even less time to keep searchers on their results pages. Speed is the primary factor in determining customers&#8217; satisfaction with search results.

Google, Microsoft, and Yahoo garner [95% of the search market](http://www.comscore.com/Insights/Press_Releases/2013/11/comScore_Releases_October_2013_US_Search_Engine_Rankings). Google garners two-thirds of the search market. The company&#8217;s [Gospel of Speed](https://www.google.com/search?q=Google+Gospel+of+Speed) motto is one reason why Google garners the majority of the market.

This gospel has also set a high bar for all search engines. Searchers expect results pages to load very, very quickly.

## How We&#8217;ve Made Our Result Pages Load Faster

So, when we established the service&#8217;s open source architecture in 2010, the first thing we tackled was how to deliver our search results in under one second.

At around the same time, [Github](https://github.com/) was experiencing exponential growth and the company&#8217;s engineers were blogging about what they did to make Github fast. To get up to speed quickly (yes, bad pun intended), we read their posts.

  * [How We Made GitHub Fast](https://github.com/blog/530-how-we-made-github-fast), October 20, 2009
  * [How We Keep GitHub Fast](https://github.com/blog/1252-how-we-keep-github-fast), September 5, 2012

Leveraging some of Github&#8217;s best practices, we succeeded in delivering our results in under 700 milliseconds, on average. This was a significant accomplishment and improvement from the previous vendor-owned and -operated iterations of our service.

Over the past three years, we&#8217;ve dug in and improved our response time even more. We now deliver our results in under 380 milliseconds, on average.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/03/serp\_reponse\_times_600x195.png" alt="Graph of app response times" %}

We already had an architecture optimized for speed. So, how have we sped it up by 320 milliseconds?

## We Cache When We Can

When a searcher enters a query, we go out to our various indexes, pull the information relevant to the searcher&#8217;s request, and put that information together on the results page.

Most queries (such as jobs, obama, unclaimed money, forms) aren&#8217;t unique and are asked by thousands of searchers each day.

We cache these so-called short head queries and store them on our servers. Caching helps us speed up the above process because searchers don&#8217;t have to wait for us to pull the information from its original source.

## We Use an Asset Pipeline

We have many JavaScript and CSS files on our results pages. These &#8220;assets&#8221; can be large and slow down the loading of our page. So, we use an [asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html) to concatenate and compress our JavaScript and CSS assets thereby reducing the number of requests that a browser has to make to render our results page.

We also use fingerprinting—a technique that makes a file&#8217;s name dependent on its content—within our asset pipeline. When the content changes, the name changes. For content that is static or that changes infrequently, this naming helps us tell whether two versions of a file are identical. When a filename is unique, browsers keep their own copy of the content. When the content is updated, the fingerprint changes so browsers request a new copy of the content. This approach allows us to maximize our content delivery network.

## We Use a Content Delivery Network

Our static content (such as scripts and stylesheets) gets served through our [content delivery network](http://www.webopedia.com/TERM/C/CDN.html) provider, currently Akamai. Akamai serves our static content from its server that is geographically closest to the searcher. The closer, the faster.

Using a content delivery network also allow us to optimize our service&#8217;s speed by:

  * Directing non-cached traffic between our two data centers to create a multihomed environment. Multihoming allows us to make full use of all of our servers. By contrast, in 2010, our disaster recovery data center often sat idle.
  * Reducing our need to add bandwidth or servers to handle short-term traffic spurts, such as spurts related to natural disasters.
  * Protecting against denial of service attacks by spotting them before they reach our servers.

## What&#8217;s Next?

We&#8217;ve worked hard over the past three years to speed up the delivery of our results by optimizing each link in the chain.

We use several monitoring tools to measure our system&#8217;s performance. The quality of these tools is improving at a rapid pace, which in turn, shows us where and how we can improve our service.

We regularly ask ourselves, &#8220;Will this shave some time off and help us deliver our results in under 380 milliseconds?&#8221;

Not yet a [DigitalGov Search](https://www.WHATEVER/services/search/) customer? [Sign up](https://search.usa.gov/signup) and get started!