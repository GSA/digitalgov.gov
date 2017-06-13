---


date: 2014-10-06 10:00:50 -0400
title: 'User Acceptance Testing Versus Usability Testing&amp;#8230;What&amp;#8217;s the Dif?'
summary: 'Editor&amp;#8217;s note\: Building off the great discussion started around&nbsp;Customer Experience,&nbsp;we&rsquo;re looking at the difference between User Acceptance Testing and Usability Testing.&nbsp; If you develop software, you&amp;#8217;ve probably heard of User Acceptance Testing. You may also have heard the term Usability Testing. Same thing, right?&nbsp;Nope. And confusion here can cause big problems. '
authors: [joel-virothaisakun]
categories:
  - Communities
  - Design
  - 'User Testing &amp; Research'
  - UX
tags:
  - AoI
  - usability
  - user experience
---

_Editor&#8217;s note: Building off the great discussion started around [Customer Experience](https://www.WHATEVER/2014/07/07/user-experience-ux-vs-customer-experience-cx-whats-the-dif/), we’re looking at the difference between User Acceptance Testing and Usability Testing._ 

If you develop software, you&#8217;ve probably heard of User Acceptance Testing. You may also have heard the term Usability Testing. Same thing, right? Nope. And confusion here can cause big problems.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-400-Usability-testing-NOAA-and-state-nice.jpg" alt="600-x-400-Usability-testing-NOAA-and-state-nice" %}

Last year I was developing a mobile game for Android—think Whack-A-Mole meets mutant veggies. Eight months into the project we decided to do some **user acceptance testing** to find some bugs before launch. We got several reports of the game crashing from testers, but we looked in the code and couldn&#8217;t find out why.

This is when we decided to do some **usability testing**. After conducting usability testing with a facilitator, note taker, recording equipment, and eight participants we determined that the crash wasn&#8217;t the issue. The spot where players had to drop veggies was dangerously close to the back button. Users kept hitting the back button by accident, causing the program to quit and make it seem as if the game had crashed.

User acceptance testing dealt with _functionality_ and showed us that there was a critical error with the game.

Usability testing dealt with _user behavior_, and showed us what the true error was.

Each are similar but have very different goals. Let’s look closer:

**User Acceptance Testing**

  * Also known as “Beta Testing”, is used to find bugs in a website’s design
  * User acceptance testing is done near the end of the design process. It is generally used for the developers to prove to the client that the project is complete

**Usability Testing**

  * This method is used to test if an application is or will be easy to use for the end user
  * Usability testing is done towards the middle and end of the design process, making incremental changes to the website design when issues are discovered


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-450-UAT-Usability-Testing-graphic.jpg" alt="600-x-450-UAT-Usability-Testing-graphic" %}

It is fairly common for people to use these two names interchangeably, which is understandable because there is overlap between the two methods. However, both methods are different and serve a different purposes.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/542-x-385-Usability-testing-vs-user-acceptance-testing.jpg" alt="542-x-385-Usability-testing-vs-user-acceptance-testing" %}

While we did lose time by not doing usability testing in our implementation phase, the real problem was found in the end.

I can not stress how important it is to test your product as much as possible. There is nothing worse than spending months (or even years) producing a product that no one wants to use.

_**Joël Virothaisakun** is a graduate student in the Interaction Design and Information Architecture program at the University of Baltimore. He is interning with the [DigitalGov User Experience Program](https://www.WHATEVER/resources/digitalgov-user-experience-program/) at GSA this fall, and has published several games._