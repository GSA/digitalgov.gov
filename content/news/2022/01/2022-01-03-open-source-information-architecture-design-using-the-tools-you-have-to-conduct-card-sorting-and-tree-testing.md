---
date: 2022-01-06 15:07:00 -0500
kicker: User Experience
title: "Open-source Information Architecture Design: Using the Tools You Have To
  Conduct Card Sorting and Tree Testing"
deck: ""
summary: Learn how we used GitHub to conduct a card sort and tree testing to
  improve the information architecture for onrr.gov.
# See all topics at https://digital.gov/topics
topics:
  - architecture
  - user-experience
  - open-source
  - user-research
  - prototype
  - onrr
# See all authors at https://digital.gov/authors
authors:
  - shannon-mcharg
  - maroya-faied
slug: open-source-information-architecture-design-using-the-tools-you-have-to-conduct-card-sorting-and-tree-testing
primary_image: 10x-funded-cover
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1
---
Have you ever wanted to conduct a card sort or tree test, but didn’t have the tools? Learn how we conducted a card sort using GitHub and a tree test using a clickable prototype to improve the information architecture for onrr.gov.

## Card sorting

Card sorting is a very useful tool when it comes to organizing websites and finding out how your users view the information space. Unfortunately, a popular tool for this doesn’t have government terms of service, and it’s difficult to get approval to use within a federal agency. We didn’t let that stop us.

