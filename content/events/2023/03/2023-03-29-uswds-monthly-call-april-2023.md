---
title: USWDS Monthly Call - April 2023
kicker: USWDS
deck: "Top tasks: What the U.S. Web Design System team did and what they found."
summary: "Tune-in to learn more about what your feedback is doing for the U.S. Web Design System."
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsd-yprz0iHLdpaMaMneN1Iseo26Pd-mA
# See all topics at https://digital.gov/topics
topics:
  - user-experience
  - design
slug: uswds-monthly-call-april-2023
date: 2023-04-20 14:00:00 -0500
end_date: 2023-04-20 15:00:00 -0500
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2023-uswds-monthly-call-april-title-card
# YouTube ID
youtube_id: d1wPuISaHIg
---

{{< asset-static file="uswds-monthly-call-april-2023.pptx" label="View the slides (PowerPoint presentation, 3.2 MB, 72 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for April 2023" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for April 2023.

This month we're celebrating Earth Day, which is this Saturday (with our logo in shades of blue, white, and green), as well as Arbor Day, which falls on next Friday, April 28 (with our logo showing a single green triangle in the shape of a tree).

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a black and white checked shirt, and I'm also wearing a fleece since it's still in the 30s and 40s every morning this long, cool pacific northwest Spring. I'd like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](digital.gov/communities/community-guidelines/) — you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat. 

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?
First we'll take a quick look at some product updates.
Then we'll spend the rest of our time talking about Top Tasks!
We ought to have some time left at the end for Q&A. So let's just get right into it.

**Slide 4:** This month we released USWDS 2.14.0 — the latest and likely the final release in the USWDS v2 branch. 2.14.0 is what we consider a long-term archive release; we've stripped pretty much all development dependencies from the package and left only those dependencies necessary for folks using the design system on their projects. This reduces its security footprint and prepares us to end USWDS 2's maintenance-mode phase next month.

If you use USWDS 2.13.3 and will not be upgrading to 3.0, consider updating to USWDS 2.14.0. But also consider updating to USWDS 3.0!

**Slide 5:** Secondly, check your inboxes at the end of the month for the 2023 FAS Customer Loyalty Survey. This survey, from GSA's Federal Acquisition Service, isn't spam — it's the primary mechanism by which we determine the design system's Net Promoter Score, or a rough measurement of how likely design system users are to recommend the design system to others. The more we hear from you on this survey, the better information we get about how well we're doing, and the better adjustments we can make moving forward. 

So take a minute when you see this survey appear. It's not just a random data call, it's something we actually value and use.

**Slide 6:** Which is a fine transition into where we'll spend the rest of our time here today — in a discussion of Top Tasks, a survey-centered, data-driven methodology to help any team discover what matters most to your users in the sites and services we build. As we'll learn today, Top Tasks proved to be a good use of our time for our project, and we believe it can be a useful exercise for any team. And if I see a Top Tasks survey in my inbox, I'll respond to it!

**Slide 7:** To lead our presentation on Top Tasks today, I'd like to introduce Jacline Contrinio. Jacline, why don't you introduce yourself, give a self description for anyone who can't see you, and take it away!

Jacline: Hello everyone! This is Jacline - the contracting UX Researcher for USWDS, and my core responsibility is helping the team make user-centered, evidence-based decisions. My pronouns are she/her, I have shoulder length wavy brown hair, and I’m wearing a blue button up shirt.

**Slide 8:** All but the simplest websites and services are composed of dozens of tasks, things the folks in your audience are trying to do or find. Everything you've included on your site is there for a reason, and you already try to make sure you don't include redundant or useless content. But there are always competing project priorities, and it can be hard to know what's really important to the folks that are using your site. You can get some information from analytics, but not everything can be effectively measured. And you may even have a sense that there are unmet needs — content or functionality you haven't even developed yet — that you aren't able to measure at all.

You can think of the tasks associated with your service as this grid of dots. A simple organized rectangle, where every dot is the same size. But you know it can't possibly look like that to your users, some of these tasks must be more critical than others.

**Slide 9:** Since not all tasks are equally critical to your audience, how do you get a sense of which ones are those critical tasks? You have a diverse audience with diverse needs, is there any way to generalize? In our grid of dots, we see some of them getting bigger and some of them getting smaller, but how do we know which of these dots should be big and which small?

**Slide 10:** How do we identify the tasks that our audience values? How do we identify those tasks we consider key metrics for the success of our service? How do we know where to spend limited resources? In our grid of dots, how do we know which of these dots turn gold and get special attention? 

Well we were interested in getting answers like this for the design system, and we think that the technique we ended up using to get our answers is practical, achievable, and one that could benefit all sorts of teams. Today we're going to talk about what we did and what we learned, and how you could do this for your own team.

**Slide 11:** Some of you may remember taking a survey of ours recently with a lot of checkboxes. That survey was the key data instrument in a research project we’ve been working on over the last few months using a popular technique called Top Tasks. Thank you for taking the time to fill out the survey. We received a great response and your participation was critical to making the project a success.

**Slide 12:** So what are we talking about when we talk about Top Tasks? 

**Slide 13:** Well, the short answer is that top tasks are the things that matter most to a majority of your users. They are the key things users are trying to accomplish on your website or app.

**Slide 14:** People are fairly task-driven when it comes to interacting with websites - they are trying to get something done.

Think of when you need to book a flight for a trip. So… you might go to a flight search aggregator site that shows you options for multiple airlines. Typically, some main things you want to do are specify your travel locations, your dates of travel, compare prices and fees, compare flight times, and maybe filter by nonstop flights. Those are examples of what might be top tasks. 

Now, let’s say you are bringing your cat — let's call her Toonces — with you on your flight, and you need to find the policy for carry-on cat carriers. That might not be a top task. 

It’s not that it isn’t important. It's important for you! And it should be easy for people to find that type of information. But until cat transport is the primary reason for air travel, it's not something that's important to a majority of airline travelers. 

**Slide 15:** A Top Tasks exercise helps you figure out what the top **ten or fewer** things people need to do so you can be sure you continually address the experience of those top things. It’s especially useful if you have limited time and resources to improve the UX of your site. If you can get your website’s top tasks right, you're serving the majority of your users and you can be confident that you're meeting these needs as you also address other important tasks.

**Slide 16:** We chose this method because we wanted to get an idea of what matters to our audience. Top tasks is a tool to help your team focus on what matters most.

**Slide 17:** Top Tasks research is a method invented by Gerry McGovern, a highly regarded consultant, speaker, and leader advocating for customer-centricity in the online world as well as for reducing digital waste. He's worked with the EPA, the State Department, HHS, and HUD as well as the governments of Canada, Norway, Ireland, and the UK, among others. 

Gerry has a great **Deep Dive in Top Tasks video** available on [Digital.gov](https://digital.gov/). 

**Slide 18:** The results from a Top Tasks survey can be used to:

- prioritize features and content
- design more effective information architecture 
- implement meaningful metrics that can be used to monitor how well your top tasks perform over time

**Slide 19:** How did we do it? At a high level, there are 3 main stages in the top tasks method:

- First, you create a very long list (for example, 300 or 500) of all the potential tasks users may be trying to do with your website. 
- Next, you trim that down to a "short" list of no more than 70 tasks. 
- Finally, you ask users to vote on their most important tasks through a survey.

It's conceptually pretty straightforward, but there’s a lot to consider each step of the way. For instance, how do we create this long list of tasks? Who decides what the final short list looks like? And does PRA fit into all of this? 

Let’s talk about what went into actually doing this work.

**Slide 20:** First, the long list of potential tasks. You want to consult sources of actual evidence to help with this. Here are the sources we consulted.
We looked at user behavior on the site with website analytics over a year - what pages are people clicking on? What paths are they taking? What keywords are they searching with? We looked at what questions people are asking us in our email inbox and community channels. I had 1:1 conversations with everyone on the team to see what they think users are doing on our site. I combed through past UX research done at USWDS, and also checked out other design systems to help me create a long list of potential tasks. 

**Slide 21:** Things to keep in mind while creating your long list: Figuring out the level of task can be tricky. It shouldn’t be too broad (like, ‘checking the ‘About us’ page which usually contains a lot of subtasks that people are trying to do when they go to ‘about us’; And it shouldn’t be too specific. For example - we don’t need to list every component we have in the design system as a task (for example ‘find button component; find accordion component, etc.’). Instead, we want to aim for universality of a task. So, ‘Browse components’ is the right level.

**Slide 22:** We tracked all these tasks in a big spreadsheet.

**Slide 23:** I’m showing a small portion of the spreadsheet we used on this slide. At the top we see the columns labeled “Task, Category, and Source” The rows in the first Task column show content like “Ask a question, help with errors, FAQs, report a bug, tutorials, request service” and those all belong to the “Help” category. Assigning tasks to categories helps organize your list and helps with trimming it down to a short list later. It also shows the source where those tasks came from, which is important to document. Sources could be anything from stakeholder interviews,to past UX research, or emails our users have sent to us.

**Slide 24:** The next step is starting to consolidate similar and duplicative tasks. That’s relatively easy and it's your first pass at trimming the list. 

What can be a bit more tricky is that you also want the tasks to be at approximately the same level of information architecture of your site. By "level" I mean that you don’t want to include parent content and child content in the same list. 

Think about something like shopping for clothes online. If you were creating a task list for an online merchant, it wouldn’t make sense to include both “Shop for clothes” and “Shop for jeans” in the list since jeans are a subcategory of clothes. Including both in your list undermines your final results and can make it confusing for users when they vote. 

Our final “long list” was 166 tasks. Next, we began working on getting to our short list.

**Slide 25:** Trimming down to a short list should be a collaborative process, and we involved the entire core team. We all met for several weeks, with each shortlisting session taking about 1.5-2 hours. Admittedly, this was the part of the project that took much longer than anticipated. Since it involves the whole team, you’re contending with busy schedules and outright fatigue since the sessions require a lot of brain power and decision making.

**Slide 26:** We worked in a collaborative whiteboard tool during these meetings. Basically, I showed all the raw tasks grouped under each category and then we all worked together to determine what the final task or tasks would be. This image shows a sample of the board we worked off of. 

There are two high level categories shown here, which are Tokens and Updates. Under each broad category are some yellow sticky notes that are the raw tasks from our long task list.  So for Tokens, the raw tasks were: Learn about tokens, Learn about design tokens, Find specific design tokens (color, flex, etc.), Implement design tokens, and Find or reference specific token information. We discussed what the final tasks should be from these raw tasks - the pink sticky notes show ideas generated from the team, and the purple stickies show the final tasks we settled on (which, we also used dot voting to come to consensus). For the tokens category we decided on 2 final tasks: Learn about design tokens, and Token reference.  

These meetings were full of rich discussions and we also had to decide how final tasks should be worded, which can be tricky.

**Slide 27:** By the way, carefully wording your tasks is important. Generally, best practices are to try to avoid using verbs like “click on, find, etc.” Those extra words are unnecessary and add clutter to your tasks. Ultimately, you want your tasks to be easily scannable by the people taking the survey. Instead of “Find component guidance”, it’s better to just say “component guidance.” There are going to be situations that you need to use verbs, and that’s ok, you don’t have to be rigid about it, just be mindful of how wordy your tasks are getting and if they are scannable.

Our final short list came out to 63 tasks that we included in our survey.

**Slide 28:** We built the survey in [Touchpoints](https://touchpoints.digital.gov/) since we already had access to the software. We asked 7 questions (only 3 of which were required). We asked people about their professional roles, experience with using USWDS, how often they’ve used it, how proficient they feel they are using it, and most importantly, asked about their top tasks. 

So, the first question in our survey was…

**Slide 29:** Below is a list of tasks you could do on a design system website. Choose up to five of the tasks that are most important to you. Please trust your first instincts and do not spend more than a few minutes on this exercise.

What you’re about to see will go against every instinct you have when it comes to survey design. It seems counterintuitive.

**Slide 30:** Then, participants see this. It’s a long list of 63 tasks to choose from. These images show only a portion of the list that was on the actual survey. You might be thinking - that’s WAY too long, right? Seems like a terrible survey design decision - people aren’t going to read that! BUT, this is actually an intentional part of the top tasks method. It has also been extensively tested for more than 15 years and 30 different languages and it just works. Here’s the reasoning.

**Slide 31:** Presenting users with a long list of options forces their instincts to kick in, and instead of carefully reading each option, they scan. They scan the list for the things that are ACTUALLY really important to them. And that’s one way you can feel confident that your results reflect users’ actual top tasks. So don’t be scared to include that long list in your survey - people will still complete it, I promise.

**Slide 32:** We also created a communications plan for how we were going to invite people to take the survey, where we’d post the survey, and when.

**Slide 33:** Another important step in this process was that we piloted the survey internally with 2 designers and a developer to work out any confusing things or other tweaks that needed to be made to the survey before the real launch. I highly recommend you always pilot your surveys! It only took a couple of days and was really helpful to get that early feedback.

Ok, so we have everything almost ready to go to launch the survey to users, but hold up!

**Slide 34:** You need PRA approval if you’re planning to survey more than 9 people and if you include participants who are not federal government employees.

If you are not familiar with the PRA — the Paperwork Reduction Act — and how that impacts research efforts, I highly recommend you check out the resources we’re dropping in the chat. 

- [https://pra.digital.gov/about/](https://pra.digital.gov/about/)
- [https://digital.gov/resources/paperwork-reduction-act-fast-track-process/](https://digital.gov/resources/paperwork-reduction-act-fast-track-process/)

We don’t have time in this session to dive into all the requirements surrounding the PRA (plus, I’m not a lawyer), but generally speaking, you should know that it doesn’t have to be scary. Our experience with it was actually pretty good!

**Slide 35:** We used the fast track process. It’s a lot quicker than the conventional process which can take around 6 months or more.
The fast-track process can be used by agencies with generic clearance for research focusing on the awareness, understanding, attitudes, preferences, or experiences of customers or other stakeholders that relate to existing or future services, products or communication materials.

**Slide 36:** Methods that potentially fall under the fast track process include: customer satisfaction qualitative surveys; moderated and unmoderated usability studies; focus groups, etc. In other words, it includes a lot of UX research activities that are qualitative. Our survey was largely qualitative and we were not looking for statistical rigor, which was one of the reasons it qualified for the fast track PRA approval process.

**Slide 37:** Again, please look into PRA requirements and how it might affect your specific project. You can check if your agency has generic clearance in place to see if you might be able to use the fast track process as well as find your PRA contact with the links we’re putting in the chat. 

Once we had all of our materials finalized (like our research plan, survey instrument, and communications plan), we were ready to send off the materials to our PRA contact for review.

**Slide 38:** I was put in touch with our Customer Experience Desk Officer who reviewed our application. We went back and forth a few times when he had questions or needed more information, and we did have a meeting to go over our project, but once all of our final materials were ready to submit, it only took a few days for them to be approved.

Once we had PRA clearance, we were ready to launch our survey.

**Slide 39:** We cast a wide net and posted the survey in many different places in addition to our homepage. It was open for 3 weeks from February 13 to March 3, 2023.

**Slide 40:** We analyzed the survey data and pulled out insights. Let’s take a look at what we found.

**Slide 41:** The graph on this slide shows that we had 132 valid responses on this survey. This was a great response and more than enough to feel confident in our results. 

So what do we know about the folks that took the survey in terms of their roles and their experience with USWDS.

**Slide 42:** The graph on this slide shows that designers made up a large proportion of respondents (30%), but there was good representation of various professional roles, including: developers (20%), leaders (11%), and many in other roles (20%) such as IT Specialists, Information Architects, Content Strategists, etc. About 50% of respondents self-describe as designers, developers or engineers, or a mix between designer and developer.

**Slide 43:** The graph on this slide shows that we found  a decent mix of proficiency levels, from novice to expert. Nearly 50% of respondents consider themselves novice or beginner users of the design system. About another 50% self-describe as either competent or proficient, and only about 4% of our modest users describe themselves as expert.

**Slide 44:** Let’s take a look at what our overall top tasks were.

**Slide 45:** The graph on this slide shows the 681 total votes we received in the survey, equally distributed between each of the 63 tasks in the survey. If each of the tasks got the same number of votes, this is what it would look like, just a long flat bar. This distribution would have made for some tricky analysis.

**Slide 46:** But the graph on this slide shows the actual vote distribution between the tasks, with a steep curve at the left of the graph and a long tail to the right. This is close to what's sometimes called a power-law distribution, common to many types of data, where 80% of the outcomes are consolidated in 20% of the items. 

There are seven tasks in our data that were the clear positive outliers, each was selected by more than 20% of respondents.

**Slide 47:**  The graph on this slide shows those seven tasks highlighted in gold. Collectively, these seven items received almost half of the total votes, 48%.

**Slide 48:** Here are the seven overall USWDS Top Tasks. Obtaining guidance was really important to people (general usability at the top, then design patterns, and components). I was surprised that design pattern guidance was so high since patterns are so new on our site. 

We also see that browsing components is a top task (not surprising). Something that was interesting was how critical accessibility is to users. Understanding Section 508/WCAG conformance for components and for the design system in general both were top tasks. Finally, we see design kits made the list.

**Slide 49:** Designers, developers, and leaders were our three primary roles, as reported by our audience. What was important to all three of these roles?

- Design pattern guidance
- Browse components
- Component conformance to Section 508 / WCAG

So, what was different?

**Slide 50:** Design kits were the #1 thing designers need. For developers, more technical tasks such as Sass functions & mixins, USWDS-based integrations, utility class names & definitions, and Github repo were top tasks. And for leaders, they want to see examples of sites that use the design system.

It’s interesting to see the similarities and differences between each group, and what’s important to each group. The top tasks for each role will also be prioritized for us going forward in terms of making the experience of carrying out those tasks easier.

**Slide 51:** By experience & proficiency levels

We also compared top tasks against how much experience people had with using USWDS and how proficient they feel they are using it.

The short of it is that top tasks look pretty similar no matter what level of experience or proficiency level respondents had. We did see that novice users want general usability guidance more, and proficient users’ top tasks are more technical (ex: utility class names and definitions). So, that was interesting, but mostly tasks were similar across these groups.

**Slide 52:** The next logical step in the top tasks process is to ask…‘How easy or hard is it to do these tasks on the USWDS site?”

We will be conducting new research (such as usability testing) in the near future to get a baseline of how these tasks are performing. And for some of these tasks, like WCAG and Section 508 conformance, we know that there isn't currently a good way to find this information on the site, so our next step is to figure out how best to do this.

**Slide 53:** Key takeaways

Ok, so what does this all mean? What is this data telling us? What do we do with this information?

Let’s talk a little bit about what our key takeaways are from this study, and what we plan to do next.

We know that…

**Slide 54:** **Accessibility** is important to users, and we have an opportunity to better communicate how the design system and its components conform to Section 508 / WCAG.

**Slide 55:** **Browsing components** is a key task. Our research shows that some users struggle to navigate component pages.

**Slide 56:** **General usability guidance** is a top task, but guidance is scattered across the site, attached to specific components, patterns, and templates. There is demand to provide general usability guidance and best practices in one place. 

**Slide 57:** **Patterns** are important to our users, with design pattern guidance being a top task.). We understand patterns are a big need so we need to continue to focus on adding new patterns.

**Slide 58:** People are interested in how USWDS has been implemented elsewhere. Developers want to see **USWDS-based integrations**. Leaders want to see **examples of other sites that use USWDS**. How might we better showcase how the design system has been implemented / show people examples?

**Slide 59:** So, we learned a lot! And we have some work to do. Here are some of our next steps and key things we plan to do in the near future.

**Slide 60:** We are getting started on performing a complete **content audit** of the site. This will help us identify what content might be outdated, redundant, and how it could better support top tasks (in other words, how can we prioritize top task content?)

**Slide 61:** For **accessibility and Section 508 conformance**, we are already working on setting up processes for how we test our components for accessibility regularly both manually and with real users. We are also considering how we communicate how components conform to Section 508 on our site, as well as how we empower you and your teams to also do accessibility testing for your own implementations. We aim to get your feedback on our solution ideas before we publish anything.

**Slide 62:** Another item top on our list is to test the performance of our top tasks through **usability testing** with the USWDS community. We want to measure how these tasks are performing, and we do that by measuring how successful users are with completing them, how long that takes, and how easy or hard it is to do. And the beautiful thing about it is that we will have actual metrics that we can come back to and measure regularly to monitor the ‘health’ of our top tasks.

**Slide 63:** So, if you signed up on the survey to be a tester, keep your eyes open for an invitation to a usability study from us (hopefully in the next 6 weeks). If you haven’t signed up yet but are interested, we’re dropping a link in the chat to our signup sheet. Feel free to fill that out and we’ll be in touch. We can’t make USWDS better without your input, so we really appreciate it!!

**Slide 64:** No study is perfect — there are always limitations to consider and lessons we learn along the way. If I had a time machine, I’d go back to my past self (back when I was planning this research and was still bright-eyed and bushy-tailed), and tell them a few things.

**Slide 65:** **Try to use a survey tool that allows for randomization.** Touchpoints doesn’t allow us to randomize answer options to each participant, so every participant saw the same ordered list of tasks. The risk here is that it could skew the results to the items in the first half of the list being voted on more. We analyzed whether this was the case with our results, but thankfully the results were distributed enough to still be valid.

**Slide 66:** **Plan for enough time.** Trimming to a short list took much, much longer than anticipated. It involves many stakeholders, so budget for it to take several weeks.

**Slide 67:** **Include room for an open-ended comment on the survey.** I usually do this but somehow overlooked it this time. Plus, I was trying to keep the survey as short as possible. A lot of times, the best information you get is when people have an opportunity to add comments so next time I will definitely invite open comments on the survey!

**Slide 68:** So, to quickly sum things up, The Top Tasks process really worked for us.

- It delivered on its promise
- The process — starting with creating a long list of tasks, trimming it down to a shortlist, and surveying users — was all practical, achievable, and resulted in a number of good team discussions. 
- Getting PRA approval should not be seen as a barrier.
- We got some hard data and some actionable next steps, such as a focus on talking about accessibility conformance.

**Slide 69:** This project has provided USWDS with invaluable information that will inform so many strategic design decisions going forward. While I admit it is a fairly large investment of time (took us 6 months start to finish), it was worth it. Not only did we learn about what matters most to our users, we also have some solid next steps that focus our efforts on making what you need to get done on our site a much better experience. Give it a shot yourselves.

**Slide 70:** If you want to learn more, here's some recommended reading:

- A Deep Dive into Top Tasks with Gerry McGovern - Digital.gov
- Using Top Tasks to be Top-Notch - Digital.gov
- Search for  “top tasks research”

**Slide 71:** Q&A

**Slide 72:** Thanks for joining today’s USWDS monthly call. Next month, we’ll be talking about real-world accessibility with a special guest. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you next month!

{{< /accordion >}}

Join us this month as we discuss how and why the U.S. Web Design System (USWDS) team performed their Top Tasks research, as well as what they learned and what they'll do next. Tune-in to learn more about what your feedback is doing for the Design System. 

In this session, you’ll learn:

* Why the Design System team conducted this research
* Their research methodology
* Some preliminary findings
* Next steps

**This event is best suited for:** all users of USWDS, especially user experience practitioners.

## Speakers

* **Dan Williams -** Product Lead, USWDS
* **Jacline Contrino -** User Experience Researcher, USWDS

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
