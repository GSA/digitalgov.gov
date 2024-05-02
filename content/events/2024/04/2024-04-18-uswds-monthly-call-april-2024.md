---
title: USWDS Monthly Call - April 2024
deck: An introduction to Web Components
kicker: USWDS
summary: The U.S. Web Design System (USWDS) team will go over some basics of Web Components and how they apply to the design system.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIscu2trTIvG5qnaDHtM3sylW5ysfzYq_Y
date: 2024-04-18 14:00:00 -0500
end_date: 2024-04-18 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - software-engineering
  - user-centered-design
slug: uswds-monthly-call-april-2024
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2024-uswds-monthly-call-april-title-card
youtube_id: GHomUbYTgwQ
---

{{< asset-static file="uswds-monthly-call-april-2024.pptx" label="View the slides (Powerpoint presentation, 5.9 MB, 96 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for April 2024" icon="content_copy" >}}**Slide 1:** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call…

**Slide 2:** ...for April, 2024 — This month we're celebrating the budding leaves and spectacular flowers of spring (with shades of pink and green and blue)

**Slide 3:** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a simple green checked shirt. It's also a bright-green socks day!

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at digital.gov. We've posted a link to our monthly call page in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 4:** So what's our agenda for today? 

We’ve got a nice site launch, some product updates, and then we’ll spend the rest of the time with an introduction to something we think is super important to the future of the design system: something called Web Components.

And then hopefully we'll have plenty of time for Q&A.

**Slide 4:** So let's get into it with new site launches

**Slide 5:** Today we're looking at [beta.notify.gov](https://beta.notify.gov/): This is the beta site for a new service from TTS here at GSA, notify.gov. Notify.gov is a text message service that helps federal, state, local, tribal and territorial governments more effectively communicate with the people they serve. It's currently in a select pilot program. On the notify.gov homepage, we see a simple and direct bell icon with a bright red notification dot. The hero area is bold and blue, with an illustration of a mobile device receiving a text message, and the words "Reach people where they are with government-powered text messages."

**Slide 6:** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** Now for a few product updates…

**Slide 8:** First a number of research updates. We've put a bunch of effort into operationalizing usability research over the last year, and it's really starting to come together. Last month we performed some usability research focused on five components: Banner, Site Alert, Memorable Date, Time Picker, and Radio Buttons

**Slide 9:** We've been continuing our focus on research with people with disabilities and users of assistive technology. In this last round, we had 5 users with visual impairments (3 blind and 2 low-vision); one user with a motor impairment; and two users with mental health conditions (ADHD, anxiety, and depression)

**Slide 10:** We were also able to test on a broad range of devices and user agents: four screen readers, one instance of screen magnification, and tests on both mobile and desktop.

**Slide 11:** We'll have more to come on findings from this last round of research, but we learn a lot with every round, and we're gearing up for the next ones now.

**Slide 12:** Next a quick update on component discussions. We're adding [a link to our new component proposal discussion board in the chat](github.com/uswds/uswds/discussions/categories/component-proposals) where we're working to solicit discussion on components teams hope to see in the design system. We've got ten active discussions right now:
* Common feedback
* CUI banner
* Glossary
* Spinner
* Tabs
* Toast
* Toggle
* Quote with attribution
* Skipto
* Sidebar primary navigation

We're also getting ready to get the tabs discussion into the formal proposal phase, converting the information we've gathered in the discussion into a formal proposal. When we've finished, we'll post an update into the tabs discussion, and ask any follow-up questions we have in there as well.

We'll be talking more about component proposals and evaluation in the coming months.

**Slide 13:** And finally, I'd like to point to a couple other discussions on the boards right now. We've had some interesting conversation around the idea of "dull colors" or what we might think of as the "calm" equivalent of the "vivid" color variants we currently support. 

It's a good proposal, and is a thoughtful look at how we might provide an even fuller gamut of color token options.