We recently took on a [new informational website](https://revenuedata.doi.gov/blog/adding-a-product/) that hadn’t had any user research done on it, and we wanted to understand how users think about the content and how they would organize the information presented, and decided that a card sort was definitely in order. We were hesitant to do a card sort because we had heard about the terms of service issues with the commercial software, so we were excited when one of our interns mentioned an article they had read about how someone used a task management product to conduct a card sort. It got us thinking about how GitHub, which is [FedRAMP-authorized](https://marketplace.fedramp.gov/#!/product/github-enterprise-cloud?sort=productName&productNameSearch=git), has some of the same functionality and we might be able to use it to conduct a card sort.

### Getting started

We started by testing out whether we could add cards to a project and simulate the environment of dragging cards to categories. We were able to do that by using the project boards available in GitHub.

![Image of our test organizing cards into categories using a GitHub project.](https://lh6.googleusercontent.com/r3wG5G_3DflnVA0CG6LD3eAEG98IrUkXlC4pBMUok8CtT6cqrScmuEdQqzkd8Cz1TV7mCYSRUu5PWUco2UbMvZ-MdgqkLahI7Nqtu1DXTN-Iv9s1_i_O8Z-UaTPGFcqu3Z0Be3-S)

Image: Screenshot of our test has cards organized into categories using a GitHub project. There are five columns. From left to right, the Uncategorized column has 19 cards, the About ONRR column has six cards, the Trainings column has five cards, the Pricing column has five cards, and the Rules & Regulations column has eight cards.

The next hurdle to get around was allowing users to log in to GitHub. We initially thought about having each participant create an account but decided against that because it logs who categorized each card and that seemed like a privacy risk. We also would have had to give each participant account access to the repo we set up for the study. To mitigate these issues, we decided to create a single login for all the participants to use.

![Screenshot showing how participants moving the card is logged in the GitHub issue for the card.](https://lh5.googleusercontent.com/6RCeIqvma2gXuBrgG3gksQ5McsU55UunTmXKqacueTmwVFWkN3GIT1ilhGX-yZDiqncO8jqbZGgLiSNc8lFYYAFPXLU74qNAhA5KV7Mc4QchYiPVscYBaRhkTVZhj58eNjzjTMB9)

Image: Screenshot showing how participants moving the card is tracked in the GitHub issue for the card. It shows an open issue in GitHub for the card. The title of the issue is Freedom of Information Act (FOIA).  The updates in the issue show that I have put the card in the Uncategorized category for several participants and that the nrrdparticipant account we use for participants moved the card a couple of times in the GitHub project we used to test the process.

With GitHub’s security features, we couldn’t completely get rid of the two-factor authentication and were required to input a code sent to the email address associated with the account each time a participant logged into GitHub, which prevented us from just sending out the link and having participants complete the study on their own time. As a result, we ended up moderating sessions, which gave us the ability to ask and answer questions and probe into why participants organized the information the way they did—something we haven’t done since the days when we conducted card sorts using index cards. We forgot how valuable it was to get the contextual information from each participant.

### Planning the study

We created 56 cards using the issue function in GitHub. We picked the cards based on analytics that show how often content was used over the last fiscal year, search terms that indicate content users have a difficult time finding, and balancing to make sure the cards were a good representation of the content we have on the site. We recruited participants from people who we know use the site with a mix of participants from industry and internal users from our agency. You can [read our study plan](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/03_card_sort/plan.md) for more details.

### Conducting the study

We created a new GitHub project for each participant. They started out with a list of cards in an “Uncategorized” category, and we [explained](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/03_card_sort/plan.md) how to add new columns for each category the participant wanted to create.

![Screenshot showing the default view participants saw in GitHub with a list of uncategorized cards and the ability to add a new column.](https://lh5.googleusercontent.com/-YzrFAPxBkSFvoKoVtp-e33Aqwa0B44OaqmPxiOp391XglUz_Sz-Oopupp6xTWxdMcPOD0xaom_trPfaNTtMqE_0cePoMzMdTQvKd66ydgQCYKuAmgXvLs2ne9sGpzQkexqKeeP5)

Image: Screenshot showing the default view participants saw in GitHub with a list of 54 uncategorized cards and the ability to add a new column.

We figured out in the process of interacting with participants that we could allow them to add subcategories and new cards, and put cards in multiple places using the Add Note function to create cards on the fly.

![Screenshot showing the note function in GitHub.](https://lh3.googleusercontent.com/37ib15HV_PHtgMfjFePfWFHh3NM51h_lwWo0MXfGFiVan4kvkpHYa7C9AYhIn_HBwfbMGHjoZIpNn2GeE3c2KWL9N0vUW5xRoRa4nG-0_05DKLWdTQu9rwbxEycfM8wrgEE3MRul)

Image: Screenshot showing the note function in GitHubThe top of the note shows that it’s in the “Uncategorized” column. Below is a text entry box and two buttons; on the left is a green button with the word Add in white text, and on the right is a light gray button with the word Cancel in black text. This note entry box appears above the next issue in the column, Freedom of Information Act (FOIA).

The image below shows how participants used the note function to add new cards. “References” is a card the participant thought was missing and “54” is to indicate that the card numbered 54 should go in this category in addition to the other category it was placed in.

![Screenshot of cards added using the note function.](https://lh4.googleusercontent.com/k_K65jgdb8AYYVHorCglqi0k9Aku-AaA4jYbURmqKEESHRRBO_tYH7ohHmkePEy_F-kP5VM7NXpQI429ROx81RcenjIS--AlQnAIEU_ct1Mvh3jJSzk3NlUym547SU7l8T2xmPnb)

Image: Screenshot of cards added using the note function.

As participants sorted, we had them think out loud and explain how they were organizing the content and ask questions if they didn’t understand what a card was. We also had them tell us if cards were missing for things they use the site for and would like to add to a category. We also instructed them to leave any cards that they don’t understand in the Uncategorized category.

### Analysis

One thing that was missing that is now in commercial card sorting software is analysis. We went back to this trusty old [Boxes and Arrows column](https://boxesandarrows.com/analyzing-card-sort-results-with-a-spreadsheet-template/) and created a modified version of their analysis spreadsheet to meet our analysis needs. You can download our [modified spreadsheet template (xls)](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/03_card_sort/Card_Sort_Findings_Template.xlsx?raw=true).

We analyzed the findings by looking at the raw organization, normalizing the categories so that like things got counted as the same (e.g., About Us and About ONRR are the same), and then looking at how often participants agreed. We also looked at the results for each user type (industry and internal ONRR people) separately to understand differences between how the two audiences think. You can read our full [findings report (ppt)](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/03_card_sort/CardSortFindings.pptx?raw=true). Our next step is to do a closed card sort to make sure the organization scheme we go with works.

### Lessons learned

We only allocated 30 minutes per session for our participants, and we quickly learned that we should’ve given the participants more time. It took close to 10-15 minutes for participants to log on and share their screen before they actually started sorting cards. A few participants were overwhelmed with all the card options and asked to finish the card sort on their own time. We may also reduce the number of cards for the closed sort.

We had 11 participants across two audiences, and it would have been helpful to have more participants. Although our analysis revealed overlapping patterns for most of the cards to help us determine an organization scheme, there were some card items where there was not a strong pattern for us to determine where those items best belonged.

There were also some cards that users did not know where to place due to the labeling or title not being clear. We should have better labeled those cards to avoid time lost for the user trying to make sense of its title and make it fit into a category. We will update the card labels to better match users’ expectations in the closed sort.

As we mentioned, we initially did not intend to moderate the card sorting session, but it turned out to be a valuable opportunity to help us gain insight into users’ rationale for their grouping decisions. It also gave us the chance to ask questions and further understand the users’ thought processes about the content. We were also able to discover user needs from the tool, such as using the note feature to add new cards, place cards in more than one place, and create subcategories.

Overall, GitHub worked well to help us learn what we wanted to learn, and we will continue to use it in the future.

## Tree Testing

After we completed both open and closed card sorting to determine the categories and subcategories that users expect to see on the website, we wanted to further confirm that we were placing the subcategories into the correct main categories and that users would be able to find the needed information, so we turned to tree testing. Tree testing was a new type of user research to our program analysts so we read a few [articles](https://www.optimalworkshop.com/learn/101s/tree-testing/) to get up to speed.

### Getting started

Our first step in the process was to figure out how to use our existing or free software to conduct the tree testing. After some investigation, our UX expert determined that a [clickable prototype](https://wkvlqa.axshare.com/) would serve our needs. We used the software that she already uses for prototyping so she could quickly create the testing materials. You could use any software that allows clickable interfaces to do the same thing.

### Planning the study

In [planning the study](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/06_tree_test/plan.md), our goals were to validate the structure that came out of tree testing, determine whether users could find items that were hard to categorize in the card sort, and determine if we needed to change any category labels. We wanted to have common tasks that would direct users to each main category so we could really get a feel for how users search for information on our site. We limited the list to 10 tasks, since users learn the categories quickly in tree testing. We dug into past research to help us determine the user tasks and had our teammates peer review to make sure that our tasks were realistic and encompassed common user needs. Our UX expert also created 3 different versions of the prototype with the tasks randomly organized in different orders to remove some bias in the task order.

View [version 1 of the clickable prototype](https://wkvlqa.axshare.com/version_1.html).

We also decided to show a [wireframe](https://wkvlqa.axshare.com/#g=1&p=homepage) of the homepage using the categories after the tree test tasks, so users could see where we were headed with the site using the categories and get some feedback on the categories in context.

While we were planning the study, we also recruited as many external (capped at 9) and industry users as possible to survey a wide user audience.

### Conducting the study

We scheduled 30-minute moderated virtual interview sessions with all 11 participants – 4 external and 7 internal. We had one moderator and tried to have two notetakers since this was a new way of doing user research for our team. After the initial explanation we had them work through all tasks and talk through their category decisions.

We initially tried to record their responses right in a [spreadsheet](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/06_tree_test/TreeTest_Notes_Sample.xlsx?raw=true) to make it easier to analyze our findings, but in the first interview we found that it was too difficult to work quickly within the spreadsheet and we decided to use a [document to take our notes](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/06_tree_test/NotesTemplate.docx?raw=true) instead. Despite it being our first time conducting tree testing using this process, we were able to easily communicate the instructions to the participants.

### Analysis

After [summarizing the findings](https://github.com/ONRR/research/blob/master/onnr-dot-gov-research/06_tree_test/Tree%20Test%20Findings.pptx?raw=true), we used [Sankey diagrams](https://en.wikipedia.org/wiki/Sankey_diagram) to show how users navigated from the task to the subcategory. The visualization helped to illustrate which tasks were straightforward and which ones were confusing. We had several tasks that made us feel confident that we had the right structure in place, including leading participants to report production, find contacts, file appeals, and make rent payments. The diagram below illustrates how all participants agreed on where to report production.

![Sankey diagram of user task 3](https://lh6.googleusercontent.com/mef5x6IAy-U2ExxmaxOseLfl3-k20vtGwzFXpRzvAUDtOFpnTgEywmGcgDNMJAU0MetlKbW5JRFMX_sNKwRfDROGXSg8nV52fFUySQ82YIrg0wkVwS0a1krpyb_yF2_7pBAXv4Yp)

Image: Diagram showing results for “Task 3: You need to report production.” It shows that all 11 participants clicked on Reporting (on the left with a dark blue bar) and then on Production (on the right with a lighter blue bar) with a medium blue fill in between. Includes an analysis note that says nobody had trouble finding the correct location for this task.

Then we had several tasks where participant responses diverged significantly. These tasks included how to set up a new team member, how to find information on the site, and how to find help with ONRR reporting and paying systems. The diagram below shows that participants were divided on whether to go to the Getting Started category or Reporting Resources main categories to add a new team member as a contact. The responses further diverged within the subcategories as some participants were looking for a specific form and some thought it would be in Getting Started. Our solution to this and similar issues will be to include the needed resource in more than one category.

![Sankey diagram of user task 7](https://lh6.googleusercontent.com/zvo2FZ3c14beWLWU7VquXYKEaajP7jGFVRPMJGxbKnDN9kZKWGqGUScPwIJkOpbp_-QbwdAz4uCp1I9MRN0mU9pWLlH2gA-dPf8RVKreeUp6zQUp68ZcZqtptJ3doZ4_aBBtNL3D)

Image: Diagram showing results for Task 7: You have a new person on your team and need to fill out the form for them to be an official contact (Addressee of Record Designation for Service of Official Correspondence Form – ONRR-4444). It shows that all six participants started by clicking Getting Started (on the left with a dark blue bar), one participant started by clicking Reporting (on the left with a medium orange bar), and four participants started by clicking Reporting Resources (on the left also with a medium orange bar). Of the six participants who started with Getting Started (represented by medium blue fills between Getting Started on the left and their destination on the right), one selected Getting Started Home (on the right with a dark blue bar), 1 selected New Reporter Checklists (on the right with a light blue bar), and four selected System Access (on the right with a dark orange bar). The one participant who started with Reporting (represented by light orange fill) selected Production (on the right with a dark green bar). Of the four participants who selected Reporting Resources (represented with light orange fills between Reporting Resources on the left and their destination on the right), one selected Reference Lists & Codes (on the right with a light green bar), one selected Reporting Contacts (on the right with a medium orange bar), and two selected Forms (on the right with a red bar). Includes an analysis note that says some participants associated this with getting started and some with forms and that it should be included in both places.

We also made some major changes to the categories. We found that participants had to think about where to look for the valuation regulation task and thought that valuation should be a separate category, so we added one for that. Participants unfamiliar with Indian reporting would navigate to the Indian Resources category for anything Indian related so we will cross post Indian pricing, regulations, and codes to the Indian Resources category. Participants were also divided on whether to look for similar information in the Reporting or Reporting Resources category. We determined that it would be better to use only the Reporting category and add the Reporting Resources as sub-categories to each reporting section.

Overall, participants wanted more information about how the entire reporting and paying process works, especially those that are newer to their positions or need information on how to report and pay on more complex leases and agreements. People from within our agency who field contacts from industry also expressed this need, so we will be creating a visual showing the process.

To better illustrate the changes to the main and subcategories that we are proposing, the first table below shows the original tested categories and the second table shows the new proposed categories.

**Tested categories:**

1. **Getting Started**
   a) New Reporter Checklist
   b) System Access
2. **Reporting**
   a) Production
   b) Royalty
   c) Solid Minerals
   d) Geothermal
3. **Reporting Resources**
   a) Reference Lists & Codes
   b) Reporting Contacts
   c) Handbooks
   d) Forms
   e) Pricing
   f) Unbundling
   g) Reporter Letters
   h) Regulations
   i) Training Videos
