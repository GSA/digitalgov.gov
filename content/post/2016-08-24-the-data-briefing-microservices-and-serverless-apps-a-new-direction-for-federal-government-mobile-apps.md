---


date: 2016-08-24 10:00:00 -0400
title: 'The Data Briefing\: Microservices and Serverless Apps &mdash; A New Direction for Federal Government Mobile Apps?'
summary: 'Continuing from last week&rsquo;s column on DevOps and containers, I will explain two other hot trends in IT &mdash; microservices and serverless apps. For those who want official federal government guidance, the National Institute of Standards and Technology (NIST) has released a draft special publication on microservices, application containers, and system virtual machines (PDF, 660'
authors: [bbrantley]
categories:
  - API
  - Data
  - Mobile
tags:
  - data
  - mobile
  - mobile apps
  - National Institute of Standards and Technology
  - NIST
  - The Data Briefing
---

Continuing from last week’s column on [DevOps and containers](https://www.WHATEVER/2016/08/17/the-data-briefing-devops-and-containers-and-why-they-are-important-to-transforming-federal-government-it/), I will explain two other hot trends in IT — microservices and serverless apps. For those who want official federal government guidance, the National Institute of Standards and Technology (NIST) has released a draft special publication on microservices, application containers, and system virtual machines ([PDF](http://csrc.nist.gov/publications/drafts/800-180/sp800-180_draft.pdf), 660 kb, 12 pages, February 2016). 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-324-Differences-between-System-Virtual-Machines-and-Application-Containers.jpg" %} 

I wrote about [microservices and containers](https://www.WHATEVER/2015/02/11/the-api-briefing-two-api-trends-to-watch-in-2015-microservices-and-containers/) in February 2015 as two API* trends to watch. Both containers and microservices have become widely adopted, although there are some who argue that containers will quickly give way to serverless applications. To understand the transition from containers to serverless apps, let me first explain microservices and how they work.

Think about a restaurant. When you first enter the restaurant, a host or hostess will seat you. The host or hostess is the first microservice because his or her function is to determine if there is enough room to seat you in the restaurant. If there is enough room, then the next function is to seat you. There are other duties for the host or hostess, but these are the two major functions.

Next, another microservice, the server, visits your table to take the order and transmit it to the kitchen. The server also delivers the food to your table when the kitchen has finished preparing your food. The kitchen is also composed of several microservices such as the sous chef, prep cooks, dishwashers, and other kitchen personnel. What makes these microservices work is they are constantly communicating with each other. The microservices are also loosely coupled with each other. That means, if the dishwasher is not present that night, the other microservices can still function (although another microservice may perform the dishwashing function that night).

For a more technical explanation of microservices, this is a good [introductory video](https://www.youtube.com/watch?v=eDjZRP56HTg).

Microservices can run on servers whether the server is a physical machine or a virtual machine. Microservices also run well on containers because the containers contain enough server functionality for the microservice to still function. However, microservices developers are moving to the serverless model. The main reason is that going serverless means that developers need not worry about setting up and maintaining a server or container to run the microservice. Serverless does not mean there are no servers. Servers will still be used, but the developer can let the server handle itself while he or she concentrates on building the microservice. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-441-Cloud-Computing-Collage-Color-mikiekwoods-iStock-Thinkstock-158222053.jpg" alt="Colorful collage of cloud computing apps." %} 

Major cloud hosting companies offer serverless environments for microservices developers. An app developer can create a front-end for an application that uses a collection of microservices to provide functions. The advantages are that microservices can be mixed and matched to handle unique customer demands. There may be a federal government mobile app that handles vacationing at the U.S. national parks. The mobile app uses one microservice to provide lodging information while another app handles reservations for special events. If the user is physically challenged and requires special accommodations, the mobile app can find and incorporate the necessary microservices to allow the physically challenged user to complete transactions.

Microservices and serverless apps offer a great opportunity for federal agencies to collaborate with each other to build citizen-centered mobile apps. Each agency can concentrate on building microservices that are specific to the data assets that each agency possesses. The Census Bureau can create a good set of census data microservices while the Bureau of Labor Statistics (BLS) can create microservices from BLS data. These microservices can be blended into a mobile app. The mobile app can also be configured if the user wants to mix in Department of Veterans Affairs data. These federal government mobile apps can be truly responsive to user needs and help agencies better serve the American public.

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out [APIs in Government](https://www.WHATEVER/2013/04/30/apis-in-government/) for more information._

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends. Visit this blog every week to learn how data is transforming government and improving government services for the American people. If you have ideas for a topic or have questions about government data, please contact me via [email](mailto:bill@billbrantley.com)._

_Dr. William Brantley is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. You can find out more about his personal work in open data, analytics, and related topics at [BillBrantley.com](http://billbrantley.com). All opinions are his own and do not reflect the opinions of the USPTO or GSA._