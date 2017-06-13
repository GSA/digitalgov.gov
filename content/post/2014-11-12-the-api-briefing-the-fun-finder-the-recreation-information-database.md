---


date: 2014-11-12 1:00:44 -0400
title: 'The API Briefing\: The Fun Finder &ndash; The Recreation Information Database'
summary: 'Back in 2000, I worked at a dot-com building website applications such as a real-time stock ticker ribbon and a real estate listings search engine. One of my favorite applications was an app for mobile phones. At that time, I used the Wireless Access Protocol (WAP), which displayed information using a special version of XHTML.'
authors: [bbrantley]
categories:
  - API
tags:
  - U.S. Department of Agriculture
  - USDA
  - Wednesday API Briefing
---

Back in 2000, I worked at a dot-com building website applications such as a real-time stock ticker ribbon and a real estate listings search engine. One of my favorite applications was an app for mobile phones. At that time, I used the <a href="http://en.wikipedia.org/wiki/Wireless_Application_Protocol" target="_blank">Wireless Access Protocol (WAP)</a>, which displayed information using a special version of <a href="http://en.wikipedia.org/wiki/XHTML" target="_blank">XHTML</a>. Using the Kentucky Golf.com database, a user could search for information on a specific golf course by entering a ZIP code or using drop-down lists to search by county or course name. The major challenge was creating a speedy user-friendly app that could quickly search the big database and return the relevant data.

Fourteen years later, creating a speedy user-friendly app that can quickly search and retrieve information from a massive database is still a major concern of app developers. This is the challenge facing developers who may want to create an app from the <a href="http://ridb.recreation.gov/" target="_blank">Recreation Information Database (RID)</a>. RID is a one-stop database that aggregates information on recreational activities offered by federal lands, historic sites, museums, and similar facilities. You can sample the data provided by [using the online search interface](http://ridb.recreation.gov/).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-558-Recreation-Information-Database-RID-API-Puerto-Rico.jpg" alt="Recreation Information Database results for Puerto Rico" %}

Developers can access the same data using a Web service Uniform Resource Locator (URL). In this <a href="https://ridb.recreation.gov/?action=datasharing" target="_blank">example</a>, select “Department of Agriculture” as the organization and click “Go.” A list of URLs will appear. Click on any of these and be prepared to wait. Once the query has been completed, you will see a listing of facilities along with a link to an <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML</a> file and a <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> file. The data consists of the recreation area’s name, location, email, phone, and recreational activities (see the <a href="https://ridb.recreation.gov/RIDBWebSvcManual.pdf" target="_blank">manual </a>for specifics).

So, how can an app developer best use RID to build an app (or apps)? One strategy is to download all of the data through the API into a database. Segment the data into several parts by organization, recreational facilities, geography, and so on. Then, use a series of successive selections to search only the most relevant section of the database. An app can also do an automated search using the geographical positioning system (GPS) function of the smartphone. There is an amazing amount of useful data in RID, which only needs a smart and responsive user interface to realize RID&#8217;s value fully.

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out_ [_APIs in Government_](https://www.WHATEVER/2013/04/30/apis-in-government/) _for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:Bill.Brantley@wdc.usda.gov)_._

**_Dr. William A. Brantley_**_, is the HRIS Branch Chief in the USDA&#8217;s Rural Development Human Resources Office. You can find out more about his work in this space at_ [_BillBrantley.com_](http://billbrantley.com/)_. All opinions are his own and do not reflect the opinions of the USDA and GSA._