---
title: USWDS Monthly Call - August 2024
deck: A look at beta web components
kicker: USWDS
summary: The U.S. Web Design System team will answer community questions and give an update on their work developing web components for the design system.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItcumgrzIoHjYBsYQS-9h1vFpz0KMCvHE
date: 2024-08-15 14:00:00 -0500
end_date: 2024-08-15 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - design
  - human-centered-design
  - software-engineering

slug: uswds-monthly-call-august-2024

# zoom, youtube_live, adobe_connect, google
event_platform: zoom

primary_image: 2024-uswds-monthly-call-aug-title-card

---

{{< asset-static file="uswds-monthly-call-august-2024.pptx" label="View the slides (Powerpoint presentation, 3.6 MB, 48 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for August 2024" icon="content_copy" >}} **Slide 1** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for August 2024. Welcome back! I hope you're having as good a summer as possible. For our team, at least, July can be a great time to have a bit of focus time. This month we're simply celebrating the season with some warm summer colors in the USWDS logo: yellows, blue, green, and orange.

**Slide 2** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. As of this month, the avatar now has glasses — matching real life me, who's wearing a gray shirt today, and yellow socks, approximately gold-30v.
As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls, back to January 2023, on our website, at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at digital.gov. We've also started collecting each month's Q&A as a GitHub discussion linked from the monthly calls page. We've posted a link to our monthly calls page in the chat.
We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so. Otherwise, there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 
For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.
So thanks! And, with that, let's get started!

**Slide 3** So what's our agenda for today? Well, we've got a number of things to show off, largely influenced by community suggestions. We’ve got a couple exciting new sites to feature and a number of product updates. Then we'll answer some community questions that came in, preview a new USWDS design kit in Figma, then we'll talk through what it takes to go from alpha to beta in our new USWDS Web Components (and what you can expect once those are out), and will hopefully still be able to get to some Q&A.

**Slide 4** So let's get into it with today’s featured sites. There are a couple exceptional examples today.

**Slide 5** First, [sec.gov](sec.gov) — a new site from the U.S. Securities and Exchange Commission. Founded to help our country respond to the Great Depression, SEC is the agency that protects investors from misconduct, promotes fairness & efficiency in the securities markets, and facilitates capital formation for those looking to hire, innovate, and grow. The new site has a number of navigational and display elements on the front page, but sensitively organized to still seem really clear and approachable. The site has a crisp blue-and-white color scheme, the gov banner at the top of the page, the SEC seal up in the top left, a quick links section in the hero, as well as the words: "We make markets work better."

**Slide 6** We're also pleased to show the redesigned [vote.gov](vote.gov). This new redesign from vote.gov, features a large, close-up image of the American flag on a somewhat greenish background of cool blue. The typography is a solid combination of Merriweather headings and Source Sans Pro text. Notably, this site also features the language access button up at the top of the page, in the banner — which is an emerging pattern that seems promising. The text in the hero reads "Register to Vote or update your registration."

**Slide 7** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8** Now for a few product updates.

**Slide 9** USWDS 3.8.2 is out now!

**Slide 10** USWDS 3.8.2 is a small patch release that addresses an issue a user was finding in their security scans. We had a polyfill dependency that used a regular expression that technically flagged scans as a distributed denial of service vulnerability, but that we do not consider exploitable. Nevertheless, we removed that polyfill. Now, since we released USWDS 3.0, we've dropped official support for IE11, but we'd left our polyfills in place. This release is the first release that begins to remove those polyfills, so expect to see more work that removes IE11-specific code as we move forward.

**Slide 11** We're also getting ready to release USWDS Compile 1.2.0. Compile is our package that uses Gulp to compile project Sass into final CSS. Compile 1.2.0 will update the package to the most recent major version of Gulp, Gulp 5, in addition to providing support for disabling sourcemaps. Compile 1.2.0 is coming next week.

**Slide 12** And we've also got USWDS 3.9.0 on the way. And this one has a number of good improvements.

**Slide 13** Here are a couple of the key improvements in USWDS 3.9.0: 
*Fixes a tab order bug in the mobile header
*Fixes a keyboard/mouse interaction issue in date picker
*Improves performance of input mask
*Improves legibility of pagination links
*Adds the ability to add a custom breakpoint to utilities

**Slide 14** We're working hard on USWDS 3.9.0, and this release will be available by the end of August.

