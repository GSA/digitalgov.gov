---
date: 2020-10-26 00:08:00 -0500
kicker: Security
title: "True Crime Detectives: How We Used Free Web Metrics Tools To Uncover a
  Cybersecurity Incident"
deck: Join USA.gov as we slowly uncover a conspiracy to scam Americans using
  fake government websites… and then try to foil the caper!
summary: Join USA.gov as we slowly uncover a conspiracy to scam Americans using
  fake government websites… and then try to foil the caper!
# See all topics at https://digital.gov/topics
topics:
  - metrics
  - security
# See all authors at https://digital.gov/authors
authors:
  - david-kaufmann
slug: true-crime-detectives-how-we-used-free-web-metrics-tools-to-uncover-a-cybersecurity-incident
primary_image: kaufmann-fraud-404
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

People who spend a fair amount of time digging through website analytics accounts know the feeling that you are driving [_The Mystery Machine_](https://en.wikipedia.org/wiki/Scooby-Doo) on the way to, hopefully, solving a mystery. It’s not often that we find ourselves uncovering a cybersecurity issue , as well. However, that’s what happened to us at USAGov—three times. 

During our adventure, our ongoing efforts to creatively pursue actionable insights into our website data would be rewarded. For example, the time we spend tracking hits not just on the web pages that we want the public to read, but those we do not. Or, for deriving as much value as we can out of free and inexpensive web analytics products by putting them to work in unpredictable ways.

## It started innocently enough …

One of the best practices for setting up a website analytics account is to have more than one view set up so that you can work with the data going into the accounts in different ways. For example, for the website [www.usa.gov](http://www.usa.gov), we have a view in which filters keep out all of the hits for pages from other websites and we tweak the URLs in ways that make it easier to work with. We also have an unfiltered view in which the data can be examined just as it comes in. You need to have this to troubleshoot problems with your filters and also have the ability to see what’s coming in that would be excluded by your filters. 

While on the hunt to solve a different mystery, I was spending some time in the unfiltered view, something I don’t often do. While looking just at the hostnames (i.e., the main part of the address, like [www.usa.gov](http://www.usa.gov)) sending hits into the account, I saw our test websites listed. I also noticed a website with an address that was just a random string submitting a tiny amount of hits. Going to that web address, I figured out that someone, perhaps a student, seemed to have made a copy of USA.gov. It seemed pretty innocent, but I wondered how often something like this seemed to happen.

## The plot thickens ...

At around this time, I started using a tag manager product to deploy the scripts that allow our web pages to send hit information to our analytics accounts. We use the free version of a popular web analytics account, as well as the more robust [Digital Analytics Program](https://digital.gov/guides/dap/) (DAP) version offered by the U.S. General Services Administration (GSA). For testing things I was doing with the tag manager, I set up an analytics account just for sending hits on test sites. I only wanted the code for this test account to fire on our test websites, so I used rules on our tag manager to make that happen. 

That’s when I decided to add a view to this account for collecting hits from websites that aren’t either our main site or our test and sandbox sites. I used the tag manager to fire our analytics script for this account on pages with a hostname that didn’t match any of our known sites. 

{{< img src="kaufmann-fraud-404" >}}

## A cybersecurity incident...revealed!

A few months later, I took a look at the hostnames coming into the “anything else” view. There was a website called “greengrantfunds.com.” Taking a visit, I could immediately see that the website was pretending to be USA.gov. However, they had changed some of the content to steer visitors towards submitting personal information to be contacted for buying access to fake federal grants. They were running a grants scam, exactly the kind of thing that we warn against in our [consumer information pages on USA.gov](https://www.usa.gov/grants). Based on my analytics account set up for just this type of thing, I could see that the website wasn’t getting visited much, but I knew we had to get it shut down right away. 

Looking at the code for the pages, they had copied our html and made changes from there. However, they had left in the code from our tag manager, which let me see the hits to their site. Our set up had worked!

## Time to crack the case

Marina Fox, my GSA colleague who runs the [DotGov program](https://home.dotgov.gov/), advised me to look up the company who was hosting the scam website and request it be taken down. I used the Internet Corporation for Assigned Names and Numbers (ICANN) [Domain Name Registration Data Lookup tool](https://lookup.icann.org/) to find the host, and I emailed them the take-down request. The host took the website down in just a few minutes. Success! However, I later learned that the correct procedure is to report such an issue to my agency’s IT help desk to engage the Incident Response Team. In addition to letting them track these issues, they have better resources for getting offending websites taken down quickly. 

## Eternal vigilance in the face of cybersecurity hazards 

Two months later, I checked the analytics account again, and there were two more websites operating a similar scam. The two sites, which were identical, were offering grants with information request forms asking for Personally identifiable information (PII) such as social security numbers. They were using USA.gov’s look and HTML code, but they had also added a U.S. Department of Health and Human Services (HHS) logo for good measure. Our agency was able to get the websites taken down quickly. 

Recently it happened a fourth time, and we have had to  take down yet another fraudulent website with a similar modus operandi. These scammers have been trying to use our trusted brand to prey on desperate members of the public during a turbulent time. Luckily, we have been able to foil them with a setup that took just a few minutes to put together using free analytics tools and assistance from our agency’s cybersecurity team. 

**If you’ve made any surprising discoveries or have similar stories from diving into your analytics, [pass it along](mailto:digitalgov@gsa.gov)! If you discover phishing attempts or other improper usage of your agency’s logo or website, let your legal and IT teams know in accordance with your agency processes. Your agency’s Incident Response Team can then assist you with the domain takedown.**
