---


date: 2015-03-25 10:00:43 -0400
title: 'HTTP vs HTTPS\: Is it Time For a Change?'
summary: 'Data. Security. Privacy. These are the cornerstones of many discussions concerning technology. The security of citizen information when interacting with the federal government will be increasingly important as we progress into the future. A few agencies have begun to use Hyper Text Transfer Protocol Secure (HTTPS) in lieu of the standard HTTP. For these agencies,'
authors: [kdaniel]
categories:
  - Data
  - Monthly Theme
tags:
  - big data
  - HTTPS
  - privacy
  - security
  - U.S. Department of State
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/600-x-360-Https-secure-KeremYucel-iStock-Thinkstock-ThinkstockPhotos-181290353.jpg" alt="The beginning of a secure https URL shown in an web browser's address bar; the s on https and padlock are red." %} 

Data. Security. Privacy.

These are the cornerstones of many discussions concerning technology. The [security of citizen information](https://www.WHATEVER/2015/01/20/trends-big-data-and-gov-in-2015/) when interacting with the federal government will be increasingly important as we progress into the future.

A few agencies have begun to [use Hyper Text Transfer Protocol Secure (HTTPS)](https://18f.gsa.gov/2015/02/09/the-first-gov-domains-hardcoded-into-your-browser-as-all-https/) in lieu of the standard HTTP. For these agencies, this transition to HTTPS is seen as a step in the right direction and is one way for the government to address the security of citizen information. For others, the transition to HTTPS is seen as something that would require additional maintenance and is unnecessary, especially for websites that do not deal with sensitive or personally identifiable information (PII).

**Argument For HTTPS**

On one side of the argument, protecting all websites with HTTPS is seen as a necessary step because having security is imperative, despite the additional workload. Joseph Wicentowski, Digital History Advisor in the Bureau of Public Affairs at the Department of State, believes that the use of HTTPS is important for all government websites.

&#8220;I would argue that offering HTTPS connections on all pages is particularly important for government sites,” Wicentowski said.  “Some may argue that the SSL encryption is only necessary for password-protected portions of websites. But, SSL [provides an extra level of security] and prevents any 3rd party from seeing, recording, or tampering with the content of the user’s session. By offering HTTPS, we allow our security-cognizant users to be 100% confident that no attacker is monitoring or tampering with the contents of their session.”

Another interesting point in the debate is that Google has begun using HTTPS as a [ranking signal](http://googlewebmastercentral.blogspot.com/2014/08/https-as-ranking-signal.html). In other words, websites that are using the HTTPS protocol are appearing higher on the list of search results.

HTTPS provides a [secure, fast and private connection](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/) between the user and the website, but there are a few considerations for agencies to ponder before taking the plunge. For some, the full scale implementation of HTTPS is seen as a possible solution for security challenges, but it has a few drawbacks that should be considered when making the decision.

**Argument Against HTTPS**

On the other end of the argument, there is the belief that not every website needs HTTPS because not every agency deals with the transmission of sensitive information or PII. Some believe that HTTPS is an option, but you must consider things like certificate maintenance before making the decision.

When the question of HTTP vs HTTPS was posed to agencies via the [Content Managers Listserv](https://www.WHATEVER/communities/web-managers-forum/), a few of the responses hinted at the difficulty and extra costs in terms of time and resources that would be needed for an extra level of encryption. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/250-x-188-secure-socket-layer-Creative-abstract-SSL-nicolasboivin-iStock-Thinkstock-ThinkstockPhotos-186906766.jpg" alt="Creative abstract SSL" %} 

SSL certificates are files that encrypt the connection from a web server to a web browser. Certificate maintenance requires the installation, configuration and rotation of SSL certificates to ensure that a website&#8217;s information is encrypted and up to date. The management of these certificates has high operational costs.

In terms of performance, an additional level of encryption requires more server resources because each visitor must connect to the server in order to exchange the information required to establish a secure connection. Compared to the loading time of a page with HTTP, this process of exchanging information can take a little more time, especially if the server is dealing with multiple visitors at once.

With these extra costs, such as certificate maintenance and a slight decrease in site performance, one must consider if the extra level of encryption is worth implementing.

In this article, we have only began to delve into the debate about the subject of HTTP vs HTTPS. For our next piece on the topic, we will share an agency’s full scale implementation of HTTPS. We will highlight some other issues in this debate, including but not limited to website performance, privacy, security, and hardware.

Do you believe that is it time for a full-scale implementation of HTTPS despite the considerations listed above? Are those considerations just a small cost in the bigger picture of ensuring privacy?

The White House is soliciting feedback from agencies on the topic of a full scale HTTPS implementation until <span class="aBn"><span class="aQJ">March 31st</span></span>. Visit the [site](https://https.cio.gov/) and share your thoughts!