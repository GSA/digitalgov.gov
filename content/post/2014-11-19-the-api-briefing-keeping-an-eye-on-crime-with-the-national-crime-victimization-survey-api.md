---


date: 2014-11-19 11:05:42 -0400
title: 'The API Briefing\:  Keeping an Eye on Crime with the National Crime Victimization Survey API'
summary: 'Every year, the Bureau of Justice Statistics surveys nearly 80,000 households and over 143,000 individuals about crime victimization. What is unique about this survey is that both reported and unreported crimes data is collected. The survey has a well-documented API which offers data in the CSV, XML, and JSON formats. Let&rsquo;s examine the documentation to'
authors: [bbrantley]
categories:
  - API
tags:
  - Bureau of Justice Statistics
  - U.S. Department of Agriculture
  - USDA
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-400-Crime-scene-no-fake-blood-splatter-Merydolla-iStock-Thinkstock-503890771.jpg" %} 

Every year, the <a href="http://www.bjs.gov/developer/ncvs/index.cfm" target="_blank">Bureau of Justice Statistics</a> surveys nearly 80,000 households and over 143,000 individuals about crime victimization. What is unique about this survey is that both reported and unreported crimes data is collected. The survey has a well-documented API which offers data in the <a href="http://en.wikipedia.org/wiki/Comma-separated_values" target="_blank">CSV</a>, <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML</a>, and <a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> formats. Let’s examine the documentation to determine how a developer could use the data in the app.

The National Crime Victimization Survey (NCVS) API is split into “personal victimization” data and “household victimization” data. The <a href="http://www.bjs.gov/developer/ncvs/personalFields.cfm" target="_blank">personal victimization data</a> has 32 variables that describes the crime and gives the victim’s demographic information. The <a href="http://www.bjs.gov/developer/ncvs/householdFields.cfm" target="_blank">household victimization data</a> has similar information in 29 variables.

Obtaining the information is easy. The documentation provides sample <a href="http://www.bjs.gov/developer/ncvs/developers.cfm" target="_blank">API endpoints</a> that helps the developer create a URL (uniform resource locator) to return data in a specific format. For example, if a developer would like all personal victimization data for 2010 as a JSON file, he or she would use the following URL: <http://www.bjs.gov:8080/bjs/ncvs/v2/personal/2010?format=json> (Caution: link will download a large file). Other URL calls could return data by population or the count of household incidents by year.

The NCVS API is an excellent data source for beginning developers to learn how to request and parse data for apps. Developers can use the most popular scripting languages to acquire the data and format it in a data table, charts, and interactive displays. The documentation is comprehensive and clearly defines the data fields. The only suggestion I&#8217;d have is to make it possible to include location information so that app developers could also experiment with mapping the data.

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out_ [_APIs in Government_](https://www.WHATEVER/2013/04/30/apis-in-government/) _for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:Bill.Brantley@wdc.usda.gov)_._

**_Dr. William A. Brantley_** _is the HRIS Branch Chief in the USDA’s Rural Development Human Resources Office. You can find out more about his work in this space at_ [_BillBrantley.com_](http://billbrantley.com/)_. All opinions are his own and do not reflect the opinions of the USDA or GSA._