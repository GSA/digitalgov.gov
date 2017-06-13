---


date: 2016-09-06 1:00:05 -0400
title: 'A Domain by Any Other Name\: CNAMES, Wildcard Records and Another Level of Indirection'
summary: 'This is post 3 in the 5-part series The Right Tools for the Job\: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment. &ldquo;All problems in computer science can be solved by another level of indirection, except of course for the problem of too many indirections.&rdquo; &amp;#8211; David Wheeler The simplest of our four requirements was'
authors: [nick-marden]
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

_This is post 3 in the 5-part series [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)_.

> “All problems in computer science can be solved by another level of indirection, except of course for the problem of too many indirections.” &#8211; [David Wheeler](https://en.wikipedia.org/wiki/David_Wheeler_(British_computer_scientist))

The simplest of our four requirements was to allow customers to choose whether to use the <tt>search.usa.gov</tt> domain for their search results page, or create a “masked” domain name such as <tt>search.someagency.gov</tt>. While only about 1/4 of customer agencies use them, half of our search traffic comes through masked domains. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-400-Search-bar-on-virtual-screen-Gajus-iStock-Thinkstock-178761722.jpg" alt="Search bar on virtual screen." %} 

In our previous infrastructure, the customer would create a [CNAME](https://en.wikipedia.org/wiki/CNAME_record) in their own DNS zone to point <tt>search.someagency.gov</tt> to the edge servers for <tt>search.usa.gov</tt>, and we had to register the customer’s domain mask with our DNS provider. All our customers used the same CNAME: <tt>search.usa.gov.old-cdn-waf-provider.net</tt>

We knew that we wanted to avoid a “Big Bang” migration event in which all of our customers were suddenly pointed to the new AWS hosting infrastructure, so we asked our CNAME customers to point their agency-specific hostnames to customer-specific CNAMEs. This would allow us to shift traffic around on a customer-by-customer basis &#8211; both to the new infrastructure, but also back to the old infrastructure if the need arose:

<tt>$ORIGIN someagency.gov.<br /> search IN CNAME someagency.sites.infr.search.usa.gov</tt>

Once a fair number of our customers had these CNAMEs in place, we were able to switch them over to our new AWS infrastructure one-at-a-time rather than switching everyone at once:

<tt>$ORIGIN sites.infr.search.usa.gov.<br /> earlyadopteragency IN CNAME aws.search.usa.gov<br /> anotherearlyadopteragency IN CNAME aws.search.usa.gov<br /> notchangingnowagency IN CNAME old-infra.search.usa.gov</tt>

The snippet above is a bit of a simplification, however. We used [wildcard DNS records](https://en.wikipedia.org/wiki/Wildcard_DNS_record) at first to direct the majority of our customers to our previous hosting provider, and then later to our AWS-hosted site:

**Before:**
  
<tt>$ORIGIN sites.infr.search.usa.gov.<br /> earlyadopteragency IN CNAME aws.search.usa.gov<br /> anotherdaringagency IN CNAME aws.search.usa.gov<br /> ; All customers above will go to the new infrastructure<br /> * IN CNAME old-infra.search.usa.gov</tt>

**Later:**
  
<tt>$ORIGIN sites.infr.search.usa.gov.<br /> * IN CNAME aws.search.usa.gov<br /> ; All customers below will go to the old infrastructure<br /> notchangingnowagency IN CNAME old-infra.search.usa.gov</tt>

**Finally:**
  
<tt>$ORIGIN sites.infr.search.usa.gov.<br /> ; Everyone goes to the new infrastructure<br /> * IN CNAME aws.search.usa.gov</tt>

At any step in this process, we were always able to go back to our zone file and add a customer-specific CNAME to direct traffic as needed for that customer, but eventually the DNS migration came to an end and we were left with just the single wildcard record <tt>*.sites.infr.search.usa.gov</tt> pointing to our AWS infrastructure.

<h3 id="series" style="padding-top: 50px">
  <em>Read more of this 5-part series:</em>
</h3>

  * [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)
  * [Quality, Speed, and Lower Costs: Yes, You Can Have It All](https://www.WHATEVER/2016/09/02/quality-speed-and-lower-costs-yes-you-can-have-it-all/)
  * [Let’s Encrypt those CNAMES, Shall We?](https://www.WHATEVER/2016/09/07/lets-encrypt-those-cnames-shall-we/)
  * [DNSSEC vs. Elastic Load Balancers: the Zone Apex Problem](https://www.WHATEVER/2016/09/12/dnssec-vs-elastic-load-balancers-the-zone-apex-problem/)