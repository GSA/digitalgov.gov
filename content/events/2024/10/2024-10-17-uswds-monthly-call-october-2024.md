---
title: USWDS Monthly Call - October 2024
deck: Product and engineering principles
kicker: USWDS
summary: The U.S. Web Design System team will share the product and engineering principles they're using to guide the development of the design system.
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsfuqsrzwuE5Vksm7GGAK9tfUz8dy-9Sc
date: 2024-10-17 14:00:00 -0500
end_date: 2024-10-17 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - human-centered-design
  - usability
  - user-experience
  - open-government

slug: uswds-monthly-call-october-2024

# zoom, youtube_live, adobe_connect, google
event_platform: zoom

primary_image: 2024-uswds-monthly-call-october-title-card
---


{{< asset-static file="uswds-monthly-call-october-2024.pptx" label="View the slides (Powerpoint presentation, 2.5 MB, 109 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for September 2024" icon="content_copy" >}} **Slide 1.** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for October 2024. We're clearly in the middle of spooky season. With Halloween only a couple weeks away, the USWDS logo is trying to get its costume ready. It's doing its best to be a vampire, but — as we can see here with the two triangles in red and the rest in black — it's still having trouble getting the fangs to look right.

**Slide 2.** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt, glasses —today real-life me is wearing a gray shirt, warm red pants, and some pinkish socks, approximately violet-warm-10.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script hosted at Digital.gov. We've also started collecting each month's Q&A as a GitHub discussion linked from the monthly calls page. We've posted a link to our monthly calls page in the chat.

We'll be posting other links and references into the chat as we go along. Today, we're trying something new when it comes to chats and questions. Today, in your Zoom window, you'll find a Q&A button in addition to a chat button, possibly under a "More" button. We'd like to encourage folks to ask questions in the Q&A section instead of the chat. Take a second now to find the Q&A section and open it up. If any member of our team can answer your question in the Q&A section, we'll do so. Otherwise, there'll be some time for questions and answers at the end of the hour. But the chat's **still** nice too! Let's use the chat to introduce ourselves or for any other comments or discussion. Be sure to introduce yourself in the chat — it's nice to know who's here. It's good to have you here today.

 For those of you who find the chat distracting, you’re welcome to close or hide those discussions during the main presentation. You can reopen them later during the Q&A session at the end of this call.

 So thanks! And, with that, let's get started!

**Slide 3.** So what's our agenda for today? Well, we've got a bit of a back-to-basics call today. First, we’ve got a new product to feature and a few quick USWDS product updates. Then we'll talk about values — how we're thinking about our product and engineering values as we look ahead, behind, all around, and toward future generations of the design system. And then we'll have time for Q&A at the end—hopefully, a bit more time than we've left in recent calls.

**Slide 4.** So let's get into it with today’s featured sites. We've got a nice new product to highlight today — one we've been using.

