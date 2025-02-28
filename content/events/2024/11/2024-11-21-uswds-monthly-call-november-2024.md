---
title: USWDS Monthly Call - November 2024
deck: The next generation of the design system
kicker: USWDS
summary: The U.S. Web Design System (USWDS) team will share their vision for the design system as a product, including USWDS Web Components and other new things the team expects to deliver in 2025. 
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItfumsrzwiGRcqviGv4fcTLhgHS8ClFEU
date: 2024-11-21 14:00:00 -0500
end_date: 2024-11-21 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - human-centered-design
  - usability
  - user-experience
  - open-government

slug: uswds-monthly-call-november-2024

# zoom, youtube_live, adobe_connect, google
event_platform: zoom
youtube_id: kFLPOKKEKRE
youtube_title: "The next generation of the design system"

primary_image: 2024-uswds-monthly-call-nov-title-card

---

## View the slides and read the transcript.  

{{< asset-static file="uswds-monthly-call-november-2024.pptx" label="View the slides (Powerpoint presentation, 5 MB, 109 slides)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Transcript for November 2024" icon="content_copy" >}}**Slide 1.** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for November 2024. Y'know it's almost Thanksgiving, so let's just do a classic Thanksgiving-themed USWDS logo in oranges, gold, and brown. Fall foliage. Nothing too clever!

**Slide 2.** My name is Dan Williams, he/him, and I'm the USWDS project lead — here on-screen is my avatar: dark hair, blue sweater, collared shirt, glasses —today real-life me is wearing an orange, red, blue, and gold plaid shirt and some green socks, about green-cool-50.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [**designsystem.digital.gov/about/monthly-calls**](http://designsystem.digital.gov/about/monthly-calls). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at Digital.gov. We've also started collecting each month's Q&A as a GitHub discussion linked from the monthly calls page. We've posted a link to our monthly calls page in the chat.

We'll be posting other links and references into the chat as we go along. And today we're continuing something we've been doing the last couple calls regarding chats and questions. Today, in your Zoom window you'll find a Q&A button in addition to a chat button, possibly under a "More" button. We'd like to encourage folks to ask questions in the Q&A section instead of the chat. Take a sec now to find the Q&A section and open it up. If any member of our team can answer your question in the Q&A section, we'll do so. Otherwise, there'll be some time for questions and answers at the end of the hour. But the chat's *still* nice too! Let's use the chat for introducing ourselves, or for any other comments or discussion. Be sure to introduce yourself in the chat — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide those discussions during the main presentation. You can reopen them later during the Q&A session at the end of this call.

So, thanks! And, with that, let's get started!

**Slide 3.** So what's our agenda for today?

Well, first we'll check out a couple of featured sites and then a handful of —* dare I say* — exciting product updates. And then we'll get into it, building off of last month's values presentation into more of what the heck we're actually doing as we look ahead to the next generation of the design system.

**Slide 4.** Let's kick it off with a couple of featured sites!

