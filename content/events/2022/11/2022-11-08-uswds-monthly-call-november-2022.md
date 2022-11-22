---
title: USWDS Monthly Call - November 2022
kicker: USWDS
summary: Continuing our look at user profile patterns
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-user-profile-patterns-part-2-nov-2022-tickets-463996765817
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2022-11-17 14:00:00 -0500
end_date: 2022-11-17 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - user-experience
  - content
  - design
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
  - austin-hernandez
slug: uswds-monthly-call-november-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2022-uswds-monthly-call-nov-title-card
---

{{< asset-static file="uswds-monthly-call-nov-2022.pptx" label="View the slides (PowerPoint, 14.1 MB, 82 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for November 2022" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For November 2022. Fall is here, and the USWDS logo is colored in orange, gold, green, and brown. Thanksgiving is right around the corner. Veteran's Day was last week. And, relevant to today's conversation, this week is Transgender Awareness Week.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and this is my avatar: dark hair, blue sweater, collared shirt. In real life I have a red sweater, changing things up. I'd also like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](digital.gov/communities/community-guidelines/) you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat.

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? 
First we'll highlight a whole lotta product updates.
And then we’ll spend the rest of our time here today talking about user profile patterns, specifically patterns addressing race and ethnicity, gender identity and sex, and pronouns!
And if all goes well, we'll have some time left at the end of Q&A. So let's get right into it.

**Slide 4:** So now, a few product updates. It's been a busy month.

**Slide 5:** Monday [we released USWDS 3.3.0](https://github.com/uswds/uswds/releases/tag/v3.3.0). This release is focused on new components and support for the patterns work we've been discussing for the last few months. We've got three new components and one updated component in this release.

**Slide 6:** The first new component is [in-page navigation](https://designsystem.digital.gov/components/in-page-navigation/). In-page navigation allows users to specific sections on a long content page. On this slide we see the in-page navigation component page, and we've put the link to this component in the chat.

**Slide 7:** We also released a [language selector component](https://designsystem.digital.gov/components/language-selector/) in USWDS 3.3.0. As we heard a couple months back, the consistent placement, interface, and behavior of the language selection component allows users to easily find and access content in the language the user is most comfortable in. This component supports three new patterns: 

Select between two languages, 
Select from three or more languages, and 
Find selected content in other languages

On this slide we see the in-page navigation component page, and we've put the link to this component in the chat.

**Slide 8:** And our final new component in USWDS 3.3.0 is [Input mask](https://designsystem.digital.gov/components/input-mask/). An input mask is a string expression that constrains input to support valid input values. It helps users better enter formatted content like Social Security Number, telephone numbers, and ZIP Code. On this slide we see the in-page navigation component page, and we've put the link to this component in the chat.

**Slide 9:** And finally, we made an update to the memorable date component. As a result of the usability testing we performed in support of our Date of Birth pattern, we learned that using a select drop down for the month field resulted in more clarity and a simpler experience for entering memorable dates. So if you include memorable dates in your service, consider using our revised component markup and replace the numeric text input for the month with a select.

**Slide 10:** And that's USWDS 3.3.0. It is out now.

**Slide 11:** We've also been talking about inclusive patterns for a few months now, and all of that work is now live and published. Our new pattern guidance is drawn from research and conversations with teams from more than 20 government agencies and programs, including 16 high impact service providers. This report summarizes what we did and what we learned, how teams are supporting inclusive design. On this slide we see the hero image of the report and the text Inclusive Design Patterns: Working together to reduce barriers to participation through every interaction. And that's what it's all about — what we've been talking about for the last few months and what we'll discuss today as well.

The report is available at [designsystem.digital.gov/together](designsystem.digital.gov/together). So check out the report and share it with coworkers, colleagues, and anyone that might find it useful.

**Slide 12:** We've also published the pattern guidance itself at [designsystem.digital.gov/patterns](designsystem.digital.gov/patterns). This slide shows the patterns homepage on the USWDS website, pointing to three pattern families: Complete a complex form, Select a language, and Create a user profile.

**Slide 13:** And here are just a couple examples of USWDS pattern guidance. Here's a language selection pattern: [Select from three or more languages](https://designsystem.digital.gov/patterns/select-a-language/three-or-more-languages/). This pattern is meant to help a user choose from multiple available languages. This slide shows the top of the **Three or more languages** pattern page on the USWDS website, with the name of the pattern and some general information about the pattern.

**Slide 14:** And here's another example, [the Address pattern](https://designsystem.digital.gov/patterns/create-a-user-profile/address/). The address pattern is meant to help a user enter their physical or mailing addresses for successful communications. And these are just two of the 17 new patterns that are available now.

**Slide 15:** I'm going to take a quick live look at all this new work on our website in a second, but I wanted to call out a couple new website features that I think have really made a big difference. The first is our new in-page navigation component. I found it really, really easy to add this component to our site, and to tune its properties and settings so I was getting just the output and interaction I was expecting. Our component uses JavaScript to generate the contents of the navigation, so you're not constantly having to keep the nav in sync with your content. It's about as simple as adding an aside with a special class to your template, and the component does the rest. 

As we see on this slide, our in-page navigation appears on the right side of the page with a default heading that reads On this page. In my experience using our site with this in-page navigation, I've found it much easier to understand the content of pages and more quickly get to just what I want.

**Slide 16:** The other thing I'm really excited about is another simple but effective content type: a changelog. We've started rolling out changelogs to our pattern and component pages, and we'll be adding them to template pages and other content pages in the future. These changelogs, which we're calling Latest Updates, appear at the bottom of a page, and show how something has changed over time. If you want to see how a component has changed since you implemented it. This page shows the changelog for our banner component. We'll call out when we've made any meaningful changes to the component — changes to markup, styling, JavaScript, or guidance. We'll call out when we think we've made a breaking change — if using the changed package would cause the old package to stop working — and if the change affects the accessibility of the component. Both our guidance and our code will evolve over time, and these latest updates keep these changes obvious and transparent. This is another new part of our website that our team has found immediately useful. We hope you find it useful as well.

**Slide 17:** So now I'd like to take a quick look at all these new things together on our website. 

[DEMO]

So, what can you do? Well, this new pattern guidance is the beginning of a new open-source collaborative resource. As more agencies use this guidance and contribute to its evolution, it will grow as a resource, address a broader range of individuals, and support a more inclusive government digital experience. 

So check out the report and share it with colleagues and clients that might find it useful. Read through our pattern guidance, think about how it might apply to your work, and if you have feedback, resources, or research that could help us make our work better, let us know — in our public Slack (#uswds-public), as an email to our team, or an issue in our GitHub repo.

**Slide 18:** We say it again and again at these events, but it always bears repeating, especially as we talk about new components and new guidance: USWDS is a toolkit of best practices and existing solutions, to help teams focus their time, energy, and resources on high-value unsolved problems — problems specific to your program, mission, and audience. We're a tool for designers, not a replacement for designers — and certainly not a replacement for knowing your audience. Our goal is not to make every site and service look like default USWDS, but to make it easier for any team to adopt human centered design practices — to help teams be more nimble, get up to speed faster, understand key context and constraints more easily, and focus on delivery from sprint to sprint. Folks may look at USWDS and see a set of blueprints for a product — it's not unreasonable! — to see the plans for shiny new fleet of airplanes. But from our perspective, we aren't the airplane, or even the plans, but the runway. We're here to help give teams the tools to accelerate, get off the ground, and point toward their own destinations.

**Slide 19:** While government digital teams are serious about improving the experience of their websites and services, no single team can do it all, talk with every individual, or test with every audience. As digital teams actively seek to understand and address usability, accessibility, diversity, and inclusion in their digital services, they shouldn't have to go it alone. Our new pattern guidance is the beginning of a new open-source collaborative resource that digital teams can use and build from instead of starting from scratch. As more agencies use this guidance and contribute to its evolution, it will grow as a resource, address a broader range of individuals, and support a more inclusive government digital experience. 

Working together, agencies can continue to improve the public's digital experience with the federal government.

**Slide 20:** And now let's move on to user profile patterns. We've been working hard over the last few months to bring patterns and pattern guidance to the design system and we are excited to announce that the [pattern guidance](https://designsystem.digital.gov/patterns/), as well as an [overview of our approach and research findings](https://designsystem.digital.gov/together/), went live this week.

Over the last couple months we've introduced you to the concept of design patterns, why they're important for the design system, and the research and development approach we used to arrive at them. Today we’re going to keep going with patterns and start taking a look at some user profile patterns. And I'll do this with the help of a few guest speakers.

**Slide 21:** I'd like to introduce a couple members of the inclusive patterns team. First Meghan O'Meara, a Content Strategist and a contractor on our team. Meghan, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Hi, I'm Meghan O'Meara, and I'm the content strategist on the Inclusive Patterns team. My pronouns are she/her and I have chin-length brown and gray hair. If my screen wasn’t blurred you’d see my dogs coming in and out of the room.

**Slide 22:** Thanks Meghan, and I'd also like to introduce Jona Decker, a Technologist, and a contractor on the Inclusive Patterns team. Jona, can you say a bit about yourself and give a quick description of your appearance for anyone audio-only?

Hi, I'm Jona Decker, and I'm a Technologist on the Inclusive Patterns team. My pronouns are she/her. I wear glasses, and have short, asymmetrical brown hair with a swath of teal green.

**Slide 23:** Finally, we’re pleased to have Austin Hernandez, a senior product designer within TTS’ 18F program. Austin, can you tell us a little about yourself?

Hi, I'm Austin Hernandez, and I'm a Senior Product Designer at 18F. I use he/him or they/them pronouns. I am a masculine presenting, Mexican-American person with brown skin and thick dark brown hair full of secrets. I have freckles, a septum piercing, and a million dollar smile. 

18F is in the Technology Transformation Services offices within the General Services Administration and it lives alongside the design system. 18F is a technology and design consultancy for the U.S. Government, inside the government. And we partner with agencies to improve the user experience of government services by helping them build and buy technology. I've been working in the web design field for 15 years now and just had my 6th year anniversary at 18F. Happy to be here!

**Slide 24:** We all know that a website is more than just components on a page — the whole reason all those components are there is to help someone do something. And what we're talking about again this month: patterns, or, essentially, interactions, are the human-centered link between components, and services. How do we help a user — how do we help an individual — to do something: review a complex form, enter their name, choose the language they prefer, or share important personal information like gender identity and sex.

**Slide 25:** Patterns and pattern guidance have the opportunity to give any designer a head start to understanding their specific audience and needs. And for USWDS, effective patterns have a responsibility to reduce barriers to participation through every interaction. 

What does this mean when it comes to the important ways that we describe ourselves, such as race and ethnicity, sex and gender, and pronouns? What barriers might this information introduce? Before we look at the patterns themselves, I'd like to pass it to Austin to talk about why these are critical issues, why we need to get it right.

**Slide 26:** I started looking into inclusive form design as a passion project about a year ago for a few reasons. 1. I design a lot of government forms for different agencies I work with at 18F. Some forms have to meet certain guidelines, the form data needs to be actionable and relevant for the people reviewing it, so I want relevant, uniform, clean data 2. I’m a designer. I’ve looked at a ton of form patterns over my 15 year career. Forms need to be designed well, not only visually, but they need to be plain language, explanatory, feel safe, not feel overwhelming, be relevant, etc.—for users to fill them out. And lastly, very personally, I was tired of my identity not being an option forcing me to choose inaccurate, arbitrary identifiers that are either plain wrong or downright offensive. And I’m not alone in this. When I started asking people in my community who work with intake forms in healthcare and nonprofits, they shared similar challenges and frustrations—Not only in how to identify themselves, but being confused when certain questions were asked or what is the “right” way to ask.

**Slide 27:** This slide shows 3 examples of exclusionary form design. I run into tons of forms like these either at work or filling them out. From left to right. There’s a title or honorific dropdown with 19 options. 3 are asking if you are a wed or unwed woman. A few are if I'm maybe some kind of European royalty? And only professional titles like Rabbi or Dr. are gender neutral. The next form asks for my gender as either male or female, which excludes people with unspecified or other gender identities. Last, there’s a race and ethnicity form with 7 options. 2 checkboxes ask you to clarify if you are US Black or Carribean Black and the only option for Hispanic is White (Hispanic or non-Hispanic), so only “other” applies to me. 

For many people I’m sure these work just fine. Maybe you are a Viscount American Indian male, but for others it’s not how we are seen by the world or how we see ourselves which is a bad user experience and makes the data less useful.

And now I’m going to turn it over to Jona to talk more about the Race and Ethnicity pattern.

**Slide 28:** Thanks Austin

**Slide 29:** As Austin said, race and ethnicity are often central to an individual’s sense of self. When someone is completing a form and they don’t see themselves reflected within the provided options, the form is not only ineffective, but may be confusing, frustrating, and alienating. And this can create a bad user experience and undermine successful service delivery.

**Slide 30:** One of the first things to know about race, however, is that there is no agreement that race is a real, biological attribute. Census, along with most scientists and academics, describe race as a social definition.

**Slide 31:** And as with many patterns related to user profiles, if you don’t need the information, you shouldn’t ask for it. So if your agency or program doesn’t specifically need to know people’s race and ethnicity, don’t ask.

**Slide 32:** But sometimes you do need to know. Then the question becomes how to ask for race and ethnicity in a way that is both inclusive and respectful. This sounds pretty basic, but the reality is closer to “It’s complicated.”

**Slide 33:** As Austin described, sometimes people just can’t find their race within the categories provided. Here we’re looking at the list of racial categories provided by OMB, which includes American Indian or Alaska Native, Asian, Black or African American, Native Hawaiian or Other Pacific Islander, and White.

So if you identify as Middle Eastern, what would you select for race? The answer according to OMB is White. But does that fit a person’s sense of self? Does it match their lived experience?

**Slide 34:** Another problem is that many people identify as multiple races. [In 2020, just over 10% of the American population reported multiple races](https://www.census.gov/library/stories/2021/08/improved-race-ethnicity-measures-reveal-united-states-population-much-more-multiracial.html). That’s almost 34 million people. When you factor in the “Some other race” option the number of folks who are multiracial or don’t feel their race is represented on Census forms is closer to 50 million people.

**Slide 35:** And when you layer ethnicity into the mix, it can be even more confusing.  OMB currently offers two choices for categorizing ethnicity: Hispanic or Latino, or Not Hispanic or Latino. 

Austin, you’ve written quite a bit about the challenges of collecting race and ethnicity information. Can you expand on this a bit?

**Slide 36:** For sure. Slide 36.  So because of this form dilemma, I decided to do DNA genetic testing for ancestry. The results were pretty much what I expected. They are common results for people with brown skin that live in what is now known as the American Southwest and Central America. The chart on the screen shows that I’m 45% Spanish, 41% Native American, and the rest is from all over the huge, diverse continent of Africa.

**Slide 37:** However, forms rarely allow this answer for a few reasons. This slide has a screenshot of a form I tried to fill out within the last year.  It uses a dropdown form pattern where I’m only allowed to choose 1 option from a dropdown for race AND ethnicity. I’m glad it has the gender inclusive Latinx option, but I have to choose between my racial identity or ethnic background. 

Latino and Hispanic can be any race or racial combination and that’s something people miss a lot.

**Slide 38:** As Jona was talking about 10% of the American population reporting multiple races. This screenshot shows Census 2020 data for people who identify as Hispanic or Latino. 42.2% selected that they were “some other race alone” and 32.7% chose “two or more races.” That’s a majority of the Hispanic and Latino racial identity that are not represented here.

**Slide 39:** Race, ethnicity and nationality are all different things. Racially I’m mostly half Spanish and half Native American. Culturally and ethnically Hispanic. I was born in the US. My parents were all born in the US, my grandparents and great grandparents were all born in the US. That makes my nationality American.

**Slide 40:** Race is a social construct. At best, it’s used to measure inequity and make positive change. At worst, it’s used for discrimination and harm.

**Slide 41:** As long as race and ethnicity are meaningful categories for your program, you can use them. Make sure you have Hispanic and Latino ethnicities in your form or allow users to self-identify but this is separate from questions about race. Then you can roll that information up into the larger OMB categories for reporting purposes which I’ll pass to Jona to talk more about.

Jona?

**Slide 42:** As Austin alluded to, OMB requires that when an agency or program collects race and ethnicity data that it reports for statistical, administrative, or compliance purposes, anything collected must map to their five categories for race and two categories for ethnicity.

**Slide 43:** But what a lot of people don’t know is that [OMB encourages you to collect whatever detailed race and ethnicity information your program requires, as long as those answers can ladder up into their larger categories](https://www.federalregister.gov/documents/2016/09/30/2016-23672/standards-for-maintaining-collecting-and-presenting-federal-data-on-race-and-ethnicity#p-27). So if you identify meaningful categories for your program you absolutely should include them or allow users to self-identify.

**Slide 44:** So what does that mean for our pattern guidance today? Leaning heavily on Census’ research, we recommend you.

Don’t separate race from ethnicity, but ask about them together. That doesn’t mean combining them into a single question, but treating them as a two-parter. 

This is something we expect to see some exploration around as Census tests different ways of approaching this before the 2030 Decennial Census, so don’t be surprised if this guidance evolves.

**Slide 45:** What we don’t expect to change is recommending allowing users to choose more than one race and ethnicity.

**Slide 46:** And if possible, allow users to self-identify their ethnicity.

**Slide 47:** And, as always, explain why you are collecting the information and what it will be used for.  

I want to call out that a number of agencies are working on this. There’s a lot of research, analysis and thinking that has been put into how to best ask for and capture this information, so while our guidance is based on our current understanding of these best practices, we fully expect these recommendations to change and evolve, especially as we get closer to the 2030 Decennial Census. 
And now I’m going to turn it over to Meghan.

**Slide 48:** Next up, we want to talk about asking a user for gender identity and sex. This is not only challenging from an information collection perspective, but potentially alienating for the people completing the form. What if they don’t see themselves in the list provided? How might that omission undermine the information collection effort, lessen the effectiveness of the program or service, and cause harm to the people themselves?

Austin, can you talk a bit about this?

**Slide 49:** Like race. Gender is a social construct. At best, it’s used to measure inequity and make positive change. At worst, it’s used for discrimination and harm.

**Slide 50:** Also Gender ≠ Sex ≠ Pronouns. You can’t infer one from another. Your biology doesn’t have to match your appearance, the way you identify doesn’t have to match what others assume you are, and that also doesn’t have to do with the ways you want people to address you.

**Slide 51:** Terms change. For example, trans activists of the 70s used the word transexual to identify themselves, but that word has fallen out of favor and it’s more acceptable to use the word transgender. There didn’t used to be an option for intersex, but now there is. Advancements in medical research confirm there’s more nuance to biology than we understood previously.

**Slide 52:** Look, this is such a complicated topic being distilled into one form field. It’s a deeply personal identity we are just now as a society coming to understand. One person or one opinion from the LGBTQ+ community is not the unquestioned truth. USWDS isn’t the unquestioned truth. This is the best we have right now, and everything is iterative. It’s important to be empathetic and listen but use guidance from communities that are more widely accepted. Even in person, if you use the wrong term, it’s ok to say  “oops sorry, thanks for letting me know!”

**Slide 53:** It’s important to people’s identity. The issue of gender is sometimes seen as a controversial and divisive issue because it’s becoming more mainstream. It doesn’t need to be. These identities have been here, this whole time, it just wasn’t being counted or there was no language for it. This is just one visible sign of social change and progress. At one point women couldn’t vote, schools were racially segregated, interracial marriages were illegal, same-sex relations were a crime —and some of things are still true across the world. But, several offices within the federal government, in academia, and in communities across the world are saying here are the ways people identify themselves, let’s count them!

**Slide 54:** But we need to ensure safety. Since this is a divisive topic right now, people don’t feel safe. Especially in a government context when there is so much legislation happening right now that directly impacts trans lives. Many publicly available datasets will show you inequities in gender-based violence, income, and housing so it’s important data to have. However, if this data is needed, it’s important that privacy is protected or and separated from other personally identifiable information (PII).

**Slide 55:** This week is transgender awareness week and it ends this coming Sunday with Transgender Day of Rememberance, which started in the late 90s to draw attention to issues of prejudice, discrimination, and violence against transgender people. The purpose of this week is to bring attention to the community by educating the public about who transgender people are and advancing advocacy, which is what we are doing in one small way today.
And now I’ll turn it over to Meghan to talk about the pattern guidance.

As Austin said, asking about gender and sex in a respectful and inclusive way is not without challenges.

**Slide 56:** So, just like with race and ethnicity, if you don’t need to know, don’t ask for it. There are definitely agencies and programs with a need to know, but if it isn’t relevant to your program’s mission or work, don’t ask.

**Slide 57:** But let’s say you need to ask. What then? Well, many of our colleagues throughout the federal space are working to figure out how to approach this. Earlier this year, the [Department of State began allowing people to specify “X” in addition to “male” or female](https://www.state.gov/x-gender-marker-available-on-u-s-passports-starting-april-11/).”

While the definition used for the “X” choice is a little muddy, blurring the lines between sex and gender identity, it’s still a really important first step in offering more inclusive options.

**Slide 58:** [Social Security recently announced that they will allow individuals to self-select their sex on their Social Security number (SSN) record](https://www.ssa.gov/news/press/releases/2022/#10-2022-3). [CDC has developed guidelines for their programs](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html). And the [Federal Committee on Statistical Methodology, an interagency working group, has published some excellent research](https://www.fcsm.gov/resources/sogi/). OMB is also looking at how best to ask about sexual orientation and gender identity.

So research is ongoing and there are a lot of smart folks trying to figure out how we can ask about sex and gender in a way that 

- Supports programs’ abilities to serve people
- Captures information needed for identity validation and reporting requirements
- Is respectful and inclusive

So what does this mean for the USWDS pattern guidance?

**Slide 59:** We recommend that you ask about sex and gender identity separately.

**Slide 60:** Let’s start with sex. For clarity, we mean the sex listed at birth. It may not be the gender someone identifies as, and we shouldn’t make assumptions. There are some environments, such as health care, where you need to know this information.

**Slide 61:** Clearly state why you need to collect this information and what it will be used for.

**Slide 62:** Provide only biological options when asking for sex listed at birth (male, female, and intersex). Or, if you prefer, male, female, and X.

**Slide 63:** Be very clear if the sex the person needs to provide must match the sex marker listed on a specific document. For example, "Please enter your sex as it appears on your birth certificate."

**Slide 64:** Don't include a "prefer not to answer" option. We’ll come back to this, but generally, if you are considering adding this option, consider whether you need to collect this information at all.

**Slide 65:** So that's sex. What about gender identity? Gender identity is how the person wants to be represented. There are some environments, such as health care, where this is important information in addition to sex listed at birth.

**Slide 66:** There was much discussion about whether the correct term was “gender identity” or just “gender.” There really isn’t  a consensus on this. But we were persuaded by some of the work done by OMB and CDC that “gender” is the construct, while “gender identity” is how someone wants to be represented.

**Slide 67:** As Austin shared, there are a great many gender identities. So our recommendation is that you allow people to specify their gender identity in whatever way they choose. Don't make them select from a list that might not include them – or provide so many options that it becomes overwhelming. Let them self-identify.

**Slide 68:** And let people indicate that they prefer not to answer. There are many reasons people may choose not to provide their gender identity, and we need to be respectful of that.

**Slide 69:** If you do need to ask for both gender identity and sex, consider asking for gender identity first, since this is the designation that determined an individual’s sense of self. And [consider phrasing the question in the same way the CDC does](https://www.cdc.gov/hiv/clinicians/transforming-health/health-care-providers/collecting-sexual-orientation.html): I think of myself as…. This is also a place where “prefer not to answer” might be a viable option for sex  —  the CDC recommends this, and while we generally discourage it, it is an important option when you are asking for both sex and gender especially in a patient-provider relationship where trust is so important.

**Slide 70:** Now let’s look at guidance around Pronouns.

**Slide 71:** Pronouns are closely related to gender identity, but they aren’t exactly the same thing.

**Slide 72:** One thing we do know, though, is that a name, sex, or gender identity is not indicative of the pronouns a person uses. And when we use someone’s preferred  pronouns we help create an environment where they feel seen, and are less likely to feel frustrated or alienated. And besides being the right thing to do, respecting someone’s pronouns is – again – an important component of building trust and ultimately program success.

As with the other patterns we learned a lot from our colleagues in the federal space on how they are approaching pronouns, and we also looked at best practices elsewhere.

**Slide 73:** We're recommending that you allow the person to enter their pronouns into an open field – don't restrict them with a list that may not include how they'd like to be addressed.

**Slide 74:** But do provide examples of what might go in the field. Not everyone is accustomed to specifying pronouns.

**Slide 75:** And don't make the field mandatory. While the information is helpful, there are neutral options such as "they" or "you" -- or even the person’s name! -- you can use. [A special shout out to our colleagues in the VA, who recommend using “they” and “their” pronouns by default in their copy](https://design.va.gov/content-style-guide/they-their).

**Slide 76:** You should also be prepared for the likelihood that some people will have a really complex and detailed answer. That's how pronouns work, sometimes.

**Slide 77:** Again, we were grateful for the thoughtful and empathetic way our colleagues have approached race and ethnicity, gender identity and sex, and pronouns. Their hard work, as well as best practices from the UK’s Government Digital Service and TTS’ DEIA Growth for Teams team (to name just a few!) deeply informed our recommendations.

**Slide 78:** As we’ve discussed before, our work was based on the input from many digital teams across the federal space, in addition to research from thought leaders outside of the federal government. Each of the patterns was reviewed by key stakeholders and revisions were made as necessary. The patterns provide guidance around our current understanding of this space, and considerations for creating effective and inclusive user experiences.

**Slide 79:** But you know your audience best. On this slide we have an array of people with different skin colors, hair styles, and clothing. USWDS cannot know all the subtleties of your audience, and we recommend you test your design and content to ensure they work for you. 

This is a fast moving space–so buckle up! There will be changes. Dan?

**Slide 80:** This is Dan. Thanks Meghan, and thanks Jona and Austin. This patterns project has been a large collaborative effort, and while we've published this work to our website, providing good up-to-date guidance is an ongoing initiative. While these patterns and components are designed based on extensive research, we expect them to evolve as the equity and inclusivity landscape, and general best-practices evolve and as we learn more from you. We invite you to share your input in #USWDS-public slack, GitHub issues, or by emailing the USWDS team.  

So use this guidance to get up to speed on inclusive interactions, and, like the airplane departure emoji on this slide, take off and point your project into the future. Onward we go!

**Slide 81:** Now some Q&A.

**Slide 82:** Thanks for joining today’s USWDS monthly call. Next month, we’ll take a look at the USWDS year in review. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you in December!

{{< /accordion >}}

Many of the digital solutions we create rely on collecting personal information, allowing programs and services to connect with people who need assistance. Join us this month as we pick up where we left off in October and take a deeper dive into user profile patterns.

We'll continue looking at personal user profile patterns, including: date of birth, race and ethnicity, biological sex and gender, and pronouns. We'll also take a look at our guidance, and discuss how an inclusive approach to these patterns can reduce barriers to participation.


*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