There are also a couple other accessibility related discussions that might be of interest. This month is recognized as National Stress Awareness month, and we're wondering how teams think about designing with stress in mind, and also how we might think about usability research that gives insight into usability under conditions of stress. 

There are also a couple other accessibility-related discussions on WCAG 2.2, and the overlap between content and WCAG. So jump in if you have something to contribute!

**Slide 14:** This month we're going to give an introduction to a technology that we think is going to be really meaningful for the design system, and has the potential to have a big impact on how we build with the design system, design with the design system, and stay up to date with the design system. And that's something called Web Components. Today we'll try to talk about what this technology is, and why we care so much — without getting too too technical.

We'll be talking about this a bunch more over the foreseeable future, and this is just the start. 

**Slide 15:** Have you ever "viewed source" on a website? You can do that for anything you can open in a web browser. There isn't much reason to do this — there are other ways to interact with the underlying code of a webpage, if you're a developer. But if you're a certain age, and that age is close to mine (somewhere in the vicinity of 50), there was something of a perverse charm in knowing that you can look under the hood of any page you visit on the web and see some of what makes it tick.

Back when the web was young, this was one of the best ways to learn how the web worked. And it's still sort of gratifying to know that you can peel the lid off even the most sophisticated of sites and look right down into its guts.

**Slide 16:** And when you do, you'll see something kinda like what's on this slide. Here we've peeled the lid off the USWDS homepage, and underneath is a bunch of code like we see on the right side of the screen, in gold: monospaced, code-y stuff, things that look like a computer was writing an outline. Maybe you see things in there like **body**, **section**, **class**, or **div**. Lots of angle brackets!

**Slide 17:** This is what — technically — we refer to as "brackety stuff"

**Slide 18:** Or perhaps * *more* * technically, as * *markup* *.

**Slide 19:** This markup language has changed a bit since the early days of the web, but if you looked at the markup from a website from 1996, it would be remarkably similar to what you see today. Probably a lot simpler — our markup style has gotten a bit…verbose these days — but it wouldn't be like reading a completely different language. It wouldn't even be as archaic as something like Old English.

Since the earliest days, this common markup has been the stable foundation of the web.

**Slide 20:** In fact, it was in 1994 — still in the very early days of the web — that the web standards body known as the W3C was formed. By 1996, they'd assumed standardization responsibilities for this markup language. 

This standardization was important because of what the web was trying to do — connect information across the world, between pages and documents that might not share any commonalities but a common language. If they were going to connect successfully, it was because they shared this common language.

The stability, consistency, and dependability of standardization helped the internet grow.

**Slide 21:** And this common language, this markup language, has a very 90s name. It's the HyperText Markup Language. HyperText (a term actually coined in the 60s) essentially just means text connected by links. And this HyperText Markup Language, is our common language of the web, HTML. And these days, most folks have heard of that.

**Slide 22:** HTML is everywhere… except where you might expect it! With all the HTML lying just beneath every single website and service we visit, it may come as a surprise to learn that — for the most part — most modern websites aren't typically written in HTML at all.

**Slide 23:** And to understand why, it's worth thinking about something we talk about pretty often here at USWDS: and that's Components.

**Slide 24:** Components are a way to think about how websites are constructed from modular, remixable building blocks: these are things like headers and footers, buttons, cards, icons, date pickers, navigations, step indicators, breadcrumbs, and search, etc. We see something of a simplified example of these on screen, with components as little squares with dotted-line borders. 

**Slide 25:** These components are meant to be repeated and reused all across our applications, across all kinds of different forms, pages, and workflows. Most of the stuff we see on any website or service is a component of some type. A wireframe for a web page or interaction flow — something like what we see on screen — can sometimes just be a way to see how components are remixed and reassembled to create a coherent layout.

