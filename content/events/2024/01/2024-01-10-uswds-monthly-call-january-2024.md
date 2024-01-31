---
title: USWDS Monthly Call - January 2024
deck: Component-based accessibility tests for the U.S. Web Design System
kicker: USWDS
summary: This month the Design System team will talk about the development and rollout of their new accessibility tests for components.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsd-2upjwsHjfq2qWtf_LN9pVV8YV6SX8
date: 2024-01-18 14:00:00 -0500
end_date: 2024-01-18 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - accessibility
  - research
  - design
slug: uswds-monthly-call-january-2024
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2024-uswds-monthly-call-jan-title-card

---

{{< asset-static file="uswds-monthly-call-january-2024.pptx" label="View the slides (PowerPoint presentation, 7.8 MB, 87 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for January 2024" icon="content_copy" >}}**Slide 1:** Welcome everyone, to the U.S. Web Design System monthly call for for January, 2024 — our first monthly call of the new year, and it kind of feels like it's been forever since the last one, way back in November. Welcome back! On screen we see the USWDS logo in wintery pale whites and blues, with one of the triangles of the logo in green and looking like an evergreen in a snowy landscape.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a plaid button-down. And since it's cold where I am out on the west coast, I'm also wearing a pair of wool socks.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find the last year's worth of monthly calls — back to January 2023 — on our website, at [designsystem.digital.gov/about/monthly-calls/](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos within a week of the monthly call, and we also link out to the slides and the script, hosted at digital.gov. We've posted a link to our monthly call page in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

Well, we’ve got a site launch, a few product updates, including an update on our roadmap goals, and then we’ll spend the rest of the time talking about launching an important new feature of our site: accessibility tests.

We should also have some time for Q&A at the end of the hour.

**Slide 4:** Let's get into it with site launches.

**Slide 5:** We've got one nice new site to show today: [MCC.gov](https://www.mcc.gov/). A new site for Millennium Challenge Corporation, a Congressional initiative that partners with the world’s poorest countries to invest in their populations and foster just and democratic governance and economic freedom. The home page for MCC.gov includes the gov banner, classic shades of blue, and a prominent hero image that features three circular flag images — Cabo Verde, the Philippines, and Tanzania— with the text “New MCC Grants Announced” in the bottom left of the image.

**Slide 6:** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** Now for a few product updates.

**Slide 8:** First, USWDS 3.8.0, featuring a focus on community PRs. We get a lot of good contributions from the community, and we're happy to publish a number of these contributions in this new release.

**Slide 9:** Key improvements in USWDS 3.8.0 include:
* Adding support for sticky headers in tables.
* Better text wrapping and alignment in button groups (especially with longer button text).
* We're also improving icon alignment in buttons as well.
* We're giving teams more control over the headings included in in-page navigation, if you need to be more specific about which heading levels should be pulled into the in-page navigation.
* We're also adding contrast checking for disabled elements. Technically disabled or inactive elements don't have the same contrast requirements as active elements, but teams increasingly want to deliver designs that go beyond the requirements, and this release will help teams understand any potential low-contrast elements.
* And finally, indeterminate checkboxes. It turns out there can be three potential states for a checkbox: checked, unchecked, and indeterminate, for when, in a multi-level checklist, a parent checkbox contains child checkboxes in both checked and unchecked states. It's a bit of a complex case, but a real one, and we're happy to be able to support it.

**Slide 10:** Those features, and others, make up USWDS 3.8.0, coming soon: by the end of the month.

**Slide 11:** Next, I wanted to take a couple minutes to give an update on the items in our development roadmap. Currently we're on a planning cadence where we update our roadmap and schedule once a quarter, and we just finished planning for this quarter. Going forward, we expect to give these roadmap updates every three months.

**Slide 12:** So, first up, web components. We expect to deliver a mature beta of USWDS web components by this fall, October 2024. Upcoming milestones include:
* This month we're planning for a web components working group: identifying folks who can actively help us through this process, and also planning for sequencing and scheduling.
* In February, we'll finish a requirements draft for Web Components.
* In March, we'll have an alpha of a couple core components, most likely banner and identifier.
* By June, we'll get to form components, with the goal of a mature web components beta by October of this year.

**Slide 13:** Relatedly, JSON tokens: This is moving our tokens data from Sass into the more portable JSON data format. This is related to web components and shares a similar milestone: a mature beta in October.
* This month, we're finishing a landscape analysis of how tokens are stored and used in other design systems, and finalizing a data structure for the JSON.
* By April, we hope to use some of these new tokens internally and power our site with them.
* By May, we'll complete theme and state tokens and be ready to demo color tokens

Together with web components, this begins to define the shape of a new major version of the design system, one that's tested with a long-term beta to make sure we're getting things right. Right now we think that a new major version could be on track for Spring 2025, but that's a bit too far in the future to really know for sure.

**Slide 14:** Now for a few things that are shorter term: starting with publishing a component lifecycle model — describing how we develop components, how they’re proposed, and how they mature. We'll talk a lot more about this next month!
* This month we're thinking about a proposal status page prototype and clarifying roles and responsibilities throughout the lifecycle.
* Next month we'll be codifying our software lifecycle definitions, establishing a GitHub repo for component proposals, and presenting our work at a monthly call.
* By March, all this documentation should be up on our site!

**Slide 15:** We're also working to operationalize usability research, specifically component and pattern usability research with people with disabilities.
* This month we're finishing a research plan for our second round of research (called "Zebra" in our GitHub issues) and publishing a recruitment page.
* In February we'll perform this research, in March, we'll document the findings, and by April we should be planning for Round 3 with a repeatable process to get us through Rounds 4, 5, and beyond.

**Slide 16:** We're working to finish up tasks related to a website content audit. By next month we should have the page-level analysis complete, and have a set of success metrics for key pages. We'll finish this roadmap item up in March by documenting a repeatable process for managing and evaluating our content.

**Slide 17:** We've talked about Top Tasks here in the monthly call. This month we're documenting usability tests that address these tasks and adding a recruiting form to Touchpoints to help us find Federal employees that can be part of upcoming usability testing.

In April we'll do this round of top tasks testing, and look at the results in May.

**Slide 18:** We're also working to strengthen our guidance around disabled states, trying to do more to encourage interactions that do not involve disabled or inactive inputs.

Next month we'll be finalizing these guidance updates. In April, we'll finish our communications plan, in May we'll publish supporting research, and update all the site guidance by June.

**Slide 19:** And finally, critical checklists. We’ve been talking about this since last summer. As of today in January, we’re publishing our first tests. And now we're on a roll!

* We'll do the next round of usability testing in March, all the while continuing on the first pass of testing, and finally documentation, which we should complete in July.
* Each month we'll also be doing a second round of testing as well, and publishing new component checklists as we finish this work.
* By August this should all be complete!

**Slide 20:** As you can see, there's a lot on our plate right now! And you can check out the full roadmap over at GitHub at [github.com/orgs/uswds/projects/8/views/31](http://github.com/orgs/uswds/projects/8/views/31). And you don't have to write that down, we're pasting it into the chat.

**Slide 21:** And this brings us to today, where we'll talk about launching the first of our component accessibility tests; what we hope is a way to make accessibility more accessible for everyone who uses the design system.

**Slide 22:** We launched this project in June 2023, about six months ago. It's taken us a little while to get to this launch, but it's been slow and steady progress. We're posting [the link to our June 2023 monthly call](https://designsystem.digital.gov/about/monthly-calls/#june-2023-introducing-critical-checklists) — where we first discussed the importance of this work — in the chat.

**Slide 23:** Perhaps our biggest goal in this project is transparency — we want to know that our components are accessible and to say that our components are accessible, but we also need to be able to show what we did and how we did it and make that process repeatable and transparent so you can do it as well in your own projects.

**Slide 24:** And we wanted these checklists to be an example of simplicity and clarity. We know it often can be challenging to understand accessibility requirements. If we're talking about what we did and what we checked, we ought to be able to do this in plain language. Anyone familiar with the web should be able to follow these tests.

**Slide 25:** And finally, an important project goal was to empower participation. Accessibility is something that should be integrated into the fabric of a product and a product team. Anybody on the team should be involved in understanding the accessibility implications of what they build. There is absolutely a role for domain specific accessibility expertise, but anyone should be able to understand what a component needs to do to be accessible, and to help check if their solutions meet those needs. There's value in democratizing accessibility. We believe that hands-on accessibility experience builds familiarity and understanding, and that any team member ought to be able to point out if something isn't working as expected.

**Slide 26:** It has taken some time to get here. Like so many things, it has taken longer than expected.

**Slide 27:** But this is important. These accessibility tests are, we think, worth the time to get it right and do it well.

**Slide 28:** When we introduced this idea, we talked about these elements as critical checklists, the things a component needs to do to be accessible and usable, but as this idea has matured over the last six months, we learned that this name itself could be simpler, clearer, and more accessible.

**Slide 29:** So we've renamed Critical Checklists to Accessibility Tests.

**Slide 30:** So here we go! Let's take a look at one of the three component accessibility test pages we published today, Accordion, at [designsystem.digital.gov/components/accordion](http://designsystem.digital.gov/components/accordion).  One of the first things you'll notice is that every component that has an accessibility tests page, now has an accessibility status badge. This is up at the top of the page, and this accordion badge reads "Passed WCAG 2.1 AA". The side navigation on this page also includes a link to "Accordion accessibility tests".

**Slide 31:** Further down the page, in the accessibility section, you'll find a callout to test the accordion in your own project, and a call-to-action link to "Use accordion accessibility tests". We're trying to stress here and on the accessibility tests page as well, that it's also important to perform these tests on your own site, since any implementation will necessarily be different from the environment in which we perform our tests.

**Slide 32:** So let's take a look at the Accordion accessibility tests page itself. You can take a look for yourself at [designsystem.digital.gov/components/accordion/accessibility-tests](http://designsystem.digital.gov/components/accordion/accessibility-tests).

Any USWDS accordion should pass these manual accessibility tests. In the top section you can see how we did, and read a bit about how to test the accordion in your own project. Let's take a look at each of the elements of an accessibility tests page.

**Slide 33:** First, the introduction, where we document the accessibility status and talk about testing in your own project. Each test can have one of three statuses: **Passed**, **Passed with Exceptions**, **Conditional**, or **Failed**. Pass and fail statuses are as straightforward as they imply. **Passed with exceptions** means that a test passes in most cases, but we've identified at least one case where it does not. We'll look at an example in a moment. **Conditional** means that "it depends" — specifically that it depends on the context in which you use the component in your project, like using the proper heading level for an element on a page. These are elements that we can't test in isolation, and those that teams need to be able to test in their project.

**Slide 34:** Next we have the accessibility tests themselves. These are checklists grouped by type-of-test. We have zoom magnification tests, keyboard navigation tests, screen reader tests, and sometimes general accessibility tests.

Each test group is preceded by an accordion that includes instructions for setting up your computer for performing this type of test: for instance, instructions for setting up a screen reader.

Then there are the tests themselves, which show the relevant WCAG success criteria and level, the test status from our last USWDS check, and the USWDS version when we last performed the test.

And each test is also an active checkable checklist item. You can think of these pages as a scratchpad for your own accessibility testing, a way to keep temporary notes of your progress.

**Slide 35:** On this page, we've also got an example of passing with exceptions. This exception notes that for a screen reader test of announcing the "collapsed" state of the accordion, our USWDS code works as expected, but that some of the accordions on our website don't have the expected readout in the JAWS screen reader. JAWS tests of accordions on other USWDS sites produced the correct readout.

In this case, we're noting this exception, and linking to a GitHub issue where we're tracking it and addressing it. Once we've fixed this issue, we'll re-test and update the tests page.

If there were a fail state, we'd note it similarly on that page and link to the GitHub issue where we're addressing the problem.

**Slide 36:** Finally, at the bottom of the tests, we have two calls to action: **Propose a new test**, and **Report an error**. These calls to action send folks to either a GitHub feature-request issue or to a GitHub bug-report issue. And that's an accessibility tests page!

**Slide 37:** Today we're publishing accessibility test pages for three USWDS components: Accordion, Button and Link.

**Slide 38:** What comes next is… all the rest of our components. And at least one more round of usability testing.

**Slide 39:** As I mentioned at the start of the call, we're on track to deliver a batch of new accessibility test pages each month, finishing up in August. If you'd like some more detail of our schedule and plan, we're posting a link to [a GitHub issue that goes into more detail](https://github.com/uswds/uswds/issues/5578) in the chat.

**Slide 40:** So before I pass it to my colleagues to dig into how we got here, let's check back in on our goals. First and foremost, we're interested in making accessibility more accessible to anyone working on the web. If you're working on a project, you can be a part of its accessibility.

**Slide 41:** Next, we're interested in establishing a baseline for change. As the design system grows and changes, we want to make sure that we establish a  continuity of accessible functionality-that-teams-can-trust and that we can check from release to release.

**Slide 42:** And finally, this can be another great example of using the design system to scale expertise: It takes a fair amount of time to develop these tests and understand what to look for. To write in plain language. To make things simpler. It can be pretty complicated to make something simple! We're trying to do a lot of that hard work, so we can deliver not only accessible components, but a way to manually test components that takes minutes instead of hours or days. It took us hours and days so that it can take you only minutes! That's the hope at least.

And to talk more about the how, I'd like to introduce some of my colleagues

**Slide 43:** First Amy Cole, a contractor, and our Accessibility Expert. Amy can you introduce yourself?

Amy: Amy intro Hi, I’m Amy Cole. My pronouns are she/her and I’m a woman with curly brown hair wearing a blue sweater with a bird on it.

Dan: Thanks Amy!

**Slide 44:** Next, I'd like to introduce Jacline Contrino, a contractor, and our UX researcher. Jacline, can you introduce yourself?

Jacline: Sure! Hi everyone, this is Jacline, she/her. I'm a white woman with shoulder length brown hair and I'm wearing a burnt-orange sweater today.

Dan: Thanks Jacline!

**Slide 45:** And finally, I’d like to introduce Anne Petersen, our Experience Design Lead. Anne, could you introduce yourself?

Anne: Sure can. Hi, I’m Anne Petersen. My pronouns are they/them, and I’m a white person with brown hair and small glasses, wearing a blue plaid today.

Dan: Thanks Anne

**Slide 46:** So first, I'll pass it off to Amy to talk some more about our approach to accessibility: and how we understood what to test. Amy, take it away!

**Slide 47:** Amy: So, with the goals of transparency, simplicity, and empowerment in mind, undertaking the task of auditing each component took a lot of planning. We had to think about what our time and labor constraints were. And then practically, how we might tackle this with just two partially allocated accessibility specialists. We wanted to be able to do the majority of the up-front accessibility thinking for you, per component. We also wanted these pages to both inform you of what we’ve tested for, but also how you can test them yourself.

**Slide 48:** Before delving into the specifics of how we conducted our tests, I want to establish a clear understanding of the foundation guiding our testing process. Section 508, a component of a 1998 amendment to the Rehabilitation Act of 1973, is a federal law mandating accessibility for all Federal electronic content. This law relies on The Web Content Accessibility Guidelines (WCAG) 2.0 standards. With over 78 Success Criteria categorized into three levels (A – minimum conformance, AA – recommended, AAA – best and most accessible), Section 508 sets the benchmark. Our testing was conducted against WCAG 2.1 AA, and in certain instances, we also evaluated compliance with the newly released 2.2 AA standards.

**Slide 49:** But getting back to our constraints, it’s important to note that we tested each component’s preview code, in isolation, and not a prototype of the component on an actual webpage with other interactive elements. Since some criteria can only be tested when the component appears in context, we were unable to fully test for each success criteria. For example, if you were to use our button code, you’d probably put it on a webpage where you could test for focus order or meaningful sequence. We were unable to test for those criteria since, again, we test components in isolation where they’re removed from any context. For those success criteria, we marked them “conditional.” For this reason, error handling, error prevention, or some criteria such as heading levels are best tested in your own project.

**Slide 50:** The audit has been an iterative process that’s evolved over time. We gained inspiration from other design systems to determine what we felt would best benefit our community. From that starting point, we moved into using the [W3C Quick reference resource](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#top) as a testing guide (we are adding that link in the chat). As I mentioned earlier, there are more than 78 potential success criteria to check against, so the W3C quick reference provided us the means by which we, hopefully, didn’t overlook specific success criteria for a given component.

**Slide 51:** So, how did we sequence our components? How did we choose which components to begin the audit? We decided to take a strategic approach. After our initial audit of the accordion, which is our most visited component page, we transitioned to examining the least complex elements in the design system. These components are the building blocks of the design system including links, buttons, lists, and so on. Starting with accessible fundamental components means we have a higher chance of creating an accessible design system as a whole. We shared that link in the chat to the [GitHub audit roadmap issue](https://github.com/uswds/uswds/issues/5578) which lists each component audit issue in the order in which we are reviewing them.

**Slide 52:** The initial audit of a component is done by an accessibility specialist. There are two of us on the team. In order to gain a comprehensive view of the component against the success criteria, we ask the person who didn’t participate in the initial review to do an additional audit. We do this to capture checks that may have been overlooked, but also to gain an additional perspective of not only if the checks were passed, but wording of the prompts themselves.

**Slide 53:** We also wanted to make each testing prompt easy to follow. WCAG success criteria can be confusing, so it was important to us that the testing prompts be written in easy-to-follow plain language. Something like, “When you do this, the component does this.”

**Slide 54:** While an accessibility specialist wrote the first draft of each testing prompt, the wording was reviewed by our content specialists before being published. Not only did this editing process ensure we were providing consistency in our writing, it tested clarity and understanding of the prompts with team members who were not accessibility experts.

**Slide 55:** While all of our components were tested when they were created, this is the first comprehensive accessibility audit we’ve done to WCAG 2.2 standards. We’ll be doing this type of audit on a rolling basis going forward, ideally annually, with the intention of re-checking every component in an ongoing cycle over the course of that year. We’ll also be updating what we test for based on new findings, new standards, and new research.

**Slide 56:** But what happens if a component fails one of the checks? Simple; we create a high priority issue in GitHub. Luckily, so far our checks have found very few failures and only a handful of concerning issues we wanted to examine further. Those have all been addressed or are in the process of being addressed. We also have been crafting suggestions on content updates to the relevant guidance for these components. And finally, we have plans to create more robust component examples that better reflect the type of environment components will be used in.

**Slide 57:** As I mentioned earlier, we realize that we are testing these components in isolation; but you won’t be. You might need to piece together multiple checks per page or perform a more comprehensive page-level test. In the future we hope to bring you guidance on how to do those tests, too. For now, we recommend you use these checks as prompts to begin a conversation or bring awareness to accessibility at a fundamental level. Anyone new to accessibility should feel welcome to try using the checks themselves. We hope they help reduce any reservations you might feel about testing web accessibility and expand your knowledge of the testing process.

**Slide 58:** We want you to feel comfortable sharing suggestions and feedback on these checks. They, along with everything we do, are a work in progress, and we want to invite you to contribute to the accessibility of the design system.  If you feel a check could be worded better, or if we overlooked something or you just want to give us feedback, there are buttons for submitting an issue or suggesting a check on each page. We can’t claim to have thought of everything, but that’s where you come in! In the future we hope to expand these pages to include color contrast, design and other manual checks. This will help us ensure all audiences have equal access to our work. And speaking of audiences, it’s important that you use these checks in conjunction with usability testing. Something that doesn’t technically pass a check might actually work better for your particular audience. It’s important to know that distinction and include your audience in your process. And speaking of testing, I’m going to hand it off to Jacline to talk about how we tested prototypes of our new accessibility test pages.

**Slide 59:** Jacline: Thanks Amy - hi everyone, this is Jacline again. It’s important to us that WHAT we build is useful and usable to you, the USWDS community. So, before launching this page, we tested it with some of you. I’m going to talk a little bit about what we did, what we learned, and how it influenced the design of our new component Accessibility Tests pages.

**Slide 60:** This has been an ongoing effort for the last half of 2023 to now, and the research we’ve done has also been ongoing. First, we created the content for the new page in a simple document, and we did some content testing last summer with a few USWDS users to make sure we were providing the right content.

Once we made some tweaks based on what we learned from the content testing, we created a high fidelity prototype of what the page could look like. We wanted to put that prototype in front of users so we could make necessary design improvements before launch. So, that’s what we did - in December, we tested the prototype with 6 USWDS users.

These prototype tests themselves were iterative - so we tested with 3 people, made updates to the prototype design and testing script mid-stream based on the feedback we were getting, and then tested with 3 more.

And now, we just launched these new pages and we plan to test them again in March.

**Slide 61:** Our main goals for testing the prototype were to gauge first impressions, discover what’s confusing, get a sense of how the structure and presentation of information was working for people, and just generally discover what improvements need to be made before launch.

Some specific research questions we were trying to answer were:
* Is the purpose of the page clear? Do they know what it can help them do?
* Is it useful and usable to someone who’s not an accessibility expert?
* Is the page where they expect to find it?
* What page title makes the most sense to users?

Getting more insights into these areas would help us gauge if we are on the right track with our design choices and decide what changes to make.

**Slide 62:** Let’s talk about our approach. We tested with 6 USWDS users from a variety of agencies and who fill a variety of professional roles, including Tech Specialists, engineers, designers, etc.

Participants also varied in expertise with accessibility. 2 people were well versed in accessibility and manual testing, and 4 people had little to no experience with it. We were happy to get the perspectives of folks who are not familiar with manual testing since one of our goals for this page was that we want anyone, regardless of technical skill or accessibility knowledge, to be able to easily use it.

**Slide 63:** We met with each participant for 30 minutes on a video call and had them share their feedback about the prototype with us. We also asked participants to actually use the checklist to do zoom magnification testing on an accordion so we could see how easy or difficult it was for people who weren’t accessibility experts to actually use the checklist to carry out manual testing themselves.

**Slide 64:** So, what did we learn and how did it affect how we designed our new accessibility tests pages?

**Slide 65:** Let’s start with the bright spots, or things that tested well. First, we learned that overall, folks really liked the page and said that they hadn’t encountered a resource quite like it and felt it’d be a useful resource to reference.

One person said “I think this is really great. I've never seen accessibility stuff explained in such plain language.” Another commented that “This is new and it’s interesting and it’s something I’m going to use moving forward.”

**Slide 66:** Next, we learned that all participants easily found the page, so that was a nice confirmation that we were linking to it from the right places on the main component page.

**Slide 67:** And very importantly, we found that using the checklists to do zoom magnification testing was very easy for all participants. Many felt delighted by how easy it was to use and commented that they learned something new.

**Slide 68:** So, what could be improved?

**Slide 69:** First, communicating overall Section 508 compliance more effectively was needed. In the first round of testing, folks weren’t clear on if the accordion was actually Section 508 compliant and wanted some kind of clear designation from us. In other words, people wanted a clear answer to- does the accordion pass or fail?

So, we added the green badge of “Passed WCAG 2.1 AA” at the top of the page - we’re showing a screenshot of the page with a red arrow pointing to that new badge. Hopefully, the badge will make it clearer to users that the accordion does meet WCAG standards and is Section 508 compliant overall.

**Slide 70:** Another major finding was that there was some confusion about the purpose of the page. It wasn’t clear that the page had a dual purpose of both communicating component compliance through the tests WE’VE carried out PLUS helping you do your OWN tests. Participants tended to think it was either for one or the other at first. It wasn’t until they spent more time with the page that the dual purpose started to be more apparent to them.

**Slide 71:** Some of that confusion could be due to how we presented the test results in the early prototype. It seemed the way the green checkmarks were presented with the ‘passed’ badge made people wonder if they really needed to test the component if we already had and it passed. It wasn’t clear that those items were actions that they should be taking too.

**Slide 72:** We decided to change how the checklist items look - we replaced the green check icons with interactive check boxes and added clarifying language to the test status in an effort to make it clearer that you all will need to take action even though we did testing on our end.

**Slide 73:** Another thing we learned was that many participants, especially those new to accessibility, felt a bit intimidated by the page and said that they thought the intended audience was a 508 Specialist, or possibly a Product Owner who needs proof that a component is compliant.

Our goal for the page is that it could be used by anyone, regardless of subject matter expertise or technical ability, so it was good to get the perspective from people that actually use these pages that we may be missing the mark there.

That said, once participants spent more time with the page and used checklists, their opinions seemed to turn a corner and they didn’t feel intimidated anymore. So, we needed to think about how to help participants get over that initial impression.

**Slide 74:** We also learned that folks felt a bit overwhelmed by the amount of content on the page and described it as a “wall of text” — that they had to scroll too much to go through and to find specific information. We observed our participants just skimming right over and missing important information.

**Slide 75:** To improve the presentation of content and hopefully make it less overwhelming, we reduced the amount of text, used information chunking, and used more visual elements like icons and buttons for critical content.

We also improved the headings structure to make the hierarchy of the information more apparent. We added jump links to the testing categories (including zoom magnification tests, keyboard navigation tests, and screen reader tests) so it's easier to quickly find them than from scrolling alone.

Finally, we moved the test status over to the right to make it easier to scan and find. In the screenshot we have here you can see the ‘USWDS test status: Passed’ all the way over to the right. Making all of these changes will hopefully improve the scannability of the page and help you locate the content you want faster.

**Slide 76:** Finally, we still needed a name for the page. Folks were split over what to name the page and there was no real consensus.

It was tricky for both the USWDS team and others to find a fitting name for the page since it has a dual purpose.

We ultimately decided that ‘Accordion accessibility tests” (or button, or link, or whatever relevant component) encompasses the purpose of the page well and has a nice, sturdy simplicity to it.

**Slide 77:** We’ll continue to keep our finger on the pulse of what you all need from these pages, and will make iterative improvements as we learn more. We have more testing for this page planned for March, so stay tuned.

We’re really grateful to our participants for taking the time to give us their feedback and we feel we’re launching a much better product because of it. If you’re interested in participating in any of our usability research, [please fill out our brief signup form that we’re pasting in the chat](https://touchpoints.app.cloud.gov/touchpoints/08432480/submit). We also intend to publish a page on our site where you can sign up in the future. Now I’ll pass it off to Anne. Thanks!

**Slide 78:** Anne: Thanks Jacline. Finally, we want to take a moment to talk about the work, alongside talking about the work itself.

**Slide 79:** As I’ve said before, and you’ll probably keep hearing from me, our process is part of our product. Showing how we do our work benefits you in multiple ways.

**Slide 80:** Firstly, we want to show our work so that you can decide what from all this might be useful to you and your team. Which itself is both practical and kind of meta. We’re thinking about how we do the work, during the work, all the time, so we can tell you what worked, what didn’t, what we improved, what we want to improve, and what to expect. So all this work serves multiple purposes.

**Slide 81:** In this case, it’s making the practice of accessibility itself more accessible to you, hopefully. That’s the goal. Let’s make our accessibility goals, the standards we follow, and how we test, and how we make that testing sustainable, easier to understand, easier to do, easier to manage, easier to test, easier to make changes in and repeat.

All that to say: if you’re not doing manual accessibility testing alongside automated accessibility testing, you should. By showing you, component by component, how we do it, we hope to better enable your testing.

**Slide 82:** As well as support your decision-making on when and how to use USWDS components. We want to be obvious about our process of testing and what we found, so that everyone can make informed decisions.

Much like with our recent usability testing with people with visual disabilities from our last call in November, and this round of testing on these new pages, ensuring you’re informed means talking it about it here, but also means publishing our research, getting that connected logically on our website, and continuing to talk with you, our community, as we keep making our process more understandable and showing the progress we’ve made, which then supports your decision-making on when and how to use USWDS components.

**Slide 83:** *And* showing we rarely start where we end up. We improve things in small cycles along the way.

Iterating — that is, learning and changing as we go, continuously — is key to our work. Amy talked about it in the audit, when we changed how we were explaining those tests. Jacline talked about it in our usability testing of these pages, when we changed those tests to include exploration of the page title, as well as changing the design of the prototype, to gather feedback on both.

**Slide 84:** This cycle of learning and improving and learning again, happens always. It’s continuous; it’s a way of working, and how we serve people best. Serving people like all of you, who are supporting sites and services and products that support others. Serving the public, ultimately, which is what working in and for government is all about.

We — and you — are doing the work. Let’s improve how we do that work, and improve our outcomes, together.

**Slide 85:** So! You’ve now seen all we’ve published on this as of today.

As for how we continue: in March, we’ll do more usability testing on these new accessibility test pages. Each month we’ll be adding new accessibility test pages for additional components, working toward completing them all by the end of August. After that and on an ongoing basis, we’ll audit the accessibility of our components continuously, gradually re-checking each over the course of every year.

A bit sooner than that — before our next monthly call, look for updates to our main pages about Accessibility and Research, which will aggregate the ways we’re helping you to make informed decisions, including details from this round of usability research, if you’re interested.

Thanks for coming along with us as we iterate and improve, in the interest of helping you and your team and your processes iterate and improve, in the interest of all kinds of benefits for your published product. And with that, I’ll pass it back to Dan to open it for questions.

**Slide 86:** Q&A

**Slide 87:** We'll be back next month where we'll be talking about component lifecycle.

If you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Welcome to 2024. Here we go. Have a great day and we'll talk with you next month!

{{< /accordion >}}

Join the U.S. Web Design System (USWDS) team as they continue to highlight accessibility by discussing the new component-based accessibility test pages and talk more about their development and phased rollout.

In this session, you will learn:

* How the Design System team documents their accessibility testing
* The new checklists to conduct your own accessibility testing
* Our schedule for publishing additional component accessibility tests
* Locating known issues for some Design System components

**This event is best suited for:** Designers, accessibility specialists, developers, and content managers (all levels)

## Speakers

* **Dan Williams** **—** Product Lead, USWDS
* **Anne Petersen** **—** Experience Design Lead, USWDS
* **Amy Cole** **—** Accessibility Specialist, USWDS Contractor
* **Jacline Contrino** **—** UX Researcher, USWDS Contractor

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
