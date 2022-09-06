---
# View this page at https://digital.gov/2020/04/24/experimenting-with-micropurchase-threshold
# Learn how to edit our pages at https://workflow.digital.gov
slug: experimenting-with-micropurchase-threshold
date: 2020-04-24 09:30:00 -0500
kicker: "Acquisition"
title: "Experimenting with the Micro-Purchase Threshold"
deck: "Utilizing the increased threshold, and what we learned."
summary: "Through the use of an open-source procurement process, we created an experiment others can replicate to encourage Agile thinking."

# see all topics at https://digital.gov/topics
topics: 
  - agile
  - open-source
  - project-management
  - acquisition
  - best-practices

# see all authors at https://digital.gov/authors
authors: 
  - alan-atlas
  - bridget-fields
  - mark-hopson
  - michelle-mcnellis
  - omid-ghaffari-tabrizi

# primary Image (for social media)
primary_image: "experimenting-with-micro-purchase-threshold"

# Make it better ♥

---

Early in September 2019, the [Centers of Excellence](https://coe.gsa.gov/) (CoE) was tasked by internal leadership with a high-profile project: getting a demonstration website developed for the Innovation Lab on an internal website. 

The purpose of the Innovation Lab is to digitally display prototypes and other valuable deliverables that CoE teams have developed and from which other agencies can get inspiration, or adopt and use on their own. The deadline for this project was “as soon as possible” -- a common deadline both in and out of government. Additionally, the website was going to be public, so getting it completed was an important task.

To summarize, the main characteristics of this project were:

- Tight timeframe
- Public deliverables
- Small budget

## Putting the Backlog in Order

One step to successfully satisfying a project’s objectives is to identify the absolute minimum that must be done to achieve success. In other words, we must answer the question, “What is the central value to be delivered through this project?” 

Working with our technical teams, the CoE acquisition team has an established process that allows for rapidly determining the best option that will provide stakeholders with what they want, while ensuring technical teams get what they need. Acquisition teams provide the key to success by bridging the gap between the theoretical and the possible. 

As a first step, the project team created an initial product backlog and then reached out to the acquisition team. 

The project and acquisition teams reviewed the product backlog and agreed to prioritization. They then identified a reasonable set of stories to be required for release. (Stay tuned to find out what interesting learning came from this part of the exercise.) 

If we were in a position to complete the entirety of our product backlog, we would achieve our most complete delivery. In other words, if we were able to deliver all of the possible features we had identified while having an acquisition strategy that met budgetary and timing constraints, we’d have our perfect solution in hand. Even in this situation where we had to try to merge multiple teams into a single product delivery team, we stayed focused on the Agile tenet of “delivering the value our users seek as soon and as often as possible”. 

The reality for any team, whether in the government or in the private sector, is that you rarely get to implement the perfect solution. The Agile product backlog provides a useful and flexible mechanism to identify the perfect solution while allowing the possibility of delivering a much more compact acceptable solution. 

## When All Else Fails, Just Be Agile 

We knew right away that none of the standard or traditional contracting funding mechanisms would support our requirements. 

Luckily, our team had in its possession the most powerful product management tool available, which is a prioritized product backlog. After our fruitless search for a way to meet our three constraining requirements of time, budget, and scope, we were ready to try something unorthodox. 

We realized that by limiting our scope to just one user story (the first, highest priority story), we would have a starting point that would be “usable” from the most basic user’s standpoint and would deliver the core value of the project, which was to make prototypes available for public view on the web.  

The first user story on the backlog was: 

> [As a user, I want to be able to access a URL that will display an innovation project prototype.
](https://github.com/GSA/CoE-MPP/issues/1) 

Completion of this user story meant we’d have a website that would be accessible to the public. This ignored a long list of other stories that included login protection for selected prototypes, a self-service portal for project teams to submit their prototype for display, and other things. 

Working with our technical team, we felt that this user story could be completed for less than $10,000.00. From the timing perspective, we’d be able to complete the work in a matter of days, which was the fastest possible timeline to delivery of all our options.

{{< img src="experimenting-with-micro-purchase-threshold" >}}

## Why We Chose to Use the Micro-Purchase Threshold

It was the combination of lack of time and lack of funding constraints that led us to try our experiment. Once we had our “one story” strategy to work with, the funding puzzle was solved. Our preferred method of funding would be through micro purchases, which have the desirable characteristic of being the lowest overhead of all contract award and funding mechanisms. 

Extending the reasoning to the rest of the project, our grand experiment would be to build our solution a story at a time, in priority order, from our backlog, funding each story via micro purchase.

Probably the biggest unknown of the experiment was (and still is as of this writing) whether we could plan to transfer the project from one contractor to another as each story was completed and the next story was competed, possibly to be won by a new contractor. Competition is a key acquisition consideration so it is not an option to just designate one contractor to be the recipient of multiple, serial micro-purchase threshold procurements. We knew that we would have source code that could be transferable to subsequent development teams after the initial contractor team finished, but would we be able to transfer the intangibles required with a project transition? More on that later!

## How We Approached Our Problem

The procurement process we utilized was built on the efforts of our colleagues in the federal government within GSA, the Veterans Administration (VA), as well as the United States Digital Service (USDS). At the GSA, teams from 18F, including those at login.gov and cloud.gov, provided the initial foundation of work. At the VA, an example of what others outside GSA had performed was found, and serving as the bulk of the model itself. From USDS, VA and GSA received inspiration. The way we utilized the micro-purchase threshold (MPT) is truly a result of shared best practices across the federal government as a whole.

The actual process required to operate the procurement is documented in [its own repository](https://github.com/GSA/coe-mpt-process), and [the templates for running this type of process](https://github.com/GSA/coe-mpt-template) are available in a separate repository. 

A procurement run in this fashion allows the government to obtain one or more user stories under a single micro-purchase transaction, provided the stories are carefully sized so that the total transaction comes in under $10,000 (the purchase card threshold). When these conditions are met—including all acquisition overhead and development work—the entire story can be competed, awarded, and delivered within a matter of weeks.

This is achieved by using a standardized format for procurement documentation as well as a simple, standardized process. The more standardized documentation and processes are, the faster and more consistently they can be completed.

This consistency in documentation and process also allows our industry partners to know exactly what to expect in terms of boilerplate as well as unique sections or clauses. Additionally, our project teams know exactly what they’ll be getting and what they’re committing to in terms of timing. Finally, our acquisition teams know exactly what they’ll have to optimize and execute upon to maintain the lowest possible overhead without compromising technical quality.

## The Award

We identified the need on August 29, 2019. We decided to use the MPT on September 9, 2019. The solicitation that was generated using our standardized procurement package was finalized on September 13, 2019.

Once finalized and once all internal approvals were received, the team issued the user story as a solicitation on the CoE’s public MPT repository on September 19, 2019. The solicitation closed on October 1, 2019. As this was our first time using the MPT in this fashion, our decision on who to award this need took until October 3, 2019. This was because we wanted to make sure we had all our documentation in order and as perfect as possible. After all, we want to have good data and serve as a model for a future ideal option.

Three contractors submitted responses, one of which was a major multi-national corporation that just about anyone would know and the other two were small businesses. One of the small businesses was relatively new to government, which was exciting for us to see as we were hoping this would be the type of requirement that would attract such a business.

The other small business, and eventual awardee, was a contractor that had previously been awarded an agreement on our Discovery BPA and is also a well-known entity in the digital transformation space. While they were the lowest priced by a relatively significant magnitude, they also provided the best response from a technical perspective. So even if the price wasn’t being considered, this contractor knew exactly what we wanted and how we wanted it to be delivered.

## What We Got in the End

The solicitation began on September 9, 2019. The website was delivered fully functional as described in the user story on October 15, 2019. From writing the solicitation to delivery, the entire story took 36 days. It’s worth noting that by the time development started, we could have already begun writing the solicitation for the next story. In this case, it turned out that the simplest, one-story solution removed the pressure to rush ahead so we have not yet begun on the second story.

Upon completion of our work, the Innovation Lab’s website was created on a specific and internal URL, using a template on [Federalist](https://federalist.18f.gov/). Three prototypes (not just the one we thought we would get within the budget we had) linked to and displayed on that URL.

The industry partner we worked with also provided incredibly valuable feedback as it relates to the manner in which we utilized the MPT. This feedback touched on how we drafted [the solicitation itself](https://github.com/GSA/CoE-MPT/issues/1), how we communicated with them throughout the sprint, and how we handled the delivery in the end.

Considering the fact we learned so much about how to utilize this newly developed option going forward, the experience was an absolute success from our perspective and we can’t wait to see how we not only improve upon buys similar to this first one, but how we end up integrating this tool into other types of buys going forward.

## The Big Unknown

We have demonstrated the practicality of the fundamental idea of using the MPT along with a Scrum product backlog composed of independent user stories to achieve one step in an ongoing iterative development process.

It’s worth pointing out that the Agile product backlog showed its power and simplicity in this case quite well. Remember we promised to tell you the interesting learning we got from the product backlog? Here it is: It’s slightly amusing that after all of the work we did on the product backlog, the answer was sitting there all the time, right on top. Our “reasonable set of stories to deliver” was simply the first story. That’s kind of amusing, right? The fact that it was there at all shows that in some sense our product backlog was “correct.” Further, it is instructive to note that the pressure to deliver quickly has been significantly reduced by delivering quickly on a fraction of what was originally perceived as a non-negotiable set of requirements, all of which needed to be completed to achieve success. But there is reason to be concerned about the rest of the project and the reason comes once again from Agile.

While we have followed a number of Agile principles up to now, the biggest departure from Agile techniques in this project is that we have ignored, or even eliminated, the stable, persistent, cross-functional, self-organizing Scrum team from the picture. What we don’t know is what will happen when a different contractor team takes up the second user story, and a third contractor team takes up the third story, and so forth. How much knowledge that is not included directly in the source code itself might be required by future teams? What about DevOps considerations? What will be the overhead required to onboard each new contractor, keeping in mind that onboarding could easily occur on a monthly basis? These are the unknowns that we will need to explore as the project proceeds.
