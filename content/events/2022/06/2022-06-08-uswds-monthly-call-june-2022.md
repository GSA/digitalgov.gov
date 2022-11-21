---
title: USWDS Monthly Call - June 2022
kicker: Contributing to USWDS
summary: What you need to know before contributing to USWDS.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-contributing-to-uswds-jun-2022-tickets-360011713727
date: 2022-06-16 14:00:00 -0500
end_date: 2022-06-16 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - code
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
  - elisa-chen
slug: uswds-monthly-call-june-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: "uswds-june-2022-monthly-call-title-card"

---

{{< asset-static file="uswds-monthly-call-june-2022.pptx" label="View the slides (PowerPoint, 4.8 MB, 42 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for June 2022" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For June 2022 — home to Fathers Day, Juneteenth, heat waves, cold waves, Flag Day, Kamehameha Day, and the Summer Solstice —all of which we'll celebrate with this bright and summery USWDS logo.

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, dark hair, casual officewear, a look of childish innocence: close enough! Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at [handbook.tts.gsa.gov/code-of-conduct] (handbook.tts.gsa.gov/code-of-conduct). We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

First we'll look at a new site launch.

Then I'll highlight some product updates.

And then we’ll spend some time looking at our contribution model. We've got a nice show today, so let's get right into it

**Slide 4:** with site launches.

**Slide 5:** Today we've got a nice new one from NOAA, [nesdis.noaa.gov] (nesdis.noaa.gov), a website for National Environmental Satellite Data and Information Service. It's the start of hurricane season, NESDIS provides secure and timely access to global environmental data and information from satellites and other sources. This highly customized USWDS site shows a large satellite image of hurricane on its home page with the words "2022 Hurricane Season Begins."

**Slide 6:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** So now, a few product updates.

**Slide 8:** First up, USWDS 3.0.2 — our second release since USWDS 3, and this one is packed with little improvements of all kinds,

**Slide 9:** So what’s new in USWDS 3.0.2?
Custom background colors no longer can cause compile failures.
More accurate automatic contrast checking for custom colors.
Improves form group error state display.

**Slide 10:** High resolution flag for the Banner.
Megamenu always stays within the viewport.
Improved display of dropdown menus in an error state.

**Slide 11:** Improved target area for header dropdown links.
Table border setting works as expected.
uswds-init is better at suppressing FOUC.

**Slide 12:** Improved Date Picker display at very narrow widths.
Added a Fax icon to the default set.
Added a Remove Circle icon to the default set.

**Slide 13:** So lots to come in USWDS 3.0.2, and we'll release it tomorrow.

**Slide 14:** Next, [USWDS Compile Beta 3] (https://github.com/uswds/uswds-compile/releases/tag/v1.0.0-beta.3) — What I hope is the last Compile Beta before we release Compile 1.0.

**Slide 15:** Improved icon sprite workflow. Now it’s easy to customize the sprite and keep it up-to-date with USWDS.
Fixed compatibility with M1 Macs and ARM-based silicon

**Slide 16:** And that's USWDS Compile Beta 3. It's out now. If you're already using USWDS Compile, this one's a no brainer.

**Slide 17:** OK, now we're going to talk about contributing to USWDS and the USWDS contribution model: How we solicit, prioritize, and integrate contributions, bug reports, and feature requests from the community.

**Slide 18:**
**DAN:** And to talk about contribution, I'd like to introduce my colleague Elisa Chen— Elisa, take it away!

**ELISA:** Thanks Dan. Hi everyone! My name is Elisa Chen and I’m a Design Strategist with [18F] (https://18f.gsa.gov/) and am currently detailing with USWDS. I have black, chin length hair. I’m wearing a red shirt.  Today, I’ll be discussing more about contributing to the Design System. So, why talk about this now? As the Design System grows and evolves, contributions will continue to play a critical role. After all, as an open source project, the Design System is the result of your contributions both large and small. Today’s conversation is just a start on how we’re improving the contribution model.

**Slide 19:** More specifically, today we’ll share what we’ve learned from research we’ve recently done and some new ideas we’re trying based on that research. And at the end, we’ll walk through how you can contribute to the Design System.

**Slide 20:** But first, what are contributions and what do we mean when we say that?  We’d love to hear what you think first. In the Zoom chat window, go ahead and share what words come to mind when you think about contributing. Thanks for sharing your thoughts!

**Slide 21:** So, the word “contribution” or “contribute” comes from Latin origins meaning “brought together” or “added”. It’s the act of “giving or supplying something as a part or a share”. This certainly resonates with how we think about contributing to the Design System.

**Slide 22:** For us, a contribution is when a community member gives back in a way that enhances the Design System by proposing a new idea, enhancement, or fix that’s released through the system for other people to use.  It’s this act of giving to the Design System that helps make it better for the next team that uses it.

**Slide 23:** In short, it's a gift that keeps giving.

**Slide 24:** And the Design System’s team role is to be good stewards of those gifts because they help move the Design System forward.

**Slide 25:** This past spring, we conducted research to help us understand the process of contributing to the Design System. We set out to: 1) understand and document who contributes to the System and how, and how we internally process those contributions. We identified needs, pain points, and opportunities during that process as well as best practices from other design systems. We conducted about a dozen semi-structured interviews with different users including federal and non federal employees, those who’ve contributed often and those who haven’t, and those who have different roles such as designers, developers, or a mix of those skills.  We also did some desktop research analyzing our GitHub repositories and reviewing other contribution models. We want to thank our community members who participated in this research. It's helped kick start improvements on our contribution model.

**Slide 26:** From our research, we mapped the contribution journey into 3 main phases: deciding to contribute, contributing to the Design System, and knowing next steps. In each phase, users considered a key question: should I contribute? How should I contribute? What will happen to my contribution?

**Slide 27:** We heard some key needs from Design System users as they journeyed through contributing. When deciding to contribute, users need to 1) feel confident (whether it’s knowing that they can contribute or how to contribute)  2) they need to have time to contribute 3) and they need to know that their contribution is valuable (for themselves or someone else).  When contributing to the Design System, users need to know: 1) where to contribute, 2) what to contribute, 3) how to contribute and 4) be able to find the right resources to help them do that. Last, they need to: 1) feel heard and 2) know what to expect after they submit their contribution. This might mean knowing their contributions were received, what the status of their contribution is, and when they might expect to see them in the System.

