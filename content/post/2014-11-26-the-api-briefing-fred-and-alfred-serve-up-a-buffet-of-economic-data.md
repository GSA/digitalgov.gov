---


date: 2014-11-26 11:10:15 -0400
title: 'The API Briefing\: FRED&reg; and ALFRED&reg; Serve Up a Buffet of Economic Data'
summary: 'The federal government captures almost every economic data trend through several agencies. The Federal Reserve of St. Louis offers 238,000 economic trends through FRED&reg; (Federal Reserve Economic Data). FRED&reg; data can be accessed through the FRED&reg; website or the FRED&reg; mobile app (Android | Apple). FRED&reg; data can even'
authors: [bbrantley]
categories:
  - API
  - Code
tags:
  - API
  - Federal Reserve Board
  - U.S. Department of Agriculture
  - USDA
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/250-x-390-FRED-home-android.jpg" alt="FRED app home screen" %}The federal government captures almost every economic data trend through several agencies. The Federal Reserve of St. Louis offers 238,000 economic trends through [FRED® (Federal Reserve Economic Data)](http://research.stlouisfed.org/fred2/). FRED® data can be accessed through the FRED® website or the FRED® mobile app ([Android](https://play.google.com/store/apps/details?id=org.stlouisfed.research.fred) | [Apple](https://itunes.apple.com/us/app/fred-economic-data/id451715489)). FRED® data can even be pulled into [Excel through a free plugin](http://research.stlouisfed.org/fred-addin/).

Developers can take advantage of the vast data resources of FRED® and its cousin, ALFRED® ([ArchivaL Federal Reserve Economic Data](http://alfred.stlouisfed.org/)). Developers [query FRED® and ALFRED®](http://api.stlouisfed.org/docs/fred/) by categories, release dates, economic series, sources, and tags, which provides several robust methods to pinpoint the exact economic data the user needs. The documentation is extensive and demonstrates how to retrieve the data in both [XML](http://en.wikipedia.org/wiki/XML) and [JSON](http://en.wikipedia.org/wiki/JSON) formats.

Especially helpful to developers are the various [API toolkits](http://api.stlouisfed.org/docs/fred/#Toolkits) that FRED® offers. There are seven API toolkits written for the most common programming languages: C++, Common Lisp, Java, .NET, PHP, Python, and Ruby. The toolkits make accessing and parsing data easier for developers so that they can concentrate on other app features.

[GeoFRED®](http://geofred.stlouisfed.org/) presents the some of the economic data geographically. Users can register to create and save their maps. GeoFRED® does not appear to have its own API, and I could not determine if FRED® or ALFRED® offers location data. Mapping would be a great feature, but FRED® and ALFRED® offer an amazing amount of data to build many excellent apps.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-436-GEOFred-API.jpg" alt="600-x-436-GEOFred-API" %}

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out_ [_APIs in Government_](https://www.WHATEVER/2013/04/30/apis-in-government/) _for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:William.Brantley@opm.gov)_._

_**Dr. William A. Brantley** is the HRIS Branch Chief in the USDA’s Rural Development Human Resources Office. You can find out more about his work in this space at_ [_BillBrantley.com_](http://billbrantley.com/)_. All opinions are his own and do not reflect the opinions of the USDA and GSA._