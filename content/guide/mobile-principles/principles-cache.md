---
slug: cache
date: 2018-12-10 10:00:00 -0500
title: 'Conserve Resources, Recycle When Possible'
summary: 'Week five of our series, Eight Principles of Mobile-Friendliness, offers tips for increasing page loading speeds, and making the mobile web experience better for users overall.'
guide: mobile-principles

aliases:
  - /resources/mobile/principles/cache

---

Even as successive generations of mobile devices put more speed and power at our fingertips, mobile network speeds continue to lag behind. [As of October 2018](http://www.speedtest.net/global-index/united-states), the average mobile download speed in the U.S. was just over one quarter of fixed broadband speeds. These limitations show how mobile connectivity still presents unique challenges for web developers who aim to deliver the best user experience possible. This week’s principle offers tips for increasing page loading speeds, and making the mobile web experience better for users overall.

Two solutions that may improve the loading of your site include:

1. Leverage browser caching
2. Avoid landing page redirects

Both of these solutions may improve the performance and usability of your site and can be detected using Google's [Mobile Friendly Test](https://search.google.com/test/mobile-friendly) tool, [DigitalDashboard.gov](https://www.digitaldashboard.gov), or the [Information Technology & Innovation Foundation (ITIP) Benchmarking Report](https://itif.org/publications/2017/03/08/benchmarking-us-government-websites).

## Leverage Browser Caching

**Issue: Use browser caching to reduce traffic to and from the server fetching resources**

Fetching resources over the Internet can be slow, especially if it requires multiple round trips between the client and server. This “extra work” delays processing and blocks rendering of page content. All server responses should specify a caching policy to allow the client to determine if, and when, it can reuse a previously-fetched response. This will prevent extra trips downloading the same component multiple times. It may take longer to [render a page on first view](https://varvy.com/pagespeed/first-view.html), as it is fetching all of the resources—but on return visits, [the cache](https://varvy.com/performance/application-cache.html) will help the site render faster.

**Solution: Develop and optimize your caching strategy and include server caching headers**

This is a two-pronged solution: first develop a caching strategy that meets your needs, and then implement the strategy using caching headers.

### Develop and Optimize Your Caching Strategy

Organizations must create an optimal caching strategy or policy. This involves examining each resource and answering questions, such as:

- Can the resource can be cached, and by whom?
- How long should the cache be retained?
- How can the files be revalidated when the caching policy expires?

Different page resources can have different expiration dates, with more frequently updated resources set to expire sooner.  For example, static content (such as global CSS styles and logos) may last a year, while JavaScript, .html, and .pdf files may change more frequently and only last a month—or even a day—depending on your site.

By extending the caching time as long as possible, round-trip fetching can be reduced, which will reduce server processing time and increase the browser rendering speed. A word of caution: setting the caching parameters too long may cause users to keep older file versions after updates and to not have the latest data.

### Include Server-Caching Headers

To enable browser caching you need to edit your HTTP headers to set expiring times for certain types of files. This may be done differently depending on your server, or if you are using a Content Management System (CMS), cache extensions, or newly-available server side plugins.

Most enable caching by adding “caching parameters” to the `.htaccess` file. These parameters tell the cache how long to keep the file.

An [example of the “caching parameters”](https://deluxeblogtips.com/htaccess-rules-website-performace/) of an `.htaccess` file is:

<pre>[...]
&lt;IfModule mod_expires.c&gt;
ExpiresActive On
ExpiresByType text/html "access plus 1 hour"
ExpiresByType image/gif "access plus 1 day"
ExpiresByType image/jpeg "access plus 1 day"
ExpiresByType image/png "access plus 1 years"
ExpiresByType text/css "access plus 2 months"
ExpiresByType text/javascript "access plus 1 years"
ExpiresByType application/x-javascript "access plus 1 years"
ExpiresByType application/javascript "access plus 1 years"
&lt;/IfModule&gt;
[...]</pre>

### References:

- Leverage Browser Caching https://developers.google.com/speed/docs/insights/LeverageBrowserCaching
- Leverage Browser Caching https://varvy.com/pagespeed/leverage-browser-caching.html
- PageSpeed: Leverage Browser Caching https://gtmetrix.com/leverage-browser-caching.html
- 3 Simple .htaccess Rules For Better Website Performance https://deluxeblogtips.com/htaccess-rules-website-performace/

## Avoid Landing Page Redirects

**Issue: Redirects trigger an additional HTTP request-response cycle and delay page rendering, wasting time.**

Redirects trigger an additional HTTP request-response cycle (round trip to the server) and delay page rendering. Each redirect adds an HTTP request-response, and may perform additional Domain Name System (DNS) lookups, Transmission Control Protocol (TCP) handshakes, and Transport Layer Security (TLS) negotiation. This increases the time it takes to render the site on the mobile device.

However, redirects may be inevitable:

- when a resource has moved,
- for tracking and logging of referring pages,
- to allow for "user-friendly" or "vanity" domains and URLs, and catch misspelled or mistyped URLs, or
- to connect between different parts of a site, country code top-level domains, different protocols, different security policies, etc.

**Solution: Minimize use of redirects to improve site performance**

You want to minimize the number of redirects issued by your application, especially for resources essential to rendering the page. Only use redirects when absolutely technically necessary, and find other solutions where it is not. If your site requires redirects, Google has provided some more [detailed guidelines for Automatic Redirection](https://developers.google.com/search/mobile-sites/mobile-seo/separate-urls#automatic-redirection).

### References:

- Avoid Landing Page Redirects https://developers.google.com/speed/docs/insights/AvoidRedirects
- PageSpeed Avoid Landing Page Redirects https://gtmetrix.com/avoid-landing-page-redirects.html
- How to Avoid Landing Page Redirects https://rigor.com/blog/2016/09/how-to-avoid-landing-page-redirects
- Automatic Redirection https://developers.google.com/search/mobile-sites/mobile-seo/separate-urls#automatic-redirection
