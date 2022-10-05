---
title: USWDS Monthly Call - September 2021
kicker: USWDS
summary: Let's peer into the crystal ball and look into the future of USWDS.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-where-do-we-go-from-20-sept-2021-tickets-169510844499
captions: https://www.captionedtext.com/client/event.aspx?EventID=4882986&CustomerID=321
date: 2021-09-16 14:00:00 -0500
end_date: 2021-09-16 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - design
  - 21st-century-idea
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
slug: uswds-monthly-call-september-2021
# zoom, youtube_live, adobe_connect, google
event_platform: zoom

---

[View the slides](https://designsystem.digital.gov/files/monthly-calls/uswds-monthly-call-september-2021-distro.pptx) (PowerPoint, 5.19 MB, 58 pages)

[View the Webinar Recap](https://digital.gov/2021/11/05/webinar-recap-u-s-web-design-system-september-2021-monthly-call/)

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call Script for September 2021" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for September 2021. It's been a couple of months since we've seen some of you — and depending on where you live you may be seeing a bit of fall color already, just like the oranges and browns in our logo.

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, which may look a bit like me. Thanks for being here! First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is online at handbook.tts.gsa.gov/code-of-conduct. 

We’ve posted the link to the code of conduct in the chat. We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call. So thanks! And, with that, let's get started!

**Slide 3:** So, what's our agenda for today? Well, we're trying to keep today's call lean and mean, so there's just one topic on the table, but it's a good one: Where do we go from 2.0?

We'll spend all our time on that topic, and save all the rest of the time for Q&A. So ask questions in the chat as we go, or hold on to your Qs to the end.

**Slide 4:** Today, I'm going to talk about where we go from 2.0. Now, I know we're on 2.12.1, but this does rhyme, and it gets to the main point I'd like to discuss today: When and why do we release a new major version of the design system. What does a new major version even mean?

**Slide 5:** But before we look forward: a look back. We released USWDS 1.0 about four and a half years ago — February 2017 — as our first pass at a style guide for government. This was something that was still a bit new: a collection of tools and best practices for building websites. A little bit of a starter project and a little bit of a style guide. And right from the beginning, we were able to do something of what we still hope to do with the design system: help teams focus their time on high-value problems, by providing a toolkit of ready-to-use website building blocks. And thanks to some of the early developers and adopters, like 18F and USDS, it caught on and was used to build a number of sites.

**Slide 6:** But while it was a great starting point, it had a few issues. It was very opinionated and had a lot of greedy styles. Thus, it was hard to add to an existing site without a lot of unexpected effects, and made incremental adoption quite challenging. And it lacked an explicit design language that connected its components. Once you started customizing it, it was hard to tell just what made a USWDS site at all. You either used its default styles or you went off on your own. The design system didn't have any way to guide teams when they made these necessary customizations.

**Slide 7:** We designed USWDS 2.0 to address these concerns. We wanted a design system that was easy to add incrementally, and one that's built to adapt to project needs, while still speaking a common design language.

* This is why we rebuilt the way we wrote our stylesheets and markup.
* This is why we introduced a broad range of expressive design tokens and utility classes.
* This is why we developed customizable project settings.
* And this is why we expanded our guidance and documentation.

**Slide 8:** As we said at the time, USWDS 2.0 was “built to grow.”

**Slide 9:** And it has grown. Since launching USWDS 2.0, we've added 25 components and 6 templates — more than doubling both components and templates. We're now used by almost 400 websites, at 86 agencies and 27% of executive branch domains — with over 250 million sessions on USWDS-powered sites per month. By many metrics, USWDS 2.0 has been a successful release — and we've improved it over the last two and a half years, over a series of releases that bring this line up to 2.12.1.

**Slide 10:** But — and there's always a “but” — it wasn't all good news coming out of USWDS 2.0. We made so many changes moving from 1.0 to 2.0 that migrating between versions was a real PITA.

**Slide 11:** And if you're not familiar with acronyms and government-speak, PITA is short for Pain In The Neck. While USWDS 2.0 offered significant improvements over 1.0, we couldn't realistically suggest migration for many projects. Breaking changes can require a lot of time and technical know-how to manage. You do have to think about resources and cost-benefit analysis. The return on investment can be too low to justify. The design system was supposed to make things easier, right?

**Slide 12:** So we managed to prove it to ourselves. Fact: migrations suck, and breaking changes will always give teams pause and require project-specific justification. Is this worth our time? So, as we moved forward with the 2.0 line, we tried to break things as little as possible. "Promote continuity" is one of our design principles, and it's one we take to heart.

**Slide 13:** However — and there's always a “however” — when we're concerned about not breaking things, this can also make it difficult to change and evolve. This puts the design system in a bit of the ol' double-bind — when it's easier to grow than change, it reduces your maneuverability over time. This increases the cost of change, and can lead to painting yourself into a corner. So, paradoxically, this highly risk-averse model gradually increases the necessity of change over time, and this buildup of pressure can result in large, disruptive, and risky Big Bang changes instead of ongoing, incremental improvements. Put simply: Risk-aversion doesn’t always reduce risk, it sometimes just delays it.

**Slide 14:** We know that the design system has to change over time. As the world changes, the design system needs to adapt and evolve. It needs to learn from its environment, and — because this is one of the reasons for having a design system in the first place — it has to make it easier to scale what it's learned — its improvements — to the teams that use it. Today, we see a couple of necessary changes on the horizon that we'd like to address sooner rather than later.

**Slide 15:** First, ending support for IE11. IE11 will go out of support for certain operating systems starting June 15, 2022. IE11 usage has consistently been below our 2% support threshold (as monitored by analytics.usa.gov) since May, and there is every indication that this trend will continue. It is in the best interest of the design system and the teams that use it to officially end our support for this browser.

**Slide 16:** Second, support for modern Sass syntax. Sass is our stylesheet language, and its syntax had some major changes in 2019. Support for this new syntax (called the Sass Module System) has been on a bit of a bumpy road over the last couple years, but at this point, there are consistent support and compiling solutions. As of next month, October 2021, the Sass project will deprecate the old @import syntax, and drop legacy support altogether by October 2022. If you’ve been compiling USWDS stylesheets recently, you’ve probably started to notice deprecation warnings. The new syntax will not only get rid of these warnings, but allow us to deliver smaller, more performant, and better customized stylesheets. Again, it is in the best interest of the design system and the teams that use it to update to this modern syntax.

**Slide 17:** The design system needs to make these changes and clearly signpost them. That is, we need to be very clear that before a certain point, we did things one way, and after that point, we'll be doing things another way. If you need IE11 support, you need to stay behind a certain obvious version. If you need legacy Sass syntax, you need to stay behind an obvious version. At a clear signpost version and beyond, the rules have changed. Now, there's one other concept that needs similar signposting, and that's related to how we use JavaScript with the design system. Since the beginning, USWDS has taken a little bit of a wait-and-see approach to JavaScript. We've attempted to design our components so they work without JavaScript or as JavaScript-powered progressive enhancements on native HTML elements. This can improve resiliency and performance, but not necessarily. 

While data on JavaScript-disabled browsers is unfortunately scant, as of 2010 (11 years ago!), this number was about 2% in the US. As of 2012, it was at 1.2% of screenreader users, and as of 2016 it was at 0.2% in the UK. Even 10 years ago, this number was close to our 2% support threshold, and we do not believe the increasing reliance of the modern web on JavaScript has moved this number up. WCAG 1.0 from 1999 required that pages be functional and accessible with scripting disabled, but WCAG 2.0 and all other modern guidelines allow you to require JavaScript. We've waited and seen, and it's time for us to drop the "must work without JavaScript" requirement as no longer relevant and practical to the modern web. 

We need to do more to support JavaScript development with USWDS, and to make USWDS components more compatible with modern frameworks and ways of working. So, together, these three necessary changes — dropping IE11 support, enabling modern Sass, and requiring JavaScript for some functionality — provide new rules for how we can build the design system, and how you can build with it.

**Slide 18:** So, when I talk about a clear signpost version, is this USWDS 3.0? The short answer is yes, but before we really talk about what USWDS 3.0 means.

**Slide 19:** It's worth asking: What does a version number even mean?

**Slide 20:** One thing to note is that version numbers are not just a marketing gimmick. Real version numbers aren't like Web 2.0, shorthand for something hand-wavy.

**Slide 21:** Version numbers should be meaningful. In fact, version numbers should have a very explicit meaning.

**Slide 22**: That explicit meaning is captured in a concept called semantic versioning. And to be clear, this isn't a USWDS concept, this is a widely adopted software development concept. The purpose of semantic versioning is to tell developers what to expect about the content of a release.

**Slide 23:** So, given a three-part number in the format number-dot-number-dot-number, like 2.12.1, each section can be seen like a little odometer, incrementing up and up. Each time a number increments, each number to its right resets to zero. You've probably noticed this before, at least with USWDS versions: we'll have a release like 2.11.0, which might be followed by:

**Slide 24:** *2.11.1*, and then

**Slide 25:** *2.11.2*, and then

**Slide 26:** *2.12.0*

**Slide 27:** What are all these numbers supposed to mean? What's the difference between 2.11.2 and 2.12.0? Why change one number and not the other? In semantic versioning, any version number is actually a chain of three numbers which are actually three distinct version numbers — three different versioning types. Version numbers are written in the form MAJOR VERSION-dot-MINOR VERSION-dot-PATCH VERSION. We'll work from right to left, starting with

**Slide 28:** The patch version. In our example version number of 2.12.0, the "oh" at the end is the patch version.

**Slide 29:** Increment the PATCH version when you make backwards-compatible bug fixes — an internal change that fixes incorrect behavior using existing conventions, like fixing a Sass mixin or function to work as expected.

**Slide 30:** The middle number — "12" in our example — is the MINOR version.

**Slide 31:** Increment the MINOR version when you add features or functionality in a backwards compatible manner, that is, using existing conventions — like, for instance, adding a new component or a new function. Increment the MINOR version if you mark any feature as deprecated.

**Slide 32:** Finally, the first number, the MAJOR version. "2" in our example.

**Slide 33:** Increment the MAJOR version when you do something that may require downstream effort. That is, when you change the conventions and old conventions may not work as expected. Typically, in this case, the downstream user may have to do or change something in their code. You've changed the interface in a way that is not — as we say — backwards compatible. This is also called "making incompatible API changes" where API is the "Application Programming Interface", or how users interact with your code.

**Slide 34:** Now, every version you release is categorized as only one of these types. You don't ever release a single version that increments, for instance, both MINOR and PATCH versions because you both fixed bugs and added functionality. Lesser — scare quotes — versions kinda “go along for the ride” when combined with a more impactful version.

* If we have a version with minor changes and patch changes, we increment the minor version.
* If we have a version with major changes and minor changes, we increment the major version.
* If we have a version with major changes and patch changes, we increment the major version.

**Slide 35:** Now here's where it gets kinda funky for a project like USWDS: If a major version is "making incompatible API changes," what the heck is the API for USWDS? Is it a major version change when we update a class name? When we change the markup of a component? When we change its interaction, style, or display? When we change its interaction, style, or display "a lot"? What does that even mean? Is USWDS guidance subject to semantic versioning as well? These are good questions!

**Slide 36:** Depending on how we interpret the USWDS API, the design system might realistically be on version 21.2.1 now instead of version 2.12.1. Would this freak you out? Maybe!

**Slide 37:** But — practically and realistically — this ambiguity about how we implement semantic versioning, and even if we do, makes it harder for developers, designers, and program managers to really know what we've changed and what its impact will be on their projects. This ambiguity reduces trust. Teams need to know what has changed, when it's “safe” to move from one version to another, and when moving from version to version might require additional time, energy, or other resources. Without good knowledge, teams can't make good decisions.

**Slide 38:** And an additional complication is one we might call the “bundle problem” or "the battleship", like the big gray battleship we see on this slide — thanks for the image, Library of Congress! In the battleship problem, we can think of the codebase as a battleship — a complex monolith, where every element, in our case, every component, is bundled together in a single package. Connected, tightly coupled, and co-dependent. Every part of the battleship moves and turns at the same time.

**Slide 39:** Let's look at how this works. At the left, we see a schematic simplification of the codebase, with six components. In our example, the codebase is at version 1.0.0. As we develop the code, we move to the middle diagram and we see we've made some changes: a couple of the components got patches, one got a minor change, and one got a major change — maybe we needed to change its markup. 

The diagram on the right of slide 39 shows the final release. Since the change we made was a MAJOR change, the whole release is a major release, moving the project from 1.0.0 to 2.0.0. So, given a collection of changes to components, even if components evolve at different speeds, they all release in the same version. Unfortunately, this means that specific component patch or bugfix updates can be dependent on unrelated major or minor updates elsewhere in the codebase!

**Slide 40:** This means that battleship codebases can block patches and features with major changes. Major changes in any individual component can prevent teams from adopting patches in unrelated components, and can block subsequent patches as well. As we saw in the previous slide, a major version might include patch changes, minor changes, and at least one major change. Teams that might want the patch changes could be unwilling to upgrade since they risk introducing a breaking change at the same time. *For example*, imagine a developer looking at updating to a potential USWDS version and thinking: "I want to get this accessibility improvement to combobox, or this JavaScript improvement to modal, but I don’t want to have to break our header to get it." And not only are the patches in that specific release blocked, but any subsequent patch or minor updates to these components will be blocked as well.

**Slide 41:** So, why not just avoid making major changes? Well, battleships will tend to inhibit necessary changes! Since we want to reduce major breaking changes, we may put off necessary major changes in favor of other work, but the major need does not go away. On this slide, the major need is shown with a dotted red line. While we continue to make patch (blue) and minor (gold) changes in other components, development on one component stalls because it would introduce a breaking change in the component, and thus, in the entire codebase. Depending on the risk aversion, this change could sit uncompleted for some time! 

This doesn't work in the service of incremental development. The battleship not only can make patch versions dependent on unrelated major or minor versions but the flipside is also true: it can prevent necessary major or minor changes because of guaranteed downstream development cost, even for teams that don't want, need, or are able to implement that specific change. Thus, battleships turn slowly and poorly. Right now, USWDS is a battleship, but it should not be one, and it cannot effectively operate as one.

**Slide 42:** Instead of a battleship, it can be more useful to see USWDS as a collection of more loosely-related individual projects: the components themselves. This model is less of a battleship and more of a flock of birds, like the murmuration of starlings we see on this slide. In fact, we introduced the concept of USWDS components as individual packages in USWDS 2.1.0. Now, it's time to bring this idea to the next level of maturity.

**Slide 43:** In the flock model, the component becomes the unit and each USWDS component is its own official npm package, with its own semantic version history and its own dependencies. There could (and would!) still be an omnibus package — like the current uswds package — but that package would simply include all the relevant component packages as dependencies and contain little unique code of its own. So, where a battleship bundles components as a single package, in the flock, each component is a package.

**Slide 44:** The flock is configurable. The flock model decouples individual components and allows developers to choose which parts of USWDS they need in their projects, and which components they have the time and resources to keep up-to-date from sprint to sprint and increment to increment. As we move from left to right in the diagrams, we see that each component is a package. In the center, each package has its own version history. And on the right, we see a project-specific subset of USWDS packages. Teams include and update only what they need.

**Slide 45:** This allows USWDS to be very clear about how components have changed over time, and to use more accurate semantic versioning for everything we publish. Each component has its own clear history. Each component has its own clear history, and we can track each package and its dependencies with npm. On this slide we see individual timelines for each of the components we saw in the subset in the earlier slide. As each component matures from left to right, each component has patch, minor, and major version increments.

**Slide 46:** Individual component packages allow teams to either update packages immediately and stay at the most current version, as we see in these timelines with the project's active version also being the most current version in the timeline. Not every team has the same resources. Some may choose to implement even major changes.

**Slide 47:** But some may not, and may wait to update until it's right for their project. Teams can update packages at their own pace, as we see in this slide, with the project's active versions at different stages in their timelines.

**Slide 48:** The flock model can provide less overhead, less unused code, and better component tracking. We expect to see projects moving from the omnibus uswds package to component-specific packages for just these reasons.

**Slide 49:** So, there's a new major version of USWDS coming soon, and moving to this major version is going to be a whole lot easier than the move from 1.0 to 2.0.

**Slide 50:** This new version is going to do four very specific things:

* Signal the end of IE11 support
* Update to modern Sass Module Syntax
* Allow requiring JavaScript
* Publish versioned component packages

**Slide 51:** And we don't want it to do much else! Here's what this release will not do:

* Move straight to cutting-edge CSS
* Change markup or look-and-feel
* Radically change our JavaScript
* Remove the familiar uswds omnibus package


It's important to say that while this release will signal the end of IE11 support, it doesn't mean that we'll launch with a new grid-based layout grid or a bunch of CSS custom properties. We won't change our CSS much at all. Similarly, removing the “Must work without JavaScript” requirement doesn't mean that we're going to launch with a new Web Components version of USWDS. We won't change the JavaScript much at all. But as we'll discuss over the next few months, the four changes together suggest and support a number of potential improvements moving forward.

**Slide 52:** We plan to release this new major version of the design system in January 2022, with a Beta program starting next month — in fact, it will be a continuation of the Library Beta program we're already running.

**Slide 53:** As we learned from 2.0, we'll be working hard to make sure that this update requires as little migration hassle as possible, and points us in the direction of more joyful updating as we move forward. And I'm serious when I mean that we intend to reduce this hassle to as close to zero as we can. The biggest change here from a developer's perspective will be the Sass Modules work. But we think that most teams will only need to update a couple lines of code and it will just work. Like minutes or seconds. Our focus is on making it as easy as possible for designers, developers, and program managers to know how the design system is changing, how those changes impact their project, and stay up-to-date with improvements to the design system.

**Slide 54:** This isn't the last you'll hear about these changes. This major release is still four months away. We'll be talking more about what's coming, what this could mean, and how you can participate and provide feedback, over the next few months.

**Slide 55:** As we move beyond 2.0 we move beyond a design system that's built to grow.

**Slide 56:** And we move to a design system that's built to evolve — and that's pretty exciting.

**Slide 57:** So, now we’re going to stop the recording and answer your questions!

**Slide 58:** Thanks for joining today's USWDS monthly call. Next month, we'll be talking about connection, contribution, and community. As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion. Follow us on Github at github.com/uswds, check out our website, and visit designsystem.digital.gov/about/community to join us and your colleagues across government who are using USWDS. And next month we'll be talking about how we might do this community thing a little better! Thank you, and see you in October. 

{{< /accordion >}}


Where does the design system go from USWDS 2.0? What did we learn from that release? What challenges can the design system better address as we move forward? How can the design system be ready to grow and evolve alongside the teams that use it? 

Join Dan Williams for the next USWDS Monthly Call, Thursday, September 16 from 2-3pm ET, to hear what the design system team is thinking, as we peer into the crystal ball and look into the future.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*



## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
