---
url: /resources/how-to-prevent-security-certificates-from-expiring-during-shutdown/
date: 2019-02-06 10:00:00 -0400
title: How to prevent security certificates from expiring during a shutdown
summary: ""
---

### 1. Gather a list of all of your domains
The easiest way to do this is to:

- Go to [https://pulse.cio.gov/https/domains/](https://pulse.cio.gov/https/domains/)
- Find your parent domain
- Click on your domain to show all your publicly available sub-domains
- Download the CSV data of your domains
- Open the CSV as a spreadsheet

### 2. Ask your IT department which domains are auto-renewing?
Send them your new spreadsheet and have them mark which domains and sub-domains are auto-renewing.

### 3. Figure out who is responsible for purchasing security (SSL) certificates in your organization.
You are going to need to reach out to them.
_NOTE: The person/people who usually buys your certificates (someone with purchasing authority) are usually different from the people who upload them (usually someone in IT)._

### 4. Identify when your SSL certificates will expire
This is fairly easy:

- Go to [https://transparencyreport.google.com/https/certificates?hl=en](https://transparencyreport.google.com/https/certificates?hl=en)
- Scroll down to “Search certificates by hostname” and enter your parent domain
- - ✓ Include certificates that have expired
- - ✓ Include subdomains
- - Press ‘enter’
- Note the “Valid to” date in your new domains spreadsheet

_Or you can also ask the person who regularly purchases your SSL certificates. They might keep a log._

### 5. Renew all upcoming SSL certificates
If the certificate is set to expire in the next three months (or the possible length of a shutdown), make a request that those certificates be renewed now.

---

### Have Questions?
[This overview on certificates from CIO.gov](https://https.cio.gov/certificates/) is one of the best resources for people in government who are wanting to learn more about getting SSL certificates right.

**Q. Are security certificates and SSL certificates the same thing?**
Yep.

**Q. What do certificates do exactly?**
[From CIO.gov](https://https.cio.gov/certificates/) —
> "Websites use certificates to create an HTTPS connection. When signed by a trusted certificate authority (CA), certificates give confidence to browsers that they are visiting the “real” website."

**Q. Can certificates be set to auto-renew?**
Yes! You should definitely talk to your IT department about moving in the direction of auto-renewing your certificates. The best method is to use the free, open-source tool “[Let’s Encrypt](https://letsencrypt.org/)”. Once implemented on your server, it auto-renews your certificate every three months — for free.

Or, host your government site on [cloud.gov](https://cloud.gov/), [search.gov](https://search.gov/) or [federalist.18f.gov](https://federalist.18f.gov/) and your certificates will automatically renew every three months with [Let’s Encrypt](https://letsencrypt.org/).

**Related reading:**
- [Let’s Encrypt Those CNAMES, Shall We?](https://digital.gov/2016/09/07/lets-encrypt-those-cnames-shall-we/)

**Still have questions?**
E-mail us at [digitalgov@gsa.gov](mailto:digitalgov@gsa.gov) and we’ll try to get your questions answered.
