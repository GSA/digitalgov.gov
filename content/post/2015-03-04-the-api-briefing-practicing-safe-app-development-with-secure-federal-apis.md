---


date: 2015-03-04 12:10:13 -0400
title: 'The API Briefing\: Practicing Safe App Development with Secure Federal APIs'
summary: ' When browsing the various APIs offered by the federal government, you may have noticed that developers need to sign up for an API key. You may have also noticed that the documentation tells app developers to access the API using specified methods. Along with these two requirements, federal API creators have'
authors: [bbrantley]
categories:
  - API
tags:
  - API
  - API keys
  - security
  - U.S. Department of Agriculture
  - USDA
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/FDAgov-API-Key.jpg" alt="FDAgov-API-Key" %}

When browsing the various APIs offered by the federal government, you may have noticed that developers need to [sign up for an API key](https://open.fda.gov/api/reference/#authentication). You may have also noticed that the documentation tells app developers to access the API using specified methods. Along with these two requirements, federal API creators have several ways to provide secure APIs for app developers and the general public. In this posting, I will describe how federal APIs are kept secure.

To understand API security, you must first understand what a “session” is. When a user (through a browser or an app) connects to an API and information is exchanged, this is known as a session. A session lasts as long as the connection lasts. An analogy I like to use is going through a drive-thru. When a customer drives up to the menu board and orders, the customer has initiated a session. The clerk takes the order and then prepares the food. The food is delivered to the customer who then pays for food. The drive-thru session is over when the customer has driven off.

Sessions are either “stateful” or “stateless.” If one of the parties to a session needs to keep track of the session information, then the session is stateful. In the drive-thru example, the clerk needs to keep the order information so that he or she can tell the kitchen what to cook and how much to charge the customer. This is why the drive-thru session is stateful. If no information is being kept between requests during a session, then the session is stateless. Buying food and drink from a vending machine is stateless.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/FDAgov-API-authentication.jpg" alt="FDAgov-API-authentication" %}

&nbsp;

Authenticating who is interacting with an API during a session is important to the security of the API. One way to be secure is to use a username and password combination, but many API providers prefer to use API keys. API keys can be longer than passwords and much more random so that it is very difficult for a third party to spoof an API key. API keys also make it easier to keep the API session stateless. A stateful API session that uses the username and password combination would have to store the username and password making it riskier that the security information would be discovered.

Another security practice is to use the appropriate REpresentational State Transfer (REST) verb. For example, an API provider can require the developer only to use “POST” which does not display information on the Uniform Request Locator (URL) request like “GET” does. For example, if the developer uses GET to send the API key information, it would look like this: http://federalapi.gov/action?apikey=a53f435643de32. Now, anyone can use the same API key. It would be like if the developer used GET to transmit a credit card number and expiration date.

A fundamental security practice is to limit the kind of methods that an API provides. For example, an API can be read only whereby the developer can only view information but cannot change the information in the API’s data in any way. For example, the <a href="http://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html" target="_blank">U.S. Department of Agriculture’s Farmers Market API</a> allows developers to request data on farmers markets but developers can put in new data or change any of the entries. If an API allows “write” access, the API creator can still limit what information will be written to the API and require approval before the data is altered.

There are more methods to secure APIs. As APIs become more used and vital to applications, developers need to verify that API information is accurate. Using federal APIs helps build trust in apps because federal API creators take great care in building incredibly useful and highly secure APIs.

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out <a href="https://www.WHATEVER/2013/04/30/apis-in-government/" target="_blank">APIs in Government</a> for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via <a href="mailto:%20bill.brantley@wdc.usda.gov" target="_blank">email</a>._

_Dr. William A. Brantley is the HRIS Branch Chief in the USDA’s Rural Development Human Resources Office. You can find out more about his non-federal work in this space at <a href="http://billbrantley.com/" target="_blank">BillBrantley.com</a>. All opinions are his own and do not reflect the opinions of the USDA and GSA._