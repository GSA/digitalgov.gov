---
title: USWDS Monthly Call - June 2024
deck: A first look at working prototypes of U.S. Web Design System web components
kicker: USWDS
summary: The U.S. Web Design System team will give an update on their work developing web components for the design system.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIscOyqrzsiHVsXeh0NaL14v3VGCFcbRgM
date: 2024-06-20 14:00:00 -0500
end_date: 2024-06-20 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - user-centered-design
  - software-engineering
slug: uswds-monthly-call-june-2024
# zoom, youtube_live, adobe_connect, google
event_platform: zoom

primary_image: 2024-uswds-monthly-call-june-title-card
youtube_id: yBCLyWO0yCo
---

{{< asset-static file="uswds-monthly-call-june-2024.pptx" label="View the slides (Powerpoint presentation, 3 MB, 33 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for May 2024" icon="content_copy" >}}**Slide 1:** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for June 2024 — this month we're celebrating Juneteenth (just yesterday!) with the USWDS logo in red, white, and blue. We're also celebrating Pride month in June, with the USWDS logo showing a selection of Pride flags, including the classic rainbow pride flag; the Philadelphia City Hall pride flag, with black and brown stripes in addition to the rainbow; transgender pride in blue, pink, and white; nonbinary pride in yellow, white, purple, and black; and the intersex pride flag with a purple circle on yellow. Today is also the summer solstice here in the northern hemisphere — the longest day of the year — with the USWDS logo in bright yellow like the sun.


**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. And I've still not updated this avatar to feature the glasses I now wear in real life, in addition to a blue collared shirt, and gold socks.


As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at digital.gov. We've also started collecting each month's Q&A as a GitHub discussion linked from the monthly calls page. We've posted a link to our monthly calls page in the chat.


We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so. Otherwise, there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call. So thanks! And, with that, let's get started!


**Slide 3:** So what's our agenda for today? We’ve got a couple of new sites to feature and a few product updates. Then, we're going to give a first look at a couple of USWDS web components to begin to give a sense of how this new technology could work in practice. Then, we will hopefully leave plenty of time for Q&A.


**Slide 4:** So let's get into it with featured sites.


