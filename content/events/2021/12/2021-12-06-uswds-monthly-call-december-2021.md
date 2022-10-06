---
title: USWDS Monthly Call - December 2021
kicker: USWDS
summary: Get started with the design system and a how-to demo of template creation and a prototyping approach.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-rapid-prototyping-with-uswds-dec-2021-tickets-223514707507
captions: https://www.captionedtext.com/client/event.aspx?EventID=4961960&CustomerID=321
date: 2021-12-16 14:00:00 -0500
end_date: 2021-12-16 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - open-source
  - code
  - prototype
# See all authors at https://digital.gov/authors
authors:
  - philip-levy
  - dan-williams
slug: uswds-monthly-call-december-2021
# zoom, youtube_live, adobe_connect, google
event_platform: zoom

---

[View the slides](https://designsystem.digital.gov/files/monthly-calls/uswds-monthly-call-december-2021-distro.pptx.zip) (PowerPoint, 1.3 MB, 27 pages)

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call Script for December 2021" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for December 2021. And, for December it's a good old fashioned red and green to match the wreaths and bows you may be seeing on doors and windows around your neighborhood, too. 

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, which maybe looks a little like a younger version of an imagined me. Others say, not so much. Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is [online] (https://handbook.tts.gsa.gov/about-us/code-of-conduct/). We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

First we'll show off an interesting new site launch.

Then I've got a couple design system updates related to our newest design system version.

And then the main event: Rapid web prototyping with USWDS — where we'll take a look at a few simple tools and techniques that can help you get building and testing with USWDS code faster than you might have imagined.  

**Slide 4:** So let's get into it with site launches.

**Slide 5:** We've only got one to show off this month, and it's https://zerotrust.cyber.gov/ — home of the Zero Trust Cybersecurity Principles that support executive order 14028. While the public comment period has ended on some of the concept documents this site is introducing, it's still worth visiting to learn a bit more about Zero Trust —a security principle that no actor, system, network, or service operating either outside or within a security perimeter is trusted. The zerotrust.cyber.gov site is a straightforward USWDS documentation site that gets the job done. No fuss, no muss. Don't overthink it.

**Slide 6:** Great work, everyone! I'm sure there's a lot going on behind the scenes, and I expect that 2022 will be a big year. Get your rest now! And be sure to let us know when a new site launches, either with an email to uswds@support.digitalgov.gov or a note on the USWDS public Slack channel.

**Slide 7:** Which brings me to a quick point about the design system: If you don't tell us, we won’t know. One of the nice things about using the design system, is that you don't need to buy anything from us, set up an interagency agreement, or interact with the design system at all if you don't want to. But that also means that we don't always know just who's using it — we can scan and find some things, but we can't scan and find people. 

**Slide 8:** And that's why we currently have a survey open for feds — and we'll post [the link to that survey] (https://touchpoints.app.cloud.gov/touchpoints/7038a8b3/submit) in the chat — and this survey is essentially a way for folks to just let us know who you are and what project or projects you support. It's a really short survey that should hopefully take you no longer than 5 minutes. Many of you have likely already taken it. If you have, thanks! If not, consider it. The more we know, the better we'll be able to plot a good path for the design system, and help connect teams to others in the same situation.

**Slide 9:** So now, a few product updates.

**Slide 10:** We just released USWDS 2.13.0 — lucky release 13 — ending the year with an accessibility focused release. 

**Slide 11:** It improves the accessibility and the voicing of File Upload, so screen reader software will announce when you've added files to the File Upload component. 

**Slide 12:** We also fixed a somewhat edge-case-y issue with the mobile nav, where there could be a way to escape the focus trap of the active nav panel. Now the mobile nav makes the background completely inert when it's active. 

**Slide 13:** We also improved the default ARIA labeling in the Date Picker, properly using aria-labelled by and aria-described by to contextualize the component. 

**Slide 14:** And we also resolved the many deprecation warnings you've undoubtedly noticed while compiling USWDS Sass. Now, we'll fully resolve this when we move to Sass Modules in USWDS 3.0, but for now we got rid of it by removing all traces of division from the Sass codebase! To be honest, I do not get how the new division function emulates division with recursive multiplication. But Andrew Duthie does, and he helped us with this, that's all that's important. 

**Slide 15:** And finally, we improved the resilience of icon-only buttons. Well, what's an icon-only button and where do we have them? We don't have many, but this is something like the small Search button that has only a magnifying glass, or the social buttons in the footer that include only a social media icon. These examples both used to be built with background images — and while the background image solution is accessible and supports screen readers, it could be a problem for sighted users if, for some reason, the image path was broken and did not load. In that case it would just be a blank button with no obvious functionality.

Now, to fix this we needed to make a breaking change. Here's the breaking change you asked for. 

**Slide 16:** So, if you use the small search button or the footer social buttons on your site, you'll need to update your makeup when you upgrade to USWDS 2.13.0. It's a small change, but each of these components now requires an inline image. We've outlined the necessary changes in the [USWDS 2.12.0 release notes] (https://github.com/uswds/uswds/releases/tag/v2.13.0)  — and we're linking to the release notes here in the chat as well.

Now this is just the kind of annoying breaking change caused by a necessary accessibility improvement that we'll be trying to address as we move beyond USWDS 3.0. It shouldn't be painful to stay up to date with the design system — and 2022 is the year we do something about it. Stay tuned. I expect to talk more about this in January and February.

But for now, when you update to USWDS 2.13.0, be aware that there'll be some modest effort to update those two components. 

**Slide 17:** So that USWDS 2.13.0 — the last minor release of the year and perhaps the last minor release before USWDS 3.0.0. At some point in the not-too-distant future, we'll be mostly freezing 2.x development so we can work exclusively on 3.0.

**Slide 18:** And now the good stuff: Rapid Web Prototyping with USWDS!

**Slide 19:** And to talk about prototyping, let me introduce Philip Levy — a contractor on the USWDS team who's really been digging into using the design system for prototyping — and who's developed a number of useful techniques for improving the speed of a USWDS prototyping workflow. And with that, I'll pass it over to Philip. Take it away!

**Slide 20:** [PHILIP] Agenda

**Slide 21:** Why rapid web prototyping?
* Rapid prototyping accelerates learning, reduces risk, and improves outcomes.
* Testing small interactive prototypes generates meaningful feedback early in the process.
* Using USWDS tokens and utility classes aligns design and development around a common design language.
* Prototyping can involve the whole team and create a shared understanding of what you’re building

**Slide 22:** A shared understanding

**Slide 23:** How we do it

**Slide 24:** [DEMO of rapid web prototyping]

**Slide 25:** Philip walked us through these quick ways to get started with web prototyping:
* Don't bother compiling. Use compiled CSS and JS with [CDNJS] (https://cdnjs.com/libraries/uswds?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc).
* Use a tool like [CodePen] (https://codepen.io/?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc) to code in the browser with instant rendering.
* Cut and paste component code from [the USWDS website] (https://designsystem.digital.gov/components/overview/?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc) right into your CodePen.
* Customize the look and feel with [utility classes] (https://designsystem.digital.gov/utilities/?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc).

* We then walked through a few templates in CodePen: a [blank slate] (https://codepen.io/pglevy/pen/gOxNXGY?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc), [page boilerplate] (https://codepen.io/pglevy/pen/abBgJbe?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc), and a simple [USWDS user flow] (https://codepen.io/pglevy/pen/mdMZXOX?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc). Once you’re comfortable with CodePen and want to move to the next level, [uswds-sandbox] (https://github.com/uswds/uswds-sandbox?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc) can be an effective starting point for more complex Jekyll-based prototypes.

* For more information, see the [handout] (https://federalist-d5e7c07c-6ffa-4b8e-935f-49a7df24a505.app.cloud.gov/preview/uswds/uswds-sandbox/rwp-with-uswds/?utm_source=slack-uswds&utm_medium=social&utm_campaign=decmc) provided during the monthly call. 

**Slide 26:** Thank you so much for that, Philip. So, let's move on to Q&A.

[Q&A]

**Slide 27:** Thanks for joining today’s USWDS monthly call. Next month, the monthly call will be on January 20, 2022, the third Thursday, and we’ll be starting off the new year by discussing “Getting started for developers” and some big improvements to USWDS Gulp. 

As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion. 

Follow us on Github at github.com/uswds, check out our website, and [visit this site] (https://designsystem.digital.gov/about/community/) to join us and your colleagues across government who are using USWDS.

Thank you, and see you next month!
{{< /accordion >}}

---

How can designers and developers work together to design in code? How can prototypes help answer critical design questions? How can USWDS help you build faster than you might have thought possible? 

Join the USWDS team for our December call, as we look at rapid prototyping with USWDS.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
