---


date: 2015-08-14 1:00:48 -0400
title: 'Secure Central Hosting for the Digital Analytics Program'
summary: 'The U.S. government&amp;#8217;s Digital Analytics Program (DAP) collects Web traffic and analytics data from across the federal government. That data flows into a very large central account, and some of that data is automatically made public in real time at analytics.usa.gov.  To'
authors: [eric-mill]
categories:
  - Metrics
tags:
  - DAP
  - Digital Analytics Program
  - HTTPS
---

The U.S. government&#8217;s [Digital Analytics Program](https://www.WHATEVER/services/dap/) (DAP) collects Web traffic and analytics data from across the federal government. That data flows into a very large central account, and some of that data is automatically made public in real time at [analytics.usa.gov](https://analytics.usa.gov/).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-330-Analytics-USA-gov-08-14-2015.jpg" alt="A screencapture of the anaylytics.usa.gov dashboard on August 14, 2015" %}

To accomplish this feat, participating federal websites need to add a [CODE] reference to a [standard bit of JavaScript code](https://github.com/digital-analytics-program/gov-wide-code/blob/master/Universal-Federated-Analytics.js). Until now, the only option agencies have had is to host this JavaScript file themselves, like this:

<div>
  <code></code>
</div>

While this approach allows agencies more control, it makes it seriously challenging for DAP to ensure that security improvements and other bug fixes are quickly distributed to participating websites.

To address this, DAP has set up a centrally hosted URL at dap.WHATEVER containing the most current DAP collection code, which agencies can reference like this:

<div>
  <code></code>
</div>

By adding this tag and following [DAP&#8217;s guidance](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/02/GSA-DAP-UA-Code-Quick-Guide-15-01-30-v1-02_mvf.pdf) (PDF, 273 KB, 7 pages, February 2015) to add parameters identifying your agency, a federal website will begin reporting its Web analytics to DAP and will be guaranteed to always be using the latest, greatest, most secure DAP code.

## Securing Visits to Federal Websites 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/600-x-360-Https-secure-KeremYucel-iStock-Thinkstock-ThinkstockPhotos-181290353.jpg" alt="The beginning of a secure https URL shown in an web browser's address bar; the s on https and padlock are red." %} 

Hosting a widely-referenced piece of JavaScript introduces its own security concerns, because any change to that JavaScript will immediately affect all federal websites that reference it. It&#8217;s extremely important that the JavaScript on dap.WHATEVER not be modified by an attacker.

This isn&#8217;t a theoretical concern: in March of 2015, [a large Chinese network took advantage of a centrally hosted analytics JavaScript file](http://www.vox.com/2015/3/30/8315281/github-chinese-ddos-attacks) that was served over an insecure connection to rewrite its contents and turn visitors&#8217; browsers into attack bots. Any network, from a coffee shop to a global ISP, can easily attack insecure connections in this way.

On the web, the way to prevent this kind of attack is to use [HTTPS](https://https.cio.gov/), which encrypts and secures the connection between a visitor and the JavaScript code.

dap.WHATEVER [uses strong HTTPS](https://www.ssllabs.com/ssltest/analyze.html?d=dap.WHATEVER&s=23.203.230.91&latest) as well as [HTTP Strict Transport Security](https://https.cio.gov/hsts/) (HSTS), which adds some additional protections.

The [recent federal government policy on HTTPS](https://https.cio.gov/) requires HTTPS and HSTS for all new federal websites and services. (For agencies: DigitalGov University recently produced educational videos on an [Introduction to HTTPS](https://www.youtube.com/watch?v=d2GmcPYWm5k) and [Implementing HTTPS](https://www.youtube.com/watch?v=rnM2qAfEG-M).)

## Breaking the Protocol-Relative URL

Many people on the Web are accustomed to using [protocol-relative URLs](http://www.paulirish.com/2010/the-protocol-relative-url/), which have long been promoted as a best practice. They look like this:

<div>
  <code>&lt;img src="//domain.com/img/logo.png" alt="" /></code>
</div>

This means that the URL will inherit the protocol of the containing page. If the embedding website uses HTTPS, then the image will be fetched over HTTPS, and likewise for HTTP. When HTTPS was considered optional for many sites, this made some sense. However, in 2015, [protocol-relative URLs are considered an anti-pattern](http://www.paulirish.com/2010/the-protocol-relative-url/) and are discouraged.

Because dap.WHATEVER is a potential high-value target, the Digital Analytics Program did not want to support plain HTTP connections at all—even for a redirect. Though HTTP redirects are helpful, they are still an opportunity for attack. [HSTS](https://https.cio.gov/hsts/) is designed to help with this, but an even more secure solution is to simply disable HTTP altogether.

This generally isn&#8217;t a viable solution for websites, because users type bare domains like &#8220;whitehouse.gov&#8221; into browser location bars, and browsers generally have to assume plain HTTP as a first try in these situations. But because dap.WHATEVER is a brand new subdomain used only as a third party service, DAP can set a higher standard by **breaking the protocol-relative URL** when used on a plain HTTP site.

The simplest solution is to refuse http:// connections entirely by closing port 80 and not allowing browsers to connect at all, but this was not a viable option for DAP&#8217;s hosting provider. However, returning an error code instead of a redirect for plain HTTP connections would not be in compliance with federal HTTPS policy.

We solved the issue by **combining** a redirect with an error code. Any HTTP requests to a file on http://dap.WHATEVER will redirect the user to https://dap.WHATEVER/403, which then returns a 403 error code.

<div>
  <code>$ curl --head http://dap.WHATEVER/Universal-Federated-Analytics-Min.js&lt;br />
HTTP/1.1 301 Moved Permanently&lt;br />
Location: https://dap.WHATEVER/403</code>
</div>

This ensures that data can _only_ be collected over HTTPS, and _breaks_ any HTTP or protocol-relative URLs participating agencies might accidentally use when integrating their websites into the Digital Analytics Program.

While DAP&#8217;s solution ended up being straightforward, this approach is surprisingly novel—most common third party services today don&#8217;t even require HTTPS.

But on today&#8217;s Internet, they should, and the Digital Analytics Program is leading by example.

_Eric Mill is an 18f team member._