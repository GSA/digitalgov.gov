---


date: 2015-09-23 10:00:11 -0400
title: 'The Data Briefing\: Surrounded by Fields of Federal Data&mdash;U.S. Patent and Trademark Office&rsquo;s PatentsView'
summary: 'Hello, everyone. My summer sabbatical was short but educational, and I am glad to be back in the federal government. I am also excited to again take up the weekly API article that is now expanded to include all things federal government data. Much has happened in the open data realm, and there is much'
authors: [bbrantley]
categories:
  - Data
tags:
  - API
  - data
  - data visualization
  - open data
  - The Data Briefing
  - United States Patent and Trademark Office
  - USPTO
---

Hello, everyone. My summer sabbatical was short but educational, and I am glad to be back in the federal government. I am also excited to again take up the weekly API article that is now expanded to include all things federal government data. Much has happened in the open data realm, and there is much to chronicle as government uses data in more innovative ways.

On my sabbatical reading stack was &#8220;Code Halos: How the Digital Lives of People, Things, and Organizations are Changing the Rules of Business.&#8221; The authors (Malcolm Frank, Paul Roehrig, and Benjamin Pring) define code halos as “the field of digital information that surrounds any noun—any person, place, or thing.” Code halos depend upon the SMAC Stack—social technologies, mobile technologies, analytics, and the cloud—to capture, store, and provide the digital information. The authors claim code halos are important because they will form the foundation for the second economy: A second economy that will be built using the code halos that surround individuals, products, services, and organizations.

This is nothing new, and you have read similar statements in my earlier columns. In fact, I have written several times about the [role that federal government data has in helping companies innovate](https://www.WHATEVER/2015/04/15/the-api-briefing-how-essential-is-government-data-to-the-american-economy/) to provide data-rich services and products: essential data such as [census information](https://www.WHATEVER/2015/06/03/the-api-briefing-make-it-an-api-the-census-bureaus-census-of-governments/), [weather forecasts](https://www.WHATEVER/2014/07/09/the-api-briefing-how-apis-provide-localized-information-noaas-weather-service-data-and-fccs-broadband-services-map/), [economic indicators](https://www.WHATEVER/2014/11/26/the-api-briefing-fred-and-alfred-serve-up-a-buffet-of-economic-data/), and [health alerts](https://www.WHATEVER/2014/10/08/the-api-briefing-cdcs-api-delivers-free-up-to-date-health-information-for-your-blog-or-website/). Combine this data with other data to produce code halos around a community, a group of people, or local economy. Let’s take an example from a new federal dataset.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/600-x-450-USPTO-PatentsView-homepage.jpg" alt="Screen capture from the U.S.P.T.O. Patents View homepage" %}

The U.S. Patent and Trademark Office (USPTO) just released <a href="http://www.patentsview.org/web/" target="_blank">PatentsView</a>, which is an interactive data visualization tool for exploring nearly 40 years of data about U.S. patents. The users can easily use point-and-click tools on categories such as the patent title, the inventor’s name, location, or patent grant date. I tried one of the sample searches for the most prolific inventor in 2014 (Bartley K. Andre) and found that he had 99 granted patents. I could drill down by geographic area (with a corresponding map), patent class, and even change the date range. Clicking on the patent title gave me the filing date and how long it took to process the application. I could even see the specific patent information on Google.

PatentsView is still in beta, so the <a href="http://www.patentsview.org/query/" target="_blank">visual interactive data query tool</a> is under construction. However, there is an <a href="http://www.patentsview.org/api/query-language.html" target="_blank">API</a>, which is well documented and looks to provide a wealth of information. Researchers can even download the <a href="http://www.patentsview.org/download/" target="_blank">PatentsView database tables</a> if they would like to perform analysis in their favorite analytical tool.

You can combine the PatentsView data with Census data such as a community’s aggregate education level; Department of Education data on local universities, colleges, and trade schools; and Department of Labor economic statistics to create a “community innovation ranking” app. This app can help answer questions such as “Where are innovations occurring?” and “What kind of community infrastructure lends itself best to encouraging inventions that can be patented and commercialized?”

I like the concept of code halos, and I believe they play a vital role in the economy now and in the future. I also think that a major source of digital information for many code halos is produced by the federal government. We will explore this thought in further columns about federal government data.

_ (The term “code halos” is trademarked by Cognizant Technology Solutions U.S. Corporation. The use of Code Halo or Google are for illustrative purposes only and should not be construed as an endorsement by the U.S. federal government or its agencies.)_

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends._

_Dr. William Brantley is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. You can find out more about his personal work in open data, analytics, and related topics at [BillBrantley.com](http://billbrantley.com/). All opinions are his own and do not reflect the opinions of the USPTO or GSA._