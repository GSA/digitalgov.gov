---


date: 2015-06-03 1:10:57 -0400
title: 'Taking the Pulse of the Federal Government&amp;#8217;s Web Presence'
summary: 'The U.S. federal government is launching a new project to monitor how it&amp;#8217;s doing at best practices on the Web. A sort of health monitor for the U.S. government&amp;#8217;s websites, it&amp;#8217;s called Pulse&nbsp;and you can find it at&nbsp;pulse.cio.gov.  Pulse is a lightweight dashboard that uses the official .gov domain list to'
authors: [gray-brooks, eric-mill, julia-elman, john-tindel]
categories:
  - Managing Digital
  - Our Work
tags:
  - 18F
  - analytics
  - Digital Analytics Program
  - GSA
  - HTTPS
---

The U.S. federal government is launching a new project to monitor how it&#8217;s doing at best practices on the Web.

A sort of health monitor for the U.S. government&#8217;s websites, it&#8217;s called [Pulse](https://pulse.cio.gov/) and you can find it at [pulse.cio.gov](https://pulse.cio.gov/).

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-410-pulse.jpg" alt="600-x-410-pulse" %}


[Pulse](https://pulse.cio.gov/) is a lightweight dashboard that uses the [official .gov domain list](https://github.com/GSA/data/blob/gh-pages/dotgov-domains/2015-03-15-federal.csv) to measure two things:

  * [Analytics](https://pulse.cio.gov/analytics/domains/): Whether federal executive branch domains are participating in the [Digital Analytics Program](https://www.WHATEVER/services/dap/) (DAP) that powers [analytics.usa.gov](https://analytics.usa.gov/).
  * [HTTPS](https://pulse.cio.gov/https/domains/): Whether federal domains have deployed the [HTTPS protocol](https://https.cio.gov/faq/), and how well they&#8217;ve done it.

These two things are just a start—there are a lot of other important things worth measuring! It&#8217;s also important to note that Pulse is currently only measuring parent domains (e.g. agency.gov) and is _not_ measuring subdomains (e.g. portal.agency.gov).

The project will hopefully expand over time to measure more best practices and more websites. In the meantime, Pulse is a commitment by the U.S. government to build a world-class analytics program and to transition entirely to HTTPS.

## Background

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-170-analytics-agencies.jpg" alt="600-x-170-analytics-agencies" %}


Pulse is a collaboration between 18F and the [Office of Government-wide Policy](http://www.gsa.gov/portal/content/104550) (OGP).

Like 18F, OGP is an office of the U.S. General Services Administration. Among many other things, OGP operates the [.gov domain registry](https://www.dotgov.gov/) and the [CIO Council](https://cio.gov/), an interagency forum of Chief Information Officers.

18F previously partnered with OGP in December to [release the complete .gov domain list](https://18f.gsa.gov/2014/12/18/a-complete-list-of-gov-domains/). Since then, 18F has worked with the Digital Analytics Program [to build analytics.usa.gov](https://18f.gsa.gov/2015/03/19/how-we-built-analytics-usa-gov/), and has coordinated with a number of agencies to [strengthen HTTPS for federal .gov domains](https://18f.gsa.gov/2015/02/09/the-first-gov-domains-hardcoded-into-your-browser-as-all-https/). We&#8217;re deeply gratified that we&#8217;ve had the opportunity to work with OGP to create a platform that continues this momentum.

## How Pulse Works

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-168-https-agencies.jpg" alt="600-x-168-https-agencies" %}


Pulse was created in around six weeks. We built the project [in the open from day 1](https://github.com/18f/pulse), obtained our domain name and relevant cybersecurity approvals in our first couple weeks, and released new versions of the dashboard to [pulse.cio.gov](https://pulse.cio.gov/) early and often throughout the process.

We also gathered usability feedback throughout development from users both inside and outside of the government, and repeatedly incorporated the results of that feedback into our work. Even though Pulse is only a handful of pages and puts most of its data into a simple table, we wanted to pay attention to detail and take the same user-centered approach 18F takes with our larger projects.

Pulse is a static website whose data is created from a combination of sources:

  * The [official .gov domain list](https://github.com/GSA/data/blob/gh-pages/dotgov-domains/2015-03-15-federal.csv). This is currently exported manually by GSA staff on a roughly quarterly basis.
  * The [list of websites which participate in DAP](https://analytics.usa.gov/data/sites.csv). This is also currently exported manually by GSA staff on a roughly quarterly basis.
  * Data collected from a public scan of how federal domains respond to HTTP and HTTPS, using an open source tool by [Ben Balter](https://twitter.com/benbalter) called [site-inspector](https://github.com/benbalter/site-inspector).
  * Data collected from a public scan of HTTPS configuration details for federal domains, using the [SSL Labs API](https://github.com/ssllabs/ssllabs-scan/blob/stable/ssllabs-api-docs.md).

To coordinate the data collection process, we created [domain-scan](https://github.com/18F/domain-scan), a small Python command line tool that runs domains through site-inspector and the SSL Labs API and produces CSV reports.

We then run these CSVs through a [final step](https://github.com/18F/pulse/blob/master/data/data.py), where we take the low-level primitives we gathered during the scanning process and create some higher-level conclusions and save them in a format that Pulse can automatically render into a table.

The process is not fully automated, and so Pulse isn&#8217;t updated every day. There&#8217;s work to do on all of the above to get to the point of showing fully up-to-date data without human intervention.

## Measuring Participation in the Digital Analytics Program

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-181-analytics.jpg" alt="600-x-181-analytics" %}


The [Digital Analytics Program](https://www.WHATEVER/services/dap/) (DAP) is a free, shared Web analytics service for U.S. federal agencies.

To participate, agencies place some JavaScript on their websites that report to a combined analytics account. DAP has [privacy controls](https://www.WHATEVER/services/dap/common-questions-about-dap-faq/#part-4) that anonymize visitor addresses and restrict data sharing.

Access to the account is shared within the federal government, and much of its data is shared publicly on [analytics.usa.gov](https://analytics.usa.gov/). DAP also regularly publishes a list of around 4,000 participating websites that have reported visitor data in the preceding 2 weeks.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-221-analytics-domains.jpg" alt="600-x-221-analytics-domains" %}


Pulse measures participation in the simplest way possible: by comparing the .gov domain list to the list of participating websites published by the Digital Analytics Program. It&#8217;s not rocket science, but in the future we&#8217;d like to automate this process using the [analytics-reporter](https://github.com/18F/analytics-reporter) tool [we created for analytics.usa.gov](https://18f.gsa.gov/2015/03/19/how-we-built-analytics-usa-gov/).

## Measuring HTTPS in .gov

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-194-https.jpg" alt="600-x-194-https" %}


Enforcing strong HTTPS is an [important baseline](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/) for government websites, and is in the [process](https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/) of [becoming](https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure) the baseline for the Web at large.

HTTPS is simple enough to detect, but characterizing HTTPS support for a domain, precisely and reliably, is trickier than you might expect.

We lean heavily on the open source [site-inspector](https://github.com/benbalter/site-inspector), a command line tool written in Ruby. Site-inspector measures various useful things about websites, and was originally written by Ben Balter to [analyze .gov domains](http://ben.balter.com/2015/05/11/third-analysis-of-federal-executive-dotgovs/).

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-211-https-domains.jpg" alt="600-x-211-https-domains" %}


To get the precision we wanted, we needed to take into account several subtle things about domains:

  * Domains have 4 possible &#8220;endpoints&#8221;—https://www, https://, http://www, and http://—which may each exhibit very different behavior.
  * Describing a domain&#8217;s HTTPS support means detecting which endpoint is &#8220;canonical,&#8221; as well as looking holistically at which endpoints redirect to others.
  * A domain&#8217;s HTTPS certificate might be issued for an invalid hostname (e.g. a248.e.akamai.net). In this case, HTTPS is likely an **unsupported** way to access the domain.
  * A domain&#8217;s HTTPS certificate might have an incomplete or untrusted chain (e.g. missing intermediates, or a private root certificate), in which case HTTPS is likely a **supported** way to access the domain.
  * A domain might set an [HSTS](https://https.cio.gov/hsts/) policy for www, but neglect to apply one to the bare domain, negating HSTS policy for its other subdomains.
  * A domain might support HTTPS with a valid certificate, but have a policy of &#8220;downgrading&#8221; users by redirecting away from HTTPS to HTTP.

We use site-inspector to look at all of the above factors (and many more) and calculate a bunch of helpful things about a domain&#8217;s HTTPS support. If you really want to dive deeply into the methodology, you can read the [original work discussion](https://github.com/benbalter/site-inspector/pull/24).

To measure HTTPS quality, we lean on [SSL Labs](https://www.ssllabs.com/). SSL Labs&#8217; [grading system](https://www.ssllabs.com/downloads/SSL_Server_Rating_Guide.pdf) [PDF] has become a widely respected, universally referenced gauge of HTTPS quality. (Here&#8217;s the [report for Pulse itself](https://www.ssllabs.com/ssltest/analyze.html?d=pulse.cio.gov)).

We used [ssllabs-scan](https://github.com/ssllabs/ssllabs-scan), an open source client for the [SSL Labs API](https://github.com/ssllabs/ssllabs-scan/blob/stable/ssllabs-api-docs.md), to collect the top-level grade along with some common relevant issues that are worth addressing (such as forward secrecy, or the use of SHA-1 signatures).

## Looking forward

We&#8217;re still in the process of fully documenting the tools we used. If you&#8217;re interested in using any of it in your own work, and you have questions about how to get started, [ring in on GitHub](https://github.com/18f/pulse/issues/new). We&#8217;re an open source team, and we&#8217;d love your contributions!

Pulse is clearly a small and simple website, but we think it&#8217;s a promising foundation for celebrating (and motivating) the U.S. government&#8217;s progress on making world-class websites and online services.

We&#8217;re thrilled we had the opportunity to work with the Office of Government-wide Policy here at GSA to get Pulse started, and we hope others find it useful. Feel free to [leave feedback](https://github.com/18F/pulse/issues/new) on the project so far, and where to take Pulse next!

_Eric Mill, Julia Elman, and Gray Brooks work at 18F. John Tindel works in the Office of Government-wide Policy._

_This article was originally posted on the [18F blog](https://18f.gsa.gov/2015/06/02/taking-the-pulse-of-the-federal-governments-web-presence/)._