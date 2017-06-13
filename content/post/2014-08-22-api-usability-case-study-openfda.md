---


date: 2014-08-22 9:32:53 -0400
title: 'API Usability Case Study\: openFDA'
summary: 'The API Usability Program brings together developers from agency APIs and the private sector to evaluate how the API can be improved to be more user friendly. Sean Herron of 18F, who was a key member of the openFDA developer team, shared with us some of the major insights gained from this latest API usability session.'
authors: [georgia-gallavin]
categories:
  - API
  - Design
  - 'User Testing &amp; Research'
  - UX
tags:
  - API
  - DigitalGov User Experience Program
  - FDA
  - U.S. Food and Drug Administration
  - usability testing
---

Last March, the openFDA team shared their [still-in-progress API](https://open.fda.gov/drug/event/) to potential users as part of the U.S. General Services Administration (GSA)&#8217;s [API Usability Program](http://18f.github.io/API-Usability-Testing/). FDA created [openFDA](https://open.fda.gov/) to allow researchers and developers to search their vast trove of public data, including information about adverse events (reports of undesirable experiences associated with the use of a medical product in a patient) submitted to the agency.

The API Usability Program brings together developers from agency APIs and the private sector to evaluate how the API can be improved to be more user friendly. Sean Herron of 18F, who was a key member of the openFDA developer team, shared with us some of the major insights gained from this latest API usability session.

### 1. Include Interactive Documentation

While many API documentation pages only include static links or screenshots of sample queries, the openFDA documentation includes an interactive tool, which allows users to search for data and see results in real time. Dubbed the “API Explorer,” it lets users test out the API within a console, and helps to clarify the different components of a query. It’s a safe space for potential users to play with the possibilities of what openFDA data has to offer.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/API-Explorer-with-title.gif" alt="API Explorer with title" %}

The API Explorer was originally included as a draft idea that could potentially be included on the final documentation. As the response was so overwhelmingly positive, the team decided to make it a central focus of the publicly-released version. In order to improve the readability of the results, a more user-friendly interface was created that made it even easier to parse and understand the structure of the openFDA results.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/600-x-125-API-UX-syntax-highlighting.jpg" alt="600-x-125-API-UX-syntax-highlighting" %}

### 2. Support Encryption

HTTPS/SSL are [cryptographic protocols](http://en.wikipedia.org/wiki/Transport_Layer_Security) that enable secure encrypted communications from websites containing sensitive information (such as banks, health insurance providers, or anywhere you send a username and password) to your computer. Most websites that are “read-only” (meaning you don’t share sensitive information with them) traditionally haven’t supported SSL. Although openFDA doesn’t require users to share any sensitive information to access the data, developers expressed a strong desire to have SSL supported at all times. In particular, by supporting SSL, it&#8217;s much easier to include openFDA data from other SSL-using websites, ensuring developers knew that openFDA was an official trusted source, and helps protect users from having their queries snooped on by malicious actors (such as a WiFi hotspot at a coffee shop that has been hacked).

### 3. Clarify Terms and Provide Consistent Formatting

As with any digital product, design consistency and easy-to-understand wording are essential to a usable interface. APIs are no exception.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/600-x-150-search-count-screenshot.jpg" alt="600-x-150-search count-screenshot" %}

Evaluators noted several areas of the documentation that needed clarification. In particular, the difference between two parameters in the API, “search” and “count,” were initially unclear. To help illustrate the difference, openFDA developers gave a description of each and supplied an example to illustrate how to use them in a search for data.

An example of the iterative development methodology of openFDA, some of the feedback they received during the evaluation was fixed on the spot! When a discrepancy was discovered between the date format of existing documentation and the returned data—the documentation represented the date with hyphens, while the results did not—it was corrected right there, during the session, to ensure consistency in data representation.

Although the usability session was conducted at a very early stage in the development process, the openFDA team did not end their testing there. The benefits of testing early and often were made clear, and this API usability evaluation served as inspiration to open up the platform to more developer testing. The beta version of openFDA was released to the public on June 2 of this year and the agency continues to work on incorporating additional data sets for future use.

_**Georgia Gallavin** is in her last semester at The New School in New York City, earning an MA in Media Studies. She is interning with the [DigitalGov User Experience Program](https://www.WHATEVER/resources/digitalgov-user-experience-program/ "DigitalGov User Experience Program") at GSA this summer._