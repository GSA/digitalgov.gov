---
date: 2024-08-07
title: "IT warning banners: How GSA is working to stop unnecessarily frightening users"
deck: "Driving policy changes and improving user experience through M-23-22"
summary: "OMB Memo M-23-22 discourages the use of pop-ups and modals. GSA IT updated security policies so that IT warning banners are presented less intrusively to users."

# See all topics at https://digital.gov/topics
topics:
  - policy
  - security
  - human-centered-design
  - terms-of-service

# See all authors at https://digital.gov/authors
authors:
  - jessica-marine

slug: it-warning-banners-how-gsa-is-working-to-stop-unnecessarily-frightening-users

primary_image: "example-gsa-official-use-system-warning-blue-bg-sm-comp"

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Does your agency use a pop-up, modal, or overlay to present its IT warning banner (system use notifications) to users? The U.S. General Services Administration (GSA) did.

In fact, 34% of GSA’s public-facing websites contained some version of the following warning banner:

{{< img src="warning-banner" >}}

In September 2023, the Office of Management and Budget (OMB) issued M-23-22, Delivering a Digital-First Public Experience, which provides further guidance to help agencies fully implement 21st Century IDEA. The law and policy guidance collectively establish a framework and the [requirements for a digital-first public experience](https://digital.gov/resources/delivering-digital-first-public-experience/).

The M-23-22 memo advises agencies on how to handle system use notifications.

Section III(A)(2), [Reduce user friction by limiting warnings](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/#IIIA:~:text=Reduce%20user%20friction%20by%20limiting%20warnings%3A), says:

<div style="text-align:left; margin-left: 2em;">
<p><em>Agencies should avoid the use of unnecessary pop-ups, modals, overlays, interstitials, and other messages that interrupt the user experience and impede the user from completing a task, unless it is a necessary part of the design of the user experience.</em></p>
</div>
  
And section III(A)(2), [Do not alarm or frighten your users in ways that erode trust](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/#IIIA:~:text=Do%20not%20alarm%20or%20frighten%20your%20users%20in%20ways%20that%20erode%20trust), says:

<div style="text-align:left; margin-left: 2em;">
<p><em>Agencies should consider how legal, security, and error messages are presented and conveyed to users.</em></p>
</div>

{{< quote-block text="The warning message reads like a ‘no trespassing’ sign. It's an unwelcoming signal." cite="GSA employee" >}}

With that in mind, we worked with GSA’s Tech Law Division and GSA IT Security to update the agency’s policies to be consistent with M-23-22. The following updated guidance was provided to GSA websites managers:

1. For public websites, systems, and applications like Digital.gov where **users do NOT register or log in**: Don’t actively present a warning banner to users; instead, link to [GSA.gov’s Privacy and Security policies](https://www.gsa.gov/website-information/website-policies#privacy). GSA websites that leverage the [U.S. Web Design System identifier component](https://www.gsa.gov/website-information/website-policies#privacy) already satisfy this recommendation, as shown below. **No additional System Use Notification is required**.

{{< img src="digital-gov-identifier-policy-circled-med" >}}

2. For public websites, systems, and applications where **users register or log in**: Display system use language with the terms and conditions the user must agree to. The example below from Login.gov presents the Rules of Use at account creation. This method satisfies the acknowledgements required from users that the system they’re using will be monitored, and ensures they are aware that they’re accessing a federal government system every subsequent time they log in.

<div style="text-align:center;"><img src="https://s3.amazonaws.com/digitalgov/rules-of-use-login-gov.png" alt="Login.gov's create an account screen ends with a checkbox and sentence, I read and accept the Login.gov Rules of Use. Rules of use is linked and circled in red."></div>

This work is a great example of a policy tweak that can be immediately applied to public-facing websites to improve user experience.

Thank you to everyone who had a hand in implementing this change: GSA Tech Law Division, GSA IT Security, GSA Service Delivery team, GSA User Experience team, and GSA’s Digital Council User Experience working group.
