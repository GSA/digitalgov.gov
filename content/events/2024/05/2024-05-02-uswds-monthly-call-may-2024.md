---
title: USWDS Monthly Call - May 2024
deck: Creating accessible civic spaces
kicker: USWDS
summary: The U.S. Web Design System (USWDS) team will chat with Center for Civic
  Design co-founder Whitney Quesenbery about designing accessible civic spaces.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItcO6qpjsiGK0hB4N06M49z5wbessGW2Y
date: 2024-05-16 14:00:00 -0500
end_date: 2024-05-16 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - accessibility
  - human-centered-design
  - software-engineering
slug: uswds-monthly-call-may-2024
# zoom, youtube_live, adobe_connect, google
event_platform: zoom

primary_image: "uswds-gaad-monthly-call-may-2024"
youtube_id: UfufY8gStqI
---

{{< asset-static file="uswds-monthly-call-may-2024.pptx" label="View the slides (Powerpoint presentation, 14 MB, 32 slides)">}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for May 2024" icon="content_copy" >}}**Slide 1:** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for May 2024. This month we've got a red USWDS logo reminiscent of both the roses blooming out here in Oregon, and of poppies of remembrance in honor of Memorial Day.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS project lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is notably, wearing glasses. Apparently I now need computer glasses so I don't get headaches! Maybe I'll update my avatar next month.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [https://designsystem.digital.gov/about/monthly-calls/](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at Digital.gov. We've posted a link to our monthly call page in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you're welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

We've got a nice site to feature, and some really quick product updates. So we can spend the bulk of our time with our special guest talking about accessibility in civic spaces.

And hopefully still have time for Q&A.

**Slide 4:** So let's get into it with featured sites.

**Slide 5:** Today we're looking at [eac.gov](https://www.eac.gov/), home of the United States Election Assistance Commission, an independent, bipartisan commission whose mission is to help election officials improve the administration of elections and help Americans participate in the voting process.

As we'll learn a bit later in the call, the EAC was established by the Help America Vote Act of 2002, and it's charged with developing guidance to meet the Act's requirements, adopting voluntary voting system guidelines, and serving as a national clearinghouse of information on election administration.

The EAC also has a really nice USWDS implementation that they launched last summer. Their site features a clear, solid design, a language selector in the top-right, and the headline "Voting Experiences Since HAVA: Perspectives of People with Disabilities." Check it out!

**Slide 6:** Congratulations and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** Now for a few product updates.

**Slide 8:** Next week we'll be releasing USWDS 3.8.1. This will be a nice little bug fix release, addressing an issue with input mask not working in some situations, some focus issues with the validation component, and a number of nice improvements to the functionality of tooltip. Keep your eyes peeled for USWDS 3.8.1 next week!

Slide 9: Next, we're going to be trying something different for our August monthly call. I know it's a few months away, but after we come back from July break, we're going to have a "community choice" call. We're soliciting your feedback in a GitHub discussion, starting now, to help us understand what's important to you, and build a monthly call around it. So if you've got opinions, share them in [the discussion link we're posting in the chat](https://github.com/uswds/uswds/discussions/5923).

**Slide 10:** We've also just published three new accessibility test pages, Character Count, Prose, and Tag, and we have a bunch more we're working to publish in the coming weeks.

**Slide 11:** And finally, as you probably already know, today is Global Accessibility Awareness Day. It is a stroke of good fortune that its home on the third Thursday in May always lines up with our monthly call! Today I'm hoping that we can raise some awareness about critical accessibility work that's happening in a part of government that has some important parallels with the work we all do — and is particularly relevant this year — and that's the world of elections.

Today we've got a special guest with some deep experience in accessibility, civic design, and elections.

**Slide 12:** So to get started I'd like to introduce our USWDS accessibility team, and our special guest for today. They all happen to be in the same place today — Austin, Texas — for an accessibility conference. But through the magic of the internet, today they all appear like they're in different places!

Let's start with Amy Cole. Amy's an Accessibility Specialist on the USWDS core team and a contractor. Amy, can you introduce yourself and give a quick self-description?

Amy Cole introduction.

**Slide 13:** Next I'd like to introduce Alex Hull. Alex is also an Accessibility Specialist on the USWDS core team and a contractor. Alex, can you introduce yourself and give a quick self-description?

Alex Hull introduction.

**Slide 14:** And finally, I'm very pleased to introduce Whitney Quesenbery. Whitney is the Co-Founder and Director of the Center for Civic Design.

The Center for Civic Design is a nonpartisan nonprofit working with state and local elections offices and community organizations to make all the materials of democracy clear and usable.

Whitney, welcome. Can you give a quick self-description for folks who might not be looking at their screens?

Whitney Quesenbery introduction.

**Slide 15:** Dan: Thanks so much for joining us today, Whitney. The accessibility of civic spaces and of the voting process in particular is of special interest to me, and today, on Global Accessibility Awareness Day 2024, I'm really excited to have you come and speak with our community of designers, developers, and other practitioners focused on delivering accessible, easy-to-use websites and services.

There's considerable overlap between the work you've supported and the work we're supporting here. And it's a perspective I hope we can integrate into our work.

Today we'll have a bit of a moderated Q&A with Whitney to start, and then an opportunity for questions from the audience at the end. And I'd like to pass it over to Amy Cole to get us started. Amy?

Amy: This is Amy. Thanks Dan, and thanks for being here today Whitney! First, some context, Whitney: Can you tell us a bit about yourself and your background?

Whitney: Thanks so much Amy. It's pleasure to be here. As Dan mentioned earlier, I’m the co-founder and Executive Director of the Center for Civic Design. Before that, I was a UX researcher, starting in the early days of hypertext, working with companies like National Cancer Institute, IEEE (the engineering organization), Amtrak, and UK’s the Open University.

My transition into civic design and elections started in 2000 and a presidential election that hinged — in part — on the usability of a ballot design. If folks remember phrases like "butterfly ballots" and "hanging chads", it's likely because of the 2000 election.

The civic space is where I got serious about accessibility and learned that if it’s not your job, whose job should it be?

Accessibility is a big issue in elections. For many people with a disability, the new voting systems introduced after 2002 were the first time they were able to vote independently and privately.

Alex: This is Alex. Whitney, how do you approach accessibility from a conceptual and a practical standpoint?

Whitney: This is Whitney. Well, writing a book forces you to decide what you really think. For me, it was part of a shift from thinking about accessibility as a series of rules, to thinking about it as part of UX design, based on principles and personas.

As a principle, we can think about accessibility as “usability for more people”.

Practically, things like accessibility standards are important because they set a baseline. And because what’s measured is a way of agreeing about what matters.

But compliance with Section 508 or WCAG is just the baseline. We should aim for delight.

Amy: This is Amy. I’d love to touch more on the concept of compliance versus “delight” in accessible design. Can you expand on that more?

Whitney: This is Whitney. Let’s start with a kind of measurement: problem reports and severity scales for usability and accessibility issues. Most organizations I’ve worked with have these vague qualitative classifications: **Critical, serious, moderate, or minor**. This works as a shorthand, but these classifications lose some of the specificity that helps everyone on the team recognize what the stakes are for the people we all work for.

The problem is that accessibility is not about “ease of use” but “ability to use at all.” There are real consequences for real people.

Here’s another way to think about it.

**Slide 16:** Instead of **critical**, let’s call them **slammed doors** — barriers that stop someone from using an app or feature successfully — or at all. These must be fixed. Especially in a government app or form that everyone uses.

Instead of **serious**, let’s call them **frustrating** — problems that slow someone down or force them into work-arounds. They ask users to do our work and add unacknowledged burden to interactions with the government.

Instead of **moderate**, let’s call them **annoying** — things that make the experience less pleasant (maybe even enough to leave), especially with the slow (or fast) drip of the kinds of easily fixed problems that people with disabilities run into all the time.

Finally, instead of **minor**, call them **noisy** — minor issues that damage credibility but are unlikely to cause problems — the "typos" of interface and interaction design.

Far, far too many sites are full of these basic problems that are either noisy or annoying. Alt text, sloppy forms, text that’s hard to read.

It’s easy to discount the challenge they pose. But things that are speed bumps for some people can become mountains for others.

They are also not delightful.

The idea of designing for delight is just as important in official or business apps as in games. As one expert put it, “Designing for delight begins with a balance of **small pleasures and consideration**.”

For people with disabilities, it’s the signal that their needs for accessibility have been considered.

**Slide 17:** It is a two-way matrix of bad and good experience vs. low and high expectations.

In the bottom left corner, there’s the black hole of low expectations and bad experience. It’s a *kind* of success: you’ve met their worst expectations!

Moving counterclockwise there’s the pleasant surprise when low expectations meet a good experience. It’s the moment the blue sky peeks out from behind the clouds. At this point, you can stop thinking about the basics of accessibility and start thinking about the needs that go along with *different* disabilities. And with different types of *users* with disabilities.

Next, you reach the goal, where high expectations meet a good experience. That’s where every site or app should be.

But there’s also a danger, because things change over time. Once people start to expect good UX, the fall from that peak to a bad experience is an “uh-oh” moment. It’s frustrating at best and makes people angry at worst.

Let’s stop for a moment and think about what delight might look like.

How many of you fly? Maybe even a lot. If you are like me, selecting a seat can be one of those small pleasures. I used to travel a lot and I have my favorite seats on specific aircraft.

**Slide 18:** I got an email one day from a blind friend. She’d been planning a trip and wrote to me excitedly to say “I chose my own seat on an airplane!”

Seat maps are spatial, and usually presented visually. When we look at them through the experience of two personas from A Web for Everyone, you can see how they aren’t accessible to someone with a visual disability, like Jacob. And it can be critical to someone with a mobility disability like Emily. By the way, these personas are freely available to all to use and adapt and are on the web. We'll put [a link in the chat](https://rosenfeldmedia.com/resources-a-web-for-everyone/).

Anyway, making the seat selection feature accessible probably didn’t just happen. Someone had to decide to do it, design it, program it, test it. All signs of consideration.

Alex: This is Alex. You said “accessibility is not about ‘ease of use’ but ‘ability to use at all’ and I’m curious about your thoughts on where usability and accessibility intersect. Can you talk more about that?

Whitney: This is Whitney. According to ISO, accessibility is usability for people with the widest possible range of capabilities.

**Slide 19:** I want to take a second to talk about a definition of disability from the World Health Organization. It says that disability is “the outcome of the interaction between a person and the environmental and attitudinal barriers they may face.”

This is from a shift from a medical definition to [a “social” one](https://en.wikipedia.org/wiki/Social_model_of_disability) — focused on the impact on the person. It’s important because I’m not a medical professional, but I do create interactions. Instead of disability being something I can’t do anything about, it’s something in the center of my professional work.

**Slide 20:** The other is the definition of accessibility. For a long time, people would say “it’s accessible if it meets the Web Content Accessibility Guidelines.” But that’s not really a helpful definition.

The [ISO 9241](https://www.iso.org/standard/80709.html) series on **The ergonomics of human-computer interaction** has the classic definition of usability as "The effectiveness, efficiency and satisfaction with which a specified set of users can achieve a specified set of tasks in a particular environment."

The new Part 20, on accessibility, ties accessibility and usability together, by defining accessibility as "The usability of a product, service, environment, or facility by people with the widest range of capabilities."

In other words: *usability for more people*.

Our goal is to make "usability for all" as wide as possible, and the edges of the curve where people need assistance as narrow as possible.

**Slide 21:** Or, more simply, usability for more people. When you look at a normal distribution curve, as you move out from the middle: from **usability** to **accessibility**, more people are included when our tools and apps are built with a wider range of capabilities in mind. 

But sometimes we can’t meet that goal. The next step out towards the ends is **accommodation**. That’s when there is an alternative that addresses accessibility needs, but it’s separate. Think about a ramp to a side door vs. everyone being able to reach the front door. Or a different- though perhaps equally good solution.

When even that doesn’t work, what we’re left with is **assistance**. That doesn’t sound bad, but it takes away independence.

That word resonates a lot in my world of elections, because federal law says that voters with disabilities must be able to vote — to mark and cast a ballot — with the same **privacy and independence** as other voters.

So, let’s look at this in a voting booth.

**Slide 22:** Assistance is what we used to have — someone marking a ballot for a voter. There’s neither privacy nor independence, so there is no illustration for this.

**Accommodation** is represented with a sign and bell for curbside voting. These are often used in polling places where the entrance is not accessible. It’s the genesis of curbside voting where poll workers bring the ballot to the person.

**Accessibility** is represented by an accessible voting system sitting on a table as part of a line of voting booths for hand-marked ballots.

And **universal design** that is, **accessibility** + **usability** by a photo of a voting system with a screen, tactile controller and headsets, designed to be used by all voters, including voters with disabilities.

You may have heard of the “curb cut effect” — where something designed for accessibility turns out to be valuable for everyone.

**Slide 23:** The photo on the screen shows a demonstration model for a voting system built with a gaming system's adaptive controller. The controls turned out to be inviting and very intuitive.

Amy: This is Amy. I’d love to touch more on the concept of compliance versus “delight” in accessible design. Can you expand on that more?

Whitney: This is Whitney. One of the big turning points in my life was when I was appointed to a Federal Advisory Committee. It was a close-up look at how government works, and how things like standards can bring change, even if not as quickly as the redhead-I-was wanted.

I also have to mention that many of my friends warned me that standards stifled innovation. They thought they were a sort of “foolish consistency” that was a “hobgoblin of little minds” as the poet Emerson put it. But Emerson meant that simply following conventional wisdom is what’s foolish. And there’s nowhere this is more true than in standards.

The Help America Vote Act (HAVA) of 2002 and established the Election Assistance Commission. One of their mandates was to create new standards for voting systems, working with an advisory committee of experts and industry representatives.

I was the chair for human factors and privacy — including usability and accessibility — from 2004 to 2007. I’m proud of the work, and the way it has changed elections to understand accessibility better.

The official words in HAVA 301(a)(3) are that voting systems **shall be accessible**

* for individuals with disabilities, including **non=visual accessibility** for the blind and visually impaired,
* in a manner that provides the same opportunity for access and participation including **privacy and independence** as for other voters

While I was on the committee, we wrote the first and most of the 1.1 version of the Voluntary Voting System Guidelines ([VVSG](https://www.eac.gov/voting-equipment/voluntary-voting-system-guidelines)). We started from an almost blank page: 2 existing requirements for accessibility, some preliminary work on an IEEE standards, and Section 508/WCAG.

After I left the committee, I have continued working as a researcher supporting the voting team at NIST (National Institute of Standards and Technology), which works with the EAC.

There were two things I’d like to mention about how the usability and accessibility standards were developed.

**Slide 24:** For VVSG 2.0, the standard was reorganized into broad principles with supporting requirements, like:

“5.1-A: Within any method of voting, all **display formats** including enhanced visual and audio and all **interaction modes** including tactile and limited dexterity must have the **same functionality** as the visual format and touch mode including **voting, verification, and casting.**”

VVSG 2.0 was developed with a public working group that included experts, advocates, and vendors.

NIST ran a program of research on specific areas where there was little existing material to draw on. The goal was to anticipate needs and kick off discussions.

Out of many years of discussions, NIST also published a handbook for usability and accessibility testing — specific advice tailored to voting systems — and we’re seeing it get a lot of attention. [We've dropped some links to this guidance in the chat](https://nvlpubs.nist.gov/nistpubs/vts/NIST.VTS.400-5.pdf).

Alex: This is Alex. I’d love to dig more into what comes after these standards and design. Can you expand on that?

Whitney: This is Whitney. Sure. Let’s start with something simple: What’s measured matters. This is the value of being a nerd about data.

Here’s a really simple example. One of the things we do at CCD is help states design their envelopes and instructions for voting by mail.

How do we know that our design is effective?

Usability testing is the first step. Even on a relatively small scale, it helps us find the concepts and details that can trip up voters. The effect is cumulative, as our knowledge grows, even with the inevitable variations in a federal system.

The real test, however, is in action. Do our designs help reduce the number of ballots that can’t be counted because a voter forgot to sign, or date their envelope. Or missed that they had to supply their mother’s maiden name.

We can get anecdotal evidence. But the only meaningful answer is in robust data collection from every state. That lets us look at a state over time or in comparison to others.

This is something else the EAC is mandated to do. The Election Administration Voting Survey (EAVS) collects data on even-year elections from all 55 states, DC, and territories. 

The survey itself is designed in a process with public input.

The data is public. [We've put a link in the chat](https://www.eac.gov/research-and-data/studies-and-reports).

And the EAC hosts an interactive tool to explore the data.

The MIT Election Performance Index is a popular view of the data, combined with other sources like the U.S. Census Current Population Survey.

It’s a sort of league table for elections. That tracks 22 indicators of election performance — things like wait times, voter registration and turnout, and the number of mail ballots rejected.

The EPI plots it on a simple visual that compares the states.

It also lets us look, in a broad way, at the impact of policy.

There is a companion survey that collects details on election administration policies. The questions are reviewed each cycle and adjusted to ask about new problems or hot topics from the previous election.

This year, there are new questions about accessible voting by mail. 35 states now have some form of this fast-growing new voting method and more details about the policies provide input into what’s working well.

Amy: Can you give any examples of how government is experimenting with accessible voting systems?

Whitney: This is Whitney. Let's talk about something the city of Los Angeles has done.

**Slide 25:** LA started with the Votomatic InkaVote - an adapted punchcard system.

It took them 12 years to design and build and launch their new system. That seems like forever, but  what they did was remarkable.

They started with a [voter-focused process](https://vsap.lavote.gov/research/) with broad community and expert input.

They included administrative needs - down to occupational safety for the workers setting up the machines.

Knowing that California was moving to vote centers and more voting by mail, they designed for the approximately 1500 voting locations rather than the 4500 polling places they used to have.

The vote by mail design came first – not just in English, but supporting 19 languages.

**Slide 26:** The ballots are delightful. They are also designed following the recommendations from an EAC research project and the requirements of the VVSG.

In 2020, the voting system was launched – called the Voting System for All People or VSAP.  It’s a ballot marking device. Following a universal design approach, it’s not the accessible voting system. It’s the voting system.

**Slide 27:** It has a tactile controller to complement the touch screen, audio in all 19 languages, and a ballot box at each station where the printed ballot is stored. It can be operated without the use of your hands.

**Slide 28:** Designed and built to be robust — adaptable to the future.

**Slide 29:** One of the more innovative ideas is the [poll pass](https://www.lavote.gov/home/voting-elections/voting-options/interactive-sample-ballot) that lets a voter make their selections at home and then transfer them to the VSAP BMD where they can review them before printing and casting a ballot.

It took 10 years + funding + leadership + a lot of technical innovation. And it survived a bumpy rollout with ePollbook problems.

But it’s an innovative, beautiful, voting system that has accessibility built in from the start.

And designed with deep community involvement. As a member of the community advisory committee put it, “I was able to vote on something I helped create.”

Alex: This is Alex. Okay, we have just a few minutes left before we open up for Q&A. Do you have any closing thoughts you want to leave folks with?

Whitney: This is Whitney. I sure do.

**Slide 30:** Start with intent. Define guiding principles towards goals for everyone, and consider how disabilities affect the path to success.

Get ahead of the work with preliminary research and keep it going with testing as you design and develop.

Involve stakeholders through the process for both input and transparency.

The work never ends.

**Slide 31:** Dan: This is Dan. Thanks so much Whitney. And it looks like we have some time for Q&A, so let's get to it.

**Slide 32:** Thanks for joining today’s USWDS monthly call. We'll be back next month for our first look at USWDS Web Components. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

And if you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Have a great day and a great May. Make sure you check out our August Community Choice discussion, so we get a sense of what you'd like us to prepare, and we'll see you in June!

{{< /accordion >}}

Join the U.S. Web Design System team on Global Accessibility Awareness Day. Guest speaker Whitney Quesenbery will discuss her work to create a more accessible voting process. She previously served as a member of the U.S. Election Assistance Commission’s [Technical Guidelines Development Committee](https://www.eac.gov/about/technical_guidelines_development_committee) and helped draft versions 1.0 and 1.1 of the [Voluntary Voting System Guidelines](https://www.eac.gov/voting-equipment/voluntary-voting-system-guidelines). Whitney's experience advocating for people with disabilities can help you design usable and accessible civic spaces on the web and beyond.

**This event is best suited for:** Designers, product owners, developers, and accessibility specialists of all levels.

**Speakers**

* **Dan Williams** **-** Product Lead, USWDS
* **Anne Petersen** **-** Experience Design Lead, USWDS
* **Amy Cole** **-** Accessibility Specialist, USWDS Contractor
* **Alex Hull** **-** Accessibility Specialist, USWDS Contractor
* **Whitney Quesenbery** **-** Co-founder, Center for Civic Design

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@gsa.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
