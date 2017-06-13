---


date: 2016-06-16 2:00:31 -0400
title: 'Modernizing Federal IT Part 5\: Modernizing Software Architecture'
summary: 'This is the fifth&nbsp;in a series describing how the Social Security Administration is working towards a more modern IT infrastructure. You can find part 1 here,&nbsp;part 2 here,&nbsp;part 3 here&nbsp;and part 4 here. In the next three posts we will consider the problem of modernizing old legacy software. In this post we will start a'
authors: [rob-klopp]
categories:
  - Code
  - Managing Digital
  - 'Strategy &amp; Policy'
tags:
  - architecture
  - infrastructure
  - SSA
  - The United States Social Security Administration
---

> _This is the fifth in a series describing how the Social Security Administration is working towards a more modern IT infrastructure. You can find part 1 [here](https://cio.gov/modernizing-federal-it-part-1-catching-up-and-jumping-ahead/), part 2 [here](https://cio.gov/modernizing-federal-it-part-2-the-gravity-of-ip/), part 3 [here](https://cio.gov/modernizing-federal-it-part-3-teasing-apart-the-problem/) and part 4 [here](https://cio.gov/modernizing-federal-it-part-4-building-a-modern-data-foundation/)._

In the next three posts we will consider the problem of modernizing old legacy software. In this post we will start a discussion about why modernizing software is important and what is most important to think about first. In the next post we’ll consider how to go about modernization; and in the last post we will discuss buy vs build. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/06/600-x-403-Mainframes-cluster-with-control-terminal-in-data-center-motion-blur-Vladimir_Timofeev-iStock-Thinkstock-525498928.jpg" alt="Mainframes cluster with control terminal in data center with a motion blur filter." %} 

To state the bottom line up front – the modernization issue is not about COBOL. It is about building software that takes full advantage of the economics of a modern hardware infrastructure. It is about architecture, not about a programming language.

Modern software is architected to run over a stack that can be distributed across a cluster of servers. It is designed so that each _layer_ of the stack and so that every _business application_ can be distributed and deployed and scaled across a cluster of servers.

Legacy software was architected to optimize performance on a single large (mainframe) server. When we designed legacy systems we worked to eliminate every extraneous use of compute resources because compute was expensive. We built monolithic business applications to eliminate as far as possible the overhead of reaching across layers of the stack and across systems boundaries. We built giant programs and linked all of the parts into a single monolithic package and we then deployed all of the components on a single server. When we needed fault tolerance we built a mirror image of the monolith and synced the two images.

Today we deploy applications and the associated stack across many tiers, n-tiers, running on very inexpensive commodity servers. We use compute indiscriminately because it costs almost nothing (and with cloud computing it will truly approach $0, but more on that in a later post). To take advantage of this cloudy distributed platform we architect software in smaller pieces that interplay across a cluster. To provide fault tolerance we build software to survive the failure of a single server in the cluster. The result of this new architecture are applications that use DevOps to heal themselves and (almost) never go down. They (almost) never suffer from a shortage of compute as they dynamically scale across a server cluster or across all of the servers in a cloud. Because applications can tolerate the failure of a server, cyber-security is enhanced. If you suspect that something bad has infected a server, even if it is the vaguest of suspicions, your cyber-defenses can kill the server and let the application recover without affecting service levels to your business. Best of all, the cost of running these magic, self-healing, scalable, distributed applications decreases with time. They ride Moore’s Law in a way that large monolithic applications cannot.

Now back to the issue at hand. To take full advantage of these features and economics we have to architect applications differently. We have to deploy the tiers in our stack across servers and we have to develop business applications comprised of small distributed piece-parts that can run anywhere. This is not as hard as it sounds if we develop applications using modern tools and techniques. In fact, it is not very much harder than building a new monolithic application. You can do it using modern architectures such as those outlined in the twelve factor app manifesto (see [here](http://12factor.net/)) and you can do it using a modern, DevOps-oriented, continuous software development environment.

Over the last year we have developed just such an environment at the SSA and this sets us up to start re-architecting our legacy software. We do not think that going from COBOL and assembler to JAVA or .Net or Ruby on Rails is the whole answer. Going from COBOL to JAVA trades a 40 year old programming language for a 20 year old programming language. There has to be more accomplished and that more is about architecture.

So let me restate this one last time: modernizing legacy software is not about rewriting old applications in a modern language. It is not about converting an old monolithic software architecture in COBOL into a monolithic software architecture in JAVA. It is about getting to a modern distributed software architecture that can take full advantage of a cluster of servers and take full advantage of the very large cluster that is a cloud. It is about giving up the quest for a perfectly compute-efficient application to quest for a more fault-tolerant, scalable, secure inexpensive application.

_This post was originally published on the [CIOC blog](https://cio.gov/cioc-blog/) by Rob Klopp, Chief Information Officer of the Social Security Administration._