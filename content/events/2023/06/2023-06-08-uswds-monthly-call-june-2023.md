---
title: USWDS Monthly Call - June 2023
kicker: USWDS
summary: Developing and evaluating content for manual accessibility and user
  experience (UX) tests
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItceGprT0tHyOpdv40WB6ome7t20p6EHQ
date: 2023-06-15 14:00:00 -0500
end_date: 2023-06-15 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - accessibility
  - user-experience
slug: uswds-monthly-call-june-2023
captions: https://www.streamtext.net/player?event=
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2023-uswds-monthly-call-june-title-card
# YouTube ID
youtube_id: UxC-a48Vn7w
---

{{< asset-static file="uswds-monthly-call-june-2023.pptx" label="View the slides (PowerPoint presentation, 2.0 MB, 79 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for June 2023" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for June 2023, home to Pride month, Fathers Day, Flag Day, Kamehameha Day, and the Summer Solstice — as well as Juneteenth, this coming Monday, with the USWDS logo in red, white, and blue.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a blue T-shirt and a brown sweater. We're back to the 40s in the morning out here on the west coast! I'd like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](https://digital.gov/communities/community-guidelines/) — you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat. 

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? A straightforward call today!

First we'll review a few of the new features in our last release: USWDS 3.5.0.

Then we'll spend the rest of our time talking about the progress we've made on critical checklists — our new accessibility documentation initiative — and where we're going from here.

And then we'll have some time left at the end for Q&A. So let's get right into it.

**Slide 4:** Last month we were at the cusp of releasing [USWDS 3.5.0](https://github.com/uswds/uswds/releases/tag/v3.5.0), and this month it's out and it's a big one, with over 25 new features and bug fixes. I'd like to recap a few of the bigger updates in 3.5.0 then highlight a couple of the updates we weren't able to get to last time.

**Slide 5:** So, there are a number of key improvements in USWDS 3.5.0 that we outlined last month:

- **Consistency and legibility of disabled form elements.** We updated and normalized disabled styling across our form elements, making disabled styles more distinct from active styles, and increasing the visibility of disabled elements. We also applied consistent styling to forced colors and high contrast mode, and are phasing out class-based disabled styling. 
- **File input experience for voice and screen readers.** We made some important improvements to the file input component that improve its ability to interact as expected with voice command, and to better announce its status to screen readers.
- **Space bar trigger to links styled as buttons.** With USWDS 3.5.0, if it looks like a button you can trigger it as you would a button, whether it's a button element or a link styled as usa-button.
- **Updated Identifier accessibility link.** We also updated our Identifier's Accessibility Statement link. To align the component more closely with policy we're updating the text of the link from Accessibility Support to Accessibility Statement. 
- **And in USWDS 3.5.0, we're updating our form guidance to finally suggest labeling both required fields and optional fields.** 

So in addition to those changes, we have a few more notable updates in this release.

**Slide 6:** Here's some of the other good stuff in USWDS 3.5.0:

- **Stopped using font smoothing.** Font smoothing was a technique that resulted in thinner fonts when displaying light text on dark backgrounds. It's a technique that's no longer in favor and can compromise legibility and readability, so we've removed it from the limited cases where we used it.
- **Labeled external links for screen readers.** Now screen readers will announce links that use the external link icon as external links. It will also announce links that open in a new tab.
- **Updated individual Sass map settings without affecting defaults.** Previously, changing a USWDS setting that was part of a Sass map — like utility output settings — meant you had to explicitly set every other value in the map as well, or else they'd get set to false. Now you can update only the map setting you want to change, and every other value in the map will retain its default settings.
- **Added two new settings to customize accordion background colors.** Now you can change the background color of accordions site-wide using settings. 
- **Removed unused utility builder comments from compiled CSS.** Depending on how you compile your Sass, these comments could take up dozens of K. Now they're gone!
- **Fixed an issue with large file previews in File Upload.** Adding large files into the file upload could result in an infinite spinner for the file's preview. Now the component can better handle large files. 
- **And finally, we fixed a bug that prevented links that start with a number from scrolling when clicked in In-page navigation.** Now you can use numbers at the beginning of page headings and the in-page navigation will be able to properly link and scroll to them.

**Slide 7:** And that's a lot of what's new in USWDS 3.5.0. It's out now, so check it out!

**Slide 8:** So, today we're going to talk about a priority of ours over the last few weeks: content testing critical checklists. We'll talk a bit about what critical checklists are, why we're developing them, our approach to content for these checklists, how we've approached content testing, what we learned, and where we're going with this important addition to the design system.

**Slide 9:** Last month we introduced the idea of critical checklists as a follow-up to the top tasks research project we discussed a couple months ago. One of the top tasks we identified in that research was that teams come to our website to know about the Section 508 and WCAG conformance of our components.

**Slide 10:** What we've decided to develop is something we're calling component-based critical checklists. That is, for each component, we're planning to publish something of an accessibility-focused used-car inspection checklist, outlining the checks we've performed on the component and result of those checks.

As we'll discuss a little later today, these checklists will provide an opportunity not only to be transparent about accessibility for the components we deliver, but also to provide a guide for design system users to check their own implementations.

**Slide 11:** It's been a quick turnaround from last month's call. When a month begins on a Thursday, we know that the third Thursday is going to come around faster than we think.

**Slide 12:** But it's a good challenge! What can we accomplish in a couple weeks? How can we show some progress on an important initiative we just announced in last month's call?

**Slide 13:** What we tried to do was to get folks involved early, to try to perform some usability testing right at the start of the development cycle — and that meant leading with content testing. Before we had layouts, before we had even a prototype, we wanted to get some feedback about what content is the right fit for our idea.

**Slide 14:** To help talk about what we did, I'd like to introduce a couple members of the USWDS Core Team. First, Amy Cole, a contractor, and the accessibility expert on our team. Amy, can you introduce yourself and give a little self-description for anyone audio-only today?

Amy: Hi everybody. Thanks Dan. I am Amy Cole, I'm a caucasian woman with shoulder length curly brown hair, and I'm wearing a navy blue shirt, and my pronouns are she/her.

Dan: Thanks Amy!

**Slide 15:** I'd also like to introduce Jacline Contrino, a contractor, and the UX Researcher on our team. Jacline, can you introduce yourself and give a little self-description for anyone audio-only today?

Jacline: Hi. Sure, I'm Jacline. I'm also a white woman with shoulder length brown curly hair, but I'm wearing a black shirt and big hoop earrings today. And I use she/her pronouns.

Dan: Thanks Jacline! We'll hear from Jacline in just a bit, but before we do, I'd like to pass it to Amy, so she can talk a bit more about content development for critical checklists.

Amy: Thanks for the introduction, Dan. I appreciate the time everyone is taking to join us today and I look forward to telling you about the plans we have for USWDS component accessibility.

**Slide 16:** When it comes to accessibility testing, and critical checklists, the first thing we asked ourselves is what's our opportunity? **How can we be useful?**

**Slide 17:** As someone who has worked on a small state-funded web design team, I understand that many of you who work on a government project team have multiple roles and responsibilities. For example, designers are sometimes asked to do development work, developers to be designers, or to pitch in with writing. We often wear multiple hats. We can’t all be accessibility or Section 508 specialists, but we can all contribute to accessibility testing. That's where USWDS can help. 

**Slide 18:** We take our role as accessibility supporters seriously. Our aim is to help scale specialized skills and expertise so that even the smallest team can benefit from the collective expertise of designers, developers, and accessibility specialists across government. It's our responsibility to help ensure that your websites and services meet the needs of your users and the letter of the law. Even if your team does have Section 508 support — and especially if you do not — you may rely on USWDS engineering, usability, and accessibility guidance to help direct your work.

**Slide 19:** We see an opportunity to use our component accessibility assessments as a starting point for anyone assessing the accessibility of their own sites and services. We're thinking of critical checklists as "what any component needs to do to be accessible and usable," starting with the requirements of WCAG 2.1 single-A and AA success criteria. These critical checklists will document our own USWDS component accessibility and guide project-specific accessibility revalidation, to ensure that the components in your project are at least as usable and accessible as the components we ship.

**Slide 20:** These checklists are designed to be usable by folks with a wide range of technical skills, including those whose job responsibilities may not have previously included accessibility awareness. When we all participate in accessibility testing, we can all make decisions with accessibility in mind throughout the design and development process. These checklists will be written to help people new to accessibility testing to learn by doing.

**Slide 21:** Lastly, we recognize that our federal design system is held to higher accessibility standards than other design systems. Section 508 is the law, and we need to work hard to provide accessible components, templates, patterns, and guidance — and grow the behaviors and practices that result in better Section 508 conformance across government.

**Slide 22:** **How’d we get started understanding critical checklists?**

**Slide 23:** Was anyone else doing this? In an effort to understand critical checklists in the design system environment, we performed a landscape analysis and reviewed about 30 design systems through the lens of accessibility. What are others doing? What accessibility resources did they offer? What could we emulate? What could we improve upon? What gaps did we find?

**Slide 24:** We found different approaches to accessibility.

- Many, but unfortunately not all, design systems we checked at least mentioned accessibility
- Some included the WCAG success criteria, but didn't always connect them to specific heuristics checked
- Most accessibility resources were written using technical jargon and may not be suitable for audiences new to accessibility
- None had component-level checklists for keyboard, zoom, and screen readers

**Slide 25:** There were a few interesting elements of accessibility documentation that we decided we might want to explore later:

- Some did include scripts for what a screen reader should announce per component
- Some included component diagrams with accessibility-related callouts

**Slide 26:** This analysis showed that there was an opportunity to fill a guidance gap, and that there was an additional opportunity to model a level of accessibility transparency that is rare at best in the design system documentation we encountered. If you've found great component-based accessibility documentation, please let us know, either in the chat, in the public Slack, or in our new Accessibility discussion channel in GitHub discussions, that Dan will talk about later in the call.

**Slide 27:** We don't know everything! And we won't ever know everything. More than anything else, we hope the design system can be a place where we can share and scale expertise. To do that effectively, we rely on the teams that use the design system and the folks who participate in these monthly calls to build on this body of knowledge. Beyond the landscape analysis, your questions also are helping us understand the kind of content we need to develop for our critical checklists. We read your emails, actively engage with your requests in Slack, and review your GitHub issues and pull requests. We expect that as we make progress on critical checklists, they'll improve with your continued feedback.

**Slide 28:** And finally, as we considered the content we wanted to develop for critical checklists, we looked at other government accessibility resources. [Section 508's Information and Communication Technology testing baseline](https://ictbaseline.access-board.gov/) is a tremendous resource, and [DHS's trusted tester](https://www.dhs.gov/trusted-tester) program is an inspiration as well. Digital.gov has their [Accessibility for Teams](https://accessibility.digital.gov/) site and the folks at 18F have good practical accessibility training for their peers and partners. The [VA Design System has select component checklists available](https://design.va.gov/). We want to draw from important federal resources without necessarily duplicating them. We see an opportunity to take these resources and focus them toward our components through a plain-language lens.

**Slide 29:** **What content did we test?**

**Slide 30:** In general, our approach was to provide context and instructions for anyone new to the manual testing process. We wrote the checklist items in a plain-language question-or-prompt format. We tried to keep jargon to a minimum and used conversational language.

**Slide 31:** We decided to err on the side of more content in our first content draft, to see what resonated with our users.

Our first content draft was focused on the Accordion component because it's a popular component and relatively straightforward. Our draft content consisted of nine sections, just as the large gold rectangle on this slide is divided into a stack of nine smaller rectangles. The nine sections were:

1. Overall accessibility results
2. Relevant WCAG success criteria
3. Our testing protocols for USWDS components
4. Accessibility best practices for the component
5. Keyboard testing checklist
6. Zoom magnification testing checklist
7. Screen reader testing checklist
8. Mobile testing checklist
9. Support

And as we move through the content sections in the next few slides, each section in the rectangle will get a gold highlight.

**Slide 32:** **Section 1: Overall accessibility results.** At the top of the page we had a single topline result: This component has achieved level 2.1 of WCAG conformance standards.

**Slide 33:** **Section 2: Relevant WCAG success criteria.** Below the topline results we included a section of the relevant WCAG success criteria that apply to the component. For Accordion, this was a list of six criteria, including the criteria text and a link to the original criteria on the W3.org website. We included success criteria that directly applied to Accordion, level A, AA, or AAA.

**Slide 34:** **Section 3: Our testing protocols for USWDS components.** The third section outlined the steps USWDS takes to test accessibility on its components. These include:

- Automated tests used in our continuous integration 
- Manual high contrast mode testing in Windows & Chrome
- Browser based accessibility tools for image accessibility
- Manual keyboard and voice assistant and screen reader testing
- Using necessary ARIA tags

**Slide 35:** **Section 4: Accessibility best practices for the component.** Next, we included the accessibility best practices from the main Accordion component page. To this, we added a couple smaller sections on audience considerations for using the accordion component, and a disclaimer on what USWDS is not able to test, including unsupported browsers, and all configurations of platforms, browsers, and contrast modes.

Finally, this section also included the guidance that teams should be testing their own implementation of the accordion component.

**Slide 36:** **Sections 5–8: Manual testing checklists.** By the fifth section, we arrived at manual testing guidance, which included sections for keyboard control tests, zoom magnification tests, screen reader tests, and mobile tests.

Each section had started with some general guidance about how to approach that category of testing, followed by 3-10 checklist-style tests. For example, for the Zoom magnification section, we included the following elements we'll see on the next couple slides.

**Slide 37:** **How to perform magnification testing**

1. Navigate to a page on your website where the accordion component is used.
2. Enlarge the view of your screen to 200% by going into the browser settings or clicking “ctrl + scroll wheel” (Windows) or “command +” (Mac) until you see 200% in a pop-up window on the top right of your screen.
3. Test the functionality and visibility of the accordion using a mouse and the Magnification testing checklist.

**Slide 38:** **Zoom magnification testing checklist**

- Are you able to see all the content in the accordion without horizontal scrolling?
- Is any content cut off?
- Does any content in the accordion overlap?
- Do you see anything covering the accordion (pop ups, images, etc.)?

**Slide 39:** **Section 9: Support.** The content ended with short support information and the date we last updated the page.

**Slide 40:** Upon reflection, there was a lot of content in this test! But as we will learn, it gave us a good opportunity to see what was most of interest to our users. I’ll pass things over to Jacline now and she can share how we approached content testing for this first draft of critical checklists. 

Jacline: Thanks Amy! We just heard how we developed our content and the type of content we were testing.

**Slide 41:** Now let's get into the content testing process and talk about our goals: **What did we test and why?**

**Slide 42:** It can be really important and not too time consuming to test written content before the design phase. In the spirit of ‘testing early and often’ we wanted to get our ideas in front of USWDS users before any code was written or content published on our site. So, after we created the Critical Checklist content, we wanted to see if we were on the right track with what we wrote.

**Slide 43:** Before we talk about what we did, though, let’s take a step back and talk about what some of the typical options are when you need to test the effectiveness of written content. There are a few approaches you could take in order to assess users’ comprehension, perceptions, and feelings about the content.

**Slide 44:** First, let’s talk about good old fashioned **semi-structured interviews**. Semi-structured interviews can be flexible and good for getting general information about content. These usually involve showing participants the content and asking follow up questions. Some things you can learn in semi-structured interviews are:

- What users expect from the content before you share it with them (in other words, discover their mental models)
- You can learn what points of confusion they have with the content, or conversely, what’s particularly helpful and why
- And you can gauge how well people understand the content by asking them to summarize it in their own words, or asking them what questions they have about the content.

Speaking of comprehension, there are a couple of other tests that are particularly useful for testing comprehension of written content: cloze tests and recall-based tests.

**Slide 45:** First, let’s talk about **cloze tests**. These are kind of like research fill-in-the-blanks. You present the content to the participant, but remove, say, every fifth word. Participants are asked to fill in the blanks with their best guess as to what the words should be. Then, you calculate the score for the percentage of correct words guessed. A 60% or above score means the text is reasonably comprehensible. These tests can be pretty high effort for users (so be mindful not to have them guess too many words — aim for around 25), but cloze tests can be useful for testing content that is highly complex.

**Slide 46:** **Recall-based testing** can test not only how understandable the content is, but also how memorable it is. It involves showing participants the text that you are testing, and then asking them fact-based questions to sort of “quiz” how well they understood and remembered what they read. For example, if you want to test content that outlines benefits eligibility, after showing them the text, you could ask participants about what factors make them eligible or ineligible to receive certain benefits to see if they understood that content.

**Slide 47:** There are also **highlighter tests**. These involve asking the user to highlight material that evoke certain feelings, such as confidence. For example, green highlighting for the content that makes them feel more confident, and maybe pink for the content that makes them feel less confident. You could also use this method to discover other things, such as content usefulness versus confusing or unnecessary content. Highlighter tests can be great when you’re testing longer passages since they are easy to do and don’t require a high cognitive load for the participant.

**Slide 48:** Finally, another technique that’s especially useful for testing the performance of content is A/B testing, or comparative testing. A/B tests help you compare 2 versions of the content to see which one performs better at helping your user do the thing the content is intended to help them do. This can be done in a low fidelity way (like showing users 2 versions of the content, alternating which is shown first between participants so it isn’t biased) and seeing how they react or act on the content. You can also do it in a high fidelity environment, such as a live site, where half of your audience sees one version, and the other half sees another, and then compare relevant metrics of performance.

**Slide 49:** Regardless of which approach you use, as a general best practice, always be sure to test your content with actual or representative users that the content is intended for and within the context that it might be used. Participants’ motivation and background knowledge are really important in content testing, so using the wrong participants risks invalidating your study.

**Slide 50:** So, it seems there are a lot of methods you can choose to test written content. We considered a few of these when planning our own content test of the Critical Checklists, and ultimately decided to go with semi-structured interviews. We wanted to have the flexibility for users’ reactions and questions to drive our conversations rather than sticking to strict testing protocols with limited scope which can be the case with cloze tests, recall-based tests, and A/B testing. We strongly considered using the highlight method as well, but again, we decided to prioritize flexible conversation. We were also working in a very tight timeline. Other methods like A/B testing and cloze tests require a little more lead time to set up. Interview sessions are faster and easier to plan and implement, and usually yield worthwhile insights to boot.

Our primary goals with the content test were pretty varied.

**Slide 51:** **Mental models:** We wanted to learn what users think about accessibility for accordions, and what language they use to describe it.

**Slide 52:** **Expectations:** We wanted to discover what designers and developers are looking for when it comes to accessibility guidance for components, and learn to what extent the content we are testing meets their needs and expectations.

**Slide 53:** **Comprehension:** We wanted to gauge how well users understand the content we’ve created. Are there any parts that are confusing or unclear?

**Slide 54:** **Gaps:** We wanted to find out how complete the content is. What’s missing? Did we forget something important?

**Slide 55:** **Actionability:** Finally, we wanted to get a sense of how well the content enables users to take action on the guidance, particularly with the checklists that outline ‘how you should test’ your own implementations of our components.

**Slide 56:** **How did we do it?**

**Slide 57:** This was a fairly lightweight study that we were able to get done (from planning to execution to findings) within about 3 weeks.

**Slide 58:** We reached out to our community of testers for this study to invite them to participate. For those that were interested, we scheduled 30 minute testing sessions.  We also informed participants ahead of time of what to expect from the session and how their information would be protected. We also asked for permission to record the session and reiterated that participation is completely voluntary. Following ethical research practices is very important to us.

**Slide 59:** As mentioned before, the sessions were semi-structured interviews and we carried them out with 4 USWDS users individually. In the session, before we presented the content to participants, we first asked them what they expect to find in an Accordion Accessibility page on our website. This would help us discover if the way they think about accordion accessibility support documentation lined up with how we were thinking about it, and where there might be any gaps.

Then, we briefly showed them the document with the content we were testing. We gave them 30 seconds to scan the document because we wanted to get their knee-jerk first impressions before they spent too much time with it. We also wanted to know if anything right off the bat stood out to them as particularly confusing, or particularly helpful.

Then, we gave them about 7 minutes to thoroughly read through the entire document. Afterwards, we asked them follow-up questions to see what might be missing or how it could be improved to better meet their needs and expectations.

**Slide 60:** Some of the questions we asked were:

- Would you please summarize the information on that page in your own words?
- What was easy or difficult to understand? Why? 
- What questions do you have after reading that content?
- What is missing that you’d like to see? Also, what might you change and why?

These questions helped us tease out where we might need to make improvements to our Critical Checklists. 

**Slide 61:** If there’s anything we’d change for next time we run a test like this, there’s one that comes to mind. 
One of the questions we asked folks was to summarize the information on the page in their own words. We found that this was not very effective with such a long document containing a lot of complex, detailed information. It forced participants to answer at a generalized high level, so it might have been more helpful to focus on one section of the content to ask users to summarize. We ended up leaving this question out in later sessions, and instead asked participants “what questions do you have after reading that information?”

Overall, the sessions went really well and we got some excellent feedback. It’s always good to get more input on your ideas before building it out too much!

**Slide 62:** And speaking of input, I can’t emphasize enough how much we appreciate feedback from our community — it really helps us make USWDS better. If any of you would like to sign up to possibly be a tester for future studies we run, please fill out this [form](https://forms.office.com/r/DrYNkBJ3pu) we are putting in the chat. You can opt out at any time, just let us know. We do ask that only federal employees sign up — unfortunately we are unable to include contactors or the public in testing at this time. Again, we rely on our community’s willingness to help us improve, so thank you!

**Slide 63:** **Ok, so what did we learn from our content test?**

**Slide 64:** We discovered that we are on the right track with the content, mostly.

**Slide 65:** Overall, it meets or exceeds user expectations — the quote you see on this slide shows one user saying, "*I think that's it's hard to think of all the pieces of accessibility… and I think this does a really good job (at a) high level, considering all of the pieces and also encouraging testing. Even showing or telling them how to test, (the) tools to use. It's very well put together*.”

**Slide 66:** So, participants were really excited about it and felt that it’d help them feel more confident that the accordion component checks all the accessibility boxes while also empowering them to test their own implementations. The content was also fairly complete — there were a few suggestions for content to add, but overall, the document covered most of what users seemed to need.

We also learned that the information was easily understandable to all participants. There weren’t too many points of confusion except for a couple of areas that needed some rewording or clarification. The tone was also on point — users felt that it was written in plain language and not too technical (except for the WCAG criteria, but we have some ideas to address that), and the content flows in a way that makes logical sense to people.

**Slide 67:** So what can we improve? One opportunity for us was around learning that participants felt that the content was extensive and that it could be overwhelming. One person said that they could see how users might get “lost” in it. So that’s something we’re going to be mindful of as we move forward into designing what the content might look like on the site.
Additionally, there are opportunities for clarifying content. For example, users weren’t clear on who was responsible for adding ARIA attributes to the code: were they already built into the component or is it something teams need to wire up in the code themselves.

And, speaking of ARIA, we had a couple of users express some hesitancy or wariness around ARIA. In our guidance, we encourage users to follow best practices for using ARIA. Users thought it could open a can of worms since it is easy to make errors. As one user put it “no aria is better than bad aria” and commented that we might want to put some disclaimers or words of caution around using ARIA.

We also observed that some users want more basic, design-specific guidance, particularly on color contrasts, font sizes, and text length. USWDS provides that information in other places on our site so it may be worthwhile to link to those so we’re providing that guidance at the point of need.

Finally, we learned that there is an appetite for more detailed information on testing results and research that USWDS has done on specific components. Some users wished they could click into the details of research findings, so talking to participants reiterated the importance of transparency in research we’ve done.

**Slide 68:** **What are we going to do next?**

**Slide 69:** We got some great feedback through these content test sessions. We were thrilled that, overall, people were excited and happy with the content of these Critical Checklists, but we are taking the areas of opportunity into careful consideration as we work towards the next iteration of these checklists. All the raw material is there, so now how might we package it so that it meets the identified needs of users? How might we present the information on the site so that users can easily interact with it and get what they need out of it? 

These are the questions that are guiding  our next phase. We will soon begin prototyping our ideas for what these Critical Checklists might look like and how they might be structured on our site, and we hope to test those ideas again with our community of testers. We hope to roll out these checklists in the coming weeks, so stay tuned!

Dan: Thanks Jacline! This is Dan again. We learned a lot by pushing ourselves — perhaps — a little bit out of our comfort zone and testing something while it was still very new.

**Slide 70:** What we learned is that there's huge value in getting an early outside perspective from your audience, if only to serve as a gut check that you're on the right track. But we got more than that. From my perspective, there were a few clear takeaways from what we observed.

**Slide 71:** First is that while all accessibility information is welcomed, the key content on this page is **What tests we performed, their result, and when we performed them**. Which is largely the same content as what teams can do to check component accessibility on their sites.

This needs to be as clear and obvious as possible, and the primary focus of the page. While we may still have a number of content sections on the page, the testing sections need to be right up top.

And we want to tie these tests to the WCAG success criteria. The success criteria on their own have limited value — there needs to be a clear connection between the test and the conformance criteria. The tests themselves need to convey that we're comprehensively testing against all relevant criteria.

**Slide 72:** Second is that we should be focusing on behavior- and outcome-driven tests. That is, tests that look not at the underlying code of the implementation, but on the component's behavior in the browser or in the screen reader. Implementation methods may change, and we already document our implementation specifics on the component page. These critical checklist tests should be focused on the user experience. For instance, our tests should ask about whether the screen reader currently announces that an accordion is open, not whether the markup includes **aria-expanded="true"**.
This may also help reduce confusion, as teams won't need to wonder whether they should be adding this or that ARIA label or JavaScript to their component. And even as component markup may change — for instance if and when we implement accordion with the **summary** and **details** elements, and potentially remove ARIA — the accessibility-related behavior may not change. In the context of these checklists, folks can just be checking for the correct behaviors.

**Slide 73:** As we focus on "What tests we performed, their result, and when we performed them" we need to keep the content relevant to the related component. If there's information that's more general, or applies to every component, we should move to create a common home for that content that we can link to instead of including it in every critical checklist. For instance, guidance on how to set up a screen reader is really important, but we want to be able to link to it, not always include it directly in this content.

**Slide 74:** As we think about building this guidance and publishing it, we need to understand the relationship between components and subcomponents, or when the accessibility of part of a component might be covered in a checklist for a different component. For example, the button in the search component has the same accessibility requirements as the button component. This relationship should influence how we document the accessibility of the search component, and it should also influence how we sequence these checklists, as we write and develop them. We want to use something of an atomic design model, working on critical checklists for the smaller components before we attempt checklists for more complex components that may be dependent on the smaller ones.

**Slide 75:** All of this is to say that it's good we're thinking about all these things early so we can develop a repeatable structure. We have nearly 50 components, and creating all these checklists is going to take some time. We can't spend four weeks on each one of them!

**Slide 76:** Currently, we're trying to schedule a six-month rollout for these critical checklists. Six months seems like a lot of time, but it also seems like just a little. I tend to think this is kind of an ambitious timeline!

So we're going to work quickly to iterate on what we've learned and try to move quickly toward a production-ready template. We'll probably want to test a prototype soon, but we'll want to move fast. That six-month clock is ticking.

**Slide 77:** So one last thing I'd like to mention, is that as we're moving fast on this accessibility content, we'd like to stay extra-connected to accessibility-related discussions, and encourage them as much as possible. To that end, we've set up a special discussion channel in Github discussions related to accessibility. Since not every question you might have qualifies as an issue or a pull request, we hope that a discussion channel bridges the gap between the types of live conversations we have in the public Slack and the asynchronous, but still collaborative back-and-forth we might have in a Github issue.

So if you have a question about accessibility, or an opinion you'd like to share, check out our new [Github Accessibility Discussions](https://github.com/uswds/uswds/discussions/categories/accessibility). We're posting the link into the chat.

**Slide 78:** Q&A

**Slide 79:** Thanks for joining today’s USWDS monthly call. We'll be taking July off for a much needed break from monthly call, then we'll be back in August. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

And if you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Have a great day, and a great July, and we'll see you in August!

{{< /accordion >}}

Join us as we talk about the easy-to-follow, manual accessibility and user experience (UX) tests we're developing for U.S. Web Design System ([USWDS) components](https://designsystem.digital.gov/components/). We're calling these tests `Critical Checklists`.

In this session, you’ll learn how we're approaching `Critical Checklists`:

* Our vision for `Critical Checklists`
* How `Critical Checklists` address [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) requirements
* How we're evaluating checklist content
* How `Critical Checklists` can support your own accessibility testing

**This event is best suited for:** Designers, developers, and accessibility specialists at all levels.

## Speakers

* **Dan Williams** &mdash; Product Lead, USWDS
* **Amy Cole** &mdash; Accessibility Specialist, USWDS
* **Jacline Contrino** &mdash; UX Researcher, USWDS

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

## Resources

* [Accessibility resources — Digital.gov](https://digital.gov/topics/accessibility/)
* [Accessibility: Usability for every ability — USWDS](https://designsystem.digital.gov/documentation/accessibility/)
* [Create Accessible Digital Products — Section508.gov](https://www.section508.gov/create/)
* [Find your federal agency’s Section 508 Program Manager](https://www.section508.gov/tools/program-manager-listing/)
* [How to Test Websites for Accessibility (with video)](https://digital.gov/resources/how-test-websites-for-accessibility/)
* [Accessible Digital Content: Tips and Tricks (Digital.gov video playlist)](https://www.youtube.com/watch?v=CL6lOwJEMGQ&list=PLd9b-GuOJ3nFHykZgRBZ7_bzwfZ526rxm&index=22)
* [Accessibility for Teams](https://accessibility.digital.gov/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
