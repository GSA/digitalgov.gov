---


date: 2013-03-12 12:24:59 -0400
title: 'API Basics'
summary: 'Common Technical Choices Protocol API protocol is the set of rules that govern how an API functions. The protocol outlines the structure and definitions of the API. The two common forms are REST and SOAP. REST&nbsp;is the dominant choice for API protocol because it uses the http protocol that powers the Web. REST supports more'
authors: [gray-brooks]
categories:
  - API
  - Code
tags:
  - API
---

## Common Technical Choices 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/250-x-86-API-letter-blocks-23575697-Hemera-Technologies-PhotoObjects.net-Thinkstock-87667306.jpg" alt="Children's building blocks letters spelling A P I." %} 

### Protocol

API protocol is the set of rules that govern how an API functions. The protocol outlines the structure and definitions of the API. The two common forms are REST and SOAP.

[REST](http://en.wikipedia.org/wiki/Representational_state_transfer) is the dominant choice for API protocol because it uses the http protocol that powers the Web. REST supports more data formats, requires much simpler documentation, has better performance, can be cached, and is faster to use. REST uses universal commands such as GET (to retrieve information), POST (to submit information), PUT (to update information), and DELETE (to delete information) to provide the logic that powers the API.

[SOAP](http://en.wikipedia.org/wiki/SOAP) has its own protocol and logic. SOAP may be a good choice for some applications that may require transaction confirmation. With SOAP, the structure and definitions are decided by the API creator and may vary widely.

### Format

_​_API formats are the schema that developers use to interact with an API&#8217;s protocol. [XML](http://en.wikipedia.org/wiki/XML) and [JSON](http://en.wikipedia.org/wiki/JSON) are the most common choices; each has different benefits.

XML can be more human-readable and may offer better structure in some circumstances. JSON is usually lighter, faster, more functional than XML, and better integrated into modern code languages.

Many APIs offer both as choices for developers, which may not add much additional work. If your agency can only make one format available, JSON is likely the more productive choice.

### Endpoints

An API’s endpoint is the basic entry point to a Web service, oftentimes a URL that can be customized to accept different queries. Many organizations begin by creating individual APIs for each data set or service. Over time, best practices and efficiency promote consolidation to a single API endpoint that offers different material depending on which set is queried.

The advantage to a single API endpoint is that developers can build applications more easily because they do not need to learn how to use multiple APIs. If your agency is just beginning its API efforts, starting with one consolidated API that you build out instead of creating a new API for each service avoids the work of consolidating APIs in the future.

### API Keys

_​_API keys are an optional functionality that some producers use to control access to their API, identify who is consuming the API, and gather analytics from the API. API key management can be maintained through lightweight, open source methods that allow users to register and acquire one automatically. The API producer can then monitor and manage API usage rates. If a user violates the API’s Terms of Service, it is possible to then block their API key.

Requiring API keys can be a barrier to developers accessing and using your API. Agencies need to balance the management advantages against adoption concerns when deciding whether or not to require keys.

### Analytics

_​_It is very important to understand how an API is being used. Analytics can be derived through one of several methods—an API key, server logs, or through the use of API management service providers. Analytics can help identify problems that developers may be experiencing as well as solutions to make their user experience better. Learn more about [API analytics](https://digitalgov.sites.usa.gov/2013/03/12/api-analytics/ "API Analytics").

### Documentation

_​_API [documentation](https://digitalgov.sites.usa.gov/2013/03/12/api-design-and-documentation/ "API Design and Documentation") is the page(s) that explain how an API works and conveys any other information, tools, or resources that may be of use to a prospective developer. Learn more about [API design and documentation](https://digitalgov.sites.usa.gov/2013/03/12/api-design-and-documentation/ "API Design and Documentation").

<h2 style="text-align: center">
  Common Practical Issues
</h2>

### Security

_​_Just like a new section of a website, so should a new API receive a security scan from an agency’s IT Security team. Oftentimes, especially with RESTful APIs, they can use the same tools to scan for vulnerabilities. When the API is read-only, the review is often much simpler, but the technology to secure and support read-write APIs is very mature and readily available. For information and services with which the public already interacts, there shouldn’t be any compelling security reason that prevents API generation. Similarly, for internal-only APIs, the methods of ensuring that they stay protected within the network are well-documented. Learn more about [API security](https://digitalgov.sites.usa.gov/2013/07/29/api-security/ "API Security").

### Legal

_​_An API&#8217;s terms of service exists to express any guidance or restriction for the API and to address any open legal issues such as attribution, modification, false representation, right to limit, right to terminate, and indemnification. Many of these issues may already be represented on the agency’s page for website policies, but any questions should be discussed with the agency’s general counsel. This is a particularly good area to review the terms of service of other government APIs and consider re-using their material instead of starting from scratch.