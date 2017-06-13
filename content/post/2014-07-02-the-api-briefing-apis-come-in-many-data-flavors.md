---


date: 2014-07-02 10:00:44 -0400
title: 'The API Briefing\: APIs Come In Many (Data) Flavors'
summary: 'This week, we will look at three different APIs that demonstrate how agencies use different technologies to serve out data. Presenting data in various formats encourages developers to build on federal APIs. As past columns have shown, the innovative apps created with federal data are quickly growing. The latest API news this week is how'
authors: [bbrantley]
categories:
  - API
  - Data
tags:
  - Census
  - DOL
  - FAA
  - Federal Aviation Administration
  - mobile apps
  - Mobile Code Catalog
  - OPM
  - U.S. Department of Labor
  - United States Census Bureau
  - United States Geological Survey
  - United States Office of Personnel Management
  - USGS
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/250-x-167-23891851-3-ice-cream-cones-Jupiterimages-Photos-com-Thinkstock-89697244.jpg" alt="Three different flavors of ice cream cones, on a blue gradient background" %} 

This week, we will look at three different APIs that demonstrate how agencies use different technologies to serve out data. Presenting data in various formats encourages developers to build on federal APIs. As past columns have shown, the innovative apps created with federal data are quickly growing.

The latest API news this week is how quickly the <a href="https://github.com/USDepartmentofLabor/Swift-Federal-Data-SDK" target="_blank">Department of Labor (DOL) built a Software Developer Kit (SDK)</a> for Apple’s new programming language. Apple just released the <a href="https://developer.apple.com/swift/" target="_blank">Swift programming language</a>, which is optimized for building apps. Two weeks later, DOL has an SDK that allows Swift developers to access numerous federal APIs including all the APIs from the Census Bureau and selected APIs from over 15 agencies. The federal government API community demonstrates how responsive and cutting-edge the agencies are.

In a past column, we talked about [how to read JSON data](https://www.WHATEVER/2014/06/04/the-api-briefing-naras-federal-register-api-learning-how-apis-work/ "The API Briefing:  NARA’s Federal Register API – Learning How APIs Work"). As you may remember, JSON stands for JavaScript Object Notation and is a structured way to deliver federal data to apps. Before JSON, there was eXtensible Markup Language (XML). Like JSON, it uses a key and value structure to structure the data. If you examine the <a href="http://services.faa.gov/docs/services/airport/#airportStatus" target="_blank">Federal Aviation Administration (FAA)’s Airport Service API</a>, you can view a sample of the XML response. Notice the HTML-like tags such as “<Name>” and “<Delay>” that surround the data such as the airport’s name and if there&#8217;s a flight delay. Both XML and JSON have their advantages in developing apps, and that is why agencies strive to provide their data in a variety of API formats.

Besides JSON and XML, there are several specialized data formats depending on the type of federal data provided. The <a href="http://waterservices.usgs.gov/" target="_blank">U.S. Geological Survey (USGS) provides water data</a> through XML and JSON but also in several different geospatial-based data formats. Developers can receive data through <a href="http://his.cuahsi.org/wofws.html" target="_blank">WaterML (Water Markup Language)</a>, which is an industry-defined standard for exchanging hydrological data. Alternatively, developers can use <a href="http://en.wikipedia.org/wiki/Keyhole_Markup_Language" target="_blank">Keyhole Markup Language (KML)</a> which is the XML-like language used for <a href="https://www.google.com/earth/" target="_blank">Google Earth</a>.

The number of federal APIs and the myriad ways of using the APIs can be overwhelming. An excellent reference site for the API developer is the <a href="http://gsa.github.io/Mobile-Code-Catalog/" target="_blank">General Services Administration (GSA)’s Mobile Code Catalog</a>. Along with the Data.gov <a href="http://www.data.gov/developers/apis" target="_blank">Federal APIs Catalog</a>, developers can read about the various code frameworks for mobile Web applications and view code samples for Android and iPhone apps. Not only are the federal agencies committed to providing APIs, they are also providing great developer resources for building useful and informative apps for the American public.

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via [email](mailto:William.Brantley@opm.gov)._

_Dr. William A. Brantley, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at <a href="http://billbrantley.com/" target="_blank">BillBrantley.com</a>._

<div class="copyIcon copy0">
</div>

<div class="pasteIcon paste0">
</div>

<div class="notifyIcon">
</div>