**Slide 28:** We also heard some pain points along the way that led contributors to drop off during the process. For example, some were hesitant to contribute because they were unsure if their contributions were going to be helpful or useful.  It wasn’t clear if ideas were needed or if their ideas aligned with how the Design System wants to grow. Contributors wondered “is my idea pertinent for the Design System? What are its goals and priorities and for when?” Additionally, it can feel intimidating when contributing to an open source project-- “will l look silly submitting this idea where everybody can see?”

**Slide 29:** It was unclear how best they could contribute.  Some contributors asked “where do I start? Where can I find guidance? What do I need to do to propose my feature request?”

**Slide 30:** Upon submitting a contribution, many didn’t know what to expect afterwards -- what’s the status of my contribution? Is it accepted? If so, when would I see it released? And from the Design System team perspective, it wasn’t clear which ideas or feature requests were most needed across our community--how could we prioritize better and with input from our members?

**Slide 31:** We’ve taken all this feedback to heart and have been working on a few things to improve how you can contribute to the design system.  We’ve updated our roadmap to more clearly and transparently share our priorities, goals, and activities every 4 months. We’ve refreshed our contributing guide to help contributors at all levels understand how they can contribute. We’ve created a Contribute page on our website to more easily find guidance and help you get started with contributing. We’ve simplified our issue templates to make it easier to know what information is needed to submit a bug or feature request. We’ve updated our GitHub labels to more clearly track the status of an issue from start to finish. And last, we’ve created a feature request backlog that allows you to vote on what features you need most and helps the Design System team decide which features to prioritize. We’ll demo some of these new solutions, but first, let’s talk about some common starting points for contributing.

