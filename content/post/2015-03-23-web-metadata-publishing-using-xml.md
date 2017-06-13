---


date: 2015-03-23 11:00:18 -0400
title: 'Web Metadata Publishing Using XML'
summary: 'Metadata for website content is usually managed as part of the editorial process when documents are created and published with content management systems. There may be another source for this metadata, especially in regulatory agencies\: internal databases that reference Web content in support of record keeping processes. These databases may contain public and non-public information'
authors: [bob-rand]
categories:
  - Data
  - Mobile
  - Monthly Theme
tags:
  - Content Management System
  - content models
  - data
  - Federal Register
  - metadata
  - Mobile UX Guideline 1
  - Mobile UX Guideline 6
  - open and structured content models
  - open data
  - SEC
  - U.S. Securities and Exchange Commission
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/600-x-408-Technology-Concept-Business-Chart-alexaldo-iStock-Thinkstock-497231209.jpg" alt="Technology Concept Business Chart" %} 

Metadata for website content is usually managed as part of the editorial process when documents are created and published with [content management systems](https://www.WHATEVER/2013/10/30/content-management-systems-toolkit/).

There may be another source for this metadata, especially in regulatory agencies: internal databases that reference Web content in support of record keeping processes. These databases may contain public and non-public information that were never meant to be published for public consumption. “Metadata” is not typically how the content is described.

The Securities and Exchange Commission (SEC) has recently developed two online [XML](http://en.wikipedia.org/wiki/XML "XML - Wikipedia, the free encyclopedia") products using a database sourcing approach. The content is published using an older Web technology—[Extensible Stylesheet Language Transformations (XSLT)](http://en.wikipedia.org/wiki/XSLT "XSLT - Wikipedia, the free encyclopedia"), which renders the XML as HTML in the user’s browser.

## SEC Online Docket

The SEC used data from a database that was used to track official agency releases to create an online XML version of the previously print-only [SEC Docket](http://www.sec.gov/about/sec-docket.shtml), a compilation of all materials submitted by the SEC to the Federal Register. Staff had talked for years about saving the significant time and expense involved in preparing layout pages and printing the Docket, given that all the materials referenced by each edition were already available online.

There was considerable discussion about how much of the information from the database to publish, the quality of the data, and how to remove non-public information. Some staff lobbied for a minimal approach, while others advocated using all the public metadata available from the database. We eventually decided to include all available public data, including links to the versions of the documents published in the Federal Register.

A proof of concept demonstrated that we could create an XML file containing all the metadata we needed from an Excel export of the release log database and that we could use XSLT to render the XML as HTML within a user’s browser using our normal HTML template.

The key to making the project sustainable, with weekly updates, was the development by one of our in-house staff programmers of a C# program in Visual Studio to automate the regular creation of XML files from the database.

## Administrative Proceedings Files by Case Project

Shortly after creating the Docket, our group was asked by staff to develop a new Web section to aggregate [administrative proceedings cases](http://www.sec.gov/litigation/apdocuments.shtml) around a unique integrative identifier, a file number (for example, “[3-15116](http://www.sec.gov/litigation/apdocuments/ap-3-15116.xml)”) that is assigned to all documents relating to a particular case.

The basic information for this project comes from another internal staff recordkeeping database, in this case one that is used to track SEC enforcement cases. Some data also comes from the SEC Docket. We decided again on an XML/XSLT approach for this project. As in the case of the online Docket, non-public information is removed before generating the XML. The structure is simpler than that of the Docket, but it uses the same element names.

## Notes and Lessons Learned

  * **Quality control** to correct human errors has turned out to be a significant challenge. The C# program that initially processes the data into XML also runs error-checking routines. Prior to posting each Docket issue, staff use the error reports to correct problems with the database.
  * **Removing non-public information**. This is a major and valid concern. Staff who manage internal databases may be surprised and alarmed by the idea of extracting only selected data with the purpose of publishing the “safe” portions on agency public websites. In the case of the SEC Docket and AP Case projects, there was significant incentive on both sides to find a solution.
  * **Client-side XSLT** is supported by all major browsers, but not by some mobile browsers. There is considerable discussion about the future of XSLT browser support. For us, it was a quick open source solution that seems to be working. We may move to server-side XSLT in the near future so that the XML is rendered as HTML at the server instead of at the client.
  * **XML design.** Our data design could have been better, and we are not validating against a schema, as is a best practice. However, getting our feet wet with XML has changed how we look at Web publishing and opened up new possibilities for data publishing.

_For more on the benefits of structured data, see the [Open and Structured Content Models Project](http://gsa.github.io/Open-And-Structured-Content-Models). An upcoming DigitalGov University webinar, [Where to Start with Structured Data and Content](https://www.WHATEVER/event/where-to-start-with-structured-data-and-content/), will be held on March 31st at 2 p.m. EST._ 

_**Bob Rand** is a Web developer for the U.S. Securities and Exchange Commission._