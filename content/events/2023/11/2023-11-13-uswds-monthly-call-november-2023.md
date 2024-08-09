---
title: USWDS Monthly Call - November 2023
deck: Designing a repeatable research process with people with disabilities
kicker: Next steps in the U.S. Web Design System’s inclusive usability research
summary: The USWDS team will continue sharing our progress to improve ongoing
  research, publishing results and addressing recent findings.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsceupqj0pE-Dt8ojRN1yCeZHcM0jWgO8#/registration
date: 2023-11-16 14:00:00 -0500
end_date: 2023-11-16 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - accessibility
  - diversity-equity-and-inclusion
  - research
  - user-experience
  - customer-experience
  - content-strategy
  - product-and-project-management

slug: uswds-monthly-call-november-2023

# zoom, youtube_live, adobe_connect, google
event_platform: zoom

primary_image: 2023-uswds-monthly-call-nov-title-card
youtube_id: EQ8Nb60xgXA
---

{{< asset-static file="uswds-monthly-call-november-2023.pptx" label="View the slides (PowerPoint presentation, 6.3 MB, 63 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for November 2023" icon="content_copy" >}}**Slide 1:** Welcome everyone, to the U.S. Web Design System monthly call for November of 2023 where next week we celebrate Thanksgiving represented with this USWDS logo in shades of brown and orange.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is trying to match some of the fall colors in the USWDS logo; wearing a black and white check shirt, dark orange sweatshirt about USWDS **orange-60v**, brown pants **gold-60**, but bright green socks approximately **green-cool-40v**.

As Jeannie mentioned we are recording this call and I'm happy to say we're making progress on sharing the recordings of these monthly calls publicly. Digital. gov has been able to prepare and publish videos for the last year of monthly calls. And going forward we expect to have video for each month's call available pretty soon after the date of the call. I'll have a little more to announce about monthly call videos a little later.

Anyway, we'll be posting links and references into the chat as we go along and I encourage you to ask questions in the chat at any time if any member of our team can answer your question in the chat we'll do so. Otherwise there'll definitely be some time this time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well it's nice to know who's here and it's good to have you here today. For those of you who find that chat distracting you're welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call. So thanks and with that let's get started.

For those of you who find that chat distracting you're welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started.

**Slide 3:** So what's our agenda for today?

First, we've got a couple nice site launches and a couple quick product updates as well.

Then we'll discuss some of the next steps we've taken based on the usability research we talked about last month.

And this month I'm pretty confident we'll have time for Q&A at the end.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** Here's [nca2023.globalchange.gov](https://nca2023.globalchange.gov/). This is the home of the Fifth National Climate Assessment. The National Climate Assessment is the US Government’s preeminent report on climate change impacts, risks, and responses. It is a congressionally mandated interagency effort that provides the scientific foundation to support informed decision-making across the United States. The homepage shows a custom USWDS site with the gov banner and a large hero image with two people working to install a solar panel in a rural setting.

