---


date: 2013-07-29 1:12:58 -0400
title: 'API Security'
summary: 'Like website development, API security revolves around three stages&mdash;planning the API, testing the API, and monitoring the API after it has launched. The planning stage requires those involved to conceptually map several design decisions and the impact that they will have on security. The second stage applies your agency&rsquo;s security program to the API release'
authors: [gray-brooks]
categories:
  - API
  - Code
tags:
  - API
  - security
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/250-x-86-API-letter-blocks-23575697-Hemera-Technologies-PhotoObjects.net-Thinkstock-87667306.jpg" alt="Children's building blocks letters spelling A P I." %} 

Like website development, API security revolves around three stages—planning the API, testing the API, and monitoring the API after it has launched. The planning stage requires those involved to conceptually map several design decisions and the impact that they will have on security. The second stage applies your agency’s security program to the API release candidate. Lastly, the third step integrates your API in your agency’s continuous monitoring frameworks.

## Planning

As with all Web assets in an environment, the basic issues revolve around access controls to information. When planning an API, the following questions address the API’s framework for functional security.

  1. To what group of people should the API be accessible?
  
    Is the audience anyone in the world, select outside groups, or internal staff only?** ** 
  2. How should potential users authenticate in order to interact with the API?
  
    May those who have access to the API begin consuming it directly or do they need to register an API key or otherwise authenticate themselves in order to consume the API?
  3. To what information should the API grant access?
  
    What dataset is exposed through the API? Should users only be able to interact with certain portions of this data set?
  4. For each segment of information, should the access be read–only, read/write, or write–only?
  
    Of the information that is exposed and the use cases envisioned, what file permissions should be available to users and why?

If part of all of an API is intended for internal staff only, then the Network Operations staff can employ the same methods that establish your intranet (gateway, firewall, network settings) in order to ensure that the API endpoints are only accessible from within the network. If the API is intended for public access or even access by select outside groups, the same network staff must ensure that only the intended systems are exposed through the API.

As discussed [elsewhere](https://digitalgov.sites.usa.gov/2013/03/12/api-basics#common-technical-choices "API Basics"), authentication may serve several purposes unrelated to security but its core use is to empower the API producer to manage those who have access to the API and wish to interact with it. If only certain members of the public should be able to access an API, then authentication measures such as API keys and [OAuth](http://en.wikipedia.org/wiki/OAuth) can be employed to control access to the API. Even if any member of the public is welcome to use the API, authentication allows for the regulation of those users—empowering the API manager to throttle or cut off inappropriate or malicious use.

APIs often provide access to certain sections of data and with various permissions, depending on the intended use cases. APIs are often built to provide certain data from a system that includes other sensitive data and in these cases, the Network Operations staff can ensure that either only certain information is accessible while the API producers can customize the API design to respect only the intended set of queries.

Similarly, API producers must question what permissions are needed for each developed use case. Oftentimes, read–only access to a dataset is sufficient for the API’s intended use and in those circumstances, the Network Operations staff can ensure the correct permission levels are set and locked. In other scenarios, such as an API that is used to collect submissions, a read–write or write–only permission may be necessary and the API may need to be customized to ensure that users are able to submit and edit their data but not that of others.

## Testing

Each federal agency has a designated cybersecurity team that maintains a security program to review and protect the agency Web presence. Fortunately, from both a human resources perspective as well as a technical perspective, API security can often be addressed using the same measures used to secure a website. Oftentimes, the same technology is used to power websites and APIs—URLS and APIs are both used in the same fashion—information is requested, an action is performed, and information is returned. The principle difference is that webpages are intended for human consumption whereas APIs are intended for machine consumption—the underlying security focus of protecting information is the same. Common website security checks can also be used for APIs. For instance, the cybersecurity team will often:

  * Ensure well-known and secure protocols are being used.
  * Conduct secure code reviews, checking API code for vulnerabilities and suggesting best practices before the API is put into production.
  * Conduct vulnerability scanning, using the regular automated scanning of servers and applications that will often already be in place.
  * Assist in the review of data returns, which can sometimes be sensitive and may need to have access restrictions applied to specific URLs and data.

With the completion of the API review and mitigation of risks, the cybersecurity team can then incorporate the API into their structural map of the agency’s Web presence and include it in their monitoring program going forward.

## Monitoring

As with the initial security review, your agency’s cybersecurity team will often be able to employ their existing resources to include coverage of the API in any regular scans and continuous monitoring that is in place. The same Network Operations staff that monitor server load and uptime of agency websites and systems should be aware of the new presence of the API within the agency’s server presence and coordinate similar monitoring.

More fundamentally, the API producer must also ensure the role of stakeholder as a system owner, collaborating with the appropriate IT, cybersecurity, and New Media teams so that the API maintains an integrated role in the wider agency Web presence. This long-term stakeholdership is an aspect of security that can be overlooked in the hurry to successfully launch an API, though to do so is perilous and should be avoided. Rather, by ensuring stakeholdership, you provide your API with the right level of investment for today as well as going forward.

## Resources

  * [Explanation of API Proxies](http://apievangelist.com/2011/06/11/the-battle-for-your-api-proxy/)
  * [How to Secure an API—Tips for REST + JSON Developers](http://www.stormpath.com/blog/how-secure-api-tips-rest-json-developers)
  * [Designing a Secure REST (Web) API without OAuth](http://www.thebuzzmedia.com/designing-a-secure-rest-api-without-oauth-authentication/)
  * [Cloud API Security Panel at Infosec](http://blog.programmableweb.com/2012/05/07/cloud-api-security-panel-at-infosec/)