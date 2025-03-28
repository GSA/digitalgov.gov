---
slug: gov-url-shorteners-and-how-to-use-them
date: 2013-12-20 9:55:30 -0400
title: Gov URL Shorteners and How to Use Them
summary: 'USA.gov offers two different types of URL shorteners &ndash; 1.USA.gov and Go.USA.gov. No matter which URL shortener you use, there are some usability, accessibility, and SEO issues you should keep in mind.'
authors:
  - michelle-chronister
topics:
  - content-strategy
  - software-engineering
expirydate: 2025-01-01
---

{{< note variant="alert" >}}
The 1.USA.gov URL shortener was fully decommissioned in 2019.

GSA will sunset the Go.USA.gov URL Shortener service on **September 18, 2022**; this page will then be archived. See [Sunsetting Go.USA.gov: Frequently Asked Questions](https://blog.usa.gov/sunsetting-go.usa.gov-frequently-asked-questions) for more information and their email address.
{{< /note >}}

{{< legacy-img-right src="2014/08/250-x-84-Go-USA-gov-URL-shortener-logo.jpg" alt="Go USA gov URL shortener logo" >}}

USA.gov offers two different types of URL shorteners – 1.USA.gov and Go.USA.gov. No matter which URL shortener you use, there are some usability, accessibility, and SEO issues you should keep in mind.

## 1.USA.gov

1.USA.gov is powered by <a href="http://bitly.com/">bitly.com</a> and open to everyone. If you go to <a href="http://bitly.com/">bitly.com</a> and shorten a .gov or .mil URL, you will get a 1.USA.gov short URL. This is a free service and you do not need to register for an account.

Anyone can see metrics for a short 1.USA.gov URL by adding a + to the end of it, such as <a href="http://1.usa.gov/1hC68Jc+">http://1.usa.gov/1hC68Jc+</a>.

## Go.USA.gov

Go.USA.gov will turn .gov, .mil, .si.edu, .fed.us, .state.xx.us, and a few other government domains into short Go.USA.gov URLs. It’s a free service that’s only open to verifiable federal, state, and local government employees and you must register for an account.

All registered users can see metrics for short Go.USA.gov URLs. You can find them by using the details link in your history or this short cut: https://go.usa.gov/shorturl/link/xxx. For example, the details for <a href="http://go.usa.gov/WhzY">http://go.usa.gov/WhzY</a> are available at <a href="https://go.usa.gov/shorturl/link/WhzY">https://go.usa.gov/shorturl/link/WhzY</a>.

Go.USA.gov is open source, built using Drupal, and is maintained by GSA.

[Learn more about the differences between Go.USA.gov and 1.USA.gov short URLs](https://blog.usa.gov/sunsetting-go.usa.gov-frequently-asked-questions "USA.gov Short URLs").

## Usability of Short URLs

Most short URLs do not provide clues about their destination. That’s why we created USA.gov short URLs. We wanted users to click with confidence and know they will reach official government information.

When creating Go.USA.gov, we assumed most users would be clicking short URLs, not typing them into a web browser. We’ve found that using short URLs in printed materials (posters, flyers, brochures, etc.) creates a poor user experience. <a href="http://go.usa.gov/node/14">Read more about this and suggestions for fixing it</a>.

## Accessibility of Short URLs

Short URLs can actually be beneficial for people using assistive technologies because it shortens the reading time and the cognitive load that longer URLs can create. Imagine listening to <a href="http://www.usa.gov/Citizen/Topics/Government-Unclaimed-Money.shtml">http://www.usa.gov/Citizen/Topics/Government-Unclaimed-Money.shtml</a> being read aloud versus <a href="http://go.usa.gov/WhzY">http://go.usa.gov/WhzY</a>.

With that in mind, you should avoid using the short URL as the link title, such as “<a title="USA.gov Short URLs" href="https://blog.usa.gov/sunsetting-go.usa.gov-frequently-asked-questions">Click here</a>” (It’s never a good idea to use “click here,” but that’s a story for another day.) It’s ok to use a short URL as the link when you use actual words as the link title, such as “Learn more about <a title="USA.gov Short URLs" href="https://blog.usa.gov/sunsetting-go.usa.gov-frequently-asked-questions">short URLs</a>.”

You can’t follow this rule when writing messages for social media because there isn’t the option to use a link title. Instead, give a good description first so users can decide if they want to click the link, such as “You can learn more about how to create short .gov URLs at <a title="USA.gov Short URLs" href="https://blog.usa.gov/sunsetting-go.usa.gov-frequently-asked-questions">http://go.usa.gov/Whtm</a>.” <a title="5 Myths About Social Media Accessibility" href="{{< ref "2013-06-26-5-myths-about-social-media-accessibility-2.md" >}}">Learn more about making social media accessible</a>.

## Search Engine Optimization (SEO) of Short URLs

URL shorteners that use 301 “permanent” redirects do not have negative effects on SEO. Both Go.USA.gov and bitly.com (the service that powers 1.USA.gov) use this type of redirect.

Commercial search engines treat short URLs with 301 redirects just like any other link. The short URL’s destination page will receive the social promotion bump and other SEO data (such as anchor text and position on the page) will be passed on too.

This video explains <a href="http://www.youtube.com/watch?v=QMkltd6dZzU">how Google treats short URLs</a>. For more on 301 redirects, read these tips from <a href="https://blogs.bing.com/webmaster/2011/10/06/managing-redirects-301s-302s-and-canonicals/">Bing</a> and from <a href="https://support.google.com/webmasters/answer/93633">Google</a>.