**Slide 6:** [beta.get.gov](https://beta.get.gov/). A new beta site for **get.gov**, home of domain registration and management for the .gov top-level domain (or TLD). Federal, state, local, tribal, and other recognized U.S. governments are eligible for a .gov TLD. The home page for **get.gov**'s beta site shows a classic USWDS site in shades of blue, with the text "It should be easy to identify governments on the internet" and a large "gov" logo with a checkmark, as well as an important alert at the top of the page that tells folks that this is a beta site, for testing only, and not meant for entering real data. So folks, check out this beta site, but use the regular get.gov site for managing your .gov domains!

**Slide 7:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 8:** Now let's look at a few quick product updates.

**Slide 9:** We released [USWDS 3.7.0](https://github.com/uswds/uswds/releases/tag/v3.7.0) last week, a nice release focused on a couple important accessibility updates, and improvements to the interactivity of some of our components in modern dynamic applications.

**Slide 10:** So what are the key improvements released in USWDS 3.7.0?

**Improved JAWS keyboard navigation in Date picker**

**Improved keyboard navigation in Range slider**

**Added units data to Range slider**

**Allow custom language content in File input**

**Improved teardown of Modal in dynamic applications**

**Improved Banner initialization**

**Added an X social media icon**

And there are a few other nice bugfixes and improvements in 3.7.0. Why not stay up to date? We've also got 3.7.1 in the pipeline right now, and it's mostly focused on a number of great small improvements from the community. If you're interested, we've posted the link to that [release milestone in the chat](https://github.com/uswds/uswds/milestone/137). 3.7.1 will probably be out after Thanksgiving, and with any luck we'll get to 3.8.0 by the end of the year. We've dropped [the 3.8.0 milestone](https://github.com/uswds/uswds/milestone/135) in the chat as well. These could change a bit, but this is what we're planning.

**Slide 11:** Out tomorrow, it'll be the first minor release for USWDS Compile, a little application that allows projects to quickly and consistently compile USWDS stylesheets. [USWDS Compile](https://www.npmjs.com/package/@uswds/compile) is now up to version 1.1.0.

**Slide 12:** What's new in USWDS Compile 1.1.0? Just a couple quick things, but we fixed an annoying bug that resulted in incorrect sourcemap references and paths. If you've even tried to track down the source of a CSS rule, you'll appreciate this fix.
And we also added support for the pnpm package manager. We updated a couple small things under the hood that lets projects that use pnpm properly find uswds source packages.

And that's USWDS Compile 1.1.0, out tomorrow.

**Slide 13:** As I've hinted, or somewhat explicitly mentioned earlier in the call, we now have the last year of USWDS monthly calls available online. Now you could get to them via Digital.gov or via your friendly streaming video service, but we think there's also a benefit to getting these videos on our own site as well. 
So now we have a monthly calls section of our website, at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls).
We have all the monthly calls from 2023 available, and we'll be adding more in the future. We also directly link to each monthly call's slides, as well as to the script and event information on [Digital.gov](https://digital.gov/). And as we move forward we'll be thinking about other improvements to this page, like adding direct links to different sections of the video, providing links that we presented in the call, or other related materials.

This should just be the beginning of making the information in these monthly calls more findable, and more integrated into our website.

**Slide 14:** And finally, as you know, sometimes the third Thursday of the month is earlier or later in the month, and next month it falls as late as it can fall: December 21. As the snowflakes on this slide imply, this is a bit too far into holiday season. In fact, this would place the monthly call on the winter solstice itself. So we're not going to have a December monthly call this year. And that means that this monthly call will be the last of the year. The end of 2023. How about that!

**Slide 15:** So last month we talked about what we've been doing to operationalize usability research at the design system. This month, we're going to get into the next steps in that process: how we're applying what we learned. How we're trying to make our next round of usability research even more effective, and how we're sharing and addressing our research findings.

**Slide 16:** A couple weeks ago, our team was talking through some of what we'll discuss later in the call: where to collect research artifacts and how to organize older research reports. In general, how we can better work to document ongoing and existing research. And one of our team members suggested that we might use our existing research page. *We have an existing research page?*As a quick recap: Consistent, ongoing research has been hard for us over time. We've had a hodgepodge of research activities, some testing with peers, some testing with the general public, user acceptance testing, and ongoing feedback and issues that we collect via GitHub. But nothing really consistent.

**Slide 17:** And while we've made lots of improvements based on what we've learned from you via GitHub, Slack, and email, we still need to be more proactive. There is no real replacement for ongoing usability research with real people, and we needed to start to build those muscles.

**Slide 18:** What we needed help with, to some degree, was what you might call Research Ops, research operations, or all of the activities that support the actual doing of research. These are things like understanding how to handle recruitment, compensation, and personal information. You might think that these are kinda small things, but they're definitely not, and they're the kind of things that actually prevent research from happening.
So we got some help from our colleagues at 10x, who were researching their own Research Ops solutions. They helped us answer these questions, and I'm hopeful that we'll be able to check back in with their work sometime in the future and find that their experience with us helped them understand some common solutions that might help other teams as well.

**Slide 19:** And this help really helped push us over the line and get started — specifically testing our components with people with disabilities, starting with people with visual impairments. We think that a focus on usability with people with disabilities is the right move, and that if we can make good decisions for people who use assistive technology, and people for whom it can be harder to successfully navigate and use our sites, then we're setting ourselves up to make good decisions for the broadest possible audience.

**Slide 20:** So what components did we test in our first round of testing?

We looked at Accordion, Character count, Combo box, Date picker, File input, Input mask, Step indicator, and Validation.

**Slide 21:** And the result of that test was that we found a range of usability friction with our components. Some had little to no friction. We found the least friction in Accordion and Step indicator. We found minor friction in Character Count and File Input. And we found the most friction in Combo Box, Date Picker, Input Mask, and Validation. We also noted that even though we weren't explicitly testing buttons and the gov banner, we noticed that these items could use more research, particularly when it comes to the distinction between buttons and links.

**Slide 22:** And if you want to get more into the details of what we found, just head over to… our new monthly calls page, over at [designsystem.digital.gov/about/monthly-calls](https://designsystem.digital.gov/about/monthly-calls). Today, we're going to talk more about next steps and applying what we learned.

**Slide 23:** To do that, I'd like to introduce Jacline Contrino, a contractor, and a UX Researcher on the USWDS Core Team. Jacline, take it away!

Jacline: Thanks, Dan. Hi everyone this is Jacline, she/her, I'm a white woman with shoulder length brown hair and also wearing a pumpkin colored sweater with black stripes so I think Dan and I are both feeling the fall vibes today. Let's pick up where we left off last month.
 
**Slide 24:** I just have a few more things to share from our last round of usability testing. The last time we met, I spoke about how some issues needed more research, with one being how there was some participant confusion with the banner component. One person had confused it for a header, thinking it was a way to navigate the site. She said “I was thinking it might be more menu options. Because usually any buttons that are collapsed at the top of the page like that are usually menu, navigation things.” Another person commented on how it was labeled as a button, but it didn’t look like a button. Instead, she said it looked more like a link and a dropdown or combo box, so that was a little confusing to her.

**Slide 25:** Finally, another thing that came up is that we learned that sometimes people, especially those with low vision, might have external plugins installed on their computer to really customize their environment, such as special forced colors and high contrast plugins. This made some elements in the prototype completely disappear visually. When we found out she was using a lot of extensions that affected how things display, it was a good learning experience that it’s important to ask more detailed questions about users’ tech setup and to keep those things in mind.

**Slide 26:** Ok, so I presented all of these findings to the USWDS core team along with my recommendations. We unfortunately don’t have time to cover what my recommendations are today, but as Anne will discuss later, we published a complete research findings report for this round of usability research.
We also discussed these findings as a team, and then, the next step was to make sure we could take some action. So we began creating Github issues.

**Slide 27:** We started by creating one issue per component that consolidated all of the findings. So, for example, for date picker, there were several findings, such as: the keyboard controls did not work as users expected, that some users prefer to manually type in dates or use memorable date picker drop downs, that one user had trouble tabbing to the date picker calendar icon, and also a finding around lack of error feedback. [The screenshot on this slide shows the date picker](https://github.com/uswds/uswds/issues/5524) issue where we listed all of these findings.  We also linked video clips in the issues so developers can more fully understand contextual information or make more sense of what users were experiencing.

**Slide 28:** Then, we met as a team to discuss each component, and further broke down those consolidated issues into individual issues for every finding. In [the screenshot on this slide, we’re showing the specific finding for date picker that a user had difficulty tabbing to the calendar icon](https://github.com/uswds/uswds/issues/5535). After trying to replicate the issue, we discovered that the actual issue appears to be that the focus indicator is not visible around the calendar icon in high contrast mode…this was another one of those special forced colors plugin issues. This breaking down into bite sized chunks of work for each finding will hopefully make it easier for us to track and tackle what needs to be improved in a reasonable amount of time.

**Slide 29:** So, we learned a lot about how some of our components are currently performing for visually impaired participants who use assistive technology. But testing component performance was only one of our goals for this research project. Another goal was that we wanted to test drive the process of testing itself. So, what did we learn when it comes to how to plan and run these types of tests, and how can we keep getting better at operationalizing usability testing with people with disabilities? In the next section we’ll talk about our key lessons learned and also share some best practices for testing with people with disabilities.

**Slide 30:** First, let’s talk about logistics. The first lesson we learned had to do with project timing and scoping.

**Slide 31:** We realized early on that things can typically take a little more time, and to plan accordingly. More time was needed at the beginning of the session for setup. We needed to ask questions about the full tech setup they were using: such as their device, assistive tech software, operating system, and browser. We knew that going in, but now we also know we should ask about any external plugins they may be using that enhance accessibility like forced colors or high color contrast plugins that we talked about earlier.

Setup also includes things like: making sure all the tech was working as needed. For instance, we had to make sure we could hear their screen reader, so we had to test that and ask some participants to rely on their microphone and speakers of their device rather than using headphones. You also need to build in time for doing any needed troubleshooting or guiding them in how to use the video conferencing platform, and also for verbally going through the consent form if needed (which we did do for one participant who had trouble accessing the form ahead of the session). Plus, we still go through the usual things you cover in any usability testing session, like explaining the study purpose, letting them know they can stop at any time, etc. Covering everything just takes time.

**Slide 32:** But even though you need to plan for more time for tech setup, that does NOT mean making the sessions extra long. Our sessions ended up being 1 hour and 20 minutes, which was really the limit of what we recommend. It can be very taxing on everyone involved… so now we are going to aim for tests to take no longer than 1 hour. We simply need to plan to scale back the scope of our testing goals to stay within reasonable time limits. We originally wanted to test 9 components in one test, but that proved to be just too much. Going forward, we will plan on testing between 4-6 components per test, depending on component complexity.

**Slide 33:** We also learned that there are a lot of steps to follow on the actual day of testing in order to keep things running smoothly, so we captured those steps in our new Testing Day Checklist. We included a version of this checklist on our Github Wiki page so anyone in our community can use it.

**Slide 34:** Some examples of the types of things on our Testing Day checklist include:

The things that you should do BEFORE the actual session starts, like:

* Making sure you have tabs open for all the materials you will need during the session, such as: your script. And special note on that - be sure your script appears on the screen where your camera is, so you appear to look at the participant as you talk (so, no side face!)
* Have a tab open for any prototype you’re using
* And also your notes document (although may be less important for facilitator)
* Relatedly, close unneeded tabs to reduce clutter
* Be sure the waiting room for the meeting is enabled, if applicable.
* Start the meeting at least 5 minutes before the session is scheduled to start.
* Right before you start the session, mute all notifications.

These are some examples, we also have steps for what to do during the session as well. Again, this ‘Testing Day’ checklist is currently available [in our Github Wiki](https://github.com/uswds/uswds/wiki/Usability-testing-day-checklist).

**Slide 35:** Another major area for lessons learned had to do with ethical practices and how to protect participants.

**Slide 36:** First, let’s talk about protecting personally identifiable information, or PII. It simply wasn’t important for us to see or record participants’ faces or names, and in fact, it created more work for us since we had to later go into the recording to blur out faces, names, and other PII in order to protect users’ privacy. So, we found ways to make protecting users’ privacy easier. We became familiar with settings in the video conferencing software. For example, we set it to not display the participants’ name in the recording. Also, we allowed participants to keep their camera turned off, and also let them know ahead of time in our emails that they are welcome to keep their camera turned off.

One participant chose to use a dog avatar instead — imagine testing with a floppy-eared dog in a hoodie… needless to say, it made for a very interesting and delightful session.

**Slide 37:** We also learned to be mindful of how certain tasks might infringe on participants' privacy. We originally tasked participants with uploading a file from their computer in order to test our file input component. But, it didn’t feel right recording their screen as they navigated their computer’s files, so we nixed that task from later sessions. Also, it’s important to ask participants to close or minimize any tabs or windows they don’t want recorded.

**Slide 38:** The last point to make for protecting participants has to do with helping them feel assured that their participation is truly voluntary. We let them know about how compensation works at the beginning of the session and that they can stop participation at any time for any reason, and still receive full compensation. We hoped this would help them feel empowered to stop at any time without fear of forfeiting any compensation.

**Slide 39:** Finally, we will aim to test with a more real-world scenario next time. The Zombie apocalypse scenario was created because we were testing a form in a disaster preparedness scenario, and we didn’t want it to be too real-world — it had to be clearly fake. At the same time, we found that although most participants were delighted by the scenario, it was not well received by some and served as a bit of a distraction. Going forward, we’ll try to find the right balance between too real and too fake.

**Slide 40:** So those were some of the big lessons learned for us after doing this round of testing. Now we wanted to spend a little time talking about general best practices for testing with participants with disabilities in case it's helpful for any of you who might be thinking about or planning on doing testing with visually impaired participants.

**Slide 41:** First, make sure you do baseline manual accessibility testing before testing with real users. Manual testing allows you to catch any glaring issues ahead of time and you don’t end up spending participants’ time discovering something you could have caught on your own. This also frees up space in the usability testing session to reveal more nuanced or unexpected issues.

**Slide 42:** Next, to better ensure things will run smoothly, be sure you run a pilot test with a colleague that has access to the assistive technology your participants might be using to work out any kinks before the real thing.

As I mentioned earlier, tech prep and careful logistics planning is a MUST. Although a pilot test won’t catch everything, since there are so many different combinations of technology configurations your participants may have, the pilot test will still help you get some good practice in and help you identify any unforeseen things to plan for or keep in mind, especially if you’re new to testing with visually impaired participants.

**Slide 43:** Honor participant preferences. Allow participants to use their own equipment and avoid asking them to change their configurations. Users of assistive tech often have the configurations the way they want - for instance, seasoned users of screen readers may have the speed rate turned high, making it difficult for the researcher to understand it. But, asking them to change it will affect the authenticity of their experience using your prototype, and therefore, could confound your data. It could also just be unnatural and frustrating for the participants, so instead, ask clarifying questions if you couldn’t catch what the screen reader said, or ask them to repeat an action if it’s important to hear or understand the screen reader in the moment. And remember that you’ll likely be recording the session, so you can always review the recording for anything you missed later.

**Slide 44:** Another point that might seem obvious but is worth mentioning is to make sure to use accessible technology to conduct the test, and also ensure any materials you send to the participant are accessible, such as the informed consent form.

**Slide 45:** Also, it’s generally a good idea to use high fidelity prototypes for participants that use screen readers since they rely on code to tell the user what’s on the page. Low to medium fidelity prototypes are generally harder to test with on screen readers.

**Slide 46:** Finally, be mindful of energy levels and allow participants to take as many breaks as needed, and end the session early if appropriate. This also ties in with what we were saying earlier about appropriately scoping the test so you don’t try to do too much or have the session take too long.

**Slide 47:** And that about covers what I wanted to share with you all today about what we’ve learned from our latest round of usability testing, as well as some of the best practices for doing this type of testing with participants with disabilities, particularly visual impairments. There are some great [accessibility guides and resources on Digital.gov](https://digital.gov/topics/accessibility/), so we encourage anyone interested to check those out. Now I’ll turn it over to Anne to talk more about where USWDS is going from here.

**Slide 48:** Anne: Hi everyone: I’m Anne, my pronouns are they/them. In the interest of inclusion and accessibility, I’m a white person with short brown hair and small brown glasses, and I’m the U.S. Web Design System’s Experience Design Lead.

**Slide 49:** So now that we’ve started down the right track and done this round of testing with assistive technology users, worked with 10x to inform our research operations and contribute to their work on ResearchOps, synthesized this research and produced findings, and started putting those into GitHub issues to get done, what’s next?

**Slide 50:** Well, this goes back to maturing our process. Each time we try something new and adopt it in an ongoing way, we mature how we operate. We’re showing how we do this so you can understand that we’re growing and improving just as you and your team might be.

**Slide 51:** But in our case, as I’ve said before, our process is part of our product.

**Slide 52:** Our process being part of our product feeds into the fact that as a design system, we’re not just a commonality machine, but a change machine. If any of what we do helps you, you can do it too! We hope to publish more information to help make that easier for you.

**Slide 53:** And it supports our polestar, which again supports our mission and vision, all of which we discussed in September. Which is to say, helping your teams align, design, and keep your sites and services up to date.

**Slide 54:** But practically speaking, what are we doing?

**Slide 55:** We’re adding a new page for research participant recruitment, about how we listen to the public and who we’d like to reach right now, and how to get in touch. We can send this to show what we do, and communicate who we may be looking for next, along with how it works for participants.

**Slide 56:** We’re working to set up a cadence of this research and testing. For our accessibility audits, that will be each component every 12 to 18 months. But we’ll also be doing various types of research at least once a quarter, including with components directly.

**Slide 57:** And I should note we’ve done all this research, and continue to, but right now it’s not widely available. So now, we’re publishing it on our site so that **you** can understand what we **have** tested and what we **haven’t**, and when, as well as how. Our [Research page](https://designsystem.digital.gov/about/research/) will serve as the centralized place for that information. That’s live for you to look at now and here’s part of it on the right. This page is our new overview, and place to centralize our research work.

**Slide 58:** In terms of individual research rounds documentation, you can now see those [usability research findings on our repository’s wiki](https://github.com/uswds/uswds/wiki/Usability-research-findings-for-Q3-2023), and we’ll be linking to those findings from relevant component pages. That’s what’s on the right here, or at least part of its summary.

**Slide 59:** We also need to be transparent when we find problems. So we’ll be adding a known issues section to the pages of those components. On the right here is a prototype of that, based on the main component page for the date picker. It has an alert box, in light blue, with an icon, which notes that testing has found some issues, then a link that takes you to a section lower on the page.

**Slide 60:** On the right here is the section from when you jump down, showing a section with the header “known issues” that lists two findings from this round of usability testing. Then it links to issues on GitHub for more detail.

**Slide 61:** We want to be obvious about what we found and our next steps, so everyone can make informed decisions about each component. That means publishing our research, linking to it from our site, and continuing to talk with you, our community, as we keep improving our process.

**Slide 62:** As for what we want to change prompted by this round of research — the findings with clear improvements we’ll make are now trackable, actionable, and visible in GitHub. Which helps get them into future releases. But not everything we found necessarily has clear solutions, so we’ll do further research on that in the future. We’re also in the process of setting up our next round of usability testing, in which we’ll likely cover other components. But also — now we know we can provide all of this research from our Research page.

**Slide 63:** So looking back to our relevant roadmap item — “establish ongoing accessibility-focused usability testing” — please note the “after” item under milestones highlighted here. We’ve done the “first” and “next” items, and this “after” item — “perform ongoing testing and share our process with our own community” — is literally what we did today and in our October call. So, big checkmark for this item generally, though the ongoing portion still has to be, well, ongoing. You can check us on this in the future.

**Slide 64:** So we’re making progress. Bit by bit, so to speak. Improvement by improvement.

**Slide 65:** So, onward. Let’s keep moving forward. We’ve made this progress, so now we can do it again. And again. We can operationalize it to get it into our way of working. Once it’s in our culture and regular work cycle, it becomes sustainable over time. And hopefully, in yours, too. With that, I’ll pass it back to Dan.

Dan: Hey, thank you Anne. And thank you Jacline as well.

All of this stuff is - we know that it's really important to you and it's also really important to us. Like being able to get on these continuous research cycles, being able to perform the research, synthesize the research, publish the research findings, connect the research to issues, address those issues, keep all of that process moving and to keep everyone up to speed with where we are and what we're doing is a big part of the maturation of our process, and we say it a lot. It's perhaps tedious to hear that the process is part of the product but I think this is where it really begins to seem more real and the value of that is more obvious. As much as we're able to tie the process into what we're able to show on the website and what you're able to draw from in making your own decisions and perhaps being able to do some of your own usability research, it just makes everything more obvious. It makes the design system more predictable it makes the issues that we find more transparent so that you're able to make better decisions for your own process and for your own project and for your own applications.
it's really important to us and it's just one of the things that we're working on now that I think will help to mature the design system and to be a better solution for teams as we move forward into the next year.

{{< /accordion >}}

During the [October 2023 monthly call](https://digital.gov/event/2023/10/19/uswds-monthly-call-october-2023/), the U.S. Web Design System team shared the progress we’re making on usability research with people who have disabilities.

This month we’ll discuss:

* More results from our usability research on Design System components
* Changes we’re making based on the findings 
* Continuing to publish what we learn
* Operationalizing and improving on a transparent research process
* Best practices for usability testing with participants who have disabilities 

**This event is best suited for:** Anyone who uses the U.S. Web Design System. This event will have an accessibility and usability focus.

## Speakers

* **Dan Williams** **—** Product Lead, USWDS
* **Anne Petersen** **—** Experience Design Lead, USWDS
* **Jacline Contrino** **—** UX Researcher, USWDS

## Related resources

[﻿USWDS Monthly Call - October 2023](https://digital.gov/event/2023/10/19/uswds-monthly-call-october-2023/)

[Usability research findings for Q3 2023](https://github.com/uswds/uswds/wiki/Usability-research-findings-for-Q3-2023)

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
