---


date: 2016-09-02 10:00:42 -0400
title: 'Quality, Speed, and Lower Costs\: Yes, You Can Have It All'
summary: 'This is post 2 in the 5-part series The Right Tools for the Job\: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment. The last major infrastructure upgrade that&nbsp;DigitalGov Search had was in 2010. Not only has technology evolved significantly since then, but so have business models for right-sizing costs. Moving to Amazon Web Services (AWS)'
authors: [dmccleskey, nick-marden]
categories:
  - Code
  - Data
  - Managing Digital
  - Monthly Theme
  - Our Work
  - 'Strategy &amp; Policy'
tags:
  - DigitalGov Search
  - infrastructure
---

_This is post 2 in the 5-part series [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)._

The last major infrastructure upgrade that [DigitalGov Search](http://search.WHATEVER) had was in 2010. Not only has technology evolved significantly since then, but so have business models for right-sizing costs. Moving to Amazon Web Services (AWS) infrastructure allowed us to improve reliability by creating self-healing servers and distributing the service across four physically isolated datacenters, and reduce datacenter costs by 40% per month — no longer do we have to pay for peak throughput capacity overnight, on weekends, or during other predictably low-traffic periods.

We were also able to reduce our CDN costs to almost zero by insourcing the management of our content delivery network (CDN)/web application firewall (WAF). By itself this reduced our total costs by almost 50 percent, as our CDN/WAF service had cost almost the same amount as our hosting provider.

In the prior DigitalGov Search datacenters — one in Chicago and one in Virginia — we had pools of high-powered, physical Dell &#8220;pizza box&#8221; servers running a variety of services in a composition that had been tuned to observed traffic patterns:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/543-x-561-old\_datacenter\_network_diagram.jpg" alt="A diagram of the old data center network." %}

Services had been distributed opportunistically across the servers over time. We made it a primary goal of our new architecture to separate each of our services by _role_, and to build flexible pools for each role that could be scaled up or down as demand increased or decreased for each service. This sounds great on the drawing board, but to build robust, role-specific deployment recipes for multiple applications and services would be time-intensive and expensive.

## AWS OpsWorks (and Chef) to the Rescue

The DigitalGov Search infrastructure is fortunate because it is comprised of applications that have very well understood deployment practices:

  * usasearch: The core Rails 3.x application that serves search engine results pages (SERPs) and provides customer administration tools
  * search_consumer: A NodeJS application that uses the usasearch API endpoints to render a new generation of DigitalGov Search SERPs
  * [i14y](https://github.com/gsa/i14y): A Rails 4.x application that allows government agencies to index their own documents via API for use in their DigitalGov Search results
  * [asis](https://github.com/gsa/asis): The Advanced Social Image Search Rails 4.x application that indexes social images from Flickr, Instagram, and RSS feeds for inclusion in <tt>search.usa.gov</tt> SERP results
  * [jobs_api](https://github.com/gsa/jobs_api): The DigitalGov Search Jobs API Rails 3.x application that allows users to search government job listings
  * [govt-urls.usa.gov](http://govt-urls.usa.gov/tematres): A [Tematres](https://sourceforge.net/projects/tematres/) PHP application for managing a dataset of non-.gov and .mil URLs belonging to federal, state, and local agencies
  * [Elasticsearch](http://elastic.co): A Java-based search engine that supports clustering and failover

The first five applications could be deployed easily using [AWS OpsWorks](https://aws.amazon.com/opsworks/)&#8216; well-known deployment recipes. We pointed OpsWorks to the GitHub repos for each app, and it took care of the rest with robust [Capistrano](http://capistranorb.com/)-style deployments of the Rails and NodeJS apps.

That left just Tematres and Elasticsearch, so we reached into our bag of tricks and wrote [Chef](http://chef.io) recipes that would fit into the OpsWorks deployment cycle for these two applications.

## Deployment in AWS

We then enabled [Auto Healing](http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autohealing.html) on our application layers to ensure servers would be replaced automatically if they failed. With robust, well-tested recipes to build servers in place, we knew this replacement would be seamless if it occurred.

To replace our CDN and web application firewall (WAF) provider, we implemented our own Apache proxy server layer using a modified version of the [OWASP](https://www.owasp.org/index.php/Main_Page) WAF rules for the [modsecurity](https://www.modsecurity.org/) Apache module, echoing our previous provider’s approach. This took iterative tuning that we&#8217;ll discuss later.

We also migrated our database services (MySQL and Redis) to the hosted AWS equivalents (RDS MySQL and Elasticache Redis), in configurations that were designed to automatically withstand loss of a datacenter, or AWS availability zone (AZ). This was an inexpensive way to take the hassle of database availability, backups, and upgrades out of our hands.

With all of these pieces in place we were able to build out the following architecture in AWS:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/486-x-713-aws\_network\_diagram.jpg" alt="A diagram of the new AWS network." %}

The key thing to note about this architecture is that it has four new characteristics that our old environment did not:

  * Servers will be replaced automatically if they fail
  * Service pool capacity can be scaled independently, in response to short-term or long-term traffic patterns
  * The size and cost of servers can be adjusted to match actual resource consumption, including OpsWorks [Automatic Load-Based Scaling](http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling-loadbased.html) for peaks in traffic
  * By design, every service is spread across multiple Availability Zones. This ensures that an _entire AWS datacenter outage_ will not bring down any service pool in particular, or the overall <tt>search.usa.gov</tt> service in general.

Our cost reduction of 40% for hosting was achieved by focusing our expenses on the CPU capacity of the application server pool and the [provisioned IOPS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html) needed for Elasticsearch. We also intend to look at annual pre-purchase options through [Reserved Instance pricing](https://aws.amazon.com/ec2/purchasing-options/reserved-instances/) in the future as our usage and billing patterns settle.

## Proxy Servers, Web Application Firewalling, and CDN Insourcing

One of the original drivers of this project was the cost of our CDN/WAF provider. As mentioned above, we created our own proxy servers that run a modified version of the OWASP WAF software. How we did this could merit its own blog post, but the basic recipe was this:

  * Build a proxy server that sits in front of our production application
  * Add the default OWASP rules
  * Using proxy configuration changes, route a small percentage of our live traffic to the proxy servers
  * Note the false positives and use them to tune the OWASP rule set to match our application traffic
  * Lather, rinse, repeat until we were comfortable routing 100% of our traffic through the new proxy servers

Routing traffic through the new proxies was a simple, incremental shift for our customers using the <tt>search.usa.gov</tt> domain on their results pages. Customers using domain masks, however, account for almost 60% of our traffic. Routing their traffic to our new proxy servers required agency-by-agency outreach to request updates of their external DNS records. Once the last CNAME record was updated, we were handling all traffic in the new system.

The CDN component was even more straightforward. With our proxy servers in place, we verified that we were setting correct [expiration headers](http://httpd.apache.org/docs/current/mod/mod_expires.html) on our assets and then enabled [mod\_disk\_cache](https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html) on our proxy servers. Once we verified that assets were being served from our proxy servers without calls to our origin servers, we enabled a [Rails asset host](http://api.rubyonrails.org/classes/ActionView/Helpers/AssetUrlHelper.html) configuration on our production application to send all asset requests to a [CloudFront Distribution](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html) whose origin server was our proxy server pool. This took all asset traffic off our expensive CDN provider without directing it to our origin servers.

In [later posts](#series) we’ll discuss in more detail the complexities of supporting SSL certificates for our government customers&#8217; hostnames and how we managed to comply with the DNSSEC requirement for government agencies. Those sections go into the technical details and are worth reading if you&#8217;re interested in how we solved the security challenges of providing SaaS search for hundreds of government agencies.

## AWS and the ATO Process

The great thing about pools of servers built by hardened recipes is that individual server failures are a non-event: a new server is spun up automatically to replace one that failed. However, the Authority to Operate (ATO) process in particular, and the government security auditing process in general, become a bit tricky for an architecture like ours because they require:

  * Vulnerability testing of individual servers
  * Compliance testing of individual servers
  * Penetration testing of individual servers and exposed pool endpoints

Since individual servers are identified by IP address, these tests get more complicated when individual servers can be rebuilt without warning due to server failure, load spikes, or data center outages – because the new server will often come online with a different DHCP’d IP address than the one it replaced. Similarly, if a new server is spun up in response to increased load, it will have an IP address that is unknown to the security testing infrastructure and will cause erroneous red flags.

We worked with GSA security personnel to modify the Assessment & Accreditation process in a few simple, but significant ways:

  * Testing and scanning: Compliance and vulnerability scanning were performed against a frozen point-in-time inventory of the system prior to launch. After our servers were demonstrated to have acceptable compliance and vulnerability protocols, we were allowed to ‘unfreeze’ our inventory to allow for dynamic server replacement and up/down-scaling. Ongoing, we are responsible for notifying the security team when new servers are created, or existing servers are destroyed or re-IP’d.
  * Host inventory: In a dynamic infrastructure, an inventory maintained in a file could be outdated at any point after the file is saved. We provided our Information System Security Officer with read-only access to our AWS console, so that the current host inventory can be viewed at any time.

## Conclusions

By applying some very commonly-understood modern operations practices — role-based deployment, server redundancy and pooling — to our application, we were able to achieve substantial cost savings while making the <tt>search.usa.gov</tt> service more resilient to failure. While some government security practices are still evolving to incorporate dynamic server environments, the success of our migration bodes well for the future of cost-effective and reliable cloud computing in government applications.

<h3 id="series" style="padding-top: 50px">
  <em>Read more of this 5-part series:</em>
</h3>

  * [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)
  * <span style="line-height: 1.5"><a href="https://www.WHATEVER/2016/09/06/a-domain-by-any-other-name-cnames-wildcard-records-and-another-level-of-indirection/">A Domain by Any Other Name: CNAMES, Wildcard Records and Another Level of Indirection</a> </span>
  * [Let’s Encrypt Those CNAMES, Shall We?](https://www.WHATEVER/2016/09/07/lets-encrypt-those-cnames-shall-we/)
  * [DNSSEC vs. Elastic Load Balancers: the Zone Apex Problem](https://www.WHATEVER/2016/09/12/dnssec-vs-elastic-load-balancers-the-zone-apex-problem/)