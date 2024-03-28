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

**Slide 23:** Today we're going to get started on this challenge through the angle of splitting bigger problems into smaller problems, and trying to build a framework for solving complex problems — and building complex solutions — a little at a time. Lowering the barriers to participation in the service of delivering high quality finished work.
We're going to approach this from two angles: one which you might call the food truck scenario, and the other which you might call finding the elephant. Or, _you_ might not yet call it that, yet, but _I_ am!

**Slide 24:** First, the food truck scenario — or simply that it is hard to start something really big like a restaurant. It's complicated, expensive, and can take a huge amount of resources and risk to even consider building an operation like that. It really limits who can participate. I live in Portland, and one solution to this problem that's popular here and now pretty much is popular everywhere else as well, is the food truck. What if you could begin to reduce the resources and risk to participate? What if you could prove an idea at a smaller scale? Or like a pop-up restaurant that exists for only a week, using an existing restaurant and kitchen. All these smaller-scale solutions to the problem of the restaurant — of getting food — still need to be safe, they still need to be up to code, and they still need to _deliver_ good food.

**Slide 25:** But in general: what if there were smaller steps between nothing and everything? 
In our world, the "restaurant" is something like the component. Delivering a final component requires design, development, and research of course, but also a complete guidance page and now accessibility tests. Developing a new component is a big commitment, and contributing a component to the design system is a big risk and a lot of work, like trying to get a big new piece of furniture into a tiny walk-up apartment. There's really no guarantee you'll actually be able to get it up the stairs and into the door.

**Slide 26:** So how can we lower the barrier to participation by creating smaller steps between nothing and a component?

**Slide 27:** How can we enable contribution by defining what we need at each phase?

**Slide 28:** How can we help get component contributions into the design system with fewer up-front requirements?

**Slide 29:** And how can we establish cross-team and cross-agency conversations and communication as the continuity between these phases?

**Slide 30:** Let's get into it with two of my colleagues…
First, Amy Leadem, a contractor and a developer on the USWDS core team. Amy, can you introduce yourself and give a brief self description?

AL: Absolutely. Hello everyone, I’m Amy and I am a contractor on the engineering team here at USWDS. I am a white woman with long, wavy brown hair, and today I am wearing a light pink sweater. My pronouns are she/her.

DW: Thanks Amy!

**Slide 31:** I'd also like to introduce Anne Petersen, the Experience Design lead on the core team. Anne, can you introduce yourself and give a brief self description?

AP: For sure. I’m Anne Petersen, my pronouns are they/them. I’m a white person with short brown hair and small glasses in a dark blue shirt today.
DW: Thanks Anne. First, I'd like to pass it to Amy, to walk us through our new component lifecycle model.

**Slide 32:** 

AL: Thanks, Dan. This is Amy and I’m going to show you how we structured the steps in the component lifecycle model, starting with what we're calling **phases**.

**Slide 33:** The overall shape of the lifecycle covers the progression of a component on the way up from just an idea to a mature, stable component published in the design system and in use in projects. It also covers the — as yet unused — process for a component on the way down, deprecating and retiring components that we no longer recommend or support.

The overall shape is a bit like the rising and falling shape we see on the slide as the life cycle progresses: rising to maturity and falling at the end.

**Slide 34:** These main phases in our component lifecycle may seem familiar to you. They are:

**Proposal:** These components are under consideration for development through public discussion and a formal proposal. This part of the shape is now colored gold.

**Development:** These are the components undergoing active design, development, testing, and documentation before public release. This part of the shape is now colored blue.

**Released:** These are the components we've released to the public in our distribution package and documented on the USWDS website. This part of the shape is now colored green.

**Deprecated:** These are the components that do not meet requirements or are no longer needed. This part of the shape is now colored pink.

**Slide 35:** But what's perhaps less familiar are the sub-phases (or steps) within these larger lifecycle groupings. We're putting a lot of work into establishing smaller steps with clearer transitions between steps. 
Establishing sub-phase steps allows us to know precisely what is happening — and needs to happen — with the component at any point in the life cycle. This clarity allows us to define specific responsibilities and requirements for each step, which not only will help us know what needs to happen next to keep the component moving, but also will present opportunities for community contributors to help fulfill those requirements as well.

**Slide 36:** I'd like to call out a new step we're introducing in the Released phase: **Experimental**. The Experimental step of the Released phase — now colored in darker green in our diagram — is a bit of a pilot. To Dan's earlier point, we're considering Experimental to be something of the food truck to the brick-and-mortar of stable USWDS components. We're hoping we can use an Experimental step to release promising components earlier to help collect more real-world usability research. These components might have fewer documentation requirements, less research backup, maybe a few unanswered questions — along with the expectation that they might change more than stable components. But they would include accessibility tests and would be OK to use in production websites.
Today, we've published an overview of all of these phases and steps on our new component lifecycle page on our website. Let’s take a look. 

