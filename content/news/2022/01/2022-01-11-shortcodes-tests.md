---
date: 2022-01-11 18:53:00 -0500
kicker: kicker
title: shortcodes tests
deck: deck
summary: summary
# See all topics at https://digital.gov/topics
topics:
  - 18f
# See all authors at https://digital.gov/authors
authors:
  - toni-bonitto
slug: shortcodes-tests
primary_image: 10x-gold-x-logo
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

## Text highlights

Within regular copy

`About` or `About Us`

Within a box

{{< box >}}

 `About` or `About Us`

{{< / box >}}

With yellow highlight

**C.** {{< highlight >}}Agencies must develop accessibility statements for their website{{< /highlight >}} and appoint a Section 508 Coordinator {{< highlight >}}as required by OMB Memorandum, <em>Strategic Plan for Improving Management of Section 508 of the Rehabilitation Act</em>{{< /highlight >}}.

---

## Box


{{< box >}} Box with no color set {{< /box >}}


{{< box color="base" >}} Box with base {{< /box >}}


{{< box color="base-light" >}} Box with base-light {{< /box >}}


{{< box color="base-dark" >}} Box with base-dark {{< /box >}}


---

## Button

{{< button href="https://usdigitalregistry.digitalgov.gov/admin" text="Register and Manage Accounts" >}}

---

## Note

{{< note >}} text goes here... {{< /note >}}

A note can also include a button: 

{{< note button-text="submit">}} text goes here... {{< /note >}}

Activity Note — 

{{< note "activity" >}} Activity text goes here... {{< /note >}}

Alert note — 

{{< note "alert" >}} Alert text goes here... {{< /note >}}

Comment note — 

{{< note "comment" >}} > Comment goes here as a blockquote

additional text goes here... {{< /note >}}

---

## Card - comment with button

{{< card-prompt intro="**In your words, help us complete these two sentences.** There are no right or wrong answers, and you’re welcome to submit as many times as you’d like." button-text="Submit your answers" button-url="https://www.URL.here">}}

> 1. To deliver an experience that is trustworthy, we need to _____________.
> 2. To perform this action, we need _______________.

{{< /card-prompt >}}

Live example: https://digital.gov/2019/11/18/building-elements-that-earn-trust/ 

---

## Footnotes

1) Superscript within the copy: 

**C.** Agencies must develop accessibility statements for their website and appoint a Section 508 Coordinator as required by OMB Memorandum, <em>Strategic Plan for Improving Management of Section 508 of the Rehabilitation Act</em>. <sup>[32](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/procurement/memo/strategic-plan-508-compliance.pdf) </sup>;

2) Footnotes, after a horizontal rule (3 dashes or asterisks); see code:

-line-

{{< footnote >}}

<sup>28</sup> _See_ 29 U.S.C. &sect; 794d <br />
<sup>29</sup> Section 508 does not apply to national security systems, as that term is defined in section 11103(a) of title 40. 29 U.S.C. &sect; 794d(a)(5). <br />
<sup>30</sup> 36 CFR Part 1194 <br />
<sup>31</sup> 29 U.S.C. &sect; 794d(g) <br />
<sup>32</sup> [OMB Memorandum: Strategic Plan for Improving Management of Section 508 of the Rehabilitation Act (PDF, 212 kb, 13 pages, January 2013)](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/procurement/memo/strategic-plan-508-compliance.pdf)

{{< /footnote >}}

live examples: https://digital.gov/resources/required-web-content-and-links/ 

Note: Footnotes should display in a slightly smaller text size; not the default.

---

## Accordions


### Works Cited

{{< accordion kicker="" title="Source List" icon="fas fa-copy" >}}
1. “The Biden-Harris Management Agenda Vision.” _The Biden-Harris Management Agenda Vision_, 2021, https://www.performance.gov/pma/vision/. Accessed 16 February 2022.

2. Office of Management and Budget. “Study to Identify Methods to Assess Equity: Report to the President.” _Study to Identify Methods to Assess Equity: Report to the President_, July 2021, https://www.whitehouse.gov/wp-content/uploads/2021/08/OMB-Report-on-E013985-Implementation_508-Compliant-Secure-v1.1.pdf. Accessed 15 February 2022.

3. Office of Management and Budget, Executive Office of the President. “Methods and Leading Practices for Advancing Equity and Support for Underserved Communities Through Government.” _Federal Register_, 05 May 2021, https://www.federalregister.gov/documents/2021/05/05/2021-09109/methods-and-leading-practices-for-advancing-equity-and-support-for-underserved-communities-through. Accessed 05 March 2022.

