---
title: USWDS Monthly Call - May 2022
kicker: Optimizing Performance with USWDS 3.0
summary: The U.S. Web Design System (USWDS) team will show you how to reduce CSS
  size and optimize build time with the design system.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: "https://www.eventbrite.com/e/uswds-monthly-call-optimizing-p\
  erformance-with-uswds-30-may-2022-tickets-335535073437 "
date: 2022-05-19 14:00:00 -0500
end_date: 2022-05-19 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - code
  - uswds
  - performance
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
  - james-mejia
slug: uswds-monthly-call-may-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-monthly-call-may-title-card

---

{{< asset-static file="uswds-monthly-call-may-2022.pptx" label="View the slides (PowerPoint, 7.6 MB, 64 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for May 2022" icon="content_copy" >}}


**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call. For May 2022 — home of the May flowers that those April showers are said to bring —accompanied by this spring flower–colored USWDS logo. Today is also Global Accessibility Awareness Day. Thank you to everyone working to make our sites and services more useful, more usable, and more accessible to the folks that really need it.

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, dark hair, blue shirt, alert expression: close enough! Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at [handbook.tts.gsa.gov/code-of-conduct] (handbook.tts.gsa.gov/code-of-conduct). We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

First we'll show off a nice new site launch.

Then I've got just a little product update.

And then we'll talk about packages and performance in USWDS 3.0.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** Just one this month: [pandemicoversight.gov] (https://www.pandemicoversight.gov/), the home of the Pandemic Response Accountability Committee, overseeing more than $5 trillion dollars in pandemic related programs and spending. The pandemic oversight home page has a blue gov banner at the top of the page, a closeup of George Washington's dollar bill portrait peering up from a hero section, and a red button that says "report fraud, waste, and abuse" up the the top-right corner.


**Slide 6:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** So now, a quick product update.

