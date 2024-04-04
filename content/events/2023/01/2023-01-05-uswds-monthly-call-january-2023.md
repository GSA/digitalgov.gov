---
title: USWDS Monthly Call - January 2023
deck: Answering your most-asked questions about the U.S. Web Design System
kicker: USWDS
summary: Join the Design System team as we tackle your most commonly-asked questions.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItceqrrDsuEhxA7eoRggB3Cf4RRjcrMjU
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2023-01-19 14:00:00 -0500
end_date: 2023-01-19 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - open-source
  - usability
slug: uswds-monthly-call-january-2023
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2023-uswds-monthly-call-jan-title-card
# YouTube ID
youtube_id: JApBVTwZans
---

{{< asset-static file="uswds-monthly-call-january-2023.pptx" label="View the slides (PowerPoint presentation, 1.9 MB, 60 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for January 2023" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For January 2023. It's the start of a new year, month one. So this month, we've turned every triangle but one gray. Here we go again!

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and this is my avatar: dark hair, blue sweater, collared shirt. I'd also like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us. For instance, today, real me has dark hair and a fuzzy fleece.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](digital.gov/communities/community-guidelines/) you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat.

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? Well this month we're trying to answer some of the questions we're asked most frequently here at the design system. Here's what we hope to cover, getting progressively more technical as we get further into the call!

- How we approach component testing
- What's up with the Tabs component?
- Design kits: what platforms do we support and when do we update them?
- Theming USWDS
- Custom fonts and colors
- How do I prevent the flash of banner content on page load?
- USWDS in other popular frameworks
- and... Importing USWDS component JavaScript

And if all goes well, we should have time for more of your questions today! So let's get started!

**Slide 4:** I'd like to introduce a couple members of the USWDS core team, who'll be helping answer some of these questions. First, James Mejia, a contractor and an engineer. James, do you want to say hi and describe yourself for anyone audio-only?

**Slide 5:** Next, I'd like to introduce Amy Leadem, a contractor and a front-end developer. Amy, so you want to say hi and describe yourself for anyone audio-only?

Absolutely. Hello everyone! My name is Amy Leadem and I have long brown wavy hair, dark brown eyes, and today I am wearing a cozy, rust colored sweater.

Thanks Amy. I'm glad to have both you and James here with me today!

**Slide 6:** Today, we're kicking off the year by trying to answer a few common questions we get from folks that use the design system. In each of these cases, the question is a signal to us that we need to do a better job delivering the answers on our website, in our documentation, in our code, or in these monthly calls — or all of these things. We've started taking steps to improve our documentation for many of these questions, and these questions will also be top of mind as we perform our Top Tasks research over the next month. We're always trying to improve our documentation and how we talk about what we do. Your questions and your feedback drives our development. So, while we'll do our best with today's USWDS FAQ, to answer these frequently asked questions, keep asking. Here we go!

**Slide 7:** **First, do we test components with real users before releasing?**

**Slide 8:** So, the answer here is yes and no. There are a few things that we always do when it comes to testing our components. There are a few things that we've started to do more recently, and there are some plans that we have for the near future. When it comes to getting the most comprehensive view of our component usability, we can always do better. 

**Slide 9:** We always do a thorough internal review that includes manual accessibility testing across browsers and screen readers. Any component we release has been through a landscape analysis, live prototyping, and is most often drawn from existing government and non-government solutions. We favor proven solutions from government services.

**Slide 10:** We also circulate our guidance and code to our USWDS Public Slack channel for public feedback and review from developers and our community before we release a component.

**Slide 11:** We've also started adding testing with real users of assistive technology. We added this level of testing as a part of our inclusive patterns project.

**Slide 12:** And what we've learned from starting this level of testing is that it's extremely valuable, and it's not replaceable. This level of testing allows our team to be more proactive, and especially when it comes to assistive technology, it helps us to better understand the expectations and conventions of real-world users — and how those expectations and conventions differ from manual accessibility testing and conformance with accessibility standards. It's helped us understand that while conformance with standards is critically important and a key heuristic when it comes to usability, it doesn't typically tell the whole story.

**Slide 13:** Since the beginning of the design system, we've relied on a reactive strategy for continuous improvement of our code, guidance, and components. And the way that it works is that we provide a baseline of testing for what we release, and we always respond to issues in our code repo — which is another way of saying that we rely on downstream usability testing from teams that use the design system to help us fill in the blanks and understand how our components are performing in the real world. This is also critically important. We don't typically have insight into how teams are using the design system. We're not building the applications. We're not directly exposed to your audiences. And occasionally, we miss things that subsequent testing reveals. As an example, we heard from an issue in our repo that some screen reader users were misinterpreting the vocalization of our banner text, hearing "An official website" as "Unofficial website". This was something our own testing hadn't revealed, and we were able to update the vocalized text in the banner to remove the ambiguity. 

**Slide 14:** We depend on our users and the community to be reactive, and that feedback is always going to be important. Knowing what you've found from your own tests and experiments will continue to drive the design system forward. But we need to be more proactive as well. Testing with real users on the design system side needs to be an ongoing part of a component’s lifecycle. Not only before release, but after release as well. A component's lifecycle doesn't end at release, so we're working to better operationalize real-world testing before and after release.

**Slide 15:** Figuring this out is tough. We're a small team and it's always a balance. Next month, we'll release our short-term roadmap for the next four months. On it, you'll see a few things we've talked about here and we'll also mention later in the call: including operationalizing accessibility-first usability testing with real users, codifying and publishing a component acceptance criteria checklist, and connecting that checklist to a public component lifecycle model. Between these three items, we'll be able to be more proactive and more transparent.

**Slide 16:** As I said, we'll publish the updates to our short-term roadmap next month. We'll hear more about it in this call, and we'll be talking about it throughout the year.

**Slide 17:** **Our next frequently asked question is "What's going on with Tabs"?** So, if you've been active in our public Slack or following along on the pull requests in our repo, you may have noticed that we had a large contribution of a Tabs component. But it's been a bit like a package sitting on the porch that's too big to fit through the front door. What's happening with this pull request?

**Slide 18:** And what getting a big PR like this has meant is that we need to design a repeatable process to do something with it, and that's going slowly.

**Slide 19:** It's also a bit like that Carl Sagan quote about apple pie that's a favorite of mine: "If you wish to make an apple pie from scratch, you must first invent the universe." In this case, realizing that as much as we've been interested in public contributions like this, we'd never actually gotten one. And once we did, we had the real practicality of it, needing to step back and understand really what's required to consider a component for inclusion in the design system. And keep stepping back until we have a good starting place.

**Slide 20:** And that starting place is a process that's fair, practical, and repeatable. We want what we do here to be a model for what we do in the future. And we want to be sure we're setting a standard that's appropriate for both internal work and contributions from the public.

**Slide 21:** I've referred to elements of that process earlier, when I was talking about usability testing. And one of the key elements of that process is a common component acceptance criteria checklist. Understanding, codifying, and publishing our requirements for publishing any component.

**Slide 22:** The second is a component lifecycle model that connects phases of a component's iterative development to elements of its acceptance criteria. This means making is clear what it means for a component to be in phases like under consideration, in development, experimental, in-use, or deprecated — stuff like that — and what it takes to move from one phase to another.

**Slide 23:** And finally, how all of this works alongside pattern-first development. Starting with real user needs to understand how any component supports real-world interactions.

**Slide 24:** So when it comes to Tabs, the proposal uncovered the places where our process needed work. We've been able to elevate those process improvements into upcoming roadmap items, so we're ready to start moving forward with deliberation. We appreciate your patience here, as do what we need to do to be fair, practical, and repeatable.

**Slide 25:** **Next up: When will the design kit be updated?** 

**Slide 26:** Basically, we update the design kit (otherwise known as our Sketch and Adobe XD assets) after every USWDS release that has a design change, like a visual change to a component or a change to a color. Because of the realities of our production cycle, it often follows about a month behind the USWDS release. So, because we didn't make any visual updates to the design system with USWDS 3.0, we didn't publish a new version of the design kit. We did however, add some new components in the last USWDS release, USWDS 3.3.0, and we're in the process of finalizing the design kit for that release now. The holidays slowed down our progress, but the newest components should be available by the end of the month.

Now this isn't the only time we update the design kit — at a minimum we'll update it when there's a design change in the USWDS codebase, but there may be more releases if we find a bug or an inconsistency in the design kit as well. In general, though, the design kit has far fewer releases than the USWDS code.

**Slide 27:** Relatedly, while we've supported Sketch and Adobe XD in our design kit for the last few years, we know that those aren't the only tools that design teams use. This year, we're adding Figma support to our short term roadmap. There are community implementations that we've linked to from our documentation site and our repo,that you can use in the interim, but we now have USWDS in Figma planned. 

**Slide 28:** So look for a component release to the existing design assets later this month, and a Figma design kit coming later this spring. You can find the USWDS design kit at [github.com/uswds/uswds-for-designers](http://github.com/uswds/uswds-for-designers).

**Slide 29:** **Relatedly, Are you allowed to change how USWDS looks?** That is, are teams able to customize USWDS and adapt it to their own project needs and tone?

**Slide 30:** The simple answer is yes.

**Slide 31:** USWDS is designed for designers, and meant to be a tool for designers — a way to support human centered design by giving teams a common starting point and a common design language for their design choices. From our perspective, it's less about making changes and more about how and why you're making those changes.

**Slide 32:** We want teams to build faster, test faster, and make decisions faster...

**Slide 33:** Which is why our advice is always to start with our defaults and customize with tokens. Build faster and test faster by changing as little as possible at first. Understand key interactions and flows. Work on your content. But brand, tone, and design do matter — and there can be a good case for adapting our defaults for your specific audience. What we ask is that when you do change how USWDS looks, that you use our design language of tokens. If you want to change from blue to green, use the USWDS green system tokens in your design. If you want to make the text bigger, use our font-size tokens. And use spacing tokens instead of hardcoded px, em, or rem in your stylesheets. All of this assures a baseline continuity between design system projects.

**Slide 34:** We believe in experimentation. And we believe that experimentation drives adaptation. Every project is an ongoing experiment, and as you experiment and learn, we want that learning to be reflected in the design system itself.

**Slide 35:** And that's why feedback and community is critical to the health and success of the design system. We want to know what you find. If there's an opportunity to improve something for every user of the design system, we want to know about it. So find good solutions for your audience, and let us know what you find.

**Slide 36:** **So, how do you set custom fonts and colors in USWDS?**

**Slide 37:** Well, we've got a setting for that. And to talk more about these settings and tokens, I'd like to pass it over to Amy.

**Slide 38:** Thanks, Dan. And hello again, this is Amy speaking. We recommend using standard USWDS tokens whenever possible, but we understand that sometimes customizations *need* to be made to fit project needs. The Design System is built with these needs in mind and can accommodate both custom colors and fonts. 
The solutions and considerations are a bit different for each type of customization – so to start –  we’ll talk about colors.

**Slide 39:** **USWDS color tokens**

USWDS comes with a suite of hundreds of curated color tokens in 25 color families and vivid variants.

We call these colors – like red-50 and blue-cool-50-V – [system tokens](https://designsystem.digital.gov/design-tokens/color/system-tokens/). On this slide, we see a color wheel showing the USWDS system color tokens. System tokens give everyone who uses the Design system a broad color palette that enables teams to customize the look and feel of their project while still maintaining a common color language.

These system tokens are not editable — the value of a system color like red-50 will be the same in any USWDS installation.

**Slide 40:** Theming USWDS means editing the values of a *different* set of color tokens: [theme tokens](https://designsystem.digital.gov/design-tokens/color/theme-tokens/). 

Theme tokens are the colors we actually use in our component stylesheets. They're type-based, where BASE is used primarily for text, PRIMARY is for your project primary colors, SECONDARY is the secondary color, and so on.

This slide shows an example of theme tokens, which include the families **base, primary**, **secondary**, **accent-cool**, and **accent-warm**, in a range of brightness from darkest to lightest.

Theme color tokens – like primary-dark – are meant to accept system color tokens – like blue-60. This means that when you use the **primary-dark** color token in your style rules, the system outputs the color **blue-60**.

Teams are meant to update their project settings and customize their theme tokens. And while theme tokens are meant to accept system tokens, we understand that there will be times when your project must adhere to strict color schemes and use a non-USWDS color in order to be compliant. The Design System is built to handle that.

**Slide 41:** **Adding custom colors via settings**

The best method for adding custom colors to your project is to edit the values of your theme color variables in your [settings configuration](https://designsystem.digital.gov/documentation/settings/#configuring-custom-uswds-settings). In this example, we show how you can edit the values for the theme-color-primary theme tokens. While these are meant to receive system colors like **gold-40v**, you can see we've given the primary-vivid token a custom hex color: #F5CA55.

Now, whenever you want to use this custom hex color, you simply reference the “primary-vivid” token inside the color function.

**Slide 42:** When you customize your colors in this way — through settings variables — you get the added bonus of running your color through the Design System’s accessibility checks. Behind the scenes, the Design System checks to see if your color has the required contrast level to be accessible, and will send a warning if it is not.

In contrast, if you were to add your hex value directly into a custom Sass rule, none of these checks will happen. This means that accessibility checks would be your responsibility entirely. For this reason, we recommend always adding colors via your settings configuration.

And that’s it for adding a custom color. Let’s move on to fonts. 

**Slide 43:** Out of the box, USWDS provides and supports 10 different [font families](https://designsystem.digital.gov/design-tokens/typesetting/font-family/). We provide these as a recommended set, but the system also has the capacity to accept new fonts.

We’ll go through two typical scenarios for adding a custom font. The first is when you want to add a font that is hosted from a service like Google Fonts or Typekit. The second is when you want to add a self-hosted font.

Today I’ll give a high-level overview to show what is possible, but we’ll also add a [link](https://designsystem.digital.gov/design-tokens/typesetting/font-family/#adding-fonts-to-uswds) to our more detailed documentation in the chat for reference.

**Slide 44:** First up: If you want to add a font that is hosted from a service, you’ll need to complete the following steps.

First, you’ll  add a reference to the JavaScript and CSS according to the instructions given by the font hosting service. This is typically done in the head of your HTML files.

Second, you’ll create a new font token in your settings configuration, and then use the new token in your theme. We’ll walk you through these last two steps on the next slide.

**Slide 45:** Creating a new font token is simple. In your USWDS settings configuration, you will need to add information about your new font to the theme-typeface-tokens settings variable.

This example shows that you’ll need to ONE reference the display name and TWO declare which fonts you want in your font stack. In this setting, there is also an opportunity to adjust your font’s cap height, but that is fine to leave for now – we’ll get into that more in just a bit.

Once you have your new token, you’ll need to assign its value to its related theme setting. In the example, you’ll see that we have assigned  Lato to theme-font-type-sans. This means that wherever the system is told to use the “sans” font type, it will use your new Lato token.

**Slide 46:** Alternatively, if you want to host additional fonts in your own project, there are a few more steps to do in addition to creating your own token. 

You also need to assign this new token to its font type, and then add custom path information for this font type before using the new font type token in your stylesheet.

**Slide 47:** Configuring the theme-font-custom-source settings variable provides the custom path information that lets the system create new font-face rules in your CSS. 

In this setting, you will first tell the system where to find the fonts in your project. Second, you’ll specify which weights you want the system to use and third you’ll identify the file name for each font weight. It will look something like this example.

Note that there are several theme-font-custom-source settings variables — one for each font type. In the example shown, we configure theme-font-SANS-custom-source to find the Lato font files.

If you self-host your own custom font, you'll need to provide the woff, woff2, and ttf versions of the font for the @font-face rules to build correctly.

Once these font-face rules are created, you can repeat the steps we did in earlier slides to create a new font token and associate the token with your theme. 

And those are the steps for adding a custom font to USWDS! For reference, you can find full instructions on our site. We’ll also throw the [link](https://designsystem.digital.gov/design-tokens/typesetting/font-family/#adding-fonts-to-uswds) in the chat to make it easier.  

**Slide 48:** Before we wrap up the section, I want to note that there are some considerations that should be made when adding fonts to your project.

First, consider the size and performance footprint. Every weight added is another font file the end-user must download, so minimize the number of weights you use.

Second, we urge you to consider normalizing the size of your font to match the ones included in the Design System. One great feature of USWDS fonts is that they are designed to output a consistent optical size regardless of the typeface.

This is useful because it means that if you ever switch faces, you won’t have to worry about a bunch of layout shifts or code adjustments. Everything is already adjusted to be the same optical height!

To normalize your new font, you’ll simply need to adjust the cap-height when you create your new font token. Once its optical size matches the other USWDS fonts, you’ll be set for font flexibility in the future.

**Slide 49:** **Our next question is "How do I stop the banner from flashing unstyled content?"**

**Slide 50:** If you use the banner, header, or modal component on your site, there is a chance you noticed that the component will momentarily *flash* open for a few milliseconds before closing again as expected. If you experience this on your site, there is an easy fix. You simply need to use uswds-init.js.

USWDS-init is a JavaScript file that checks to see that all page content is loaded before allowing the open content to be visible. This prevents the component from flashing open on the screen.

**Slide 51:** Adding it to your project is easy. Just copy the uswds-init.js file into your site’s asset directory from either the *dist* directory in our downloadable zip file or from the uswds-core package in npm. We’ll also post a [link](https://github.com/uswds/uswds/blob/develop/packages/uswds-core/src/js/uswds-init.js) to the file in GitHub in the chat.

Once you have added the file to your site, the only thing left to do is reference the USWDS-init in the head of your HTML files.

More information about uswds-init can be found in the [link](https://designsystem.digital.gov/components/banner/#using-the-banner-component) we’ll provide in the chat.

**Slide 52:** Thanks Amy. This is Dan again. Next I'm going to ask James, **Can I use USWDS with FRAMEWORK NAME HERE, and what I mean there is frameworks, products, or CMSs like Angular, React, or Drupal?** James, what do you say?

**Slide 53:** Yes, probably. But we don't have direct support. That is, USWDS is framework agnostic. Meaning at the very least you can use it with any framework or platform that lets you add or modify markup, javascript, styles, and assets like fonts or images to reference in code later. But we don't support a native version of USWDS for React, USWDS for Angular, or USWDS for Drupal.

If you're interested in community-supported solutions for any individual framework or project, check out our USWDS [Implementations page](https://designsystem.digital.gov/documentation/implementations/) before getting started.

**Slide 54:** There aren’t many technical requirements to using USWDS. The recommended requirements to using the design system are:
- **NodeJS (LTS version 16)**: to download the code and stay up-to-date with the design system.
- **SASS (with load paths)**: to be able to customize and compile your SASS to CSS successfully. 
We offer a tool called [USWDS/Compile](https://www.npmjs.com/package/@uswds/compile), available on NPM, that can compile USWDS code with minimal configuration and help you stay up-to-date with the design system.
- **Autoprefixer**: for CSS compatibility across all browsers.

An optional requirement is a javascript bundler if you’re looking to import individual component JS. Keep in mind that USWDS currently uses CommonJS syntax. We have a migration to ES Modules in the works, but ESM support in the NodeJS environment is a little quirky and our work is still in the early stages.

**Slide 55:** **Known issues with frameworks.** We’re doing our best to make sure USWDS works everywhere, but there are always things to improve. For example, some frameworks might require special configuration to get USWDS setup properly. 

There are also some interactive components that don't always initialize or behave as expected. Especially in dynamic frameworks.

We’re actively looking for ways to improve this experience and the documentation.

**Slide 56:** **And our final question today is "How do I import USWDS component JavaScript into my project?"**

**Slide 57:** I mentioned earlier that USWDS javascript uses the commonJS require syntax for importing scripts. Please keep in mind that you’ll need a bundler in your project. There are two ways to import USWDS javascript.

**Slide 58:** One way is to use the default **import**, which includes  all component code, and then destructure, so import USWDS and then extract accordion to later initialize:

import USWDS from “@uswds/uswds/js”;
const { accordion } = USWDS;

You can also simply import a single component script by taking advantage of the package exports we’ve defined in package.json. For example:

import accordion from “@uswds/uswds/js/accordion”;

There are also additional entrypoints for sass partials, images, and fonts. Check out the exports object in USWDS’s package.json for the full list.

**Slide 59:** Thank you James. And that's the last of our frequently asked questions. Now let's get to the questions you actually have today.

**Slide 60:** Thanks for joining today’s USWDS monthly call. Next month, we’ll be talking tokens, with a whole call dedicated to learning about design tokens and how we use them in the design system. If you're new to the design system, this can be a good way to learn about one of our most important concepts. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you next month!

{{< /accordion >}}

Join the Design System team as we tackle your most commonly-asked questions.

In this session, we’ll answer questions like:

* Can and should I theme USWDS?
* What's the component testing process?
* How do I set custom fonts?
* How do I use USWDS with my technology stack?
* How do I update my project setup after moving to USWDS 3?
* When should I expect updates to the USWDS design kit?
* When will new components be released?

**This event is best suited for:** Designers and developers who use the U.S. Web Design System plus those who are planning to use it.

## Speakers

* **Dan Williams -** Product Lead, USWDS
* **James Mejia -** Engineer, USWDS Contractor
* **Amy Leadem -** Front-End Developer, USWDS Contractor

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
