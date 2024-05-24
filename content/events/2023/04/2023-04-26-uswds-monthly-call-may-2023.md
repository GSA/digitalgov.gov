---
title: USWDS Monthly Call - May 2023
deck: Real-world accessibility
kicker: USWDS
summary: Join us as we observe Global Accessibility Awareness Day and talk about
  the real-world experience of blind users on the web.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsc-6tpzIsHMfAzbOrvIBDAiCipibdW7w
captions: https://www.streamtext.net/player?event=BIS-GSA-2133
date: 2023-05-18 14:00:00 -0500
end_date: 2023-05-18 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - accessibility
slug: uswds-monthly-call-may-2023
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: "2023-uswds-monthly-call-may-title-card"
# YouTube ID
youtube_id: SG6Bbv-uKeg
---

{{< asset-static file="uswds-monthly-call-may-2023.pptx" label="View the slides (PowerPoint presentation, 5.4 MB, 23 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for May 2023" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for May 2023.

This month we're celebrating Mothers Day, which was this last weekend, as I'm sure you remembered (with our logo in shades of pink, purple, and blue), as well as Memorial Day, which falls on Monday, May 29 this year (with our logo appearing in poppy red).

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a blue collared shirt because it's going to be in the 80s here in the beautiful Pacific Northwest. I'd like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](https://digital.gov/communities/community-guidelines/) — you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat. 

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?
First we'll take a quick look at a couple important new USWDS-powered sites.
Then we'll preview the next USWDS release: USWDS 3.5.0.
Then we'll talk a bit more about some follow-up from last month's discussion of our top tasks research, to introduce something we're currently calling critical checklists.
Then we'll spend the rest of our time on a conversation with today's Special guest, Eric Yarberry from World Services for the Blind, where we'll be chatting about real-world accessibility!
And then we'll have some time left at the end for Q&A. So let's get right into it.

**Slide 4:** With site launches. As I said, we've got a couple of important new site launches to announce this month.

**Slide 5:** First, [hhs.gov](http://hhs.gov), the website of the U.S. Department of Health and Human services. HHS's mission is to enhance the health and well-being of all Americans, by providing for effective health and human services and by fostering sound, sustained advances in the sciences underlying medicine, public health, and social services. HHS's homepage features a clean, simple USWDS header at the top of the page. In the hero section we see information about the 988 suicide and crisis helpline, on a mint colored background.

**Slide 6:** And we'd also like to point folks to a redesign for [usa.gov](https://www.usa.gov/), home of USAGov and USAGov en Español. Together, the official guide to government information and services. The redesigned USAGov homepage features a large image of a flag-waving group, with the text "Making government services easier to find." At the bottom of the hero are links to popular questions: how to file a federal tax return, get or renew a passport, locate affordable housing, and get government benefits and financial assistance. If you'd like to read more about the process of redesigning USAGov, check out the USAGov blog at [blog.usa.gov](https://blog.usa.gov).

**Slide 7:** Congratulations, great work to both teams! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8:** Next up, I'd like to talk a little about our next release, USWDS 3.5.0, an upcoming minor release with an accessibility and usability focus.

**Slide 9:** There are a number of key improvements in USWDS 3.5.0.

- **Consistency and legibility of disabled form elements.** We updated and normalized disabled styling across our form elements, making disabled styles more distinct from active styles, and increasing the visibility of disabled elements. We also applied consistent styling to forced colors and high contrast mode, and are phasing out class-based disabled styling. When possible, teams should work to move away from disabled styling on form elements and toward other validation workflows, but in the meantime, we'll do what we can to assure that disabled functionality is obvious and clear.
- **File input experience for voice and screen readers.** We made some important improvements to the file input component that improve its ability to interact as expected with voice command, and to better announce its status to screen readers.
- **Space bar trigger to links styled as buttons.** There isn't any clear consensus on whether sighted users make a distinction between types of actions a button triggers: whether there's a meaningful difference between buttons that follow a link or buttons that trigger a non-link action like form submission. But from the USWDS perspective, we want to make sure that if it looks like a button, you can trigger it like a button, with the spacebar. And in USWDS 3.5.0, now it does. 

But is a link styled as a button actually a button? 

Screen readers will not know whether a link looks like a link or looks like a button. It's parsed as the role we assign it. For these users, we should be as clear as possible about what the element is. If it's a link, it should vocalize as a link, if it's a button, it should vocalize as a button. Screen readers have a more direct connection to what the element is, and our markup should reflect that. So this is why we also want to be clear that **role="button"** is reserved only for button elements and not link elements.

So, with USWDS 3.5.0, if it looks like a button you can trigger it as you would a button. And as it's been for some time in the design system, only button elements should get a role of button.

- **Updated Identifier accessibility link.** Next, we'll be updating our Identifier's Accessibility Statement link. The Identifier is meant to link out to a service or agency's Accessibility Statement as required by OMB policy. Currently the link reads Accessibility Support, but to align the component more closely with policy, we'll be changing it to Accessibility Statement. 

- **And finally, in USWDS 3.5.0, we're updating our form guidance to finally suggest labeling both required fields and optional fields.** This guidance has been a bit behind standards and norms, and we're finally updating and clarifying this guidance so we recommend that almost all forms — particularly those of three or more fields — label whether a each individual field is optional or required. 

- And those are the noteworthy updates in USWDS 3.5.0. But there are a few more nice developer-centered improvements that we'll leave to the release notes!

**Slide 10:** We're wrapping up USWDS 3.5.0 now and it will be out next week.

**Slide 11:** Next I'd like to introduce Amy Cole, a contractor, and the Accessibility Expert on our team to talk about a new documentation tool we've started developing in response to what we heard from all of you in our recent top tasks survey.

Amy, welcome — can you introduce yourself, give a brief self description as some real life alt text, and tell us a bit about what you're working on?

Amy: Thanks Dan, I'm Amy Cole, and my pronouns are she/her. I'm a contractor and — as Dan said — I'm the accessibility expert on the USWDS team. I’m a caucasian woman with shoulder length curly brown hair wearing a maroon short-sleeved shirt and a chunky statement necklace.

**Slide 12:** One of the big takeaways we heard from folks in the top tasks analysis we discussed last month was that teams are interested in using our website to know more about the Section 508 and WCAG conformance of our components.

In general, we consider our design system components to be Section 508 and WCAG 2.1 conformant, though we do always hear about accessibility bugs and other opportunities to improve their functionality through GitHub issues and other feedback mechanisms. And we always prioritize any accessibility-related issues we receive, so if you ever notice anything in our components that you think can be improved, please let us know.

**Slide 13:** But when it comes to documenting the conformance of our components, we think the answer isn't just a green checkmark or a simple badge like the silly badge on this slide that reads "Section 508 Inside!"

That does have some value, but we think there's a next level of value, beyond the signal of conformance, that comes from how we made this assessment — of what accessibility and usability tests we consider critical to the success of a component. 

We want teams not only to be confident in the accessibility and usability features built into our components, but to be empowered to test the success of their own implementations — especially since there are some aspects to accessibility and usability (like using the appropriate heading level in some components) that are impossible to test before implementation.

**Slide 14:** We're thinking of this documentation tool as component-based "critical checklists" for every component in the design system. Our minimum viable product here — or “phase one” if you will — will outline the relevant WCAG 2.1 requirements for each component, along with how to test this requirement, and when we last tested. And as the critical checklist project matures, it could expand to include other aspects of best-practice component accessibility and usability that aren't yet captured in any formal standard.

**Slide 15:** The critical checklists will be easy-to-check functional accessibility and usability tests. 
We know teams can feel overwhelmed with accessibility. And we also know plenty of folks are on lean teams with limited technical resources. As much as possible, these critical checklists will be designed for anyone with modest technical skills to follow. They'll be written in nontechnical plain language, and focused on outcomes instead of on technical markup.

**Slide 16:** Critical checklists should outline what all of us can do to validate (and revalidate!) component functionality, both internally at USWDS and for project re-validation. When it comes to accessibility, the more evaluation the better!

It's also possible that as we move forward with these checklists, we'll identify — and it's certain this community will also help us identify — usability and accessibility heuristics that we may not yet meet. Critical checklists will be a place to capture those measures as well.

We think there's an excellent opportunity here to not only be accurate and transparent about documenting what goes into our components, but also to be a resource for project teams, and perhaps to point in the direction of future improvements.

**Slide 17:** We aim to publish at least one of these checklists by next month’s call and to establish a publishing schedule for the rest of them as well. 

These checklists will also play an important role in a couple of other related process documents we're developing: a component maturity model, a component proposal framework, and a component acceptance framework. 

**Slide 18:** As we develop this content and start to publish our first drafts, we'll be reaching out to Feds who've expressed interest in providing usability feedback to the design system in order to solicit input on our checklist approach; so be on the lookout for some communication from us over the next month.

**Slide 19:** With your help, we'll make some progress towards publishing accessibility checklists by next month! So stay tuned, and I'll pass it back to Dan to introduce our next segment, and happy Global Accessibility Awareness Day everyone!

Dan: Thanks Amy. I think there's a lot of promise in these checklists — sharing and building practical accessibility awareness from a number of different angles both here a the design system and across project teams.

**Slide 20:** For the next half an hour, let's talk about real-world accessibility. Specifically, What’s it like to be blind and use the web here in 2023. 

**Slide 21:** Joining me today is Eric Yarberry, an educator, an advocate for the blind and visually impaired, and the president and CEO at World Services for the Blind. Eric is blind, and as we get started I wanted to mention something that will be a little different about this chat. I will be occasionally unmuting as we speak together to provide the type of "yeahs", "oks", and other social cues that we sometimes keep muted and convey gesturally or with facial expression in video conferences. So while this may be a little different and a little distracting, I hope you can get used to it since it's important to a good conversation. Which I can wait to get into!

**Eric — welcome — it's great to have you with us today. To get started, can you take a sec and tell us a bit about who you are and what you do.**

**ANSWER:** My name is Eric. I'm the President and CEO at World Services for the Blind. I've been blind my entire life and so I'm honored to be representing our community on this call today. It's fun getting to provide services to blind and visually impaired individuals.  A lot of what I do is working with adults who lose their vision later in life.  As you'll hear, in our call we will talk about teaching blind or visually impaired individuals how to use the internet and some of the things that impact us blind individuals in our day-to-day lives. 

**QUESTION:** You're an educator. What kind of advice (or warnings!) do you give to newly blind students learning about how to interact with digital sites and services?

**ANSWER:** One of the first things I always tell folks is that you've got to re-learn the internet. The internet is visually based. I teach them to understand that the website content appearing on the screen when you first open it is the most important content. It’s the same as the concept of “above the fold” when you read a newspaper. 
We have to teach them how a screen reader actually reads a website. I encourage people to stay motivated and positive about it by finding a website that they really like to use. They can go back to that site to build their skills.
Often, we encourage individuals who have just lost their vision to pick up a mobile device and learn to use the accessibility tools built on a mobile device, and then gradually build up to a desktop computer.

**QUESTION:** I was wondering, can you think back to a time when you had a website experience that was frustrating to you? Can you describe that experience, and how you dealt with it?

**ANSWER:** I was cooking and pulled up a recipe on my phone. The website had an ad on a timer. You may have seen an ad that ticks down from 15 to 0 seconds. Normally it’s not frustrating because it means the ad will change, and you can ignore it. But for someone using screen reader software, every second that changes it announces that second. So, I’m trying to read this recipe, and it just keeps reading the timer. Or sometimes I open a website and an automatic video starts playing.
I’m starting to see more and more websites where the video is automatically muted, which is awesome. But even when the ads aren’t audible, they still have that timer, and I think that’s the most frustrating thing. More advanced screen reader users can find workarounds like scrolling down on the website, taking a screenshot, and importing it into an ocular character recognition app. It’s a lot of workaround to read a recipe. 
Especially being blind, you just get used to piecing things together and problem solving.

**QUESTION:** Do you find websites more usable and accessible today then they were in the past? What's better? What's worse?

**ANSWER:** I absolutely find them more accessible. I remember … so now CSS is really established. And I remember when Flash was a thing, and I know people are probably cringing because that's how I feel.
Back then, websites would be designed in a table. If you understand the way a screen reader works, it reads by throwing everything into one column, starting at the top, and reading all the way down.
The development of websites has come so much further. Alt text is fantastic. CSS makes things a lot easier. Headings, too. Just these things that most of us take for granted have definitely made a huge impact.

**QUESTION:** Have you noticed anything getting worse?

**ANSWER:** Pop-up ads. They are everywhere. Ads pop up to encourage you to open an account to get around a paywall or sign up for a newsletter. Sometimes I can’t find the close button on the popup. You may have to close and re-open a browser just to get out of it. And then, instead of saying “close” a screen reader might read the X as a times sign. So, you have to keep all of these things in mind. You need to know that the times sign is what you have to select to close the popup. There are all different kinds of things you have to keep in mind.

**QUESTION:** Let's say you're visiting a site for the first time, what are your green flags and your red flags — what are your first indications that a website or service experience is going to be particularly good? or particularly bad?

**ANSWER:** Image descriptions are very helpful. So are heading structures, of course. So are links that are properly labeled instead of vague labels like “click here for this item.” Vague labels such as “click here” make it very tough to find items.
A red flag is a website that just seems like a field of links, with forms that are mislabeled or not labeled at all. If I have to navigate a form that has unlabeled edit boxes, it’s really a chore. Sometimes, blind people have to use these poorly labeled forms for our jobs, which makes work more difficult.

**QUESTION:** What makes good descriptive alt text?

**ANSWER:** Show, don’t tell. For example, if you are describing a meme, make sure you only say the people or subjects that are actually in the meme. If I don’t understand it, I just don’t get the meme; it’s not your fault. Be direct, act like you are describing it to a friend, use color, and don’t be afraid to use words that imply vision. Blind people still say “see you later” and “did you watch that movie,” so don’t tiptoe around words like that.

**QUESTION:** What about data visualizations? Do you ever browse raw data if it's included with a data visualization?

**ANSWER:** I always appreciate an image description that gives context and briefly describes any obvious trends in the data. You should also provide access to the raw data. Provide the raw data somewhere accessible, for example, in a spreadsheet. I like spreadsheets. I know how to use spreadsheets and formulas and things of that nature. And as someone who has been using a screen reader for a while, it’s easy for us to access data that way.

**QUESTION:** Do you follow "accessibility" links and provide feedback when you find accessibility issues on sites? What do you hope to find on an accessibility page?

**ANSWER:** Absolutely. If I have an issue or if I notice the website is really well done, I think it's important. A lot of the people that we work with are frustrated, and someone has got to speak up. 
We’ll start off with the positive. One thing that's great is if I can access the accessibility link and a field for suggestions where I can actually share my contact information. I like to see a statement on the efforts of the organization and if possible a name of someone who is in charge of the accessibility efforts. If I fill out that form, a response within the first 48 hours would be awesome.
When I’m accessing that form I am doing it because I intend to actually use the website. If the website isn’t accessible and I could go find that information somewhere else, I’m just going to go somewhere else. But in some cases it’s for work, and I like the services, but it’s just not accessible. I am there to work with those folks to make it accessible. I don't want to come across as a nuisance; trust me, it's not my intention. I didn't choose to be blind. It's just the fact of the matter. I want to come across as respectful, and I teach the folks I work with to be respectful. I know that it’s not people’s first intention to be inaccessible. 

**QUESTION:** What's something you wish more people knew about how blind people use the web?

**ANSWER:** The fact that blind people do use the internet, I think that shocks people. I will make comments on websites like, “Hey, I appreciate that from a blind perspective.” And I'll get replies to my comments such as, “Well, how are you blind? You're using the internet.” I think, oh, man, here we go. I don't go round and round with people anymore because it's not my goal to educate the world. But I appreciate this opportunity to get to share my experiences with you. Know that blind people do access the internet. 
Especially with technology; that’s how we do our jobs. And that's keeping blind and visually impaired folks employed, and actually providing meaningful lives. We could go down that rabbit hole, but I think it's just important to know that we do access the internet, and we do appreciate the adjustments you make to your websites and your content. It helps so much. It really does.

**Slide 22:** Q&A

**Slide 23:** Thanks for joining today’s USWDS monthly call. Next month, we’ll be digging into critical checklists. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, see you next month, and as Mike Horton at the Section 508 program says: Have an Accessible Day!

{{< /accordion >}}

Join us as we observe Global Accessibility Awareness Day and talk about the real-world experience of blind users on the web. 

In this session, we’ll:

* Learn from the real-life experience of blind users of screen readers.
* Understand the most common frustrations blind users have with their experience of the web. 
* Dig into some of the differences between manual testing and real-world use. 
* Discuss design system goals for including accessibility in future monthly calls. 

**This event is best suited for:** Designers and developers of all levels, leadership

## Speakers

* **Dan Williams -** Product Lead, USWDS
* **Amy Cole -** Accessibility Specialist, USWDS
* **Eric Yarberry -** President & CEO, World Services for the Blind

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
