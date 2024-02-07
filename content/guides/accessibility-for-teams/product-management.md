---
date: 2019-07-31 09:00:00 -0500
title: "Accessibility for product managers"
deck: ""
summary: "Everyone who works on government websites has a role to play in making federal resources accessible and inclusive."
guide: accessibility-for-teams
image: guide-dap
primary_image: guide-dap
layout: single
---


# Getting started

## Accessibility for product managers

Product managers play a vital role in communicating accessibility requirements early in the project lifecycle, ensuring each team member knows their responsibility, and keeping the team accountable for building accessible products. Following these steps, you’ll make sure you’re not only following legal requirements, but making your product more usable for everyone.

### Why you should care

Any product released by the government must conform to the standards of [Section 508](https://www.section508.gov/) (which aligns with the [W3C Web Content Accessibility Guidelines (WCAG) 2.0 Level AA](https://www.w3.org/WAI/WCAG20/quickref/)), a law that ensures all web content is accessible to anybody with a disability. Not following these requirements poses significant legal risks for any government entity.

If you have project-specific questions, ask your agency’s accessibility team.

# Accessibility basics

## Learn the basics of accessibility and what your team does to make content accessible.

### Steps to take
- Familiarize yourself with the high-level accessibility roles for each member of your team:
  - [Front end / development]({{< link "/accessibility-for-teams/front-end/#getting-started" >}}): Ensure front-end code is written accessibly and conducts manual and automated testing.
  - [Content design]({{< link "/accessibility-for-teams/content-design/#getting-started" >}}): Ensure content is written in plain language and headings, images, and links are accurately labeled.
  - [Visual design]({{< link "/accessibility-for-teams/visual-design/#getting-started" >}}): Ensure that designs are accessible, pages are laid out in a logical order, and content meets color contrast requirements.
  - [UX design]({{< link "/accessibility-for-teams/ux/#getting-started/" >}}): Ensure that overall experience is built and designed in an accessible fashion, conduct usability testing with people who need accessibility features.
- Ensure your team members know where to find the accessibility guidelines for their role and follow them from the start of a project. The guides are located here: [front end]({{< link "/accessibility-for-teams/front-end/#getting-started" >}}), [content design]({{< link "/accessibility-for-teams/content-design/#getting-started" >}}), and [visual design]({{< link "/accessibility-for-teams/visual-design/#getting-started" >}}).
- Take an Accessibility 101 class, such as [Udacity’s Web Accessibility class](https://www.udacity.com/course/web-accessibility--ud891), to get a baseline knowledge of accessibility.
- Learn how to [navigate a webpage using only your keyboard]({{< link "/accessibility-for-teams/visual-design/#keyboard-access" >}}) and [learn how to use VoiceOver]({{< link "/accessibility-for-teams/visual-design/#screen-reader" >}}) so you can spot check new features when necessary.

## Consider how everyone will use the product.

### Steps to take
- Don’t assume that your users don’t have accessibility needs. Even if your product serves a small subset of users, any one individual may experience situational (working in a loud environment) or temporary disabilities (having an arm in a cast), or develop a more permanent one.
- Consider inclusion in your research and usability testing with people across a range of ages, races, locations, devices, interests, abilities, languages, English proficiency, gender identities, sexual orientations, and access to reliable internet.
- Consider testing your product with people in their own context, such as people who use alternative reading devices, have color blindness impairments, or motor impairments.
- Set a regular cadence for testing accessibility scenarios.

#### Resources
[Personas for Accessible UX](https://prod.rm.gfolkdev.net/a-web-for-everyone/personas-for-accessible-ux/)

# Project Workflow

## Build accessibility into your project workflow rather than retrofitting it at the end.

### Steps to take
- Encourage the team to account for accessibility when creating and estimating stories.
- Add accessibility as an acceptance criteria or definition of done for each story or new feature.
- Add accessibility testing into each development sprint or QA check.
- Work with your front end developers to choose an [automated testing plan]({{< link "/accessibility-for-teams/front-end/#automated-testing" >}}).
  - Including automated accessibility testing throughout the development process can help quickly catch [many accessibility errors](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/), but can’t guarantee that your site is accessible. Always combine automated testing with ongoing manual testing.
- When a new accessibility issue arises that you may have missed, prioritize those issues appropriately against other development concerns:
  - Consider whether the error is [critical, less critical, or minor](https://pages.18f.gov/accessibility/checklist/).
    - Critical issues will cause serious problems and/or stop most users of assistive technology from using the site.
    - Less critical issues may cause problems or increased frustration for certain users.
    - Minor issues will cause problems or frustration for a small number of users.
  - Consider prioritizing the issue if it appears on high-touch pages, critical user paths, or site-wide templates.

# Final Review

## Request a final review from an accessibility expert.

### Steps to take
- In most cases, you may request a manual accessibility review from the accessibility team at your agency at least two weeks before a public launch. This ensures there’s enough time to conduct the review and make necessary changes. Since you've been manually testing throughout the project, this should be quick.
- Depending on your project’s requirements, you may also choose to hire an outside firm to conduct testing as part of your QA.
