---
date: 2018-07-09 09:00:00 -0500
title: "Accessibility for product managers"
deck: ""
summary: ""
guide: accessibility-for-teams
image: guide-dap
primary_image: guide-dap
summary_box: true
topics:
  - accessibility
  - product-and-project-management
  - user-experience
layout: single
---

## Getting started

Product managers play a vital role in communicating accessibility requirements early in the project lifecycle, ensuring each team member knows their responsibility, and keeping the team accountable for building accessible products. Following these steps, you’ll make sure you’re not only following legal requirements, but making your product more usable for everyone.

### Why you should care

Any product released by the government must conform to the standards of [Section 508](https://www.section508.gov/) (which aligns with the [W3C Web Content Accessibility Guidelines (WCAG) 2.0, Level AA](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=a%2Caaa)), a law that ensures all web content is accessible to anybody with a disability. Not following these requirements poses significant legal risks for any government entity.

If you have project-specific questions, ask your agency’s accessibility team.


## Accessibility basics

Learn the [basics of accessibility](https://digital.gov/resources/an-introduction-to-accessibility/) and what your team does to make content accessible.

### Steps to take

1. Familiarize yourself with the high-level accessibility roles for each member of your team:
   - [Front-end development]({{< link "/guides/accessibility-for-teams/front-end-development" >}}): Ensure front-end code is written accessibly and conducts manual and automated testing.
   - [Visual design]({{< link "/guides/accessibility-for-teams/visual-design" >}}): Ensure that designs are accessible, pages are laid out in a logical order, and content meets color contrast requirements.
   - [UX design]({{< link "/guides/accessibility-for-teams/ux-design" >}}): Ensure that overall experience is built and designed in an accessible fashion, conduct usability testing with people who need accessibility features.
2. Ensure your team members know where to find the accessibility guidelines for their role and follow them from the start of a project. The guides are located here: [front-end]({{< link "/guides/accessibility-for-teams/front-end-development" >}}), [content design]({{< link "/guides/accessibility-for-teams/content-design" >}}), and [visual design]({{< link "/guides/accessibility-for-teams/visual-design" >}}).
3. Take an Accessibility 101 class to get a baseline knowledge of accessibility.
4. Learn how to [navigate a webpage using only your keyboard]({{< link "/guides/accessibility-for-teams/visual-design/#keyboard-access" >}}) and [learn how to use VoiceOver]({{< link "/guides/accessibility-for-teams/visual-design" >}}) so you can spot check new features when necessary.


## Diverse users

Consider how everyone will use the product.

### Steps to take

1. **Don’t assume that your users don’t have accessibility needs.** Even if your product serves a small subset of users, any one individual may experience situational (working in a loud environment) or temporary disabilities (having an arm in a cast), or develop a more permanent one.
2. **Consider inclusion in your research and usability testing with people** across a range of ages, races, locations, devices, interests, abilities, languages, English proficiency, gender identities, sexual orientations, and access to reliable internet.
3. **Consider testing your product with people in their own context**, such as people who use alternative reading devices, have color blindness impairments, or motor impairments.
4. **Set a regular cadence** for testing accessibility scenarios.

### Resources

- [An introduction to accessibility](https://digital.gov/resources/an-introduction-to-accessibility/)
- [Personas for Accessible UX](https://prod.rm.gfolkdev.net/a-web-for-everyone/personas-for-accessible-ux/)


## Project workflow

Build accessibility into your project workflow rather than retrofitting it at the end.

### Steps to take

1. Encourage the team to account for accessibility when creating and estimating stories.
2. Add accessibility as an acceptance criteria or definition of done for each story or new feature.
3. Add accessibility testing into each development sprint or QA check.
4. Work with your front end developers to choose an [automated testing plan]({{< link "/guides/accessibility-for-teams/front-end-development" >}}).
   - Including automated accessibility testing throughout the development process can help quickly catch [many accessibility errors](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/), but can’t guarantee that your site is accessible. Always combine automated testing with ongoing manual testing.
5. When a new accessibility issue arises that you may have missed, prioritize those issues appropriately against other development concerns:
   - Consider whether the error is [critical, less critical, or minor](https://pages.18f.gov/accessibility/checklist/).
     - Critical issues will cause serious problems and/or stop most users of assistive technology from using the site.
     - Less critical issues may cause problems or increased frustration for certain users.
     - Minor issues will cause problems or frustration for a small number of users.
   - Consider prioritizing the issue if it appears on high-touch pages, critical user paths, or site-wide templates.


## Final review

Request a final review from an accessibility expert.

### Steps to take

1. In most cases, you may request a manual accessibility review from the accessibility team at your agency at least two weeks before a public launch. This ensures there’s enough time to conduct the review and make necessary changes. Since you've been manually testing throughout the project, this should be quick.
2. Depending on your project’s requirements, you may also choose to hire an outside firm to conduct testing as part of your quality assurance (QA).

### Resources

- [Find your agency's 508 Program Manager](https://www.section508.gov/tools/program-manager-listing/)
