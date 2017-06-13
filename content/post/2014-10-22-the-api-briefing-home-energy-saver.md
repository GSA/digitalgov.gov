---


date: 2014-10-22 10:47:54 -0400
title: 'The API Briefing\: Home Energy Saver'
summary: ' It is fall when the weather becomes colder, and people start firing up their furnaces. While I was working on putting in more insulation and installing a programmable thermostat, I wondered if the federal government has an API to help me lower my utility'
authors: [bbrantley]
categories:
  - API
tags:
  - DOE
  - United States Department of Energy
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/400-x-268-Dept-Energy-Home-Energy-Saver-HES-Professional-Tool.jpg" alt="Dept Energy Home Energy Saver HES Professional Tool" %}

It is fall when the weather becomes colder, and people start firing up their furnaces. While I was working on putting in more insulation and installing a programmable thermostat, I wondered if the federal government has an API to help me lower my utility bills. Yes, and it is a great API! The Department of Energy (through the Lawrence Berkley National Laboratory) has the [Home Energy Saver API](https://developers.buildingsapi.lbl.gov/hes) which is a comprehensive service to analyze home energy use.

Visit the [online Home Energy Saver (HES) application](http://hes.lbl.gov/consumer/) to understand how the service works. A user starts by describing his or her property by listing the address, age of the house, and the number of occupants. The user can also give more details such as the shape of the house, insulation, air leakage, and other structural factors. The user is then given a detailed list of recommendations to improve his or her house. HES then calculates the difference between current energy costs and estimated cost savings if the user implements suggested recommendations such as adding more insulation or installing new windows.

Implementing the API is simple. The developer [requests a key](https://developers.buildingsapi.lbl.gov/hes/documentation/api-definitions) to use the API and then can access various API methods through [SOAP](http://en.wikipedia.org/wiki/SOAP) using [PHP, JAVA, or C#.NET](https://developers.buildingsapi.lbl.gov/hes/documentation/sample-client-code). The HES API is well-documented and offers many ways to customize the calculations and reports. The HES website itself uses the API to make calculations and present reports. There are also a number of third-party applications that use the API, which developers can view in the [Project Gallery](https://developers.buildingsapi.lbl.gov/hes/project-gallery).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/400-x-259-Dept-Energy-WattzOnGen-11c61e6e.jpg" alt="Ennovationz WattzOn API" %}

HES is a perfect example of using federal data and research to help citizens directly. Thanks to this API, people can save hundreds (or thousands) of dollars on their energy costs while helping the environment by lowering their carbon footprint. The only suggestion I have is to implement [JSON](http://en.wikipedia.org/wiki/JSON) for the Home Energy Saver API so that even more great energy-saving and money-saving apps can be built.

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out_ [_APIs in Government_](https://www.WHATEVER/2013/04/30/apis-in-government/) _for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via_ [_email_](mailto:William.Brantley@opm.gov)_._

**_Dr. William A. Brantley_**_, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at_ [_BillBrantley.com_](http://billbrantley.com/)_._