---


date: 2013-03-12 12:47:51 -0400
title: 'How to Make APIs&mdash;An Overview'
summary: 'After choosing a set of information or services to offer via API, some of your next steps are to plan and implement the API. You&amp;#8217;ll still need to prepare documentation, tools, and other elements that make a complete package for the API, but at the center is the actual Web service itself. In many situations,'
authors: [gray-brooks]
categories:
  - API
  - Code
tags:
  - API
  - open data
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/250-x-86-API-letter-blocks-23575697-Hemera-Technologies-PhotoObjects.net-Thinkstock-87667306.jpg" alt="Children's building blocks letters spelling A P I." %} 

After choosing a set of information or services to offer via API, some of your next steps are to plan and implement the API. You&#8217;ll still need to prepare documentation, tools, and other elements that make a complete package for the API, but at the center is the actual Web service itself. In many situations, existing IT resources or the current system operators handle this step. There are several options at this stage, each with advantages and disadvantages.

First, though, ask the following questions of the target data:

  * What kind of information is it—spreadsheet, database, or other?
  * Is the data static, added to on a regular basis, or refreshed on a regular basis?
  * What are the desired interactions that a developer might envision?
  * How does this API release fit within the agency&#8217;s digital strategy?

## The API Supply Chain

Just as an API without a wider package of documentation, tools, and resources is incomplete, so too does the API production effort require a holistic review of the supply chain for the underlying data and services. A comprehensive approach to the agency&#8217;s data ensures a more healthy and productive API initiative. Fundamentally, this means coordinating with the data stewards and agency staff who maintain and publish the information. They and other agency stakeholders should understand how APIs impact the way that the agency’s mission is promoted and its consumers served.

At its core, APIs are to serve a practical role in how the agency does its work and by working with all relevant staff, you can ensure that the work is better integrated, consumed, and maintained going forward. Staff should understand that their data will be consumed in new and innovative ways and be shown how to benefit from these new advances as well.

There are as many different ways to offer APIs as there are to build websites, but the following five methods illustrate common paths.

  1. **Convert and host a file**

One simple and straightforward way to offer agency data that exists in spreadsheet form is to convert an .xls or .csv spreadsheet file into JSON. Several open-source tools [exist](https://www.google.com/search?q=csv+to+json+open+source) but there are [also free online converters](http://stackoverflow.com/questions/662859/converting-csv-xls-to-json) that can make short work of the task. When using a manual converter, it may then be necessary to copy the results into a text editor and save as a file with a .JSON file extension. The JSON file can then be statically hosted just like any other file. Though this is a simple extra step, it has the benefit of allowing developers to more easily consume the information and build applications on top of it.

Given the ease of this method, it’s highly recommended as a good first step for individual data files that your agency publishes. However, the end result, a downloadable .JSON file, is basically an API-lite approach. It is developer friendly, but stops short of being an actual Web service that can accept queries and return results. A number of affordable online services now exist to just that end.

<ol start="2">
  <li>
    <strong>Employ an API generating tool</strong>
  </li>
</ol>

Several websites offer the same ease of use described above but with more powerful functionality. The starting point is the same. Agency staff take a piece of agency data that exists as .csv or .xls spreadsheets, upload it, choose a few descriptions and other options, and the website hosts the data file but also provides a RESTful API, along with documentation and helpful tools for consuming the API.

The Socrata toolset that powers [Data.gov](http://www.data.gov/) includes this means, such that [spreadsheets that are served through Data.gov](https://www.WHATEVER/2013/04/30/producing-apis-through-data-gov/ "Producing APIs through Data.gov") may benefit from this API access automatically. Other services such as [Socrata’s API Foundry](http://www.socrata.com/api-foundry/), [Emergent One](http://www.emergentone.com/), and [Webservius](http://www.webservius.com/corp/) go further and provide a more rich package in addition to simply standing up the API, automatically building in elements such as code samples, interactive documentation, API keys, and more. GSA&#8217;s [.gov domain](https://explore.data.gov/Federal-Government-Finances-and-Employment/Federal-Executive-Agency-Internet-Domains-as-of-04/ku4m-7ynp?) and [Data Center Consolidation](https://explore.data.gov/Federal-Government-Finances-and-Employment/Federal-Data-Center-Consolidation-Initiative-FDCCI/d5wm-4c37) APIs provide an example of this method.

These first two approaches target data that is already in a spreadsheet file. Oftentimes, the data is more complex than that.

<ol start="3">
  <li>
    <strong>Activate your database&#8217;s potential</strong>
  </li>
</ol>

Existing databases provide live, on-demand access to information that is regularly updated. Most agency systems store their underlying data in a database. Many databases have API functionality built in that can be activated with little effort. You are still required to take the generic documentation for the database API and customize it for your service. Although technically easy, it also requires close coordination with the system owners and technicians to ensure that the API can be deployed safely—that is, that the data can be exposed and that the infrastructure can support the load.

<ol start="4">
  <li>
    <strong>Build the API into the system</strong>
  </li>
</ol>

Any of your agency’s systems are capable of becoming API-enabled, though it may require using custom development to integrate the functionality. By consulting the system owners and working with the IT resources responsible for the system, it may be as straightforward as requesting that the system requirements be updated to include API access. The goal is to ensure that the data can be accessed by third parties programmatically. For systems which are currently under construction or undergoing an update, it makes sense to include this requirement in the planning stage.

<ol start="5">
  <li>
    <strong>Build an API team</strong>
  </li>
</ol>

Perhaps the most advanced method is to stand up a team that builds APIs directly. With technology such as [OData](http://www.odata.org/) or [GData](https://developers.google.com/gdata/), this team can build an API layer that floats on top of targeted data, providing a customized Web service for the data. This method sees the API as a new, independent system.

This path may offer several advantages, including a consistent, integrated API across all of the agency’s data. When contrasted against a patchwork effort, such a consolidated approach encourages greater developer adoption.

Given the increasing role of APIs in agency digital efforts, such an investment can be well worth the effort. The significant success of the [Census Bureau](http://www.census.gov/developers/), [Department of Labor](http://developer.dol.gov/), and [Department of Health and Human Services’](http://www.healthdata.gov/) API efforts serve as models for mature and fully fleshed out API production.