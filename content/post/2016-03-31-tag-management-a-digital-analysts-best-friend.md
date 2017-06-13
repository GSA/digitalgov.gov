---


date: 2016-03-31 10:00:14 -0400
title: 'Tag Management\: A Digital Analyst&amp;#8217;s Best Friend'
summary: 'Tag managers can assist in collecting valuable data about visits to&nbsp;your website. Here at CFPB, we use&nbsp;Google Tag Manager (GTM), which is a free tool that works in tandem with Google Analytics to record and send data on how users interact with your website on an aggregate level, including which pages they view, where they'
authors: [cfpb-digital-analytics-team]
categories:
  - Code
  - Data
  - Monthly Theme
tags:
  - analytics
  - CFPB
  - Consumer Financial Protection Bureau
  - data
  - user experience
---

Tag managers can assist in collecting valuable data about visits to your website. Here at CFPB, we use Google Tag Manager (GTM), which is a free tool that works in tandem with Google Analytics to record and send data on how users interact with your website on an aggregate level, including which pages they view, where they click and what they download. It requires one line of code to be added to your site. Once GTM is up and running, you create tags, or tiny bits of code that record and send data, which go straight to Google Analytics (or an ever-growing list of other user interfaces). If you need any help getting started, we can give you guidance!


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/03/600-x-364-Google-Tag-Manager.jpg" alt="An illustration of the Google Tag Manager tool on a laptop." %}

GTM gives you the power to add a multitude of tags, built-in code (like Crazy Egg, Clicktale, etc) and custom code without having to involve a developer, or wait to have your changes published. You don&#8217;t have to worry about tags being hard-coded into a page. And, with the GTM Debugger, your changes can be tested before they go live.

## What to Track

Tags can be created for something simple, like recording pageviews, to something complex, like adding custom tracking on a tool within your site. Below are a couple of tags that my team uses that are the most helpful for us, and could be helpful for you. [Email us](mailto:_DL_CFPB%20Digitalanalytics%20<a href="mailto:_DL_CFPBDigitalanalytics@cfpb.gov">_DL_CFPBDigitalanalytics@cfpb.gov</a>?subject=GTM%20Blog%20-%20What%20to%20track) if you’d be interested in learning how to set these up!

  * 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/03/250-x-775-Google-Tag-Manager-GTM-internal-link-tag-and-time-on-page-report.jpg" alt="A composite of 2 screen captures from Google Tag Manager: an example of an internal link tag at the top, and a report showing the amount of time spent on 9 events at the bottom." %}**Link clicks, downloads, button clicks, and form submits**: These are some simple things to track site-wide that will give you a lot of insight right off the bat. That means you need one tag to track all internal link clicks, and another tag to track all downloads. To the right is an example of how our internal link tag looks in the GTM user interface.
  * **Time on page**: For anyone who has reached the ‘blog’ predicament, where a user will come to your page, get the information he or she is looking for, and leave without doing anything else, here is your answer. Before, this user would be considered as ‘bounced’ in Google Analytics and how long they stayed would remain a mystery. Now, you can set up a ‘time on page’ event, which will fire at different time intervals. For example, you can have a tag fire after a user has been on a page for 30 seconds, 2 minutes, 5 minutes, etc. Not only will this improve your bounce rate, but it will also make your time on page metric in Google Analytics more accurate!
  * **Scroll tracking**: You can use this as a way to figure out a good ‘sweet spot’ for where you should put your most important material on the page, or to figure out where users are dropping off. This tag can also record how long it takes users to get a certain length down the page, so you can learn how users are interacting with your site. This data will come through in Google Analytics events, as shown on the right.
  * **Custom Dimensions**: Using custom dimensions is a way to pull out data that’s more specific to your pages. For example, we have a [blog section](http://www.consumerfinance.gov/blog/) in our site, which is sectioned by category. We’re not able to get the category directly from the dimensions we’re given on Google Analytics, so we created one of our own.
  * **???**: Let us know if you have created a useful tag that should be shared, we’d love to hear it!

## The DataLayer!

Say you’ve found something that you would love to track, but can’t, because there’s no built-in variable that lets you do so. Using the DataLayer can help with this issue, and can expand your tracking capabilities. If you’re interested in utilizing this, [reach out to our team](mailto:_DL_CFPB%20Digitalanalytics%20<a href="mailto:_DL_CFPBDigitalanalytics@cfpb.gov">_DL_CFPBDigitalanalytics@cfpb.gov</a>?subject=GTM%20Blog%20-%20The%20DataLayer) and we can show you how!

**_About the Digital Analytics Team_**
  
 _The Digital Analytics Team over at the Consumer Financial Protection Bureau has been using Google Tag Manager for all their analytics needs for over a year. We are passionate about Web analysis and data, and want to share our knowledge with others who are looking for a simple and easy tool for your analytics needs. If you have any questions, or would like to know more, feel free to contact us via [email](mailto:_DL_CFPBDigitalanalytics@cfpb.gov)._