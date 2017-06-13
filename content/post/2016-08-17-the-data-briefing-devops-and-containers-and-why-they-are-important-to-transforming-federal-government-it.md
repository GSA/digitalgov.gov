---


date: 2016-08-17 1:00:11 -0400
title: 'The Data Briefing\: DevOps and Containers and Why They Are Important to Transforming Federal Government IT'
summary: 'You may have heard about &ldquo;DevOps&rdquo; in the news or when meeting with IT professionals. What exactly is DevOps and what, if any, connection does it have with agile? Also, what do &ldquo;containers&rdquo; have to do with all of this? In this week&rsquo;s column, I will introduce DevOps and a related technology\: containers. Some DevOps'
authors: [bbrantley]
categories:
  - Data
  - Managing Digital
tags:
  - The Data Briefing
---

You may have heard about “DevOps” in the news or when meeting with IT professionals. What exactly is DevOps and what, if any, connection does it have with agile? Also, what do “containers” have to do with all of this? In this week’s column, I will introduce DevOps and a related technology: containers. Some DevOps practitioners will argue with my interpretations, and I invite these practitioners to explain their perspectives in the comments. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-400-Word-DevOps-on-wood-planks-TimArbaev-iStock-Thinkstock-531240484.jpg" alt="Word DevOps on wood planks" %} 

When I explain DevOps, I first point out that the term derives from combining “Development” and “Operations.” In IT shops, development refers to the developers who create new applications while operations refers to the IT professionals who keep the network and servers running. Historically, tension existed between development and operations because the developers would create applications that did not fit well with the current operations infrastructure. Operations would often accuse development of “just tossing applications over the wall” with little testing. Developers usually responded by claiming that applications worked on his or her development system.

IT professionals realized that as software became more vital to organizations (especially after the advent of the commercial Internet), the tension between development and operations had to be resolved. Drawing upon the lessons from lean manufacturing and the agile movement, DevOps practices and principles began to arise in the late-2000s. This is when tools such as “Puppet” and “Chef” became popular. The purpose of these tools is to create a development environment that is an exact copy of the current operations environment. These tools ensure that the application would work in the operations environment as it did in the development environment. Other tools arose that would automatically test the application for errors using techniques such as “test-driven development” and “continuous integration.”

However, DevOps is not just about the tools and is not only limited to developers and operations. At the core of DevOps is a culture of collaboration and communication between all parties involved in the creation and delivery of software applications and services. The balance between culture and technology is where many DevOps practitioners disagree. A [blog post from the Agile Admin](https://theagileadmin.com/what-is-devops/) gives a detailed perspective on the differing opinions about the practice of DevOps.

Virtualization is a key technology to DevOps. Virtualization is the use of software to simulate a computer operating system within a host operating system. For example, I can simulate a Mac computer on my Windows computer using virtualization software. The simulated Mac computer works exactly as if it was a physical Mac computer. The advantage of virtualization is that I can run applications that need a different computer environment (including their operating system and associated libraries).

Containers arose because running more than a few virtual machines makes enormous demands on the host operating system. Each virtual machine has its operating system and program libraries. Therefore, if I needed to run five Mac applications at one time, I would need to have five copies of the Mac operating system and five copies of the program libraries. This duplication can quickly slow the host system to a crawl.

Containers allow applications to be in their self-contained capsules while sharing the one Mac operating system and program library. Containers greatly reduce the load on the host machine while maintaining the integrity of the applications that may need specific program libraries. If you have ever used Google Search, Gmail, or Google Docs, you have been using a container. You can also be certain that Gmail, Google Docs, and most other modern online applications have been developed and deployed using DevOps methods and technologies. Several federal agencies have also adopted DevOps in creating and delivering online and mobile applications for the American public. As the federal government continues to modernize its IT infrastructure, expect to see more use of DevOps and technologies like containers.

_(Google, Google Search, Gmail, and Google Docs are used for illustrative purposes only and do not imply endorsement by the U.S. federal government or any specific federal government agency.)_

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends._

_Dr. William Brantley is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. You can find out more about his personal work in open data, analytics, and related topics at [BillBrantley.com](http://billbrantley.com). All opinions are his own and do not reflect the opinions of the USPTO or GSA._