---


date: 2014-10-01 11:43:33 -0400
title: 'The API Briefing\: A Great Start For an API &ndash; NLM&rsquo;s TOXNET Web Service'
summary: 'Glad to be back after a three-week absence. I was preparing for the South Eastern Conference on Public Administration held in Atlanta this year. Great conversations and I can tell you that the academic community is hungry for more government data and APIs. A great example is this week&rsquo;s API Briefing\: the U.S. National Library'
authors: [bbrantley]
categories:
  - API
tags:
  - National Library of Medicine
  - NLM
  - OPM
  - United States Office of Personnel Management
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/250-x-188-USA-Networking-Vicente-Barcelo-Varona-Hemera-Thinkstock-100748265.jpg" alt="Digital photo of U S A Networking concept with binary code and website scripting overlays" %} 

Glad to be back after a three-week absence. I was preparing for the South Eastern Conference on Public Administration held in Atlanta this year. Great conversations and I can tell you that the academic community is hungry for more government data and APIs. A great example is this week’s API Briefing: the U.S. National Library of Medicine&#8217;s TOXNET Web Service.

<a href="http://toxnet.nlm.nih.gov/index.html" target="_blank">TOXNET </a>lists 16 databases ranging from TOXNET, which maps chemical releases, to the Hazard Substances Data Bank (HSDB). You can search six of the TOXNET databases using the <a href="http://toxnet.nlm.nih.gov/toxnetapi/search_chemical.html" target="_blank">TOXNET Web Service</a>. Developers use HTTP GET or POST requests to return a <a href="http://toxnet.nlm.nih.gov/toxnetapi/chemical_result.txt" target="_blank">text string</a> or as an <a href="http://toxgate.nlm.nih.gov/cgi-bin/sis/search2/r?dbs+hsdb:@term+@DOCNO+35" target="_blank">HTML page</a>. The TOXNET Web Service is a great start as a much needed federal government information source for state environmental protection agencies, public health services, and other government and private sector organizations that need authoritative environmental toxin information.

Here are some possible next steps for making TOXNET a more useful API.

  * First, return the results in several formats such as XML and JSON.
  * Second, provide code samples (PHP, Python, and so on) to access the TOXNET Web Service in a RESTful way.
  * Finally, program the API so a developer can access all 16 TOXNET databases at once or specify single or multiple selections. The National Library of Medicine may consider using a hackathon to develop the valuable TOXNET Web Service further.

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:William.Brantley@opm.gov)_._ **_Dr. William A. Brantley_**_, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at_ [_BillBrantley.com_](http://billbrantley.com/)_._