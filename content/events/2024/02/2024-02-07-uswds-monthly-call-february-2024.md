---
title: USWDS Monthly Call - February 2024
deck: How to suggest a new component for the U.S. Web Design System
kicker: USWDS
summary: Learn about the USWDS component lifecycle, and how you can suggest a
  new component.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsceyvpz4iGws79NmQy1Dj0BUoDVtPKzs#/registration
date: 2024-02-15 14:00:00 -0500
end_date: 2024-02-15 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - user-centered-design
slug: uswds-monthly-call-february-2024
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2024-uswds-monthly-call-feb-title-card
---

{{< asset-static file="USWDS Monthly Call Feb 2024.pptx" label="View the slides (PowerPoint presentation, 5.8 MB, 81 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for February 2024" icon="content_copy" >}}**Slide 1:** Welcome everyone, to the U.S. Web Design System monthly call for February, 2024 — This month we're celebrating Black History Month with shades of green, gold, orange, and brown. As well as Valentine's Day yesterday with shades of pink.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a plaid flannel shirt and a fleece, because it's still winter. On my fleece is a green button with some sprouts on it that my son made for me.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls). We typically post videos within a week of the monthly call, and we also link out to the slides and the script, hosted at digital.gov. We've posted a link to our monthly call page in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

We’ve got a couple nice new site and feature launches, a couple product updates, and then we’ll spend the rest of the time talking about a USWDS component lifecycle model and our new approach to new-component proposals.

**Slide 4:** Let's get into it with site launches.

