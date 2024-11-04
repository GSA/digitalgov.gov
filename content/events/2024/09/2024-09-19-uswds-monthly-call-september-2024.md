---
title: USWDS Monthly Call - September 2024
deck: The landscape of Web Components
kicker: USWDS
summary: The U.S. Web Design System team will share their exploration of Web Component-based design systems and best practices.
event_organizer: Digital.gov
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsdemgrT8tHZvOdHYHRTKhveBs1rHPdBc
date: 2024-09-19 14:00:00 -0500
end_date: 2024-09-19 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - design
  - human-centered-design
  - software-engineering
  - open-source

slug: uswds-monthly-call-september-2024

# zoom, youtube_live, adobe_connect, google
event_platform: zoom
youtube_id: E826mR1B6_Y
youtube_title: "The landscape of Web Components"

primary_image: 2024-uswds-monthly-call-sep-title-card
---

{{< asset-static file="uswds-monthly-call-september-2024.pptx" label="View the slides (Powerpoint presentation, 6.7 MB, 75 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for September 2024" icon="content_copy" >}} **Slide 1:** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for September 2024. It's getting a bit cooler out here in the pacific northwest. This month we're celebrating the fall equinox this weekend with a USWDS logo in green, white, and blue like the Earth. And at least around here, I'm seeing more and more pumpkins around town, both on stoops and in stores, so here's a pumpkin-colored USWDS logo!

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS project lead. Here, on-screen, is my avatar: dark hair, blue sweater, collared shirt. As of this month, the avatar now has glasses — matching real life me, who's wearing a blue shirt today, green socks, and red slacks, approximately red-60.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at Digital.gov. We've also started collecting each month's Q&A as a GitHub discussion linked from the monthly calls page. We've posted a link to our monthly calls page in the chat.

We'll be posting other links and references into the chat as we go along. Today we're trying something new when it comes to chats and questions. Today, in your Zoom window you'll find a Q&A button in addition to a chat button, possibly under a "More" button. We'd like to encourage folks to ask questions in the Q&A section instead of the chat. Take a second now to find the Q&A section and open it up. If any member of our team can answer your question in the Q&A section, we'll do so. Otherwise, there'll be some time for questions and answers at the end of the hour. But the chat's _still_ nice too! Let's use the chat for introducing ourselves or for any other comments or discussion. Be sure to introduce yourself in the chat — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide those discussions during the main presentation. You can reopen them later during the Q&A session at the end of this call. So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? Well, we've got a number of things to show off, largely influenced by community suggestions. We’ve got a couple new sites to feature, a few quick product updates,and then we'll talk about what we're seeing, learning, and thinking about the Web Components landscape. Then we should have time for a bit of Q&A.

**Slide 4:** So let's get into it with today’s featured sites. There are a couple exceptional examples today.