**Slide 15** We're continuing progress in publishing accessibility test pages. We've got a few big ones up on the site now: [Identifier](https://designsystem.digital.gov/components/identifier/accessibility-tests/), [Footer](https://designsystem.digital.gov/components/footer/accessibility-tests/), [Header]), and [List](https://designsystem.digital.gov/components/list/accessibility-tests/). We're posting links to these new pages in the chat, _and_ we're working on three new component test pages for next month: Checkbox, Radio button, and Combo box. So stay tuned for those!

**Slide 16** Now, I'd like to pass it to our Experience Design Lead, Anne Petersen, to talk about some of what we're doing in the world of usability research, as well as speaking to a community question about component proposals. Anne, can you give a brief self-description for folks and take it from here?

**Slide 17** Anne: Hi everyone, I’m Anne, my pronouns are they/them, and I’m a white person with short brown hair and small glasses, today in a linen-y blue shirt.

So in our ongoing usability research, we now have our [“zebra”](https://github.com/uswds/uswds/wiki/%E2%80%9CZebra-batch%E2%80%9D-component-usability-research-findings-Q1-2024) round of component usability testing results out on our research wiki — our most recent round of usability testing with people with disabilities. We also wanted to let you know that we have a [survey](https://touchpoints.app.cloud.gov/touchpoints/753a68b3/submit) ready for the federal employees in the audience to get a better understanding of what you and your teams are working with day to day. We want to learn about your team size, team structure, resources, tech stacks and frameworks you use, and your familiarity with a few programming languages. After learning that, we can be more confident that we’re building in a way that can be more seamlessly incorporated into your workflows. That survey may take about 10-15 minutes of your time and your answers are anonymous. We’d love to hear from you before the survey closes on August 30th.

**Slide 18** We’ve also had conversations going on in our public discussions on GitHub. I'd like to point out a handful.

There are new component proposals for a Step indicator, both _track-status_ variant and _vertical_ variant. There’s continued discussion on a new component proposal for Tabs. We’ve also made progress on research for a new component called Glossary, which I’ll go into a little more. There’s an (accessibility discussion)[https://github.com/uswds/uswds/discussions/6023] about proving visitors’ humanness.

And finally, we have the (Q&A from our June monthly call)[https://github.com/uswds/uswds/discussions/5977] posted so that if you missed that call, you can quickly catch up.

**Slide 19** But on the topic of component proposals, let’s talk in more depth.

**Slide 20** In advance of today’s call, we asked [what you wanted to hear about](https://github.com/uswds/uswds/discussions/categories/component-proposals), and the new component proposal process and progress was one of those topics. We’ll get to a few others a little later on.

So in terms of the current state of that process, we’ve received several suggestions for new components, including a Chat UI, Toast, Skipto, Glossary, and a few step indicator variants like I mentioned, as examples. We leave these discussions open for comment and voting from the community for a while, but then what happens next?

**Slide 21** Process-wise, the next step is for us to figure out if the component or variant is something we think could be a good addition to the design system, and we first evaluate this through a usability and accessibility lens.

**Slide 22** Our research and accessibility specialists take a close look at the component and gather evidence to help us make the most informed decision possible.

**Slide 23** We have a few guiding questions we use to consider each proposal.

**Slide 24** First, we consider the support this new component might provide, or the support we currently have for the use case or interaction.

**Slide 25** We ask questions like:

* Does the component support a WCAG requirement? At what level (A, double AA, triple AAA)?
* What alternatives are there to fulfill that requirement?

* Does the component have a clear purpose and address a user need?

* Is there an existing solution in USWDS that better meets the need than the proposed solution? If there is, we likely won’t move forward with that proposal.

**Slide 26** And then we consider what might _not_ support this proposal.

**Slide 27** We ask:

* Do the usability and accessibility _benefits_ outweigh any potential _risks_?

* Is this _particular_ solution needed by the USWDS community?

* Has it been requested, how often, _or_ to what extent is it already being used across the government digital landscape? Have teams or other agency design systems created their own, since they couldn’t find it in USWDS?

**Slide 28** We document answers to these questions in a simple rubric that gives us a high level picture. This slide shows these questions with columns for yes, somewhat, and no. The answer to these questions needs to be “Yes” for most of them (except for the middle question about whether there’s an _existing_ solution to fulfill the need, which should be a “no”). If _so_, we’ll feel more confident moving ahead.

**Slide 29** But any new component is a commitment. We support this component going forward, until eventually (maybe) it gets retired, far in the future.

Adding new components adds load to how much we actively support, even if the team doesn’t grow, so we should be considerate of what and how much we add. This component will need to be robustly part of the system if we accept it.

We’ll do regular testing on every component, including this one, to make sure it’s still meeting our accessibility and usability goals. We’ll make _improvements_ over time, even if the component is not being used a lot. We have no concrete way to know how often a component is being used, I might add.

**Slide 30** So, _in the midst of all our other work_ (this is a quick view of _all_ the discussions I mentioned), we’re using [Glossary](https://github.com/uswds/uswds/discussions/5771) to pilot this process. Our UX and Accessibility team members evaluated this suggestion, and we’ve decided we’ll likely move it forward, but we have a _little_ more investigating to do.

**Slide 31** So, it’s about to move into the “conditionally approved” part of the component lifecycle. More to come!

**Slide 32** But this is a new process for us too, so we’re also figuring it out. Let us know how it’s going. And as always, our process here is still part of our product. We iterate _everywhere_.

**Slide 33** We also heard a few other questions from you all that are fairly specific, so we’ll follow up on those in GitHub discussions. Again, [links](https://github.com/uswds/uswds/discussions/5923) are in chat. A couple of examples of those - about VUE3, and about .NET.

**Slide 34** Next, we’ll chat about our new design kit, which is really exciting work, and a great tool to support teams. For that, I’ll pass back over to Dan.

Dan: Thanks Anne. Dan here. We’ve been asked for years about modern design tool support. Now, as I get started, we talk about specific tools at these calls, and we do have to get into the nitty gritty of support for specific products, but, as it says on the box, all references to specific brands, products, and companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency.

There are a couple great open source USWDS Figma design kits out there and available, but we _do_ want to support some of these tools more directly for a couple key reasons. 
As we move forward into USWDS Web Components, we will be thinking hard about component configuration and the styling and functionality dials and switches you can set in your theme. The more configuration we build into our components, the closer our design assets will need to match the final functionality. We'll also need to be thinking not just from the code side but from the design side as well — when designers are using this kit, what types of flexibility do they need to support their projects?

Today, design tools better support this connection between design and development. Since this connection is at the front of our mind in our shift to Web Components, it makes more and more sense for us to engage with these tools directly.
So let's take a look at what we're building for USWDS in Figma.

**_Figma Demo Slides_**

We’re working in the direction of delivering a USWDS-built Figma design kit. It’s not available yet and still exists now as an internal beta, but we hope to distribute it soon. I wanted to show you a preview in coordination with some of the things we’re thinking about in our move to Web Components.

Building on the work of those open source kits, we will be making sure these are built in the same way we’re building out our new Web Components. There are over 40 components in the design system. We haven’t gotten everything in here yet, but we hope they’ll all be in here when we publish this.

We’re using this kit to start using native idioms of Figma and Figma variables in our components. Components can support variants and properties and we want to make those available to designers and largely mappable to design system functionality.

I’ll open a blank page with an example frame on it. We’ve converted our USWDS design tokens into Figma variables. So we’re leaning on variables and not styles, but I can show that in practice.

So if drawing a frame, it has properties. We can give it a fill. If we select this selector it brings up variables, and the variables available are USWDS design tokens, the system color variables available for fills.

With `set color` we could set a stroke on this.

`set stroke` works not only with the system tokens, but also the semantic theme tokens as well as primary or secondary. We can make the secondary stroke a little more prominent here.

This also applies to text, typography, and spacing.

With `add text` we can give it a size and a font connected to USWDS tokens. It says Public Sans, but we want to assign it a token, so let’s use heading. Our headings are set to Public Sans, so it doesn’t really change. Set to 140. Give it a variable. Variables are connected to the face and size, so let’s give this a size of heading 20. Heading 20 is the same as 140, so no visible change. But what this does is starts to connect all these things to variables that can be modified downstream or themed right now. Have the fill set to Blue 50, but let’s set it to primary medium.

`open variables`: If I go into primary, I can set all the defaults and change things to be specific to your theme. You can define themes just like you would in code. The way we manipulate themes in the Figma kit is through layer modes, which are connected to modes in Figma. So we select a surrounding frame to assign a mode to a frame, and can see the colors change based on the new theme we applied.

Typefaces are hard to do consistently. But we support more than Public Sans, and have the ability now to change faces with normalization applied using layer modes. 
`font role heading to serif and back`: This all happens at the layer mode level, so you can experiment with looking at a design through different themes. So copy this over, and you can look at the original theme applied.

`see all layouts updated to the proper sizes of Source Sans Pro` begins to put some of the ideas of theming that we have in design system code into the design assets, which will also apply to components.

So, we’re establishing a common way of thinking about themes between the design kit and code. Trying to do that with our components as well, defining it at the component level. The design knobs most easily available through theming. Doing that by adding these things called properties to a component. You can add a character counter to it below, and be able to set the number of characters that are available, just like in the design system, with an input prefix or suffix. So we want an input prefix. You can change it between text or an icon, and have icons and text available through settings.

You could decide to describe your favorite ice cream flavor `update text`, and instead of regular input we want a text area `do that`, and extra big so you can describe in depth. It has the ability to do all kinds of other things you might expect to do in a prototype, like show the focus state on it, or hide the text, or show an error state `demo`.

**Slide 35** In general, the Figma kit is an experiment in how we can begin to deliver components that are more directly configurable via settings and properties and things you change without detaching the component.

We're working to build a design system that's flexible and expressive — one that helps build experiences that are tuned and tailored yet broadly related and familiar. _And_, more and more, helping _designers and developers_ work from the same set of rules but using the tools and idioms that are familiar to _them_.

So this is important to us, and one of the key elements in our vision of empowered and supported digital service teams and familiar and easy-to-use digital services.

**Slide 36** The USWDS Beta Design Kit in Figma will feature:

* Design tokens as variables

* Attribute-powered components

* Mode-based fonts and themes

* Extensive examples and guidance

* And of course, auto layout, and other native functionality.

More to come on this. We hope to begin publishing our work soon.

**Slide 37** And now let's finish by moving into the Web Components beta phase.

**Slide 38** Today, as we start to make the shift from our alpha-level experiments into a public beta, we'd like to talk a bit about how that'll work. **What makes a Beta release?** We'll look at our release maturity model.

**Slide 39** And **how do I get involved in the Beta?** How do I use the components? How do I leave feedback and comments? We'll also take a look at our documentation and communication expectations. And to do this, I'd like to introduce a couple of my colleagues.

**Slide 40** First is Amy Leadem. Amy's a contractor and an engineer on the USWDS Core team. Amy, can you introduce yourself and give a quick self-description for folks?

Amy: Absolutely. Hi, I’m Amy Leadem. My pronouns are she/her and I have long wavy brown hair and an orange sweater on today.

**Slide 41** Dan: Thank you, Amy. I'd also like to introduce Matt Henry, our Engineering Lead. Matt can you introduce yourself and give a quick self description for folks?

Matt: Sure can. Hey yall, Matt Henry. Acting Engineering Lead for the design system. I’m a bald white man with glasses and a blue oxford shirt and my pronouns are he/him.

**Slide 42** Dan: Thank you Matt. Why don’t you take it away with a demo.

**_Demo presentation_**

**Slide 43** Dan: Thanks Matt and Amy. This is Dan again. So we're expecting to get an initial package for this work out tomorrow via npm (at uswds/web-components). This will still feature alpha components, but the npm package will be a good way to track our progress — in addition to what you'll find at the project hub: [github.com/uswds/web-components](http://github.com/uswds/web-components).

**Slide 44** So what's next with this work? In the coming weeks, we'll be getting Banner, Identifier, and Link into the beta phase and publishing them via the web-components npm package. We'll be working on Button, Accordion, Card, Text Input, and Modal next. 

**Slide 45** And then, by the end of the fall, we should have at least a dozen components in stable Beta. We're working hard, and we'll be updating folks on our progress through all our usual channels.

**Slide 46** So onward, and here we go!

**Slide 47** And it looks like we have some time for Q&A, so let's get to it.

**Slide 48** Thanks for joining today’s USWDS monthly call. Next month we'll be looking at our Web Components progress.

Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

And if you have a question we weren't able to answer in the call, or thought of later, please head into our [public Slack](https://designsystem.digital.gov/about/community/) and ask it there. We'll be there after the call to answer questions.

Have a great day and a great conclusion to your summer. We'll see you in September!

{{< /accordion >}}

Join the U.S. Web Design System (USWDS) team to understand their progress toward developing beta web components. They’ll also answer questions and requests posted by the [community in the community choice discussion thread for the August monthly call on GitHub](https://github.com/uswds/uswds/discussions/5923). 

In this online session with the USWDS team, you will:

* Learn how to use beta versions of our next batch of new web components
* Gain insight to the USWDS team’s progress on building a Figma design kit
* Get our answers to your community choice questions

**This event is best suited for:** Design system users of all levels. This will be a technical discussion geared toward developers, but anyone can attend; it requires no specialized knowledge.

**Speakers**

* **Dan Williams** - Product Lead, USWDS
* **Matt Henry** - Engineering Lead, USWDS
* **Anne Petersen** - Experience Design Lead, USWDS
* **Amy Leadem** - Developer, USWDS contractor

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

---

*Disclaimer*: All references to specific brands, products, and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency.