4. United States, Executive Office of the President. “Executive Order 13985: Advancing Racial Equity and Support for Underserved Communities Through the Federal Government.” _The Federal Register_, 20 January 2021, https://www.federalregister.gov/documents/2021/01/25/2021-01753/advancing-racial-equity-and-support-for-underserved-communities-through-the-federal-government. Accessed 15 February 2022.

5. United States, Executive Office of the President. “Executive Order 14035: Diversity, Equity, Inclusion, and Accessibility in the Federal Workforce.” _The Federal Register_, 30 June 2021, https://www.federalregister.gov/documents/2021/06/30/2021-14127/diversity-equity-inclusion-and-accessibility-in-the-federal-workforce. Accessed 04 March 2022.

6. United States, Executive Office of the President. “Executive Order 14058: Transforming Federal Customer Experience and Service Delivery To Rebuild Trust in Government.” _Federal Register_, 16 December 2021, https://www.federalregister.gov/documents/2021/12/16/2021-27380/transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government. Accessed 16 February 2022.
{{< /accordion >}}

### Policies (Card code; not accordion code)

{{< card-policy src="https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/procurement/memo/strategic-plan-508-compliance.pdf" kicker="Policy" title="**OMB Memorandum:** Strategic Plan for Improving Management of Section 508 of the Rehabilitation Act" pdf="(PDF, 212 kb, 13 pages, January 2013)" >}}**Increase Transparency**

Transparency of Federal programs, performance, and spending facilitates increases in accountability and citizen engagement. To support increased transparency, the Accessibility Committee has expanded on information available to agencies by creating a best practices library. The library may be found at [https://cio.gov/2011/05/](https://cio.gov/2011/05/) and contains examples of best practices in policy and procedures that can increase transparency. Feedback from the listening sessions and the national dialogue indicates several areas that would benefit from more transparency. Specific areas include opportunities for public engagement, inter-agency collaboration, and standardizing agency approaches to Section 508 implementation.

Transparency of agency Section 508 practices and application will be improved through two key actions: (1) providing the public with a standard feedback mechanism and statement available on agency websites, and (2) making [www.section508.gov](https://www.section508.gov) the one-stop information resource for agencies with respect to successful Section 508 management and implementation. Specifically, within 180 days of the release of this strategic plan:

1. the General Services Administration (GSA) will share with OMB the action plan for transforming www.section508.gov into the one-stop source of information and communication for successfully managing Section 508 implementation throughout the acquisition lifecycle.
2. {{< highlight >}}Federal agencies will include an accessibility statement on all inter- and intranet websites. Secondary sites can link to the accessibility statement on the domain website. The accessibility statement should, at a minimum, include contact information for the agency Section 508 program, date of the last update, and the ability for website visitors to provide comments and/or feedback regarding the agency Section 508 program.{{< /highlight >}} Sample and best-in-practice accessibility statements can be found at [www.section508.gov](https://www.section508.gov).
{{< /card-policy >}}


### Event transcript

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for June 2022" icon="fas fa-copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For June 2022 — home to Fathers Day, Juneteenth, heat waves, cold waves, Flag Day, Kamehameha Day, and the Summer Solstice —all of which we'll celebrate with this bright and summery USWDS logo. 

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, dark hair, casual officewear, a look of childish innocence: close enough! Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at [handbook.tts.gsa.gov/code-of-conduct] (handbook.tts.gsa.gov/code-of-conduct). We’ve posted the link to the code of conduct in the chat. 

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 41:** Thanks Elisa! And now let's do some Q&A!

**[Q&A]**

**Slide 42:** Thanks for joining today’s USWDS monthly call. Next month, we'll be taking a break. We'll be back with a new monthly call in August. Have a great summer!

As always, I encourage you to join our community in the [#uswds-public] (https://chat.18f.gov/) Slack channel so you can follow our progress, get answers, and contribute to the discussion.

Thank you, and see you in August!

{{< /accordion >}}

---

## Anchor links

1) On a regular resource page, where the H2 headers create a sidebar menu, you can link to those to other sections within the copy. See the About Page section on [Required Web Content and Links](https://digital.gov/resources/required-web-content-and-links/).


`On your primary agency site, you would include information about the agency with descriptions of the agency organization structure, mission, and statutory authority, and links to the following information:`

`- the agency’s privacy policy page _([more on this below](#privacy-policy))_`

links to https://digital.gov/resources/required-web-content-and-links/#privacy-policy

`- information as required under the No Fear Act of 2002 _([more on this below](#equal-employment))_`

links to https://digital.gov/resources/required-web-content-and-links/#equal-employment 


2) Footnotes should link back to previous place in copy. (looking for that code...)
Width can be altered with Measure in uswds; https://designsystem.digital.gov/components/typography/. 


---

END of examples