**Slide 26:** For modern websites, anything that appears again and again, like a component, is a great candidate for a * *template* * — like a stamp or a little printing press — that outputs that component wherever it's needed, with the proper content and data for * *just* * that instance: * *just that* * button, * *just that* * form field, * *just that* * breadcrumb trail, * *just that* * side navigation. Design this little component printing press once, and include it every time you need to output a component. 

**Slide 27:** So what does a template do? A template receives unique data and content as an input and outputs the HTML that the browser interprets.

**Slide 28:** So just as you can think of a page as made of components…

**Slide 29:** It is perhaps more accurately made of component templates. Modern websites are built out of templates small and large. Component templates, section templates, page templates, interaction templates, workflow templates. 

**Slide 30:** Essentially, template languages allow applications to output HTML dynamically, based on data and logic. You're not writing a bunch of HTML, you're writing logic and passing data, and letting the machine take care of the repetitive hassle of writing all that HTML.

**Slide 31:** If HTML is highly standardized. The world of templates and template languages is… not so much. There are all kinds of template languages, changing all the time. Developers might know a bunch of them, or they might only know one really well. While HTML evolves slowly, the product of a centralized international standards body, template languages follow the logic of the marketplace, finding new evolutionary niches based on new developer needs, individual passion, and a desire to build something new and better, or even just different. There will always be more of them.

**Slide 32:** So, the web wouldn't exist without the standardized interoperability of a common HTML…

**Slide 33:** …but modern dynamic applications couldn't exist without template languages.

**Slide 34:** Yet even while the hare of templating languages scurries this way and that, constantly whizzing back and forth, the tortoise of the standardized world of web technologies continues to plod ever forward.

**Slide 35:** About ten years ago, in 2013, the web standards body responsible for HTML published the beginning of a way to integrate the power of component templates into the fundamental technology of markup, by adding the ability to build custom * *additions* * to HTML.

**Slide 36:** To understand what this means, let's take a look at some HTML elements…

**Slide 37:** The fundamental unit of HTML is the element, and today, in the current Living Standard, there are just a bit more than 100 of them. Almost exactly as many as there are in the periodic table of the elements, for the physical elements of chemistry! (There are about 111 HTML elements — depending on how you count them — and there are about 118 physical elements…)

An element is simply a way to describe a part of a document. Like a heading, or an article, or a paragraph, a section, or a general division. Elements give structure to documents. They describe a model of the content of a document.

