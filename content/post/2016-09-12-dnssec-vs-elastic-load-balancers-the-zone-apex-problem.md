---


date: 2016-09-12 1:00:09 -0400
title: 'DNSSEC vs. Elastic Load Balancers\: the Zone Apex Problem'
summary: 'This is the final post in the 5-part series, The Right Tools for the Job\: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment. Federal websites are required to implement DNSSEC, which relies on knowing exactly what server is responding to a request. In Amazon Web Services (AWS), the problem of unreliable servers is solved by'
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
  - security
---

_This is the final post in the 5-part series, [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)._

Federal websites are [required to implement DNSSEC](https://www.whitehouse.gov/sites/default/files/omb/memoranda/fy2008/m08-23.pdf), which relies on knowing exactly what server is responding to a request. In Amazon Web Services (AWS), the problem of unreliable servers is solved by [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) (ELB). An ELB containing one or more servers is presented to the world as a single hostname — say, <tt>usasearch-elb.ec2.aws.com</tt> — and requests are routed to individual servers in the ELB pool based on health and capacity. Hosts change without notice, at odds with standard DNSSEC implementations.

For practical reasons, ELBs for human-visible web sites are almost always hidden behind CNAME records in the DNS:

<tt>~ host search.usa.gov<br /> search.usa.gov is an alias for usasearch-elb.ec2.aws.com.<br /> usasearch-elb.ec2.aws.com has address 209.85.232.121</tt>

This is a fantastic and invaluable abstraction: what appears to be a single hostname called <tt>search.usa.gov</tt> is actually a multi-datacenter, self-healing, auto-scaling pool of servers.

However, it runs afoul of one critical restriction of the DNS: the fact the top-most entry in a DNS zone (known as the “zone apex”) [cannot be a CNAME](http://serverfault.com/questions/613829/why-cant-a-cname-record-be-used-at-the-apex-aka-root-of-a-domain). So if you want to add this ELB CNAME to the <tt>service.gov</tt> zone, you’ll have no problem:

<tt>$ORIGIN service.gov.<br /> ; search.usa.gov is a CNAME to the ELB hostname<br /> search IN CNAME usasearch-elb.ec2.aws.com.</tt>

but if you only control the <tt>search.usa.gov</tt> zone (which is the situation we are in), you’re out of luck:

<tt>$ORIGIN search.usa.gov<br /> ; This following line is not a valid DNS configuration<br /> @ IN CNAME usasearch-elb.ec2.aws.com.</tt>

There are numerous vendor-specific solutions to this problem, typically called [ANAME](https://www.dnsmadeeasy.com/services/anamerecords/) or [ALIAS](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias- non-alias.html) records. They work around the zone apex problem by allowing you to _configure_ the zone apex entry as though it were a CNAME, but _present_ the answer to the caller as though it were an A record:

<tt>$ORIGIN search.usa.gov<br /> ; '@' means "the zone apex", i.e. search.usa.gov<br /> @ 60 IN ALIAS usasearch-elb.ec2.aws.com.</tt>

Here are the current IP addresses for our ELB
  
<tt>~ host usasearch-elb.ec2.aws.com<br /> usasearch-elb.ec2.aws.com has address 52.86.186.226<br /> usasearch-elb.ec2.aws.com has address 52.0.72.176<br /> usasearch-elb.ec2.aws.com has address 52.23.22.193</tt>

Notice that there are no mentions of CNAMEs in this answer
  
<tt>~ host search.usa.gov<br /> search.usa.gov has address 52.86.186.226<br /> search.usa.gov has address 52.0.72.176<br /> search.usa.gov has address 52.23.22.193</tt>

This sleight-of-hand is accomplished by dynamically resolving the A record request at the authoritative nameserver by looking at the underlying ALIAS and getting its current value. By design, the answer issued by the authoritative nameserver has a short (60-second) TTL, because the “correct” answer for <tt>usasearch-elb.ec2.aws.com</tt> could change suddenly in an environment where servers pop in and out of existence without warning. At the cost of additional traffic to the authoritative nameservers, incorrect results are quickly flushed out of the global DNS cache when the ALIAS lookup results change.

## So, What About DNSSEC?

With ANAME/ALIAS records (called ALIAS records for the rest of this post) at our disposal, we could easily satisfy our first two requirements. However, doing so required picking a DNS provider with ALIAS support &#8211; and no government-approved hosted DNS providers who support ALIAS also support DNSSEC. We needed a tool that didn’t exist yet.

To find the solution, it was valuable to look at why DNS providers don’t provide DNSSEC support along with ALIAS records. The design of DNSSEC — and the cryptographic assurance it provides about DNS record values — requires taking all of the records in a zone file and computing a cryptographic hash of them, called an [RRSIG](https://www.ietf.org/rfc/rfc4034.txt). Computationally, this is a very expensive operation, especially compared to the cost of answering a single DNS request. Therefore, RRSIG calculations are done when the contents of the zone change, not on-the-fly while answering requests.

Behind-the-scenes ALIAS expansion throws a wrench into the works here. If the result of a lookup can be different at different times (such as when the list of IP addresses for the <tt>usasearch-elb.ec2.aws.com</tt> ALIAS changes), then the RRSIG itself might need to be recomputed at any moment. This isn’t practical for DNS services that may be serving hundreds of thousands or millions of requests per minute.

So we had to rummage around the Internet for help. A lot. [We learned](https://www.ietf.org/mail-archive/web/dnsop/current/msg12352.html) this issue was at the forefront of the minds of some Very Smart People working on IETF-related projects, and so we went to the people who were proposing a solution: [PowerDNS](https://www.powerdns.com/), an open-source DNS software provider based in The Netherlands.

[Peter van Dijk](https://github.com/Habbie), one of PowerDNS’ software developers, confirmed the realizations that we’d had:

  * ALIAS resolution is a useful feature that works by dynamically changing the record values in a zone
  * DNSSEC doesn’t work for zones whose contents change dynamically
  * Most of the time, ALIAS expansion continues to return the same results
  * Most of the time, therefore, correct DNSSEC signatures will continue to be correct

Peter then suggested a very [simple improvement to the PowerDNS software](https://github.com/PowerDNS/pdns/pull/3733) that could solve our problem: adding the ability for a DNS server to expand ALIAS records (which it already supported) into A records during a zone transfer, or [AXFR](https://cr.yp.to/djbdns/axfr-notes.html).

This small change, called [outgoing-axfr-expand-alias](https://doc.powerdns.com/md/authoritative/howtos/#using-alias-records) and available beginning in [PowerDNS Authoritative Server 4.0.0](https://www.powerdns.com/downloads.html), allows one server (the so-called “DNS master”) to be the only one that knew about our ALIAS records. Then, every minute, “DNS Slaves” acting as the authoritative nameservers for <tt>search.usa.gov</tt> would initiate an AXFR of the zone from the DNS master, and would receive a copy of the zone file containing the most up-to-date values for those ALIAS records, expressed as A records. The result of this AXFR would then be compared with the current contents of the zone on the slave server. If the contents had not changed — almost always the case — then no action would be taken. If the contents had changed, then the zone would be reloaded entirely and re-signed using existing DNSSEC signing features, with notification sent to sysadmins.

Overall, the process looks like this:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/600-x-400-multi-tier-alias-and-dnssec-architecture.jpg" alt="A multi-tier alias and DNSSEC architecture flowchart." %}

Side note: You can see the script that we wrote to request the AXFR from the master server and compare its contents to the current slave server zone file on [Github](https://gist.github.com/nickmarden/9092c99cf3e201510ca83455fc2d2dab). It’s quite simple, and relies on straightforward zone management features already built into the PowerDNS software. This script is no longer necessary, but was developed as a precaution against the possibility of a failed AXFR “emptying” the zone on the slave server. In the released version of PowerDNS 4.0.0, a standard zone slaving configuration has this protection enabled automatically.

## But What About Wildcards?

Earlier we talked about using wildcard DNS records to simplify the process of creating [customer-specific CNAMEs](https://www.WHATEVER/2016/09/06/a-domain-by-any-other-name-cnames-wildcard-records-and-another-level-of-indirection/). You might have expected that to cause a problem with respect to DNSSEC and dynamic records. However, as it turns out, wildcard records don’t present the same problem to DNSSEC that ALIAS records present.

Let’s take a closer look at what happened in our two-step zone updating process. First, the master server contains a wildcard ALIAS record that points customer sites to an ELB CNAME:

<tt>$ORIGIN search.usa.gov.<br /> *.sites.infr IN ALIAS usasearch-elb.ec2.aws.com</tt>

After outbound ALIAS expansion during a zone AXFR, this becomes

<tt>$ORIGIN search.usa.gov.<br /> *.sites.infr IN A 52.86.186.226<br /> *.sites.infr IN A 52.0.72.176<br /> *.sites.infr IN A 52.23.22.193</tt>

These records, although wildcards, are no longer dynamic. And DNSSEC supports signing [wildcard records](https://tools.ietf.org/html/rfc7129#section-5.3), making these results as valid as any other A record that might appear after ALIAS expansion.

## Conclusion

So, thanks to some tricky multi-tier design, our solution now works as follows:

  * The master DNS server knows nothing about DNSSEC. Its job is just to publish up-to-date zone contents: 
      * The zone apex search.usa.gov is an ALIAS to an ELB, and gets evaluated into an A record
      * Wildcard records are just ALIASes to ELBs, and also get evaluated into wildcard records that are A records
      * All other records are transferred untouched
  * Every 60 seconds, the authoritative nameservers for search.usa.gov poll for a current “alias-expanded” version of the search.usa.gov zone file
  * Whenever any change appears in “alias-expanded” search.usa.gov zone, the entire zone file is re-signed and re-published to the Internet-facing authoritative nameservers

For DigitalGov Search agency customers with DNSSEC-signed zones of their own, this setup allows them to select their own customer-specific CNAME, delegate it to <tt>search.usa.gov</tt>, and operate with confidence that the entire chain of DNS resolution is signed with DNSSEC and safe from cache poisoning or man-in-the-middle attacks.

<h3 id="series" style="padding-top: 50px">
  <em>Read more of this 5 part series:</em>
</h3>

  * [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)
  * [Quality, Speed, and Lower Costs: Yes, You Can Have It All](https://www.WHATEVER/2016/09/02/quality-speed-and-lower-costs-yes-you-can-have-it-all/)
  * [A Domain by Any Other Name: CNAMES, Wildcard Records and Another Level of Indirection](https://www.WHATEVER/2016/09/06/a-domain-by-any-other-name-cnames-wildcard-records-and-another-level-of-indirection/)
  * [Let’s Encrypt those CNAMES, Shall We?](https://www.WHATEVER/2016/09/07/lets-encrypt-those-cnames-shall-we/)