---
title: USWDS Monthly Call - August 2022
kicker: USWDS Inclusive Design Patterns
summary: Join us to learn more about design patterns and how they fit into the
  design system.
host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-inclusive-design-patterns-aug-2022-tickets-397267256057
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2022-08-18 14:00:00 -0500
end_date: 2022-08-18 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - emerging-tech
  - uswds
  - user-experience
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
slug: uswds-monthly-call-august-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-august-2022-monthly-call-title-card
---

{{< asset-static file="uswds-monthly-call-august-2022.pptx" label="View the slides (PowerPoint, 7.8 MB, 83 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for August 2022" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call. For August 2022 — the dog days of summer — which we'll celebrate with some classic dog colors of browns and whites in the USWDS logo. I've been away from home recently, and I miss my dog.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead and this is my avatar, dark hair, casual office wear. Keen observers will notice that real me got a haircut, and a bit of sun over the last few weeks. How ’bout that? Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that all attendees must abide by the [TTS Code of Conduct](https://handbook.tts.gsa.gov/code-of-conduct), which is available at handbook.tts.gsa.gov/code-of-conduct. We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? First we'll look at a couple new site launches. Then I'll highlight some product updates. And then we’ll introduce a concept new to the design system: inclusive patterns! We've got a full show today, so let's get right into it.

**Slide 4:** With site launches

**Slide 5:** Today we've got a new one from the Census Bureau, [bias.xd.gov](https://bias.xd.gov), a toolkit to help teams in government understand and mitigate bias in their data and algorithms. The homepage shows shows a large field of blue, with text reading "Introducing the Bias Toolkit."

**Slide 6:** And we've also got [goodjobs.gov](https://goodjobs.gov), from the Department of Labor — The Good Jobs Initiative, is focused on providing critical information to workers, employers, and government as they work to improve job quality and create access to good jobs free from discrimination and harassment for all working people. The goodjobs.gov homepage shows three images. Labor Secretary Marty Walsh talks with a member of the AFSCME union, and in front of a carpenters union. And two baristas look over a cash register. Text reads "The Good Jobs Initiative."

**Slide 7:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8:** So now, a few product updates.

**Slide 9:** First up, USWDS 3.1.0 —an accessibility-focused release with a couple changes to how we handle buttons that might be considered breaking changes on your project.

**Slide 10:**	So what’s new in USWDS 3.1.0?

All non-form buttons now include `type="button"` to prevent unintended and undesired behavior. We've been preventing the default button behavior (which is `"submit"`) with JavaScript, but we feel it's more reliable to explicitly declare `type="button"` on all non-submit buttons. So when you bring in USWDS 3.1.0, look for any buttons that do not declare a type, and give them `type="button"`.

We've also made a number of good non-breaking changes as well.

Elements that use `aria-disabled` are now styled as `disabled`. `aria-disabled` can be a good option anytime you want to have a disabled element, but make it visible to screen readers (and perhaps provide a tooltip explaining why it's disabled).

We've also fixed mobile menu appearance for layouts using flex or CSS grid.

**Slide 11:** Unstyled buttons in a button group now have proper baseline alignment.

We've added a LinkedIn icon.

We've also updated our social media icons to remove custom circle outlines. So if you use USWDS social media icons, expect them to change a little bit. This change helps format our icons exactly as they're provided from social media companies.

And lastly, this isn't a breaking change since we have backward compatible styling, but we've updated the markup of the usa-password component to use a `<button>` for the "Show password" functionality instead of an anchor.

**Slide 12:** And that's USWDS 3.1.0 — it's out now, and if you want more information about what's inside we're posting the [link to the full release notes](https://github.com/uswds/uswds/releases/tag/v3.1.0) in the chat.

**Slide 13:** And now let's move on to introducing inclusive patterns. We've been working hard over the last few months to bring patterns and pattern guidance to the design system. And if you don't know what a pattern is, or what we're talking about when we talk about patterns, you're not alone and you've come to the right place, I hope.

**Slide 14:** So to help me talk about this new work, I'd like to introduce a couple members of the inclusive patterns team. First Meghan O'Meara (pronounced MEE-gan OH MAIR-ah), a Content Strategist and a contractor on the inclusive patterns team. Meghan, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Meghan: Hi, I'm Meghan O'Meara, and I'm the content strategist on the inclusive design patterns project. My pronouns are she and her and I have shoulder-length brown and gray hair.

**Slide 15:** Thanks Meghan, and I'd also like to introduce Mitch Moccia (pronounced MOE-sha), an Engineer, and a contractor on the Inclusive Patterns team. Mitch, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Mitch: Hi, I'm Mitch Moccia, and I'm the front-end developer and engineer on the inclusive design patterns project. My pronouns are he and him and I wear dark glasses and have short brown hair and brown eyes!

**Slide 16:** Thanks Mitch! We'll hear a bit more from Meghan and Mitch a little later, but I'd like to start with an overview of what we'll discuss today.

1. First, what are patterns and why are we including them in USWDS?
2. Then we'll talk about how we developed our pattern guidance.
3. Then we'll talk about a few new or improved components we've developed to support these patterns.
4. And finally, we'll talk a bit about what this means and what's next.

This is only our first monthly call focussed on Patterns. This month we'll introduce the concept of patterns and what we did to build out this new content. Next month we'll look at the new patterns we've documented in depth.

**Slide 17:** So let's get going, and talk about what USWDS provides today: What we might call the building blocks of websites.

**Design tokens** — elements of style like color, typography, and spacing.

**Components** — the functional units of a website, things like buttons, form fields, alerts, and cards.

And **Usability and Accessibility Guidance** — Advice on how to use these components in ways that users expect, and make site functionality easy to use on any device, or by users of any ability.

**Slide 18:**	In order to understand what a pattern is and how it fits into the design system. We might use a food metaphor and think not of the building blocks of a website, but the building blocks of a meal.

**Slide 19:**	Tokens are our flavors and textures. Like the colorful words we see illustrated on this slide. Flavors like sweet, salty, savory, and sour. Textures like melty, dry, crumbly, and bubbly. Tokens are what give a design its character.

**Slide 20:** Components are like the raw ingredients in a pantry. They're more like the different types of food we see here in this illustration, or you might see in a market or in your refrigerator. These are things like mushrooms, corn, and cheese. Food like eggs, chicken, soy sauce, and rice. Each of these have a character that you could describe with tokens — with flavors and textures. But we build a dish not with flavors, but with the ingredients that express those flavors. Components are grocery items.

**Slide 21:** Usability and accessibility guidance are like techniques: how do you use a specific ingredient. This illustration shows an onion, and different ways to cut it up. Techniques might also include safe ways to use a knife, how to cut an onion without irritating your eyes, and any potential allergies related to onions. Usability and accessibility guidance affects how you work with specific ingredients.

**Slide 22:** But you might notice that in the preparation of a meal, the items we've just discussed are missing something important. They're teaching us about flavors, helping us collect ingredients, and guiding us through working with our ingredients, but you don't always make a meal just by going to the grocery store. And a design system is more than a store, it's the story of how we do design work. And just like a website or service is more than generic buttons and form fields, meals are not typically just a collection of chopped up vegetables, and a pile of raw ingredients.

**Slide 23:** They need Recipes. You don't always get repipes at the grocery store, but you do often need them to make a meal. And if you don't need them now, you surely used them — by book or by experience — as you learned how to cook.

**Slide 24:** In our metaphor recipes are patterns. It's a little bit of a weird word, particularly if you aren't familiar with how it's used in the context of experience design. But pattern is a word coined by an architect named Christopher Alexander back in the 1970s to describe people's patterns of behavior when they live in their homes. What are the kinds of things that people do again and again in their homes (or expect again and again from their homes) and how might homes be built to support these needs — needs that often go beyond the prosaic needs of shelter and sanitation, but emotional needs: what can a home do to make you feel at home. In an important way, Alexander reintroduced human-centered design into the design practice of architecture, and the concepts he developed are just as relevant and practical to any designed experience.

**Slide 25:** At USWDS, we think of patterns as "things users do again and again on our sites and services."

**Slide 26:** A good way to think about a pattern is as a common interaction. When we say pattern, a reasonable synonym is interaction.

**Slide 27:** But this can seem a little abstract, so we've chosen a specific rubric for how to think of a pattern. A pattern completes the sentence, "Help a user to (blank)." And if you're thinking that this sounds a lot like a user story, it sure does. Patterns and user stories have significant conceptual overlap. Let me give some examples of how we're thinking of patterns.

**Slide 28:** Help a user to enter their name.

**Slide 29:** Help a user to review a complex form.

**Slide 30:** Help a user to refine search results.

**Slide 31:** Help a user to recover from an error.

**Slide 32:** Help a user to make an appointment.

**Slide 33:** Help a user to upload a document.

**Slide 34:** Help a user to provide their race or ethnicity.

**Slide 35:** Help a user to select their preferred language.

**Slide 36:** Just as a pile of raw ingredients does not a meal make, we see patterns as a missing link between components and services — a human-centered link between components and services.

**Slide 37:** So tokens build components. Components are built from tokens.

**Slide 38:** But components alone don't build websites and services.

**Slide 39:** Components and content are what address a pattern.

**Slide 40:** And patterns are what our websites and services are really built from. Websites and services are made of patterns large and small. So we should begin to address them.

**Slide 41:** You might be asking yourself, "Where do templates fit into all of this?" Templates and patterns are very similar. But a pattern is a description of a user need, and a set of constraints and conditions that describe how it can be addressed. A template is a specific solution to a pattern. The pattern describes the problem and the conditions for its effective solution. A template is a single solution to a pattern. USWDS will continue to build and develop templates in service of patterns.

**Slide 42:** Patterns and pattern guidance have the opportunity to describe important user needs, and to give any designer a head start to understanding their own specific audience and how to solve for that user need. Cos this is what it's all about for us: The USWDS vision: Government teams sharing solutions and practicing effective human-centered design. USWDS has never been intended to replace designers or developers, but to give them the tools to do their job more effectively, to provide important context, and provide well-researched solutions (often shared by other government designers and developers!) that help any government designer and developer start their process further down the path.

**Slide 43:** Patterns help us push vision and the USWDS mission of making it easier to build accessible, mobile-friendly government websites even further. It can be easier to talk about the accessibility of a form field than about whether a form field is fair and equitable. And that's because a form field — on its own, in the abstract — is not much of an experience. It's only in the context of a pattern, when a user is trying to actually do something, that a form field has the responsibility to be part of a fair and equitable experience.

When we talk about patterns we have that responsibility to consider what it means to be fair and equitable.

Successful patterns have a responsibility to be fair, equitable, respectful, and inclusive experiences for broad, diverse audiences.

**Slide 44:** Patterns have a responsibility to reduce barriers to participation through every interaction. And to help give more detail to what I'm talking about, I'd like to cede the floor to Meghan for a moment.

**Slide 45:** Meghan: Dan, one example of using pattern guidance to reduce barriers to participation through every interaction is that of Puerto Rican addresses. Not too long ago the federal government made free home COVID tests available to the American public. There was never an intent to exclude Puerto Rico, but when the site was launched, the mailing address omitted the urbanization field, which is required for residents of Puerto Rico to receive mail. There simply wasn’t awareness of this need. The form was quickly fixed to include the Urbanization field, but including Urbanization as an optional field in an address pattern is just the kind of guidance and learning that can help other teams start from what their colleagues have learned, and make a real difference for the people that use our services.

**Slide 46:** Inclusive design patterns can help teams address a number of Executive Orders related to customer experience, access, and equity. There's not only the recent [Executive Order on Transforming Federal Customer Experience and Service Delivery to Rebuild Trust in Government](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/) and the [Executive Order on Delivering Excellent, Equitable, and Secure Federal Services and Customer Experiences](https://www.performance.gov/pma/cx/), and the [Executive Order on Advancing Racial Equity and Support for Underserved Communities Through the Federal Government](https://www.lep.gov/executive-order-13166), but also an older but still very relevant [Executive Order on Improving Access to Services for Persons with Limited English Proficiency](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/20/executive-order-advancing-racial-equity-and-support-for-underserved-communities-through-the-federal-government/).

Delivering fair, equitable, respectful, and inclusive experiences isn't just the right thing to do, but works directly in service of these executive orders.

**Slide 47:** What we’ve learned through this project — and by being a part of the USWDS community — is that teams are interested in sharing what they know and learning what they can do better. And by sharing our expertise we can provide a better, more consistent customer experience — and help government teams spend less time on solved problems and more time on their mission and their specific audiences.

**Slide 48:** Dan: Thanks Meghan. So in adding pattern guidance to USWDS, we had the following six goals:

**Slide 49:** 1. To identify common patterns shared by government sites and services.

**Slide 50:** 2. To identify patterns that government design teams want to better understand.

**Slide 51:** 3. To identify subject matter experts effectively addressing these patterns.

**Slide 52:** 4. To identify guidance specific to these patterns.

**Slide 53:** 5. To ensure that any pattern guidance addresses diversity, equity, inclusion, and accessibility considerations specific to these patterns.

**Slide 54:** and 6. To identify new components and improvements to components that can support these patterns.

**Slide 55:** So how did we do this? What did we do?

**Slide 56:** Mitch: We started with benchmarking and landscape analysis. In our benchmarking and landscape analysis we spent a lot of time looking at design system sites and sites that were about design systems.

**Slide 57:**	We looked at US government design systems, international government design systems, and private sector design systems. And we worked to make sense of the commonalities we found.

We wanted to identify which design systems included patterns at all, and how they approached them. What information did they include on a pattern guidance page?

How were these organizations talking about patterns? What were their problem statements? Their Do's and Don'ts?

We analyzed how these design systems described their patterns — their approach to guidance and their approach to addressing the problem statement of a pattern. How well did they describe how and why they recommend one solution over another?

Another key aspect we looked at was how these design systems connected their components and templates to their patterns and how pattern guidance and component guidance were related.

In general, we looked at what best practices we could learn from, and where there were different approaches.

As a result of our research, discovery, and analysis, we were able to gain a more cohesive and comprehensive understanding of the decisions we needed to make.

**Slide 58:** Megan: In addition to the benchmarking, we needed to hear from experts across the federal space. So, let's talk about how we approached this.

**Slide 59:** Initially we thought we were going to hold a couple of huge meet-ups with experts across the federal government, but we quickly realized that we wouldn't be able to dive in as deeply as we needed to with any specific team or on any topic, so we switched to interviews. We reached out across the federal government to identify people and teams that had the expertise we needed, and conducted interviews with individuals and teams.

**Slide 60:** We interviewed more than 35 people from more than 20 agencies and programs, including;

**Slide 61:** Teams at 16 high impact service providers. We wanted to hear from HISPs, because they are generally the most high-touch agencies and programs for the public, and because that "touch" generally involves interactions. We wanted to understand common interactions so our patterns could focus on inclusive experiences for those transactions.

**Slide 62:** We spoke to people at Veterans Affairs, SSA, HHS, FEMA, the Department of the Interior, and the IRS, among others, and sometimes more than one group at a specific agency. And we focused on questions such as what patterns they've identified in their sites and services? How do they think about and incorporate equity and inclusion into their design decisions? We asked them about challenges and pain points, what patterns they would like USWDS to look into, and more.

**Slide 63:** We really tried to get at how teams were incorporating equity and inclusion into their processes -- how they thought a focus on diversity, equity, inclusion and accessibility should influence their work -- and what was challenging about creating inclusive experiences.

**Slide 64:** And to dig even deeper into these key topics, we reached out to subject matter experts at TTS's DEIA Growth for Teams, the TTS Diversity Guild, and the Multilingual Community of Practice. We learned a tremendous amount from their perspectives.

**Slide 65:** In a few minutes I will tell you a bit more about how we synthesized the results of all these interviews, but first, let's talk about some of the big themes that emerged from the discussions.

**Slide 66:** Creating more equitable and inclusive experiences is on everyone’s minds. Digital teams were generally further along in implementing accessibility than in considering equity and inclusivity in their design work.

**Slide 67:** We heard that the process of inclusivity is as important as the implementation. It can be hard to figure out how to include historically disadvantaged populations in the design process or usability testing. Digital teams can struggle with how to get the right people to weigh in at the right time, so everyone's needs are represented and everyone's voice is heard.

**Slide 68:** We also heard that personal information is fundamental to an individual's sense of self – solutions that don't support everyone can be very alienating. For example, this means that name fields have to accommodate everything from one-character names to very long names. Or multiple last names. Or names with accents or case differences.

**Slide 69:** We heard from HISPs that complex forms are a real challenge for users. They can be frustrating and alienating, especially during times of stress, such as when someone’s been in a disaster, or when they have to file a report about something that’s happened to them. Interviewees asked for guidance around how we can help the public -- especially those in trauma -- to have a better experience with forms.

**Slide 70:** One design team member said: "People are reluctant to give information because of the lack of trust and any number of concerns. &#91;We need help&#93; building trust into the design process."

**Slide 71:** We heard that many programs are wrestling with making their content available in multiple languages.

**Slide 72:** A design team member said &#34;&#91;We’re&#93; struggling with multilingual &#91;content&#93; and accommodating the proper presentation.&#34;

**Slide 73:** So, let me take a minute to talk about the synthesis and pattern identification process.

All the interviews were pseudonymized; we do this so that each interviewee can feel comfortable to speak candidly.

We had note takers and they prepared detailed notes for each interview. We took the notes from each interview, and pulled out quotes and insights, and created cards for them on a Mural board.

Cards were color coded by role.

Once we had all the quotes and insights for an interview on the board, we analyzed each interview for its major themes.

**Slide 74:** Later, when we had completed all the interviews, we created a crosswalk, where we integrated all the cards from all the interviews, and identified themes across all the interviews. This is when the color coding is helpful, because you can easily see if there are particular areas of interest just to SMEs, or just to digital teams. From there it was pretty easy to pick out the overall themes, including areas of interest, pain points, and priority transactions for pattern development.

So that gets us through interviews and synthesis, but throughout the pattern development process we were also doing a deep dive into the research around inclusive design -- first in a general sense of how it was being incorporated into digital design, and then on a pattern level. In many cases we were lucky to have existing federal government models, but in other cases we had to look to those who are still in the process of doing the work and advocating for inclusive perspectives. Regardless, we looked at all best practices around creating effective designs, including those that are just emerging, so we could incorporate them into the patterns.

After we used all this research to draft the patterns, we reached out again to stakeholders across the federal space to get the feedback on the patterns.

**Slide 75:** This process resulted in identifying the following pattern focus areas:

- User profiles.
- Complex forms.
- Language selection.

**Slide 76:** And these are the patterns we're completing:

- Provide a name
- Provide a date of birth
- Provide an address
- Provide an email address
- Provide a phone number
- Provide a biological sex or gender
- Provide pronouns
- Provide their race or ethnicity
- Provide a social security number
- Provide contact preferences
- Understand expectations and build trust in complex forms
- Help a user progress smoothly through complex forms
- Keep a record of submitted information
- Select a language for a site or service
- Indicate a preferred spoken and/or written language for a site or service

**Slide 77:** Mitch: In support of these patterns, we decided to build some new components and features for the design system as well.

**Slide 78:**	In deciding what components we were going to develop, we looked at the existing guidance we had. We thought about what we were doing. And we looked for gaps, and asked ourselves, what are the opportunities for components to develop?

In the end, we ended up building:

- An **In-page navigation7** component
- **Input Masking** functionality for form inputs, and
- a **Language Selector** component.

What was great about this process was that we were able to develop new components and new functionality, based on real user needs we'd either documented in our pattern guidance, or discovered in the process of building out the pattern section of the USWDS website.

And as we built these components, we were able to draw not only from the deep experience and documentation the design system already provides around accessibility, but we were able to use this alongside the pattern guidance to build new technical solutions that support more inclusive interactions.

And this part is what I was most excited about — getting into some actual coding — but really coding with accessibility and inclusivity in mind, and thinking to myself what's going to make my next line of code produce a better, more effective, more inclusive experience? How is each decision really serving a critical user need?

For example, with the language selector component, I was able to draw from expertly-written pattern guidance for direction which, as a developer, really accelerated my efforts while informing my design and development decisions with an inclusive lens.

**Slide 79:** We've covered a lot of ground in this presentation. But there's just one more important thing to say. As Mitch mentioned, patterns help drive development on a few key components. And we think that this is just the beginning. In fact, we see patterns as driving component development moving forward. Patterns are the horse, and components are the cart. We develop components to support interactions. And I think this is an important human-centered shift to how we'll approach development, how we'll choose components, and how we'll approach modularity and interaction between components.

**Slide 80:** So next month we'll continue the theme, and go in-depth into our new patterns section.

**Slide 81:** Meghan: I really want to thank the people who were so generous with their time and expertise and shared with us how they were thinking about inclusivity and design, provided us with patterns or guidance as a starting point, provided thoughtful feedback, and challenged us to think critically about what we were doing. This couldn't have happened without you, and we are so grateful for your contribution.

**Slide 82:** Now some Q&A. You must have some questions.

**Slide 83:** Thanks for joining today’s USWDS monthly call. Next month, we'll be looking at Inclusive Patterns in depth. Please look out for an event feedback survey from Digitalgov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you in September or lose you to a summer love! Bye!
{{< /accordion >}}

What are design patterns and how do they fit into the design system? Join us to learn more about USWDS Inclusive Design Patterns — upcoming guidance that will help connect components to common service interactions. We’ll preview this upcoming guidance and discuss the process we used to develop it.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
