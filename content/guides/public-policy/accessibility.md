---
date: 2024-06-14 09:00:00 -0500
title: "Accessibility"
deck: ""
summary: "An introduction to Section 508 of the Rehabilitation Act of 1973, and related laws and policies."
guide: public-policy
primary_image: guide-public-policy

---

In the [previous section](https://digital.gov/guides/public-policy/information-collection/#content-start), we discussed the Paperwork Reduction Act (PRA) — specifically why it exists, when it applies, tips for designing research studies with PRA in mind, and user research insights from the FindSupport.gov team. Now, we will touch on Section 508 of the Rehabilitation Act of 1973 and the importance of building accessible digital products.

{{< note >}} 
This information is best practices based on our own experience. We encourage you to [get in touch with your agency’s Section 508 program manager](https://www.section508.gov/tools/program-manager-listing/) to answer any specific accessibility-related questions.
{{< /note >}}

## Why is accessibility important?

Tim Berners Lee, credited as the founder of the internet, once said “The power of the web is in its universality. Access by everyone regardless of disability is an essential aspect.” <sup><a aria-describedby="footnote-label" href="#fn1" id="footnotes-ref1">[1]</a></sup> In short, accessibility ensures all users can access a product or service. 

## Why Section 508 exists

The Rehabilitation Act of 1973 is a federal law that prohibits federal discrimination based on disability status. [Section 508](https://www.section508.gov/manage/laws-and-policies/) requires that all federal agencies make all information and communication technology accessible to people with disabilities. This includes, but is not limited to, the following:

- Government websites
- Applications
- Emails
- Multimedia
- Electronic media

Consider Section 508 as part of a collection of federal policies that maximize the accessibility of government. This includes but is not limited to the following:

- [Section 503 of the Rehabilitation Act of 1973](https://www.dol.gov/agencies/ofccp/section-503/law)
- [Sections 501 and 505 of the Rehabilitation Act of 1973](https://www.eeoc.gov/statutes/rehabilitation-act-1973#:~:text=Section%20501%20prohibits%20employment%20discrimination,attorney's%20fees%20under%20Section%20501.)
- [Americans with Disabilities Act of 1990, as amended](https://www.ada.gov/law-and-regs/ada/)
- [Section 255 of the Telecommunications Act of 1996](https://www.access-board.gov/ict/guide/2555_guide.md.html)
- [Assistive Technology Act of 1998](https://www.congress.gov/bill/105th-congress/senate-bill/2432)
- [Plain Language Act of 2010](https://www.plainlanguage.gov/law/)
- [Agency accessibility policies](https://www.section508.gov/manage/laws-and-policies/update-agency-policies/)

## Design for all users

As web and digital practitioners in government, it is important to consider all users when building products or services.

Disability is a mismatch between a person and their environment. For the person who isn’t able to do something, it’s this mismatch that impairs an individual. It’s important to understand that everyone experiences some form of disability and [reframe our idea of disability](https://digital.gov/resources/advanced-accessibility/#reframing-our-idea-of-disability).

See the below table for a short list of disability types.

<table class="usa-table usa-table--striped">
  <caption></caption>
  <thead>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="col">Type of disability</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Mobility or physical</th>
      <td>Weakness or limited ability and inability to independently use one’s body or one or more of their extremities</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Hearing</th>
      <td>Mild to moderate hearing loss (hard of hearing). Substantial to uncorrectable hearing loss (deafness)</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Vision</th>
      <td>Low vision (short- or long-sightedness, blurred vision), total blindness, or color blindness</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Cognitive, learning, or neurological</th>
      <td>Impacts how a person hears and/or understands information, moves, sees, and/or speaks</td>
    </tr>
  </tbody>
</table>

## Design for all situations

See the below table for a short list of different types of situations to consider when building and designing products in government.  Although these conditions are not explicitly outlined in Section 508, they remain important barriers to consider when building products in government. 

<table class="usa-table usa-table--striped">
  <caption></caption>
  <thead>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="col">Barriers to access</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Broadband access</th>
      <td>How well does your product work in low-bandwidth areas?</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Language</th>
      <td>How many languages does your product support (and at what proficiency)?</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Technology access</th>
      <td>Can your product be accessed on a mobile phone, laptop, or both?</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Subject matter expertise</th>
      <td>Is your content at an appropriate reading level? Do you know your audience and what they need?</td>
    </tr>
  </tbody>
</table>

## Design for accessible and successful experiences

When it comes to accessible digital experiences, the Web Content Accessibility Guide 2.0 (WCAG 2.0) outlines four principles for designing accessible web content. The guidelines state that all web content must be perceivable, operable, understandable, and robust—otherwise, users with disabilities cannot access the web. Embracing these principles aligns with Section 508 requirements.

<table class="usa-table usa-table--striped">
  <caption></caption>
  <thead>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="col">WCAG 2.0 Principles</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Perceivable</th>
      <td>Users must be able to perceive the information being presented (it can't be invisible to all of their senses)</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Operable</th>
      <td>Users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Understandable</th>
      <td>Users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)</td>
    </tr>
    <tr style="text-align: left; vertical-align: top;">
      <th scope="row">Robust</th>
      <td>Users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)</td>
    </tr>
  </tbody>
</table>

## Explore accessibility resources

Overall, accessible design represents the first step to [universal design](https://www.section508.gov/develop/universal-design/). By accounting for all types of disabilities and circumstances, government web and digital practitioners can improve how their products serve the public. [Section508.gov](https://www.section508.gov/) offers information on [accessibility policies](https://www.section508.gov/manage/), [acquisition resources](https://www.section508.gov/buy-sell/), and [content creation tools](https://www.section508.gov/create/).

For more information about how different product team roles play in making federal resources accessible and inclusive, browse the [Accessibility for Teams guide](https://digital.gov/guides/accessibility-for-teams/) on Digital.gov. Additionally, the [Technology Accessibility Playbook](https://www.section508.gov/manage/playbooks/technology-accessibility-playbook-intro/) on Section508.gov offers 12 key plays for ensuring that U.S. government technology is accessible for people with disabilities. 

{{< ring title="Case study">}}
**Baking accessibility into FindSupport.gov**

The FindSupport team frequently tested with people with disabilities to ensure [FindSupport.gov](https://www.samhsa.gov/find-support) met Section 508 requirements.

Focusing on our product roadmap, the Substance Abuse and Mental Health Administration (SAMHSA) and Centers for Medicare and Medicaid Services (CMS) teams took the following steps to center accessible experiences into the site’s design and functionality. This included:

- Creating automated and manual testing plans
- Setting regular cadence for testing accessibility
- Accounting for accessibility when creating and estimating user stories
- Prioritizing new accessibility issues
- Outlining team accessibility roles
{{< /ring >}}

---

<footer>
<h3 id="footnote-label">Footnotes</h3>
<ol>
<li id="fn1">“World Wide Web Consortium Launches International Program Office for Web Accessibility Initiative.” 1997. W3C. October 22, 1997. <a href="https://www.w3.org/press-releases/1997/ipo-announce/">https://www.w3.org/press-releases/1997/ipo-announce/</a>. <a href="#footnotes-ref1" aria-label="Back to content">↩</a></li>
</ol>
<footer>
