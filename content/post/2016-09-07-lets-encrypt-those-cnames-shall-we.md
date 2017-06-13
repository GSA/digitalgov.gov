---


date: 2016-09-07 11:00:56 -0400
title: 'Let&rsquo;s Encrypt Those CNAMES, Shall We?'
summary: 'This is post 4 in the 5-part series, The Right Tools for the Job\: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment. This post references the previous posts frequently, so please read those before reading this one if you haven&amp;#8217;t done so already. In addition to the DNS challenges created by offering &amp;#8220;masked&amp;#8221; domains such'
authors: [dmccleskey, nathan-smith]
categories:
  - Managing Digital
  - Monthly Theme
  - Our Work
tags:
  - aws
  - DigitalGov Search
  - infrastructure
---

_This is post 4 in the 5-part series, [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/). This post references the previous posts frequently, so please read those before reading this one if you haven&#8217;t done so already._ 

In addition to the DNS challenges created by offering &#8220;masked&#8221; domains such as <tt>nasasearch.nasa.gov</tt>, we also had to solve the problem of how to maintain SSL certificates for the main <tt>search.usa.gov</tt> domain along with the &#8220;masked&#8221; domains of all customers that wanted HTTPS support for their own domains. As also noted in an [earlier post](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/), this all needed to be done in a multi-app-server environment with no interruption of service. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-400-Digital-Encryption-Lock-peterscode-iStock-Thinkstock-465159645.jpg" alt="Digital Encryption Lock" %} 

## SAN SSL Certificates and Let&#8217;s Encrypt

