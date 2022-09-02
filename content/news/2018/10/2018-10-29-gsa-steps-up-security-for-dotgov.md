---
slug: gsa-steps-up-security-for-dotgov
date: 2018-10-29 15:00:00 -0500
title: 'GSA Steps Up Security for .gov'
summary: 'Read how GSA’s DotGov Program is modernizing the security of &#46;gov to make government websites and systems more secure&#46;'
deck: 'How GSA’s DotGov Program is modernizing the security of &#46;gov to make government websites and systems more secure&#46;'
authors:
  - cameron-dixon
  - marina-fox
topics:
  - product-management
  - security
  - national-cyber-security-awareness-month
featured_image:
  uid: dotgov-card
  alt: 'The new DotGov logo has the .gov top-level domain text in light blue on a dark blue background.'

---

{{< img-right src="dotgov-logo" alt="The new DotGov logo has the .gov top-level domain text in light blue on a dark blue background." caption="The new DotGov logo." >}}

The General Services Administration’s (GSA) [DotGov Program](https://home.dotgov.gov/about/) manages the .gov top-level domain (TLD) for the U.S. government. Like .com or .org, the .gov TLD serves a defined community of interest – but unlike other TLDs, .gov is only available to bona fide U.S.-based government organizations.

These government organizations increasingly deliver services and information digitally, and using a .gov domain signals to users that the government website they’re visiting, or the email they’ve received from a .gov email address, is legitimate. Indeed, one of the primary reasons .gov exists is to help the public easily identify government services on the internet.

Because .gov domains are intertwined with access to government services, that makes the TLD _critical infrastructure_ for governments, citizens, and international internet users. Everyone who uses online U.S. government services is indirectly but materially affected by the security enhancements DotGov implements.

We want .gov to remain a trusted and secure space for all users, so over the last year we’ve focused on increasing trust and safety in our ecosystem. For [National Cybersecurity Awareness Month](https://www.dhs.gov/national-cyber-security-awareness-month), we wanted to highlight some of these accomplishments.

## Strengthening Password Security

The secrecy of a password is crucial to the security of an account, and password reuse is the most common threat to password secrecy. An attacker who compromises one system’s password can often pivot to another system using those same credentials.

In April 2018, we added a security feature to the .gov registrar to [prevent the use of passwords that have been identified in various publicly known data breaches](https://home.dotgov.gov/password-update/). This change is in line with [recommendations](https://pages.nist.gov/800-63-3/sp800-63b.html#memsecretver) from the National Institute of Standards and Technology (NIST), and incorporated downloaded data from the community service, "[Have I Been Pwned](https://haveibeenpwned.com/Passwords#PwnedPasswords)."

By ensuring that users of our services cannot use passwords that were exposed in past public breaches, we’ve minimized the threat of password reuse.

## Opting-in to Preloading

In May 2017, we [began requiring](https://digital.gov/2017/04/12/dotgov-domain-registration-program-to-provide-https-preloading-in-may/) newly registered federal executive branch domains to use HTTPS, by adding each new domain to the [HSTS preload list](https://hstspreload.org/). HTTPS ensures that user communication with .gov websites isn’t modified or compromised, and hostile networks can’t inject malware, tracking beacons, or otherwise monitor or change user interactions online. Because the protections are so meaningful, and domain registration is a great place to enforce it, we began allowing any new .gov domain to opt-in to preloading in August 2018.

## 2-Step Verification

Even though we’ve increased password security (see above), a password can still be compromised. While a .gov registrar user may not log in to the system that frequently, if someone gained access to a registrar user’s password, they could sign in at any time and make changes&mdash;until now.

In October 2018, we adopted a new standard (known as _time-based one-time password_, or [TOTP](https://home.dotgov.gov/2step/#what-if-i-already-use-something-other-than-google-authenticator)), and introduced [2-step verification](https://home.dotgov.gov/2step/) on all .gov registrar accounts. This raises the stakes for a malicious actor to get into a .gov domain account: not only do they have to collect a user’s password, they must also obtain a code from that user’s mobile device.

And because we believe that our users, nearly all of whom are government officials, deserve strong security, we’re the only TLD to make 2-step verification **mandatory** for all users.

## Enhancing Trust

When a government organization uses a .gov domain, their customers benefit from the increased trust that the TLD provides. To make it easier to qualify for a .gov domain, we:

- Added **two new domain types**:
   - [Interstate](https://home.dotgov.gov/registration/requirements/#interstate-domains) domains for _multi-state_ governmental organizations, and
   - [Independent intrastate](https://home.dotgov.gov/registration/requirements/#independent-intrastate-domains) domains for governmental organizations within a single state _where authority is vested in them to operate independently from the state_.
- Clarified that **state courts and legislatures** [**can obtain a .gov domain**](https://home.dotgov.gov/registration/requirements/#state-courts-and-legislatures) without needing to coordinate through their state’s executive branch.
- Formalized and published our policy for approving [**naming convention exceptions**](https://home.dotgov.gov/registration/requirements/#exception-requests) for cities and counties. We also published new guidance to clarify domain requirements, share .gov domain data, and recommend best practices.

## What’s Next?

The DotGov team is committed to increasing the resiliency of the .gov TLD infrastructure. In the coming months, we will publish recommendations on security best practices for new and existing domains. We’ll also make it possible to publish contact information to DotGov's [WHOIS](https://domains.dotgov.gov/dotgov-web/registration/whois.xhtml), increase the protections available when interacting with our help desk, and generally work to make the .gov registrar easier to use. [Visit our new homepage](https://home.dotgov.gov/) to keep up with the latest news from our team.
