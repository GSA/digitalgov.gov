---


date: 2014-06-04 10:00:47 -0400
title: 'The API Briefing\: NARA&rsquo;s Federal Register API &ndash; Learning How APIs Work'
summary: 'Application programming interfaces (APIs) can be confusing when people first hear of the concept. There are the many acronyms like REST (Representational State Transfer) and JSON (JavaScript Object Notation) that further obscure what APIs do. The idea behind APIs is quite simple\: APIs are&nbsp;how computer programs share information between themselves. You can experience this for'
authors: [bbrantley]
categories:
  - API
  - Code
tags:
  - API
  - code
  - Federal Register
  - NARA
  - National Archives and Records Administration
  - OPM
  - United States Office of Personnel Management
  - Wednesday API Briefing
---

Application programming interfaces (APIs) can be confusing when people first hear of the concept. There are the many acronyms like REST (Representational State Transfer) and JSON (JavaScript Object Notation) that further obscure what APIs do. The idea behind APIs is quite simple: APIs are how computer programs share information between themselves.

You can experience this for yourself by using the <a href="https://www.federalregister.gov/developers/api/v1" target="_blank">National Archives and Records Administration’s interactive documentation to the Federal Register API</a>. For this exercise, you will pretend to be a software program and you will use RESTful methods through an HTTP (HyperText Transfer Protocol; how computers ask for and receive Web pages) request. That means you will navigate to a URL and ask for Federal Register information by starting the request with GET and then some search terms. Follow these steps to complete the demonstration.

1) Go to this URL &#8211; <a href="https://www.federalregister.gov/developers/api/v1" target="_blank">https://www.federalregister.gov/developers/api/v1</a>
  
2) Click on “Agencies” and then click on “GET index /agencies”
  
3) You should then see a “Try It!” button. Click on it. Wait a few seconds, and you will see a set of text boxes with information in them.
  
4) Look for the “Response Body” text box. You should see the following first entry:
  
**[**
  
 **{**
  
 **&#8220;description&#8221;: &#8220;ACTION was established by Reorganization Plan No. 1 of 1971, effective July 1, 1971. \r\n\r\nACTION&#8217;s purpose was to mobilize Americans for voluntary service throughout the United States and in developing countries overseas through programs that help meet basic human needs and support the self-help efforts of low-income individuals and communities.\r\n\r\nACTION&#8217;s functions relating to SCORE and ACT programs were transferred to the Small Business Administration. Other functions exercised by the Director of ACTION prior to March 31, 1995 were transferred to the Corporation for National and Community Service by 107 Stat. 888 and Proclamation 6662 of April 4, 1994. &#8220;,**
  
 **&#8220;recent\_articles\_url&#8221;: &#8220;https://www.federalregister.gov/api/v1/articles?conditions%5Bagency_ids%5D%5B%5D=557&order=newest&#8221;,**
  
 **&#8220;logo&#8221;: null,**
  
 **&#8220;name&#8221;: &#8220;ACTION&#8221;,**
  
 **&#8220;parent_id&#8221;: null,**
  
 **&#8220;id&#8221;: 557,**
  
 **&#8220;url&#8221;: &#8220;https://www.federalregister.gov/agencies/action&#8221;,**
  
 **&#8220;json_url&#8221;: &#8220;https://www.federalregister.gov/api/v1/agencies/557.json&#8221;,**
  
 **&#8220;short_name&#8221;: &#8220;ACTION&#8221;**
  
 **},**
  
5) The response above is an example of JSON. See how you have a label (like “description”) and then information that corresponds with the label. JSON is designed to be both human-readable and machine-readable. For example, how would you find the short name of this agency? What is the ID number? Both answers are in the JSON response.
  
6) To make a specific request of the API, look for “GET get /agencies/:id” just under “Response Body” text box. Click on it.
  
7) When you see the text box that asks for “id” type in “530” (without the quotation marks) and hit the Enter button.
  
8) This will pull up just the information for the Office of Workers’ Compensation Programs in the JSON format.

These steps are essentially the same process that you automate when you write a program to interact with APIs. Your software finds the API, uses a request authorized by the API, and then receives a response from the API. NARA has done a great job in making the Federal Register easily accessible through their API and providing a great teaching aid for aspiring API developers.

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via [email](mailto:%20William.Brantley@opm.gov).
  
_ 
  
_**Dr. William A. Brantley**, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at [BillBrantley.com](http://billbrantley.com/)._