If you look around at the grid of HTML elements on screen now (this isn't all of them, by the way!) you may see a bunch of things that look familiar: heading levels like **h1-h6**; **table**, **form**, **input**, and **button**; the paragraph **p**, and perhaps the hydrogen of the HTML elements… 

**Slide 38:** …the Anchor Link: **a**. — Which we now see highlighted in the grid. **A** is a great element, and is the element that made the web what it is. Let's use the a element to look at the parts of an element.

**Slide 39:** So here's an element in the wild. Since most — but not all — elements are designed to structure content, they're designed with a two-part system, an opening tag and a closing tag that enclose some kind of content. 

Opening and closing tags are surrounded by angle brackets. The closing tag uses a forward slash to indicate that it's a closing tag, and the opening tag can also include **attributes**, or information about this specific instance of the element. 

In this case, the attribute for the **a** element, is one that's pretty critical for any anchor link, the hyperlink reference to the destination address, otherwise known as an **href**. href → hyperlink reference

So for an anchor link, you really just need two things:
* The text that serves as the link
* And the destination address for the link

That's what this element encodes. That's the * *model* * for a hyperlink.

**Slide 40:** On-screen, this is what we see. 

We see USWDS, blue and underlined by default. If we select this link, our browser will take us to the address we specified in the element's **href**. If we hover over this link with a mouse, the cursor will change into a pointing finger to indicate that this element can be selected.

We * *don't* * see the element's tags, or any of the attributes, exactly. What we see is the browser's * *interpretation* * of the element model, with the content and data we specified.  

**Slide 41:** HTML elements are the starting point for modeling components. But what about when a component doesn't have an analogous element?

**Slide 42:** Or when an element doesn't support all the functionality required by a component?

**Slide 43:** This is when we have to build our own models.

**Slide 44:** To give an example of what this might mean, let's look at **Breadcrumb**.

**Slide 45:** Maybe you could imagine breadcrumb being a standard HTML element. It wouldn't be a stretch, but it doesn't exist.

Let's look at a few instances of a breadcrumb to try to identify its key aspects.

On screen we see four breadcrumbs of differing lengths. Each has a house icon at the beginning. Each has little chevron-shaped separators between underlined text.

**Slide 46:** As we see highlighted in the screen, the first thing we might notice is that those bits of underlined text are links. A breadcrumb is a collection of links. 

**Slide 47:** At the start of each collection is a home. Now highlighted on the screen.

**Slide 48:** And at the end of each collection is the current page. Now highlighted on the screen.

**Slide 49:** So this might be our content model:
* A collection of links
* The first is always a link to a common home
* Then there can be any number of optional links
* And finally a link to the current page
  
If you had just this content, you'd have everything you need to build a breadcrumb.

**Slide 50:** And if we want to express this in the language of standard elements, we have to manually interpret the model into standard elements. This can be complicated, and there are all kinds of questions you need to answer in this interpretation process, but this slide shows a bit of where we might land over in the gold markup area:
* We've defined the breadcrumb as a **nav** navigation element
* We've defined the collection of links as an ordered list
* And we've defined a **class** attribute for each element, so we can write styles that target each of these unique classes.
  
Our model can be very simple. Complex interpretation doesn't * *require* * a complex model. Our model doesn't have to answer the questions we address in the interpretation, it only has to sufficiently describe the content.

From this relatively simple model, we've developed a fairly complex bit of markup!

**Slide 51:** But USWDS doesn't deliver models or interpreters, it delivers only the final stage in this process: the markup. What we might call a markup * *specification* *.

**Slide 52:** So what does a project team do with what USWDS delivers; with this specification?

**Slide 53:** Well teams have to reverse-engineer our markup specification back into a model they can use as a project component template…

**Slide 54:** …then they can pass their own project data into their template, and use that template as an interpreter to output their own project-specific markup that matches the USWDS spec.

**Slide 55:** And what happens when USWDS updates the HTML spec? Teams have to go in and update their component templates.

**Slide 56:** They have to identify what's changed in the new USWDS spec.

**Slide 57:** And then they update their component template to make sure it's outputting markup that matches the new spec. And they have to do this every time USWDS makes a markup change.

Accessibility changes often have related markup changes.

Key functionality changes often have related markup changes.

Static content changes are often markup changes.

**Slide 58:** This is work! Time, energy, resources! Multiplied by every team that's using the design system. You can see why not every team can keep up with our updates.

**Slide 59:** And it means that it makes it hard for USWDS to change. We have to be very conservative about the types of changes we can make and when we can make them. 

The diversity of template languages has meant that we've never been able to support any of them directly, and we've been stuck delivering an HTML spec — even while we know that this isn't how teams build.

**Slide 60:** But what if — instead of the HTML spec — we could deliver the model directly, as some kind of custom element? 

**Slide 61:** Along with an element interpreter to translate the custom element into standard HTML?

**Slide 62:** Well wouldn't that be pretty much exactly a component template?

**Slide 63:** Yes. Yes it would.

**Slide 64:** And that ability to define custom elements and element interpreters is what the HTML standard released in 2013. And after some time, that standard is mature enough, and the browser support is good enough, that we can begin to use it.

**Slide 65:** And this standard is the global web standard we call Web Components.

**Slide 66:** And as we started to see before, the power of Web Components is how we build our models, and the flexibility this allows our element interpreters to change and evolve the type of markup they assemble.

**Slide 67:** Let's return to our Breadcrumb model, and to the set of different Breadcrumb instances we used to develop that model. Here again, we see those four breadcrumb instances, of different lengths.

**Slide 68:** Our content model can stay as it was. But now we want to investigate what it might mean to **configure** our Breadcrumb. That is, if we think back to the html element model, are there any attributes we could imagine that would be little knobs or switches for our element, that might affect the way the breadcrumb looks or behaves?

**Slide 69:** For example, maybe you should be able to change the font? Like we see here changing the font to a serif.

**Slide 70:** Or maybe you might want to change the icons, either for the home or for the separators?

**Slide 71:** Or maybe there should be an option to omit the house icon altogether?

**Slide 72:** This is only the beginning of this type of discussion, but it begins to develop not only a content model for the element, but an * *attributes* * model as well. Attributes might include
* font
* houseIcon
* separatorIcon
* hasHouse

But there could be other kinds of configuration options as well.

**Slide 73:** And a really powerful thing about defining models is that they can support all kinds of potential output and markup. This concise model defines not only a current state for the Breadcrumb, as we see here with those Breadcrumbs we've seen before…

**Slide 74:** …but potentially different presentations of Breadcrumb as well. Now I'm not saying what we see here on screen is a good idea: For longer breadcrumbs, replacing the inner items with a dropdown menu. Probably a bad idea! But it's possible that there's something that's either better than the current state, or becomes a user expectation. Our model describes * *this potential* * version of a breadcrumb * *just as well as* * the current version. And as long as breadcrumb stays, * *conceptually* *, as a collection of links that starts with Home and ends with the current page, our model doesn't have to change, and the way we interface with our custom element doesn't need to change either.

**Slide 75:** The power of the Web Component is the ability to have a simple, elegant model, as expressed as a custom element, that can be a consistent interface for a developer, even as the element interpreter changes under the hood.

**Slide 76:** Because unlike a markup spec, developers can update element interpreters automatically. 

**Slide 77:** Developers only have to care about the interface, only those elements of the model that need project-specific configuration.

When we're thinking about developing custom element interfaces, we have four goals: make them clear, concise, consistent, and configurable. Let's take a look at a couple examples to get a sense of what I mean!

**Slide 78:** On this slide, we get a look at what the custom element interface might look like for a Breadcrumb Web Component. 

We want it to be **clear** and *concise**: This five-link breadcrumb instance is only six lines long, focusing on the collection of anchor links unique to this instance. We see from the first line of code in the opening tag, that this element is called **usa-breadcrumb**. And it contains four unique anchor links. 

Why not the Home link? Well, since the home link has the same text from instance to instance, we can leave out that link from the collection, and only capture its url in the element properties. Why ask someone to write out the word "Home" if they don't have to?

(Though I will say, as an aside, that it's a longer topic, but we do want to consider multilingual needs in here as well, and we'd build in the ability to do that…)

And we also want to make the breadcrumb **configurable**. This example shows how you
might add a configuration option to add special RDF-a metadata to the breadcrumb to improve search results and findability just by adding a rdfa attribute. 

And finally, **consistency**: Since this custom element interface includes all the information the element interpreter needs to build all kinds of breadcrumbs, the custom elements interface doesn't need to change over time. Crucially, the interface can remain the same, while the interpreter does all the heavy lifting, and that interpreter can be easily updated from version to version of the design system.

In the end, you can see the difference between our new Web Component — and its six lines that developers need to learn — versus the 54-plus lines that developers need to track in our current markup spec.

**Slide 79:** We'll just take a quick scroll through those 54 lines on the right side of the page… it's much longer…

**Slide 80:** Really, a lot longer!

**Slide 81:** All these extra lines are just more things for developers to track. Additional points of potential failure when building a website. And these are details that developers shouldn't be required to track and understand. When it comes to Web Components, for developers it's the interface that's important, not the final markup.

**Slide 82:** Our government Banner is another good example. Perhaps an even more dramatic example than Breadcrumb. It can be hard to stay up to date with the banner, since any time we can make an improvement to the copy, it requires a manual update for a developer. What if the banner wasn't 93 lines of markup to track and implement?

What if it was closer to the clear, concise, configurable, and consistent six lines we see on this slide?

This custom element, usa-banner, contains all the critical information a developer needs to set up and configure the banner:
* We can set the domain as "gov" so the rendered banner shows shows copy that refers to .gov domains
( We can set the background to dark, so it has a custom color.
* And we can use USWDS design tokens to set the width of the component to "widescreen" so the text extends the same width as the rest of the elements on the site.
  
And that's it. The element interpreter does the rest, and developers don't have to worry about 93 lines of custom markup, and copy that are subject to change and evolution over time!

**Slide 83:** So for example, what if we wanted to display the Spanish version of the banner. Instead of copying all the Spanish language copy and metadata into a custom template, we can just add a new attribute: **Lang="es"**, and the banner updates to Spanish with just a single line of code.

**Slide 84:** Clear, concise, configurable, and consistent custom elements. The element interface stays consistent…

**Slide 85:** …while the element interpreter handles changes under the hood.

**Slide 86:** This makes the move to Web Components a big change in terms of upgradeability and maintainability. When you're updating a Web Component, you're updating interpreters, not markup. And upgrading the interpreter can be as simple as running a simple update script —essentially pushing a button.

**Slide 87:** Anything handled by the interpreter updates automatically…

**Slide 88:** This can be things like markup, logic, accessibility support, metadata, static content, styling, and behaviors.

**Slide 89:** And this means a move to thinking about theming as * *configuration* * — something that can happen closer to the custom element layer. Theming is more like input data to a component, rather than a layer of styling that's applied from an external stylesheet.

**Slide 90:** All together, the custom elements and element interpreters model of Web Components combines the power, continuity, and broad support of standards with the flexibility of templates and templating languages. It's a well supported, cross-browser, platform-agnostic standard that takes the design system out of the static world of a markup spec into the dynamic world of templating. 

**Slide 91:** Making the design system easier to implement, and easier to stay up to date.

**Slide 92:** Because maintenance and maintainability * *is just the baseline* *. Not just for the design system, but for everyone who uses it. What would you do if you weren't focused on maintenance? What higher order questions could you begin to solve? What * *mission-* * and * *user-* *centered questions would you try to solve?

**Slide 93:** What could we do if we had the opportunity to focus on our shared mission: Shaping the future of government digital services? This technology is critical, necessary infrastructure, but the important question is what we're able to do with it. And that's a great question to start to ask.

**Slide 94:** So before we get into Q&A, I'd like to introduce Jame Mejia, a front-end engineer, and a contractor on the USWDS core team, and the person who knows more of the details than I do! James, can you introduce yourself, and we'll move on to Q&A!

**Slide 95:** Q&A

**Slide 96:** Thanks for joining today’s USWDS monthly call. We'll be back next month to help celebrate Global Accessibility Awareness Day with a special guest and discussion on building accessible civic spaces. This is going to be a good one! Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

And if you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Have a great day, and a great April, and we'll see you in May!

{{< /accordion >}}

Web Components have been mentioned in a lot of recent discussions about the future of the U.S. Web Design System (USWDS) . What is this technology, exactly, and what can it mean for the design system?

In this session, the USWDS team will:

* Explain Web Components technology in plain language
* Discuss the value of bringing modern web technologies to the design system
* Explore how using a new technology can affect any user of the design system, not just developers

**This event is best suited for:** All design system users (all levels). This will be a technical discussion, but anyone can attend as it requires no specialized knowledge.

Speakers
* **Dan Williams** **-** Product Lead, USWDS
* **James Mejia** **-** Developer, USWDS contractor


## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@gsa.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
