---
# View this page at https://digital.gov/2020/01/08/a-look-at-new-gsagov
# Learn how to edit our pages at https://workflow.digital.gov

slug: a-look-at-new-gsagov
date: 2020-01-08 18:00:00 -0500
kicker: "USWDS"
title: "A Look at the New GSA.gov"
deck: "How the GSA incorporated the U.S. Web Design System into their flagship site."
summary: "How the GSA incorporated the U.S. Web Design System into their flagship site."

# see all topics at https://digital.gov/topics
topics:
  - design
  - gsa
  - us-general-services-administration
  - uswds

# see all authors at https://digital.gov/authors
authors:
  - amanda-dean

# Primary Image (for social media)
primary_image: "gsa-uswds"

# Make it better ♥

---

When it comes to applying the [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS), each implementation team starts from a different place&mdash;from scratch, redesign, style update, or functionality upgrade&mdash;depending on their site and user needs. That’s why USWDS is adaptable by design and offers options for incremental adoption. Individual implementation experiences will (and should) vary, and we want to know how it’s going.

To kick us off, we’re sitting down with Patrick Son and Sarah Bryant from the U.S. General Services Administration (GSA) to talk about how they incorporated USWDS on their flagship site, [GSA.gov](https://www.gsa.gov/). We asked them a bunch of questions, including:

-   What did you set out to do?
-   What were your biggest challenges?
-   What surprised you?
-   What did you accomplish?
-   What is your best piece of advice for others?

## What We Did for GSA.gov

{{< img src="gsa-uswds" >}}

We wanted to implement USWDS style and functionality guidance on top of some of our existing design elements and templates. Even with the flexibility of USWDS, applying them to an existing site can be challenging because we want to avoid inconsistencies between versions and breaks in functionality. We had to choose which layouts we could apply on top of our existing content to make sure this didn’t happen.

We’d already implemented some of the original USWDS design guidance when we redesigned GSA.gov a few years back. At that time, we reviewed our design elements and ensured that they covered usability and accessibility best practices. We also adopted important USWDS user experience guidance&mdash;like functionality of buttons—while using our own code.

The passage of the [21st Century Integrated Digital Experience Act](https://digital.gov/resources/21st-century-integrated-digital-experience-act/) (21st Century IDEA) in December 2018 spurred us to move forward with a fuller implementation of USWDS on GSA.gov, which will help us meet the goals of 21st Century IDEA. Along the way, we also increased our understanding of the challenges other agency digital teams might face on their USWDS journey. So, we’re sharing our story as a case study for other teams who are going through the process.

That’s why this time around, we embraced everything USWDS offers&mdash;from integrating its design principles to following its user experience guidance, and using USWDS code.

We had a small team of one developer, one designer, a project manager, and a few product owners working on implementation from June to November of 2019&mdash;shout-out to Patrick Son, Sarah Bryant, Joe Garrido, Tokey Bradfield, Boaz Englesberg, and everyone else who made it happen! We officially “launched” on November 8, 2019.

We created a test site to use for USWDS testing and implementation, since any developments we made on our production server also had to be implemented on the testing server. Our live site was active during our planning and implementation, with users still using our systems and working on content.

For look and feel, we used the design system’s downloadable templates and built around those&mdash;the templates made it easy. We kept our information architecture and back-end functionality mostly the same so content owners wouldn’t have to learn a new system while implementing the front-end USWDS guidance.

We applied text and style guidance from USWDS, and added our agency branding and “GSA blue” color on top of those styles so our users would still recognize and trust our site. We love that the flexibility of USWDS allows us to keep our agency’s visual identity intact, while introducing a look and feel that’s more consistent with other government websites.

There is a learning curve&mdash;and we had to really dig into our site and USWDS to figure out what we could apply, fully or partially. We had to decide which of the size, system, and theme tokens to use, which took a bit of practice. When we encountered USWDS styles (like CSS columning) that weren’t a 1:1 match with ours, our designer and developer worked with the USWDS team to figure out what worked for us. Some fixes will have to be made manually on content; you should expect to do a good amount of testing and QA. Ultimately, you want to do what’s best for your site and your [customers](https://www.performance.gov/CAP/cx/).

### Tip from Dan Willams, USWDS Product Lead

"Know your team structure and resources. If you have a well-equipped implementation team, you can start from USWDS defaults, then customize."

"If you have fewer resources or a smaller, more limited team, you can lean on defaults and templates, or use existing systems like [Federalist](https://federalist.18f.gov/documentation/) or pre-built Drupal themes." "It’s great when an agency-level team can develop templates and resources that smaller teams can apply with a minimum of effort.

:bulb: _Learn more about getting started with the [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS) and how to join the community at [https://designsystem.digital.gov](https://designsystem.digital.gov/)_
