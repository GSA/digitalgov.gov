---
title: USWDS Monthly Call - September 2022
kicker: USWDS LANGUAGE SELECTION PATTERNS
summary: How do we help users find content in their preferred language? Join us as we take a closer look at the language selection patterns we're developing for USWDS.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-language-selection-patterns-sep-2022-tickets-415626809977
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2022-09-15 14:00:00 -0500
end_date: 2022-09-15 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - user-experience
  - multilingual
  - multilingual-community
  - content
  - design
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
  - lgodfrey
slug: uswds-monthly-call-september-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-monthly-call-sep-title-card

---

{{< asset-static file="uswds-monthly-call-september-2022.pptx" label="View the slides (PowerPoint, 10.5 MB, 46 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for September 2022" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For September 2022 — National Hispanic Heritage Month begins today, and coincidentally but fortuitously this month’s call dives into language selection for multilingual digital content. And here we see the USWDS logo in a festive teal, magenta, yellow, orange and blue.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and this is my avatar: dark hair, blue sweater, collared shirt. A bit more youthful than real me, and more so every day I think. I'd also like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this DigitalGov event, you agree to abide by the [TTS Code of Conduct](https://handbook.tts.gsa.gov/code-of-conduct), which is available at handbook.tts.gsa.gov/code-of-conduct — please leave the meeting if you do not agree to abide by this code of conduct. We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

First we'll look at a couple new site launches.

Then I'll highlight some product updates.

And then we’ll spend the rest of our time here today talking about language section patterns!

And if all goes well, we'll have some time left at the end of Q&A. So let's get right into it…

**Slide 4:** with site launches

**Slide 5:** First up: [CHIPS.gov](https://www.nist.gov/chips) from the Department of Commerce. CHIPS.gov supports the CHIPS and Science Act of 2022 and serves as a public portal for implementation priorities related to that legislation. The CHIPS.gov homepage features a logo of a semiconductor chip with an american flag printed on it, and a video of Commerce Secretary Gina Raimondo titled, "A message from the Secretary of Commerce."

**Slide 6:** Next is a new tool in [Beta from USAGov](https://benefits-tool-beta.usa.gov/death-of-a-loved-one/?) — meant to help the public understand what benefits they qualify for, based on the details of their situation and circumstance.The USAGov benefits tool shows a header reading, "Government Assistance After Losing a Loved One" followed by a USWDS process list.

**Slide 7:** Next is an update to [USGS WaterAlert](https://accounts.waterdata.usgs.gov/wateralert/) from the US Geological Survey. WaterAlert provides notifications to an email or text phone number when a monitoring location exceeds the trigger levels set by the user. This interface allows users to create and manage their alert subscriptions and also uses login.gov as its identity provider. The USGS WaterAlert page shows an image of a mobile phone displaying multiple notification configuration options. A header reads, "Welcome to WaterAlert."

**Slide 8:** Finally, [veterans.gov](https://www.dol.gov/agencies/vets?utm_source=veterans_gov&utm_medium=redirect&utm_campaign=veterans_gov_redirect) from the Department of Labor — home of the Veterans Employment and Training Service, or VETS. The VETS program prepares America's veterans, transitioning service members, and military spouses for meaningful careers, provides them with employment resources and expertise, protects their employment rights, and promotes their employment opportunities. The veterans.gov homepage shows a large hero image of a retired Air Force lieutenant colonel holding a black and white photograph of herself in uniform receiving her new rank during a promotion ceremony. Text reads, "Welcome to VETS."

**Slide 9:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 10:** So now, a few product updates.

**Slide 11:** Just one new update this month: USWDS 2.13.4 — a maintenance and security update for the USWDS 2 branch. This is not a very big update but if you use the latest version of USWDS 2 and you're not able to update to USWDS 3, it could be worth grabbing this update to keep your dependencies up to date.

**Slide 12:** USWDS 2.13.4 is out now.

**Slide 13:** And now let's move on to language selection patterns. We've been working hard over the last few months to bring patterns and pattern guidance to the design system. This work is in the last phase of review and we hope to launch the new guidance next month.

Last month we introduced you to the concept of design patterns, why they're important for the design system, and the research and development approach we used to arrive at them. Today we’re going to go into a bit more detail about what makes up USWDS pattern guidance as we focus on language selection… with the help of a few guest speakers.

**Slide 14:** I'd like to introduce a couple members of the inclusive patterns team. First Meghan O'Meara, a Content Strategist and a contractor on our team. Meghan, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Meghan: Hi, I'm Meghan O'Meara, and I'm the content strategist on the Inclusive Patterns team. My pronouns are she/her and I have chin-length brown and gray hair. I’m located in Michigan and if my screen wasn’t blurred you’d see my dogs coming in and out of the room.

**Slide 15:** Thanks Meghan, and I'd also like to introduce Mitch Moccia, an Engineer, and a contractor on the Inclusive Patterns team. Mitch, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Mitch: Hi, I'm Mitch Moccia, and I'm a front-end developer and engineer on the Inclusive Patterns team. I’m located in Florida. My pronouns are he and him and I wear dark glasses and have short brown hair and brown eyes.

**Slide 16:** Thanks Mitch! Finally, I’d like to introduce you all to Laura Godfrey, a colleague of mine in GSA, working with [Vote.gov](https://vote.gov/), and a community manager for the [Multilingual Community of Practice](https://digital.gov/communities/multilingual/). Laura, can you introduce yourself and give a quick description of your appearance for anyone audio-only?

Laura: Hi, I’m Laura Godfrey, my pronouns are she, her and ella, I live in the Washington, DC Metro Area. I wear glasses, have brown shoulder-length hair and am wearing a shirt with different shades of blue, white and a bit of green.

**Slide 17:** We'll hear a bit more from Meghan, Mitch, and Laura in a bit, but I'd like to start with an overview of what we'll discuss today.

1. For those of you who missed our call last month, or don't have all this committed to memory yet, we’ll start with a brief overview and introduction to patterns and why we are including them in USWDS.
2. Next we'll talk about what makes up our pattern guidance, and some of specific language selection guidance, as well as how we arrived at our guidance and recommendations.
3. Then we'll demo the new language selector component.
4. And finally, we'll talk a bit about what to expect in the coming months.

**Slide 18:** So let's get going and talk about what USWDS provides today: What we might call the building blocks of websites. Or, to use a metaphor from the last call.

**Slide 19:** The building blocks of a meal.

**Slide 20:** First are **Design tokens** — the flavors and textures of our meal analogy. Instead of Sweet, Salty, Savory, and Bitter, tokens in USWDS are elements of style like color, typography, and spacing.

**Slide 21:** We also provide **Components** — the ingredients in our food analogy. Instead of cabbage, beans, mushrooms, and broccoli, our components are the functional units of a website, things like buttons, form fields, alerts, and cards.

**Slide 22:** And finally **Usability and Accessibility Guidance** — the techniques in our analogy. Instead of telling you the six ways to break down an onion, we provide advice on how to use components in ways that users expect, and make site functionality easy to use on any device and accessible.

So what were we missing with our flavors, textures, ingredients, and techniques?

**Slide 23:** Well, it was recipes. How are we using all these things together? What are we trying to accomplish with our ingredients and techniques? In the context of a design system, recipes are something we call patterns.

**Slide 24:** We can think of patterns as "things users do again and again on our sites and services." A good way to think about a pattern is as a common interaction. When we say pattern, a reasonable synonym is: interaction.

**Slide 25:** But this can seem a little abstract, so we've chosen a specific rubric for how to think of a pattern. A pattern completes the sentence, "Help a user to [blank]." And if you're thinking that this construction sounds a lot like a user story, it sure does. Patterns and user stories have significant conceptual overlap.

**Slide 26:** Such as,

Help a user to **enter their name**.

Help a user to **review a complex form**.

Help a user to **refine search results**.

Help a user to **recover from an error**.

Help a user to **make an appointment**.

Help a user to **upload a document**.

Help a user to **provide their race or ethnicity**.

And, of course, what we'll see in just a moment: help a user to **select their preferred language**.

Just as a pile of raw ingredients does not a meal make, nor do components alone make up a service. We see patterns as a missing link — a human-centered link — between components and services.

**Slide 27:** Patterns and pattern guidance have the opportunity to describe important user needs, and to give any designer a head start to understanding their own specific audience and how to solve for that user need. Because this is what it's all about for us: The USWDS vision: Government teams sharing solutions and practicing effective human-centered design. USWDS has never been intended to replace designers or developers, but to give them the tools to do their job more effectively, to provide important context, and provide well-researched solutions (often shared by other government designers and developers!) that help any government designer and developer start their process further down the path.

**Slide 28:** Patterns help us push the USWDS vision and mission of making it easier to build accessible, mobile-friendly government websites even further. It can be easier to talk about whether a form field is accessible, than about whether a form field is fair and equitable. And that's because a form field — on its own, in the abstract — is not much of an experience. It's only in the context of a pattern.… when a user is trying to actually do something.… that a form field has the responsibility to be part of a fair and equitable experience.

When we talk about patterns we have that responsibility to consider — what it means to be fair and equitable.

Successful patterns have a responsibility to be fair, equitable, respectful, and inclusive experiences for diverse audiences.

**Slide 29:** Patterns have a responsibility to reduce barriers to participation through every interaction. So, let’s start by taking a look at what’s in a pattern. We’ll show you a pattern in a minute, but let’s talk about how we got started with the language selector pattern.

**Slide 30:** Meghan: As we discussed at the last monthly meeting, we did a lot of research to learn from our colleagues around the federal space, and hear from them what types of interactions they are wrestling with and would like USWDS to focus on. One that kept coming up was language selection. As more and more sites add languages other than English, and as specified in [Executive Order 13166](https://www.justice.gov/crt/executive-order-13166) Improving Access to Services for Persons with Limited English Proficiency, digital teams wanted effective solutions for helping users find their language of choice. Luckily, our colleagues in the Multilingual Community of Practice had already taken up this issue. In fact, they’d already drafted a pattern! Laura, can you tell us a little about what you did?

**Slide 31:** Laura: Several of us from the Multilingual Community of Practice decided that this was an interaction that was a challenge for both individual sites and across the federal space. We formed a small team of people who’d been working in this space for a long time, and did a deep dive into the research associated with providing access to multiple languages. The idea was to have a team that was small (so we could make timely decisions) but that included folks from different agencies that had different skillsets. That worked really well.

**Slide 32:** After doing a lot of individual research, we came together to share our findings and begin a debate. And debate we did. We all had strong opinions about our research and what we wanted to offer. And after a few rounds of discussions and visualizations we developed pattern guidance around presenting content in multiple languages. There were three main use cases: sites that have two languages (English and Spanish); sites that have three or more languages; and sites that have full content in two or three languages and some — selected — content in languages other than English. Our pattern addressed each of these scenarios.

This slide shows a visual of these three scenarios. **Two languages** is shown with two similar web pages in two different colors. **Three or more languages** is shown with three similar web pages in three different colors. And **Selected content** is shown with a single page with four sections in four different colors.

We think this language selection guidance is critical both because it solves a significant design challenge, and also because if everyone in the federal space solves it on their own, it will be inconsistent and confusing for the users. They won’t know how to find content in languages other than English, or even know where to look for this option.

I often think of how we adapted to the menu on mobile devices. One day we saw three little lines and didn’t have any idea what that meant. But soon, we figured out that those 3 lines indicated the menu of that site where we could choose what we needed to do. The same will happen with a consistent way to access content in languages other than English. Our goal is to point folks to this content by having a consistent way of doing this across the government. USWDS will help us get here.

Meghan?

**Slide 33:** Meghan: So our team took the excellent work done by the [Multilingual Community of Practice](https://digital.gov/communities/multilingual/), and built on that to develop patterns to help users to select their preferred language. We interviewed people all over the federal space, focusing on high impact service providers to understand how they are approaching it and what issues they’ve faced. We also explored best practices outside of the federal government. We pulled all of this together into draft patterns, and asked for feedback from stakeholders across the government but particularly the USWDS community (via Slack) and the Multilingual COP email listserv.

**Slide 34:** We ended up with four use cases in the “Select a language” pattern family — three of which are around choosing a language for site content. This slide shows all of the patterns in the family. As you know, accessing content in the language the user is most comfortable with allows them to be more successful in completing tasks, and this is especially true if they are interacting with us during times of stress. These patterns allow us to better support users and show respect for them. On the slide we list the four patterns in the family. The four patterns are:

- **Select between two languages**, which is about helping a user to select between two languages, such as English and Spanish. (Which we see here as two colored circles with one filled in.)
- **Select from three or more languages**, which is about helping a user to choose from multiple available languages, such as English, Spanish, Chinese, and Arabic. (Which we see here as three colored circles with one filled in.)
- **Find selected multilingual content**, which helps a user to find content in their preferred language when only selected content has been translated (which we see here as four colored circles, each partially filled in)
- and **Indicate preferred languages**. This helps a user to choose the languages they prefer for verbal or written communication. (Which we see here as four colored checkboxes with two checked.) This one’s a bit of a departure from the others, in that it’s more about preference management.

**Slide 35:** Let’s take a quick look at the “select from three or more languages” pattern — which is representative of what you can expect from each pattern. Each pattern has a guidance page, just like components. On the following slides, we’ll walk through a typical pattern guidance page and you’ll see different elements of the pattern highlighted on the next few pages.

**Slide 36:** At the top of each pattern guidance page, you’ll see a description of the pattern. Each pattern includes a heading, along with a short lede, and a summary of what the pattern is about, so you can decide if this is what you’re looking for. In this case the heading is “Three or more languages” and the lede is “Help a user choose from multiple available languages.” The summary expands on that, but references that this pattern is serving people with limited English proficiency when they are visiting a website available in three or more languages, like English, Spanish, and Arabic.

**Slide 37:** Then each pattern will have some key information to make sure this pattern is appropriate for your use.

- A heading asks “What problem does this solve?” and then summarizes the key challenge the pattern is solving. In this case, inconsistent placement and treatment of language selection interface components can be a barrier to users, especially those with limited English-language skills, preventing them from easily finding and accessing content in other languages.
- Each pattern then tells you when use of the pattern is appropriate, and, sometimes, when it is not. In this case the pattern should be used only when the entire experience is available in three or more languages. If the site is available in only two languages, you should consider a different pattern, which we link to here. And if only selected content, such as instructions or infographics, are available in some languages, there is another pattern for that.
- Finally, there is a high-level summary of the solution. In this case, the pattern recommends placing the language selector menu at the top of the screen above site navigation, allowing site visitors to use a dropdown menu to select their language of choice. Place the language selector on the top right for left-to-right languages and on the top left for right-to-left languages if possible. As Laura mentioned, standardization of placement is really important so users know where to look for this feature.

**Slide 38:** Then each pattern provides a list of do’s and don’ts. I’m going to take a minute to walk through these, since these are important and show you some of the challenges of this pattern.

- First, under “What to do,” we recommend placing the language menu button in the upper corner of the screen for consistency. If possible, flip the arrangement of the header for right-to-left languages. The language button should be positioned at the top right of the page for left-to-right languages and on the top left for right-to-left languages. There was lots of debate on this one. Generally, users of RTL languages expect the heading to be flipped from what we expect in English, and look for their utilities, including language selection, at the far end of their reading line, which is in the upper left. And that is where we landed in the recommendations, but are looking forward to more user testing to validate this.
- We recommend making the language access buttons a single, independent element.
- If you have a sticky or fixed header, include the language dropdown in the header so it remains visible and in the same position as the user scrolls.
- Make sure you are taking the users to an equivalent page — if the entire site isn’t available in languages other than English, there’s another pattern to help you with that.
- Use the label “Languages” for the dropdown.
- Capitalize the name of each language and use the common, native language name, such as Espanol or Francais. Use the native alphabet, too.
- We’re not recommending including the English-language version of the language name in addition to the native language name, but if you have a specific use case, and have validated it with user testing, please do. For example, if you have a user group where a lot of the users will be helped by someone who doesn’t speak their language, you may need to include the English language version of the name next to the native name. Let user testing be your guide.

Now, for the don’ts:

- Don’t create a dead end for users by taking them to a site with little content in their preferred language.
- Don’t use icons or graphics or flags or country codes to indicate languages. These mean different things to different cultures, and flags don’t map to languages. Country codes such as ES may not be universally understood.
- Avoid auto-redirecting language based on detecting location or browser settings. This can be confusing and disorienting.
- Finally, don’t combine this element with other navigation items.

**Slide 39:** Then on each pattern, you’ll see a series of considerations — things to think about as you implement the pattern. For example,

- Ensure there is adequate color contrast between all elements of the button.
- If the text will be visually presented as a button but coded as a link, add the ARIA role=”button” so screen readers announce it as a button. You’ll also need JavaScript so that keyboard users can activate both the Enter and Spacebar keys. We’ve provided a link to the WCAG success criteria for more information.
- Remember to use HTML lang attributes to set the language of each page and to present all logically related items and links in an HTML unordered list.
- We also recommend including a prominent in-page notice or link regarding the available languages in addition to the link in the header, in order to increase visibility.

**Slide 40:** For each pattern you’ll also see a link to the components you’ll need to use this pattern, a preview of what they look like, and the pattern code. Mitch will demo the related component — Language selector — in a minute.

**Slide 41:** Other things you’ll find on the page are links to the pattern in use, in this case at the Department of Education. Their example departs from our recommendations, a bit, but gives you a sense of one implementation. You’ll also see a list of related components, patterns, and templates, in this case the header component, and the find selected multilingual content pattern, and the select from two languages pattern. You’ll also see a list of references used to inform this pattern and a changelog, a list of any changes to the pattern page since publication.

**Slide 42:** One of the stickiest design challenges in this pattern family is how to surface non-English language content when the entire site is not translated. (Which we see here on the slide represented with an image of a webpage with four colored sections, and the same four colored circles we saw in an earlier slide, each half filled.)

Maybe your site is available in English, Spanish, and Simplified Chinese, but you have selected content — factsheets or instructions, infographics or videos in a bunch of other languages, such as Arabic and ASL. How do you provide access to those languages without causing the user confusion when they expect to get the entire site in those languages. These are tough questions, and the Find selected multilingual content pattern provides guidance about how to think about these, recommending an additional panel on the dropdown menu that links to the landing page for this kind of content. I mention this because now we’re going to see a demo of the language selector component from Mitch, and this will come up. Mitch?

**Slide 43:** Mitch: DEMO

**Two languages**
- The two languages button is basically a toggle between two languages. The behavior of the button is fully controlled by JavaScript which allows us to address any accessibility considerations.
- Speaking of accessibility, one of the most important elements of a language selector is making sure that any language that is not the language of the page you are on is wrapped in a span element with the lang attribute and two character language code. And we’ll see more of that in the next section.
- For sites that are RTL, the converse would be appropriate, with the language selector positioned on the far left corner of the header.

**Three or more languages**
- Features a dropdown that lists all the languages in their native languages — alphabetically.
- We recommend listing the languages in native language only, but including the English language name in hover text. Let’s dive into some code to better illustrate this and how we emphasized accessibility with the language selector component.
- To achieve the hover text, we utilize the title attribute. Here we have added the English translation in addition to the native language which can be helpful if you are using a screen reader.
- Every native language is also wrapped in a span element that contains the lang attribute and corresponding, two-character language code.
- In mobile, the language button appears to the left of the Menu button. The pattern guidance states that even in mobile, the language button should be accessible, so avoid hiding the language button inside a mobile nav. In this example, I used the unstyled variant of usa-button to display the language selector as a standard link next to the large, blue Menu button.
- Another accessibility consideration is to ensure that your tab order matches the visual order of the elements. So as I tab through the desktop header, the tab order is correct, and as I tab through the mobile header, the tab order now also reflects the correct order even though the position of the language button changed.

**Selected content in additional languages**
- The pattern guidance suggests different solutions based on whether the content is very specific, such as fact sheets, or more general and varied content.
- But the language selector component supports an additional block of real estate where you can promote that content. Typically that content would generally take one of two approaches: topic-driven approach, for sites that have rich, topical content, and language-driven approach for sites that have a disparate set of content available in additional languages.

Other MITCH insights
The dropdown version of the language component, like the government banner, utilizes the accordion component for its expand and collapse functionality, so you’ll see usa-accordion as a dependency of the usa-language-selector package. Also, the button in all versions of the language selector uses the usa-button class and you can utilize any of its many variants, making it super easy to customize. Dan?

**Slide 44:** Dan: What you’ve seen here is an overview of the language selector patterns and how we arrived at pattern recommendations…and a brief demo of the language selector components. Next month, we’ll take a look at some of the other patterns we’ve developed, with a focus around providing personal information and completing complex forms.

**Slide 45:** And while these patterns and components are designed based on extensive research, we expect them to evolve as the equity and inclusivity landscape evolves and as we learn more from you. We invite you to share your input in #USWDS-public slack, GitHub issues, or by emailing the USWDS team.

**Slide 46:** Now some Q&A. You must have some questions.

**Slide 47:** Thanks for joining today’s USWDS monthly call. Next month, we'll be looking at Inclusive Patterns in depth. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you in October!
{{< /accordion >}}

How do we help users find content in their preferred language? Join us as we take a closer look at the language selection patterns we're developing for USWDS.

We'll talk about how this work evolved out of the [Multilingual Community of Practice](https://digital.gov/communities/multilingual/), then we'll discuss our general approach to pattern guidance, while looking at this specific guidance and the new components that support it.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
