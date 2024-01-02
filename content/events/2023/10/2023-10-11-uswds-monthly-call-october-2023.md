---
title: USWDS Monthly Call - October 2023
deck: How to develop a sustainable, repeatable research process
kicker: Conducting user research with people with disabilities
summary: This month, we'll share progress and findings from our recent effort to improve our ongoing research practice.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItd-quqDMoHlDxTzhAa_JdKCvcWG7ccyA#/registration
date: 2023-10-19 14:00:00 -0500
end_date: 2023-10-19 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - accessibility
  - customer-experience
  - user-research
  - user-experience
  - content
  - strategy
  - project-management
  - product-management
slug: uswds-monthly-call-october-2023
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2023-uswds-monthly-call-oct-title-card
youtube_id: _uNXQpu6Dwg
---
{{< asset-static file="uswds-monthly-call-october-2023.pptx" label="View the slides (PowerPoint presentation, 9.2 MB, 111 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for October 2023" icon="content_copy" >}}**Slide 1:** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for October 2023, where some of us on the western half of the continental United States, just this weekend got to watch our little old moon pass right between us and our Sun and through some kind of cosmic coincidence, even though about 450 moons could fit across the diameter of the Sun, to us they look almost exactly the same size, and one can pretty much perfectly conceal the other, just as your thumb can cover up a mountain every once and a while. And just as we see the USWDS logo fading from yellow to black and back again.

And of course, we're not too far away from Halloween, shown here with this pumpkinny-orange USWDS logo.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a brick red, fall-toned collared shirt about **red-warm-70v** and some green socks, about **green-cool-70v**!

Unfortunately, while we are recording this call, we currently aren't able to always share the video publicly. That said, we are making progress on being able to share videos and we're building the capacity to slowly release more and more of these monthly calls publicly. So stay tuned for more updates. When we do post videos publicly, they'll be available via the Digital.gov event page.

We'll be posting links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? 

First, we've got a few nice new site launches from close to home.

Then I've got a few quick product updates.

And then we'll spend the rest of the time talking about what we've been doing to try and operationalize a user research practice, and what we've learned.

And there should be some time for Q&A at the end!

**Slide 4:** So let's get into it with site launches.

**Slide 5:** First up, a brand new site for GSA's SmartPay program: [smartpay.gsa.gov](https://smartpay.gsa.gov/). The GSA SmartPay Program is the largest government charge card and commercial payment solutions program in the world. The SmartPay homepage is a solid and professional example of a classic USWDS-powered site. We see the extended header, and a hero section with a photo of hands holding a charge card, and the words "GSA SmartPay".

**Slide 6:** Next is GSA's leasing portal: [leasing.gsa.gov](https://leasing.gsa.gov/leasing/s/). The leasing portal provides a gateway to GSA's critical lease acquisition and lessor tax tools. This simple portal features a row of cards providing access to the Automated Advanced Acquisition Platform, the Requirement Specific Acquisition Platform, and lessor tax adjustment and appeal requests.