4. **Paying**
   a)  Rental Payments
   b) Royalty Payments
   c) Late Payment Interest
   d) Treasury Referrals
5. **Enforcement & Appeals**
   a) Compliance Authorities
   b) Appeals
   c) Bankruptcies
   d) Civil Penalties
6. **Indian Resources**
   a) Cooperative Agreements
   b) Allottee Assistance
   c) Federal Indian Minerals Office
   d) Indian Energy Service Center
   e) Tribal Assistance
   f) Tribal Consultation
7. **About ONRR**
   a) Press Releases
   a) Leadership
   a) Office Locations
   a) Employment
   a) Committees
   a) Testimony
   a) Freedom of Information Act (FOIA)
   a) Anti-Harassment Program
   a) Contact Us

**Categories after testing:**

1. **Getting Started**
   a) How Leasing Works
   b) New Reporter Checklist
   c) System Access
   d) Reporter Training
3. **Reporting**
   a) Oil & Gas Production
      i. File Reports
      ii. Forms
      ii. References
      iv. Reporter Setup
      v. Contacts
   a) Oil & Gas Revenue
      i. File Reports
      ii. Forms
      iii. References
      iv. Reporter Setup
      v. Contacts
   a) Solid Minerals
      i. File Reports
      ii. Forms
      ii. References
      iv. Reporter Setup
      v. Contacts
   a) Geothermal
      i. File Reports
      ii. Forms
      iii. References
      iv. Reporter Setup
      v. Contacts