**Slide 37:** Our new component lifecycle page gives an overview of each phase and step of the component lifecycle. This page covers:
   -What happens in each step,
   -When each step starts and ends,
   -How you can contribute during each step,
   -Where you can find the components that are in each step.

You can find this new page at [designsystem.digital.gov/components/lifecycle](https://designsystem.digital.gov/components/lifecycle).
And now, since every component — from idea and proposal to stable and deprecation — is in one of the steps of the life cycle, we've also been able to build a new component status page to help you know what's happening with both components we've released in the design system and components that aren't in the design system yet.

**Slide 38:** Our new component status page lists all of the USWDS components — and component ideas — currently in the life cycle, and shows which phase the component is currently in. We also provide a link to the most current information on the component. Depending on the phase, this link might point to the discussion, issue, pull request, or component page. You can find this new page at [designsystem.digital.gov/components/status](https://designsystem.digital.gov/components/status).
And it's worth repeating that this page will list components that are in the proposal phase as well, so it can serve as an important reference if you're interested in whether the design system has a specific component, or whether a component you need has a proposal already in progress. If there isn't a proposal, or if you want to speed up the proposal process with your own contributions, well… that's what we'll talk about in just a moment!

**Slide 39:** But first, I'll pass it over to Anne to talk about what's next with the component lifecycle.

**Slide 40:** 

AP: Thanks Amy: this is Anne. That’s a great question. How will this component lifecycle evolve? What’s next for it, and next after that? The exciting part is that we don’t know. Iteration! In action! We’ll find out, basically, as we go.

**Slide 41:** But we do have some assumptions. We think that it's going to be important to get more and more clear and provide more and more detail about how a component moves from one step or phase to another, to develop specific requirements and criteria, and continue to remove ambiguity.

Determining things like: What's necessary to release a component as experimental?

Or: When we evaluate proposals, what criteria should we use?

We're still working through these questions and we hope, eventually, that more clarity will empower folks like you to contribute. But right now we’re figuring out how this initial version works in reality. Where might people not feel empowered or comfortable to participate? Will the detail we need to make sure the components we offer are practical and grounded and are well-tested mean an extra burden for you?

So we'll have to pay attention, see it in action, and listen. To _you_. We want to hear from you.

**Slide 42:** And when we're thinking about all these details, requirements, and evaluation criteria, we're going to be starting from our stated values. We'll go back to our [mission, vision, polestar](https://www.google.com/url?q=https://designsystem.digital.gov/about/&sa=D&source=docs&ust=1711663441787888&usg=AOvVaw3BnY43NX-mYZhnPJj37ynX), and [design principles](https://designsystem.digital.gov/design-principles/), and [product values](https://designsystem.digital.gov/about/product-values/), and proceed from there.

These values are our best articulation of how we think about our own priorities and decision-making, and ultimately the direction of USWDS. They’re where we start, and where we'll ground our evaluation considerations.

You’ve maybe heard the platitude that tells you how to think about whether to say things out loud: Is it true? Is it kind? Is it necessary? This is our version.

**Slide 43:** In order to be effective, the transitions between phases need public, practical, easy-to-understand requirements. They'll need to be concrete and clear.
And in order to be fair, we'll need to publish any requirements before we start any evaluation.

**Slide 44:** So there are still a number of things to work out. This process _itself_ is in beta.
I feel like I’m always the one to get meta in these calls, so here we go again. I’ll try to keep it brief. 

This whole thing is something we’re trying out. Our first but maybe-not-best attempt; though certainly the best we think works right now. We don’t know how well it will work, so we’re open to change here. As we put it into action, I bet we’ll quickly find out if we need to revise. Tell us how it goes.

**Slide 45:** So: let’s try it out! And we think that the best place for folks to start to engage with this process is at the beginning.
How does this process start, for you, right now? Dan, want to give us that starting point?

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

**Slide 79:** We're still working to take baby steps, but this is really what it's all about when I think about the USWDS mission: Shaping the future of government digital services. This process of shaping is  complex and interesting and can be really challenging and satisfying. And it's something we can only effectively do together. And I know if we keep at it, there's going to be an elephant in there… somewhere.

**Slide 80:** Q&A

**Slide 81:** Thanks for joining today’s USWDS monthly call. We'll be back in March with a dev-focussed call, about building new things with USWDS that feel like USWDS. It'll be a nice follow-up from this call, as we start to think about how the component lifecycle moves from proposal to development!

If you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Have a great day and we'll see you next month!

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
