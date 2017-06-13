---


date: 2015-06-03 11:55:34 -0400
title: 'The API Briefing\: Make It an API &ndash; the Census Bureau&rsquo;s Census of Governments'
summary: 'Serendipity can be a wonderful tool for discovery. I was looking through the Census Bureau site for some business census data when I came upon the 2012 Census of Governments. According to the official description\: &ldquo;[t]he Census of Governments identifies the scope and nature of the nation&amp;#8217;s state and local government sector; provides authoritative benchmark'
authors: [bbrantley]
categories:
  - API
tags:
  - API
  - Census
  - United States Census Bureau
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/600-x-400-Capitol-Building-U.S.-Congress-flySnow-iStock-Thinkstock-488669037.jpg" alt="Capitol Building U.S. Congress" %} 

Serendipity can be a wonderful tool for discovery. I was looking through the Census Bureau site for some business census data when I came upon the <a href="http://www.census.gov/govs/cog/index.html" target="_blank">2012 Census of Governments</a>. According to the official description: “[t]he Census of Governments identifies the scope and nature of the nation&#8217;s state and local government sector; provides authoritative benchmark figures of public finance and public employment; classifies local government organizations, powers, and activities; and measures federal, state, and local fiscal relationships.”

The data is divided up into three main topic areas: lists and structures of government; government employment and payroll; and government finance. You can find tables of the number of local governments a state has along with data on the size and type of public school systems. There are also tables of the number and type of state and local government employees. Data is also collected on state tax revenues and public school finances. All in all, it is a complete picture of state and local governments in the United States.

This is why the Census Bureau should consider creating an API for the data. Currently, a developer can <a href="https://harvester.census.gov/datadissem/" target="_blank">create a table</a> which returns the data as a PDF or an Excel file. A developer could spend the time building tables and then combine them into one database, but that is tedious and introduces errors into the data. By creating an API, the Census Bureau can entice developers to create some amazing apps from this rich source of state and local government data.

One idea is to make the data available as an <a href="https://www.WHATEVER/2015/03/25/the-api-briefing-free-federal-energy-and-economic-information-delivered-straight-to-your-spreadsheet/" target="_blank">Excel plug-in like the Federal Reserve of St. Louis and the U.S. Energy Information Administration</a> did with their data. That way, researchers can perform in-depth data mining to determine trends in state and local tax revenues, spending on public education, or the differences in local governments among the states. The Census of Governments data is also ideal for mashing up with other data to produce community profiles or profiles of state public educational programs.

The Census of Governments data is just another serendipitous discovery among the thousands of federal data sources that should be APIs but aren’t. For now&#8230;

_*API – Application Programming Interface; how software programs and databases share data and functions with each other. Check out [APIs in Government](https://www.WHATEVER/2013/04/30/apis-in-government/) for more information._

_Each week, “[The API Briefing](https://www.WHATEVER/tag/wednesday-api-briefing/)” will showcase government APIs and the latest API news and trends. Visit this column every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via <a href="mailto:%20bill@billbrantley.com" target="_blank">email</a>. All opinions are my own and do not reflect the opinions of the USDA and GSA._