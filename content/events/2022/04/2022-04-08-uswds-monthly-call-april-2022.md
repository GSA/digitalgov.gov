---
title: USWDS Monthly Call - April 2022
kicker: USWDS
summary: Our friends at Digital.gov will join us to talk through their experience migrating to USWDS 3.0.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-uswds-30-in-the-real-world-apr-2022-tickets-317681512957
date: 2022-04-21 14:00:00 -0500
end_date: 2022-04-21 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - emerging-tech
  - design
  - digitalgov
  - accessibility
  - mobile
  - 21st-century-idea
  - user-experience
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
  - matthew-bogdan
slug: uswds-monthly-call-april-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-monthly-call-april-title-card

---

{{< asset-static file="uswds-monthly-call-april-2022.pptx" label="View the slides (PowerPoint, 2.66 MB, 16 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for April 2022" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for April 2022 — an interesting month and year where we've seen Passover, Ramadan, and Easter occurring at the same time, accompanied by this spring-colored USWDS logo. As well as Earth Day this week, and a blue marble USWDS logo to go with it.

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, which maybe looks a bit like me with more sleep. Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at [handbook.tts.gsa.gov/code-of-conduct] (https://handbook.tts.gsa.gov/about-us/code-of-conduct/). We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?
First we'll show off a couple new site launches.
Then I've got a couple quick product updates.
And then we'll talk with Matthew Bogdan from Digital.gov to talk about his experience with USWDS 3.0 and migration in the real world.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** First up, [fai.gov] (https://fai.gov/5) The Federal Acquisition Institute provides certification, training, and tools for federal acquisition professionals. The homepage features a large notification banner announcing the redesign and the familiar USWDS header.

**Slide 6:** Next, [The Wood’s Hole Aquarium Visitor Log] (https://apps-nefsc.fisheries.noaa.gov/AVL/). While we aren't Wood's Hole employees and we can't log in — here we see a USWDS-powered sign in to the visitor log at Wood's Hole aquarium, in Cape Cod, Massachusetts. Someone should stop by and sign in, and let us know how it goes.

**Slide 7:** And finally, [gcmrc.gov] (https://www.usgs.gov/centers/sbsc/about/gcmrc), the National Geospatial Program’s Grand Canyon Monitoring and Research Center. This USWDS-powered site uses the template we saw last month with USGS's the National Map to display information related to measurement of the effects of Glen Canyon Dam operations on the resources along the Colorado River from Glen Canyon Dam, near Page, Arizona to the inflow of Lake Mead, near the border of Arizona and Nevada.

**Slide 8:** Congratulations, and great work, everyone! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 9:** So now, a few product updates.

**Slide 10:** First up, [USWDS 2.13.3.] (https://github.com/uswds/uswds/releases/tag/v2.13.3) We released USWDS 2.13.3 about a week and a half ago, and it's the last USWDS 2 release before we release USWDS 3.0. 2.13.3 features a few nice accessibility improvements, from more accessible disclosure section in the large footer, to style improvements that allow our components to display as expected in Windows High Contrast mode — or any other mode that uses forced colors.

**Slide 11:** USWDS 2.13.3 is also fully integrated into the most recent version of the USWDS 3 Beta, [USWDS 3.0.0 Beta 5] (https://github.com/uswds/uswds/releases/tag/v3.0.0-beta.5) — which we released on Monday. This is likely to be the last Beta we release before USWDS 3.0 — and it includes a couple nice updates to how we set up the exports on the uswds package. It's a nicer API into the USWDS source JavaScript and Styles for projects that use USWDS in a dynamic framework. If you've been using the USWDS Beta, update to Beta 5 and let us know if you see any issues.

**Slide 12:** Which, of course, leads us to USWDS 3.0 — which is going to be one week later than we expected. Launching next Thursday, April 28. As you'll hear in the next section, we've been working with Digitalgov to integrate USWDS 3.0 into their production code. And we've learned a lot! We're taking an additional week to make sure the Migration guidance is as smooth as it can be and that we've ironed out as many wrinkles as possible. I was pushing for today, but we decided to give ourselves one more week for sanity and stability.

But as we'll see in a sec — USWDS 3.0 is in the final stages and we can't wait to release it and help get as many folks as possible migrated and updated.

**Slide 13:** So today, while last month we looked at updating to USWDS 3.0 in a test project with pretty much best-case conditions, today we're going to start getting real, as it were, and talk about migrating to USWDS 3.0 and optimizing an installation on a real project.

**Slide 14:** To do that, I'd like to introduce Matthew Bogdan. He's a detailee here at GSA, and the lead engineer at [Digital.gov] (https://digital.gov/). Matthew, thanks for joining us today — and as we'll hear — thanks for working with us over the last couple weeks to help us improve the migration experience for everyone.

**Slide 15:** And now, let's get into Q&A

[Q&A]

**Slide 16:** Thanks for joining today’s USWDS monthly call. Next month, the monthly call will focus on optimizing with USWDS 3.0 — looking a bit more at what we discussed with Matt and talking about how we'll be trying to improve the performance of the design system and the projects that use it!

As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion.

Follow us on Github at [github.com/uswds/uswds] (https://www.google.com/url?q=https://github.com/uswds/uswds&sa=D&source=docs&ust=1652100269785461&usg=AOvVaw3cs5xX2qhoNOhoX0FOWtJq), check out our website, and visit [designsystem.digital.gov/about/community] (https://designsystem.digital.gov/about/community/) to join us and your colleagues across government who are using USWDS.

Thank you, and see you next month!

{{< /accordion >}}

What does USWDS 3.0 look like in the real world? Our friends at Digital.gov will join us to talk through their experience migrating to USWDS 3.0. We’ll talk about what you’ll need to upgrade, what to look out for, and any pain points you may come up against.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
