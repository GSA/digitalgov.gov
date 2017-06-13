---


date: 2014-11-05 1:49:09 -0400
title: 'The API Briefing\: Brainstorming Ideas for Apps'
summary: 'Data.gov has 130,000+ datasets (as of November 3, 2014) many of which are designed for application developers. In previous columns, I&rsquo;ve showcased some of the great applications built using federal APIs. Have you wondered where the idea for an app came from? Some developers start with an idea and then look for the API that'
authors: [bbrantley]
categories:
  - API
  - Data
  - Mobile
tags:
  - data.gov
  - DOT
  - U.S. Department of Agriculture
  - United States Department of Transportation
  - USDA
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-393-Robot-with-tools-and-application-programming-interface-sign-Technology-concept-Kirillm-iStock-Thinkstock-450547591.jpg" alt="Robot with tools and application programming interface sign. Technology concept." %} 

[Data.gov](http://www.data.gov/) has 130,000+ datasets (as of November 3, 2014) many of which are designed for application developers. In previous columns, I’ve showcased some of the [great applications built using federal APIs](https://www.WHATEVER/tag/wednesday-api-briefing/). Have you wondered where the idea for an app came from?

Some developers start with an idea and then look for the API that best fits the idea. For example, a developer may want to create an app that alerts users of unsafe bus or limousine companies. Possible users are conference planners or tourist services. The developer could start with Data.gov and search through the catalog for Department of Transportation (DOT) datasets. Fortunately, DOT has the perfect API: [The SaferBus API](https://mobile.fmcsa.dot.gov/developer/apidoc.page?cid=6321). This API provides safety records for motor coaches, school buses, limousines, mini-buses, and vans. The API also gives the city and state of the carrier company so the developer could add a mapping feature to the app.

Other apps are built by brainstorming around an established API. Another set of DOT APIs concerning transportation safety is the [Federal Railroad Administration’s (FRA) Safety Data APIs](https://safetydata.fra.dot.gov/MasterWebService/FRASafetyDataAPIs.aspx). FRA collects reports on incidents involving rail crossings and highways. There is [much detail reported](http://safetydata.fra.dot.gov/PublicObjects/FRASafetyDataAPIsSamples/Form57Sample.xml) by the API including location information, weather conditions, and a narrative of the accident. A developer could create an app that uses a smartphone’s built-in GPS (Global Positioning System) to warn users of nearby dangerous railroad crossings. This app could even estimate the probability of a railroad accident based on current weather conditions using past accident data in similar weather.

Sometimes developers have a great idea and the federal data source exists, but is not available as an API. In these cases, a developer can contact the federal agency and demonstrate how his or her app idea can benefit the public. Once agencies see a need for open access to a data source, another API could be added to Data.gov’s growing list of datasets.

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out_ [_APIs in Government_](https://www.WHATEVER/2013/04/30/apis-in-government/) _for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:William.Brantley@opm.gov)_._