**Slide 5.** First, [**ohss.dhs.gov**](http://ohss.dhs.gov), a site for the Office of Homeland Security Statistics. OHSS's mission is to foster transparency and data-driven homeland security decision-making by analyzing and disseminating timely, objective Department of Homeland Security data and statistics. The OHSS homepage is simple and solid, with a set of three cards up in the hero section, showing:

- Information related to immigration,

- Coast Guard maritime response activities, and

- Emergency and disaster deployments.

The palette is DHS blue and white, with that nice USWDS banner at the top of the page.

**Slide 6.** Related to the gov banner, our second featured site is [**standards.digital.gov**](http://standards.digital.gov) — a new site for the new Federal Website Standards. Federal website standards will help agencies provide high-quality, consistent digital experiences for everyone. The standards cover common visual and technical elements and reflect user experience best practices. We hope to talk more about Federal Website Standards with the Standards team next month, but for now, we can just enjoy the simple content-forward homepage, with a clean nav, a gov banner, a light blue hero section, and the words "Deliver consistent digital-first experience for the public."

**Slide 7.** Great work y'all. Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8.** Now for some product updates.

**Slide 9.** First, we're on a new monthly release cadence for USWDS releases, and our November release is USWDS 3.10.0.

**Slide 10.** A few notable updates to USWDS 3.10.0:

- The first is one I'm super happy to get out the door to folks. Based on some findings from usability testing, we updated the order of combo box search results. It's a bit of a small thing, but it has a big impact. The component now displays options that start with the query string at the top of the results list, *followed* by options that *contain* the query. In the old Combo box, users were confused when they searched for a string like "ma" in a group of state names and got "Alabama" as the first result — instead of Maine, Maryland, and Massachusetts. Now, you'll still get "Alabama," but it'll come after all the entries that start with the string. Nice!

- We also improved the default hint text in the Time Picker.

- And, we fixed a bug that caused file input image previews to break when a Content Security Policy is enabled.

And we've also included a few other small fixes you'll want to check out.

**Slide 11.** We're working on a December release now, as well as a 1.2.1 release to USWDS Compile that'll help silence some of the distracting deprecation warnings we've been seeing in our Sass compiles. We're also working to update our code to address those warnings, but it's a little bit complicated! So look for an update to Compile coming soon.

**Slide 12.** We've also released three new Accessibility test pages: Memorable date, Time picker, and File input. We're rolling right along with accessibility test pages, the next up are Collection, Summary box, Icon list, Button group, and Process list.

**Slide 13.** Next, one that's been a long time coming, and a few months since we previewed it. One of our most requested items: a USWDS design kit for Figma.

Our initial Beta version of this new design kit is out now, and you can find it at [figma.com/community](http://figma.com/community) and by searching for USWDS, or by following [the link in the [chat.](https://www.figma.com/community/file/1440921849343185329/uswds-design-kit-beta)

**Slide 14.** We're considering this a Beta, since it needs a bit more exposure to real-world usage, and probably a bit of adjustment before it's fully ready for production use, but it's ready for its public debut I hope. As we showed a few months back, this design kit brings the complete token library into the software as variables. We've also added a ton of documentation, even though I'm sure there's plenty of room for improvement.

**Slide 15.** This includes 42 USWDS components built with USWDS design tokens, smart layout, custom properties, complete examples, and all the bells and whistles.

**Slide 16.** So, as I said, it's in public Beta now and available for anyone to download now. I'm really happy to finally have it out in the world, and if there's interest, perhaps we can do a deeper dive into using the design kit sometime in the new year.

**Slide 17.** In the world of USWDS Discussions, we've got a couple of things to highlight this month. We've got an active discussion about a Spinner component proposal, and an active pattern proposal about pre-filled information, as well as a discussion about using USWDS in a Next.js app with Server Side Rendering, and another about inclusive experiences beyond visual design.

We'd love to hear from folks on our accessibility discussion for November: An “autocompletely” useful WCAG technique!

And we've also posted the transcript to October's monthly call, including answers to questions we didn't get to in the call. Bonus content!

**Slide 18.** As we've been saying for the last few months, next month will be the last month for the V1 documentation site before its final sunsetting, so be sure to stop by and say your goodbyes before the end of the year.

**Slide 19.** And finally, one important change about our GitHub repos and contribution that we'll get into our contributing docs soon, but wanted to tell you all about it first. We're implementing some new controls in our repos, and one of the new requirements is *signed commits*. If you've ever looked at a GitHub commit timeline and seen the commits with a "verified" label, that's what a signed commit looks like. It's just one way we can be more proactive in understanding the provenance of the code in our project — which is notably important to public, distributed, and open source projects like ours. We're posting the instructions for adding [GitHub code signing in the chat](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits). Notably, I believe any commits initiated through the GitHub web interface will be signed by default, so that can be a good option for simpler contributions and you don't want to learn how to set up SSH or GPG on your computer. If you don't have signed commits, we can't merge your code, so set it up if you haven't already. It's just a good practice.

**Slide 20.** So, today, we wanted to spend some time talking about the next generation of the design system. We've spent a bunch of time talking about our work with Web Components, but what does that mean for the rest of the codebase and what we're planning to deliver next Spring?

**Slide 21.** Joining me today are my colleagues Matt and Anne. First, Anne Petersen, our Experience Design Lead. Anne, can you introduce yourself and give a self description for anyone audio-only?

Anne: Absolutely. I’m Anne, my pronouns are they/them, and visually I’m white, with short brown hair — the front’s a bit mussy and the sides *very* short — with small glasses and headphones, in a mustard yellow flannel. Back to you, Dan.

Dan: Thanks Anne! Nice flannel!

**Slide 22.** Next, I'd like to introduce Matt Henry, our Engineering Lead. Matt, can you introduce yourself and give a self description for anyone audio-only?

Matt: Hello! Thanks Dan. I’m Matt, my pronouns are he/him and I’m a bald white man with a close-cropped white beard, glasses, and today I’m wearing a solid dark green shirt. Back to you, Dan.

Dan: Thanks Matt! We'll hear from Matt and Anne in a sec, but first I wanted to set the stage with a little bit about:

**Slide 23.** Tension and change.

**Slide 24.** We've talked a lot in the last year about the inevitability and the importance of change from the perspective of what a design system is meant to support.

**Slide 25.** We're trying more and more to be practical but also to take a long view of the design system — trying to imagine both the design system and the teams that use it many years down the road. Does thinking about using USWDS in 10 years (or 20 years?) sound good? Does it still sound vital? Or does that sound like a terrible nightmare? A millstone? Why? What might that tell us about *what* the design system should be, and *how* it should be?

**Slide 26.** In a positive view of the future we see our key to success as adaptation. That's why it takes the lead in our product values: **Design is adaptation**. We just have to continue to make it work.

**Slide 27.** And how we make it work is by helping you adapt, helping you do design work, and trying to learn from that.

**Slide 28.** And that certainly sounds nice. But perhaps the reality of adaptation is *tension* — conflicting expectations, red in tooth and claw.

**Slide 29.** There's a tension between difference and commonality, between individual identity and group identity. How much should our sites and services look and behave like one another? When does commonality positively affect user experience? When does it negatively affect experience?

**Slide 30.** Similarly there's a tension between customization and configuration. What constraints are healthy constraints? Do we all have to play by the same rules?

**Slide 31.** And there's a tension between present needs and future needs. In the present we want that faster horse. And we want the thing done. We don't *care* about tech debt. Not yet at least. *The future is unknowable, right?*

**Slide 32.** Tension can read as negative, as simply stress. But what if we just add the word "dynamic" — still stressful, but maybe  productive? This tension can sometimes be a tool.

**Slide 33.** When we're thinking about the future of USWDS, we have to engage with these tensions because we know we have to change, and keep changing. We know that the USWDS codebase is showing its age. In fact, 2025 will be the design system's 10th birthday.

**Slide 34.** When we think about the future of USWDS we think about what folks need to know to *use* USWDS. Are these the skills folks still want to learn? What's part of our core identity? Sass? BEM? HTML? CSS?

**Slide 35.** When we think about the future of USWDS we want to keep a good tangible goal in mind, like this variant of our polestar: Make it easier to adopt the design system and stay up to date.

**Slide 36.** And as we listen to folks, we understand that folks *use* the design system in all kinds of ways.

**Slide 37.** Whose way.. is the right way? Who's to say?

**Slide 38.** And is there a way to plot a path ahead that acknowledges all the tensions and impossibilities, but has an opinion and isn't just gormless and wishy-washy. Anne, how can we do this?

**Slide 39.** Anne: When we think about shaping the future of our design system, it's worth considering design systems as applied philosophy.

**Slide 40.** They’re our values made tangible.

**Slide 41.** They’re our values made *practice*.

**Slide 42.** They’re how we *perceive* the world and make our corner of it better by centering the people we serve.

**Slide 43.** We learn more about both broad layers of people that use the design system — you, the teams who make use of what we make, and the public, or the people using what *you* make out of what *we* make. In the process of learning about *both*, we adapt and evolve. Each of those changes inform the *next* changes. And all that we’ve learned informs our supporting core concepts like mission, vision and polestar.

**Slide 44.** Our mission: Shaping the future of government services.

**Slide 45.** Our vision: Empowered and supported digital service teams. Familiar and easy-to-use digital services.

**Slide 46.** Our polestar: We help government teams align, design, and keep their websites and services up to date.

**Slide 47.** And these lead to our values. On the product side: that design is adaptation, compliance is our baseline, we strengthen connections, get to easier earlier, and need to be a good steward.

**Slide 48.** On the engineering side: we embrace the platform. We support user experience with developer experience. We remember that we’re a layer. And we write plain-language code. These are core concepts we can rely on, and refer to when making decisions. The design system becomes our values made tangible.

**Slide 49.** So, to go back to basics to think about all of this — this way to support *everyone* and build in a logical, scalable way— I went back to the original — the first — webpage of the World Wide Web.

**Slide 50.** Like the USWDS, the World Wide Web itself is in the public domain. Hey, us too. In accordance with the values that we just set out. In 1993, CERN allowed *everyone* to use the World Wide Web, created there.

**Slide 51.** Here’s the memo from CERN — though I wasn’t intending for you to read it here — it’s got pretty small memo text with some red seals. It notes here that “permission is granted for anyone to use, duplicate, modify and redistribute it.” And CERN of the modern day notes that that page reflected [CERN’s core values of *open collaboration for the benefit of society*](https://home.cern/news/news/computing/30-years-free-and-open-web). Which sounds a lot like a mission statement too.

**Slide 52.** Here’s what that original webpage looked like. Plain text, links. Simple.

**Slide 53.** Well, actually [more like *this* at the time](https://line-mode.cern.ch/www/hypertext/WWW/TheProject.html). Here, you can see the page building, line by green line on its black background, in the line-mode browser simulator that CERN created for the 30th anniversary of the World Wide Web’s creation. “What’s out there?” is the first kind of menu item here.

**Slide 54.** This original webpage was fairly meta. It referenced itself, self-documented itself, and provided entry and exit points. It contained information about itself, and how to do what *it* does, so it could be built upon and evolved upon, into the future. And, to some extent, that’s the basis of design systems in general, and how they also work. It also shows how your values and mission make your system more anchored. Much like how we’re working.

**Slide 55.** So my point here is that what *we’ve* done, in comparison, also has a throughline to what we intend to do and beyond. It makes sense. It builds upon itself.

**Slide 56.** I’m not trying to say we’re *just* like that original World Wide Web itself — that sounds a little hubris-y — but we *do* share a belief in our work being open and available and flexible and remixable, modifiable, replaceable, exchangeable — ultimately, *modular*. The flexibility to pick and choose what you use and don’t, alongside what you build to be more specific to your use case. As opposed to the kind of closed garden, only-one-way-to-do-it kind of tendency that’s the case on the web in many places. The design system needs to be operable in as many places as possible, so staying closest to the web platform, for example, is our best call to be future-facing. *And* we think that will help you, in using it.

**Slide 57.** So you can *anticipate* some of the decisions we might make if you know our values. If you know one of our values is staying as close as possible to the basic foundation of the web, you can probably guess where we’re going, and make your own decisions accordingly, even if we haven’t necessarily made that call yet. But also certainly you can just ask us. That’s what we’re here for every month.

Now, to break down the pieces of the decisions we’ve made recently, outlining the shape of this next generation of the system, and more importantly to bring it all back together, I’m going to pass it back over to Dan.

**Slide 58.** Dan: Since we're bringing it all back together, I'd like to call the next section United.

**Slide 59.** To understand where we're going, it'll be helpful — for us and for you — to understand what we're hearing in the many conversations we've had with teams and individuals about adopting USWDS and about Web Component technology.

**Slide 60.** As we've covered in extensive — perhaps tedious — detail over the last year, we've talked about how teams integrate the USWDS HTML/CSS spec into application templates, and how the complex and brittle structure of this core codebase can lead to a lot of downstream effort manually keeping up-to-date with changes from release to release. This is the story of USWDS Web Components: how we intend to both simplify a component's API surface and deliver a component that requires less maintenance and fewer dependencies to integrate into a project.

**Slide 61.** And we've also talked about the tension and tradeoffs involved in using USWDS Web Components: the benefits we've mentioned — simplicity and maintainability — come at the expense of *flexibility*. Because Web Components do more of the work themselves, they leave fewer choices available to designers and developers. They have opinions — they're more prescriptive about what they can and can't do, about what functionality they support — and they may not be *your* project's opinions. In some cases, this can mean that the component cannot do what you need it to do, or what your USWDS-based project code currently does!

**Slide 62.** For all its complexity, traditional HTML/CSS has an incredible amount of power in its customizability. And this customizability has been at the core of our product's value proposition since the beginning. "Adopt and adapt" is one of our long-time messages and one that's central to our product value of "Design as adaptation."

**Slide 63.** Web Components make this value proposition more complicated.

**Slide 64.** When we talk to teams, this is generally what we hear: "A simpler way to use USWDS is great. A simpler way to do *what we need to do* is great. But a simpler way *to do something different from what we're doing* is not great. In fact, it would be a big big problem." Web Components are great until they aren't great —* then* they're the problem. They're a potential blocker, and a bottleneck, and countless time-consuming discussions and arguments up and down the product and agency  and given the choice, teams may just not use them. And that’s understandable. The mission and the audience comes first.

And these are teams that currently use USWDS HTML/CSS. These are mature teams maintaining mature products. These are teams that value their ability to use human-centered design to meet the needs of their audience. Which I hope we all try to do.

**Slide 65.** When it comes to shaping the future of government digital services, we already see the potentially existential risk of building a design system that cannot change and adapt. We see it from both sides: in the cascading maintenance burden of making necessary breaking changes to our core codebase, and we see it in the opinionated constraints of a simplified solution stifling necessary adaptation.

**Slide 66.** Since some amount of effort is necessary on both paths — and both paths are useful — for us, the best resolution to this situation is to continue to improve *both* ways of using the design system, reducing the costs and risks of each over time. And on a case-by-case, component-by-component basis, teams can make the call about which set of costs and constraints is right for their team and their project.

**Slide 67.** So, teams have asked, as we've moved toward Web Components, what's going to happen to the USWDS 3 codebase? Some of you have asked that question in our Q&As! Well, not only do we plan to continue to maintain it, but we expect **a long-term technical integration between USWDS Web Components and USWDS core HTML, CSS, and JavaScript**. Specifically, we see Web Components as something of a simplified API wrapper around USWDS core HTML. When you use a USWDS Web Component, it should *render* USWDS core HTML/CSS to the browser. In this model, you can't have the Web Component without *also* bringing along core for the ride.

**Slide 68.** So, we expect to see *both* products co-evolving together into the foreseeable future.

**Slide 69.** And as we take a look at how this would work, I'd like to try to simplify the discussion with some new terms. We're now talking about *two* interrelated USWDS products: Web Components–based USWDS components *and* our non-Web Component, traditional HTML/CSS/JS codebase of components for the web, the set of components we now call USWDS 3. That's a lot of words, and most of them are "web" or "component." And they're both USWDS. 

**Slide 70.** So, from now on, we’re going to call the Web Component product **USWDS Elements**, or just Elements.

**Slide 71.** And we’re going to call the non-Web Component codebase **USWDS Core**.

**Slide 72.** The key benefit of USWDS Elements is simplification and encapsulation — they're like a little seed, allowing folks to take USWDS Core code anywhere and add it to a site with nothing more than minimal markup and a JavaScript file, like a little USWDS Johnny Appleseed. No necessary compiling, less code on the page, and fewer user-facing markup changes over time.

**Slide 73.** You could imagine adding new styling configurations to an Elements component that might *not* affect Core, like a component-specific way to add a custom color or border-radius, which would be a trivial change using either custom CSS or a utility class in Core.

You could imagine making a structural change to Core that would not affect Elements, like potentially changing the markup of a Core Accordion to a summary/details pattern.

And, you could imagine changes that could affect both, like adding a new content element into a link that might help indicate the type of link or information about the size of a file for download. In that instance, both Elements and Core would have to change.

But, wherever they go, they will go together.

**Slide 74.** The creation of Core and Elements as two distinct but integrated products means — ironically — that we don't have to bifurcate the product from a documentation perspective. There's no old USWDS and new USWDS. While there are distinctions in the Elements’ API interface, they're both doing the same kinds of things under the hood. We introduce Core and Elements, but maintain a united USWDS in the docs. This united USWDS will be important because we see many ways to use USWDS: only Elements, only Core, or what we consider most common, especially earlier in our release cycle: a mix of both.

**Slide 75.** This relationship will also affect how we use design tokens in the codebase. USWDS Core is built on Sass functions and mixins. USWDS Elements needs to incorporate CSS Custom Properties to work natively. And teams will want to use whichever flavor of token makes the most sense for them — possibly both in the same product. Not to mention integrating tokens into non-CSS environments like Figma variables and native apps.

**Slide 76.** This leads us to a third new USWDS product: **USWDS Tokens**.

**Slide 77.** USWDS Tokens is the logical endpoint for our work converting tokens into a canonical JSON data format. In the new model, Sass, CSS Variables, Figma, and other outputs would be considered *targets* for token data, and we'd be developing plugin *converters* for the JSON data to fit those targets. Elements and Core would both consume USWDS Tokens but consume different *output* from that single source. You could even imagine some teams using USWDS Tokens, but *not* using either Core or Elements — only for styling in a custom codebase — similar to how one might use a product like Open Props.

The USWDS Token data itself wouldn't change very frequently, but there'd be plenty of other opportunities for improvements, like new converters or perhaps performance-focused subsetters that output only the tokens necessary for a specific USWDS configuration.

USWDS Tokens could also allow for long-requested features like JSON or YAML–based USWDS configuration files. Tokens need the opportunity to evolve separately from something CSS- or Sass-specific.

**Slide 78.** So, our new product model so far features **USWDS Elements**, **USWDS Core**, and **USWDS Tokens**. There are all kinds of modular functionality you could imagine as *additional* standalone integrated products — for instance; we're currently discussing how USWDS might integrate with internationalization via translation objects (called PO files) for common microcopy strings. But there's a fourth product we see the opportunity to introduce alongside Elements, Core, and Tokens next year.

**Slide 79.** And that's **USWDS Utilities**.

**Slide 80.** We introduced utilities — static, token-based single-purpose classes used for rapid prototyping and targeted stylistic interventions that don't require modifying CSS — in USWDS 2.0. And they're another part of the product that nobody wants to see go away as we *also* pursue Web Component-based USWDS Elements. But utility classes in USWDS are a little clunky. They were a nice addition that still makes a lot of sense but are significantly less sophisticated than purpose-built utility class libraries like Tailwind. They could be more flexible, more specific, more performant, and faster to compile. If you've seen the USWDS [Tailwind project](https://uswds-tailwind.com/) developed by a community member, you see what a more modern version of USWDS Utilities could do. More and more, we're starting to see utilities as conceptually similar to USWDS Tokens — something that's primarily *data*. And just with tokens, there's a lot of power in treating that data as a *source*, and specific outputs as *targets*. 

You could imagine USWDS Utilities compiling from JSON to exactly the utility classes we now support, but separate from the USWDS compile process. You could also imagine combining USWDS Utilities and USWDS Tokens into a config that uses a third-party like Tailwind to do the utility class building — as in USWDS Tailwind. 

**Slide 81.** Treating the USWDS monolith as separate interrelated products will allow each domain to evolve at its own pace. We don't know yet which will move fastest or how, but we know that we want to be clear about how each is changing, reflecting our value of working in the open.

**Slide 82.** This is why, as we move to this model, we want to lean into semantic versioning. Communication is going to be critical for teams to know what's changing and how it will affect them. When one of these products has a breaking change update, we should convey that information in the version number. You shouldn't have to pore over each set of release notes to know whether you need to pay attention to an individual release — the version number should tell you.

We expect Elements to have fewer breaking changes than Core as we move forward. We expect Tokens and Utilities to have relatively few breaking changes once they get established. This should *also* be reflected in their versioning. You’ll see our major version numbers go up faster in some USWDS products than others.

**Slide 83.** So, what is USWDS 4.0? The simple answer is that there will be no USWDS 4.0. At least, nothing called "USWDS 4.0."

**Slide 84.** Instead of USWDS 4.0, we're introducing this new model of USWDS, four interrelated products:

- **USWDS Core 4.0:** The next version after USWDS 3.x — the core HTML/CSS that powers our components.

- **USWDS Elements 1.0:** A simplified API wrapped for USWDS Core, encapsulating USWDS components, starting with those directly connected to Federal Web Standards.

- **USWDS Tokens 1.0:** The USWDS visual language, able to target multiple outputs across devices and platforms.

- **USWDS Utilities 1.0:** A powerful styling and prototyping tool for use with or without USWDS Core.

  **And it's all just USWDS**, a new generational model that, instead of USWDS 4.0, we're internally calling United.

**Slide 85.** This United model of USWDS has incredible promise for supporting multiple ways of working, multiple models of team collaboration and modes of building, and multiple types of simultaneous change, but it will require real work not only in communication, but in structuring and scoping our work. And for more on that, I'll pass it over to Matt!

**Slide 86.** Matt: Thanks Dan, this is Matt. Let's talk about how we're going to make this work.

**Slide 87.** So we're still working out details, but what Dan outlined is the big picture. On the engineering side, we're thinking through how teams will be using a combination of these products, what infrastructure and refactoring we need to support interoperability between these upcoming USWDS products, and what we'll prioritize as we think about getting it all done.

**Slide 88.** From the usage perspective, we imagine the most common scenario is mix and match — with teams selecting the product mix that’s best for their team skills and their product. We tend to think that teams will want to evaluate Elements first.

**Slide 89.** We're designing Elements to be a starting point. If an Elements component meets your team’s needs, then you’re good to go. With Elements, we’re working on striking the right balance between power and ease of use so that these components should work for lots of teams a lot of the time.

**Slide 90.** For teams comfortable with the functionality of an Elements component but have an existing infrastructure based on a different component API, we're building Elements to be extensible and interoperable with any Web Components library. Teams can add a custom API wrapper on top of the Elements component to help it better fit into an existing codebase, and they'll still be able to take advantage of the improved stability and maintainability of the USWDS Element under the hood.

**Slide 91.** But just in case your project needs *more* configurability than an Elements component offers out-of-the-box, you can always “eject” to the Core component and customize it as much as you need, using the same ways you’re already used to. Many teams will be able to use USWDS Elements for entire projects, but because Elements and Core both use web standard technologies, you’ll be able to mix and match on a component-by-component basis.

Supporting this way of working will require a fair bit of refactoring under the hood of what we’re now calling USWDS Core.

**Slide 92.** Right now, even though USWDS is broken up into several packages, users still have to import pretty big chunks of the design system at a time in order for things to work as expected. We need to make the Core codebase significantly more modular so that you’ll be able to add only the components you need (whether those are Core components or Elements) and make sure the scripts and styles required to make those components work are as lightweight as we can make them.

**Slide 93.** Part of this move towards greater modularity involves a slight conceptual reframe in how each product in the USWDS family relates to each other. As Dan alluded to earlier, I think of these relationships as being between tools and targets.

**Slide 94.** Right now, a lot of the logic for how styles, tokens, and utilities work is implemented in Sass. Our team authors styles in SCSS, and that makes the sass dependency a critical one for many teams that use USWDS, and it also imposes yet another dependency for some kind of tool to build that Sass when you need it. You might use USWDS Compile for this, or you might have another build tool that does this for you.

**Slide 95.** Eventually, we want to reorient that relationship a bit. At some point in the medium to long term, we’ll author styles directly in web standard CSS. This goes back to some of what we talked about in the October Monthly Call regarding leveraging the web platform.

**Slide 96.** But, I hasten to add, this doesn’t mean we’re going to stop supporting Sass. If you like your Sass, you can keep your Sass. However, one outcome of this reorientation will be that Sass/SCSS is one target among many of the USWDS Tokens package. So, Tokens will have the existing design tokens in a more technology-agnostic format and that will be able to be output into multiple other formats. So, Tokens is one tool that can have many possible targets, such as Sass variables, CSS custom properties, potentially even utility classes, or other formats such as colors for native mobile operating systems.

**Slide 97.** How is this change going to affect you? Importantly, we don't want to introduce significant breaking changes as we move from USWDS 3 to Core 4.0. We believe a lot of the necessary refactoring will not have an impact on you. We won't be changing class names or markup in this version bump — or, if we do, we'll keep it very tightly scoped.

**Slide 98.** Since one of the goals of USWDS Elements is to reduce the development impact of breaking changes, we want to make sure we introduce an Elements version of a component before we consider making significant breaking changes to it on the Core side.

**Slide 99.** Continuity matters to us. The code you rely on will still be here. We’re just working to make things easier, more modular, and less opinionated for you and your teams. There will be changes and there will be bumps, but our new structure is meant to minimize them.

**Slide 100.** So what can you expect going into 2025?

We’ll work to release what we can as soon as we can. We’re biased toward shipping early, so you can test sooner rather than later.

**Slide 101.** We’ll work to keep things clear and as simple as possible. We intend that to be our method of operating going forward in the interest of our value of working in the open.

We’ve started documenting big changes and the rationale behind them in Architectural Decision Records in the uswds-proposals repository. You can see the ADRs for the choice to build with Web Components as well as the choice of Lit as the library we’re using to help us author those components. Going forward, we’re going to keep adding ADRs for consequential choices we make, including the ones we’ve been talking about on the call today.  

And that's how we're thinking about this new generation of USWDS from an engineering perspective. Back to you, Dan.

Dan: Thank you, Matt. 

**Slide 102.** I'll finish with a little about what to expect in 2025.

**Slide 103.** It's interesting- this is both not so much of a big change and also a really big change for USWDS. Talking with teams about Web Components made a big impact on how we're approaching this transition. Thanks for all you've shared so far and probably for all you'll continue to share as we move forward. I don't think our current outcome is one I would have predicted going into the process!

I think we're really focused on the future these days, and trying to prepare for the reality of change, as well as how we can help prepare *you* for that reality also. This shifts our focus toward sustainable infrastructure changes and a model of the design system that we believe will be both more modern and more resilient.

**Slide 104.** But it *is* a priority shift. We're going to be putting more and more time into the product model and interoperability and less time into more new Web Components. But I think this is because we're committed to making this work long-term and work well release-by-release.

**Slide 105.** So, as we look forward to our target date of Spring 2025, here's what we hope to deliver:

- **USWDS Elements 1.0:** A small selection of components, prioritizing those aligned with current pending Federal Website Standards and draft Standards, which, as of now, include Banner, Identifier, and Search. Beyond that, we'll look to launch with a set that begins to be usable for forms. Since we're focusing on simplification for USWDS Elements, we're trying to launch with the most simple components, which teams typically don't need to configure as much — like form fields instead of header and navigation elements.

- **USWDS Core 4.0:** Focusing on interoperability with Elements and Tokens, without affecting existing styles, markup, or Sass-based tools.

- **USWDS Tokens 1.0:** A Style Dictionary-based collection of USWDS design tokens that can power existing Sass in USWDS Core and any token-based needs for our launch of Elements.

- **USWDS Utilities 1.0:** Likely launching with a straightforward port of the existing Sass-based system into a standalone repo.

- **Website and documentation:** Incorporating new product information, with a strong focus on improving how we communicate what's new, what's changing, and what's ahead. We want our website to be a practical way to get up to speed on what's going on with USWDS, in addition to all our current guidance, docs, etc.

**Slide 106.** And that's where we see the next generation of the design system, starting in Spring 2025: Not Old USWDS and New USWDS, rather a united USWDS moving forward. And with that, let's get into some Q&A.

**Slide 107.** Audience Q&A

**Slide 108.** Dan: Thanks for joining today’s USWDS monthly call. Next month, we'll be talking about Federal Website Standards.

Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we appreciate the extra time it takes you to provide it.

And if you have a question we couldn't answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be there after the call to answer questions.

Have a great day. We'll see you in December!
{{< /accordion >}}


This month, join the U.S. Web Design System (USWDS) team as they lay out their vision for the direction of the design system.

In this session, you’ll learn about:

- What the USWDS team is currently developing and why it's important
- What the team expects to deliver in 2025
- The design system’s shift toward modularity, and the future relationship between the existing codebase, design tokens, utilities, design kits, and Web Components
- What these changes mean for you as a design system user

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