**Slide 8:** Well, as you might have seen, [we released USWDS 3.0 last month] (https://designsystem.digital.gov/whats-new/updates/2022/04/28/introducing-uswds-3-0/). We've been using it on our own sites, as well as Digital.gov. As a bit of foreshadowing to our presentation a bit later, the image on this page shows 3.0 made out of a wireframe mesh with colorful cubic packages at the vertices. Packages are central to USWDS 3.0, and we think there's a lot of possibility for both performance improvements, and to really allow teams to tailor their implementations to their projects.

**Slide 9:** But yeah, USWDS 3.0 is out now, and we're working to patch any issues we find or you report. We published a couple small bugfixes to our Sass theme files in [USWDS 3.0.1] (https://github.com/uswds/uswds/releases/tag/v3.0.1) and we're readying a few more little bugfixes for a 3.0.2 release sometime in the next week or so.

If you're thinking about migrating — and you should — check out the [migration resources on our website] (https://designsystem.digital.gov/documentation/migration/) and also feel free to join the [migration discussion on Github] (https://github.com/uswds/uswds/discussions/4660) or on Slack. If you find bugs, let us know and we'll get them fixed. If you run into any other issues or have questions related to migration, we'll do our best to answer them.

**Slide 10:** Today, I want to talk about what I think is one of the major features of USWDS 3.0: the concept of USWDS packages, and its implications for performance and CSS size. Packages are a concept that has existed in USWDS since just after the launch of 2.0, but it's only now that we've been able to do it properly and begin to provide a modular solution that allows teams to use only the parts of the design system that they need.

**Slide 11:** If we look back to the launch of USWDS 1.0, it was a much smaller codebase. We launched with 20 components, and a compiled CSS size of 95 KB.

**Slide 12:** USWDS 2.0 was built to grow, and grow it did. USWDS 2.0 launched with a new design language and a comprehensive suite of utility classes to support it. These utilities added some real weight to the compiled CSS size, however, and the default USWDS package grew to 271 KB of compiled CSS.

**Slide 13:** Over the course of USWDS 2, we doubled the number of components in the design system, bringing it up to 40 components and utilities. But again, each new component brings new classes and new CSS. By the time we get to USWDS 2.13.2, the USWDS package included 417 KB of compiled CSS. There's a trend here, and the growth of the design system is always accompanied by a growth in the size of the compiled CSS.

**Slide 14:** So here we are at the launch of USWDS 3.0. This new version doesn't add any new components, or any new utilities, but there is always more to come. And you could see this as something of a problem. Design systems and component libraries grow and grow, but the needs of existing websites grow more slowly, if at all. Teams should want to have the newest and best design system component code, but they don't necessarily want to take a lot of bloated overhead along with that code.

**Slide 15:** With USWDS 3.0, USWDS can keep growing without bloating your project CSS. Its most significant change is an architectural one: Unbundling the design system into individual modular packages that teams can add a la carte instead of adding everything together, even the bits you don't use.

**Slide 16:** So what is a package? In USWDS, a package is an independently installable feature, component, or bundle of features or components. If you think about the design system as a collection of components and features, a package is the building block: an individual component, or utility classes, or the design language itself, the definitions of the tokens, mixins, and functions. Each of these bits of functionality is a package. USWDS itself is a package — a package whose dependencies are every other package in the design system. In USWDS 3, it's packages all the way down.

**Slide 17:** A package is something like **usa-banner**, the gov banner component.

**Slide 18:** Or **usa-footer**, the package of site footers.

**Slide 19:** Or **uswds-utilities**, the package of utility classes.

**Slide 20:** You may have noticed that some packages are prefixed **usa-** and some packages are prefixed **uswds-**. This isn't just inconsistency. usa-prefixed packages are components, and they have the same name as their CSS class — the block part of the class name in BEM way of writing classes. If you see a class name in your codebase like **usa-identifer**, or **usa-skipnav**, or **usa-button**, that's its package name. **usa-button–primary** is part of the **usa-button** package.

uswds-prefixed classes are everything else. **uswds-utilities** is one of the big ones of this type, but there's also **uswds-core**, which we'll get to shortly, which contains all mixins, functions, and tokens. And **uswds-global**, which is a bundle of global styles like normalize. There's a uswds-form-controls package which includes all the individual form control packages like **usa-form**, **usa-input**, **usa-select**, etc.

**Slide 21:** Use just the design system components your project needs. If you don’t use the whole design system, you shouldn’t include the whole design system in your CSS. Every project has a different package footprint.

**Slide 22:** Some projects that use USWDS will have a very small package footprint. They may just use a couple key component packages, like the banner and the footer.

**Slide 23:** Many other projects may have more of a medium footprint, using only a few components — or just a few USWDS components in addition to custom components of their own.

**Slide 24:** Even the most complex projects — those with a large footprint — probably won't use every component.

**Slide 25:** And there are even some projects that may use **uswds-core** only. **uswds-core** is a key package that allows projects to use the design language without adding CSS. For instance, an existing project could add the **uswds-core** package to their codebase and experiment with translating their existing components and variables into USWDS design tokens. They could start working with USWDS mixins, functions, and tokens without adding anything to the size of their existing CSS.

**Slide 26:** **uswds-core** is a special package that powers every other package. It's the engine of the design system. It doesn’t emit CSS, but contains the complete USWDS design language. Its Sass defines the tokens, functions, mixins, settings, and variables that all other USWDS Sass is built from.

**Slide 27:** uswds-core powers project settings: We define our project settings with a statement like **@use "uswds-core" with custom settings**.

**Slide 28:** uswds-core powers project Sass: Every Sass file that uses USWDS needs to begin with the statement **@use "uswds-core" as asterisk**.

**Slide 29:** Packages power the design system. Starting in USWDS 3, our code is written in a component-centered package structure. Packages are the organizing principle. If you want to find anything related to the banner component, look in the **usa-banner** directory. If you want to find icons, look in **usa-icons**. An individual package includes everything a component needs to work: Styles, Tests, Templates, Assets, Content, and JavaScript.

**Slide 30:** And again, every component is a package. Components have different needs, but each component is an individual package.

**Slide 31:** And since components have different needs, it makes sense that they're actually all different sizes.

**Slide 32:** All together, these packages bundle up to a **uswds** package that includes 417 KB of compiled CSS by default. Consumed as a single bundle, the USWDS package is quite large. And depending on your project settings, your project's CSS could be even larger.

**Slide 33:** If you're just using the banner and the footer, you don't need all this overhead. The **usa-banner** package is 32 KB. The **usa-footer** package is 43 KB. That 75 KB in total, or 11 KB gzipped. If you use only a couple components Using packages can save you over 80% versus the bundled version.

**Slide 34:** Where's that 32 KB in **usa-banner** coming from? Some of it is usa-banner styles, but a complex component like banner might also include other components inside it. And banner **uses usa-layout-grid** (18 KB), **usa-media-block** (0.1 KB), and the **uswds fonts** (6 KB) to render properly, in addition to the 7.9 KB of CSS directly related to banner classes. All these dependent packages are automatically included as when you use the **usa-banner** package in your project.

**Slide 35:** The footer has dependencies as well — even more than banner. Every package has its own dependencies.  This is part of why it was difficult to use packages effectively in USWDS 2. The compiler wasn;t smart enough to know when multiple packages used the same dependencies to only include those redundant dependencies once. It was hard to manage dependencies and prevent duplicate code.

**Slide 36:** USWDS 3 uses a more modern version of Sass that's built for just this problem. It's smart enough now. Shared dependencies are only included once. We can see here that both usa-footer and usa-banner use **usa-layout-grid** and **uswds-fonts**. Sass Module syntax in USWDS 3.0. assures that these dependencies are included and only included once.

**Slide 37:** Most packages have a fixed size. Now matter what your settings, **usa-accordion** will always be about 10 KB. But some packages are affected by settings.

One of those packages is the layout grid. We can imagine the CSS of the layout grid as the five gold dots at the top of this slide.

**Slide 38:** The layout grid package includes responsive classes based on the responsive breakpoints set in your project. Adding responsive breakpoints to the **$theme-utility-breakpoints** setting adds new CSS rules. Adding a breakpoint adds new rules, like the five new dots next to **mobile**.

**Slide 39:** The more breakpoints you add, the more CSS you get. Adding **mobile-lg** adds another line of dots.

**Slide 40:** Including many breakpoints can have a big effect because responsive breakpoints can serve as a CSS multiplier. Where we started with five dots across the top of the screen, we now have 40.

**Slide 41:** But let's start again. This time with utilities. Just one little gold dot. What could go wrong? Utilities start small, but they're even more sensitive to settings than the layout grid.

**Slide 42:** You can also add state-based utility classes in settings, but each new state adds a bit more code, like this new pink dot for hover.

**Slide 43:** You can also add active classes, like this red dot…

**Slide 44:** And focus classes, like this purple dot…

**Slide 45:** And visited classes, like this blue dot…

**Slide 46:** Now these are multiplied by the responsive breakpoints. It's important to think of each new utility variant as a multiplier. The single dot is now 25.

**Slide 47:** The more output utilities, the more output CSS. Even a few new variants, spread over multiple utilities can have a big effect. Now the single dot is 100 dots.

**Slide 48:** And now it's 400. Things can multiply quickly. The more utilities you're using, the bigger the effect.

**Slide 49:** Before you know it, utility size can get out of hand. Now the single dot is 1600 dots. In most projects, the bulk of unused code is coming from utility classes.

**Slide 50:** So let's take a look inside the utilities package. Like the expanding hexagon package on this page, the utilities package is flexible. The utilities package has more output options than any other package.

**Slide 51:** The utilities package is made up of over 60 individual utilities. In this case, they aren't packages since they aren't independent of the utilities package, so we call each of these utilities a module.

**Slide 52:** But just as with components packages, no project is going to use all utility modules. You want utilities modules tailored to your project. In fact, as we will see in a couple minutes, most production websites should probably use only a few utility modules.

**Slide 53:** The USWDS documentation goes into more detail about using utility modules, what modules are available, how to identify them and how much CSS they output by default. Find the utility modules docs at designsystem.digital.gov/utilities.

**Slide 54:** You tell the design system which modules your project uses with a new setting in USWDS 3.0 — in fact, it's the only new setting in USWDS 3.0: **$output-these-utilities**. This new setting allows you to create a list of the utility modules your project needs.

In the code example, we see **$output-these-utilities** in action, including align-items, background-color, border, color, flex, margin-vertical, padding, and width.

**Slide 55:** And the USWDS settings docs go into more details on adjusting utility breakpoints and other utility settings. FInd the settings docs at designsystem.digital.gov/documentation/settings.

**Slide 56:** Two of the most useful utility settings are **$theme-utility-breakpoints** (which sets the breakpoints for utilities and the layout grid) and **$[module]-settings** like **$width-settings** or **$padding-settings**.

In the code example, we see $theme-utility-breakpoints set to output **mobile-lg**, **tablet**, **tablet-lg**, and **desktop** responsive variants.

We also see **$width-settings** setting the **width** utility module to output with a responsive variant.

**Slide 57:** And the component packages docs collect what we've seen here today. It's where you can find all available packages and learn more about how to use them in your project. Find the packages docs at designsystem.digital.gov/components/packages.

**Slide 58:** You can also find component package information at the bottom of any component page, like this one for Banner. It shows how to use the package in your Sass entry point and also what packages are dependencies of the component package. You can find the banner component docs at designsystem.digital.gov/components/banner.

**Slide 59:** When you're done using packages in your code, your Sass entry point will look a bit like this. Instead of forwarding "uswds," we're instead forwarding "usa-banner," "usa-footer," and "uswds-utilities."

**Slide 60:** Your Sass entry point and your theme settings file will then become a practical project profile: a snapshot of what makes your project your project, at least from the USWDS perspective. You can always refer back to these files when you need to know what components your implementation uses and what utility modules. This may come in handy when a version of USWDS releases and you want to know how it'll affect your project.

**Slide 61:** Now I'd like to bring on James Mejia, a developer and a contractor on the USWDS Core team. James is going to help me show how we've used packages and settings optimization on our Public Sans website to dramatically reduce the amount of compiled CSS we're shipping. Hi there James!

**Slide 62:** DEMO

**Slide 63:** And now, let's get into Q&A.

[Q&A]

**Slide 64:** Thanks for joining today’s USWDS monthly call. Next month, we're going to look at how we're improving our contribution model and how we bring bugfixes, enhancements, and feature requests into the design system. We hope to see you in June!

As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion.

Follow us on Github at github.com/uswds/uswds, check out our website, and visit designsystem.digital.gov/about/community to join us and your colleagues across government who are using USWDS.

Thank you, and see you next month!

{{< /accordion >}}

Now that USWDS 3.0 is out in the world, let’s look at how we can optimize it to improve performance. We’ll dive into tips and techniques you can use to reduce CSS size and chip away at your build time.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
