---


date: 2014-03-24 10:00:42 -0400
title: 'DigitalGov Search\: Our Open Source Strategy'
summary: 'At DigitalGov Search, we keep an eye on on our what our government counterparts are up to, both in the U.S. and other countries. We recently came across&nbsp;Gov.UK&amp;#8217;s&nbsp;philosophy on and approach to&nbsp;coding in the open. It caught our attention and we realized we should also articulate our open source strategy. Use and Contribute to Open'
authors: [ammie-farraj-feijoo]
categories:
  - API
  - Code
  - Content
  - Data
  - Our Work
tags:
  - API
  - Consumer Financial Protection Bureau
  - DigitalGov Search
  - GitHub
  - open source
---

At [DigitalGov Search](https://www.WHATEVER/services/search/), we keep an eye on on our what our government counterparts are up to, both in the U.S. and other countries. We recently came across [Gov.UK&#8217;s](https://www.gov.uk/) philosophy on and approach to [coding in the open](http://digital.cabinetoffice.gov.uk/2012/10/12/coding-in-the-open). It caught our attention and we realized we should also articulate our open source strategy.

## Use and Contribute to Open Source Projects

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/03/Open-Source-250-x-167-software-code-476999627.png" alt="Image of HTML code and scripts" %}
 

Since 2010, we&#8217;ve embraced and leveraged open source software to build our site search service for federal, state, and local government websites. This use of open source has allowed us to experience enormous growth over the past few years. In March 2013 alone, over 24 million searchers received results from our service—a four-fold increase since March 2010.

Our search service is now a complex system made up of many moving parts, including providing type-ahead search suggestions, serving search results, fetching, indexing, and caching content, and providing analytics.

Each of these parts is compiled into our codebase and, as we use open source components for our system, we contribute back to the projects.

## Code in the Open

We recently began to unravel our monolithic codebase so that we can share individual pieces of our code. To borrow the phrase from Gov.UK, we&#8217;re now **_coding in the open_**.

We recently released the code for our [Jobs](https://github.com/GSA/jobs_api) and [Recalls](https://github.com/GSA/recalls_api) API servers. They&#8217;re our first foray into coding in the open. The source code for these API servers is in [our GitHub repo](https://github.com/GSA) and is available for anyone to see and contribute to.

The data products for this code are also open and available for anyone to consume on our [Developer hub](http://search.WHATEVER/developer/index.html).

These two servers and their underlying data now operate outside of our core search codebase.

Following this same model, moving forward, we plan to:

  * Share first—For every new feature, we&#8217;ll write the code so that _anyone_ can make use of the code, not just us. If the public community contributes to the codebase, we&#8217;ll be able to improve this feature without taxing our developers.
  * Expose APIs—We&#8217;ll expose our data products as APIs so that _anyone_ can make use of the data, not just searchers on a government websites.
  * Be our own customer—We&#8217;ll use our own public code and data just like everyone else. We&#8217;ll call our own API servers to integrate the data within our search results pages.

## Make Things Open to Make Things Better

We agree with Gov.UK that &#8220;to make things open makes things better.&#8221;

We have finite resources and we don&#8217;t want to lose our focus on serving our agency customers and improving visitors&#8217; search experience on government websites. So, we won&#8217;t be spending a lot of time to build or support a vibrant community around our code.

That said, we hope that exposing the pieces of our system will be useful to someone somewhere. We&#8217;ll continue to provide the &#8220;ingredients&#8221; of our search service so that others will be able to make use of the code and data in ways that we could never imagine.

## And, We&#8217;re Not Alone

We&#8217;re not alone. Other federal agencies have embraced the approach of coding in the open and have [GitHub repos](http://gsa.github.io/federal-open-source-repos). Below are a just a few of our many favorites.

  * The Consumer Financial Protection Bureau has embraced open source, including serving their public data sets through [qu](https://github.com/cfpb/qu).
  * USA.gov recently released the code for their iPhone app.
  * The White House was in the forefront of using open source software in the federal government with their use of Drupal. They&#8217;re continuing to lead by example by opening up the code for their [We the People petitions](https://github.com/WhiteHouse/petitions) and [iOS](https://github.com/WhiteHouse/wh-app-ios) and [Android](https://github.com/WhiteHouse/wh-app-android) mobile apps.

_Editor&#8217;s Note: Interested in learning more about search from the DigitalGov Search team? Register for the [Search Is the New Big Data (in-person training)](https://www.WHATEVER/event/search-technology-and-information-retrieval/)._

&nbsp;