**Slide 32:** You might start in two main ways--you might experience an issue. For example, something may not be working properly in the Design System. It might be an error that causes something unexpected or incorrect to happen. We’d call this a bug. Alternatively, you might have an idea to make something work better in the Design System, like improving the behavior of an existing component. We’d call this an enhancement. You could also have an idea for something you want in the Design System that doesn’t exist, like a brand new component. We’d call this a feature request. Now, these certainly aren’t the only types of contributions, but they’re the most common ways to contribute right now. So, how do you go about submitting these types of contributions? We’re going to walk through the process of submitting a bug report, a feature or enhancement request, and a pull request.

**Slide 33:** When reporting a bug, we ask you to first check the issues backlog in GitHub to see if it's already been reported. If it has, you can comment on the original issue letting us know how your experience might be different from the original submission. If the bug hasn’t been submitted, go ahead and document how to reproduce the issue. This helps the team recreate it and understand the context in which it happened. And then, submit the bug using our bug report template.

**Slide 34:** The process for submitting a feature request or enhancement is the same.  Again, we want to check if the idea has already been submitted in our backlog. If it has, you can upvote it in our feature request backlog (and we’ll show you how in our demo). If it hasn’t, you can propose your idea using our feature request template. You can check our roadmap on the USWDS website to see if your proposed feature request might move into upcoming work.

**Slide 35:** If you want to propose a code fix, you can submit a pull request in GitHub. Again, check the open issues backlog to make sure no one’s already submitted the same fix. If your proposed solution exists, comment on the issue letting us know any additional context. If it doesn’t already exist, create a new issue for your proposal. And if you’re proposing bug fix, go ahead and submit your pull request tying it to that issue. If the pull request is accepted, we’ll schedule the issue and merge the pull request for you.

**Slide 36:** If you’d like to contribute something else, we’d still love to hear about it. Just [create an issue] (https://github.com/uswds/uswds/issues) or a [discussion] (https://github.com/uswds/uswds/discussions) in GitHub, and we’ll start the conversation from there.

**Slide 37:** Once you submit your contribution, the Design System team reviews and triages submissions based on three major considerations. Size -  meaning can the team accomplish this in a sprint (or 2 weeks) or will it take longer? Severity - meaning what type of functionality does this impact? Is it major or minor? And is there a workaround? Priority - meaning does this submission align with the Design System’s overall vision and roadmap goals?

**Slide 38:** Alright, now let’s take a look at how you can contribute in real life.

**Slide 39:** Again, we’re just started the process of improving our contribution model. We’re still working on a few other ideas. We want to continue to improve and refine our contribution guidance.  As you explore those on the website, reach out if you have ideas on how we can do that. We’re also looking into how to propose content changes directly on our website. We know there are other types of contributions our community might want to share, like research findings. We’re exploring how we can receive and share those back out with our community. We’re refining and documenting the process of managing contributions. For example, what’s the schedule or timeline for processing pull requests contributions? And last, we want to know if what we’re doing is making a difference in our contribution model. So we’re looking at tracking key metrics to learn, iterate, and improve on our model.

**Slide 40:** We hope this conversation about contribution doesn’t end with this presentation today. We’d love to continue this thread and hear more about what would make contributing to the Design System easier for you? Join us in our Slack channel at uswds-public where we’ll have a Slack thread with this prompt. Over to you, Dan.

**Slide 41:** Thanks Elisa! And now let's do some Q&A!

**[Q&A]**

**Slide 42:** Thanks for joining today’s USWDS monthly call. Next month, we'll be taking a break. We'll be back with a new monthly call in August. Have a great summer!

As always, I encourage you to join our community in the [#uswds-public] (https://chat.18f.gov/) Slack channel so you can follow our progress, get answers, and contribute to the discussion.

Thank you, and see you in August!

{{< /accordion >}}

Have a great idea for the Design System but not sure how to share it? We’ll talk through how to contribute ideas, code, bug fixes, and more&mdash;covering questions like:

* What requirements should you be aware of?
* How does a feature request get into the Design System?
* Where do you see what’s already in progress?

Join us to learn more about the USWDS contribution model.

_This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year._

## About the USWDS

The U.S. Web Design System is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
