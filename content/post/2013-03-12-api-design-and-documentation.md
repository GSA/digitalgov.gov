---


date: 2013-03-12 12:49:20 -0400
title: 'API Design and Documentation'
summary: 'Design At their core, developers want APIs for very straightforward, pragmatic ends. You should always design your APIs and document them with the goal of making it easier for developers to use them. Doing so results in greater adoption and a healthier, more successful API. The least efficient way to support developers would be to'
authors: [gray-brooks]
categories:
  - API
  - Code
tags:
  - API
---

## Design 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/250-x-86-API-letter-blocks-23575697-Hemera-Technologies-PhotoObjects.net-Thinkstock-87667306.jpg" alt="Children's building blocks letters spelling A P I." %} 

At their core, developers want APIs for very straightforward, pragmatic ends. You should always design your APIs and document them with the goal of making it easier for developers to use them. Doing so results in greater adoption and a healthier, more successful API. The least efficient way to support developers would be to work with each interested developer individually on any question or problem that they have. Such a system would be a very inefficient use of your time as well as the developer’s. Instead, an API producer should bundle the API itself with useful and comprehensive documentation and tools such that any developer who stumbles upon the Web service can begin building with the API as easily as possible.

API design refers to the decisions that go into each of the structural and functional characteristics of the Web service itself. These include but are not limited to:

  * Protocol—What is the overarching specification used by the API?
  * Format—In what language or standard does the API return results?
  * Commands—What operations does the API support?
  * Endpoint Structure—What is the entry point to the API and the URL structure for possible commands?
  * Error Handling—How does the API respond when flawed queries are submitted?
  * Authentication—If users must authenticate in order to use the API, which system is used to manage the process?
  * Room for Growth—How is the API prepared for potential improvements or expansion in the future?

Search engines, communities such as [API–Craft](https://groups.google.com/forum/?fromgroups#!forum/api-craft), publications such as [APIEvanglist.com](http://www.apievangelist.com/) and [ProgrammableWeb.com](http://www.programmableweb.com/), and other [resources listed below](#resources) and in the [Resources and Tools section](https://digitalgov.sites.usa.gov/2013/03/12/resources-and-tools-for-apis/#recommended-reading) all offer a wealth of specific guidance on each of these design decisions. The design of an API impacts every step of a developer’s experience and several overarching lessons stand out as core principles to guide you at each step.

  * An API should be easy to learn. You may be intimately familiar with your API but need to design for other teams and outside developers who may have never seen it.
  * Your API should have clear, discrete functions. If it doesn’t, it may be too complex for a newcomer to easily digest.
  * Start with use cases. Sometimes, an API producer begins by trying to build an API for all of their data and either makes a bulky and complex API or is forced to cut corners in order to include everything. Instead, start the design process with specific use cases that you know matter most to potential developers and build sensible, straightforward APIs for those needs.
  * Use developer norms. The developer community has spoken, with a clear consensus often emerging about many design decisions. Though you should always weigh the merits on each side, when there are clear preferences of mainstream developers, it’s important to choose what the developer community prefers (not what you or your IT department might be used to).
  * Design should be common sense. Use standardized commands and common names; avoid in–house terms or custom schemas wherever possible.
  * Get feedback. Ask prospective developers what would work best for them.
  * Document, document, document! One of the most common complaints from developers is missing, incomplete, outdated, or otherwise lacking documentation.

## Documentation

APIs are a service that your agency provides. Agencies are the API producers. Developers are the APIs users, and they need good, clear documentation. The goal of an API and its documentation is to stand up a utility that helps users be as self-sufficient as possible. This frees up the API producer from providing basic user support. By providing useful and commonly requested information up front, API producers allow potential API consumers to easily prototype and build new products with less friction and with more success.

API documentation consists of a range of instructions, examples, and other resources that should facilitate developers in as many ways as possible. Documentation should explain the purpose of the API as well as provide ample guidance for using the API such that developers at all skill levels can easily and comfortably use the service.

Each API is different and may be best served by combining particular elements for the documentation package. The most common elements include an API description, authentication details, sample queries, terms of use, and a feedback mechanism, but by including as many elements from the [API Release Kit](https://digitalgov.sites.usa.gov/2013/05/16/api-release-kit/ "API Release Kit") and [/Developer Kit](https://digitalgov.sites.usa.gov/2013/05/21/developer-kit/ "/Developer Kit") as your team is able to support, you better support the full range of potential developers and encourage the greatest adoption. With each element, seek to flesh out examples, potential questions, and any other needs that a developer might have. By doing so, you will earn the attention and appreciation of developers who can then greatly expand the value of your API.

## <a name="resources"></a>Resources

  * [How To Design A Good API and Why It Matters (Slides)](http://www.youtube.com/watch?v=aAb7hSCtvGw)—Google Tech Talks
  * [Web API Design—Crafting Interfaces that Developers Love](http://info.apigee.com/Portals/62317/docs/web%20api.pdf)—Apigee
  * [RESTful API Design](https://restful-api-design.readthedocs.org/en/latest/)—ReadTheDocs.org
  * [Web API Design Cookbook](http://www.w3.org/TR/api-design/)—W3C
  * [API Design](http://mattgemmell.com/2012/05/24/api-design/)—www.MattGemmell.com
  * [API Design for Humans](http://37signals.com/svn/posts/3018-api-design-for-humans)—37Signals
  * [Top 10 Worst API Practices](http://blog.programmableweb.com/2012/08/03/top-10-api-worst-practices/)—ProgrammableWeb
  * [Thoughts For Federal Agencies About to Deploy Web APIs](http://apievangelist.com/2012/06/02/thoughts-for-federal-agencies-about-to-deploy-web-apis/)—APIEvangelist
  * [Designing Great API Docs](http://blog.parse.com/2012/01/11/designing-great-api-docs/)—Parse Blog