---
title: USWDS Monthly Call - January 2022
deck: "Getting Started with USWDS: Developers"
kicker: USWDS
summary: New resources for developers who are new to USWDS.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-getting-started-with-uswds-developers-jan-2022-tickets-239379870637
captions: https://www.captionedtext.com/client/event.aspx?EventID=4992556&CustomerID=321
date: 2022-01-20 14:00:00 -0500
end_date: 2022-01-20 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - code
  - open-source
  - uswds
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
  - james-mejia
slug: uswds-monthly-call-january-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-january-title-card

---

[View the slides (PowerPoint, 1.5 MB, 30 pages)](https://designsystem.digital.gov/files/monthly-calls/uswds-monthly-call-january-2022-distro.pptx.zip)

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call Script for January 2022" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call. For the first monthly call of the new year: January 2022. And, for January it's some frosty blues for the USWDS logo.

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, which, I guess, looks like me three years ago — so young, so energetic! Thanks for being here! 

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at handbook.tts.gsa.gov/code-of-conduct. We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 2:** So what's our agenda for today? First we'll show off a few great new site launches. Then I've got a couple important design system updates.

And then we'll kick off the new year with a new Getting started tutorial, designed to give anyone interested a straightforward way to learn about a few key USWDS concepts, and a little playground to experiment without worrying about screwing anything up.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** Two great site launches this month, and the first is https://itvmo.gsa.gov/, website for GSA's Information Technology Vendor Management Office, an independent advisor and advocate to help agencies buy common IT goods and services in compliance with procurement laws. Their site — like many of the good new sites we've seen recently — keeps it simple with a straightforward text-based hero, strong blues, and a focus on clear messaging.

**Slide 6:** And finally, one you might have heard of: https://www.covidtests.gov/ — the website that had more visitors on Tuesday than all other .gov sites combined. covidtests.gov works with the US Postal Service to provide four free COVID tests to any household. Their site uses USWDS to deliver a calm, authoritative, and engaging introduction to COVID testing resources, with a clean mix of photography and illustration — keeping it simple and getting it done. Congratulations.

**Slide 7:** Great work, everyone! 2022 is going to be a big important year. Be sure to let us know when a new site launches, either with an email to uswds@support.digitalgov.gov or a note on the USWDS public Slack channel.

**Slide 8:** So now, a few product updates.

First, though, before I get into it, I'd like to say thank you to everyone who answered our survey last month. We know it usually stinks to answer surveys — and even short ones have to compete with every other dang thing we're trying to get done day after day. So thanks for trusting us with your time. I really appreciate it.

**Slide 9:** So, moving on to design system releases. We just released USWDS 2.13.1 — a patch release with a few important bug fixes.

**Slide 10:** First, we fixed an input bug with Date Picker in Safari that prevented selections from the Date Picker from propagating into the input field.

**Slide 11:** We also fixed a display bug with the external link icon in Safari. Now external link icons don't have bars on the top and bottom.

**Slide 12:** We also improved a few internal functions. We made some changes to the new divide() function to prevent infinite loops when dividing by zero.

**Slide 13:** We also optimized the performance of the luminance() function — if you use custom colors and find some slow compile times, this release could save you some serious pain and suffering.

**Slide 14:** We also improved our package exports for better compatibility with Webpack 5.

**Slide 15:** And finally, we fixed the display of the Dropdown input in Windows high contrast mode.

**Slide 16:** And that's USWDS 2.13.1 — available now.

**Slide 17:** We also released a new Beta release out now: Beta 2, with some improvements to JavaScript component lifecycles.

**Slide 18:** JavaScript component in USWDS 3.0 Beta 2 allows initialization of components on references on elements other than document.body.

**Slide 19:** This means that our JavaScript components are more flexible and easy to use, and can be more easily rendered after page load when using something like React or Angular.

And that's USWDS 3.0 Beta 2.

**Slide 20:** And finally, USWDS Gulp: we've been maintaining our uswds-gulp repo as a way to get teams going using Gulp to compile USWDS stylesheets. But as anyone who's used it can tell you, it's kind of like documentation masquerading as a real package. In a way, it's similar to some of the issues we have with delivering components: there's a lot to copy and paste, and it's very difficult to maintain. If we make changes to the uswds-gulp repo, it can be a challenge for downstream teams to know what changed and how to implement that change in their own gulpfile.

Wouldn't it be better if we were more able to abstract away the Gulp internals and focus on letting developers customize their input and output settings, and just use our compile functions without copying the source code into their projects.

**Slide 21:** So this is exactly what we've tried to do with the next version of uswds-gulp, USWDS Compile — a new USWDS compiler package, built from uswds-gulp, but built to be a real package and a real project compiling dependency.

**Slide 22:** We tried to make it straightforward: you install the package and import it into a gulpfile. Then you have access to its settings and functions. It has a simple, documented API, and can do everything that uswds gulp can do, with far fewer lines of code.

**Slide 23:** This results in less project overhead. uswds-gulp was a pain to maintain. USWDS compile has no complicated peer dependencies or multi-line install commands. There's no copying gulpfiles. No searching for lines in a gulpfile to update. And no worrying that updating the dependency will break or wipe out your customizations.

**Slide 24:** And there's no installing from GitHub. USWDS Compile is a real package in the npm registry. In fact, it's the first package we've published as a scoped package to npm, scoped to our uswds organization. As we move forward to USWDS 3.0, you'll see us publish more scoped packages, that is packages that begin @uswds-slash.

There are a few important benefits to scoped packages. First, it keeps all USWDS packages together. It's also more secure — we're the only ones who can publish a uswds-scoped package, so — as we move forward — if you're wondering whether a package that has USWDS in the name is really published by us, look for the @uswds org scope. And finally, it'll be easy to know which packages we support. If it's published to our org, it's our package and we support it!

**Slide 25:** We'll dig into USWDS Compile a bit more in today's tutorial, but for now I'll point you to the new [uswds-compile repo] (https://github.com/uswds/uswds-compile). uswds-compile is currently out as a beta release, and we urge you to check it out and give it a shot. If you currently compile with Gulp, it could be worth using uswds-compile, and if you're a current user of uswds-gulp, definitely check out uswds-compile. At some point soon — after we release the final 1.0 version of uswds-compile — we're going to be archiving uswds-gulp.

Personally, I've been waiting for these improvements for some time, and I'm really happy to release them today!

**Slide 26:** And now: Getting started with USWDS — a step-by-step tutorial.

We've spent a lot of time over the last few months trying to make it easier to get started with the design system — to make it easier to introduce key concepts and techniques to developers who are new to working with USWDS.

This month, I'd like to walk you through a new tutorial project we've started as a GitHub repo. Because there's only so much you can learn, sometimes,  by reading docs — sometimes it can be really helpful to just jump into some code. So we developed a small, simple Jekyll site whose purpose is to guide folks through the process of installing USWDS into a project.

We'll walk through:

* Installing the design system source code into a project,
* Compiling USWDS styles,
* Adding USWDS code to a page or site,
* Harmonizing USWDS with any existing CSS, and 
* Customizing USWDS to adapt to your project tone and needs.

So let's get to it. I'll get started by heading over to our [uswds-tutorial repo on Github] (https://github.com/uswds/uswds-tutorial).

**Slide 27:**  DEMO

During the demo, Dan walked attendees through a new USWDS tutorial on Github, which helps developers get started with installing and using USWDS code on an existing project. The tutorial first installs a simple non-USWDS Jekyll site you can host locally, then you progress through the tutorial by installing USWDS and integrating it into the site. We encourage you to give it a shot and let us know if it's helpful to you.

Here's what you'll learn:

* How to install USWDS source code from npm
* How to install the USWDS compiler 
* How to set up the compiler and compile USWDS source code
* How to add USWDS CSS and JavaScript to a project
* How to add the USWDS Banner and Identifier
* How to integrate USWDS styles and existing project styles
* How to customize USWDS
* How to optimize USWDS and use less unused CSS

**Slide 28:** And that's “getting started with USWDS”: installing, compiling, adding, harmonizing, and customizing. And there are plenty of places to go from there. To try it for yourself, head over to the [repo on Github] (https://github.com/uswds/uswds-tutorial) and follow the instructions in the README.

**Slide 29:** So let's move on to Q&A.

**Slide 30:** Thanks for joining today’s USWDS monthly call. Next month, the monthly call will be on February 17, 2022, the third Thursday of the month, and we'll be talking about how we're thinking about USWDS API and what that means for where we go after USWDS 3.0.

As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion.

Follow us on Github at github.com/uswds, check out our website, and visit designsystem.digital.gov/about/community to join us and your colleagues across government who are using USWDS.

Thank you, and see you next month!

{{< /accordion >}}

---

For our first monthly call of 2022, we'll take a look at a new tutorial focused on getting started with the design system. Our team will also demo a new getting started guide for developers, with improved guidance for how to install, compile, and begin to customize the design system.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*



## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
