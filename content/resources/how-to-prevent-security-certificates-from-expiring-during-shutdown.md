---
slug: how-to-prevent-security-certificates-from-expiring-during-a-lapse-in-operations
date: 2019-02-07 11:30:00 -0400
title: "How to Prevent Security Certificates From Expiring During a Lapse in Operations"
summary: "These are the steps that people in government can take to avoid having security certificates expire during a lapse in operations."
topics:
  - security
---

### 1. Gather a list of all of your domains

The easiest way to do this is to:

- Go to [https://pulse.cio.gov/https/domains/](https://pulse.cio.gov/https/domains/)
- Find your parent domain
- Click on your domain to show all your publicly available sub-domains
- Download the CSV data of your domains
- Open the CSV as a spreadsheet

### 2. Ask your IT department which domains are auto-renewing

Send them your new spreadsheet and have them mark which domains and sub-domains are auto-renewing.

### 3. Figure out who is responsible for purchasing security (SSL) certificates in your organization.

You are going to need to reach out to the person/people who usually buys your certificates _(someone with purchasing authority)_. They are usually different from the people who upload your certificates _(usually someone in IT)_.

### 4. Identify when your SSL certificates will expire

This is fairly easy:

- Go to [https://transparencyreport.google.com/https/certificates?hl=en](https://transparencyreport.google.com/https/certificates?hl=en)
- Scroll down to “Search certificates by hostname” and enter your parent domain in the search box
- Check both boxes for "Include certificates that have expired" and "Include subdomains" and click the magnifying glass icon on the right side of the search box
- In the results, the “Valid to” column is the date that your certificate expires
- Add this date your new domains spreadsheet

_Or you can also ask the person who regularly purchases your SSL certificates. They might keep a log._

### 5. Renew all upcoming SSL certificates

If the certificate is set to expire in the next three months , make a request to get those certificates renewed now.

:tada:

---

### Have Questions?

[This overview on certificates from CIO.gov](https://https.cio.gov/certificates/) is one of the best resources for people in government who are wanting to learn more about getting SSL certificates right.

#### Q. Are security certificates and SSL certificates the same thing?

Yep.

#### Q. What do certificates do exactly?

[From CIO.gov](https://https.cio.gov/certificates/) —

> "Websites use certificates to create an HTTPS connection. When signed by a trusted certificate authority (CA), certificates give confidence to browsers that they are visiting the “real” website."

#### Q. Can certificates be set to auto-renew?

Yes, you should talk to your IT department about moving in the direction of auto-renewing certificates.

We generally recommend that any certificate you do purchase be low cost, automatable, short-lived, and published to Certificate Transparency logs. Furthermore, all certificates should be free of the following:

- Domain name mismatch, including Subject Alternative Name (SAN) errors
- Certiﬁcate not yet valid
- Certiﬁcate expired
- Certificates lasting longer than three years
- Use of a self-signed certiﬁcate
- Use of a certiﬁcate that is not trusted (unknown CA or some other validation error)
- Use of a revoked certiﬁcate
- Insecure certiﬁcate signature (MD2 or MD5 or SHA-1 [for new certificates])
- Insecure key

At the GSA, we use a free, open-source option called “[Let’s Encrypt](https://letsencrypt.org/)”. Once implemented on your server, it auto-renews your certificate every three months. And if you host your government site on [cloud.gov](https://cloud.gov/), [search.gov](https://search.gov/) or [federalist.18f.gov](https://federalist.18f.gov/), your certificates will automatically renewed.

**Related reading:**

- [Let’s Encrypt Those CNAMES, Shall We?](https://digital.gov/2016/09/07/lets-encrypt-those-cnames-shall-we/)

**Still have questions?**
E-mail us at [digitalgov@gsa.gov](mailto:digitalgov@gsa.gov) and we’ll try to get your questions answered.
