---
title: USWDS Monthly Call - December 2022
deck: "USWDS: 2022 Year in Review"
kicker: USWDS
summary: A look back at what took place in the Design System in 2022.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-2022-year-in-review-dec-2022-tickets-479345193377
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2022-12-15 14:00:00 -0500
end_date: 2022-12-15 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - open-source
  - usability
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
slug: uswds-monthly-call-december-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2022-uswds-monthly-call-dec-title-card
---

{{< asset-static file="uswds-monthly-call-december-2022.pptx" label="View the slides (PowerPoint presentation, 9.7 MB, 75 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for December 2022" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For December 2022. It's a cold and frosty morning here in Portland, Oregon, and the USWDS logo is suitably wintry, with an evergreen triangle and a selection of cool blues and white. And I should say that we've had a bit of bad weather across the country and some connectivity issues as well. All's gone well in our tech check, but if we have any connection issues, we'll figure it out asap.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and this is my avatar: dark hair, blue sweater, collared shirt. In real life I have my best approximation of a christmas sweater, and — to be real — it kinda smells a bit like I haven't worn it since last December. I'd also like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](https://digital.gov/communities/community-guidelines/) you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat.

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? 
Well this month we're looking at our year in review for 2022. We'll start with a few of the big things you may have heard about, and then we'll move on to a few other items we're proud of and didn't want to fall through the cracks! 
Like transparent workflows on our new Project Boards
Telling the story of code through process documentation
Adapting to user settings in Windows High Contrast Mode
Using USWDS Compile to solve a couple key issues that go beyond simply compiling stylesheets and learning what's important through Top Tasks analysis.

We've got a lot ready to present in this call, so let's get on with the show!.

**Slide 4:** 2022 was a big year for the design system, with not only a major release, but also the release of a major new section of our guidance. If you've been to these monthly calls throughout the year, you'll be familiar with this. I don't want to cover a ton of what we've already talked about, but I'd love to run through a year in the life of the design system, look at what we did, and hear from some other members of the core team to talk about some important things you might have missed this year.

**Slide 5:** We started off the year, in January, with the launch of our newest developer tool, the USWDS Compile Beta. Just like the colorful rectangles that are coming together to form a cube in the image on this slide, USWDS Compile helps bring a USWDS project together, providing a straightforward way to compile code and grab static assets from our distribution package. We've been using USWDS Compile in our own work throughout the year, and it's a great tool for simplifying and speeding up your process. You can read more about USWDS Compile and how to use it at [github.com/uswds/uswds-compile](https://github.com/uswds/uswds-compile).

**Slide 6:** In February we wrapped up some research we were doing with developers who use USWDS. We learned a lot from talking to developers, and we used what we learned to launch a new section on our website, called Getting Started for Developers. On this slide, we see the landing page for this section, which includes detailed instructions for how to start your first USWDS project: What to do, where to look, what to look out for, and an interactive tutorial that helps teach key USWDS concepts. If you're a developer new to the design system, check this out at [designsystem.digital.gov/documentation/getting-started-for-developers](https://designsystem.digital.gov/documentation/getting-started-for-developers/).

**Slide 7:** At the end of April, we launched a new major version of the design system: USWDS 3.0 — and here we see the colorful network of hexagons reading 3.0 that we used to promote this release. And while we really like hexagons in our presentations, this wasn't a cosmetic update, it was a complete rewrite of how we structured our codebase — all while working as hard as we could to make those changes invisible to you!

**Slide 8:** At the heart of USWDS 3.0 was a new modular package structure. What that means, is that we broke apart the codebase and rebuilt it so it was less a monolith and more of a collection of standalone units.

**Slide 9:** It's no longer a monolithic codebase — where developers have to get everything and more every time they install and use the design system. Instead, the modular structure means that developers can pick and choose just which parts of the codebase they need, and use only those parts. Here we see a schematic image of the USWDS codebase, represented by interconnected boxes. If you used the entire USWDS codebase in your project, it would result in 73 KB of compressed CSS.

**Slide 10:** But no project needs everything. In fact, some projects may only use just the banner and the footer. With USWDS 3, you can include only those components in your project, represented by the two colored cubes on the slide. This would result in a compressed CSS size of 8 KB, less than 15% of the total USWDS size.

**Slide 11:** Medium projects, like these five colored boxes would use only a few components and still come in at a fraction of the overall size. In this case, 12 KB.

The report is available at [designsystem.digital.gov/together](https://designsystem.digital.gov/together/). So check out the report and share it with coworkers, colleagues, and anyone that might find it useful.

**Slide 12:** And even big projects probably won't use every component. Even with a lot of USWDS packages included in your project, like the 12 colored cubes on this slide, you'll still see a performance upgrade, and you have the benefit of keeping track of only the components your project uses. As you stay up to date with the design system, you can safely ignore updates that have nothing to do with the components you use. USWDS 3 helps teams slim down and focus only on what they use and what they need.

**Slide 13:** And that's USWDS 3.0, this year's major release. In addition to modular package structure, we also signaled our end to IE11 support, and we're gradually introducing functionality that goes beyond IE11, with more to come. We also updated to modern Sass syntax for our stylesheets, and we've come into the modern age and started to embrace JavaScript, allowing requiring JavaScript for some component functionality. You can read more about USWDS 3.0 at the link we've posted in the chat.

**Slide 14:** In June we finished another research project and updated our Contributing guidance. This slide shows the Contribute page on our website. Contributing makes a big difference to the development of the design system, and this updated section helps folks know how best to contribute, and what to expect when you contribute to the design system. Check it out at [designsystem.digital.gov/about/contribute](https://designsystem.digital.gov/about/contribute/).

**Slide 15:** And if you've been to any of the monthly calls in the last four or five months, you'll know that last month, in November, we launched our inclusive design patterns projects. Our inclusive design patterns report landing page is here on this slide.

**Slide 16:** We wanted to learn from the experience of our peers and collect and develop guidance that helps any government team provide fair, equitable, respectful, and inclusive experiences for broad, diverse audiences. Our team talked to over 35 people from over 20 government agencies and programs as a part of a project to help expand our guidance to support not just components, but the interactions these components support. Things like complex forms, creating a user profile, and language selection. 

We published a report that talks about what we did and what we found. We launched a new patterns section on our website with comprehensive guidance for 17 interactions. And we released three new components to support these interactions. To read more about this, the best place to start is at the report itself, at [designsystem.digital.gov/together](https://designsystem.digital.gov/together/).

**Slide 17:** And finally, here in December, bookending the year, we released the 1.0 version of USWDS Compile, completing a process we started in January! The colored panes around the cube are just a bit more colorful on this slide!

**Slide 18:** But this year wasn't just about these big things. So now I'd like to introduce three members of the USWDS core team, who'll help me talk about some other important updates and improvements we made this year.

**Slide 19:** First, I'd like to say hey to James Mejia. James, can you introduce yourself and give a quick description for anyone audio-only?

Hello everyone, my name is James Mejia. My pronouns are he/him. I’m an engineer and contractor on the USWDS core team. I have short black hair and am wearing a dark red sweater.

**Slide 20:** Thanks James! I'd also like to introduce a few folks from the core team you may not have met on these calls before, starting with Amy Leadem. Amy, can you introduce yourself?

Absolutely. My name is Amy Leadem and I’m a front-end developer and contractor here on the USWDS core team. My pronouns are she/her and I have long brown hair and brown eyes. Today I am wearing glasses with blue frames and a light pink blazer.

**Slide 21:** Thank you Amy! I'd also like to introduce Charlie Mahoney. Charlie can you introduce yourself?.

**Slide 22:** Thank you Charlie! And finally, I'd like to introduce Jacline Contrino. Jacline can you introduce yourself?

Hi everyone, this is Jacline. I’m a UX Researcher and contractor also on the core team. My pronouns are she/her, I have shoulder length brown hair, I’m wearing a pinkish orange sweater and there’s a bookshelf behind me.

Thank you Jacline! You'll hear more from the team as we go on. But I'd like to start by quickly looking through some of the behind the scenes work that's helped improve how we do our work throughout 2022

**Slide 23:** **By making our workflows more transparent with the USWDS Project Board.** It's one of our core beliefs that we work better in public and that it's important not only to release our work as open-source, but to work in the open and show our work in public. This year we introduced a new public project board that we use for all our internal organization, helping us organize and prioritize our backlog, schedule our sprints, plan our releases, and create our project roadmap.

**Slide 24:** We have a new Github Project board that organizes and prioritizes our issues, pull requests, and more as data that we can display across a number of views. This slide shows a tab in our project data called Leaderboard, where we can see all the open issues across our repos, assign them a weight (or priority), and complexity, and a status. From the leaderboard, we can grab issues, and collect them into sprints of work.

**Slide 25:** This slide shows the Sprint Sequencing tab of our project board, where we assign issues to sprint and to team members. We use this every two weeks for sprint planning. If you ever want to know what we're working on right now, this is where to look. 

**Slide 26:** And work from our sprints is packaged and distributed as releases. This slide shows the Release Planning tab on our project board, where we collect issues and pull requests into coherent releases. This helps us be smart about our planning, and really helps speed up the process as we finalize releases and collect release notes. If you want to know more about what's coming up for the design system, this is the tab for you.

**Slide 27:** And finally, it is technically a different project board, but we also collect our high level goals in a public Roadmap board. This board helps us plan 3 to 8 months into the future. 

**Slide 28:** Our new project board has been super effective in helping us work better and faster in 2022. And it's not just an internal resource for the team. It's important to us that we're always clear and open about what we're doing and why. Come and see what we're doing at github.com/orgs/uswds/projects/8.

**Slide 29:** **The story of the code: Improving Issues, pull requests, and changelogs**

**Slide 30:** Hello again. This is Amy and I'm here today with James and Charlie to discuss the story of the code – the things we did this year to improve how we document our work. 

Specifically we will be talking about our strategy for writing up GitHub issues and pull requests – or PRs as we’ll call them later in this talk – as well as our approach for our newly added changelogs. 

Improving our process documentation has already had a big impact on how our team works – and we’ll explain how we hope it can also benefit you as community members, users, and contributors.

**Slide 31:** Just like with the project board Dan just spoke about, one of the primary benefits of this effort is that it increases transparency. By focusing on thoughtful, thorough writeups, we are able to expose more of our thought process and standards to the public.

**Slide 32:** Second, we saw the opportunity to speed up our workflow. I’m sure anyone who has worked in a project management tool knows and understands this at a deep level. By sharing and receiving more information, we can assess, assign, prioritize, and review work faster,  and better, than before.

**Slide 33:** And finally, we saw the opportunity to help out our future selves — and those that come after us — by adding to a comprehensive project history with every issue and pull request. This is a long-term project. Better process documentation lets us see the context and reasoning behind each change and will make it easier to build on existing work in the future.

So, how did we do it?

**Slide 34:** When we looked back on this year, we discovered two major threads woven into this documentation work.

The first is – **don’t assume familiarity.** The audience for these items, especially in an open source project, is wide. So give as much context as you can.
The second thread is: Remember that a human – probably a busy one – is going to read what you wrote. So use plain language whenever possible and make your writing scannable and to the point.

This is the high level. Now, let’s dig in. Charlie is going to walk you through some of the things we learned about creating quality issue writeups. Take it away, Charlie.

**Slide 35:** Thanks, Amy. Hi everyone, this is Charlie. Even if you’ve never seen or interacted with a GitHub issue, you are probably familiar with the concept. Issues are where we plan and track work on GitHub – they are similar to tickets, stories, bug reports, etc that you might find in other project management tools. It's a record of something that should be done, and why. 

Austin, you’ve written quite a bit about the challenges of collecting race and ethnicity information. Can you expand on this a bit?

**Slide 36:** Better issues lead to better work. When an issue makes a clear case for why we need this change, or has all the pieces we need to reproduce the problem, we can spend less time digging, guessing, and evaluating — and more time finding solutions.
This year, based on user research, we introduced two updated issue templates: one for bug reports and one for feature requests.

**Slide 37:** In our bug report templates, we created fields for:

1. Bug Description. We start by asking for a clear and concise description of the bug. Generally, an overview of the impact caused and if there is a known work around at the moment.
2. Step-by-step instructions to explain how to reproduce the bug. Being able to recreate the bug is crucial for confirming the bug’s existence and how it plays a role in a user’s experience.
3. Expected Behavior, what was expected before the bug was found and what SHOULD happen once the bug is resolved
4. Related code. This could be code snippets, demos, or links to example repos. This allows developers to spend less time understanding the starting conditions and focus more on the path ahead.
5. Screenshots. Show us if you can. This is a supplemental field to showcase visual bugs or unintended behaviors of components in action.
6. System setup. What hardware and software are you running? Knowing what systems are affected helps us to identify the scope of the bug. Is this something only happening on specific operating systems? Is this isolated to certain types of computers? Are all browsers displaying the bug or does it only affect Chrome/Safari/Edge? This can especially help us if we have difficulty recreating the bug.
7. Lastly, Additional Context. A place to leave any other notes, ideas, or considerations related to the bug before wrapping up the report.

**Slide 38:** A good issue needs to make the case for the work. A good writeup explains why this request matters. A good issue writeup should answer:
1. Who is affected? Who benefits? 
2. Is there a workaround? 
3. How much effort is required to work around it? 
4. What is the effect if nothing is done?

Each of these questions allows us to measure the weight of work and the benefit it will add. These new fields come together and help set the stage for quality, speedy problem resolution. 

Now I’ll pass it back to Amy to discuss the next step in our workflow: pull requests

**Slide 39:** Thanks, Charlie. Hello, it’s Amy again. Now that we have our issue created, the next step is to work on resolving that issue. Whenever the resolution involves a code change, we create a pull request in GitHub.

Pull requests are how we merge code into the Design System. With pull requests, we can prepare isolated code changes and work through the review process all in a central location – one problem at a time.

**Slide 40:** Each pull request is a record in the history of the USWDS codebase. Together, they are the story of our project and our decision-making. Because every code change is tied to a pull request, we can figure out how the code has evolved based on these PR descriptions.

We recently updated our PR template in GitHub to help make it easier to write an actionable PR. I'll pass the baton over to James to walk us through each section of the new PR template and why it matters. Take it away, James.

**Slide 41:** Hey there, it’s James. Let’s take a look at what makes a good PR.

The first step is to include a summary. The summary provides a brief, 1-2 sentence overview of what you’re proposing. The summary should be easy to understand at a glance. In this example, you’ll see that we highlight the benefit first (*"Updated the aria-label in English versions of usa-banner."*) and then add a high-level explanation of what’s changed:

We updated the banner component's aria-label to read *"Official website of the United States government"* to minimize potential screen reader ambiguity between *"An official"* and *"Unofficial"*.

This example also shows that the PR has been connected to its related issue. (Fixes #4419) By connecting the PR to the issue, we give the reviewer the opportunity to learn more about the problem from the source. This additional context can be crucial, so please don’t forget to include it.

**Slide 42:** After that, we’ll move on to the problem statement. A successful problem statement conveys the desired state, the actual state, and the effects of remaining in the current state. In this example, the problem statement summarizes what’s happening and the risk of leaving it unchanged.

When read out on a screen reader, the statement *"An official website of the United States government"* can sound like *"UNofficial website of the United States government"*. This introduces the risk of conveying a meaning opposite of the intended meaning.

**Slide 43:** Next up is the solution statement. This is where you can outline the changes that the PR is proposing. It can be helpful to share what the solution is, why this approach was chosen, how you implemented the change, and possible limitations of this approach and alternatives you’ve considered. In this example, we say:

Updating the aria-label gives us the ability to reduce confusion for those using screen readers without creating inconsistency in the visual presentation. 

For more complicated pull requests, the solution statement could be a bulleted list of individual tasks with links to related commits. 

With any approach, the goal is to make it easy for a reviewer to understand what you did.

**Slide 44:** The last section we’ll discuss is all about testing and review: How to check this work. In this section it’s important to describe the tests that you ran to verify your changes, provide instructions or even demos to reproduce these tests, and clarify the type of feedback you are looking for.

In this example, we see:

This component was tested on VoiceOver on Safari, Chrome, Firefox, and Edge for Mac, and on Windows Narrator.

Please test on your available screen readers to confirm that the component is introduced as *"Official website of the United States Government"*.

**Slide 45:** As we discuss reviews, it is important to highlight that how we write review comments is as important as how we write PR descriptions. Some key things to keep in mind when writing comments are to be kind, thoughtful, and don’t be afraid to make suggestions. 
The PR review process can make or break a code base. Make sure you are giving reviewers everything they need to do their job well so that the code changes are the best they can be. 

Now that we have completed the pull request process, it is time to talk about changelogs. And for that, I’ll pass it back to Amy.

**Slide 46:** Hi, it’s Amy again. We are now at the final stop in our workflow: Changelogs. 
Changelogs are a record of the notable changes made to a product. They are a new addition to USWDS – something we started adding to our site just last month. Now, every time a change is released in USWDS – or merged into our documentation site – we will make a new changelog entry.

**Slide 47:** If you look through enough repos or code bases, you’ll see that changelogs can take on a range of formats. For USWDS, our aim was simple: make a helpful history – for humans.  

**Slide 48:** Changelogs give us the ability to tell a story over time. GitHub is great for tracking changes, but if you’ve ever had to dig through a commit history, you’ll find quickly that it can be hard to tell what is meaningful. 
Changelogs allow us to highlight the things that affect you and give you the information you need to get the full story – all without leaving the site. No more hunting, digging, or knowledge of Github required!

**Slide 49:** One of our top priorities was to make our changelogs easy to find, so we added them to the bottom of the pages on our documentation website. You can access them quickly by clicking the “Latest updates” link in the secondary navigation.

Second, we tried to include only the items and data that would have meaning.

As you can see in this example, we first include the date that the change was merged into the system. We also identify and provide a link to the related USWDS version number. The aim here is to give a timeline and create a reference for what you might have missed since you last updated. 

We’ve also tagged our changelog items with a set of labels that describe what type of content has been affected, as well as identify if the change is breaking. You’ll see that we highlighted the “Accessibility” and “Breaking” tags in yellow and red for extra attention.  

Next, we provide a brief description of the change. You’ll notice a lot of similarities between this summary and the one found in our pull requests. That’s because when we write a good PR summary, we can reuse it in our changelogs.
And finally, we provide a link to the related pull request so that you can easily get more information if needed.

**Slide 50:** And with that, you can see how we are building this web of documentation. Changelogs, issues, and pull requests, are all linked together so that no matter where you are coming from, you’ll be able to quickly and easily find the context and history you need.

Thank you Amy. We will continue the work to be more transparent and accessible in our code documentation as we move into 2023 and beyond. Our future selves are already excited about these changes and we hope that you find benefit with them as well.

**Slide 51:** **Adapting to user settings: Windows high contrast mode**

**Slide 52:** Hello again! As we’ve been putting an emphasis on accessibility throughout the year, we discovered that some of our components had major problems in forced color modes.

In some custom settings modes on Windows browsers, we found things like disappearing radio buttons and a vanishing date picker UI. On the left we see a screenshot of a green and white high contrast version of the USWDS radio buttons, except all the radio buttons except the focused one has disappeared, including the selected option. And on the right we see a green and white version of the date picker, but the calendar has no border and the calendar icon used to activate the component has vanished, and the date range selected is not visible.

**Slide 53:** What are these settings? Why do folks use them? And what could we do to make our components usable?

These settings are a system-wide feature of Microsoft Windows referred to as Windows High Contrast Mode. High Contrast Mode refers to a number of custom color themes (some of which are actually low contrast) that users can choose which override the default color themes in every application.

High Contrast Mode overrides certain display styles, like the CSS that USWDS uses to control the display of text, link, background, borders, and other element colors. This feature is overriding USWDS stylesheets — and doing so in such a way that our components were breaking.

**Slide 54:** According to a Windows blog post by the Microsoft Edge Team, "High contrast on Windows is an accessibility feature designed to increase text legibility and improve readability"

There are many reasons why someone might enable high contrast on Windows: to better see elements on the screen; to reduce visual noise so they can focus better; to ease eye strain, migraines, or light sensitivity; or simply because they prefer a very particular color scheme.

**Slide 55:** Low vision don't always use screen readers, nor should they. In fact, a study by WebAIM concluded that 51.4% of their low-vision respondents reported using some type of high contrast/forced colors modes.

If this mode was making some of our components virtually unusable, we needed to fix it.

**Slide 56:** Fortunately, there are new web standards to style content for forced color modes such as Windows High Contrast

The new forced-colors media query allows for responsive design, detecting if the user is using Windows High Contrast or another forced color mode. Within these media queries we can use a number of special forced-color keywords to tell the operating system how to style our component with the forced color palette.

**Slide 57:** So in the end we were able to fix the radio buttons, the date picker, and 11 more components that previously broke in forced colors mode. 

On the left you can see the green and white radio button component with all the radio buttons visible. On the right, you can see the green and white date range picker with a visible icon and a visible selected range. 

USWDS also now supports all of the new system color tokens for forced color modes, making it easier for other developers to use these styles to improve their websites when using custom theming.

**Slide 58:** **Requirements by default: Autoprefixing with USWDS Compile**

**Slide 59:** As Dan mentioned earlier, USWDS Compile makes it easier to get started with USWDS and compile its stylesheets, as well as simplifying the upgrade path from USWDS 2 to USWDS 3. And since it includes everything required to compile USWDS stylesheets by default, it can also be a good solution for a fairly common problem we've seen on USWDS-powered sites: rectangles showing up instead of icons.

**Slide 60:** It can get a little lost in our documentation — and it is a little bit technical — but USWDS requires a tool called Autoprefixer to make sure that our supported browsers get style rules that they can parse correctly. Some browsers need different code to accomplish the same task, and Autoprefixer assures that every browser has the stylesheet rules it needs. Currently our autoprefixer settings are:

**>2%
last 2 versions
IE 11
not dead**

Speaking of not dead, we’re still including IE11 in our Autoprefixer settings *for now*. But this will probably change next year. And when it does, we'll update USWDS Compile as well. Using USWDS Compile pretty much means not having to think about USWDS stylesheet requirements. And that can be nice.

**Slide 61:** Because these requirements matter. Autoprefixer settings make a difference. At the top we see an example of a banner without using autoprefixing. It has a blue rectangle instead of the usual down caret. The example on the bottom shows the proper display of the banner. This isn't just an aesthetic issue, it affects the usability of the banner.

**Slide 62:** So, when you use USWDS Compile, you get rid of those icon rectangles, and you get the assurance that your website looks the way it's supposed to in every browser. And when you keep up to date with USWDS Compile, you can be confident that you're also keeping up to date with any USWDS requirements.

**Slide 63:** **Simple icon sprites: Custom icon sprites with USWDS Compile**

**Slide 64:** Our default icon set includes 245 icons. We can see them all on the screen right now. These are collected in a single file called a sprite. As images go, it isn't enormous, but it is 71 KB. We include these icons to give teams flexibility, but if you have performance on your mind, this can be an opportunity to slim down.

**Slide 65:** Maybe you don't need all these icons. Here we can see 13 common icons highlighted.

**Slide 66:** [DEMO]

So now I'd like to do a brief demo of how to use USWDS compile to create a custom icon sprite. 

On the screen we have the default sprite with all USWDS icons. You can compile a smaller sprite by only pulling in the icons you plan to use.

In our demo project we’ve created a project icons directory. It includes the only icons we plan to use in our project. In this case these 5 arrow icons.

In our gulpfile we’ll add two settings to customize the sprite so we only keep the 5 icons we saw earlier. The first uswds.sprite.projectIconsOnly, we’ll set this to “true” so it only uses our project icons. The second is uswds.paths.src.projectIcons. This tells USWDS/Compile where our project icons live. We’ll point to our custom project icons directory.

Now when we compile again, our sprite.svg will only have these five arrow icons.

Our sprite has been slimmed down from 71KB to 4KB. A lot of the previous icons have been removed. 

You can use this technique to add your own project icons on top of the defaults too. Just make sure to set the projectIconsOnly flag to false, instead of true.

You can learn more about integrating compile in [Phase Two of the Getting Started for Developers guidance](https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/). As well as the [official USWDS/Compile documentation](https://github.com/uswds/uswds-compile/issues/50). Please check it out and I hope you enjoy working with Compile! Back to you Dan.

**Slide 67:** **Learning what's important: Top Tasks**

**Slide 68:** There's a lot to learn. Our research earlier this year helped us better understand and improve the experience of developers getting started with USWDS by improving guidance. Now we are focusing on how to better prioritize and organize information on our website to improve navigation.

**Slide 69:** People are typically pretty task-driven when interacting with websites. They are trying to get something done. Top tasks are a short list of about 5-10 of the most important tasks that people are trying to do on your site. Basically, they are the things that matter most to a majority of your users.

**Slide 70:** So we've been working as a team to go through our existing research to put together a task audit: a large list of common tasks users have on our website. On the slide you can see just a part of this long list. You don't need to read everything on this slide, but it includes things like:

Component guidance
Component compliance to section 508
Learn about design tokens… and 
Code and guidance changes

We'll be reaching out to you, our audience, to help us get from this long list to a shorter list.

**Slide 71:** What'll we do with this? That short list of 5-10 top tasks will serve as a tool to help us optimize the experience of carrying out those important tasks. For example, it can help us make decisions around how to organize and label content on our site, make site navigation changes, make UI changes, content improvements, etc. All in service of making those most important tasks easier to do. The thinking goes, if you can get those top tasks right, you will be serving the majority of your users.

Once we know what our users’ top tasks are, we can then figure out how easy or hard it is for people to carry out those tasks. We’ll do some testing, find the pain points, make improvements, and test again. Rinse and repeat. Insights from this study will allow us to regularly measure and iterate on our user’s experience with the USWDS website.

**Slide 72:** So one of the steps we need to take to figure out what’s important to you all is to ask you! Please keep a lookout for a short survey we hope to send out in the coming weeks. We will post the survey in a few channels (public slack channel, on our website, our newsletter, and monthly call to name a few). The more participation we get the more confident we can be in our findings (we really can’t do this without you), so please do fill out the survey when you see it! It’ll help us better serve you. We appreciate it!

**Slide 73:** PUT A BOW ON IT!

**Slide 74:** Now some Q&A.

**Slide 75:** Thanks for joining today’s USWDS monthly call. Next month, we’ll be answering some of your most-asked questions. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you next month - in 2023!

{{< /accordion >}}

What things — small and large — made 2022 a great year for the Design System? This month, we’ll hear members of the Core Team share their favorite Design System updates from 2022. Join us as we look back at the year — you never know what you might have missed!

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
