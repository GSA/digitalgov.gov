---
title: USWDS Monthly Call - December 2024
deck: Introducing the federal website standards
kicker: USWDS
summary: The U.S. Web Design System team is joined by the Federal Website Standards team to share more about the standards, their origin, the research backing them, and what standards are coming next.
event_organizer: Digital.gov
registration_url: https://gsa.zoomgov.com/meeting/register/vJItfuitrT4pElUXm-Ua7iPb7LTizb8Sve4
date: 2024-12-19 14:00:00 -0500
end_date: 2024-12-19 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - human-centered-design
  - usability
  - user-experience
  - open-government

slug: uswds-monthly-call-december-2024

# zoom, youtube_live, adobe_connect, google
event_platform: zoom
youtube_id: Aa0gqEcK2G4
Youtube_title: "Introducing the federal website standards"

primary_image: 2024-uswds-monthly-call-dec-title-card

---

{{< asset-static file="uswds-monthly-call-december-2024.pptx" label="View the slides (PowerPoint presentation, 2.5 MB, 39 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for December 2024" icon="content_copy" >}} **Slide 1.** Thanks Kate, and welcome, everyone, to the U.S. Web Design System monthly call for December 2024. Today the USWDS logo is in a classic wreath form for the holiday season, with evergreen panels and a bright poinsettia-red segment like a bow.

**Slide 2.** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt, glasses — today I'm wearing a red checked collared shirt and a blue workshirt. And bright green socks, for luck.

