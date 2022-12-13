---
title: USWDS Monthly Call - October 2022
deck: How do we help users input information that becomes their user profile?
kicker: USWDS
summary: We’ll discuss our approach to developing User Profile design patterns,
  look at some specific guidance, and talk about why it’s so important.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: null
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-user-profile-patterns-oct-2022-tickets-441135597447
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2022-10-20 14:00:00 -0500
end_date: 2022-10-20 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - user-experience
  - content
  - design
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
slug: october-2022-uswds-monthly-call
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: uswds-monthly-call-october-title-card

---

{{< asset-static file="uswds-monthly-call-october-2022.pptx" label="View the slides (PowerPoint, 7.2 MB, 67 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for October 2022" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for October 2022. Fall is here. It's pumpkin and decorative gourd season. And here we see the USWDS logo in a pumpkin-colored orange and green.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and this is my avatar: dark hair, blue sweater, collared shirt. In real life I have a blue sweatshirt, but no collar. I'd also like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital [dot] gov event, you agree to abide by Digital.gov’s community guidelines at digital.gov/communities/community-guidelines/ you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat.

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

First we'll look at a nice new site launch

Then I'd like to spend a moment talking about spam and community guidelines

Then I'll highlight some product updates

And then we’ll spend the rest of our time here today talking about user profile patterns, specifically patterns addressing contact information like name, address, and other contact information!

And if all goes well, we'll have some time left at the end of Q&A. So let's get right into it.

**Slide 4:** With a nice new site launch

**Slide 5:** This month, it's exciting to share beta.usa.gov (and beta.usa.gov en español) with you.  For USAGov, launching these sites is the next step toward continuing USAGov’s role as the federal front door. Explore the new content structure focused on one user intent per page and interactive features that will allow users to find their answers quicker. On the beta.usa.gov homepage a crisp red, white, and blue design. We see an alert notifying folks that this is a beta site, a link to USAGov en Espanol in the top-right, and a blue hero box with the text: Welcome to the USA.gov beta site, the first step to a new USA.gov.

**Slide 6:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** Spam and community guidelines

**Slide 8:** USWDS Community page

**Slide 9:** Digital.gov community guidelines

**Slide 10:** Community guideline highlights

**Slide 11:** Thanks for being a good community!

**Slide 12:** So now, a few product updates.

**Slide 13:** So, 2.13.4: Last month we'd talked about how we were preparing a security update for USWDS 2.x. Well we're taking a second look at that — not because there were any special security concern about this release, but because we felt it might be an opportunity to strip the package of a lot of its development dependencies, since the package is no longer in active development. For us, it wasn't making sense to manage — for example — a lot of out-of-date dependencies related to a library tool we no longer use, and we're going to take a bit more time with this one to see if we can really simplify this package for long-term maintenance.

**Slide 14:** But we did just have a new design system release this week: [USWDS 3.2.0](https://github.com/uswds/uswds/releases/tag/v3.2.0) — which is packed with a number of new changes, may related to accessibility.

**Slide 15:** Notably, we've made a number of changes to streamline, simplify, and improve how information in the banner is read by screen readers.

First off, we're updating the ARIA label for the component to "Official Website of the United States government." We're not changing the text of the banner for those who read it, but we learned that some screen reader users were mis-hearing the banner text as "unofficial" website and not "An official" website. Our change to the ARIA label and the aria-hidden attribute help assure that screen reader users are getting a clear message.

We've also slimmed down our description of the lock icon in the banner extended text, and we've labeled the Flag image in the top corner as a decorative image, since it doesn't add new information for screen reader users.

**Slide 16:** Other improvements in USWDS 3.2.0 include:

Improved accessibility of usa-validation
Improved screen reader output for character count
Valid ARIA label in Identifier
Fixed potential incompatibility with M1/M2 Macs
Improved alignment of Alert and Site Alert
Allow dynamic initialization of Tooltip

**Slide 17:** So check out USWDS 3.2.0 — there's more information on everything I've mention linked in the release notes!

**Slide 18:** And now let's move on to user profile patterns. We've been working hard over the last few months to bring patterns and pattern guidance to the design system. This work is finishing its review now and we're working to finalize the release. Next month, all this work will be live.

Over the last couple months we've introduced you to the concept of design patterns, why they're important for the design system, and the research and development approach we used to arrive at them. Today we’re going to keep going with patterns and start taking a look at some user profile patterns, starting with contact information patterns. And I'll do this with the help of a few guest speakers.

**Slide 19:** I'd like to introduce a couple members of the inclusive patterns team. First Meghan O'Meara, a Content Strategist and a contractor on our team. Meghan, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Hi, I'm Meghan O'Meara, and I'm the content strategist on the Inclusive Patterns team. My pronouns are she/her and I have chin-length brown and gray hair. I’m located in Michigan and if my screen wasn’t blurred you’d see my dogs coming in and out of the room.

**Slide 20:** Thanks Meghan, and I'd also like to introduce Jonathan Bobel, an Engineer, and a contractor on the Inclusive Patterns team. Jonathan, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Hi, I'm Jonathan Bobel, and I'm a UX Engineer on the Inclusive Patterns team. I’m located in Ohio. My pronouns are he and him. I am wearing glasses and have a thick brown beard and short brown hair.

**Slide 21:** We can think of patterns as "things users do again and again on our sites and services." A good way to think about a pattern is as a common interaction. When we say pattern, a reasonable synonym is interaction.

**Slide 22:** But this can seem a little abstract, so we've chosen a specific rubric for how to think of a pattern. A pattern completes the sentence, "Help a user to [blank]."

**Slide 23:** Such as,

Help a user to **review a complex form**.
Help a user to **refine search results**.
Help a user to **recover from an error**.
Help a user to **make an appointment**.
Help a user to **upload a document**.
Help a user to **provide their race and ethnicity**.

And, of course, what we'll see in just a moment:
help a user to **enter their name**.

We all know that a website is more than just components on a page — the whole reason all those components are there is to help someone do something. And patterns are the human-centered link between components, interactions, and services.

**Slide 24:** Patterns and pattern guidance have the opportunity to describe important user needs, and to give any designer a head start to understanding their specific audience and needs. And from our perspective, effective patterns have a responsibility to reduce barriers to participation through every interaction.

What does this mean when it comes to name, address, and contact information? What barriers might this information introduce? I'd like to pass it to Meaghan to talk about why these are critical patterns, and what we've learned from our research.

**Slide 25:** Meghan: As we discussed in the last monthly meeting, we did a lot of research to learn from our colleagues around the federal space, and hear from them what types of interactions they are wrestling with and what they would like USWDS to work on. We primarily spoke with people on web teams at high impact service providers  —  also known as HISPs  —  the agencies and programs that have the most direct contact with the American people. From these digital teams we heard how challenging asking about personal information can be. Teams discussed trying to design effective information collection tools, while also balancing validation requirements and reporting obligations. At the same time, teams wanted to respect the true diversity of their audience and the individuals that use their sites. We see a colorful illustration of people on the next slides.

**Slide 26:** This respect  —  which often means supporting users from varying cultures, backgrounds, and perspectives —  and in all sorts of different situations  —  was something digital teams felt was critical to good and effective experience design. But it is also something that supports various executive orders, including [Executive Order 14058](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/) Transforming Federal Customer Experience and Service Delivery to Rebuild Trust in Government and [Executive Order 13985](https://www.performance.gov/equity/) Advancing Racial Equity and Support for Underserved Communities through the Federal Government.

**Slide 27:** We’ve developed ten patterns to help users:

1. Provide their name
2. Enter their address
3. Provide their email address
4. Enter their phone number
5. Indicate their contact preferences
6. Enter their social security number
7. Enter their date of birth
8. Provide their race and ethnicity
9. Provide their biological sex or gender, and
10. Share their pronouns

Some of these patterns are pretty straightforward and some of these are really complicated  —  and some of these are only just emerging in a rapidly changing environment.

**Slide 28:** Today we are going to focus on the first four: helping users to provide their name, enter their address, provide their email, and enter their phone number. In future Monthly Calls we’ll dive into the others.

**Slide 29:** As a reminder, we'll walk through a typical pattern guidance page on this and the next few slides. You’ll see different elements of the pattern highlighted on each slide. Here we see a USWDS Pattern page. Each pattern has a guidance page, just like a component.

**Slide 30:** Each pattern has a description, how it can apply to your website or service, and how to approach a solution.

**Slide 31:** Each pattern has Guidance. Recommendations on what to do  —  and what not to do.

**Slide 32:** Each pattern has Considerations: Practical implementation details, often related to usability and accessibility.

**Slide 33:** Most patterns have components and code: USWDS components used within the pattern and how to implement our solution in code.

**Slide 34:** And patterns have supporting information: Other examples, related components, and sources we used in addition to our direct research. So let’s get started.

**Slide 35:** Let's start with name patterns. It might seem that asking for someone’s name is pretty straightforward  —  after all, everyone has one! But personal names are surprisingly complicated. For example,

**Slide 36:** In some cultures people have only one name. So if you require a first and last name, not only will the user not have one of each, but they wouldn’t know in which field to place the one name they have.

**Slide 37:** Names can be as short as a single letter. In China, what is transliterated as the letter “E” is one of the most common family names. If you are requiring more than one character for a name, some users won’t be able to complete your form.

**Slide 38:** Names can also be very long. [For instance Hawaiian driver's licenses](https://www.usatoday.com/story/news/nation/2013/12/30/hawaii-long-name/4256063/) and ID cards have room for 40 characters for last names, 40 for first names, and 35 characters for middle names.

**Slide 39:** Many languages require special characters or diacritics to accurately represent their names.

**Slide 40:** And names can have multiple upper- and lowercase letters, as well as multiple spaces or hyphens.

**Slide 41:** And in some cultures it is common to have two  — or more  —  last names.

**Slide 42:** You may have heard that Anna May Wong, an American actress of Chinese heritage, will be the first Asian American on U.S. currency. A true trailblazer, she will be on a new quarter. Born Wong Liu Tsong, she was known professionally as Anna May Wong. In many cultures, including Chinese, the family name comes first and the given name comes second, making “first name” inappropriate and potentially confusing.

**Slide 43:** The name pattern is designed to make it easy for users to enter their name in the format required. Names are often used to validate identity, and this helps collect the elements effectively and with as little confusion as possible.

As we discussed, the challenge is that names can vary a lot, and it can be really confusing to try to enter your name into a system that doesn’t support it. It can also be unclear what information you need to provide in order to validate your identity when you’ve changed your name.

This pattern is designed to be used when you need to ask for a user’s name as might appear on government documentation like a Social Security card. We recommend only asking for a name if you really need it and then, be specific about what you’re asking for. For example, “Enter your name as it appears on your passport.”

Here we see a name pattern composed of three fields and some supporting information. We see **First or given name** (for example: Jose, Darren, or Mai), **Middle name**, and **Last or family name** (for example: Martinez Gonzalez, Gu, or Smith).

The pattern guidance recommends providing multiple text entry fields, with direction on what to do if the name doesn’t fit into the provided format.

Our pattern guidance also suggests

- Supporting long text fields  —  and short names
- Supporting a rich array of special characters
- Allowing users to enter more than one name in each field
- Allowing both upper and lowercase letters in each field, along with hyphens, apostrophes and blank spaces
- And we address asking for a maiden name  —  we recommend against this practice.  But if you do need a previous name, ask for it.

**Slide 44:** At this time we are recommending that you consider incorporating “given” and “family” name into your name field labels. This slide highlights the **First or given name** and **Last or Family name** labels in the name pattern. This seems to be an emerging best practice and also addresses some of the challenges with non-Western European names.

**Slide 45:** As I mentioned, if you don’t need to parse apart the pieces of a name  —  if you don’t need to validate the name, for instance  —  just ask for the full name in one field.

**Slide 46:** And if you will be reaching out to verbally speak with someone, or expect formal correspondence, consider asking how they’d like to be addressed. For example, Dan, or Mr. Gonzalez, or Dr. Gonzalez.

**Slide 47:** Addresses patterns present some special challenges as well. There is more variation in address format, even within the U.S. and its territories, than we may be aware of.

**Slide 48:** For example, many Puerto Rican addresses require an Urbanization code or name.

**Slide 49:** Many rural areas, including on Tribal lands, don’t follow the usual conventions of number and street.

**Slide 50:** There are all sorts of different complexities of context and situation that impact addresses and need to be considered:

Some people may be unhoused, and not have a permanent physical address, but may be able to receive mail at a shelter.

People may be temporarily unhoused due to a disaster, and need to communicate their physical address for disaster assistance, but a temporary mailing address while living elsewhere.

Multi-family dwellings, group homes, and more can add to the complexity. There’s a lot to think through to make sure everyone can effectively communicate their address.

**Slide 51:** The address pattern guidance is for domestic U.S. addresses, including U.S. territories and military outposts. The guidance recommends providing a number of common fields:

- Street address
- Street address line 2
- City
- State, Territory, or military post
- and ZIP code

And some less conventional ones, such as Urbanization and Google Plus Codes, if your data collection needs and audience require them. Google Plus Codes identify a physical address, including those that are not identifiable by a typical street address. They can be used to identify even very remote physical locations, and some Tribal Nations are using them.

If your audience includes the residents of Puerto Rico, be sure to include the Urbanization field. That is an integral part of their mailing address.

It's important to note that on this slide, we've included all the fields associated with a Physical Address pattern —and put them in two columns to fit on the slide —but in an actual digital application, we would always keep all the fields in a single column.

**Slide 52:** The address pattern guidance also suggests you

- Support long text fields
- Support a rich array of diacritics, accents, and alternative characters
- Consider using the autocomplete attribute on address input fields
- If your program does not serve the armed forces or U.S. territories, you may want to provide links to related resources for these users if such resources exist
- **Do not** assume that people can receive mail at their physical location

**Slide 53:** There's some more specific guidance for mailing addresses.

If you need both physical address and mailing address, provide a checkbox for “same as physical address” to auto-populate the mailing address if they are the same.

The Google Plus Code does not apply to mailing address

A street address is required for a mailing address, but it may not be required for a physical address

**Slide 54:** While we were working on the address pattern, we did make an unwelcome discovery. Users of assistive technology, especially screen readers, had a consistently difficult time navigating the Combobox used for the State dropdown.

When the address pattern is published, you'll notice a change in how we're approaching the treatment of some elements because of these challenges.  We’ve replaced the Combobox with the Select component. This change will be making its way through related component guidance and templates within the design system, so stay tuned for more information.

**Slide 55:** The email address pattern is pretty straightforward, but there are considerations and opportunities.

**Slide 56:** We recommend you clearly state why you need someone’s email address and under what circumstances you would use it to contact them.

**Slide 57:** Email addresses can be very long. Make sure to accommodate up to 256 characters  —  which would be a really long (but valid!) email address.

**Slide 58:** Email addresses can get complicated. Simple validation is best. We do recommend you validate formatting by checking for an at symbol that is preceded and followed by one or more characters. We also recommend both client-side and server-side validation, if possible.

**Slide 59:** Here's our email address pattern guidance:

- Make sure to accommodate up to 256 characters
- Allow people to paste their email address and consider enabling autocomplete to enter the address if they’ve entered it before.
- Also, consider the safety implications associated with people who share email addresses. You may need to ask for permission to leave potentially sensitive information.
- It is great if you can check for common misspellings of popular email providers  —  but don’t autocorrect them! Warn people if you detect a likely misspelling, but allow them to continue, since it might be a genuine email address.
- Don’t restrict top-level domains, unless you have a very specific audience, such as only people with .gov or .mil addresses.

This slide shows an email address field with a section below asking if sensitive information should be sent via email.

**Slide 60:** You might not think entering a telephone number is a particular challenge, but think about a person displaced due to a crisis. They might be sharing a phone with others. They might be very anxious and easily frustrated. Stress and trauma can make seemingly simple things much more difficult.

**Slide 61:** Some of the key guidance associated with helping users to enter phone numbers addresses this:

- Use “text” input type  instead of “numeric”, since numeric inputs carry some usability and accessibility problems.   But you can help folks out by using the inputmode="numeric" attribute in that text field to both restrict the field to numbers and to automatically enable the numeric keyboard on mobile devices. On this slide we see an image of a mobile device with a phone number field on it. The device shows the numeric keyboard activated…
- If you will be contacting the individual by phone, ask whether you can leave sensitive information in a voicemail or text message. Remember people may be sharing phones with others, and may not want to share personal information with them, too.
- Another recommendation we made is that you consider using an input mask to shape the correct format, allowing the user to type in the numbers and see it represented in a familiar format. And to demo the input mask component, I’m going to turn it over to Jon.

**Slide 62:** Hi, this is Jonathan. One of the components that aligned well with the profile pattern is an Input Mask. An Input Mask is an overlay on an input that indicates the format of valid input values. It gives a visual or screen-read indication of a common input pattern to assist the user. Some of these common patterns include 5 or 9 digit US ZIP codes, social security numbers, and phone numbers. You’ve probably seen them in action elsewhere in forms online, and we’re adding this optional functionality to the USWDS.

Let’s take a look at the Input Mask.

**Slide 63:** [Storybook DEMO of Input Mask]

- In these three inputs you’ll notice an underscore and/or dash that show the different masks per input type.
- The JavaScript utilizes the input’s placeholder attribute to render a span on top of the input with underscores. As the user types, the underscores are replaced with the actual input from the user. Additionally, the code will restrict the input’s max length to the placeholder’s character count. This includes the underscores, dashes, and back slashes.
- If the user tries to type in invalid characters per the supplied pattern, the mask will recognise that and remove the character. [Example: typing in letters to the US ZIP mask]
- The aria-describedby hint will give the user a sample of what input is expected. This also is read by the screen reader to assist with accessibility.
- Depending on the mask, when you’re finished typing the end product will visually show up with the mask applied. For example: the phone number renders with dashes, making it easier to scan and read as a phone number.
- The input mask component can be extended, it isn’t limited to just these three examples. You just have to make sure to include a viable placeholder and pattern attribute as well as an aria-describedby hint.

In fields with a specific expected format like Social Security Number or ZIP code, an input mask allows you to constrain and shape the information being entered into that format, without impairing the user’s ability to copy/paste or correct mistyping. It’s an accessible component that will help the user enter valid information.

Dan?

**Slide 64:** This is Dan. What you’ve seen here is an overview of user profile patterns and how we arrived at pattern recommendations…and a brief demo of the input mask component. Next month, we’ll take a look at some of the other patterns we’ve developed, with a focus around helping users provide personal information and completing complex forms.

**Slide 65:** And while these patterns and components are designed based on extensive research, we expect them to evolve as the equity and inclusivity landscape evolves and as we learn more from you. We invite you to share your input in #USWDS-public slack, GitHub issues, or by emailing the USWDS team.

**Slide 66:** Now some Q&A. You must have some questions.

**Slide 67:** Thanks for joining today’s USWDS monthly call. Next month, we'll be looking at User Profile Patterns Part 2, where we get into more detail about personal information.

Thank you, and see you in November!

{{< /accordion >}}

Many of the digital solutions we create rely on collecting personal information (like name, address, and phone number), allowing programs and services to connect with people who need assistance. Some of these people may be impacted by housing insecurity, homelessness, or displacement due to disaster.

When what we ask for doesn’t allow users to confidently and accurately communicate their answers — or allow them to update this information as their circumstances change — we may have created a poor user experience and eroded trust from the start. We’ll discuss our approach to developing User Profile design patterns, look at some specific guidance, and talk about why it’s so important.

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
