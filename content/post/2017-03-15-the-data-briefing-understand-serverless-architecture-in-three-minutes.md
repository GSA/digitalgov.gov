---


date: 2017-03-15 11:02:43 -0400
title: 'The Data Briefing\: Understand Serverless Architecture in Three Minutes'
summary: 'You may have heard of &ldquo;serverless architecture&rdquo; or Amazon Web Services (AWS) Lambda product and wondered what is unique about this new buzzword. As with many new digital cloud technologies, serverless architecture could mean two things. It may be applications that are built using third-party cloud applications. Or serverless architectures could be pieces of code'
authors: [bbrantley]
categories:
  - Data
  - Managing Digital
tags:
  - architecture
  - cloud
  - data
  - The Data Briefing
---

You may have heard of “serverless architecture” or Amazon Web Services (AWS) Lambda product and wondered what is unique about this new buzzword. As with many new digital cloud technologies, serverless architecture could mean two things. It may be applications that are built using third-party cloud applications. Or serverless architectures could be pieces of code that live in the cloud and only run when called on by a user: event-driven functions. One thing that is common to both definitions is that there are servers behind the serverless architectures.

To understand this, think about the basic client-server model. You navigate to a web page and do something such as buy from an online store. The web page (“client”) contacts a server to supply the information about the products, manage the shopping cart, and processes your credit card payment. The server is dedicated to that client and is always on waiting for the next transaction no matter if the server has to wait five seconds, five minutes, or five days for the next click. 
{% include image/full-width.html img="https://www.WHATEVER/files/2017/03/600-x-407-3D-rendering-of-cloud-computing-system-icon-on-technology-background-monsitj-iStock-Thinkstock-625397090.jpg" alt="3D rendering of cloud computing system and various tech icons." %} 

In the second definition of serverless architecture, the server appears when the click happens. A developer creates the functions that handle displaying the products, manages shopping carts, and processes payments. These pieces of code live in the cloud and are only invoked when a client web page calls for the code. Invoking the piece of code is known as an “event.” When the event happens, the cloud application that manages the pieces of code instantly activates the virtual server or servers needed to support the piece of code. These could be application servers and database servers; whatever the code needs at that time. When the event is over, the virtual server(s) are shut down and disappear back into the cloud.

## What are the advantages of serverless architecture?

  1. You only pay when the pieces of code are activated. You do not have to pay for an always-on server that may sit for long periods of time using power and resources without any user activity.
  2. It is very easy to handle sudden demands in user activity. Let’s say that you have a promotion and suddenly, everyone wants to buy your products. It is easy for the managing cloud application to create additional virtual servers to handle the events.
  3. Updating applications are near-instantaneous by uploading a new piece of code into the cloud. Event-driven applications will immediately use the new code.

Serverless architecture is still evolving, and I expect to see many new developments as more developers explore event-driven applications. [Expect to see the federal government along with other governments explore the possibilities of serverless architecture in delivering government services to the American public](http://www.govtech.com/opinion/Serverless-Computing-Is-a-Growing-Trend-Heres-What-You-Need-to-Know.html).

_AWS Lambda and Amazon Web Services are used for illustrative purposes and do not imply endorsement by the U.S. federal government or any specific federal agency._

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends. Visit this blog every week to learn how data is transforming government and improving government services for the American people. If you have ideas for a topic or have questions about government data, please [contact me via email](mailto:William.Brantley@uspto.gov?subject=The Data Briefing)._

_[Dr. William Brantley](https://www.WHATEVER/author/bbrantley/) is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. All opinions are his own and do not reflect the opinions of the USPTO or GSA._