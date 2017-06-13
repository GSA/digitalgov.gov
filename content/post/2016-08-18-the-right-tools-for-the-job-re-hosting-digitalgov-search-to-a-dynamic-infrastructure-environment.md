---


date: 2016-08-18 10:00:29 -0400
title: 'The Right Tools for the Job\: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment'
summary: 'This is the first post of a 5-part series. DigitalGov Search&nbsp;is a commercial-grade search engine provided as a shared-service by the United States General Services Administration. We power about 2,300 search configurations for hundreds of federal, state, and local government agencies. Using our platform, agencies can easily configure a search experience for the public that'
authors: [dmccleskey]
categories:
  - Managing Digital
  - Monthly Theme
  - Our Work
  - 'Strategy &amp; Policy'
tags:
  - aws
  - DigitalGov Search
  - infrastructure
---

> _This is the first post of a 5-part series._

[DigitalGov Search](http://search.WHATEVER) is a commercial-grade search engine provided as a shared-service by the United States [General Services Administration](http://www.gsa.gov/). We power about 2,300 search configurations for hundreds of federal, state, and local government agencies. Using our platform, agencies can easily configure a search experience for the public that brings together resources from across their many publishing platforms: websites, blogs and feeds, social media, and government-specific resources like rules and notices from the Federal Register, and posts from USAJobs.

Customers include the [White House](https://search.whitehouse.gov/search?query=bo+and+sunny&op=Search&affiliate=wh), [12 Department-level websites](http://search.WHATEVER/customers.html), all branches of the military, the [Internal Revenue Service](http://find.irs.gov/search?utf8=%E2%9C%93&affiliate=irs&query=tax+extension&commit=Search), [NASA](http://nasasearch.nasa.gov/search?utf8=%E2%9C%93&affiliate=nasa&query=juno), and many more. We partner with agencies continually to improve the public’s ability to find the information they need on government websites, and streamline agency staff workflows for managing their searches. Launched originally as the [search box on FirstGov.gov](http://web.archive.org/web/20001109105200/http://www.firstgov.gov), we now serve 260 million queries a year across the government space, with peak throughput over 59 transactions per second. Our service is a big, mature system. Our move to a new infrastructure had to be perfect, and invisible.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-330-White-House-DG-Search-menu.jpg" alt="Screen capture from a Kindle device of DigitalGov Search on the White House website." %}

In 2016, we began migrating the DigitalGov Search infrastructure to Amazon Web Services’ (AWS) Elastic Compute Cloud (EC2). Given the tight window of opportunity – seven months from project launch to migration – and the velocity constraints of our small team size, we elected to forklift the application into the new infrastructure as-is, and leave for a subsequent phase any consideration of refactoring to adopt additional modern practices like containerization. Even so, we were facing a challenging combination of requirements:

  1. The DigitalGov Search EC2 infrastructure needs to support the addition, removal, or replacement of servers on-the-fly without interruption of service, at a significant reduction of costs for the government;
  2. DigitalGov Search customers – government departments and agencies – need the option to direct their users to our results page “masked” with their own domain name, such as search.justice.gov, rather than the default domain of search.usa.gov;
  3. Customers using domain masks need those domains to be served over https; and
  4. The DNS for all search.usa.gov records are required to be signed by DNSSEC.

Meeting requirements 1, 2, and 3 together would be straightforward. Meeting requirements 2, 3, and 4 together would also have been straightforward. Satisfying the first and last requirements together required fancy footwork, a new open-source software feature and a two-tier DNS server architecture that we’ll describe in detail in this series of posts.

While this series of posts will discuss the requirements above separately, the build and migration was handled in three phases:

  1. Insource our content delivery network (CDN) and web application firewall (WAF), initially routing traffic to our old data centers, but still reducing monthly costs significantly
  2. Build our servers and application within AWS
  3. Cut over our read-only data center, allow dust to settle; then cut over our read-write data center, allow dust to settle; shut off old infrastructure

If you have questions or would like to discuss particulars, [we would love to hear from you](mailto:search@support.WHATEVER).

<h3 id="series" style="padding-top: 50px">
  <em>This is the first post in a five part series. Stay tuned for the following posts:</em>
</h3>

  * [Quality, Speed, and Lower Costs: Yes, You Can Have It All](https://www.WHATEVER/2016/09/02/quality-speed-and-lower-costs-yes-you-can-have-it-all/)
  * [A Domain by Any Other Name: CNAMES, Wildcard Records and Another Level of Indirection](https://www.WHATEVER/2016/09/06/a-domain-by-any-other-name-cnames-wildcard-records-and-another-level-of-indirection/)
  * [Let’s Encrypt those CNAMES, Shall We?](https://www.WHATEVER/2016/09/07/lets-encrypt-those-cnames-shall-we/)
  * [DNSSEC vs. Elastic Load Balancers: the Zone Apex Problem](https://www.WHATEVER/2016/09/12/dnssec-vs-elastic-load-balancers-the-zone-apex-problem/)