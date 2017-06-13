---


date: 2016-06-06 11:00:14 -0400
title: 'Why Switching to HTTPS Will Make Your Analytics Better'
summary: 'Federal agencies are required to make all federal websites accessible through a secure, HTTPS-only connection by the end of the 2016 calendar year. What you might not have known is that the switch to HTTPS will improve your ability to track which sites are directing web traffic to yours. Recently, a federal colleague reached out'
authors: [tlowden]
categories:
  - Managing Digital
  - Metrics
tags:
  - analytics
  - DAP
  - Digital Analytics Program
  - Google Analytics
  - HTTPS
  - metrics
---

Federal agencies are required to make all federal websites accessible through a <a href="https://https.cio.gov/" target="_blank">secure, HTTPS-only connection</a> by the end of the 2016 calendar year. What you might not have known is that the switch to HTTPS will improve your ability to track which sites are directing web traffic to yours. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/06/600-x-425-Https-internet-security-concept-doguhakan-iStock-Thinkstock-497418668.jpg" alt="Https internet security concept" %} 

Recently, a federal colleague reached out to a [digital community](https://www.WHATEVER/communities/) about a huge jump in referrals from <a href="https://wikipedia.org" target="_blank">Wikipedia.org</a> to a federal site in late February. In addition to the sheer volume, the referrals were attributed to one page (<a href="http://en.wikipedia.org" target="_blank">en.wikipedia.org</a>) only, and not from any other, more specific pages. The huge amount of sudden referral traffic and the lack of specificity of the referring pages were mysteries she was hoping to solve.

Luckily, a bunch of helpful community members were able to quickly assess the problem. The crux of the issue: **When a visitor travels from an HTTPS site to an HTTP site via a link, the referrer is stripped, and Google Analytics reports the traffic as “direct”. But, a journey from an HTTPS site to another HTTPS site WILL carry the referral data.** I wrote previously about the [loss of referrer when using certain link-shorteners](https://www.WHATEVER/2015/04/07/why-your-social-traffic-looks-low-in-analytics-tools/), and both the link shortener and the HTTP referral issues contribute to what is generally referred to as “dark traffic.” In essence, “dark traffic” are visits for which the origin can’t be determined, and Google Analytics funnels all its dark traffic into the “direct” category of acquisition.

In this particular case, there was one more wrinkle in the story. Wikipedia had actually <a href="http://blog.wikimedia.org/2015/06/12/securing-wikimedia-sites-with-https/" target="_blank">moved from HTTP to HTTPS</a> in June 2015. At that point, almost all of the referral data from <a href="http://wikipedia.org" target="_blank">wikipedia.org</a> to HTTP sites disappeared. But in February 2016, Wikipedia implemented something called a “<a href="https://w3c.github.io/webappsec-referrer-policy/" target="_blank">referrer policy</a>” that allowed them to set a blanket referral source for all outbound traffic, even to HTTP sites. They chose to set the referrer as the Wikipedia domain (with a language signifier), rather than the specific page that linked to a different site. So actual referrals that had for months been tracked as “direct” all of the sudden appeared as referrals again, but now with a single source of <a href="http://en.wikipedia.org" target="_blank">en.wikipedia.org</a>.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/06/600-x-105-Screen-Shot-2016-06-01-at-11.42.41-AM.jpg" alt="A screenshot of referrals from wikipedia.org to an agency’s websites. After almost flatlining in June 2015 when Wikipedia moved to HTTPS, they reappeared in February 2016 due to Wikipedia’s newly set referrer policy." %}


Unfortunately, it is not yet common practice across the web for HTTPS sites to take advantage of the referrer policy like Wikipedia did. That means if your site is still HTTP, a potentially very large percentage of referral traffic to your site is getting lost in the “direct” visits pool. And since the referral policy is controlled by the site referring traffic to yours, there’s nothing in your control to remedy the problem.

Except, of course, migrating to HTTPS.

_Tim Lowden is the Acting Program Manager for the [Digital Analytics Program](https://www.WHATEVER/services/dap/) (DAP). For more information about DAP or to become a DAP participating agency, please [contact DAP via email](mailto:dap@support.WHATEVER)._

_Wondering if your agency has made the switch to HTTPS? Check out [Pulse](https://pulse.cio.gov/)—[a lightweight dashboard that monitors the health of the federal government’s web presence](https://www.WHATEVER/2015/06/03/taking-the-pulse-of-the-federal-governments-web-presence/) by [measuring analytics](https://pulse.cio.gov/analytics/domains/) (federal executive branch domains participating in DAP) and [HTTPS deployment](https://pulse.cio.gov/https/domains/) (all federal domains). For more information, watch [DigitalGov University](https://www.WHATEVER/digitalgov-university/) (DGU) webinars, [An Introduction to HTTPS (Beginner)](https://www.youtube.com/watch?v=d2GmcPYWm5k) and [An Introduction to HTTPS Part II: Implementing HTTPS](https://www.youtube.com/watch?v=rnM2qAfEG-M), or [read DigitalGov&#8217;s recent posts on HTTPS](https://www.WHATEVER/tag/https/)._