**Slide 5:** First, [pbgc.gov](https://www.pbgc.gov), a USWDS-powered website for the Pension Benefit Guaranty Corporation. Since 1974, PBGC has protected retirement security and the retirement incomes of over 31 million American workers, retirees, and their families in private sector defined-benefit pension plans. The PBGC homepage features an immediately recognizable USWDS-themed header and navigation in red, white, and blue. The hero image is a complex texture of charts and graphs, with the words FY 2023 Projections Report.

**Slide 6:** And also, a bit closer to home, [tts.gsa.gov](https://tts.gsa.gov), a new website for the Technology Transformation Services, here at GSA. TTS applies modern methodologies and technologies to improve the lives of the public and public servants. They help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions. The TTS homepage shows a gray-blue hero section with an illustration of a diverse range of people using devices. The text reads, "Every interaction with the public is an opportunity to improve trust in government."

**Slide 7:** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8:** Now for a few product updates.

**Slide 9:** We were hoping to get USWDS 3.9.0 out last month, but it just didn't happen. It's much further along now, and I feel pretty confident that it's on track for the end of _this_ month.

**Slide 10:** As a reminder, here's some of [what's coming in USWDS 3.9.0](https://github.com/uswds/uswds/milestone/154).

- Fixes a tab order bug in the mobile header
- Fixes a keyboard/mouse interaction issue in date picker
- Improves performance of input mask
- Improves legibility of pagination links
- Adds ability to add custom breakpoints to utilities

**Slide 11:** We're also continuing progress with publishing accessibility test pages. We've got three new ones up on the site now: Checkbox, Radio button, and Combo box. We're posting links to these new pages in the chat, _and_ we're working on three new component test pages for next month: TK. So stay tuned for those!

**Slide 12:** Next, it's been a bit over five years since we released USWDS 2.0, and it's finally time to sunset the version 1.0 documentation site. We'd been keeping it around as an archive for the last couple years, but it's not really possible for us to keep it up in perpetuity, preserved in amber, especially while all across government teams are pushed to be extra intentional about the number of active websites they maintain. So, we've targeted the end of the year as a decommissioning date. Please say your goodbyes, and reach out at our email address, [uswds@gsa.gov](mailto:uswds@gsa.gov), if your team uses any aspect of the 1.0 site in your day-to-day work, and we can try to determine if there's anything we should keep before the site is only available via a resource like archive.org.

**Slide 13:** And finally, checking in on our public discussions. There’s a [new one since last month’s call, which is a proposal for Info or Follow](https://github.com/uswds/uswds/discussions/6047) as a sidebar or portion of a footer, along with a new pattern proposal. We should note we’re still working out the process for patterns to figure out how that should be different from component proposals. This pattern proposal is for [pre-filled information in a form](https://github.com/uswds/uswds/discussions/6053). We have an accessibility discussion about [how you’re all using the range slider](https://github.com/uswds/uswds/discussions/6063), and lastly, the summary of the [questions and answers from the August monthly call](https://github.com/uswds/uswds/discussions/6060).

**Slide 14:** Now, let's get into our main topic: the Web Components landscape. I know you have questions about our approach to Web Components and we do, too—lots of questions. As we start to make the big leap out of our legacy codebase and into the next generation of the design system, we want to take the time to understand the landscape of Web Components: how they're documented and used, primarily in design systems, but not exclusively.

From this landscape analysis, we can begin to identify not only trends and patterns but also aspects of implementations that we identify as particularly effective or notable. From that data, we begin to create a mental map of the problem space — one that will help us chart our own way through.

One note that we will be mentioning product names here and there. These are for reference only and are in no way an endorsement of the site or service.

So, to help talk about what we've found and what we find notable, I'd like to introduce a couple members of our team.

**Slide 15:** First, Matt Henry, the engineering lead on the USWDS team. Matt, can you introduce yourself and give a quick self description for anyone audio-only?

Matt: Sure thing. Hey, ya’ll, Matt Henry, based in Raliegh North Carolina, where the sun is finally coming out after a gloomy rainy morning. I use He/Him pronouns and as Dan, said I’m the engineering lead for the design system. I’m a white man with glasses, a close crop beard and bald, wearing I think the same red and gray shirt I wore for last month’s call.

Dan: Thanks Matt!

**Slide 16:** I'd also like to introduce Jacline Contrino, our UX researcher, and a contractor on the USWDS team. Jacline, can you introduce yourself and give a quick self description?

Jacline: Sure. Hi everyone, I’m Jacline. I use she/her pronouns and today I’m wearing a pink and white striped button-up shirt and big gold hoop earrings. I have shoulder length brown curly hair.

Dan: Thanks Jacline! Why don't you take it from here and talk about what we've been doing?

**Slide 17:** Jacline: Thanks Dan. Wouldn't you know that Web Components are a big topic? And we have a lot of questions and things we want to learn!

**Slide 18:** For instance - how do we keep government teams’ needs in mind with what we’re building? What kind of **team structures**, tech stacks, and resources are you all working with?

What does good **documentation** look like? What are the key things we need to get right?

What are some of the key ways Web Components are **structured**? How does data and content get into a Web Component? What models do they follow? How flexible can they be? And how are they distributed and installed?

And **performance**: How fast do they load? How much code do they require? How are teams developing Web Components that are resilient and stand up to stress?

**Slide 19:** Those are just a few of our questions — and since it’s nearly impossible to answer all of them with a single research approach, we’re using several methods, such as:

- A **landscape analysis** of design systems that offer Web Components. What are other design systems doing and what might we want to adopt?
- A **survey** to gauge government team size, staffing, tech stacks used, familiarity with certain programming languages, and more.
  **\*Discussions** with teams that are already building with Web Components.
- Doing one-on-one **interviews** for more in-depth and technical conversations with experts to learn about their experiences and lessons learned.
- And finally, the **beta program** itself, and the feedback and issues you provide.
- We’re nearly done with the landscape analysis and have completed the survey. We’ve started interviewing folks individually and will continue to do that for the next few weeks.

**Slide 20:** So, let’s talk about what we found with our “Government teams and tools survey.” We sent out a survey last month to gauge team structures, resources, and technology of government digital or product teams.

**Slide 21:** First of all, thanks to all of you who may have filled that out — we got a great response! It’s important to us that we understand your teams and how you work, so we were delighted that so many of you filled it out. We had a total of 115 responses. Over 50 different agencies were represented in the survey which was fantastic.

**Slide 22:** Let’s talk about what we found with digital product team structures first.

**Slide 23:** The size of teams tends to be on the small side. About half of respondents said their team had between 3-10 people. But surprisingly, nearly a quarter reported having large teams of over 20 people. Most teams report having 5 or fewer developers. And the same goes for designers. Surprisingly, about one-in-five respondents say they don't have a developer on their team.

**Slide 24:** Even so, when we looked at all the roles people reported having on their digital or product teams, Developers were the most represented, followed by Designers, UX Researchers, Content Strategists, and Product Leads, respectively.

**Slide 25:** Generally, the feeling among respondents is that their team is not fully staffed and that people are fulfilling multiple roles on their teams.

About 57% do not think that their team is fully staffed, and about 25% do. A vast majority of respondents (87%) said that people have to fulfill multiple roles on their teams. So, some teams might both feel fully staffed and require folks to accomplish the tasks of multiple roles.

**Slide 26:** Another question we asked was “Does your product or agency have its own design system?” We’re excited to see that, of those who answered this question (which was 82 people), a majority of respondents (or 70%) said that they use a design system in some way.

Many of them have already developed or are currently developing their own design system, often extended from USWDS. Others reported that they only use USWDS and don’t have their own design system.

**Slide 27:** So what did we learn when it comes to tech stacks and skills of teams?

**Slide 28:** We asked about teams’ familiarity with certain coding languages, GitHub, and Web Components.

We learned that teams are most familiar with HTML. That holds true for CSS and JavaScript as well, although familiarity for those technologies was a little less than with HTML — particularly JavaScript.

Most reported being familiar with GitHub, and a large proportion are “somewhat familiar” rather than “very familiar” with Web Components, so comparatively less than the other technologies.

As for most used technologies, folks reported that React and Angular are their most-used frameworks. Again, HTML, CSS, and Javascript were the most used programming languages. And npm, Yarn, and CDNs are the most common package managers and distribution systems teams use.

**Slide 29:** Given these findings, we have some takeaways as we develop Web Components.

**Slide 30:** We know we need to make USWDS easy to adopt for small teams that are understaffed and have few or no developers. For instance, installation and setup should be as simple as possible, and our documentation should be clear, explicit, and not make too many assumptions about technical familiarity. This would also benefit those who said they’re not very familiar with Web Components.

Since many of you reported that you often fulfill multiple roles on your team, we should, again, be careful not to make assumptions. We should focus on what people are trying to do rather than _who does it_ since many might be doing the job of a developer _and_ a designer.

And finally, now that we know a bit more about the tech stacks used on many government teams, we can better keep those in mind as we develop Web Components to ensure easier, seamless integrations.

**Slide 31:** Jacline: Now let's take a look at the Web Component landscape analysis we’re starting to wrap up.

**Slide 32:** Let’s start by sharing our research questions.

**Slide 33:** We were interested in a few specific categories:

- **Documentation**: What are other design systems prioritizing in terms of Web Component documentation? What types of content do we see?
- **Code structure**: How are other design systems building Web Components? What's their component model? How does content and data get into them? In general, from a developer's perspective: what does a component look like?
- **Code size and performance**: How big are these things? How much data does a browser have to load before the component loads? Is there any commonality around a component's footprint, when comparing similar components?
- and **Distribution**: How are these components getting from the design system to the project using it? How are they loaded onto the page? How straightforward is it to add a component to a project?

**Slide 34:** We’re approaching this landscape analysis in a collaborative way, since there's a lot of subject matter expertise required to collect and understand this information! Our three senior developers have been working with me, and we’re also working closely with our Product Lead (Dan) and Engineering Lead (Matt) on the fed side.

**Slide 35:** We drew from about a dozen different design systems for our analysis, from inside and outside the government space, both in the United States and elsewhere. This includes government design systems from VA, CMS, and the state of California, as well as common non-government Web Component–based systems like Carbon, Nord, Patternfly, and Shoelace.

So far we’ve collected data on a few specific components common to most design systems: **link**, **card**, **accordion**, and **alert**. Individual core team developers are collecting data across design systems to update our landscape spreadsheet.

We’ve had several whiteboard sessions to identify trends and findings. This helps us build a common understanding and familiarity with the types of decisions design systems are making, refine our own questions, and often uncover new ones.

This effort is still ongoing but here’s what we've learned so far, starting with documentation.

**Slide 36:** Documentation is at the center of the experience, and it's often the first opportunity to interface with the product. And we've seen that design systems have their own priorities and approaches.

**Slide 37:** Essentially, documentation helps you do what you need to do. What were we trying to do? Well, we looked at a few tasks:

**\*Getting familiar with a component**: Kicking the tires, as it were - understanding how to work with a component as directly as possible.

- **Installing a component into a project**: How do you get it and use it?
- and **Configuring and customizing a component**: How can you make a component do what you need it to do? Either changing what it does or changing how it looks.

**Slide 38:** Let’s talk about the ways documentation can help users get familiar with a component.

The most common way that systems try to build familiarity is with interactive demos — giving developers the opportunity to manipulate a component and see how it behaves, often when still in the context of documentation. This was ubiquitous in nongovernment design systems, and common — if not consistently so — in government design systems.

A couple of design systems build most interactivity directly into their docs pages, but most design systems direct users to external platforms such as Storybook, CodePen, or Code Sandbox to allow this kind of interactivity and basic prototyping, like what we see on this slide — an example of Storybook documentation that allows a developer to manipulate properties and text content.

But, it wasn't always clear when there was interactive functionality available. This link was sometimes buried in the docs.

Without some kind of interactive functionality, developers have to rely only on API documentation to understand what a component can do, and increasingly, the ubiquity of interactive documentation outside of government indicates that developers will increasingly expect the ability to interact with the component _before_ they install it into a project.

We see interactivity as critical to the developer experience.

**Slide 39:** How do you install a component into your project? Finding documentation that answers this question was a bit of a challenge for us. It was rarely clear from a component's page how you would install the component into your project. Only a handful of design systems had an **installation** section in the component documentation. On this slide, we see an example from the California Design System, which shows how to install the component, through either npm or via a CDN.

It's possible that for many design systems, installation is baked into some other aspect of the product, but it was surprising to find that so few of them provided installation instructions from the component page. USWDS is, perhaps, distinct in our expectation that teams will use our Web Components a la carte — that is, individually and selectively — so this may have influenced our expectations.

We see value in making this information clear and prominent.

**Slide 40:** Once someone installs a Web Component package, they’ll need to connect the component to their application's data, content, and logic — and configure the component to both do what it needs to do and display how it needs to display. This is the core responsibility of any component in an application. Establishing and maintaining this connection and configuration is perhaps a developer's most important task.

So we took note of how other design systems are documenting their Web Component connection and configuration options, otherwise known as the Application Programming Interface, or API.

**Slide 41:** When it comes to documenting an API, there are a number of common ways of interacting with components reflected in documentation.

- **Properties**: Settings passed to component markup. For example, an alert component may have a `variant` property that can be set to something like `warning`, `info`, or `error` depending on the type of alert. This property usually changes the color of the alert and its icon.
- **Events**: Data a component sends based on a component interaction. For example, an input component may have a `blur` event that the component emits (or "fires") when a user navigates away from the input and it loses focus. (It loses focus, thus, "blur").
- **Slots**: Named content regions inside a component. For example, a Card component might have a slot named `footer` where you'd add the content that belongs at the bottom of the card.
- **Parts**: Subsections of a component, styleable with CSS. For example, an Accordion component might have a part for an individual item's open/close indicator.
- and **Tokens**: CSS variables that influence component styling. For example, an `card-border-radius` CSS variable might set the border radius for all application cards.

Pretty much every component has properties of some sort, and we see property documentation in any Web Components–based design system. The rest of the elements of an API can vary from system to system and component to component. Less common elements of an API, but still potentially useful include:

- **Methods**, which are JavaScript-specific controls for component interactivity.
- and **Content model**, which is a way to group properties that accept content together.

**Slide 42:** We found that overall, Web Component API shared some structural commonalities.

- APIs are consistently organized using the categories we looked at in the previous slide.
- The API almost always appears on the same page as other component information, though it can occasionally appear in a page-level tab.
- API documentation is consistently organized using tables showing the names of the API items, the type of data they accept, and their default value.

And all of this tends to be more understandable when it's tied either to some kind of example, or to an interactive component where you can try out the setting in the component.

**Slide 43:** As we mentioned earlier, we can't expect that everyone shares the same level of expertise, especially around Web Components. We identified some real usefulness in providing links to contextual information about API categories, like this example of a link to learn more about using slots, next to a component's slots documentation.

**Slide 44:** But, looking through the components and the documentation together, we sometimes would see places where there seemed to be undocumented functionality, particularly related to undocumented CSS parts.

Design tokens didn't yet feel well integrated. Either they were omitted, or there were so many of them documented that they were hard to browse and understand — a real wall of text and code.

Design token documentation, in general, while potentially of use to designers, was one of the most designer-unfriendly parts of the documentation. Which leads us to wonder: _Is this type of documentation only for developers_? And perhaps that's OK. Maybe the appropriate place for designer-friendly documentation is in the tools designers are already using: in design kits and designer-focused software.

**Slide 45:** Another thing we looked at was how other design systems are documenting **multiple frameworks, or component flavors**. In other words, how do they document components available in multiple formats: like a component available as plain HTML, Web Components, and also as React. We will be in this situation as we move to Web Components, supporting both the new generation of the design system, and the existing legacy version we use today.

**Slide 46:** Design systems tend to approach **distinguishing formats, and documenting formats**, differently. Some use tabs to display documentation for different versions on the same page, some split formats onto different pages, some handle different formats on different platforms (like Storybook) or completely different websites.

At times, it was unclear if Web Components even existed in some design systems, and took some digging to figure it out!

Distinguishing and documenting both legacy USWDS and Web Components USWDS will be a challenge. We know that supporting interactivity is pushing us in the direction of Storybook documentation for the near term, but we'll have to work extra hard to make it clear to users what documentation lives where.

**Slide 47:** And lastly, we looked at how design systems communicate component _status_. For example, how do design systems help users answer questions like: “Should I use this component? How mature is it? Is it passing the required checks?”

**Slide 48:** We looked at how design systems are documenting **accessibility status** of components.

We found that while most do not provide this information at all, a handful did, mostly with tags. We really liked one design system that used testing tags for different component states and test types, such as keyboard navigation test status.

**Slide 49:** **When it comes to indicating component maturity**, such as if the component is in an experimental phase, a stable phase, deprecated, etc., again, many design systems use clear and simple tags to communicate that, although we did find one that used a type of step indicator to show the component’s progress through a multi-step process (as we’re showing in the top screenshot on this slide). Tags are usually at the top of the page but they also occasionally show up in the side navigation, and sometimes icons are used as well. Some tag labels we saw were things like: in research, alpha, beta, production, planned, draft, new, ready, stable, experimental, etc. Some indicate version number with tags too.

Across design systems, status tags serve as a kind of mini set of dashboard lights for a component. Users are likely growing accustomed to finding indicators at the top of a component's page that give an at-a-glance confirmation that a component is OK to use and conforms to requirements.

**Slide 50:** Dan: This is Dan. Documentation is a huge subject, and while there are lots of ways to approach guidance across design systems, we've identified a few key common user stories related to technical guidance for components. We need to support:

- At-a-glance confirmation that a component is OK to use.
- An obvious location for Web Components documentation, connected to our existing documentation.
- The ability to interact with the component before installing it into a project.
- Succinct component-level installation instructions.
- Clear and logical API guidance alongside an interactive component.
- A documentation-driven approach that keeps documentation current with functionality.

Back to you Jacline!

**Slide 51:** Jacline: Thanks Dan —Beyond documentation, we wanted to learn how design systems are distributing Web Components.

**Slide 52:** The quick answer is that most design systems offer distribution through an npm package or directly through a CDN link. One design system offered a direct download of a zip file. But, as we mentioned earlier, it wasn’t always easy to find the installation instructions, and it wasn't always clear if teams were able to install only specific components. Matt, what are our preliminary thoughts on distribution?

**Slide 53:** Matt: Thanks Jacline. We’ll most likely offer a couple of ways that users can add USWDS web components to their sites and applications. First, we’ll definitely have an NPM package. Since there’s a package for the current version of USWDS, many teams will already be familiar with this way of getting our code into their projects.

The USWDS Web Components NPM package will have pre-built, but unoptimized versions of the components to allow you to not just to add them, but also to extend and modify them. When I say the components are pre-built, I mean that we’ll run the component source code through our build tool—a tool called vite—to bundle all the dependencies together, and compile any styles that need preprocessing. Pre-building in this way is how we’re moving past the need for a separate package like uswds-compile for building USWDS web components. If you install the components from NPM, this is what you’ll get.

Alternatively, we also see value in distributing the components via a Content Delivery Network, or CDN. CDNs are third-party platforms that are optimized for fast distribution of assets, like code, directly to the end-user’s browser. Adding the CDN version of the Web Components to a project should be as simple as adding a script tag to the page pointing to the CDN’s URL. You’ll be able to immediately start working with the components on any page that includes that script tag pointing to the CDN link.

We expect that different installation methods will work better for different teams, depending on their needs. CDNs can be very helpful for teams that don’t want or need to do their own optimization of components, and just want to easily add them to their sites or applications without the complexity of a build process. Alternatively, packages are great for teams that want to interact more directly with the code inside of components, or who have their own build pipelines where they’ll integrate USWDS Web Components.

Now over to Dan to talk component structure!

**Slide 54:** Dan: Thanks Matt — Ok, one the gnarliest items we're starting to get into in our landscape analysis is component structure: how do components express what we might think of as their component model? Perhaps the best way to explain this is to look at an example.

**Slide 55:** Way back a million years ago in April, we gave an introduction to Web Components, which included this slide that outlined a potential model for a Breadcrumb Web Component. The general idea with component modeling is that with Web Components, we're able to simplify our component in a way that's often impossible with conventional markup that uses only classed elements for structure and presentation. We can reduce it to only _the model_ of a Breadcrumb.

The Breadcrumb in this slide reduces the 54+ lines of conventional markup to 6 lines of Web Component markup, by simplifying a Breadcrumb to a collection of links.

Under the hood, the Web Component uses JavaScript to manipulate that simplified markup into the markup required to render the complete Breadcrumb in the browser.

**Slide 56:** We could call this particular modeling technique **Simplified HTML Web Component**: Structured content with simplified form, since it uses simplified native HTML as the core of the model and wraps it in a Web Component wrapper.

**Slide 57:** Another modeling technique might take a similar approach but provides a more semantically complete HTML core. We could call this a **Standard HTML Web Component**: Structured content with complete semantic form. You might think of these HTML-based models as a _progressive enhancement_ approach to Web Components, using the building blocks of native HTML, but using the Web Component custom element to style, enhance, and provide an interface layer to JavaScript frameworks.

**Slide 58:** But you could go further and abstract away native HTML altogether. Perhaps systems can build a more straightforward model by leaving native HTML behind. Instead of anchor links (`a` links), this model uses a custom subcomponent instead. We could call this a **Modularized Web Component**: Structured content abstracted with custom elements. This can be useful if the component has a structure that doesn't translate obviously and directly into native HTML. Subcomponents can help modularize a component and sometimes give teams options for rearranging component internals.

**Slide 59:** And at the farthest end of the abstraction spectrum is a Web Component with no content at all — no markup outside of the properties in the custom element itself. We could call this a **Self-Contained Web Component**: with content fully abstracted as properties. Here we see an example of a self-contained breadcrumb, where the links are expressed as a JSON object, converted into a string and passed into a `links` attribute.

And this is the lens we've started to use to understand the landscape of design system approaches to component structure.

**Slide 60:** What can we learn about how systems represent the parts of a component?

**Slide 61:** Across the landscape, is content content? Or data?

**Slide 62:** And do design systems use mostly native elements or mostly custom elements in their internal structure?

**Slide 63:** We've started by looking at the Accordion component and the Alert component. And the results are… inconclusive! But, with only the exception of one design system's Accordion component, we don't see many examples of passing elements other than paragraph elements (`p` tags) into Web Component content. The biggest consistency we can identify seems to be that design systems will be inclined to build self-contained components unless those components need to parse rich text, or text that's less structured.

Accordions are more likely to have their primary content as content and heading content as data. Alerts are something of a mix between content as data and as content.

Alerts tend to be too simple to warrant modularization and subcomponents, but Accordions will usually use subcomponents if the component accepts the heading as content and not as data.

**Slide 64:** But we've also expanded our scope when it comes to Web Component structure, since it's an active topic of conversation, with a lot of interest and opinions from developers inside and outside of design systems. Matt, can you talk about why that's so?

**Slide 65:** Matt: Thanks Dan. The active discussions around Web Components these days are centered around performance and, as you alluded earlier, progressive enhancement. One thing that almost all of the design systems we looked at have in common is that the components more or less require JavaScript to render content. As we saw, you can use those components a lot like you might use a self-contained React component where the tag itself is empty or has minimal content inside.

**Slide 66:** In the landscape analysis, we didn’t see many custom-element–based design systems using the HTML Web Components model. The California Design System's Accordion component which contains a set of native HTML `details` and `summary` elements is probably the best example. However, this approach is gaining a lot of momentum with developers who focus on performance and accessibility.

Because HTML is what all browsers understand by default, when a component is written this way, the content inside renders, whether or not JavaScript runs or whether or not it runs promptly. If and when JavaScript executes, it will apply the component’s custom look and feel; the styles and enhancements. But if it doesn’t, the user can still see the content, and interact with the browser-native controls.

**Slide 67:** HTML remains the future-proof foundation of the web. When you can’t always predict the context in which code is going to run, and when we think about potential edge cases at scale—especially with the availability needs of government products and services—it makes sense to consider the resilience of HTML, the importance of critical content, and the continued relevance of a progressive enhancement approach.

**Slide 68:** Dan: Thanks Matt. So the last thing I'd like to quickly touch on is performance. It's one of the last things we've been able to get to in our landscape analysis, but it's something that's growing in importance.

**Slide 69:** Like so many other things, performance is complicated. Caching, compression, application structure, hydration, and code quality all play a role. But there's still some value in tracking good old fashioned code size.

**Slide 70:** Here we see a selection of sizes of Alert Web Component JavaScript. Some of these were easy to measure, since they were self-contained. Others are estimates since we weren't able to directly install them in projects and they included imports that we haven't fully mapped and measured. But I still think this gives a good sense of the differences in the landscape, with the smallest coming in at 3 KB, and the rest hanging out in the general vicinity of 10-12 KB.

And then there's the outlier at 367 KB. Maybe it was having a bad day, and to be fair, it gzips down to about 35 KB, but still, that can take up a bit of a project's performance budget!

**Slide 71:** Accordion didn't have this extreme outlier, but is a heavier package in general, with an average of around 30 KB.

It's still pretty early in our performance analysis, but we want to be really considerate as we move forward, understanding the balance between functionality and weight, and trying to pick a path forward that delivers the necessary amount of configuration in the smallest possible size.

**Slide 72:** Almost every item we've discussed in our landscape analysis is a question of balance and priority. There are rarely clear right answers and wrong answers, rather decisions that favor one outcome over another. This landscape analysis is an important tool for us in understanding different approaches to product balance. This landscape analysis is just another data source, alongside the surveys, interviews, discussions, Beta feedback, and other perspectives we hear in forums like the monthly call.

**Slide 73:** We're doing our best to understand what a good balance looks like for our design system and for the diverse and wide-ranging audience of folks that use our design system and use the products we build with it. As we move forward our legacy implementation of USWDS into a Web Components generation we'll be using a number of principles and goals as our guide.

First, our design principles:

- Start with real user needs
- Earn trust
- Embrace accessibility
- Promote continuity
- Listen

And next our mission, vision, and polestar: Helping government teams align, design, and keep their websites and services up to date. In the service of empowered and supported digital service teams and familiar and easy-to-use digital services. So, together we can shape the future of government digital services.

As we shape the future of the design system, we believe there's at least one more layer of principles to explore: Product and Engineering principles. These answer the question, _how_ are we designing the design system in the service of our design principles and mission, and what does this mean for our product.

These aren't abstract things, they influence what we do and our approach to judging the success of what we do. Next month, we'll try and tie it all together with a principles-driven approach to USWDS.

{{< /accordion >}}

This month, join the U.S. Web Design System (USWDS) team in exploring the landscape of Web Components. The team will share their recent landscape analysis of Web Components-based design systems and discuss how these findings set a course for future USWDS development.

In this online session with the USWDS team, you will:

- Learn what’s new in USWDS 3.9
- Explore how other design systems are approaching Web Components
- Gain insight to the team’s thoughts about where USWDS might fit in the broader landscape of modern design systems

**This event is best suited for:** Design system users of all levels. This will be a technical discussion geared toward developers, but anyone can attend; it requires no specialized knowledge.

**Speakers**

- **Dan Williams** - Product Lead, USWDS
- **Matt Henry** - Engineering Lead, USWDS
- **Anne Petersen** - Experience Design Lead, USWDS
- **Jacline Contrino** - UX Researcher, USWDS contractor

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
