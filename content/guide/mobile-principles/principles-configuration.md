---
slug: configuration
date: 2019-02-12 12:30:00 -0500
title: 'Properly Configure the Server'
summary: 'Week seven of our series, Eight Principles of Mobile-Friendliness, covers configuring servers to optimize response time.'
guide: mobile-principles

aliases:
  - /resources/mobile/principles/configuration
---

Welcome to Principle 7!

Like any piece of technology, a web server needs to be tuned for peak performance. While mobile devices continue to improve generation after generation, if the server at the heart of your site is not optimally configured, it may deliver a suboptimal experience to your users. Such poor performance may negatively impact the usability of your site and can be detected using Google’s [Mobile Friendly Test](https://search.google.com/test/mobile-friendly) tool, [DigitalDashboard.gov](https://www.digitaldashboard.gov/), or the [Information Technology & Innovation Foundation (ITIF) Benchmarking Report](https://itif.org/publications/2017/03/08/benchmarking-us-government-websites).

## Improve Server Response Time

### Ideally, server response time should be less than 200 ms (milliseconds)

Server response time is the average amount of time it takes for a server to respond to a browser request. It is a measure of how long it takes to load the necessary HTML to begin rendering the page, which reduces the network latency between Your browser and your server.

### Suggestions for “tuning” your server

There are many things that may slow down your server’s response. Optimization of [hardware and drivers, OS and its TCP/IP stack, and library and application-level tuning](https://blogs.dropbox.com/tech/2017/09/optimizing-web-servers-for-high-throughput-and-low-latency/) should be considered to improve your server's response time. The first step is to [measure server performance metrics](https://www.monitis.com/blog/essential-server-performance-metrics-you-should-know-but-were-reluctant-to-ask/). Then, consult your network and server administrators for their thought for how to address the challenge, and finally, continue to monitor the system.

The following are some (not all; there are _many_ more) key impacts to server performance to consider assessing:

1) **Website Resource Usage** <br />More efficient webpages use fewer resources allowing the web page to be served up quicker.<br /><br />**Reduce Server Trips** - Each thing a page has to do in order for it to render adds overhead. The average page likely loads several stylesheets, scripts, and other resources (like images) from your own server. Each trip between the site and the server takes time, and there may be ways to reduce the number of trips. To find out how many requests your webpage is making, you can use the [Varvy Page Request Tool](https://varvy.com/tools/requests/) which will tell you how many resources it is using for each page load.<br /><br />**Reduce the Page Weight** – Fewer resources required to render a page means a faster rendering of that page. Reduce the size and amount of resources required by combining and minifying where possible, and optimizing CSS and JavaScript code by embedding it and running it inline. See [Principle 5 - Conserve Resources, Recycle When Possible](https://digital.gov/resources/mobile/principles/cache/) and [Principle 6 - The Smaller the Better, When It Comes to Page Resources!](https://digital.gov/resources/mobile/principles/optimize-minify-compression/) to go deeper in to making your site perform better.

2) **Web Server Software** <br />Changing your web server software or configuration may improve server response time (again, consult your network and server administrators). There are many types of web server software, including: Apache, Nginx, and Litespeed. No matter what web server software you are using, it should be optimized for your own needs. However, server optimization and tuning can be a challenge— in [How to Optimize and Speed Up Your Server by More Than 20%](https://bobcares.com/blog/how-to-increase-your-server-speed/), Hamish Oscar Lawrence recommends that one starts by tuning the following nine areas:  <br /><br /> - Enable caching <br /> - Setup a fast reverse proxy <br /> - Choose the right application server <br /> - Fine tune your web server once a month <br /> - Turn on HTTP/2 <br /> - Defragment your database tables & optimize server settings <br /> - Fix your DNS query speed <br /> - Trim down your site’s critical rendering path <br /> - Disable resource intensive services <br /><br />Also, if you are using a [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN), check to make sure it is configured properly. If it is configured to store your files in different locations around the world, a CDN will allow users all over the world to see your pages faster because they are receiving files closer to their physical location.

3) **Website Traffic** <br />The more traffic a website gets, the more server resources are required. A website that is quick on initial deployment may become slow over time as traffic increases. This is why continuing monitoring is required. <br /><br />Each situation and configuration is unique, so you may need to bring your network guys in to help.

## References

- Essential Server Performance Metrics you should know, but were reluctant to ask | http://www.monitis.com/blog/essential-server-performance-metrics-you-should-know-but-were-reluctant-to-ask/
- How to Optimize and Speed Up Your Server by More Than 20 Percent | https://bobcares.com/blog/how-to-increase-your-server-speed/
- Improve Server Response Time | https://developers.google.com/speed/docs/insights/Server
- Optimizing web servers for high throughput and low latency | https://blogs.dropbox.com/tech/2017/09/optimizing-web-servers-for-high-throughput-and-low-latency/
- Server Response Time | https://varvy.com/pagespeed/improve-server-response.html
- Page Speed: Improve Server Response Time | https://gtmetrix.com/improve-server-response-time.html