**Slide 5.** Recently, Cloud.gov Pages, which you can find at [pages.cloud.gov](https://pages.cloud.gov), released two automated site reports, the Pages Accessibility Report and the Pages Vulnerability Report. Now, Pages is a publishing platform for modern 21st-Century IDEA-conformant websites, and we use it for hosting the USWDS website. These once-a-month automated site reports check your websites for potential security vulnerabilities and accessibility issues, estimate the severity of the found issues, and suggest fixes for common problems. 

The **Pages Accessibility Report** uses the open-source `axe-core` project to identify common website accessibility issues. This report identifies up to 55% of your website’s accessibility issues, including the WCAG 2.2 ruleset.

 The **Pages Vulnerability Report** is powered by the Zed Attack Proxy (or "ZAP") to detect risks like data exposure and security flaws. ZAP is a respected open-source tool used by many federal technology products.

 On the slide, we see a screenshot of an accessibility report for one of our GitHub branches, the one where we were building our breadcrumb accessibility checklist. It shows two accessibility errors, one serious and one minor. The page is a solid combination of USWDS default styles and some custom functionality built just for this display. 

 And yes, we do have a couple of accessibility issues we’re working to assess and fix!

**Slide 6.** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel! 

**Slide 7.** Now for a few product updates.

**Slide 8.** As promised — sweat smile emoji — we released USWDS 3.9.0 at the beginning of this month. I won't spend a third monthly call outlining what you can find in this release, but if you'd like to check it out, we're posting a link to the release notes in the chat. 

**Slide 9.** Based on our experience with some of our recent large releases, we're moving to a new methodology for releases: Scheduling a consistent monthly cadence for releases, and releasing what's ready by the monthly deadline, not building out release content ahead of time and releasing when all those items are ready.

 This new approach will improve the velocity of releases and prevent slower work from blocking a release.

**Slide 10.** November's release is most likely a point release, USWDS 3.9.1 — a couple of the items we have on track are:

*  A fix for an inconsistency in the internal JavaScript for Modal. This is an internal change pointed out by the Touchpoints team. Now the code will better align to our code standards and best practices. Thank you Touchpoints!

* We also expect an update to the styling of row headers in the Table component to match those for column headers

* Simplified screen reader instructions in Combo box and Time picker

*And probably more!

 Look for our November release in early November.

**Slide 11.** We're also continuing to publish accessibility test pages. Four new ones, focused on navigation (breadcrumb, pagination, in-page navigation, and side navigation), are up on the site now. We're posting links to these new pages in the chat. Next up are Time picker, File input, and Memorable date, so stay tuned for those in November.

**Slide 12.** Next, checking in on our public discussions.

 We have a few new component proposals—CUI banner, Heatmap, and Toast—as well as a new pattern proposal: pre-filled form. There's also a new discussion about supporting USWDS solutions in native mobile applications.

 This month's accessibility discussion is about going beyond visual design, and we've also posted the Q&A from the September monthly call in the Discussion Q&A section!

 There's a lot happening in Discussions, so check it out!

**Slide 13.** In Web Components world, the `web-components 0.0.1-alpha` package is out now on npm for installation. This package includes Banner Beta 1 and Link Beta 1.

In development, we've got Identifier Beta 1, as well as Beta 2 for both Banner and Link. We've also started work on Text input and Card, which are both in Pre-Alpha.

And finally, we're digging into compatibility between Lit and StencilJS by starting up a StencilJS testing sandbox. So, continued progress there.

**Slide 14.** Lastly, as I mentioned last month, it's been a bit over five years since we released USWDS 2.0, and it's finally time to sunset the version 1.0 documentation site. We've targeted the end of the year as a decommissioning date. So reach out at our email address — [uswds@gsa.gov](mailto:uswds@gsa.gov) — if your team uses any aspect of the 1.0 site in your day-to-day work, and we can try to determine if there's anything we should keep before we decommission the site.

**Slide 15.** This month we're talking about Product and Engineering Values for the design system: Why do we have them? What are they used for? And how might they help us navigate the many difficult questions we need to answer as we put together a vision for the future of the design system. It's a big topic, so let's get into it with a couple of my colleagues and teammates.

**Slide 16.** First, Matt Henry, the Engineering Lead on the USWDS team. Matt, can you introduce yourself and give a quick self-description for anyone who is audio-only?

Matt: Sure can. Thanks, Dan. As Dan said, I’m the engineering lead for the USWDS. I’m based in Raliegh, North Carolina. I’m a white man with a close-cropped white beard, looking autumnal in a light denim jacket, plain shirt, and orange beanie.

**Slide 17.** Dan: Thanks, Matt! I'd also like to introduce Anne Petersen, our Experience Design Lead. Anne, can you introduce yourself and give a quick self-description?

 Anne: I’m Anne, my pronouns are they/them, and visually, I’m white, with short brown hair — the front’s a bit fluffy today — small glasses and large headphones, in a blue collared shirt. Back to you, Dan.

 Dan: Thanks, Anne. I'd like to pass it right back to you to help us set the stage for talking about values.

**Slide 18.** Anne: Thanks! This is Anne again. So, why are we talking values?

**Slide 19.** Well, USWDS just turned nine years old. Nine years!

**Slide 20.** We launched on September 28th, 2015.

**Slide 21.** Our first design principles were published on our wiki in 2016. The table of contents for this set is Web standards, Progressive enhancement, and Performance, and the wiki notes that these are drafts. But let’s take a second to pay attention to them—they’re a good indicator of our future.

**Slide 22.** Here’s the next version of our design principles, from December 2016, as a screenshot, with the icons from that site.

**Slide 23.** They were: Make the best thing the easiest thing. Be accessible out of the box. Design for flexibility, and reuse, reuse, reuse.

**Slide 24.** This led to our current design principles: Start with real user needs. Earn trust. Embrace accessibility. Promote continuity. Listen.

**Slide 25.** These design principles apply to *everything* that uses USWDS. They definitely apply to us. They’re probably appropriate for your work, too.

**Slide 26.** And yes, they still apply. This is the “hmm, yes” emoji from our Slack, nodding and pointing along. Yes, logical, sound. What government work needs.

**Slide 27.** But what about USWDS itself? What might we need that’s more specific?

**Slide 28.** How do we make decisions that are particular to USWDS?

**Slide 29.** To do what we do best: to serve the public and support _you_. Let’s back up to our reason for being, what we’re doing, and why.

**Slide 30.** In September 2023, we [refreshed our mission and vision and created our polestar](https://designsystem.digital.gov/about/).

**Slide 31.** To remind you how we’re defining these: our mission is our statement of purpose, our why. Our vision is what problems we want to solve and for who. And our polestar shows how we want to work to get there.

**Slide 32.** Our mission: shaping the future of government digital services.

**Slide 33.** Our vision: Empowered and supported digital service teams—familiar and easy-to-use digital services.

**Slide 34.** Our polestar: We help government teams align, design, and keep their websites and services up to date.

**Slide 35.** These show us our general direction. But we have to make more specific decisions.

**Slide 36.** *How?*

**Slide 37.** Well, certainly, we make decisions by building on research with the public.

**Slide 38.** By building on research with you,

**Slide 39.** By building on current technological developments,

**Slide 40.** And by building on expectations.

**Slide 41.** But even then, we’re often faced with multiple absolutely reasonable options.

**Slide 42.** So, like you, I would expect that we make decisions based on the information we have available to us. And we keep learning.

**Slide 43.** But we can also make decisions based on the *values* that guide us.

**Slide 44.** Now, if we don’t have the exact same values as other teams, those other teams may make different decisions.

**Slide 45.** And that is _totally reasonable_.

**Slide 46.** We all have to remember that our context is different. We will have different priorities — if only because the people we serve most directly have differing priorities.

**Slide 47.** The thing we have to keep front and center is that USWDS is *foundational*. It’s beneath all else. From one dictionary definition, a foundation is “the lowest load-bearing part of a building, typically below ground level.”

**Slide 48.** Which makes these decisions *hard*, because everything above us depends on us.

So we need a *structure*, a framework, which will guide our decisions. To keep us tacking toward the right star. That is, toward our polestar, vision, and mission. And *telling* you about this structure — these product and engineering values — can help *you* understand why we’re making the decisions we do. And maybe even anticipate them.

**Slide 49.** I’ll turn it over to Dan to go into detail on our product values.


**Slide 50.** Dan: Thanks Anne, this is Dan. Earlier we mentioned the USWDS Design Principles: 

* Start with real user needs

* Earn trust

* Embrace accessibility

* Promote continuity

* Listen

These principles are a bit like service principles for projects that build with USWDS - they're meant for everyone. We follow them. You all follow them. These service principles provide a general decision-making framework for projects across the government. But — of course — we're all building different things. There are all kinds of justifiable decisions that can flow from these principles.

**Slide 51.** but how do **we** work in the service of these principles? What values help guide **USWDS** as a unique product in the U.S. Government?

**Slide 52.** Long-time followers of the design system will rightfully point out that USWDS already has product values, and you can find them at [designsystem.digital.gov/about/product-values](http://designsystem.digital.gov/about/product-values).

* Put user needs first.

* Make it easy to do the right thing.

* Accessibility is fundamental.

* Start from existing solutions.

* Be consistent, not static.

* Share what we do.

Not bad. Still relevant. But looking through these values, you'll see a number of items that could be redundant with the **service** principles we've captured in the USWDS [Design Principles](https://designsystem.digital.gov/design-principles/). And that's because these product values pre-date the design principles, and helped inform those design principles.

As we move forward with the design system, it's the right time to take another look at our product values, in the context of the overall Design Principles **and** in the context of what we've learned about the design system in the six years since we first drafted our current values. What's changed?

**Slide 53.** The biggest thing that's changed is that we've learned more about what makes this design system unique and effective. And my biggest insight over that time is that we're more than a codebase, more than a style guide, more than guidance and principles, more than a website. Those things are all super important, but I've found some of the biggest value in **connections** between teams across government, and in helping to provide a shared problem space and shared solution space for working through the many questions and discoveries, hard-earned success and setbacks, small joys and irritations that we share, working on the web.

At its best, the _design_ system can act as a kind of _nervous_ system, connecting and coordinating the good work happening across teams, agencies, and silos. It's definitely not just a broadcast mechanism but a network of _two-way_ communication. A system that's more than its component parts.

**Slide 54.** What's important to this system? As we chart a path ahead, here's what we've identified. We'll look at them all together before digging into each one.

* Design is adaptation.

* Compliance is the baseline.

* Strengthen connections.

* Easier earlier.

* Be a good steward.

**Slide 55.** First: **Design is adaptation.**

**Slide 56.** If we're here to facilitate design, what is design? Design is a process of adaptation, of *fitness*, of fitting a decision to its context. Design is a process that happens again and again as the context changes, as we try and learn, and as the feedback cycles roll ceaselessly forward. We're here to support design work by engineers, UX designers, visual and product designers, researchers, writers, accessibility specialists, product managers, and contributors of all kinds. Everyone designs, so how can we help encourage, coordinate, and develop alongside this process?

 **We build for building.** We develop tools not just for painting by numbers but for building new things and improving existing things. We're less of a model airplane kit and more of a toolbox.

 **We work from existing solutions.** If design is adaptation, we first find something to adapt. We try to avoid the blank page.

 **We're consistent, not static.** We embrace the inevitability and necessity of change. We experiment. We try to identify those aspects in which we feel most confident and try to find stability, but we resist fixity.

 In short, we *support design*.

**Slide 57.** If design is adaptation, we favor choices that help discover new solutions.

**Slide 58.** Next: **Compliance is the baseline.**

**Slide 59.** We’re a government team that understands what government teams need, including compliance with Section 508 and 21st Century IDEA — and we're here to make that easier. *But we can't stop there.*

We have a **government focus, and government responsibilities**. While we support the fundamentals of interface design, we're also here to identify and develop patterns and components that support government-specific needs. _And_ we need to bear in mind not only government technical requirements but what our sites and services require *of our audiences*. We know how important government services can be at certain times and in certain situations. Sometimes folks **don't** have a choice. What we provide has to work and has to work well.

 We **start with compliance, but go further**. We need to provide compliance from the start, but we also want to **support and shape best practices** that frequently aren't always requirements.

And, we **support mission focus**. We want to help a broad, diverse range of teams work in the service of their unique mission, and simplify the digital design minutiae that sometimes get in the way.

**Slide 60.** Because compliance is the baseline, we favor choices that help teams meet and exceed requirements.

**Slide 61.** **We strengthen connections.**

**Slide 62.** We can't *and shouldn't* do this alone. As I'd mentioned earlier, the design system isn't a broadcast mechanism; it's a way we can work together across teams, agencies, and silos, to identify, share, and scale solutions.

* **Develop a working language.** We want teams from across agencies to share solutions just as much as we want designers to communicate with developers. A working language serves a kind of continuity between different varieties of solutions.

* **Lower the barriers to contribution.** The design system is better the more people use it and contribute to it.

* **Work in the open.** The process is part of the product. Working in the open doesn't just provide access and insight. It doesn't only help prevent surprises. It doesn't just share and scale. It does all those important things, but working in the open means acknowledging ups and downs. Communicating the ups and downs helps us assume less, and be more proactive, honest, straightforward, and humble. When we're learning in the open as well, it introduces a vulnerability that can be an opening for connection and participation.

* **Meet teams where they are.** We gotta be practical. All the words and values and ideals are worth a lot less if teams can't use them to help design and build government websites and services. We need to work to be realistic and understand real constraints.

* **Support reusability.** We can't share and scale if teams can't use and reuse what we deliver. We need to develop solutions that are portable.

**Slide 63.** If we want to strengthen connections, we favor choices that improve communication.

**Slide 64.** Our next Product value is **Easier earlier.**

**Slide 65.** Everyone starts somewhere. Let's make that place as good as it can be, especially when that place is a place of unfamiliarity. Our design system needs to do a lot, and it needs to support significant customization and configuration, but we need to simplify the first interaction. We need to structure our product so the first door is the easiest door to open and walk through. So the first choice is the simplest.

* **Flatten the learning curve.** We want to provide an easier path through the product. This isn't only about usability, but understanding the right user needs at the right time.

* **Provide good defaults.** Start somewhere good. We want to be thoughtful about the starting point. We can't require customization to make the product work properly. What can we do to provide good functionality out of the box?

* **Add complexity later.** We need to identify the **simple** interaction and work from there. Don't lead with everything all at once. We don't need to avoid complexity, but our first priority is the simpler interaction.

* **Support the next step.** We don't want to make the distance between steps too great. People get stuck when the next step isn't obvious or isn't a natural progression from the previous step. We have to support *progression*.

**Slide 66.** If we want to get to easier earlier, we favor choices that enable the beginner.

**Slide 67.** Finally, be a good steward.

**Slide 68.** We're here with the support of public resources. To that end, we work not only to build better tools, but also to help improve performance, efficiency, governance, and institutional memory- to use our resources well.

* **We’re here for the long haul.** We're a long-term solution that will be supporting teams long after the first design or redesign. We need to work together and change together.

* **Maintainability** becomes a higher priority when we're in it for the long haul. Staying up-to-date isn't about conformance, it's about supporting long-term success.

* **Make the case.** Teams are independent. They have their own missions, opinions, audiences, and constraints. We not only respect our colleagues when we make the case for what we do, we understand that working together has costs as well as benefits. Not only does technical implementation have a cost, but justification has a cost as well. We're not giving orders, we're trying to build a case. We want to collect research broadly from all kinds of teams and make decisions with that evidence. This helps not only understand how we need to change but lowers the costs of that change.

* **Collect and scale expertise.** Not every design and engineering decision can scale, but we should work hard to identify those that can. Design and engineering are expensive but valuable. Sharing solutions not only helps every team do more, but it shapes the best practices that may become expectations. Collecting and scaling expertise helps prepare every team for the best practices of the future.

* And **Support the process.** The process is the core mechanic. In the long term, we think that how we work is at least as important as the tools we deliver. We think that the only way to consistently look ahead and adapt to the unknown of the future is to have a process that keeps us connected to teams, communicating with teams, and open to new possibilities.

* **Slide 69.** If we want to be a good steward, we favor choices that take a practical, long-term perspective.

* **Slide 70.** Now I'd like to pass it to Matt to talk about engineering values.

**Slide 71.** Matt: Thanks Dan. The author and designer Frank Chimero gave a talk in 2015 called “The Web’s Grain” about the power of designing websites in a way that embraces the possibilities and limitations inherent to the web platform and the devices that we use to interact with it. He meant grain in the sense that wood has a grain. Designing with the web’s grain, then, is like cutting wood in the direction of its grain. Today, we’re talking more about building technology than designing interactions, but I bring it up because the idea of the web having a grain is an important one that applies to just about every aspect of how we all make things for the platform.

**Slide 72.** So what does it mean to build technology with the grain of the web?

**Slide 73.** One thing it could mean is to use each part of the web platform for its intended purpose. That is, use HTML to structure a document's content, use CSS to modify the page's appearance, and use JavaScript to add behaviors and complex interactivity.

 Another way of saying this might be to understand what the primitive elements of the web are and to use them for their intended purposes. This applies to the languages that we use to build things on the web. Still, it also applies to the technologies and architectures that make up the web itself, things like HTTP, which is the basic transfer protocol for sending data to your browser, URLs for creating unique addresses for all of the content on the web, and HyperText for linking pages together, among others.

**Slide 74.** Another thing it could mean is to embrace the quirks of the platform. As designers, developers, and content authors, we build websites and send them out into the world, but we have little to no control over the environment in which our pages will actually be viewed. We can **also** embrace this lack of control. We can use data to make educated guesses about the browsers and devices users will have or the speed at which they'll be able to download everything we've sent them, but at the end of the day, we can't know for sure. If it's important for our audience to be able to see our content, or complete tasks in our applications, we have to build things that work in as many environments and conditions as possible. And we have to recognize that, even with the best analytics, we can't always be sure what those runtime environments will be.

**Slide 75.** The web isn't just technology. It's also a set of conventions, norms, and expectations that have built up over time—conventions like ways to dismiss modal pop-ups, best practices around information architecture and content design, etc. Building with the grain of the web means following these conventions.

**Slide 76.** These are some things it might mean to build with the grain of the web, but so far, we haven’t talked about why it might be a good idea to do that.

**Slide 77.** One reason is that the web platform is resilient by design, so embracing the platform is a way to leverage that resilience.

**Slide 78.** The web is a medium for sharing content, so browsers work very hard to get that content to users if at all possible. When a browser encounters an unfamiliar HTML tag, it simply renders the tag's contents. This is just as true of custom element tags like the ones the design system is beginning to work with as it is of malformed HTML. An undefined or mistyped HTML element will render as if it’s a `div` since the platform is designed to try to get content in front of the end user no matter what.

 Similarly, for CSS, a browser will simply ignore any style rules it doesn't support. In the early days of "CSS3," a developer could add `border-radius ` rules to their stylesheet that would create rounded corners in browsers that supported the then-new property, and older browsers would simply ignore the unfamiliar rule and render a pointy-cornered box.

 HTML and CSS are designed to fail gracefully.

**Slide 79.** JavaScript is arguably the most powerful part of the web platform stack in that it empowers developers to build entire applications that run in the browser. However, it is also the least resilient component of the platform. The more a developer uses JavaScript to get content, markup, or styles on a page, the harder it is to take advantage of the web platform's native resilience.

 JavaScript can trade resilience for power.

**Slide 80.** Another reason to build with the web’s grain is performance. The web platform was built to be fast. 

**Slide 81.** This is true of every layer of the platform, from the basic network protocols up to the rendering engines in browsers themselves. In describing his goals in designing HTTP, Tim Berners-Lee said “the target was fetch of about one-tenth of a second. It had to be ‘Get this document’ and ‘Here it is!”

**Slide 82.** Similarly, browser vendors make every effort to make the web as fast as possible for users. The processes by which they do this are complicated but ultimately amount to having smart priorities about the order in which the images that make up a web page are downloaded, parsed, rendered, and executed. This sequence, referred to as [the critical path](https://web.dev/learn/performance/understanding-the-critical-path), is optimized to build the DOM first, then apply styles, and then run JavaScript that might affect the DOM.

**Slide 83.** One way of working with the grain of the web platform is to lean into this prioritization to take advantage of the work that browser vendors put into making everything fast. The more foundational page structure, style, and content that a developer puts into JavaScript, the slower the overall experience will be for the end user. If a page’s entire DOM is created in JavaScript, then that page will miss out on the inherent speed built into the first phase of the rendering process. The same applies to using JavaScript to apply styles. Optimal performance comes from building the page with semantic HTML first, then tweaking with JavaScript. Another way of saying this is that the fastest pages let the browser do the performance-intensive work in the order they were designed to do so. The more that a developer chooses to re-implement that rendering process themselves, the more responsibility they then have for the page’s performance.

 JavaScript can trade performance for power.

**Slide 84.** The inherent speed of the platform is, in many ways, a best case scenario. There are all kinds of things that can make the web slow. Some of these things, like poor connectivity, or slow devices, are out of developers’ control. The best we can do is build with these potential limitations in mind, work around them where possible, and do our best to not introduce more slowness ourselves. 

**Slide 85.** Accessibility is another area where embracing the web platform has the potential to yield better results than going all-in on scratch-built components.

**Slide 86.** In just the same way that browser vendors work to make the web fast, they also put tremendous effort into making the web accessible to all, including assistive technology users. The simplest way to take advantage of this work is to use built-in semantically rich HTML elements wherever possible.

**Slide 87.** The danger of choosing to build components from scratch or from HTML that doesn’t have its own semantics is that it becomes incumbent on the developer to manually and painstakingly add in support for accessibility APIs using tools like ARIA. While it is possible to build accessible applications that provide great experiences for assistive technology users this way, it is much more difficult to do so. In addition to requiring much more development effort, it also necessitates a great deal more usability testing to ensure they are creating accessible, inclusive experiences (this isn’t to suggest that teams using semantic HTML don’t need to do usability testing—only that those who build fully custom components will need to do considerably more testing).

**Slide 88.** As the W3C’s Web Accessibility Initiative points out, [“No ARIA is better than bad ARIA.”](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/) ARIA is not a quick-fix for creating accessible sites and apps. Taking on the responsibility of adding landmarks for assistive tech runs the not-insignificant risk of implementing those landmarks in a way that is more confusing than it is helpful. Again, the point of this is not to say that teams should never build their own components from scratch but rather to suggest that they consider leveraging more robust and robustly accessible built-in solutions to the fullest extent possible.

**Slide 89.** The upshot of this is that, as with performance and resilience, the more that teams elect to build components out of JavaScript, the more responsibility they take for ensuring that what they build works for all of their users.

 JavaScript can trade accessibility for power.

**Slide 90.** What, in practical terms, does this mean? Hopefully, by this point, you’re at least open to the idea that there are real, tangible benefits to building with the grain of the web. But this is a presentation about the US Web Design System, so I want to talk now about some of the engineering values we think this idea implies or that are at least compatible with this line of thinking.

**Slide 91.** And here they are:

* Embrace the platform.

* Support UX with developer experience.

* We’re a layer.

* Write plain-language code.

**Slide 92.** The first principle shouldn’t be a huge surprise given the discussion so far. It’s to embrace the platform, or work with the grain of the web. We’ve already talked a fair bit about what this means, but it’s worth being specific about how it applies to the USWDS.

**Slide 93.** One important aspect of embracing the platform is to **help the platform do its job** — or to use each part of the platform for its intended purpose. HTML should be semantic and tags should describe the content they contain to the largest practicable extent.

 For USWDS Web Components, it means embracing the HTML Web Components architecture we talked about in September’s monthly call. As a refresher, HTML Web Components are custom elements that have some HTML in between the opening and closing tags of the custom element. Building at least some of our components this way should allow page authors to write simple (think "web 1.0") markup, while the presentational markup, such as any extra divs or classes necessary for styling, stays mostly in the shadow DOM.

* Closely related to this is that USWDS needs to **use progressive enhancement.** HTML web components containing relatively simple markup will enable teams to deliver critical content no matter what. Building components that way will ensure that content is available before JavaScript runs or even if it never does. But it also allows those components to apply all of the design and behavior customizations that CSS and JavaScript allow if and when they become available.

* **Avoid lock-in.** Building with the web platform, and using its native idioms is a way to keep USWDS from being tied to any particular framework.

Another way of saying this would be that we should prefer native and web standard tools to third-party tools and libraries. However, we’re a small team with a lot of work to do, so we can’t always write everything from scratch ourselves. So when we do adopt a library, we should choose something lightweight—both light in terms of the amount of data sent over the wire as well as in how it changes web-native behaviors.

Migrating away from Sass (and the tooling required to support it) and toward CSS variables/custom properties is an example of how we're doing this today. Another way of saying the principle at work here is to favor solutions closer to the grain.

A related point to avoiding lock-in is reducing switching costs. By keeping our reliance on dependencies as low as possible, we’ll be well-positioned to move on from them if they stop working the way we need them to or if a better alternative comes along. 

Another aspect of this is that we should pick tools that are not the most popular but most portable. Just because a library has widespread adoption doesn’t necessarily mean it will be a good fit for this project or its users.

* In general, we want to work to **support the open standards of the web**.

**Slide 94.** When we embrace the platform, we favor choices that work with the grain of the web.

**Slide 95.** The next value is to **Support UX with developer experience**.

**Slide 96.** 

* **User experience shapes the tools:** We're not working in a vacuum, and we're obviously not building for ourselves. We're building sites and services that others use. We need to make sure that we're building tools that make it easier for developers to build the kinds of sites and services that work for the person using the site or service, wherever they're coming from.

* **Performance matters:** It can be easy to lose track of the performance costs when we're using devices powerful enough to make it easy to build sites and services. But performance can have a real usability impact, a cost impact, and an energy impact. We have to work to keep that impact visible. We have to work to keep performance costs low.

* **Make accessibility easier, not invisible:** We have to be careful not to lose the user in the abstraction. It can be amazing and powerful to build accessible decisions into the tools we ship and the components we use, but we have to work to make sure that delivering and using accessible tools doesn't result in accessibility disappearing from view.

* **Support repairability:** Finally, tools and products don't always work as well as they should. If a developer can work to fix something in one of our components, they shouldn't always have to wait for us. We should deliver components that teams can get into and open the box. We want teams to have the ability to repair and improve our work — first for their project, but hopefully also later for an improvement we can incorporate.

**Slide 97.** When we support UX with developer experience, we favor choices that prioritize the end-user experience.

**Slide 98.** Recognize that **we’re a layer**. USWDS is only going to be *part* of the stack you use to build sites and applications.

**Slide 99.** 

* **Be a dependency not a fork.** We want to make it easier for teams to add USWDS to their projects in such a way as to maintain the connection between our work and theirs over time. 

* **Our opinions cascade.** We need to be thoughtful about the impact that USWDS has on downstream teams. Recognize that choices made at the Design System level establish the floor for performance and accessibility. If our components leverage too much JavaScript too early, that’s a performance tax we pass onto every single user. Developers should be able to make their own choices about how much JavaScript to use and at what point they hand control of the page over to scripts.

 This doesn’t mean that USWDS doesn’t or can’t be opinionated, but it does mean that the design system team needs to be thoughtful about how those opinions impact downstream teams and ultimately the public users of products built with USWDS.

* **Use semantic versioning.** Be clear when things change. Semantic versioning is a kind of contract between developers and users. This contract gives users confidence that the code they’re consuming isn’t going to break anything in their code if they install it—unless the upstream team tells them ahead of time that the update contains a breaking change. USWDS will adopt semantic versioning for the web components package first, and then down the line revisit versioning for other parts of the design system.

* And being a layer means we have to **support different tech stacks**. If USWDS goes all-in on a set of technologies, it may sound great to teams already using those tools, but it imposes significant costs on everyone else. But since we’re all building for the web, the closer we stick to web standard technologies, the easier it will be for every team that wants to use USWDS to do so.

**Slide 100.** If we're a layer, we favor choices that are thoughtful about our impact. 

**Slide 101.** The last value I want to talk through with you today is that we should write plain-language code. In government, we strive to use plain language in our content in order to make that content accessible to the broadest possible audience. This is something we should aim for in our code as well.

**Slide 102.** Not everyone who uses USWDS is a front-end development expert. Indeed — not everyone using USWDS is a developer at all. In light of that, we must write code that as many people as possible can understand, implement, and extend.

* **Write for reading:** Recognize that all code we write has to be read by others, as well as by our future selves!

* **Embrace the idiom:** Write with the convention of the language. Be cautious about how you introduce new abstractions, idiosyncrasies, or concepts.

* **Documentation first:** Integrate documentation tightly into the development process, and make sure our docs are oriented toward helping developers get things done in their sites and apps.

* **Support other developers:** And finally, we use plain language so that others can follow along and contribute.

* **Slide 103.** If we write plain language code, we favor choices that open our code to more contributors.

 And now I'll pass it back to Dan to wrap us up!

 Dan: Thanks Matt.

**Slide 104.** Today we introduced new product values:

* Design is adaptation.

* Compliance is the baseline.

* Strengthen connections.

* Easier earlier.

* and Be a good steward.

 And new engineering values that support those product values:

* Embrace the platform.

* Support UX with developer experience.

* We’re a layer.

* and Write plain-language code.

Where do we go from here? Well as I mentioned, we've gotta be practical. Now we're working through how we move from values to product.

**Slide 105.** Working with values alongside product helps guide an agile and iterative process. Both for our team, and for yours, knowing where we're coming from can tell you where we're going. 

**Slide 106.** I know that the future looks interesting. Our core codebase, design tokens, and utilities, plus a simplified, modular web components solution points to some promising directions for a powerful unified product that's able to grow and adapt. I look forward to presenting more of the vision for that future for everyone next month! Thanks, and let's get into some Q &A.

**Slide 107.** Audience Q&A

**Slide 108.** Dan: Thanks for joining today’s USWDS monthly call. Next month, we'll build off these values to give a clearer look at the next generation of USWDS.

Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we appreciate the extra time it takes you to provide it.

 And if you have a question we weren't able to answer on the call or thought of later, please head into our public Slack and ask it there. We'll be there after the call to answer questions.

 Have a great day and a great conclusion to your summer. We'll see you in November!

 {{< /accordion >}}

Join the U.S. Web Design System (USWDS) team for a talk about the product and engineering principles and values that guide the team’s decision-making as they look towards the future.

In this session, you’ll:

- Learn about USWDS principles and values and how they help the team make decisions.
- Understand how these principles inform direction with web components.
- Discover the USWDS team’s vision for the future of the design system.

**This event is best suited for:** Design system users of all levels, especially product managers and software engineers.

**Speakers**

- **Dan Williams** - Product Lead, USWDS
- **Matt Henry** - Engineering Lead, USWDS
- **Anne Petersen** - Experience Design Lead, USWDS

## Join our Communities of Practice

- [USWDS](https://designsystem.digital.gov/about/community/)
- [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

_This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year._

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

- [The U.S. Web Design System](https://designsystem.digital.gov/)
- [Contribute on GitHub](https://github.com/uswds/uswds/issues)
- [Email Us](mailto:uswds@gsa.gov)
- [Join our community](https://digital.gov/communities/uswds/)
- [Follow @uswds on Twitter](https://twitter.com/uswds)

---

_Disclaimer_: All references to specific brands, products, and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency.