We knew we wanted to make use of a [multi-domain Subject Alternative Name](https://tools.ietf.org/html/rfc5280#section-4.2.1.6) (SAN) SSL certificate, but the prospect of wrangling all the permissions and documentation required for authorizing such a certificate seemed quite daunting. The previous process for adding a new domain to our SSL certificate often took weeks and involved coordinating activities between many parties: the owner of the domain, the hosting provider, the certificate authority, and us:

  * Domain owner asks us to add their domain to our certificate
  * We send the request to the hosting provider
  * The hosting provider sends the request to the certificate authority
  * The certificate authority performs a domain validation process which is opaque to us
  * The certificate authority gives the green light to the hosting provider
  * The hosting provider adds the new domain to our SAN certificate and notifies us


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/527-x-380-ssl\_certificate\_process_before.jpg" alt="Diagram of the previous SSL certificate process." %}

[Let&#8217;s Encrypt](https://letsencrypt.org/) offers an automated process for obtaining and renewing SSL certificates — including SAN SSL certificates for up to 100 domains — as long as you can prove to them that you control any domain that&#8217;s included in a requested certificate. Given that we wanted to be able to quickly offer HTTPS support to new or existing &#8220;masked&#8221; domain customers, this automation seemed very promising. The fact that Let&#8217;s Encrypt is a free service made it all the more compelling. So we set ourselves about the task of making sure we could always prove our ownership of the <tt>search.usa.gov</tt> domain as well as &#8220;masked&#8221; customer domains while keeping the site available for customer use at all times.

## The ACME Protocol and DNS vs. HTTP Domain Validation

The process of requesting an SSL certificate from Let&#8217;s Encrypt involves running a Let&#8217;s Encrypt agent locally which communicates with the Let&#8217;s Encrypt Certificate Authority (CA) using the [ACME Protocol](https://github.com/letsencrypt/acme-spec). The CA issues challenges that the agent attempts to respond to, and the challenges come in the user&#8217;s choice of two forms:

  * DNS challenge: the agent creates a DNS record for a particular sub-domain requested by the CA in order to prove that it has control over DNS for that domain
  * HTTP challenge: the agent creates a text file at a particular location with particular content that the CA can then request in order to prove that the agent has control over web page content for that domain

Since we cannot create DNS records for our customers&#8217; &#8220;masked&#8221; domains and it’s not easy even to publish <tt>search.usa.gov</tt> DNS records, that left HTTP as the only Domain Validation option for us. Our goal then was to make sure we could have the Let&#8217;s Encrypt agent create web resources as needed to respond to any HTTP challenge issued by the CA.

## Certbot

We chose EFF&#8217;s Certbot and followed [their straightforward installation instructions](https://certbot.eff.org/all-instructions/). Certbot has options that will instruct it to attempt to install newly acquired SSL certificates in an Apache or Nginx setup, but we chose to use the <tt>certonly</tt> mode of operation which tells Certbot simply to store the new certificates in an output directory. We use this in conjunction with the <tt>--webroot</tt> option which tells Certbot that it will be writing files somewhere underneath the webserver&#8217;s document root so that they can be publicly available via HTTP requests.

To ask Let&#8217;s Encrypt for a SAN SSL certificate for our primary domain <tt>search.usa.gov</tt> and, say, two of our customer domains: <tt>find.irs.gov</tt>, and <tt>nasasearch.nasa.gov</tt>, first we would make sure that our webserver is responding to requests for all three of those domains. Then we would use the following Certbot command from the directory where Certbot is installed:
  
<tt><br /> ./certbot-auto certonly --webroot --webroot-path /var/www/http --domain search.usa.gov --domain find.irs.gov --domain nasasearch.nasa.gov<br /> </tt>

Roughly following the [Domain Validation example](https://letsencrypt.org/how-it-works/) in the Let&#8217;s Encrypt documentation, the process of fulfilling this certificate request would complete the two steps illustrated in these diagrams for each domain.

### Challenge 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-143-Lets-Encrypt-howitworks_challenge.jpg" alt="challenge" %} 

### Authorization 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-380-Lets-encrypt-howitworks_authorization.jpg" alt="authorization" %} 

### Challenge / Authorization for each Domain

  * Certbot communicates with the Let&#8217;s Encrypt CA indicating we want a SAN SSL certificate for domains <tt>search.usa.gov</tt>, <tt>find.irs.gov</tt>, and <tt>nasasearch.nasa.gov</tt>
  * The CA instructs the agent to create a file with particular content that will be visible at <tt>http://search.usa.gov/.well-known/acme-challenge/XXXX</tt>
  * The agent writes the desired content to <tt>/var/www/http/.well-known/acme-challenge/XXXX</tt>, and the CA&#8217;s HTTP request for that file succeeds
  * The CA instructs the agent to create a file with particular content that will be visible at <tt>http://find.irs.gov/.well-known/acme-challenge/YYYY</tt>
  * The agent writes the desired content to <tt>/var/www/http/.well-known/acme-challenge/YYYY</tt>, and the CA&#8217;s HTTP request for that file succeeds
  * The CA instructs the agent to create a file with particular content that will be visible at <tt>http://nasasearch.nasa.gov/.well-known/acme-challenge/ZZZZ</tt>
  * The agent writes the desired content to <tt>/var/www/http/.well-known/acme-challenge/ZZZZ</tt>, and the CA&#8217;s HTTP request for that file succeeds

This reduces the convoluted many-party, multi-step process to one that involves only three parties. Since one of these parties, Let&#8217;s Encrypt, is automated, this reduces the entire process time from weeks to minutes.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/416-x-387-ssl\_certificate\_process_after.jpg" alt="New certificate process." %}

## HTTP Domain Validation in a Multi-app-server Environment

This process works great in a single-server environment because all HTTP requests issued by the CA go to the one host where Certbot is running. But as our service operates in a multi-server environment with various hosts sitting behind an Elastic Load Balancer, you&#8217;ll immediately see a problem. There&#8217;s no guarantee that an HTTP request issued by the CA will be served by the same host that&#8217;s running Certbot. Also, since our site needs to remain up and running at all times, we can’t simply send all traffic to one Certbot-controlled server for the duration of the domain validation process. We need to be able to serve content to our users and serve domain validation responses to Let&#8217;s Encrypt at the same time.

The solution to running Certbot in a multi-server environment stems from the fact that all HTTP Domain Validation requests made by the Let&#8217;s Encrypt CA have paths that begin with <tt>/.well-known/acme-challenge/</tt>. We set up a single Certbot EC2 instance with an [Elastic IP address](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html), assigned the domain name <tt>lets-encrypt.infr.search.usa.gov</tt> to that address, and set up Certbot on the instance. As we are using Apache to direct requests to our application, we set up special <tt><Location></tt> blocks in the Apache config files for all our application servers to proxy HTTP Domain Validation requests to our &#8220;Let&#8217;s Encrypt&#8221; instance:

<tt><Location /.well-known/acme-challenge/><br /> ProxyPass http://lets-encrypt.infr.search.usa.gov/.well-known/acme-challenge/<br /> Require all granted<br /> </Location></tt>


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-523-lets\_encrypt\_and\_customer\_requests.jpg" alt="Let's encrypt and customer requests." %}

This guarantees that Domain Validation requests go to our Certbot host and all other traffic goes to our pool of application servers. We set up all our proxy EC2 application servers with these special <tt><Location></tt> blocks as well as all of the application servers in the old hosting environment (not shown in the diagram). So whether the Let&#8217;s Encrypt CA issues a Domain Validation request for a domain that was still being handled by the old hosting environment or a domain that was being handled by the new AWS hosting environment, we were guaranteed that the request would eventually get proxied to the host that&#8217;s running Certbot.

## Tips & Tricks

At the time of this writing, Certbot is still in its infancy, and installing it varies across environments. The first time you run Certbot, be prepared for the wrapper script to install dependencies on your system.

SAN SSL certificates are valid for any domain listed within their Subject Alternative Name field, but they also have a primary domain name listed in their Common Name field. Let&#8217;s Encrypt will use the first domain listed in your request as the Common Name field. Our convention is to always list <tt>search.usa.gov</tt> as the first domain name in the requested list and then provide the rest of the domain names in alphabetical order. That way the Common Name on our certificate is always <tt>search.usa.gov</tt> instead of whichever customer domain happens to be first alphabetically.

If you issue too many certificate requests to Let&#8217;s Encrypt, you&#8217;ll find yourself receiving rate-limiting error messages. To avoid being rate limited, use Certbot&#8217;s <tt>--staging</tt> option, which instructs it to use the Let&#8217;s Encrypt staging CA.

Typing out a bunch of domain names in a Certbot command is tedious and error-prone, and while our example above lists three different domain names, in reality we currently include 36 domain names in our SAN SSL certificate, with many more to come in the near future as federal sites complete their transitions to HTTPS. To save ourselves time and to prevent mistakes, we make use of the fact that Certbot looks for a config file in <tt>/etc/letsencrypt/cli.ini</tt> for its options. For the above certbot command example, we would end up using the following <tt>cli.ini</tt> config file:

<tt>domains = search.usa.gov, find.irs.gov, nasasearch.nasa.gov<br /> authenticator = webroot<br /> webroot-path = /var/www/html</tt>

This allows us to use the following Certbot command no matter how many customer domains we want to include:

<tt>./certbot-auto certonly</tt>

## Conclusion

Our HTTP Domain Validation request proxy design ensures we can quickly and easily generate a new SAN SSL certificate that is valid for all of our customers’ domains. It currently takes us only a few minutes to respond to customer requests for HTTPS support as long as they have their DNS set up properly. This combined with the free cost of the Let&#8217;s Encrypt service makes it a great solution for us.

<h3 id="series" style="padding-top: 50px">
  <em>Read more of this 5-part series:</em>
</h3>

  * [The Right Tools for the Job: Re-Hosting DigitalGov Search to a Dynamic Infrastructure Environment](https://www.WHATEVER/2016/08/18/the-right-tools-for-the-job-re-hosting-digitalgov-search-to-a-dynamic-infrastructure-environment/)
  * [Quality, Speed, and Lower Costs: Yes, You Can Have It All](https://www.WHATEVER/2016/09/02/quality-speed-and-lower-costs-yes-you-can-have-it-all/)
  * [A Domain by Any Other Name: CNAMES, Wildcard Records and Another Level of Indirection](https://www.WHATEVER/2016/09/06/a-domain-by-any-other-name-cnames-wildcard-records-and-another-level-of-indirection/)
  * [DNSSEC vs. Elastic Load Balancers: the Zone Apex Problem](https://www.WHATEVER/2016/09/12/dnssec-vs-elastic-load-balancers-the-zone-apex-problem/)