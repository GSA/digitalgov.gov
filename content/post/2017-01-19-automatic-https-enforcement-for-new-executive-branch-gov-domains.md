---


date: 2017-01-19 12:00:30 -0400
title: 'Automatic HTTPS Enforcement for New Executive Branch .Gov Domains'
summary: 'HTTPS is a necessary baseline for security on the modern web. Non-secure HTTP connections lack integrity protection, and can be used to attack citizens, foreign nationals, and government staff. HTTPS provides increased confidentiality, authenticity, and integrity that mitigate these attacks. In June 2015, the White House required all new federal web services to support and'
authors: [marina-fox, eric-mill]
categories:
  - Governance
  - Managing Digital
  - 'Strategy &amp; Policy'
tags:
  - analytics
  - GSA
  - HTTPS
  - metrics
  - policy
  - search engine optimization
  - security
---

HTTPS is a necessary baseline for security on the modern web. Non-secure HTTP connections lack integrity protection, and can be used to attack citizens, foreign nationals, and government staff. HTTPS provides increased confidentiality, authenticity, and integrity that mitigate these attacks. 
{% include image/full-width.html img="https://www.WHATEVER/files/2015/06/600-x-400-https-weerapatkiatdumrong-iStock-Thinkstock-520737069.jpg" alt="A small metal padlock rests on a keyboard to represent HTTPS; hypertext transfer protocol secure" %} 

In June 2015, the White House required all new federal web services to [support and enforce HTTPS connections over the public internet](https://https.cio.gov/#guidelines), and for agencies to migrate existing web services to HTTPS by the end of calendar year 2016. GSA’s Office of Government-wide Policy has supported the growth of HTTPS in the federal government by providing a [public HTTPS monitoring dashboard](https://pulse.cio.gov/) and [thorough policy guidance and technical assistance](https://https.cio.gov/).

Federal agencies have made very significant progress towards that goal, to the point that [federal use of HTTPS now outpaces the private sector](https://18f.gsa.gov/2017/01/04/tracking-the-us-governments-progress-on-moving-https/).

This year, GSA will be taking another significant step forward in making secure communication the default for federal web services by automatically enforcing HTTPS in modern web browsers for newly issued executive branch .gov domains and their subdomains.


<img class="size-full wp-image-386235" src="https://www.WHATEVER/files/2017/01/600-x-400-Dot-gov-internet-domain-marekuliasz-iStock-Thinkstock-476434043.jpg" alt="" width="600" height="400" /> 

As new executive branch domains are registered, the [DotGov](https://www.dotgov.gov/) program will submit them to web browsers for “[preloading](https://https.cio.gov/hsts/#hsts-preloading).” After submission, it can take up to three months before preloading takes effect in modern web browsers. The change will be introduced to dotgov customers when they register a new domain under the Executive Branch, and will not affect existing or renewed domains.

Once preloading is in effect, browsers will strictly enforce HTTPS for these domains and their subdomains. Users will not be able to click through certificate warnings. Any web services on these domains will need to be accessible over HTTPS in order to be used by modern web browsers.

GSA provides [extensive guidance on HTTPS deployment](https://https.cio.gov/) to agencies, and encourages .gov domain owners to obtain [low cost or free certificates](https://https.cio.gov/certificates/#what-kind-of-certificate-should-i-get-for-my-domain%3f) trusted by the general public. In our experience, more expensive certificates do not offer more security value to service owners, and automatic deployment of free certificates can significantly improve service owners’ security posture.
  
GSA plans to introduce this HTTPS preloading change in the spring of 2017. DotGov domain customers will be notified by the Gov Domain Registrar via email 30 days before the change goes in effect.

For questions about this new GSA policy, agencies can [email the team at CIO.gov](mailto:https@cio.gov).

For more information on preloading, please read [18F’s blog post on the first preloaded .gov domains](https://18f.gsa.gov/2015/02/09/the-first-gov-domains-hardcoded-into-your-browser-as-all-https/), and [GSA’s HTTPS policy support article](https://https.cio.gov/hsts/#hsts-preloading) on the topic.

Some important notes:

  * Executive agencies do not have to do any work to be in compliance, other than ensuring that HTTPS is supported on their web services deployed to any newly issued .gov domains.
  * This change only affects clients that support [HTTP Strict Transport Security](https://https.cio.gov/hsts/) (HSTS), which is generally limited to modern web browsers. Specialized HTTP clients (such as cURL or HTTP standard libraries) should generally not be affected by default.
  * This change will affect all subdomains of newly registered executive .gov domains. This includes intranet websites, if they are deployed to subdomains of publicly registered .gov domains. Using plain HTTP for intranet websites is not secure and is discouraged, but can still be achieved by using private domain names that only resolve inside the intranet.

For more information and technical guidance on HTTPS and HSTS, GSA has provided [detailed guidance](https://https.cio.gov/):

  * [General FAQ on HTTPS](https://https.cio.gov/faq/): What HTTPS does and doesn’t do, and how it relates to DNSSEC.
  * [HTTP Strict Transport Security](https://https.cio.gov/hsts/): What HSTS does, and how to use it.
  * [Certificates](https://https.cio.gov/certificates/): Best practices and recommendations around the use of inexpensive or free certificates.

Additionally, GSA’s DigitalGov University and 18F teams have partnered to produce three detailed video presentations on HTTPS:

  * [An Introduction to HTTPS](https://www.youtube.com/watch?v=d2GmcPYWm5k) (basic, a general introduction for anyone)
  * [Implementing HTTPS](https://www.youtube.com/watch?v=rnM2qAfEG-M) (advanced, more technical detail)
  * [Migrating to HTTPS](https://www.youtube.com/watch?v=X5H8JRULDOo) (advanced, focused on HSTS, certificates, and mixed content)

_Learn more about [security](https://www.WHATEVER/tag/security/) and [HTTPS](https://www.WHATEVER/tag/https/) — including why [switching to HTTPS will make your analytics better](https://www.WHATEVER/2016/06/06/why-switching-to-https-will-make-your-analytics-better/) and how [HTTPS can impact the SEO of government websites](https://www.WHATEVER/2015/09/02/https-and-other-ranking-factors-what-impacts-the-seo-of-government-websites/). If you have a .gov or .mil email address, consider joining our [communities](https://www.WHATEVER/communities/) to connect with other feds working on web and digital projects._