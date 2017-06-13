---


date: 2015-10-23 11:00:12 -0400
title: 'Is Your Site Mobile-Friendly?'
summary: 'What is mobile-friendly? Mobile-friendly simply means your visitors can use phones and tablets to visit your website and have a user-friendly experience. Many of us get toward the end of mobile site development and really do not know if what we created is &amp;#8220;mobile-friendly.&rdquo; We think we have followed all of the mobile best practices'
authors: [david-fern]
categories:
  - Mobile
  - Monthly Theme
tags:
  - Federal CrowdSource Mobile Testing Program
  - mobile
  - mobile testing
  - Mobile UX Guideline 4
  - mobile-friendly
  - usability
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-434-no-shadow-Smartphones-and-wrong-and-right-icons-frikota-iStock-Thinkstock-500886657-500886437.jpg" %} 

What is mobile-friendly?

[Mobile-friendly](https://www.WHATEVER/2015/04/30/mobile-friendly-park-websites-on-nps-gov/) simply means your visitors can use phones and tablets to visit your website and [have a user-friendly experience](https://www.WHATEVER/2015/10/20/focus-on-mobile-performance/).

Many of us get toward the end of mobile site development and really do not know if what we created is &#8220;mobile-friendly.” We think we have followed all of the mobile best practices and performed usability testing. However, do we have something concrete to quantitatively certify that we are mobile-friendly?

Most would say no.

## Why Does It Matter If Your Site Is Mobile-Friendly?

  1. You want your [mobile moments](https://www.WHATEVER/2015/10/07/is-your-agency-winning-its-mobile-moments/) to be happy experiences! You are building software and tools for your customers and they will not be used if they are hard to use, slow or do not work on the user’s small device.
  2. On April 21, 2015, Google released a new [mobile-friendly ranking algorithm designed to give a boost to mobile-friendly pages](https://www.WHATEVER/2015/04/15/mobilegeddon-government-edition/) in Google’s mobile search results. If you want to be found in Google, you need a mobile-friendly site.

## What Tools Can Help Improve Our Site?

For every task, someone has created a tool. This is no exception; there are many tools available to check to see if your site is mobile-friendly. Many of these “checkers” are online, free, quick and make a great addition to your testing process.

These sites are not simply emulators but programs that scan your site, check a variety of criteria and provide a report. Additionally, most provide reporting on performance on the mobile device that is often overlooked in responsive design development.

This means you may want to scan with multiple tools as each was developed looking for different criteria. For example, tools like the W3C Mobile OK Checker focuses on code compliance, Google Developers Page Speed Insights focuses on speed and the Google Mobile-Friendly test focuses on design.

Most have nicely-formatted results reports and suggestions, but it is up to you to interpret the reports, and you may find many false positives or issues that you are willing to live with. The performance results are especially interesting as it makes tuning easier, allowing developers to optimize mobile rendering to meet their specific performance objectives. Those performance objectives operate on a continuum: From highly optimized to the point of excluding images and interactive elements, down to websites that are not functional for mobile and considered desktop-only.

These tools may be challenging for some sites. For example, some tools only work on non-SSL (http not https) sites, and most tools require your site be accessed online. DigitalGov has an article with more [tips on optimizing website performance](https://www.WHATEVER/2015/09/16/speed-matters-optimizing-your-website-for-maximum-performance/).

## What Do the Results Reports Look Like?

Most of the tools have nice, easy-to-read reports (that in many cases are printable) with solutions and risk ratings for each issue to help you prioritize your work.

## Online Tools That Evaluate Your Website

The following is a list of free, online tools you may want to use to help you evaluate if a site is mobile-friendly. Let’s see what USA.gov looks like in a few of the tools.

### Google Mobile-Friendly Site

Google&#8217;s [Mobile-Friendly Test](https://www.google.com/webmasters/tools/mobile-friendly/) will analyze a URL and report if the page has a mobile-friendly design.

The site appears to be mobile-friendly.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-528-Google-Mobile-Friendly-Test-Tool.jpg" alt="Google Mobile Friendly Test Tool" %}

### 

### Google Developers Page Speed Insights

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) analyzes the content of a Web page, then generates suggestions to make that page faster

There are some suggestions on how to improve the site’s performance. By clicking on the links, the user is provided with specific suggestions.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-507-Google-Developers-Page-Speeds-Insights.jpg" alt="Google Developers Page Speeds Insights" %}

### W3C Mobile OK Checker

[Mobile OK Checker](https://validator.w3.org/mobile/) performs various tests on a Web page to determine its level of mobile-friendliness. The tests are defined in the mobileOK Basic Tests 1.0 specification. A Web page is mobileOK when it passes all the tests.

There are some suggestions and three are critical. One example is:

“Loading the page requires a mobile browser to make more than 20 separate HTTP requests, which on some mobile networks can induce a delay of 20 seconds or more before the page is shown to the user.”

The suggestion to fix the issue is:

“Try to reduce the number of included resources (images and style sheets). For instance, style sheets can be merged together instead of being split across several files.”


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-508-W3C-Checker.jpg" alt="W 3 C Mobile OK Checker" %}

### Mobile Moxie

[This free tool](http://www.mobilemoxie.com/tools/site_analysis/) gives the user an overall score and feedback on functionality, design, accessibility, technical optimization, load time and HTML contents of a site.

This report is like a report card and indicated a caching issue that the other tools also pointed to.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-512-Mobile-Moxie.jpg" alt="Mobile Moxie" %}

### Mobi Ready (Only Non-SSL Sites)

[This free tool](http://ready.mobi/) is for developers, designers and marketers to test website performance on mobile devices.

Since this does not support https sites, we are using REI.com.

Notice that this one shows four different resolutions and a report that “the total number of DOM elements should be less than 700 to avoid complexity that will affect rendering and user experience.”

With a solution of:

“You should consider reducing the page complexity and content to reduce the DOM element count.”


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-444-Mobi-Ready.jpg" alt="Mobi Ready" %}

### WebPageTest

[WebPageTest](http://www.webpagetest.org/) is a free online site that allows the user to see exactly how much time every component uses to load. Through tuning, applications can be made to perform at acceptable levels. One of the most beneficial features I found was that prior to test execution you are able to select a test location, browser and mobile device. This functionality allows us to better replicate our users&#8217; environments and more closely see what they are experiencing or will experience.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-755-WebPage-Test.jpg" alt="Screen capture of WebPageTest" %}

## Conclusions

While tools can help evaluate how mobile-friendly your site is, once the site is developed it may be difficult to go back and change things. These tools and checks should be used as an opportunity to optimize your site. Where else can you get free suggestions on how to improve your site? Keep in mind that you may not need to fix every issue reported, depending on your application.

> &#8220;A fool with a tool is still a fool&#8221; ~ Grady Booch

## Additional Resources

  * [Why Make a Website Mobile-Friendly?](https://developers.google.com/webmasters/mobile-sites/get-started/why)
  * [Google: Mobile-Friendly Update—What is Mobilegeddon & The Google Mobile-Friendly Update](http://searchengineland.com/library/google/google-mobile-friendly-update)
  * [10 Tools for Testing Mobile Websites](http://webmarketingtoday.com/articles/10-Tools-for-Testing-Mobile-Websites/)
  * [U.S. Web Design Sandards](https://playbook.cio.gov/designstandards/visual-style/#pairings)