---


date: 2015-05-07 4:12:30 -0400
title: 'Increasing Engagement and Website Visits with Twitter Cards'
summary: 'May is #WorldTradeMonth and each year the U.S. Trade and Development Agency celebrates the month by highlighting the partnerships it has with 39 state and local organizations that promote U.S. exports in their home states through an initiative called #MakingGlobalLocal. What that means is that those 39 organizations with social media accounts, especially Twitter, will'
authors: [steve-lewis]
categories:
  - Social Media
tags:
  - social media
  - Twitter
---

May is [#WorldTradeMonth](https://twitter.com/search?f=realtime&q=%23WorldTradeMonth&src=typd "Twitter search results for the "World Trade Month" hashtag") and each year the U.S. Trade and Development Agency celebrates the month by highlighting the partnerships it has with 39 state and local organizations that promote U.S. exports in their home states through an initiative called [#MakingGlobalLocal](https://twitter.com/search?f=realtime&q=%23MakingGlobalLocal&src=typd "Twitter search Results for the "Making Global Local" hashtag").

What that means is that those 39 organizations with social media accounts, especially Twitter, will get mentioned in posts each day and may potentially share what USTDA tweets to their followers.  That equals quite a bit of visibility and engagement for not only the Agency I work for, but also the organizations we’re promoting.

A situation like this provides an excellent opportunity to add an innovative feature to our web pages that will get picked up in daily tweets surrounding World Trade Month and Making Global Local.

**Meet the Twitter Card**

In order to maximize on the opportunity to increase website traffic and make our pages more visible/shareable on social media, we decided to add a [Twitter Card](https://dev.twitter.com/cards/overview) social media meta tag to key web pages on USTDA.gov that we plan to tweet about this month.

After including the proper embed code (which is provided by Twitter), we’re now able to provide links to websites with that code in our daily tweets. What you get as a result is a “summary” of the web page, which includes an image, a page headline and description, and a clickable link back to the website.  But perhaps the biggest benefit to this is that the summary does not take up extra character space, which normally occurs when you attach images, graphics, etc. Even better, the summaries are totally clickable and can drive people to your websites when standard images or graphics you would normally attach to tweets do not.

Here are a couple tweets with USTDA.gov website links that have the Twitter Card embed code on them:

<p align="center">
  
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/05/290-x-341-USTDA-twitter-card-1.jpg" alt="290-x-341-USTDA-twitter-card-1" %} 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/05/290-x-341-USTDA-twitter-card-2.jpg" alt="290-x-341-USTDA-twitter-card-2" %}
</p>

As you can see, the content of these two tweets takes up almost 140 characters on their own (a URL does take up at least 20 characters). With the added Twitter Card summaries, USTDA’s tweets now show up as completely customizable previews of the pages that are linked in both messages.

**What the code looks like on the** [**web pages**](http://www.ustda.gov/news/pressreleases/2015/US/Press-Release_050515/Press-Release-USTDA-Celebrates-Making-Global-Local-and-US-Exports-During-World-Trade-Month_050515.asp) **where** [**I embedded it**](http://www.ustda.gov/makinggloballocal/) **(feel free to “View Source Code” yourselves):**

`<!-- Update your html tag to include the itemscope and itemtype attributes. --><br />
<html itemscope itemtype="http://schema.org/Article">`

`<!-- Place this data between the <head> tags of your website --><br />
<title>Page Title. Maximum length 60-70 characters</title><br />
<meta name="description" content="Page description. No longer than 155 characters." />`

`<!-- Twitter Card data --><br />
<meta name="twitter:card" content="summary_large_image"><br />
<meta name="twitter:site" content="@USTDA"><br />
<meta name="twitter:title" content="USTDA Celebrates Making Global Local and U.S. Exports During World Trade Month"><br />
<meta name="twitter:description" content="ARLINGTON, Va. – World Trade Month is an excellent opportunity to celebrate the success of Made-in-America exports."><br />
<meta name="twitter:creator" content="@USTDA">`

`<!-- Twitter summary card with large image must be at least 280x150px --><br />
<meta name="twitter:image:src" content="http://www.ustda.gov/news/pressreleases/2015/US/Press-Release_050515/Image-Press-Release-USTDA-Celebrates-Making-Global-Local-and-US-Exports-During-World-Trade-Month_050515_650x320.jpg">`

What you are seeing is an example of how we were able to include a larger-sized image that was created in InDesign to match the dimensions that Twitter recommends for Twitter Cards. Now Twitter does offer different card types, like a thumbnail image card that doesn’t take up as much real estate.

Like this one:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/05/600-x-375-USTDA-twitter-card-3.jpg" alt="600-x-375-USTDA-twitter-card-3" %}

So, with Twitter Cards, you do have a few customizable options to fit your needs just as long as you very carefully stick to the image resolution guidelines. With a little skill in Photoshop or InDesign (or by creating summary images with drag and drop services like Canva.com), you can easily replicate this process on your websites. Better yet, there are even modules out there for [WordPress](https://wordpress.org/plugins/wp-social-media-meta-tag/) or [Drupal,](https://www.drupal.org/project/metatag) that automates the social media meta tag process for you completely. Pretty awesome!

**In summary**

Not only does Twitter offer the ability to add character-free summaries to your Tweets, but this feature is also available for Facebook and Google+ as well. You can read more about that and how to customize the embed code, [here](https://moz.com/blog/meta-data-templates-123) and [here](https://dev.twitter.com/cards/overview). Since I’ve placed Twitter Card embed codes on a few USTDA.gov webpages, we’ve seen a pretty good spike in website traffic. **In addition,** [**every time our followers**](https://twitter.com/NorCal_WTC/status/593933628163301376) **retweet tweets with links that have Twitter Card summaries, those same summaries show up on their feed too.**

**So next time you have a communications plan you’re about to launch, try out a Twitter Card.**