**Slide 7:** And finally, the GSA Equity Study on Remote Identity Proofing information and registration site: [identityequitystudy.gsa.gov](https://identityequitystudy.gsa.gov/). This project aims to study the equity of remote identity-proofing technologies that the American public may interact with when accessing eligible government services and benefits, in order to combat bias, and make sure government websites work for everyone. The homepage for GSA's Equity Study on Remote Identity Proofing features a crisp design with cool blues and a large blue monochrome hero featuring the words "We know that technology doesn’t work equally for everyone. Help us make it better." and a call to Register Now.

**Slide 8:** Great work, and congratulations to these teams! And be sure to let our team know when a new site launches, either with an email [beat] or a note on the USWDS public Slack channel!

**Slide 9:** Next, a few quick product updates.

**Slide 10:** We're currently working on wrapping up USWDS 3.7.0, a nice release focussed on a couple important accessibility updates, and improvements to the interactivity of some of our components in modern dynamic applications.

**Slide 11:** So what are the key improvements coming in USWDS 3.7.0?

**Improved JAWS keyboard navigation in Date picker:** Now users of any screen reader, but particularly JAWS and NVDA, should see improvements to keyboard navigation in the Date picker's calender.

**Improved keyboard navigation in Range slider:** Similarly, now range slider has more reliable keyboard navigation, particularly in VoiceOver.

**Added units data to Range slider:** Now there's an optional data element for Range slider that allows the slider to vocalize units of measurement.

**Allow custom language content in File input:** We've also added optional data elements to the File input component that allow it to support multiple languages.

**Improved teardown of Modal in dynamic applications:** Now you should be able to use multiple instances of this component in frameworks like React, Angular, and Vue, without buggy inits and teardowns.

**Improved Banner initialization:** We also improved the initialization of banner, so it no longer depends on an accordion initialization to start up properly.

**Add an X social media icon:** And finally, we'll be adding the X icon to our package, so teams that are updating their social media icons can do so more easily.

And there are a few other nice bugfixes and improvements in 3.7.0. If you're interested in a preview of what's to come, check out the release planning tab of our public project board. We're putting the link in the chat.

**Slide 12:** And that's USWDS 3.7.0. It's coming soon — we hope to get it out by Halloween.

**Slide 13:** And we've got a number of potentially interesting open discussions happening now in our GitHub discussions. The first is about HTML Sitemaps. We're planning to add an HTML sitemap to our site soon, and we're trying to get a sense of how other folks have done it, and what makes a good HTML sitemap. We're posting a link to that one in the chat now.

**Slide 14:** And we've also just started a discussion on the newly released WCAG 2.2. There are a couple things in 2.2 that are interesting to us, like focus highlighting, but we'd be interested in your perspective, and how you're thinking about this long-in-the-making update. That link's going into the chat now, too.

**Slide 15:** So now I'd like to talk about some work we've done toward operationalizing user research and a user research practice on our team, and about usability research with people with disabilities as an explicit focus.

**Slide 16:** A couple weeks ago, our team was talking through some of what we'll discuss later in the call: where to collect research artifacts and how to organize older research reports. In general, how we can better work to document ongoing and existing research. And one of our team members suggested that we might use our existing research page. *We have an existing research page?*

**Slide 17:** Oh. It can be somewhat embarrassing to realize just what you don't know about what you do, and there are some parts of our website that I don't know as well as others. I don't know why this had escaped my attention for so long — and points to the value of the content audit that we're also working to finish in our roadmap — but taking a look through our research page was like looking into a time capsule, back into the earliest days of the design system, before I was a part of it. 

Like a fly preserved in amber, this research page gave an unusual look back at the past, and it shows how we've been thinking about research from the start, what progress we've made and what challenges we still face.

**Slide 18:** “User research is a core aspect of USWDS as it’s our main source of feedback and inspiration for future product development.” This is how the page starts, and this is very true. Over the years, we've had all kinds of research efforts and research reports that have led to new components, new patterns, and new functionality. What we hear from teams, and from this community — whether in direct research, or through issues and discussions — is what helps keep the future in front of us, and helps to better understand what we need to deliver and how we can better deliver it.

**Slide 19:** “One of our challenges is knowing who is interested in being part of our user research.”

This is also true, but we've made a lot of progress in how we're able to talk with design system users. We now maintain a list of federal users that we're able to draw from for usability testing, and we use the resources of this community frequently to gather feedback and research.

**Slide 20:** And “One of the most consistent ways we have collected feedback has been by conducting interviews with digital service teams.”

This is still pretty true and interviews with service teams are something we'll want to do more of in the future as well. We need to build some capacity to do more of these interviews. In the past, we converted these interviews into case studies, and while we haven't been able to do that recently, we know that folks are still interested in case studies, and that they can be super valuable.

**Slide 21:** But research has been a challenge. It remains a challenge, and specifically, it can be more of a challenge in ways that this old page doesn't really capture as well — in usability testing not with federal users of the design system, but with end users of the sites and services we build with the design system. These end users are folks that we have less direct access to, and we've struggled with how to bring that level of usability testing into the design system.

**Slide 22:** What we’ve done is a hodgepodge. A fairly effective one, but we've tried a number of techniques when it comes to component and pattern usability testing:

First, we're building from trusted sources. When we design new design system components, we're generally not inventing something new, we're drawing from solutions that already exist in the federal government. We don't always want to reinvent the wheel either. For instance, our Step indicator was build from a great example at VA, and our headers were derived from a landscape analysis of common solutions across government.

We've also sought out peer review with community. When we develop new components, we've been circulating drafts though our public Slack for feedback.

We've also done occasional focused usability research on components like external link indicators. You can see research findings from that research on our USWDS github wiki, and [we're posting an example in the chat](https://github.com/uswds/uswds/wiki/2021-07-29-External-Link-Indicator-Research-Findings).

And lately, before we released our last batch of components, we performed user acceptance testing before launch. After all the rest of this research, we put the final components in front of a representative audience to gauge their effectiveness.

And then afterwards, we rely on open source community feedback to drive further changes. When you notice bugs or usability issues, you tell us — either though issues, discussions, or emails, and we're able to make the necessary changes and push them out into new releases.

**Slide 23:** But the reality is that we still need to be more proactive. This research is great, but we don't think it's enough. 

**Slide 24:** For one, our research is only getting older. While some findings can be evergreen and some guidance will be as well, people change, the web changes, and expectations change. We need to keep checking in, and we need to be ahead of changes in behavior and expectation. We need to better know where there's usability friction as early as possible.

**Slide 25:** And we have a need not only to conduct more direct usability research, but to increasingly broaden the range of the research we conduct, to make it more inclusive, to assure that we're reducing the barriers to participation through every interaction, and we know where those barriers lie. Without more usability research, we can't go deeper and broader, and we can't reach the places we haven't reached before.

**Slide 26:** And this is why, as we spoke about a couple months ago, it's on our roadmap to conduct inclusive research, and to work to operationalize it in our program and on our team.

**Slide 27:** And this is why we also see the necessity of  conducting inclusive research called out in the new OMB policy guidance, M-23-22, delivering a digital-first public experience. This is a good idea, and it's also what we all need to be doing.

**Slide 28:** So how do we conduct inclusive research? And how can we do it again and again?

**Slide 29:** This is something we've highlighted as a priority and now is the time to figure it out.

**Slide 30:** USWDS is maturing as a product. We're no longer fighting for survival. We're here, we're here for the long run, and we need to mature to be a better short- and long-term partner to all the teams across government that depend on what we do.

**Slide 31:** Teams expect more from us, and we need to deliver on those expectations. And one of those expectations is that we can find and address areas of usability friction as soon as possible.

**Slide 32:** And as we work to do this, our hypothesis is that if we can get things right for users with disabilities, we’re on the right track. This is possibly an inversion of the typical process which might address accessibility later in the process, or consider users with disabilities as a secondary audience. Our hope is that usability for people with disabilities can drive the project forward and lead to usability improvements for everyone.

**Slide 33:** Accessibility testing and usability research

**Slide 34:** So this is a priority for us, and as we tried to work it into our day-to-day workflows, we'd done enough research to know where we needed to ask more questions about how to actually get it done.

**Slide 35:** Compensation

Recruiting

PRA and Privacy

**Slide 36:** Common challenges teams face

**Slide 37:** We needed help getting over the finish line 

**Slide 38:** We needed help developing repeatable processes

**Slide 39:** Robert: Thank you, Dan. My name is Robert Jolly. I use he/him pronouns. I'm a Product Manager and Accessibility Advocate at the 10x program within GSA's Technology Transformation Services. And for accessibility and inclusion, I'm a middle-aged white man, short brown hair that's turning grayer by the day, and I'm wearing a blue and green button-down shirt.

**Slide 40:** I want to talk a little bit about 10x, just to sort of frame up why we're collaborating with the U.S. Web Design System and other teams.

10x is a GSA program that explores ideas that can improve the public's experience with the federal government. And so we invest incrementally into ideas that get submitted by federal employees. And so we go through phases. And each phase, we're trying to learn a thing or do a thing and not overcommit to a problem if it's not actually a problem or if it's the wrong problem to focus on.

**Slide 41:** If we go to slide 41, that brings us to our project at hand at 10x that I'm working on with some colleagues. And it's called "Enabling Government Research Operations. And we're in phase three of the 10x process. So we have validated the problem itself being an issue. We really have a need across governmentt o support these research efforts that Dan was talking about. And we've explored with other teams at different agencies. What are they struggling with? And so we've learned a few things.

**Slide 42:** And what we've learned is really based on that deep exploration of the problem space. And what we've learned is that there are a number of barriers, but also opportunities to really provide that level of support that teams need to focus on their research.

**Slide 43:** So this slide has an illustration of - and it's a linear illustration - a research cycle for teams doing research with the public. At the start of the research cycle, you have a team that creates a research plan and goes through a number of steps, like getting compensation justification for their research participants and finding and screening participants. Then managing those participants and gathering consent and scheduling sessions and maybe even going back to earlier steps in the process. That's all the steps before a team can actually conduct that research. The research team's work starts with designing prototypes, creating guides, conducting the research sessions, and providing analysis and synthesis of those research findings and creating artifacts. And then feeding them back into what that team is doing. And having some knowledge management aspect to that. So we really wanted to break out what those steps were so that we could figure out where there is a need for teams to have support.

**Slide 44:** And slide 44 has a different illustration. It's of some of the same components, but it's those operational steps that must be completed before a single research session can occur. And that's creating the research plan. Like, what are we doing? What are we trying to learn? Making sure that you can provide incentives so that you get inclusive and - inclusivity and equity in the process. Finding and screening participants, managing participants, getting consent, and scheduling sessions. Those are those steps that all need to be completed. And they're in a specific order. They can happen at different spots but all of these things have to happen as kind of prerequisites to actually doing that research.

**Slide 45:** And this one is a dense one in terms of information, but we found that there are a number of barriers to research that happen here at TTS with product and service delivery teams. But also across government. These things are shared. And it's around at the highest level. Difficulty recruiting participants. How do we manage participants? What can we offer in terms of compensation or incentives so that we get full participation from folks, especialy those that are underrepresented or have other barriers to access? And
then the scheduling and logistics. It's a manual and time consuming effort. And there are also tooling issues even across teams at TTS may use different tools that are available to them or not available to them. So we found these as barriers to research, but it's also opportunities for places for our team at 10x to explore and work with the TTS teams to see how can we figure out this operational aspect of research.

**Slide 46:** And the bottom line is, it just takes a lot of time and effort to do research with the public. It can take weeks and months to prepare for doing research, and that timeline's often out of sync with projects and product development schedules. A lot of times teams need to know something soon, and getting the approvals and the processes completed to be able to connect with the public just don't match up.

**Slide 47:** So the big heart of the problem is often teams don't do the research or do extra work so they don't need to do that particular type of research. Teams sometimes rely on proxies or desk research or evaluative usability testing at the end of the development when the cost of change is high. So that tends to be an area where we think research operations can help.

**Slide 48:** So we need a sustainable process. That was our big takeaway and our push moving forward.

**Slide 49:** We really want to focus on that research operations aspect. And that's all the work that goes into research that isn't the art and science of research. So that, you know, if we can establish a research operations team or service, that team or service can perform the business, administrative, and logistical functions necessary to enable researchers to focus on preparing, conducting, and analyzing their research activities. So freeing them up to do what they've been hired to do, what they're really good at. If you're a UX researcher, the last thing you want to do is be trying to navigate the labyrinth of PRA approvals or participant tracking spreadsheets and whatnot. So it's really about enabling that research work.

**Slide 50:** We've got an updated, more stylized journey map of all of the steps in the research process where we've highlighted in blue and labeled research operations being those pieces in the research cycle that are the important but mundane tasks of getting compensation justification, and finding and screening participants, which includes PRA approval for screeners or for the types of research activities you may be conducting. Managing those participants and getting consent and tooling, and scheduling, and making sure that everybody shows up at the right time. That's that administrative aspect of it. And then we have research. All those research activities where the research teams can really focus their time, illustrated in pink. And that's where we saw those opportunities.

**Slide 51:** And those opportunities are really to standardize and simplify. So if we really want to get those insights from the public that we feel are so valuable and necessary - and we do believe this - we need to standardize and simplify the ways that we do research with the public. So we really think that recruitment is one of the biggest things. Identifying and recruiting participants is one of the largest pain points that we heard across all of our teams at TTS and also across government - how to connect with the public and get them involved. Going along with that is providing incentives and compensation for participants. Like, what are standard rates and means of compensation? I think that is an opportunity to standardize and simplify what that process looks like, both here at TTS but potentially across government.

Scheduling is always a challenge. I often look at my calendar and just weep with "How am I going to coordinate with my colleagues, much less with people outside of government?" And policy clarity. So for issues of privacy, paperwork reduction, and data retention, we need to figure out, where are there areas where teams still have questions and where can policy guidance and clarity come from within organizations or potentially from teams doing the work. Like, "Hey, this is what we figured out." And then knowledge management, of course, is kind of an age-old challenge, but where do we share those findings? How do we share what's the most meaningful and impactful without it being just a complete information dump? So those are the areas that we're focusing on.

**Slide 52:** We're really looking to replicate our process or allow that replication to happen. We're looking at ways to document our processes and help others replicate it along the way. There are teams across government that we've talked to. They're in a number of different agencies working to stand up their own research operations programs.

And we're really intent on sharing what we've learned within our 10x program's efforts as well as hearing about what other folks are doing in the space. And so if our team hasn't talked with you, I'd be grateful to schedule conversations and share what we're learning and hear from you on what you feel are challenges and opportunities as well.

**Slide 53:** We want to talk a little bit about complementing existing work. Just because it's hard and a lot of teams sort of have avoided research doesn't mean that it's not happening. It is happening. Teams at TTS and and other groups across government aren't waiting for a finalized, fully baked research operations service to take on these administrative tasks and make it easy to connect with the public. They're doing the work. Teams like U.S. Web Design System, Vote.gov, Usa.gov - those are teams that we are actively trying to support and complement their work with our learnings and understanding and work at 10x. So we want to really figure out the operational aspects of inflight research teams' work and and come up with a sustainable structure for research at TTS.

**Slide 54:** The big question we have is, "Could this be a service?" Could this be a service for Technology Transformation Services at GSA? Could it be a government-wide service? We think there are possibilities there. And really, this incremental funding model of 10x will help us explore those spaces in a way that doesn't cause us to bite off more than we can chew.

**Slide 55:** Our future state, our end goal, is that we have one research operation team that supports multiple research teams with everything that they need to just focus on connecting with the public and learning from them and incorporating that feedback into the work. That's our goal for research operations at 10x. But also potentially, is there something wider there that GSA could provide?

**Slide 56:** This is my call to you all if this started out. Our project on enabling government research operations started out as an idea that was submitted by a federal employee at a different agency. And so we are really excited about the ideas that folks have. So if you have an idea for 10x, you can submit your ideas at 10x.gsa.gov.

**Slide 57:** Ultimately what we want to do is support the people who use what we build. We want to support the public. And so we really feel like the public - and in particular, around accessibility - the sole arbiters of accessibility and usability are people that use assistive technologies or that have needs that we may not be bringing to bear in our work directly. So Jacline's going to talk a little bit more about how the US Web Design System team is helping that to take shape in their research efforts. Thank you.

**Slide 58:** Jacline: Hi everyone. This is Jacline Contrino, she/her. I am a white woman with brown wavy shoulder length hair wearing a black blouse.  I’m the UX Researcher and contractor on the core USWDS team. In this next section, let’s talk about our most recent round of usability testing with participants with disabilities. How did we approach it, what’d we do, and what did we learn?

**Slide 59:** First, some quick background: Not only were we wanting to test drive the PROCESS of HOW we operationalize usability research, we also wanted to assess how a few of our components perform for people with visual impairments who use assistive technology. But how did we decide which components to test?

**Slide 60:** Well, we decided to build off of the work of our Inclusive Interactions Team from late 2022 and early 2023. They conducted User Acceptance Testing on many of our components and uncovered some usability and accessibility issues. So, we tested the same components again using the same fictional scenario and prototype with a few functionality updates for some components based on that team’s findings. We wanted to learn how the updates made since the last round of testing affected component performance? Also, how do the unchanged components perform?And most importantly, what improvements are still needed?

**Slide 61:** The components we ended up testing were: accordion, character count, combo box, date picker, file input, input mask, step indicator, and validation.

**Slide 62:** We conducted moderated sessions remotely via video conference that lasted 1-hour and 20 minutes. We started the sessions with semi-structured interviews to ask about their experiences using websites and then moved into observing participants interacting with a semi-functional prototype and asked them to think-out-loud. We were interested in seeing if they experienced any friction. Friction could mean anything from: any time the participant was confused, any time they could not find or had trouble interacting with a component, any time the component did not behave the way they expected it to, etc. Of course we also took note of positive interactions, and really just anything that stood out as noteworthy.

**Slide 63:** We tested with 5 people with visual impairments. 3 described themselves as blind, and 2 with some vision. 3 people used screen readers, 1 person used a combination of a screen reader and screen magnification software, and 1 person used ONLY screen magnification. There was good variety in assistive technology software used as well as proficiency levels, with some participants being relatively new to it, using it for just a couple of years, to seasoned experts who had been using the technology for 20+ years.

**Slide 64:** To recruit participants, we reached out to our partner community organization that works with this community. We sent them a signup form and anyone who was interested signed up to be considered for testing. We were able to reach out and schedule participants from there.

**Slide 65:** It’s important to note that our signup form did NOT ask any screener questions, since doing so would trigger the need to obtain PRA approval. We only asked for emails, names, and the referring organization. We are securely storing testers’ information in a locked-down spreadsheet in our Google drive that only 5 core team members have access to. We consulted with our Privacy Officer with the help of Robert to see that our procedure for storing personally identifiable information (or PII) was not running afoul of the Privacy Act, and this was the approved procedure for us as a GSA agency.

**Slide 66:** Finally, I wanted to mention that we compensated participants $100 for their time through virtual gift cards emailed to them. We obtained approval to do this through the GSA micropurchase program, which took a couple of months from application to final approval.

**Slide 67:** Ok, so what did we learn? How did the components we were testing perform? Let’s dive into the findings. 

**Slide 68:** So, this slide is showing that the most friction experienced by participants centered around about 4 components tested, including combobox, date picker, input mask, and validation. 2 other components tested fairly well with only minor friction, including character count and file input. And 2 components performed well with virtually no friction - those include the accordion and step indicator. And even though we weren’t testing the banner component or links being styled as buttons, we still received feedback from users about them. We need more research for those - more on that later.

Also, I want to note that we are not saying that these components with the most friction are failing miserably. Overall, these components are usable - but there are some usability and accessibility issues to keep in mind.

Ok, so let’s dig into the details!

**Slide 69:** Starting with the components where we saw the most friction for participants.

**Slide 70:** Let’s begin with what we found with the input mask component. We found that the current input mask component does not give proper feedback when disallowed characters are typed. So basically, if a user types a letter where only numbers are allowed, there is no clear indication that anything is wrong. Furthermore, it is unclear whether the character was typed at all for someone using  a screen reader. Let’s take a look at what I mean.

**Slide 71:** I’m going to play a short video clip to demonstrate what we saw with input mask.

(Video clip plays)

So, we could see there that folks felt unsure of whether the characters they typed were being accepted or not, and it just wasn’t giving them any error communication. We already knew about this feedback issue, so this testing was validation that it is something to improve in the near future.

**Slide 72:** Let’s move on to discuss findings for date picker. We saw that all screen reader users that we tested with (3…we ran out of time with 1) had difficulty using the date picker. First, the keyboard controls did not work as expected. They could only use up and down arrows, not left or right or page up or down. 

We also learned that there were some issues around formatting and feedback. For example, users weren’t sure if the slashes would be entered for them or if they had to type them. And actually, we also discovered that it’d be beneficial for the slashes to be automatically entered for them. One person had a lot of difficulty typing the slashes and kept making mistakes, leaving him pretty frustrated.  

Finally, when manually entering dates, if users enter a disallowed format, there was no feedback given. For example, typing 10/1/2023 instead of the acceptable format of 10/01/2023 would not give any error message to the user.

**Slide 73:** Now let’s talk about combo box. We found that the combo box search function did not match user expectations in this test. We asked users to select the state of Texas, and nearly all of them expect to type the letter “T” and be brought to only states beginning with that letter (in other words, they expect first letter navigation). The way the combobox currently functions, though, is to show any word CONTAINING the letter “T,” so, for instance, “Connecticut” might show up in the results, leading to some confusion. And that’s what we see in the image here.

**Slide 74:** Another discovery was it seemed unclear that the “X” button to the right in the box is meant to clear results. The participant commented that she only saw those in comboboxes where there were multiple selections possible - so she thought it had a deselect function rather than a clear function.

A positive note about combobox is that one person really appreciated that it gives the “no results found” feedback, which she said she doesn’t see in most comboboxes. Instead, they are usually just blank, so she really liked that feature.

**Slide 75:** And for the final component where a lot of friction was experienced among our participants: validation. Validation was confusing for nearly all participants, as it didn’t match their expectations. They don’t really expect to see validation information at the top of a form, so wondered what its purpose was. Rather, they expect error messages at the point of need. For example, if you enter your email incorrectly in a field, it shows near that field that it is invalid. Or, they expect an error message to appear when they try to submit the form.

**Slide 76:** Additionally, the validation check mark wasn’t useful or noticeable to participants. The way it works is that when a valid email is entered, a little check mark appears to let people know, but as I said, no one noticed it - it had to be pointed out to all participants. So, it seems it isn’t giving meaningful feedback.

**Slide 77:** Ok, let’s now talk about the components where only minor friction was experienced.

**Slide 78:** So, we tested file input and for the most part, this component is usable to folks. We did see some indication that it could be beneficial to offer some kind of instruction on how to choose a file, since some participants struggled with actually choosing and uploading the file . And one user thought it was confusing to have the ‘drag file here or choose from folder’ contained together within one element (a button), when it might make more sense to separate them into their own elements.

**Slide 79:** Ok, let’s talk about character count. Overall, it was very well received from participants. They liked how the component offered delayed feedback, which was an enhancement since the last testing round. Before, it would announce how many characters were left immediately after users type a character which was a bit jarring. We implemented a delay so the screen reader announces how many characters are left after a short pause in typing. Participants liked this feature. One participant commented: 

“Oh, it worked really well. It was…giving me updates. It wasn't like being overzealous with it and trying to tell me how many characters there were every single time I typed a character like it was waiting until it was done. I think that works pretty well.” 

They also liked how it let them know when they had gone over the character limit.

**Slide 80:** Interestingly, we also heard from participants that they prefer a hard cutoff when they reach the character count limit. In other words, they want to be prevented from typing once they reach the limit. They said it’s annoying to type a lot of text in a box, not being told you’ve gone over the limit until you stop typing. It’s especially annoying for fast typers. Having to go back and see where to edit and cut content is a pain, so they’d rather  just be prevented from exceeding the limit in the first place.

**Slide 81:** We also learned that users need more visual cues when they have reached the limit, such as outlining the box in red. This was feedback received from the person using only screen magnification. Let’s take a look at the brief video clip. 

video clip plays

**Slide 82:** Lastly, let’s quickly discuss the components that performed well, with no friction.

**Slide 83:** Step indicator performed very well for most participants. They felt it oriented them well to what step they were at in the form and felt they could anticipate how much was left.

**Slide 84:** Accordion also performed well with no hiccups. Users understood that it was a collapsed thing that they could interact with to see more information, and everyone was able to interact with it successfully.

**Slide 85:** A couple of things came up in the research that we want to dig into more with future research. Let’s talk briefly about that.

**Slide 86:** First, a major pain point for every participant using a screen reader had to do with the "Next Step" and "Sign in" buttons in our prototype. The problem was that since this was only a prototype and not a real form, we used links styled as buttons for these actions. 

We hadn't anticipated all the usability problems this would introduce for our participants, and it isn't something we'd ever do in a real form. It would be against our button guidance — and common sense — to use a link instead of a submit button to move from page to page in a real form with real data, but that was the case here. The result was that we observed participants really struggling to complete some interactions.

We saw all participants who use a screen reader having trouble finding and interacting with the sign-in link. They expect a ‘submit’ or ‘sign in’ button to be an actual button, so that's what they looked for. And often, screen reader users use keyboard shortcuts to navigate to certain elements (like “b” to find all the buttons). Since our fake button was coded as a link, they missed it. 

Users of assistive technology are often far more aware of and sensitive to markup semantics than other users, so we are discussing links styled as buttons with our team and need to design some experiments for future usability research.

**Slide 87:** Something else we want to research further has to do with the banner component. [explain image] We weren’t intentionally testing it, but it came up. 2 users were confused by the banner component. One user confused it for a header. She said:

“I was thinking it might be more menu options. Because usually any buttons that are collapsed at the top of the page like that are usually menu, navigation things.” 

Another participant who has some vision commented that it was another example of something labeled as a button that wasn’t a button. She said it looks more like a drop down menu/combobox, or a link.

Dan: So, I just want to jump in here and say that we have overstuffed this meeting with too many potatoes in this bag and we're almost at the end of time. We've tried to answer a lot of questions in the chat that we have seen in the chat. We also have a lot of next steps we've done in response to this and a lot of stuff that's still to come but I guess we'll save this for the next monthly call and we can also talk about it in public Slack or otherwise. But there's a lot that's still to come and I apologize for not getting to it. 

But we learned a lot, we did a lot, we're doing a lot and we will be following up on this next month and with folks, anyone who reaches out directly. So I apologize for overloading this presentation and not getting to all the Q&A at the end but we'll return to this and be talking about it again next month.

{{< /accordion >}}

One of our roadmap goals is to conduct more user research with people with disabilities — and to ensure we’re doing so regularly. 

Over the last few months, we've made a lot of progress. This month we'll share our progress and report on findings from our first round of this research: conducting usability tests on [Design System components](https://designsystem.digital.gov/components/overview/) focused on users with visual impairments.

We’ll discuss:

* How we're working with GSA’s [10x program](https://10x.gsa.gov/) to develop a sustainable, repeatable research process
* Steps to operationalize research with people with disabilities
* Our work to recruit users of assistive technology to participate in user research
* Our usability testing process
* Findings from our recent usability testing
* Where we go from here 

**This event is best suited for:** Anyone who uses the U.S. Web Design System. This event will have an accessibility and usability focus.

## Speakers

* **Dan Williams** **—** Product Lead, USWDS
* **Anne Petersen** **—** Experience Design Lead, USWDS
* **Robert Jolly** **—** Product Manager and Accessibility Advocate, 10x
* **Jacline Contrino** **—** UX Researcher, USWDS

## Related resources

[Accessibility: Usability for every ability](https://designsystem.digital.gov/documentation/accessibility/)

[Accessibility for Teams](https://accessibility.digital.gov/)

[Increasing public participation in user research](https://digital.gov/event/2023/02/07/increasing-public-participation-in-user-research/)

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