**Slide 5:** First, we've got a new site from the Department of Treasury's Export Compliance Assistance Program (or ECAP): [nnsa.nsis.anl.gov/ecap](https://nnsa.nsis.anl.gov/ecap/). The ECAP provides export compliance training, assistance, and tools to raise awareness and promote export compliance across the Department of Energy and National Nuclear Security Administration complex. The ECAP homepage has a familiar USWDS look and feel, and its most prominent aspect is an alert, informing its audience of severe restrictions for all interactions with Russia and Belarus.


**Slide 6:** And this month we're also highlighting [acc.gov](https://acc.gov): a site for the American Climate Corps, an organization inspired by the Civilian Conservation Corps of the 1930s, that seeks to empower a new, diverse generation to tackle environmental injustice and climate change. The ACC home is an interesting example of customizing USWDS to achieve a distinctive look and feel tailored to a specific audience. The ACC homepage features a large mint-toned hero section with an illustration of wind turbines and the words "Your climate career starts here."


**Slide 7:** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note, on the USWDS public Slack channel!


**Slide 8:** Now for a few product updates…


**Slide 9:** First, out now: [USWDS 3.8.1](https://github.com/uswds/uswds/releases/tag/v3.8.1), a small but mighty new release that addresses a couple important bugs.


**Slide 10:** Here are a couple of the key improvements in USWDS 3.8.1. The biggest is a couple of accessibility bugs that we've addressed with the tooltip. Now, the tooltip stays open when users are hovering over it — even if they're not hovering over the tooltip trigger. And additionally, users can now always dismiss a tooltip with the **escape** key.


We also fixed an input mask initialization bug that caused it to fail if it wasn't a direct child of a form.


We also improved the display of nested button groups. Now, nested button groups should match the height of their parents.


And finally, we fixed an issue in our documentation where a data error introduced a typo in the Spanish translation of the Identifier in USWDS 3.7.0.


And those are the big updates in USWDS 3.8.1, which is out now!


**Slide 11:** There's also always something going on in our public discussions on GitHub. Today, I'd like to call out four discussions of note.


There's a new [discussion open now for a Chat component](https://github.com/uswds/uswds/discussions/5938). So if you've worked on a chat UI, or have some interest in making the case for chat-related components in USWDS, contribute to building out the proposal for Chat in its discussion.


We've also had some new activity in the [Glossary component chat](https://github.com/uswds/uswds/discussions/5771) as well, with folks providing some good examples of implementing Glossary functionality, along with some discussion about accessibility considerations of different approaches. So if you have experience or thoughts working on a Glossary solution, check out this discussion.


We also have a new accessibility discussion for June. [We are digging into how folks are using the Tag component](https://github.com/uswds/uswds/discussions/5956). We're interested in knowing the different types of uses for _interactive_ tags: that is, tags that are not only used to call out a category or special context for content, but those that have some kind of interactive element (whether it's linking off to similarly tagged content, filtering something like search results, or something else). If you use tags, let us know!


And finally, as I alluded to earlier, we have [the Q&A from our May monthly call](https://github.com/uswds/uswds/discussions/5952) posted in GitHub discussions — so if you couldn't make the last call, you can catch up on some of the items that came up as questions from the audience.


**Slide 12:** And now an update on some of our ongoing usability research.


Some of you may remember the research project we undertook last year focussed on the most important things people need to be able to do on our website: what we call our users’ **Top Tasks**. (If you're interested, we talked about this in our [April 2023 call](https://designsystem.digital.gov/about/monthly-calls/#april-2023-top-tasks), linked in the chat.) Well, once we identified those top tasks, we wanted to find out how easy or difficult it is for folks to actually do those things on our website. That’s what we just wrapped up: testing the performance of those Top Tasks.


**Slide 13:** We looked at 5 Top Tasks in this study:


* Browsing components

* Finding specific component guidance

* Finding specific pattern guidance

* Finding examples of sites that use USWDS…

* and Getting design kits.


**Slide 14:** We did 45-minute moderated usability testing sessions with 7 people who use the design system. Most of them described themselves as designers and researchers, with a couple of folks with a developer background, and 1 person who was a product manager. We expect to run another round of usability testing focusing on developers, but for this round, we focused on designers.


All participants described their proficiency level with USWDS between novice (with very little experience using it) to intermediate, which was great because we were trying to get the perspectives of folks who were newer to the design system — coming with fresh eyes. Participants came from 7 different agencies, and it was great to get such a variety represented.


Let’s talk about our high-level findings.


**Slide 15:** We observed that the **most challenging tasks** were browsing components and finding pattern guidance. The reasons people seemed to struggle with these tasks had a lot to do with confusion about the words we use to describe things.


For instance, we don't always share a common understanding of what a "pattern" is. Is it a repeating, decorative motif? Is it a functional unit like a component? Is it an interaction?


Additionally, we don't always have common words for specific components. In one of the task scenarios we wanted folks to find the Step Indicator component, but none of the participants used that term themselves. Instead, they were looking for “progress bar” or “progress indicator.” Or instead of “in-page navigation” they were looking for “anchor links” or “jump links.”

There was some **mixed success** in finding _specific_ component guidance — usability guidance within a component's page — with one of the scenarios being easy for people to complete (finding accessibility guidance for the Button component) and the other being more difficult (finding accessibility guidance for Data Visualization).

The **most successful tasks** were finding examples of other sites that use USWDS as well as finding the design kits. Still, we got some great insight into how to make those tasks even easier, since people still struggled with the design kit file feeling buried on its page.


It’s also hard for people to find the full showcase list of sites that use USWDS and there’s room to improve how to present that list, as well.


**Slide 16:** If we had to boil it down to one top takeaway from this study, it’s that **the way we name things doesn’t always match user expectations**. Participants often didn't intuitively understand the top-level navigation and weren’t sure what to expect in each category. 


**Slide 17:** So, we have some actionable insights and clear next steps to help make some of these Top Tasks easier for folks. We'll be getting new issues on our project board, and working on prioritizing some solutions. Some of these solutions are closer to low-hanging fruit, like increasing the prominence of design kit files, or adding better component synonyms on the component filter page.


Some solutions will take more thought and research, like rethinking top-level organization and finding increasingly clearer ways to talk about patterns. We'll have these things in mind as we move toward a new major version of the design system next year.


**Slide 18:** And finally, this month we've published five more accessibility test pages: [Banner](https://designsystem.digital.gov/components/banner/accessibility-tests/), [Search](https://designsystem.digital.gov/components/search/accessibility-tests/), [Select](https://designsystem.digital.gov/components/select/accessibility-tests/), [Text Input](https://designsystem.digital.gov/components/text-input/accessibility-tests/), and [Tooltip](https://designsystem.digital.gov/components/tooltip/accessibility-tests/). We've posted links to these new pages in the chat, and we're working on three big component test pages for next month: Header, Footer, and Identifier. So stay tuned for those!


**Slide 19:** Phew! We've had a lot going on over the last month, and we haven't even gotten to the main event: A first look at USWDS web components.


**Slide 20:** As we're making our initial progress here, this work is very much in an alpha stage. What exactly is the alpha stage? Well, we're still trying to define exactly it for ourselves, but at its broadest, it's an _experimental_ stage — a stage where we explicitly value exploration over refinement.


It's a place where things can and will change without warning, where we give ourselves the room to try a bunch of stuff out. Traditionally, it's an internal phase, but there's plenty of value in making this work visible. Just don't rely on it yet!


**Slide 21:** From the start, however, there are a few general values we're trying to keep in mind as we work. The first is Simplicity: we're focused on delivering components that are as easy as possible to install and use in a project, components that don't require any initial compilation or knowledge of third-party technologies like Sass to get going.


**Slide 22:** We also have encapsulation in mind. We want designers and developers to have reliable performance wherever they use a component. Encapsulation in Web Components means that everything _you need_ to use the component is built into the element: including not just the interactivity, but also the styles. Web Components don't require an external stylesheet for basic functionality. In the Web Components world, we see the primary use for CSS in the _setting_ of CSS variables or CSS _custom properties, not_ in any necessary or additional CSS _rules_. CSS still has an  important role to play, but not for default display and functionality.


And this also means that USWDS Web Components will be largely unaffected by any existing styles on your site — and that include styles associated with non–Web Component versions of USWDS. _Traditional_ USWDS and _Web Components_ USWDS will be able to exist together, in parallel, on a project. And we expect that that will happen frequently.


**Slide 23:** Relatedly, we're thinking about our components through the lens of configuration — how to use component attributes and CSS variables to control theming instead of custom CSS rules. We see the future of USWDS theming as closer to a settings file than a stylesheet.


**Slide 24:** And finally, we have a platform orientation. We're trying to deliver a design system that's built with native, web standards-based solutions that support the web as a platform. HTML, CSS, and JavaScript have changed since the early days of USWDS, and while we've not lost sight of those changes as USWDS has evolved over the years, this new version is our best opportunity to really embrace the way the web as a platform has also matured and evolved, and to position ourselves to _continue_ to evolve alongside it.


**Slide 25:** So let's take a look at what we're building. And to do that, I'd like to introduce a couple of my colleagues. First James Mejia. James is an engineer and a contractor on the USWDS Core team. James, can you introduce yourself and give a brief self description for anyone audio-only?

James: Yes, of course. Thanks, Dan. Hello, everyone. My name is James Mejia. I have short dark hair, brown skin, and a blue button-up. Happy to be here today.

**Slide 26:** Dan: Thanks James! I'd also like to introduce Matt Henry. Matt's our new Engineering Lead, and we're very pleased to have him on the USWDS team. Matt, can you introduce yourself and give a brief self description for anyone audio-only?


Matt: Hello! I'm Matt Henry, I use he/him pronouns and I'm an engineer at 18F currently acting as engineering lead for USWDS. For accessibility purposes, I'm a bald white man with glasses and a close-cropped white beard. I've been working with the Design System for a couple of months now to help bring the next version into being, and I'm super excited to show you some of what we've been working on.

**Slide 27:** Dan: Thank you Matt! So let's see this is in action. Matt and James will take the demo from here, starting with Matt. Matt, why don't you share your screen and take it away!

Matt:  First, by way of disclaimer, I should say that — as Dan mentioned — everything you see here today is in either an alpha or pre-alpha state, so some things about how this is all going to work will change by the time we ship code that you'll want to include in your projects.

This is going to be sort of a re-introduction to USWDS so let's go back to basics with the USWDS tutorial project that you might recognize from some of these monthly calls. I'm going to start with a clean install of the tutorial so you can see everything I'll need to do to get something working. You may have gone through this tutorial before, so it may be familiar.

Now just to prove there's nothing up my sleeve, here's a clean git status on the main branch of the tutorial. We originally developed this tutorial to walk through installing the design system and a couple components on a site that doesn't use USWDS. So not only does this fresh install not have USWDS on it already, but it's a great way for us to show how we might install a Web Components–based version of USWDS. 

The first task the tutorial wants you to take on is adding the banner. This is the component you've probably worked with many many times that tells users that they're on an official government site, so it's a good place to start! Now let's get going and install the banner component.
`# in uswds-tutorial project npm link @uswds-next/usa-banner`

What we just did is a little npm magic, and this is the step where, if the component was published on npm, which it will be eventually, you'd just `npm install`. So you can just imagine I did `npm install @uswds/usa-banner`, since that's what you'll be doing.

The tutorial site is built with eleventy. You don't need to know anything about eleventy to follow along with what I'm doing, but I'm pointing it out because the next thing I'll do is just a tiny bit of eleventy configuration to make use of the component we just installed.

`eleventyConfig.addPassthroughCopy({
    "node_modules/@uswds-next/usa-banner/dist/usa-banner.js":
      "assets/usa-banner.js",
  });`

All that does is copy the component code we just added to the project out of the node_modules and into the assets folder in the built site. If you use eleventy you might do something similar.

Now I’m going to go ahead and spin up the 11ty dev server. But now that we've done that setup, we're ready to add the banner to the site, so let's do it.

`<script type="module" src="assets/usa-banner.js"></script>
<usa-banner></usa-banner>`

That's literally it. And the only reason we even needed to touch the eleventy configuration is because we installed a local copy of the component, so we needed to get that code out of the `node_modules` and into the website itself. 

If we were using a cloud-hosted version of the component, we wouldn't even need to do that, and all we would need to do is add the script tag and we could use the `<usa-banner>` tag straight away.

Now let's see what we get out of the box:
* The banner toggle just works.

* CSS is included.

* All of the images are part of the build.

Let's jump back over to the tutorial project to see what we _didn't_ have to do to get this working. We _didn't_:

* Install `@uswds/compile`

* Configure gulp

* Mess with theme settings

* Touch any image paths

This is all done at build time when we bundled the package.

What are some other things we can do with this banner? How about if we wanted our banner to be in spanish? _We sure can!_

`<script type="module" src="assets/usa-banner.js"></script>
<usa-banner lang="es"></usa-banner>`

_Simple!_ Now just to prove that this is just a plain-old HTML element, let's go do some JavaScript on it.

`const banner = document.querySelector('usa-banner')`

See how we can grab the banner element with the same DOM API methods you use to do anything else with HTML. `toggle` is just a method on the `UsaBanner` class, and it's part of the public API for that class, so you can call it yourself programmatically if you need to, like so: 

`banner.toggle()`


Now that we’ve seen it in action, first, let's go over to the code for the web-component version of the Design System and look under the hood at the banner we’ve been working with. Just a few quick things I want to point out here:

Right here at the top, we're importing a bunch of things from a package called **Lit**. Lit is a lightweight library that gives you some useful tools for creating and working with HTML custom elements (aka Web Components—I'll use custom elements and web components interchangeably).

Right away, where we create this component, we're making a new class that extends from `LitElement`. If we were making a component without a library, we'd be extending `HtmlElement` directly, but as I said, Lit gives us some superpowers to make all of this easier and less verbose. If you're curious about Lit and want to learn more about why we're using it, there's some documentation about it in the USWDS Proposals Repo.

Scrolling quickly through here, you can see a bunch of JS, CSS, and HTML. A whole bunch of this is just taken directly from the existing banner component. And here in the class body, you can see that `toggle` method we used before. All it does is flip the boolean value of the `isOpen` prop, and then toggles the `hidden` attribute.

Then, way at the bottom, there's this call to `customElements.define`. This is a web standard method for taking the class that we implemented above and telling the browser what the HTML tagname we're going to use to actually bring all of this functionality into our web page. We're talking about the banner here, so we're stuffing all of this code into a tag called `usa-banner`. You can tell it's a web component because of the dash. Part of the standard is a requirement that all custom element tag names include a dash to set them apart from the ones that ship in the browser.

So that concludes our whirlwind tour of the banner code itself.

While we're here in the uswds-next repository, I can show you how I did the production build of our component we’ve been using. I should be clear up front here that this build and link stuff I'm doing is just for demonstration purposes and it's not anything that you'll need to know.

`# in uswds-next repo root
npm run build --workspace=@uswds-next/usa-banner
npm link --workspace=@uswds-next/usa-banner`

You'll notice that the component we're building here is just the banner by itself. We're planning to ship each component as its own package, so you can use them _a la carte_ as it were and only bring in the components you need for your project. It'll also let you add new versions of the components as we ship them, so you don't need to wait until we have the whole design system rebuilt in web components before you start working with them.

Ok, let’s get back to demoing. We saw before with the language in the banner how we can customize components using attributes. Those attributes are basically part of the API that you'll use to interact with and customize components. What about theming and visual style?

To answer that, I'm going to use another component: the humble but mighty `usa-link`. I've already built and linked that, so we can go ahead and add it to the project the same way we did with the banner: 
`eleventyConfig.addPassthroughCopy({
    "node_modules/@uswds-next/usa-link/dist/usa-link.js": "assets/usa-link.js",
  });`

and then add it to the page:

`<script type="module" src="assets/usa-link.js"></script>`

`<usa-link href="https://designsystem.digital.gov">It's dangerous to go alone. Take this!</usa-link>`

We've got a link! Because the link component has USWDS styles baked into it, we can see that when the link is active, it has the big blue focus outline you'd expect to see. But what if we wanted to change that? Let's crack the component open and see what's inside there that we might want to style. Here's our link component. If we expand it, we can see there's a plain old link inside with the `.usa-link` class, and we know how to style things that have classes… don't we?

So you might think you'd be able to just write some CSS like this:

` <style>
    a.usa-link {
      outline-color: hotpink;
    }
  </style>`

Alas, this doesn't work. And the reason it doesn't work is this `#shadow-root` thing. That link in there is part of what's called the Shadow DOM. 

In a nutshell, Shadow DOM is just markup that the component writes. You can contrast shadow DOM with Light DOM, which is the markup you write. But what's important here is that styles from outside of the shadow DOM don't apply inside of it. A lot of the time, this is what we want! This provides a layer of encapsulation that protects your component from being styled by whatever styles happen to match it on whatever page your component ends up on. 

But it also means that styling components is just a little bit trickier than you're used to. Fortunately, there are a couple of ways for styles to make their way into the shadow DOM. One of those is with CSS custom properties, or CSS variables. Unlike most CSS properties, the values of CSS variables do cascade into the Shadow DOM. So anything we set in a CSS variable will be available for our component to use.

So if we go over to the code for the link component, we can see the CSS it uses here. You'll notice that most of the styles use CSS variables. Those variables are part of the API surface for customizing components. And if we look at the focus styles, we can see a variable that looks a lot like the thing we want to change, so let's go change it and see what happens…

`<style>
    usa-link {
      --theme-focus-color: hotpink;
    }
  </style>`


It worked! So what we've seen here is that there are a couple of ways to customize components. First there are attributes, which work similarly to the props you might be used to if you're coming from something like React or Vue, and there are CSS variables that let you apply themes or do other kinds of look & feel customization. You can think of attributes and CSS variables as being part of the public API for web components.

They're basically the levers and switches that component authors build into their components to let you customize them in predefined ways. There are other ways to extend and customize components, but we'll dig into those in a future Monthly Call.

For now, I want to hand demo responsibilities over to James Mejia who will show off our new Storybook setup, and some of the variants of the handful of components we're currently working on.

James: Thanks Matt. We started using Storybook in USWDS 3 for internal development. The work we do in the USWDS repo eventually appears on the website, which has the full guidance. This isn’t a bad process, but it separates the user facing documentation from the code.

As we move forward with USWDS 4 we want to explore ways to add more relevant documentation in Storybook. For a good part of our web component development this is where our documentation will live.

As you can see with USA Banner we’re taking advantage of the **autodocs** plugin to create a single page with the component settings. As we scroll down we can see a preview of all of the available variants.

We want every component to have controls so that users can test these components before using them. You can see the default Banner includes `label, tld` (Top Level Domain), and `lang` settings. We can modify these settings to update the component.

Let’s modify the lang field to `es` and watch the component change to the Spanish variant.



Next, let’s checkout the Custom Aria label story.

It’s hard to see here, but the `label` setting allows us to update the Banner’s aria label. This is useful when we’re using the custom content variant, which uses slots. If we were using a different language outside of English or Spanish, we can update the aria label to match the new language. 

If we click on the Custom Content Banner variant we’ll see even more controls.

Six new controls appear that allow us to modify content in real time. For example, `bannerText`.

We have more work to do, but our goal will be to have more relevant documentation and controls in our component library. That way you have everything you need in one place.

The other components follow a similar pattern. For example, USA Identifier on the screen. We’re trying to document all of the ways you can use it.

As I mentioned earlier, we want to improve documentation and show developers what components offer. We also want to document how we develop components for ourselves and contributors.

We hope that our documentation work in Storybook will be more relevant and publicly available in the future. Thanks everyone and now I’ll pass it back to Dan.


**Slide 28:** Dan: This is Dan. Thanks, Matt, and thanks, James. There's still significant work ahead of us, but I think even our first steps are pointing in a clear and exciting direction. If you're interested in this work and want to follow along with our progress, we have a new and very alpha GitHub repo where this new work lives. You can find it at [github.com/uswds/uswds-next](http://github.com/uswds/uswds-next). I expect it will see some big changes over the next few months — it's a bit like a new USWDS young adult is moving out of its parent house and into its first new place. We hope to grow up pretty quickly.


**Slide 29:** So what's next with this project? In the next couple of months, we're going to work to get these alpha components into the Beta phase and publish them on npm. We're also going to begin work on a handful of other components. I currently expect these to be Button, Accordion, Card, Text Input, and Modal. This next handful of components should be in a Beta phase by September.


**Slide 30:** And then, by the end of the fall, we should have at least a dozen components in stable Beta. We're going to be adding engineers to the team as well, so our progress should start to speed up as we develop our Web Components conventions and tooling. This initiative is what it's all about for us for the foreseeable future, so expect plenty of updates in these monthly calls, as well as in our newsletter, and on GitHub.


**Slide 31:** So onward. This is the first step of many. Here we go.


**Slide 32:** And it looks like we have some time for Q&A, so let's get to it.


**Slide 33:** Thanks for joining today’s USWDS monthly call. Next month is our summer break from monthly calls, so we won't meet again until August, when we're expecting a community choice monthly call. Let us know what you'd like to hear about on the [community choice monthly call discussion thread](https://github.com/uswds/uswds/discussions/5923). We're posting the link here in the chat!


Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.


And if you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.


Have a great day and a great summer. Make sure you check out our August Community Choice discussion, so we get a sense of what you'd like us to prepare, and we'll see you in August!


{{< /accordion >}}


Join the U.S. Web Design System (USWDS) team to see their progress toward developing web components for the design system. They’ll demo early working prototypes of a few components, and talk about some of the design questions they’re trying to answer through the prototyping process.

In this online session with the USWDS team, you will:

* See examples of working USWDS web components
* Learn how the USWDS team built these components
* Understand the design principles supporting this work
* Find out what's coming next for USWDS web components

**This event is best suited for:** Design system users of all levels. This will be a technical discussion geared toward developers, but anyone can attend; it requires no specialized knowledge.

**Speakers**

* **Dan Williams** - Product Lead, USWDS
* **Matt Henry** - Engineering Lead, USWDS
* **James Mejia** - Developer, USWDS contractor

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@gsa.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
