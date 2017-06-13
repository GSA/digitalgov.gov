---


date: 2012-11-19 1:14:12 -0400
title: 'Case Study\: How GSA Launched Social Media Registry'
summary: 'In September, the General Services Administration (GSA) launched a registry of all federally-managed social media accounts. We want to explain a little of the history behind the registry and talk about a few things that make it a truly remarkable innovation from GSA. Before I start, I want to emphasize when I say &ldquo;we&rdquo; from'
authors: [gray-brooks, jed-sundwall]
categories:
  - Code
tags:
  - API
  - GSA
  - social media
---

In September, the General Services Administration (GSA) launched a registry of all federally-managed social media accounts. We want to explain a little of the history behind the registry and talk about a few things that make it a truly remarkable innovation from GSA.

Before I start, I want to emphasize when I say “we” from here on, I&#8217;m referring to the entire team at GSA’s Office of Citizen Services and Innovative Technologies (OCSIT) that made this happen.

## The Challenge

The idea for the registry came about over three years ago when we learned that many government agencies were concerned about being spoofed on social media.

Some agencies weren&#8217;t using social media because it wasn&#8217;t clear how they could present their accounts as trustworthy or official. After all, anyone could create a social media account and pose as a government agency. A (thankfully now-defunct) fake Hillary Clinton account has confused thousands of people and more recently @CIANEWS [tricked a few people](http://www.washingtonpost.com/blogs/in-the-loop/post/cia-on-twitter-the-agency-spies-a-fake-account/2012/08/01/gJQAdjWJPX_blog.html). Over time, some simple best practices have emerged for agencies to assert their authenticity on social media, but the concern has lingered nonetheless.

Meanwhile, usage of social media by government agencies has skyrocketed and no one has been able to determine how many official accounts are out there. Early on, it became clear that it would be impossible for any individual or team to keep track of all the government social media accounts, but having an official list was important. It would let agencies assert the authenticity of their social media accounts, and it could also serve as a resource for librarians, journalists, and researchers looking to verify official government social media sources.

So, how to build it?

### The research

We&#8217;ve had a lot of time to research ideas over the past three years. We knew a few things at the outset:

  1. We wanted a way for as many qualified people as possible to add to the list. In other words, it shouldn’t be the burden of just one person or team.
  2. We wanted to add some structure to the list, but not if it would make it too burdensome for people to add things to it.
  3. We wanted it to be easy for anyone to verify if an account is valid by seeing if it’s on the list.
  4. We knew there were a lot of government social media accounts out there, but we didn’t know how to present them in a meaningful way.

The greatest inspiration for points 1 and 2 was Delicious. The core function of this service is to collect and describe a bunch of URLs. Delicious did the same thing and it was great. We liked how Delicious lets you paste in a URL, give it a few tags, and get on with things. Delicious was also smart about looking at the meta title and description of the URLs you add so you wouldn&#8217;t have to.

For point 3, we looked at the w3c’s HTML validator tools. Again, simple: you enter a URL and find out some information about it. We wanted to take the same approach.

For point 4, we were at a loss. [Steve Lunceford](https://twitter.com/dslunceford) had charted this territory really well with GovTwit. Other people at TweetCongress and List.ly were making similar attempts, but it was clear that developing a great user interface for the list wouldn’t be easy.

Also, while we had proven the need for people to verify if one account was real, it wasn&#8217;t obvious that many people would have use for the entire list of thousands of accounts.

Beyond that, it would take a long time to iron out the user interface. Do we just show the whole list on one page? Do we organize it by agency? Tags? Platform (e.g. Facebook, Twitter, etc)?

The solution to this problem was to not build the interface yet, but focus on building a solid series of APIs for people to access the data. The best option was to first build the interfaces for people to register and verify official accounts. APIs would let developers access the full list if they wanted to.

## The Solution

The social media registry has two separate interfaces.

One is hosted on HowTo.gov for people who work for the federal government to [register their accounts](https://www.WHATEVER/services/social-media-registry/). Anyone with a .gov or .mil email address can fill out a form, and receive an email with a link to another form where they can register their official accounts simply by pasting in the URL of the account. For each account they add, they have to include their agency and the language of the account.

The other interface is hosted on USA.gov for the [public to verify](http://www.usa.gov/Contact/verify-social-media.shtml) if a social media account is official or not. It’s dead simple. You paste in the URL of a social media account and it tells you if it’s managed by the government or not.

And, as I explained above, there are APIs for developers to access the entire list if they want. The APIs allow people to filter the list by any combination of social media platform, tag, or agency.

### Fedsourcing

Personally, I think the idea to allow anyone with a .mil or .gov email address to verify accounts is one of the most remarkable things about the registry. Dozens of public servants have already registered hundreds of social media accounts that otherwise would have taken many hours to seek out and gather.

While I’m sure the list of accounts in the registry is not perfectly comprehensive, it’s much more comprehensive that any individual or small team of people could make it.

This approach allows us the benefits of crowdsourcing with the added benefit of knowing that every participant has been vetted and trusted with an official government email address. We call it _fedsourcing_, and I hope to see the method used in other inter-agency information gathering applications.

### Open source

The code behind the registry is open source and available on GitHub. It is our hope that other countries and state governments consider forking the registry code to build their own registries.

Additionally, there are other use cases where official catalogs could be fedsourced. The code for the registry could be adapted for such purposes.

## Results

We built and shipped the registry very quickly. Yes, we had three years to think about it before we got started, but once we got the green light, we had six months to finalize requirements, write user stories, develop, design, perform user testing, develop and design some more, and deploy to GSA’s servers. All while simultaneously working on other projects.

We shipped the registry in April, and we&#8217;ve updated it continually ever since, sometimes pushing code changes within minutes of receiving user feedback. Who says government has to be slow?

With this registry, OCSIT has demonstrated a truly innovative approach to Internet technology seen in few other parts of the government. This open and collaborative approach has solved a real problem, but—perhaps more importantly—will also allow the service to evolve as the social media landscape changes over time.

## Resources

  * [Register your federal government social media account in the Social Media Registry](https://www.WHATEVER/services/social-media-registry/)
  * [Verify a federal social media account on USA.gov](http://www.usa.gov/Contact/verify-social-media.shtml)