5. **Guidance & References**
   a) Valuation & Pricing
   b) Reference Lists & Codes
   c) Reporter Training
   d) Handbooks
   e) Forms
   f) Reporter Letters
   g) Rules & Regulations
7. **Paying**
   a) Payment Options
   b) Jointly-Owned Lease Payments
   c) Late Payment Interest
   d) Unpaid Debt
   e) Contacts
9. **Enforcement & Appeals**
   a) Compliance Authorities
   b) Appeals
   c) Bankruptcies
   d) Civil Penalties
   e) Cooperative Agreements
11. **Indian Resources**
   a) Assistance
   b) Cooperative Agreements
   c) Indian Guidance & References
   d) Indian Payments
13. **About ONRR**
   a) Public Affairs
   b) Organization & Leadership
   c) Office Locations
   d) Employment
   e) Committees
   f) Testimony
   g) Freedom of Information Act (FOIA)
   h) Anti-Harassment Program
   i) Contact Us

### Lessons learned

The tree test was a valuable way to dig into our site reorganization and test our hypotheses and assumptions. We tried again to take notes in a spreadsheet rather than a document and it didn’t work out very well. We tried this about a year ago for user interviews with the same result, so we should avoid doing that in the future to save ourselves from having to duplicate the notes we take. We also found it was helpful to have more than one person observe and take notes because participants moved through the tasks very quickly and it was sometimes hard to record their responses. The moderator learned to ask questions and slow them down to give the note takers more time.

We also learned how quickly participants move through a tree study and learn the categories. None of us had ever observed one live because we had always used remote tools before and it really underscored the importance of having few tasks and randomizing the order. Some of our sessions only lasted 15 minutes even after troubleshooting technical issues getting started.

We also learned how to simplify some of our main categories in our site organization and to reorganize some of the sections where we needed more feedback.

Our next step is to use the content audit to place everything into the new categories, and refine the current subcategories to match the website content. We are also wireframing at the same time to make sure that we have content where we want it and a home for every piece of content. Finally, we will run another round of user interviews after we finish refining the subcategories to confirm that we’ve properly organized the content.



*You can also [view the slides (PPT, 24.1 MB, 60 pages)](https://digital.gov/files/open-source-information-architecture-rev.pptx) from our presentation at the [2021 User Experience Summit](https://digital.gov/event/2021/06/22/2021-user-experience-summit/), which was hosted by the [UX Community of Practice](https://digital.gov/communities/user-experience/) and Digital.gov.*