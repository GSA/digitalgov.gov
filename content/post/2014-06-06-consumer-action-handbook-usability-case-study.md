---


date: 2014-06-06 10:00:32 -0400
title: 'Consumer Action Handbook &amp;#8211; Usability Case Study'
summary: 'The&nbsp;annual Consumer Action Handbook, from GSA, is a guide to making smarter decisions with your money. In both its print and online formats, it includes a compilation of buying tips from across government agencies, updates on the latest scams, and a robust consumer contact directory. But the most popular part of the book is the'
authors: [tlowden, marietta-jelks]
categories:
  - Design
  - 'User Testing &amp; Research'
  - UX
tags:
  - DigitalGov User Experience Program
  - usability case study
  - usability testing
  - user experience
---

The annual Consumer Action Handbook, from GSA, is a guide to making smarter decisions with your money. In both its print and [online](http://www.google.com/url?q=http%3A%2F%2Fwww.usa.gov%2Ftopics%2Fconsumer%2Fconsumer-action-handbook-online.shtml&sa=D&sntz=1&usg=AFQjCNE1ZeNPLvgmPJLm_pcswvu0_ofBig) formats, it includes a compilation of buying tips from across government agencies, updates on the latest scams, and a robust consumer contact directory. But the most popular part of the book is the sample consumer complaint letter.

The letter template is printed in every edition of the Handbook. This year, the Consumer Action Handbook team wanted to make the letter more interactive. The goal was to help frustrated consumers who had a problem with a product or service. The team formed the idea for a complaint letter wizard  for consumers to answer a few questions and end up with a downloadable letter they could edit and mail to the company. To make the process faster, the team hoped to auto-populate the company contact information from a database.

So began the creation of the [Consumer Complaint Wizard](http://www.google.com/url?q=http%3A%2F%2Fwww.usa.gov%2Ftopics%2Fconsumer%2Fcomplaint%2Fcomplaint-letter-wizard.shtml&sa=D&sntz=1&usg=AFQjCNE1DoDM-YWX_odFdsDH8WXsYmW-zw).

The team—composed of developers, designers, accessibility experts, a project manager, and a consumer professional—started exploring the possibility of creating different versions of the Wizard, which would correlate to the type of complaint; be it for a product, a service, rental or lease. The technical team created a mock-up, but after much discussion, they realized the process of transferring the logic of the letter to the Wizard was more complex than originally thought. So, the team took a step back and thought about process of writing a complaint letter, eventually creating a decision tree.

For each of the steps below, visitors would add certain pieces of information, like the date they purchased the product, or a manufacturing number.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/600-x-395-Steps-done-on-the-website.jpg" alt="Steps 1 through 5 done on the website" %}


From there, wireframes of the pages were created and the Wizard was broken into 5 steps:

  1. Explanation of the product or service
  2. Mailing address of the company
  3. Description of the problem
  4. Choosing a resolution and
  5. A preview of the letter

The Complaint Wizard also features “help” text and examples associated with a light bulb icon, so that visitors have more knowledge of what is intended to be input (shown below).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/600-x-200-Step-1-Information-about-product-or-service-2-annotated.jpg" alt="Annotated screen capture of Step 1" %}

After five months of refinement, the Wizard was tested internally. The results included valuable feedback, both positive and negative. For instance, several people noted that the purchase date for a product shouldn’t be able to be dated for a future time, since a complaint letter would only be necessary for something purchased in the past. To solve this problem, the team created error messages with the date selectors to prevent invalid dates (see below).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/600-x-385-when-did-the-transaction-happen-3-annotated.jpg" alt="Annotated screen capture date options" %}

Another fix was to add a category, “Getting a replacement”, as an option consumers could request for their problems. A general theme in the feedback was that people didn’t understand how to use the navigation tools (e.g.”back” and “next” buttons, “Step 2, Step 3” etc.) of the Wizard. To clarify, the team added a “quick tips” box on the left side of the screen to remind users how to use them (shown below).

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/600-x-305-Consumer-Complaint-Letter-Wizard-5-annotated.jpg" alt="Annotated screen capture of Consumer Complaint Letter Wizard" %}


Take a look at the [Consumer Complaint Letter Wizard](http://www.google.com/url?q=http%3A%2F%2Fwww.usa.gov%2Ftopics%2Fconsumer%2Fcomplaint%2Fcomplaint-letter-wizard.shtml&sa=D&sntz=1&usg=AFQjCNE1DoDM-YWX_odFdsDH8WXsYmW-zw) yourself to get a better idea of the process and experience the new, more usable online tool!

_Marietta Jelks is the Editor-in-Chief of the [Consumer Action Handbook](http://www.google.com/url?q=http%3A%2F%2Fwww.usa.gov%2Ftopics%2Fconsumer%2Fconsumer-action-handbook-online.shtml&sa=D&sntz=1&usg=AFQjCNE1ZeNPLvgmPJLm_pcswvu0_ofBig) and consumer topics content manager on USA.gov. For more information on usability testing, visit the [DigitalGov User Experience Program](http://www.google.com/url?q=http%3A%2F%2Fwww.WHATEVER%2Fresources%2Fdigitalgov-user-experience-program%2F&sa=D&sntz=1&usg=AFQjCNGNi46xqPfRqRfFLwkIBFybj_ngAQ) page or [join the DigitalGov User Experience Community of Practice.](https://www.WHATEVER/communities/federal-user-experience-community-of-practice/)_