---


date: 2015-03-11 11:25:36 -0400
title: 'The API Briefing\: Fulfilling the D(e)SIRE for Renewable Energy with the Department of Energy&amp;#8217;s New API'
summary: ' The Database of State Incentives for Renewables and Efficiency&reg; (DSIRE&reg;) provides information on incentives and policies for renewables and energy efficiency in the U.S. This joint project by the Department of Energy and North Carolina State University just released an API to query DSIRE&reg;&rsquo;s database. Developers can view the sample output'
authors: [bbrantley]
categories:
  - API
tags:
  - API
  - data
  - json
  - United States Department of Energy
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/600-x-400-Find-Policies-Incentives-by-State-map-from-DSIRE-DOE-Energy-website.jpg" alt="600-x-400-Find-Policies-&-Incentives-by-State-map-from-DSIRE-DOE-Energy-website" %}

The Database of State Incentives for Renewables and Efficiency® (DSIRE®) provides information on incentives and policies for renewables and energy efficiency in the U.S. This joint project by the Department of Energy and North Carolina State University just released an API to query DSIRE®’s database.

Developers can view the sample output by visiting the <a href="http://www.dsireusa.org/" target="_blank">database query page</a>. They can query by state or ZIP code to receive a listing of programs. After they select a program, the next page lists contact information, a summary of the incentive program, and the eligible energy technologies (<a href="http://programs.dsireusa.org/system/program/detail/918" target="_blank">see this example</a>). The API returns the same information—for all the programs—in <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML</a>, <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a>, and <a href="http://en.wikipedia.org/wiki/Comma-separated_values" target="_blank">CSV</a> formats. Developers should be prepared to receive a large data file, as the API does not allow querying the DSIRE® database using the XML or JSON formats.

The DSIRE® database can be queried using <a href="http://en.wikipedia.org/wiki/SPARQL" target="_blank">SPARQL</a>. SPARQL (SPARQL Protocol and RDF Query Language) is a language that can query online databases that either offer “<a href="http://en.wikipedia.org/wiki/Attribute%E2%80%93value_pair" target="_blank">key-value</a>” data or <a href="http://en.wikipedia.org/wiki/Relational_database" target="_blank">relational database</a> tables. To use SPARQL, a query is entered into the <a href="http://virtuoso.dsireusa.org:8890/sparql" target="_blank">SPARQL endpoint</a>. The data is returned in an XML type format—<a href="http://en.wikipedia.org/wiki/Resource_Description_Framework" target="_blank">Resource Description Framework (RDF)</a>—which can then be used in an app.

DSIRE® is a great example of joint projects between the federal government and other organizations. By pairing with NC State, DOE has a partner that will manage and offer the data in an effective way to the public. I look forward to further work on the DSIRE® API so that queries are available for JSON and XML formats along with the ability to offer geolocation services.

_*API – Application Programming Interface; how software programs and databases share data and functions with each other. Check out [APIs in Government](https://www.WHATEVER/2013/04/30/apis-in-government/) for more information._

_Each week, “[The API Briefing](https://www.WHATEVER/tag/wednesday-api-briefing/)” will showcase government APIs and the latest API news and trends. Visit this column every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via <a href="mailto:%20bill@billbrantley.com" target="_blank">email</a>. All opinions are my own and do not reflect the opinions of the USDA and GSA._