As Kate mentioned, we are recording this call, and I'm happy to say we're able to share the recordings of these monthly calls publicly. You can find pretty much everything back to January 2023 on our website, at [**designsystem.digital.gov/about/monthly-calls**](http://designsystem.digital.gov/about/monthly-calls). We typically post videos shortly after the monthly call and we also link out to the slides and the script, hosted at Digital.gov. We've posted a link to our monthly calls page in the chat.

We'll be posting other links and references into the chat as we go along. And today we're continuing something we've been doing the last couple calls when it comes to chats and questions. Today, in your Zoom window you'll find a Q&A button in addition to a chat button, possibly under a "More" button. We'd like to encourage folks to ask questions in the Q&A section instead of the chat. Take a sec now to find the Q&A section and open it up. If any member of our team can answer your question in the Q&A section, we'll do so. Otherwise, there'll be some time for questions and answers at the end of the hour. But the chat's *still* nice too! Let's use the chat for introducing ourselves, or for any other comments or discussion. Be sure to introduce yourself in the chat — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide those discussions during the main presentation. You can reopen them later during the Q&A session at the end of this call.

And one final note that starting with this call, we're going to try to end a couple minutes before the top of the hour to give folks at least a moment before they move on to the next thing in their day.

So thanks! And, with that, let's get started!

**Slide 3.** So what's our agenda for today?

Well, first we'll check out a handful of product updates. Then we'll hear from the Federal Website Standards team about the new website standards, followed by a discussion about the relationship between the standards and the design system which should also leave time for your questions at the end.

**Slide 4.** Let’s kick it off with a number of product updates!

**Slide 5.** First, USWDS 3.11.0, our December USWDS release, out now.

**Slide 6.** This is a nice little release and it has a couple of notable updates and improvements.

- First, **we added more consistent styling for table headers.** Now table headers will get consistent styling no matter where they appear in a table, not just in column headers.
- We also made a couple updates based on community contributions. **We fixed the display of focus outlines in the identifier.** Now, focus outlines don’t get clipped when they appear in some locations in the identifier's list of required links.
- And finally, **we added a more modern CSS reset**. We're left some of the older IE11-constrained reset techniques behind and moved to a slimmer reset.

[And that's USWDS 3.11.0](https://github.com/uswds/uswds/releases/tag/v3.11.0).

**Slide 7.** We've also released a good quality-of-life update to USWDS Compile, in USWDS Compile 1.2.1.

In its next major release, Sass is changing how it handles mixed declaration style definitions to match new CSS patterns. Because of this, users are getting alarming warnings during compilation.

The pattern is *not* currently deprecated, and we are on track to update the related USWDS code. But these current warnings are alarming and noisy — they can distract folks from the release-related notifications we hope devs *do* notice from release to release.

So, in USWDS Compile 1.2.1 we're introducing a new setting, enabled by default, that silences these warnings that originate in the USWDS codebase.

This approach will mute USWDS warnings, including any future warnings that come up, while allowing warnings from custom Sass to still be triggered in the terminal.

This will allow Sass to notify users of impending deprecations in their custom code without the noise of hearing about what's happening in USWDS. And, of course, users can decide to manually turn on these deprecation warnings back on with a single setting if they would like additional context on the upcoming deprecations.

And that's USWDS Compile 1.2.1: [out now!](https://github.com/uswds/uswds-compile/releases/tag/v1.2.1)

**Slide 8.** December is a big month for accessibility test pages. We've got five new pages out now:

- [Process list](https://designsystem.digital.gov/components/process-list/accessibility-tests/)
- [Summary box](https://designsystem.digital.gov/components/summary-box/accessibility-tests/)
- [Collection](https://designsystem.digital.gov/components/collection/accessibility-tests/)
- [Icon list](https://designsystem.digital.gov/components/icon-list/accessibility-tests/)
- …and [Button group](https://designsystem.digital.gov/components/button-group/accessibility-tests/)

And that wraps 2024 for accessibility test pages! We've published 34 pages this year and just have 11 more prepped for publication in the coming months. This has been a great accomplishment for our accessibility team, and for the team effort with content and engineering to consistently publish these pages from month to month!

Next in the queue are Date picker, Date range picker, Alert, and Site alert, coming in January.

**Slide 9.** We've also released an updated version of the USWDS beta design kit for Figma. This new version tidies up the layers and directories in our components, better conforming to naming best practices and also making it a bit more straightforward to select layers. We've posted [a link to the USWDS design kit for Figma](https://www.figma.com/community/file/1440921849343185329/uswds-design-kit-beta) in the chat.

**Slide 10.** There are three public discussions to highlight this month:

- The first is an active discussion about [providing support for user preferences](https://github.com/uswds/uswds/discussions/5798). The original discussion topic raises a few user browser preferences: **prefers-color-scheme**, **prefers-contrast**, and **prefers-reduced-motion**. USWDS has done a lot of work over the last year in supporting high contrast and forced color mode, though this is through the mechanism of the **forced-colors** media query and not via **prefers-contrast**. We also prefer solutions with reduced motion, so we haven't spent much time investigating reduced motion solutions, but **prefers-color-scheme** is a media query–speak for supporting Dark Mode, and that's a place where we could use some more opinions. If you want to support dark mode, or have tried to implement support for a dark mode scheme inside of USWDS or not, we'd be interested in hearing from you in this discussion.
- Beyond dark mode, we'd also like to direct folks to this month's Accessibility discussion: on [HTML titles and accessibility](https://github.com/uswds/uswds/discussions/6243). Providing good HTML titles is also one of the new draft federal website standards, which we'll hear more about later in this call, so I think folks would benefit from more discussion about what's working when it comes to the accessibility and usability of titles.
- And finally, we've posted a public version of last month's monthly call Q&A in discussions as well. You can check that out via [the link in the chat](https://github.com/uswds/uswds/discussions/6252) if you missed last month's call.

**Slide 11.** We're also moving ahead in the world of pattern and component proposals.

- We're happy to announce that at long last, we've [decided to move ahead with the Tabs component proposal](https://github.com/uswds/uswds/discussions/5765#discussioncomment-11487203). We’ll publish the [approved formal proposal](https://github.com/uswds/uswds/discussions/5765#discussioncomment-11487203) once we’ve finalized it. *We’ll* be taking on experimental development for that component, and will use the Tabs component to work out engineering, accessibility, usability, and documentation *requirements* for experimental components. More to come on Tabs as we move into 2025 and toward the release of USWDS Elements and USWDS Core in the spring.
- We've also decided to move forward with a pattern proposal for **Helping users to know when their information is prefilled**. We'll be drafting a formal proposal for community comment shortly, including how exactly we should add this to the USWDS pattern library, working with the team from the VA who proposed it.
- And we're deciding *not* to proceed with a proposal for a Toast component. Our accessibility and usability review of this component revealed consistent accessibility issues with implementations of Toast that make this component less of a good match for USWDS applications. You can find our research and reasoning in the Toast [discussion](https://github.com/uswds/uswds/discussions/5770#discussioncomment-11419226) — we're posting that link in the chat.

**Slide 12.** And our last product update is on our development work for USWDS Elements, the new Web Components flavor of the design system we'll start to roll out in the spring.

We've taken some time over the last month to test out interoperability between our *Elements* (composed using a light layer of the Lit library) and both the other big Web Components library — StencilJS — and React 19. And while there may still be some need for a custom React wrapper in versions older than 19, we're happy to report that we're finding successful practical interop with both Stencil and React 19. More to come on this in the coming months, but delivering components that pass attributes and properties seamlessly between differing development frameworks — in addition to reliable event handling and predictable lifecycle methods — is one of our goals with USWDS Elements, so teams can use these components all kinds of existing tech stacks.

And that's it for this month's product updates!

**Slide 13.** As I'm sure many of the folks on this call are aware, there's been a bit of a change over the last few months when it comes to the website standards referenced in the 21st Century Integrated Digital Experience Act (or 21st Century IDEA). Starting in January 2020, the USWDS website held the canonical version of the website standards referenced in 21st Century IDEA. This first set of standards directed teams to use the USWDS maturity model to deliver a great digital experience. Starting in September, USWDS no longer maintains this standard, and, going forward, a new Federal Website Standards team is responsible for a new set of standards.

So there have been a lot of changes in the world of federal website standards, and this month we wanted to talk with the Federal Website Standards team to hear about what's changed in the standards, and how that team is approaching the work of developing standards.

We also wanted to leave some space for a discussion about how USWDS and the Federal Website Standards relate, how they're different, and how they work together.

**Slide 14.** So to that end, let me introduce Renata Phillippi (she/her). Renata is the Acting Program Manager for the Federal Website Standards. Renata, take it away!

**Slide 15.** Renata: Thank you, Dan, for the introduction. My name is Renata Phillippi. I am a White House Presidential Innovation Fellow who has been working on building website standards to help agencies provide high-quality, consistent digital experiences for anyone. I am a white woman with shoulder length dark blonde hair. I have on purple rimmed glasses and a navy blue shirt.

**Slide 16.** Today we’ll go over why we need standards, the 90 day pilot we ran and the standards we launched with.

**Slide 17.** Let’s start with the background.

**Slide 18.** Per [analytics.usa.gov](https://analytics.usa.gov/), Federal government websites see 1.75 billion web sessions per month.

**Slide 19.** Per a White House fact sheet on Building Digital Experiences for the American People these sessions represent over 80 million hours of interactions with the public. You can access the fact sheet through the link we posted in the chat.

**Slide 20.** Per [analytics.usa.gov](https://analytics.usa.gov/), 57% of that traffic is from mobile devices.

**Slide 21.** Per the same White House fact sheet, 60% of federal websites are not accessible to all people.

**Slide 22.** And 45% of federal websites are not mobile friendly.

**Slide 23.** And only 2% of federal forms have been digitized for the web.

**Slide 24.** Back in 2018, 21st Century Integrated Digital Experience Act, commonly known as 21st Century IDEA, passed. It requires all agencies to modernize their public-facing websites and digital services, digitize services and forms, accelerate use of e-signatures, improve customer experience and standardize and transition to centralized shared services.

**Slide 25.** It meant that digital services should be:

- Accessible to people of diverse abilities
- Have consistent visual design and agency brand identity
- Content that is authoritative and easy to understand
- Information and services that are discoverable and optimized for search
- Secure by design, secure by default
- User-centered and data-driven design
- Customized and dynamic user experiences
- Mobile-first design that scales across a variety of device sizes

Through our user research, we heard from agency practitioners that they were not sure exactly what this meant for them. When 21st Century IDEA was passed, digital teams government-wide worked to meet the spirit of the law and improve the public’s experience on government websites.

**Slide 26.** Fast forward to 2023, agencies still needed more concrete guidance on how to implement the law. On the slide, we are showing 21st Century IDEA moving to the new policy guidance in the OMB memo M-23-22 (Delivering a Digital-First Public Experience). The memo contains over one hundred actions, including a small set of timed actions. The one we are talking about today is updating the website standards. M-23-22 says “GSA, in coordination with OMB and relevant interagency bodies and stakeholders, will review and update, as necessary, the existing Federal website standards to align with this guidance. These updates will include guidelines for branding, content, and search.”

**Slide 27.** We worked with OMB to develop a pilot to learn about what we could do to standardize the digital experience. Let’s talk about that pilot.

**Slide 28.** Our goal was to propose an initial set of evidence-based, auditable standards that will help agencies meet the public’s expectations for digital experiences.

**Slide 29.** Stakeholders from OMB and TTS started with a list of 30 potential standards that came from user research and used the RICE framework to score them. RICE stands for reach, impact, confidence, and effort. Or said another way, how much reach and impact will this feature have, how confident are we that we can deliver, and how much effort will it take to do so. We got the list down to 8 that we started with.

We reached out to the members of the CIO Council’s Digital Experience Council, which is a group of agency leaders who are all focused on improving the digital experience of their agency.

We partnered with the VA, USAID, SSA, State, Air Force, CMS, DHS, and internal partner, Cloud.gov Pages.

We did user research with the public and with agencies and desk research about industry best practices. We built prototypes, tested the content, got feedback and iterated. Then we launched with 3 new standards.

**Slide 30.** Let’s talk about the standards.

**Slide 31.** We defined standards as actions that will help agencies meet the public’s evolving expectations for digital experiences. The standards are evidence-based, auditable and lead to a consistent digital experience.

**Slide 32.** We launched our website ([standards.digital.gov](http://standards.digital.gov)) with three pending standards that will be tracked for compliance at some point in the future.

The government banner which has the line “this is a federal government website”, with the flag, and the "this is how you know" dropdown, which is an item we found the public looks for to know if they can trust the website.

There are also pending standards for HTML page title and meta page description.

**Slide 33.** Standards that are currently in draft status and will become pending standards after a period of review are the contact page, content timeliness indicator, and site search.

**Slide 34.** And we have two that are currently in research and continuing to be explored. That’s the external link. (We’ve had questions about what an external link is? Does it link outside of the government or outside of your website but to another government page? Just a couple of questions we are exploring.) And then the language selector.

You'll find on every standard page on our website we have listed the why, where it applies, the acceptance criteria, and how to implement the standard.

**Slide 35.** If you have any questions or want to see more, you can go to our website (standards.digital.gov), check out our GitHub discussions (https://github.com/GSA-TTS/federal-website-standards/discussions) or email ([website.standards@gsa.gov](mailto:website.standards@gsa.gov)). We may also have office hours sometime in the future.

**Slide 36.** Thank you.

Dan: Thanks Renata. This is Dan. I do have some questions! Here, we're going to stop the recording and have some time for discussion.

For that, Anne Petersen will be joining us. Anne?

Anne: Thanks Dan. I’m Anne Petersen, the USWDS Experience Design Lead, and I’ll help route our questions today. My pronouns are they/them, and in case anyone’s not looking at their screen, I’m a white person with short brown hair, small glasses and large headphones.

**Slide 37.** Dan: Now I'd like to open it up to questions from the audience for some public Q&A.

**Slide 38.** Thanks for joining today’s USWDS monthly call. Next month we'll be giving a special presentation mostly focussed on introducing folks who are new to USWDS to the design system. We'll try to make it interesting and useful for everyone, but it'll be particularly useful for new folks! So if you know anyone interested in where to start with the design system, point them to January's monthly call. 

Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we appreciate the extra time it takes you to provide it.

And if you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be there after the call to answer questions.

Have a great day. We'll see you in 2025! {{< /accordion >}}

This month, the U.S. Web Design System team hosts the Federal Website Standards team who will share more about the standards, their origin, the research backing them, and what standards are coming next. 

In this session, you’ll:
* Learn how the standards were developed and why they’re important
* Understand what standards are coming next and how you might prepare for them
* See the USWDS options you can implement — or have already implemented — to comply with one of the first required standards

**This event is best suited for:** Design system users of **all levels**

**Speakers**

- **Dan Williams** **-** Product Lead, USWDS
- **Anne Petersen** **-** Experience Design Lead, USWDS
- **Renata Phillippi** **-** Acting Program Manager, Federal Website Standards

_This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year._

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

- [The U.S. Web Design System](https://designsystem.digital.gov/)
- [Contribute on GitHub](https://github.com/uswds/uswds/issues)
- [Email Us](mailto:uswds@gsa.gov)
- [Join our community](https://digital.gov/communities/uswds/)
- [Follow @uswds on Twitter](https://twitter.com/uswds)

---
