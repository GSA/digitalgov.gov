---


date: 2015-03-31 10:38:06 -0400
title: 'Gather Your Agency&amp;#8217;s Public Data with Let Me Get That Data for You'
summary: 'In case you missed it, U.S. Open Data recently launched a tool called\: Let Me Get That Data For You (LMGTDY). The name is&nbsp;a play on the very funny Let Me Google That For You website.  How LMGTDFY works Let Me Get That Data For You searches any website for data'
authors: [rebecca-williams]
categories:
  - Code
  - Data
  - Monthly Theme
tags:
  - open data
---

In case you missed it, U.S. Open Data [recently launched a tool](https://usopendata.org/2015/02/18/lmgtdfy/) called: <a href="http://lmgtdfy.usopendata.org/" target="_blank">Let Me Get That Data For You (LMGTDY)</a>. The name is a play on the very funny <a href="http://lmgtfy.com/" target="_blank">Let Me Google That For You</a> website.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/Screen-Shot-2015-03-23-at-6.04.24-PM-669x400.png" alt="screenshotofNRELdataserarch" %}


## How LMGTDFY works

Let Me Get That Data For You searches any website for data in machine-readable formats and provides a list. Here is U.S. Open Data&#8217;s background reasoning for creating this tool:

> When government agencies create an open data repository, they need to start by [inventorying the data that the agency is already publishing on their website](http://how-to.usopendata.org/basics/inventorying-data.html). This is a laborious process. It means searching their own site with a query like this:
> 
>     site:example.gov filetype:csv OR filetype:xls OR filetype:json
>     
> 
> Then they have to read through all of the results, download all of the files, and create a spreadsheet that they can load into their repository. It’s a lot of work, and as a result it too often goes undone, resulting in a data repository that doesn’t actually contain all of that agency&#8217;s data.
> 
> Realizing that this was a common problem, we hired Silicon Valley Software Group to create a tool to automate the inventorying process. We worked with Dan Schultz and Ted Han, who created a system built on [Django](https://www.djangoproject.com/) and [Celery](http://www.celeryproject.org/), using Microsoft’s great [Bing Search API](https://datamarket.azure.com/dataset/bing/search) as its data source. The result is a free, installable tool, which produces a CSV file that lists all CSV, XML, JSON, XLS, XLSX, XML, and Shapefiles found on a given domain name.

<div>
  <p>
    The results were formerly limited to 300 files due to <a href="https://github.com/opendata/lmgtdfy/issues/26">the cost of querying the Bing API</a>, but due to a donation by Microsoft on March 23, 2015, the tool can currently return <a href="https://twitter.com/opendata/status/580117534583713793">2,000 files</a>. Moreover, should an agency want to expand the query parameters: the code behind the site is <a href="https://github.com/opendata/lmgtdfy">all open source</a>.
  </p>
  
  <h2>
    Use LMGTFY to vet your Public Data Listing
  </h2>
  
  <p>
    The <a href="https://project-open-data.cio.gov/policy-memo/">US Federal Open Data Policy</a> requires CFO-Act agencies to catalog all of their data in Enterprise Data Inventories. Tools like Let Me Get That Data For You and <a href="https://usopendata.org/2014/05/23/municipal-data/">Google&#8217;s Advanced Search</a> (e.g. search <a href="https://www.google.com/search?as_q=&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=gsa.gov&as_occt=any&safe=images&tbs=&as_filetype=xls&as_rights=#as_qdr=all&q=site:gsa.gov+filetype:xls">by domain and by file type</a>) and searching across shared drives by <a href="http://windows.microsoft.com/en-us/windows7/advanced-tips-for-searching-in-windows">file type</a> can help agencies make sure that their required Enterprise Data Inventories are truly comprehensive.
  </p>
</div>