**Slide 5:** First, [simpler.grants.gov](https://www.google.com/url?q=https://simpler.grants.gov&sa=D&source=docs&ust=1711052748736300&usg=AOvVaw2YSQ8xGM91WUdioPsTCZMY), an exciting new initiative from the grants.gov team at the department of Health and Human Services. Well, grants.gov provides a centralized location for grant seekers to find and apply for federal funding opportunities. Simpler.grants.gov is a new site from the grants.gov team that's using a transparent, iterative, and agile process to document their progress modernizing and improving the grants.gov service. It's an exciting project where they'll be building software out in the open, and I for one, am pretty interested in their approach and their progress! The simpler.grants.gov homepage features a simple, text-focused layout, with a large blue hero field and the words "We're building a simpler Grants.gov!"

**Slide 6:** Next, [Search.gov](https://www.google.com/url?q=https://search.gov&sa=D&source=docs&ust=1711052748730824&usg=AOvVaw3N-xMZKFbY9VHxVGWKAjS-) is starting to roll out hosted search results pages powered by USWDS code. You know search.gov, right? It's the search engine by and for the federal government, a free service powering search results on over 2,000 websites. Well earlier this year they released a beta of a USWDS-based redesign of their hosted results page. Now Digital.gov is the first site to be able to use it, hosting a USWDS-powered search result layout! Search.gov and DigitalGov — a real chocolate and peanut butter combination in my book. On this slide we see the [Digital.gov search results](https://www.google.com/url?q=https://find.digitalgov.gov/search?utf8%3D%25E2%259C%2593%26affiliate%3Ddigitalgov%26query%3Dusability%26commit%3D&sa=D&source=docs&ust=1711052748731793&usg=AOvVaw1J9MZWOISXo_njMu-hJ7Ti) page for the keyword "usability". We see a clean display of search results, as well as a way to select between all search results and just videos.

**Slide 7:** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8:** Now for a few product updates…

**Slide 9:** First USWDS 3.8.0. Last month I said that it would be coming in January… but that didn't happen. We got super busy with a lot of the component lifecycle work we're talking about today, so we had to delay the release. Well it's still coming — and it's still a release that has a number of good improvements largely contributed by the community, like sticky headers in tables, alignment improvements for icons in buttons, and indeterminate checkbox styling — but we're now aiming for the end of this month. And this time, we will hit that deadline, and you can check in on our progress on our public project board — [we're posting that link in the chat](https://www.google.com/url?q=https://github.com/orgs/uswds/projects/8/views/32?sliceBy%255Bvalue%255D%3Duswds%2B3.8.0&sa=D&source=docs&ust=1711663441786792&usg=AOvVaw1fmg5gDdwSmTHDPqCZLvai).

**Slide 10:** Next, I'd like to give an update on the accessibility tests we launched last month.

**Slide 11:** This month we'll be launching accessibility test pages for three more design system components: table, icon, and typography. We're just finishing these up as well, and we'll be publishing them alongside USWDS 3.8.0 by the end of the month. And that's it for product updates!

**Slide 12:** So today, we'd like to talk about work we've done to outline a USWDS component lifecycle model, and improvements we're making to new-component proposals.

**Slide 13:** At the end of last year, we did a lot of thinking about where we're going as a design system; what we value, and where we're going to spend our time and energy. At the end of that thinking, we came to the monthly call and talked about updates to our mission and vision. And also about our Polestar, where we're pointed as a product.

**Slide 14:** Polestar: We help government teams align, design, and keep their websites and services up to date.

**Slide 15:** Vision: Empowered and supported digital service teams. Familiar and easy-to-use digital services.

**Slide 16:** Mission: Shaping the future of government digital services.

**Slide 17:** As we come into 2024, you may ask, "Why component lifecycle now?" It may seem surprising that we're talking about a component lifecycle model — about how components are proposed and developed, how they make their way into the design system, mature, and how sometimes they're deprecated and retired. Why is this a priority now?

Well, a component lifecycle is not just for devs and pedants. Today we'd like to talk about how it really connects to our mission and supports the kinds of connections and activities at the heart of our product.

**Slide 18:** Thinking about how components start, grow, and mature is something of a scale model of how the design system itself grows and matures, since components are such an important part of what we deliver.

**Slide 19:** Specifically, we're really focussed on how USWDS can be a place to connect digital design and delivery teams across government, to better know what we know, and learn from each other.

**Slide 20:** You know, I hate to be the person to tell you this, but our government is big.
And collectively, in the aggregate, we know a lot. There's incredible skill, talent, sensitivity, craftsmanship, and care across our teams, our agencies, and our products. 
If you take a long view of what we, together, are building, I believe it's inarguable that government digital services are improving — and I would argue further that government digital services are improving faster than the internet as a whole. If government is the tortoise in the race between the tortoise and the hare, I'd say the tortoise has the momentum these days.

**Slide 21:** And I'd say _that's_ because of a real mission-driven commitment to human centered design and to our inclination to pitch in, to help out, to share what we know with each other, and keep pushing forward.
Because for sure, while momentum may be on our side, there's a long way to go, and honestly there's never really a finish line.


**Slide 22:** It's long been our challenge here at USWDS to facilitate collaboration and contribution, to share and scale effective solutions from anywhere in government. To convert the skill and experience that we clearly have in the aggregate into a common infrastructure that supports and elevates any team and product. And that's been a tough nut to crack.

**Slide 23:** 

**Slide 24:** 

**Slide 25:** 

**Slide 26:** 

**Slide 27:** 

**Slide 28:** 

**Slide 29:** 

**Slide 30:** 

**Slide 31:** 

**Slide 32:** 

**Slide 33:** 

**Slide 34:** 

**Slide 35:** 

**Slide 36:** 

**Slide 37:** 

**Slide 38:** 

**Slide 39:** 

**Slide 40:** 

**Slide 41:** 

**Slide 42:** 

**Slide 43:** 

**Slide 44:** 

**Slide 45:** 

**Slide 46:** 

**Slide 47:** 

**Slide 48:** 

**Slide 49:** 

**Slide 50:** 

**Slide 51:** 

**Slide 52:** 

**Slide 53:** 

**Slide 54:** 

**Slide 55:** 

**Slide 56:** 

**Slide 57:** 

**Slide 58:** 

**Slide 59:** 

**Slide 60:** 

**Slide 61:** 

**Slide 62:** 

**Slide 63:** 

**Slide 64:** 

**Slide 65:** 

**Slide 66:** 

**Slide 67:** 

**Slide 68:** 

**Slide 69:** 

**Slide 70:** 

**Slide 71:** 

**Slide 72:** 

**Slide 73:** 

**Slide 74:** 

**Slide 75:** 

**Slide 76:** 

**Slide 77:** 

**Slide 78:** 

**Slide 79:** 

**Slide 80:** 

**Slide 81:** 

**Slide 82:** 

**Slide 83:**

{{< /accordion >}}

Join the U.S. Web Design System (USWDS) team to learn more about the complete lifecycle of a USWDS component.

In this session, you will learn:

* How to suggest a new component
* What to expect throughout the proposal process
* What comes next in the component’s lifecycle

**This event is best suited for:** Developers and designers (all levels)

## Speakers

* **Dan Williams** **—** Product Lead, USWDS
* **Anne Petersen** **—** Experience Design Lead, USWDS
* **Amy Leadem** **—** Developer, USWDS Contractor

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
