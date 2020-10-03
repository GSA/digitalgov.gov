---
slug: slack-ama-connect-standards-team-with-public
date: 2017-09-25 15:47:04 -0400
title: 'Slack AMA Connect Standards Team with Public'
summary: 'The Standards team hosted their first AMA (Ask Me Anything) with the public in August. Here’s a breakdown of the big topics discussed during the chat.'
authors:
  - john-donmoyer
  - marco-segreto
  - wsullivan
  - ryan-thurlwell
  - atul-varma
featured_image:
  uid: 'wds-home-new-2x'
  alt: 'a visual representation of code and styling'

topics:
  - code
  - content
  - mobile
  - accessibility
  - uswds
  - user-experience
  - accessibility

---

{{< img src="wds-home-new-2x" alt="a visual representation of code and styling" >}}

The team behind the U.S. Web Design Standards (the Standards) held their first Ask Me Anything (AMA), in August, to answer questions from their public Slack channel community.

There was great excitement in the channel leading up to the chat, and more than 40 new people joined the already robust community of federal, state and local government, higher education, industry, nonprofit, and U.K. and Canada government officials that are interested in working with--and growing--the Standards.

If you’re not familiar, the Standards are a design system that allow federal agencies to quickly prototype and deploy digital products using a baseline of design patterns.

During the 30 minute chat,  the team fielded a dozen questions ranging in complexity from technical questions about frameworks to marketing questions to asking for help converting colleagues.

Here’s a look at a few of the questions that stood out during the Slack chat.

### “Help me sell it”

According to one AMA participant, an effective selling point is that the Standards create consistent experiences across government. As early members of the Standards team shared in a previous blog post, “Implementing consistent design patterns, such as colors and button styles, make it visually obvious that users are on a government website. And when interactions and forms start to look and feel the same, it lowers the mental energy required to complete them, especially when they are across multiple sites and agencies. In this way design patterns can simplify and clarify the consequences of making important choices.”

Another community member pointed to “Introducing the Web Design Standards” on the Standards’ team [Video Tutorials page](https://standards.usa.gov/getting-started/video-tutorials/) (scroll to the bottom), and noted that a selling point is that the Standards can save agencies money, as they reduce the need to pay a vendor to design and build a website.

{{< youtube "iLD4Bu6I2I8" >}}

The Standards can help break up the ‘design-by-committee’ deadlock that can stifle digital teams since they provide a place to look to for direction, a third community member chimed in. The Standards also provide a headstart on responsiveness, accessibility and usability, as “there isn’t another UI (user interface) library out there that’s so effectively labeled for all members of the public to interact with.”

A number of developers and designers we’ve interviewed for agency case studies have also noted the Standards help them spend less time on the basic functional components of website design and construction--these components in the Standards have already been user tested and have best practices baked into their design, so these teams can spend their time on the more complicated or agency-specific items.

### “Are there examples of how third parties have leveraged this work?”

Yes, there are examples on the Implementations page, which can help those working with the Standards in web frameworks, package managers, and popular content management systems (CMS) including Drupal and WordPress. The CMS templates can help federal agencies quickly create agency sites that will evolve with the Standards.  Anyone can use the Standards as a base for whatever they’re working on, and modify them as they see fit.

With each release, the team is also writing release notes with upgrade instructions so users can upgrade at their own pace as new versions come out.

And, there is a list of sites that are “Standards powered” showing how agencies are using them. “Standards powered” can mean a number of things, from as little as just using the color palette, to as much as forking the Standards and extending an entire design system on top.

### “What’s the protocol for making updates to the Standards?”

The core team is responsible for deciding what goes into the Standards and on what timetable, but we’re always open to suggestions. The best way to start is to file a GitHub issue before working on code or submitting a pull request to make sure the changes are a good fit for the project. For minor updates like spelling mistakes, pull requests can be submitted directly.

### “I have a website...and I want to change the UX and UI... so it follows the Standards...is there any good way to know when the website is officially USWDS compliant?”

There are examples of teams working to slowly roll-in parts of the Standards into an existing platform. The USAJOBS team was using a mix of Bootstrap components and custom code to power their existing site. They wanted to start using the Standards, so they replaced a few things at a time and eventually started their own design system using the USWDS as a base.

Another thing to keep in mind is that the Standards aren't really a "standard" in the sense of "compliance." They are really more along the lines of a design system.

### “Is there a plan to create an adapted Web Standards guide that is specific to information dense forms, wizards, etc.?”

Yes, it’s definitely something that’s on our radar, though there’s always a balancing act in making the existing code better and providing a better baseline, before going deeper into building ready-made components for more specific products. The form/wizard issue is a unique case because so many folks in government need it, that it would probably be near the front of the line.

Many groups have taken the Standards and extended them for this purpose, so one thing we could do better is to point developers to more advanced implementations for additional ideas like we do with the WordPress/Drupal themes users have written.  We don’t explicitly endorse them, but we list them on the site and regularly talk to the folks who make them.


### Have you given any thoughts to including the individual elements (like the Fractal site) with the bundled zip releases?

One challenge in including these elements is that there isn't any widely-accepted technology for doing HTML markup. The Fractal guide uses Nunjucks as an internal tool to ensure the Standards are working properly. There's no real "standard" here so it's very difficult to offer a solution that helps everyone.

But, third parties are welcome to build tooling for this, and some of the core developers even made our own "third-party" packages that are separate from the core Standards. For example, past and current members built a Jekyll theme and a Python package that integrates the Standards with Django Forms.

### “Why haven’t you built the Standards on a Bootstrap foundation or an existing CSS framework?”

A few years ago, when we were building the Standards, we looked at using Bootstrap as a base. We found that it was hard to override everything we needed with Bootstrap, that we didn’t have the time or resources to customize all the Bootstrap components to our own visual style, and at the time,  Bootstrap wasn’t as accessible as we needed it to be. It may have changed by now, but that was our original thinking.

We were impressed with the level of participation in the chat, and look forward to doing another in the near future to answer more questions.

Want to learn more?
Check out the UI components and page templates
See who’s using the Standards (and add yours to the list)
Read how they’re using the Standards
Contribute to the code repositories
Email the Standards team with any specific questions
Join the public Slack channel
