---
title: USWDS Monthly Call - March 2022
kicker: New Release
summary: "During this event, the USWDS core team will preview what to expect in the new USWDS 3.0."
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-whats-new-in-uswds-30-mar-2022-tickets-293339555507
date: 2022-03-17 14:00:00 -0500
end_date: 2022-03-17 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - emerging-tech
  - design
# See all authors at https://digital.gov/authors
authors:
  - james-mejia
  - dan-williams
slug: uswds-monthly-call-march-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-monthly-call-march-title-card

---

{{< asset-static file="uswds-monthly-call-march-2022.pptx" label="View the slides (PowerPoint, 3.33 MB, 30 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for March 2022" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for March 2022 — in fact, St Patrick's Day, 2022. And, for March we've got an emerald-hued logo.

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar. Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at handbook.tts.gsa.gov/code-of-conduct. We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?
First we'll show off a couple new site launches.
Then I've got a handful of design system product updates.
And then we'll take a look at a preview of USWDS 3.0, and show what it means to install it, use it, and customize it.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** First up, godirect.gov, a site from the Department of the Treasury. If you're getting federal benefits by paper check, use godirect.gov to set up electronic delivery. The godirect.gov homepage features a large hero image of a family with children and the words "Still getting paper checks?"

**Slide 6:** Next, nationalmap.gov, the website of The National Map program from the National Geospatial Program and the United States Geological Survey. As a former mapmaker, this one is pretty interesting to me! The nationalmap.gov homepage shows a large close-up of a map and the words "The National Map".

**Slide 7:** Congratulations, and great work, everyone! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8:** So now, a few product updates.

**Slide 9:** First up, USWDS 2.13.3. We're working on prepping a new USWDS release right now, hot on the heels of USWDS 2.13.12, focussed on improvements to the visual display of our components when rendered in Windows High Contrast mode.

**Slide 10:** High contrast and forced colors mode is an accessibility setting that constrains the number of colors available to the display to a fixed palette of system colors. We've needed to add some new style rules to make our components more compatible with forced colors mode, and starting with USWDS 2.13.3, all our components should be usable and fully accessible when constrained to limited fixed system colors.

**Slide 11:** We're also releasing some changes to that improve the accessibility of the footer — specifically with the actions that hide and reveal content navigation content in the big footer. I'd hoped that this would get into the last release, but it's going into this one instead!

**Slide 12:** So that's USWDS 2.13.3 — a great accessibility-focussed release — coming next week!

**Slide 13:** Next, USWDS 3.0.0 Beta 4. This one's out now, and it's what we'll be showing here today. This is the first of the beta releases published to the new home of the uswds package on npm: [@uswds/uswds] (https://www.npmjs.com/package/@uswds/uswds).

**Slide 14:** This release also does some more restructuring of our codebase, and fully implements the modular, component-and-package–based structure that will be the basis for future development with the design system. We're all-in on modular structure these days, and we think it'll allow us to deliver a more maintainable product, more suited to your individual projects, that's also more able to grow and evolve over time.

**Slide 15:** And that's USWDS 3.0 Beta 4 —out now. We're linking to the [full release notes] (https://github.com/uswds/uswds/releases/tag/v3.0.0-beta.4) in the chat. You'll want to take a look at the release notes if you're planning to use this Beta, the reorganization and the new package name will affect how you compile your USWDS Sass. If you're not using USWDS Compile, you'll need to make a few manual changes to your compiler's load paths.

**Slide 16:** Which is a great segue into the last of our product updates today, USWDS Compile Beta 2. We've released a couple new USWDS Compile Betas in the last couple days: Compile Beta 1 and Compile Beta 2. The [npm link] (http://npmjs.com/@uswds/compile) and the release note links for [Compile Beta 1] (https://github.com/uswds/uswds-compile/releases/tag/v1.0.0-beta.1)and [Compile Beta 2] (https://github.com/uswds/uswds-compile/releases/tag/v1.0.0-beta.2)are in the chat. These new Betas get USWDS Compile ready to use with USWDS 3.0.

**Slide 17:** In fact, we think that USWDS Compile is the fastest and easiest way to compile USWDS 2 code, but it's the best way to migrate to USWDS 3.0. And this is another part of what we'll show today.

And it's fast. We've updated to the newest [sass-embedded] (https://www.npmjs.com/package/sass-embedded) package for our compiling, and we've seen compile times that are almost twice as fast. Twelve second compiles now take seven seconds. Seven second compiles now take four seconds. USWDS Compile Beta 1 and 2 use the same API as Beta 0, so you should be able to upgrade easily. And if you aren't using USWDS Compile, check it out — especially if you're already using Gulp as a part of your workflow, or if you use a tool like native compiling in Jekyll which does not support modern Sass Module syntax.

**Slide 18:** USWDS Compile Beta 2 is out now, and we encourage you to check it out.

**Slide 19:** So let's put these pieces together and take a look at USWDS 3.0. When I've been thinking about this release, I've been contrasting it a bit with USWDS 2.0. 2.0 was somewhat flashy by USWDS standards. There were a lot of things changing, and a lot of new ways of thinking that it introduced. It was an aspirational release in many ways. By contrast, USWDS 3.0 is much more practical and hardworking. It does just a couple things, and is meant to be an incremental improvement to USWDS 2, not a revolutionary one. Still, what it does is something that's going to slowly reveal its importance over time, and I'm excited to show it off for you today.

**Slide 20:** And to help me out, I'd like to introduce James Mejia, a contractor on the USWDS Core Team. Hi there James!

**Slide 21:** So in our demo today, James will be driving and I'll be narrating, so James why don't you go ahead and share your screen and we'll get started.

[demo]

**Slide 22:** So, USWDS 3.0 will be here next month. At this point, we're largely working on documentation and testing. For all intents and purposes, we'd like to consider next month's monthly call to be the launch date — that would be April 21, 2022, almost exactly three years from the launch of USWDS 2.0.

**Slide 23:** With USWDS 3.0, the idea of USWDS Packages has grown up. What we launched in USWDS 2.1 is now a bit more mature: a version of USWDS centered around components and packages, allowing teams to use just the packages they need, optimize for performance, and update at their own pace. And on the design system side, we can deliver code that focussed on the component, we can be really explicit about dependencies between components, and we can keep components at the center of what we deliver, giving ourselves room to improve how we deliver these components, and to let components evolve at their own pace. Some more slowly, some more quickly.

**Slide 24:** With USWDS 3.0, we're starting the process of unbundling USWDS, making it less of an all-or-nothing proposition. And you may ask, at this point, what's happening with independent component packages, distributed via npm. Well, it's still happening, but we're not ready to launch component packages with 3.0. But what we will do is make sure a component's package is ready to publish before we make any kind of breaking change to any component. So, if we want to make a breaking change to the footer, we'll release a usa-footer package in its existing state, then the breaking change will be published as a subsequent release to both USWDS and to usa-footer. So more to come on independent component packages, as we consider any changes that might require them.

**Slide 25:** USWDS 3.0 is the foundation of a more modular design system. One that lets teams define the parts of USWDS they want to use, customize their implementations, and update at their own pace.

**Slide 26:** We think it's going to deliver a lot, with just a little bit of upgrade and migration effort. We think that most teams will be able to move from USWDS 2 to USWDS 3 in a matter of hours, not days or weeks. And if you're thinking of migrating, USWDS Compile could be your friend. We think more teams should use it, and we want to make it as useful as possible. So if you have feedback, let us know, either in an issue or a discussion. We're putting the [github discussion link] (https://github.com/uswds/uswds/discussions/4587)to the most recent 3.0 Beta release in the chat.

**Slide 27:** Above all, we're working to deliver a simple migration process — not just for USWDS 3.0, but that 3.0 is the platform that will begin to deliver simpler updates and migrations going forward. We think that teams should make the effort to move to USWDS 3.0 and we'll help you get there.

**Slide 28:** So next month, we'll be launching USWDS 3.0 and we hope to do it with a real world example of migrating to USWDS 3.0 on a large website. So stay tuned, and thanks for being here today to let us give you a preview of what's coming in 3.0.

**Slide 29:** And now, let's get into Q&A.

[Q&A]

**Slide 30:** Thanks for joining today’s USWDS monthly call. Next month, the monthly call will be looking at USWDS 3.0 in the real world!

As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion.

Follow us on Github at https://github.com/uswds, check out our website, and visit https://designsystem.digital.gov/about/community/ to join us and your colleagues across government who are using USWDS.

Thank you, and see you next month!

{{< /accordion >}}

During this event, the USWDS core team will preview USWDS 3.0. We’ll talk about improvements to day-to-day maintainability, component packages, and the new component library.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
