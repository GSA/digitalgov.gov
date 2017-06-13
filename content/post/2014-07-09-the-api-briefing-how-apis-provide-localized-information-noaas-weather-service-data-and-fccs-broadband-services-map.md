---


date: 2014-07-09 10:30:10 -0400
title: 'The API Briefing\:  How APIs Provide Localized Information &amp;#8211; NOAA&rsquo;s Weather Service Data and FCC&rsquo;s Broadband Services Map'
summary: 'The two featured APIs this week are excellent demonstrations of personalizing federal government data by where a user lives. Federal agencies collect a considerable amount of community data, from the Census Bureau&rsquo;s surveys to the FDA&rsquo;s local agricultural conditions. Thanks to GPS, app developers can locate a user&rsquo;s immediate geographical location and tailor information based'
authors: [bbrantley]
categories:
  - API
  - Data
tags:
  - Census
  - FCC
  - FDA
  - Federal Communications Commission
  - GPS
  - mobile apps
  - National Oceanic and Atmospheric Administration
  - NOAA
  - U.S. Food and Drug Administration
  - United States Census Bureau
---

The two featured APIs this week are excellent demonstrations of personalizing federal government data by where a user lives. Federal agencies collect a considerable amount of community data, from the Census Bureau’s surveys to the FDA’s local agricultural conditions. Thanks to GPS, app developers can locate a user’s immediate geographical location and tailor information based on the latitude and longitude coordinates.

The National Oceanic and Atmospheric Administration has an <a href="https://github.com/outoftime/noaa" target="_blank">API</a> that provides current conditions and a four-day forecast by locating the nearest NOAA station to the user’s geographical coordinates. This particular version of the API is available through GitHub and uses the <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby language</a>. If you would like to use a different language, you can visit the NOAA page for the <a href="http://graphical.weather.gov/xml/" target="_blank">National Digital Forecast Database</a> and access the XML feed through a <a href="http://xml.coverpages.org/soap.html" target="_blank">Simple Object Access Protocol (SOAP)</a>.

The FCC also uses latitude and longitude coordinates to give users information about broadband access in their neighborhood. The user provides his or her mailing address, which is then translated into latitude and longitude. With the proper coordinates, the <a href="http://www.broadbandmap.gov/developer/api/speed-test-api-nation" target="_blank">FCC’s Broadband Services Map API</a> lists the broadband providers and their reported connection speeds. You can try it out by typing your address into the search box at the top of the page and then click the “Find” button. Observe how the data is presented into a graph comparing the various broadband providers and coverage map (using Google maps).

Embedding GPS in smartphones, tablets, and laptops has greatly enhanced our lives and goes beyond just helping us find our way when we travel. By pairing federal APIs with mapping applications, developers can create amazing apps that tell us the best places to live, what’s new at the local farmers markets, and if it will rain today.

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:%20William.Brantley@opm.gov)_._

**_Dr. William A. Brantley_**_, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at_ [_BillBrantley.com_](http://www.billbrantley.com).