---


date: 2014-08-18 1:00:50 -0400
title: 'The Minimum Viable Building Blocks For a Federal Government API Hub'
summary: 'My name is Kin Lane, I am the API Evangelist, and a round two Presidential Innovation Fellow. I spend each day looking through the developer portals and hubs for API across the private sector. Recently I&rsquo;ve also spent time looking at 77 federal government API developer portals and 190 APIs, and after'
authors: [kin-lane]
categories:
  - API
  - Code
tags:
  - API
  - developer hub
---

<span style="color: #222222;">
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/250-x-249-Kin-Lane-bw-portal-developers.jpg" alt="250-x-249-Kin-Lane-bw-portal-developers" %}My name is Kin Lane, I am the API Evangelist, and a round two Presidential Innovation Fellow. I spend each day looking through the developer portals and hubs for API across the private sector. Recently I’ve also spent time looking at 77 federal government API developer portals and 190 APIs, and after all this review of some successful, and some not so successful APIs, you start to get an idea for what the minimum viable building blocks for an API hub in federal government should be. </span> First let’s talk about what is a developer portal or hub, because in the API space you can take two different paths when deploying your API hubs:

  * **Central Agency Developer Hub—**A single place to find all of an agency&#8217;s APIs, open data and developer resources, usually located at developer.example.gov, or within a specific folder at example.gov/developer.
  * **API Specific Developer Hub—**A single developer hub to support a specific API initiative underneath a wider organizational umbrella, which may or may not be registered and listed as part of a central agency developer hub.

Not all API owners will have access to a central agency developer area, or it may take time to publish new APIs in a central location. With this in mind, and considering other resource constraints agencies face, deploying an API with its own self-contained, API specific developer hub is an appealing solution. One approach to deploying either a central agency developer hub, or API specific developer hub, is using the social coding platform Github, powered by Github Pages, which enables any agency to deploy any type of hub, with minimal resources, using the agency wide or an individuals Github account. Once you have the type, and location of your API hub determined, you should consider what constitutes the minimal viable resources that your API consumers will need for success:

  * **Overview**—A simple, clear, and concise description of what a developer program is intended to do, with introduction to the API resources that are available.
  * **Getting Started—**Easy to follow, step by step instructions on how to get started using an API, and to take an application from idea to production with minimal friction.
  * **Self Service Registration—**Even if developers need further approval to get full access, some sort of self-service, 24/7 access to a developer area is the standard protocol for most API platforms**—**requiring developers to register, but able to get at least limited access around the clock.
  * **API Documentation—**Intuitive, simple, and up to date documentation of all API endpoints, complete with authentication details, is the standard with many APIs also providing interactive documentation using formats like Swagger or API Blueprint from Apiary.io.
  * **Code Samples & SDKs—**An openly licensed suite of code samples, libraries, and SDKs should be made available in top programming languages like PHP, Python, Ruby, JavaScript, Java, C#, and possibly leading languages like Go, for developers to put to use in their integrations.
  * **Blog—**An active blog, with RSS, provides a single communication channel that API consumers can depend on to receive updates about an API—think regular updates, rather than cutting edge blog content, when publishing.
  * **Forum—**Forums, either self-hosted by the API provider, or taking advantage of existing public forums like Stack Exchange, provide an indirect channel for developers to obtain support from the API provider, or from their community of peers.
  * **Contact Information—**A simple page, providing a list of either direct or indirect contact channels like address, phone, email, Twitter, or other social media accounts.
  * **Terms and Conditions—**Covering the legal aspects of API operations in a way that protects the agencies&#8217; interests, as well as allowing API consumers enough room to build and operate businesses around their API integrations, is a standard practice within all API developer programs.

There are other bells and whistles you can add to your hub if you have the resources, but many API pioneers like SalesForce, Amazon, Twitter and Google have established this common set of essential API building blocks over the last decade of operations, and it is something API consumers have become accustomed to. While each federal API hub may not have all the features of a modern private sector API hub, agencies need to make sure each hub has at least the minimal viable resources needed to ensure API consumer success.

_**Kin Lane** is a former [Presidential Innovation Fellow](http://www.whitehouse.gov/innovationfellows) and an API Evangelist who recently helped review federal APIs at an [API Usability Evaluation](http://18f.github.io/API-Usability-Testing/) at GSA._