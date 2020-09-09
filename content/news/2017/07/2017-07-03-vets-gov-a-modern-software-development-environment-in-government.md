---
slug: vets-gov-a-modern-software-development-environment-in-government
date: 2017-07-03 15:36:05 -0400
title: 'Vets.gov: A Modern Software Development Environment in Government'
summary: When people think of government software, they often think of COBOL and PowerBuilder 5, with manual software deploys every three to six months on a fixed number of machines in a government-run data center. This perception is sometimes justified, but sometimes entirely wrong. Regardless, the perception makes many developers reluctant to work for the government
authors:
  - alex-yale-loehr
  - raquel-romano
topics:
  - code
  - design
  - 'User Testing and Research'
  - cloud
  - code
  - GitHub
  - infrastructure
  - open-source
  - us-department-of-veterans-affairs
  - us-digital-service
  - USDS
  - user-centered-design
  - user-experience
  - VA
---

When people think of government software, they often think of COBOL and PowerBuilder 5, with manual software deploys every three to six months on a fixed number of machines in a government-run data center. This perception is sometimes justified, but sometimes entirely wrong. Regardless, the perception makes many developers reluctant to work for the government because they worry about the frustrations of getting stuck in the bureaucracy instead of being able to iterate rapidly, ship products, and deliver value.

Narratives of software actually getting built in more typical ways inside government are seldom shared, but they are important reminders of the awesome work happening on the ground every day. This is the story of Vets.gov, a website built from the ground up in a (mostly) modern way. Nothing discussed here about the way we build software should shock anyone who builds products for a living (in fact, we even had colleagues tell us this blog would be too boring to publish). The reason we believe it is worth writing, however, is that all this is not what technologists expect to find at the largest civilian bureaucracy the United States government has to offer, the Department of Veterans Affairs (VA).

Vets.gov addresses the problem that the VA has hundreds of websites that a Veteran may need to navigate and access with different usernames and passwords to accomplish critical tasks like <a href="https://medium.com/the-u-s-digital-service/introducing-a-new-digital-application-for-healthcare-at-va-610d8bac4c78" target="_blank" rel="noopener">applying for health care</a>, refilling a prescription, or keeping track of a disability claim. The Vets.gov team is creating a single place for Veterans to discover, apply for, track, and manage their benefits online. We are designing with users every step of the way, collaborating with dedicated civil servants, and building the most heavily used and needed services first. As functionality expands and traffic grows, we aim to deliver the best digital experience possible to those who have served our country.

So, how is Vets.gov built? It all starts with our infrastructure; Vets.gov runs on AWS and was the first product approved at the VA to run in production on any commercial cloud provider. We run Vets.gov in AWS’s GovCloud region, which is an AWS region with additional certifications to satisfy government requirements. It may lack a few of the services found in the more common commercial regions, but it includes everything needed to run a modern AWS infrastructure workflow.

Vets.gov has a continuous testing and deployment pipeline built using Jenkins and GitHub. All pull requests in GitHub trigger Jenkins to run test jobs and report their status to GitHub to permit or block merging into master. Deployments are automated to staging on merges into our master branch and automated daily deploys to production are run by Jenkins. Getting code to production every day means users get bugs fixed faster and developers can see the impact of their work sooner. Our deployments happen without downtime, allowing Vets.gov to successfully service over 99.99% of requests.

All our code is in GitHub and is open source. We have a React/Redux <a href="https://github.com/department-of-veterans-affairs/vets-website" target="_blank" rel="noopener">front end</a> that talks to a <a href="https://github.com/department-of-veterans-affairs/vets-api" target="_blank" rel="noopener">Rails API</a>, which integrates with various backend VA services. This architecture allows our front end to be able to solely communicate with our API in a modern, RESTful manner, while the API handles a plethora of REST, SOAP, and SFTP connections in order to communicate with VA systems. This separation of concerns means we can swap out backend systems as they are updated, without having to modify the front-end logic.

We work in sprint teams consisting of one product manager, one scrum master, four or five developers, and one or two UX people who handle everything from research to interaction design to visual design. Research, content, including UX writing, and DevOps teams work across the sprint teams as well. All our teams work in the same code repositories to maintain consistency both in our practices and in the user experience. We do code reviews on every pull request, and we enforce test coverage constraints on our API (we’re actively working on improving coverage on the front end to begin enforcing this as well).

And that’s what it looks like; <a href="https://medium.com/the-u-s-digital-service/vas-gi-bill-comparison-tool-helps-veterans-research-education-programs-c6053e7f1827" target="_blank" rel="noopener">we talk to Veterans, define what needs to be built, build it, ship it, and iterate</a>. The only remarkable part of it is this is it’s actually happening inside government, where software development has generally fallen far behind the pace of that in the tech sector. We don’t want to make the work we’re doing sound easy, however. This work is hard, with outdated government processes and models attempting to mold us at every bend. Thankfully we have enough senior leader support and autonomy to push through and build things basically the way we would if we were building them anywhere else. This autonomy is our opportunity to show how quickly and well government software can be built and how much it can help Veterans who need, and have earned, their benefits.

In 2015, Marina Martin, the former VA Chief Technology Officer (CTO) and lead for the Digital Service at VA told us,

> &#8220;We are here to demonstrate that it’s possible for the government to repeatedly deliver simple, excellent services for Veterans using today’s technology and best practices. Or to demonstrate, for sure, that it is not.&#8221;

Beyond all odds, we believe we are showing this is actually possible at the VA, and we truly believe that if this is possible at the VA, it’s possible anywhere in the government. There is still so much work to do, however. The best way we know how to do this is to keep shipping products that matter, so we’re going back to work. Want to <a href="https://www.usds.gov/join" target="_blank" rel="noopener">join us</a>?_Alex Yale-Loehr and Raquel Romano are software engineers working with the Digital Service at Veterans Affairs team._

{{< legacy-img src="2017/07/USDS-Digital-Service-at-VA-Veterans-Affairs.png" alt="Logo for the U.S. Digital Service at Veterans Affairs (VA)." >}}

_This post was originally published on the [U.S. Digital Service blog on Medium](https://medium.com/the-u-s-digital-service/vets-gov-a-modern-software-development-environment-in-government-2a0ec8f0623a)._
