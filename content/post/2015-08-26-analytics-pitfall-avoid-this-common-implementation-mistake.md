---


date: 2015-08-26 11:10:05 -0400
title: 'Analytics Pitfall\: Avoid this Common Implementation Mistake'
summary: 'In large agencies, lots of Web teams touch digital analytics in one way or another, and we have had the pleasure of working with teams both within and outside our agency. For us, hearing from a diverse set of perspectives has been a great learning experience. However, over the course of many meetings, we have'
authors: [hhs-digital-analytics-team]
categories:
  - Metrics
tags:
  - analytics
  - data
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-389-MobyGames-39699\_Pitfall-by-David-Crane\_Atari-2600-screenshot-swinging-over-some-alligators.jpg" alt="Video game character, Pitfall Harry, leaps over alligators in the 1982 Atari game, Pitfall!, created by David Crane, distributed by Activision, Inc." %} 

In large agencies, lots of Web teams touch digital analytics in one way or another, and we have had the pleasure of working with teams both within and outside our agency. For us, hearing from a diverse set of perspectives has been a great learning experience.

However, over the course of many meetings, we have also come to notice one critical misconception that has found firm footing in the federal digital analytics space: the belief that you do not need to track visits (or sessions) across subdomains. Unfortunately, this one mistake can wreak havoc on your data quality by severely skewing your Web traffic metrics.

## What Do We Mean by “Subdomain Tracking?”

A large portion of all Web traffic metrics are defined within the scope of the visit, which has a beginning (entrance) and an end (exit). If a website happens to include subdomains, you need to choose how visits to those subdomains are processed by your Web traffic analysis software. If you do not implement cross-subdomain tracking, visits will break—creating additional artificial visits and many other problems—anytime a user navigates to or from a subdomain.

Take this example: If the subdomain for your search results pages is search.example.gov, visits will break anytime a user performs a search from www.example.gov or example.gov. Envision similar scenarios for all the subdomains on your site, and you will start to understand the magnitude of this problem. Luckily, by implementing subdomain tracking, you can ensure that visits do not end until the user exits your website, regardless of how many subdomains they cross-navigate.

## How, Exactly, Are Traffic Metrics Affected? 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-400-Web-analytics-data-on-computer-monitor-Bigandt_Photography-iStock-Thinkstock-473443138.jpg" alt="Web analytics data on computer monitor" %} 

When visits break across subdomains, it affects nearly all of your traffic data. In fact, all visit-level metrics become skewed in one way or another. Here are some examples from Google’s Universal Analytics (UA), which is the latest incarnation of Google Analytics and the software we happen to use at our agency:

  * **Visit (Session) Inflation**: Artificial visit counts are created every time a visitor navigates to a new subdomain or back to the primary domain. The more subdomains you have, the higher the potential inflation.
  * **Skewed Bounce Rate**: If a visit breaks after one pageview, such as when a visitor performs a search from your homepage and lands on search.example.gov, a false [bounce](https://support.google.com/analytics/answer/1009409?hl=en) is created. The more this scenario occurs, the more skewed your bounce rate becomes.
  * **Skewed Time on Site**: As a single visit gets broken into two or three, due to the visitor navigating to different subdomains, time on site gets broken into as many pieces. Every broken visit carries with it a false time on site metric, which gets included in the aggregate calculation.
  * **Loss of Acquisition Data**: You will completely lose acquisition data for broken visits, receiving instead a large number of self-referrals or false direct traffic. Worse, the true sources of your traffic can never be re-associated with the broken visits. With traffic sources being so important to audience identification, persona creation, and SEO, this fact alone should inspire you to address the issue.
  * **Broken Goals**: In addition to losing traffic sources, you will not be able to setup goals that span across multiple subdomains. If your goals are confined to a single domain, you still risk losing contextual data as conversions may be based on partial visits.
  * **Broken Behavior Flow**: It should come as no surprise that behavior flow reports depend on visits remaining intact. The power of this UA feature is visually analyzing the full scope of visitor activity.
  * **Separating Subdomains by Views (Profiles)**: Even if you have implemented subdomain tracking correctly, separating your data by subdomain through the use of Universal Analytics’ views (or profiles) also negatively affects your data. This excellent [blog post](http://www.annielytics.com/blog/analytics/when-good-data-goes-bad-an-expose-on-profile-filters-in-google-analytics/) details why this is not a best practice.

## Will I Lose Referrals Between Subdomains?

If it is important to you to capture referrals between subdomains, there are still various ways to get that data in UA without sacrificing data quality. This can be achieved through the use of content groups or custom events. However, when compared to inaccurate data, lost traffic sources, and broken goals, the decision to implement subdomain tracking should be an easy one to make.

## Are There Exceptions?

There is one major exception. If you truly consider a particular subdomain as a website unto itself, then you may want to track it separately. However, consider this carefully.

As a barometer, ask yourself this question: “If you were forced to restructure the subdomain in question as either a top-level directory (microsite) or as its own stand-alone domain, which would make the most sense?”

If the subdomain content would work better as a directory than as a separate website, then you should definitely implement subdomain tracking. However, if you truly believe it deserves its own primary domain, and there are currently very few cross-links to the rest of your site, then it is probably OK to track your subdomain separately.

## Why Have I Not Heard About This Being a Problem?

Despite the significance of subdomain tracking, it is not surprising that many government digital teams have overlooked its importance when implementing their Web traffic analysis software.

If you browse the many analytics blogs across the Web, you will find limited discussion on the topic. This is because the problem is largely unique to government websites, which, over the years, developed into labyrinthine amalgamations of content from different offices, sub-offices, programs, and special projects. As these sites grew in silos, so too did the number of unique hostnames housed under government domains.

You rarely see comparable websites in the private sector; and, since analytics blogs primarily write with the private sector in mind, the importance of subdomain tracking is usually an afterthought. When it is addressed, analytics bloggers typically stress the need for subdomain tracking on e-commerce sites using digital shopping carts. Shopping carts are the one common example of private sector sites using unique subdomains.

However, if, for some reason, you are still not sold on just how critical subdomain tracking is to the integrity of your digital analytics program, read this private-sector blog post on [self-referrals caused by improper subdomain tracking](https://threeventures.com/how-to-fix-self-referrals-in-google-analytics/).

The fact that Google Analytics changed their default setting to track visits across subdomains in Universal Analytics (UA) says a lot about this issue as well. However, you also have to correctly configure the UA interface to complete the implementation.

If you have any questions about setting-up subdomain tracking at your agency, feel free to [reach out to our team](http://analytics@dcdteam.hhs.gov). Remember, there is no shame in explaining to your boss why your implementation needs a rework. Digital analytics is an iterative field. She will likely appreciate that you are paying such close attention to data integrity.

_The HHS Digital Analytics Team_