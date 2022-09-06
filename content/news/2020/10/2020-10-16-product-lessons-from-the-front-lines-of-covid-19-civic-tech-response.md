---
date: 2020-10-16 00:00:00 -0500
title: Product lessons from the front lines of COVID-19 civic tech response
summary: Two Presidential Innovation Fellows share how we can build digital
  services quickly without compromising quality for the public in times of
  crisis.
# See all topics at https://digital.gov/topics
topics:
  - product-management
  - user-research
  - presidential-innovation-fellows
# See all authors at https://digital.gov/authors
authors:
  - likhitha-patha
  - dr-kaeli-yuen
slug: product-lessons-from-the-front-lines-of-covid-19-civic-tech-response
primary_image: hero-image
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1
---
{{< img src="hero-image" >}}
**Likhitha Patha**: When Kaeli Yuen and I joined the federal government as part of the 2020 cohort of [Presidential Innovation Fellows](https://pif.gov/) (PIF), we did not anticipate a global pandemic on the horizon. For us, this unprecedented time turned out to be a call to step up and serve the American people in a time of need. We prioritized helping agencies respond to COVID-19 by building new digital services that addressed public needs. I was detailed to the Department of Health and Human Services (HHS) and Health Resources and Services Administration (HRSA) where I led the launch of [telehealth.hhs.gov](https://telehealth.hhs.gov/), a website that centralizes telehealth policy updates and resources for health care providers and patients. Kaeli was detailed to the Department of Veterans Affairs (VA), where she led the launch of the [VA coronavirus chatbot](https://www.va.gov/coronavirus-chatbot/) to speed Veteran access to information on the impact of COVID-19 to their VA benefits and services, and the [VA COVID-19 screener tool](https://www.va.gov/covid19screen/) to help assess COVID-19 risk factors at VA medical centers’ building entrances.

Developing products during this time of crisis was uniquely challenging for a couple of reasons:

-  Every problem we came across was urgent in its own sense
-  Visibility and scrutiny on work delivered was higher than usual, which also meant that the appetite for risks and tolerance for hiccups was very low
-  We didn’t have the luxury of time on our side and results needed to be delivered “yesterday”
-  We were working 100% remote for the first time while coming together as new teams

These constraints led us to ask ourselves:

**How do we accelerate innovation and cultivate a culture of rapid prototyping and iteration in the government? More importantly, how do we build useful digital services quickly without compromising the quality and value to the public in a time of crisis?**

Despite intense timelines, we ended up launching new digital products and services from ideation to production in less than two weeks. Looking back, lean and agile product development proved to be more essential than ever in these constraints. Specifically, Kaeli and I arrived at the following lessons that product managers and technologists can apply to effectively build products and services and bring them to production quickly. We go into details with anecdotes from our experiences below but here’s the short story:

1.  Start by digging into the problem space
2.  Build a strong coalition of support and partnerships — especially with those on the front lines
3.  Build your “2-pizza” team to stay nimble
4.  Don’t let perfect be the enemy of the good

## 1. Start by digging into the problem space
{{< img-right src="likhitha" >}}
**Likhitha**: When I initially started working on an effort to accelerate telehealth adoption and was still early in the exploration phase, I heard several ideas and wish lists spanning from wanting to build two-sided marketplaces to automatic triage bots from invested stakeholders. It was tempting to pick something that a highly influential stakeholder was asking for or something involving a latest tech trend because it was exciting to work on. However, taking a pause from reviewing/prioritizing solutions presented to me and instead investing time to dive deep into the problem space paid off. We started by talking to doctors and patients on the front lines to understand broader problems they’re dealing with to deliver and receive care. After validating a few hypotheses with user testing, we learned that the crux of the problem that the government was positioned to solve was providing easy access to trusted [plain-language guidance](https://plainlanguage.gov/) on evolving telehealth policies. This narrowed down the problem to “need for a centralized place to get plain language telehealth policy guidance for health care providers, and scale access to trusted information for the public.” And that’s exactly what we did with [telehealth.hhs.gov](https://telehealth.hhs.gov/)  — it provides trusted, plain language resources on telehealth (telemedicine) to patients and healthcare professionals.
{{< img src="telehealth-website" >}}

{{< img-right src="chatbot-phone" >}}
**Kaeli**: In early March, there was a big surge in VA call center volume due to coronavirus-related questions from Veterans, leading to frustrating hold times for Veterans, staffing challenges for VA, and delayed access to clinical care for callers with urgent healthcare questions. Given multiple challenges, it was challenging for our VA team to prioritize where to focus our efforts, and tempting to jump at the many solutions being offered both from inside VA and from external third parties. However, taking time to understand the problem before jumping to solutions is counterintuitively more important in a crisis, given that there isn’t time to lose on solving the wrong problem.

By spending time on user research, including deep dives with VA call centers and multiple rounds of interviews with Veterans, our team at VA Office of the Chief Technology Officer (VA CTO) learned that the majority of calls to VA were about a handful of the same, VA-specific frequently asked questions related to COVID-19 (e.g., “how can I switch my scheduled VA healthcare appointments to telehealth appointments?”). We developed the VA coronavirus chatbot as an automated way to deliver this information to Veterans without requiring a phone call. During peak usage, the VA coronavirus chatbot handled twice as many COVID-19 related queries as the VA’s national call center.

## 2. Build a strong coalition of support and partnerships—especially with those on the front lines

**Likhitha**: Given the short amount of time to address the identified challenge, we couldn’t wait for all of our insights to be learned solely via user research. We had to diversify our sources of insight by getting connected to entities directly plugged in with frontline workers. By sharing our understanding of the problem space, we were able to seek people on the front lines who can partner with us and support us. We got creative and tapped into second-degree learnings by identifying non-profits and academic entities who work regularly on problems faced by healthcare providers and patients. Overall, our coalition of support and partnerships included stakeholders for buy-in, leaders for approval, and partners for collaboration. What makes a coalition strong is how you earn trust and build relationships, as that is crucial for influencing without authority. We had to also accelerate internal processes to ship faster, and having this strong support from leaders and stakeholders from involved agencies enabled us to cut through a lot of red tape.

{{< img-right src="kaeli" >}}
**Kaeli**: As part of VA’s central office, our team relies on strong partnerships with our colleagues in the field to help us identify and solve the most important problems, especially in a crisis. For example, the VA CTO team’s partnership with the VA Medical Center is Durham, North Carolina surfaced a problem we were well-equipped to help solve: when VA medical centers began to reopen their non-emergency services (e.g., outpatient visits), they began implementing pre-entry screenings for COVID-19 symptoms and risk factors for all patients and employees. However, these manual in-person screenings created long lines and unnecessary crowding at entrances. The VA Medical Center in Durham had begun piloting a digital screening tool, and came to our team for help with improving and scaling the tool. This time crunch made the most of our technical skills and our network. While the team at VA CTO improved the usability and dependability of the tool, the field medical center shared a clear use case and call to action with their peers at medical centers across the country. After pilot success in North Carolina, the [VA COVID-19 screener](https://www.va.gov/covid19screen/) is being used by VA medical centers across the country, and has provided over 2 million screening results.

## 3. Build your “2-pizza team" to stay nimble

**Likhitha**: In order to move fast and deliver quickly, building a small, lean team of empowered contributors is essential. The “2-pizza team” rule is an infamous rule of thumb in the technology world, and it's a handy measure for this — if the team can’t be fed with two pizzas, then it’s too big. The rationale is that as your team size grows, so do the number of links that require managing. Keeping the immediate team small allows for more effective communication, coordination and execution, and staves off symptoms of inefficiency like “too many cooks in the kitchen.” In order to keep the team effective, ensuring there is transparency, and establishing clear roles and responsibilities was also critical. Our immediate team of eight used a number of virtual collaboration tools to consistently workshop and communicate no matter our location; all of which also played a big role in maintaining transparency. Establishing who does what by when and identifying owners, reviewers, collaborators, and approvers upfront kept things clear as we moved forward.

**Kaeli**: Key to the speedy delivery (the VA COVID-19 screener was launched in just 12 days!) of multiple COVID-19-related tools from VA has been not only the “2 pizza” team size but also the fact that we had those tech teams in-house. VA has a dedicated tech team (the Digital Experience Product Office, made of designers, content strategists, engineers, product managers) focused on delivering digital products with a modern, shared VA.gov platform. Having a team like this on hand means you don’t have to worry about contract management, waiting for task orders, onboarding new teams, negotiating scope, or waiting for access to systems. Plus, the entrepreneurial mindset of the team was key for quick delivery. The heavy-lift required to get this infrastructure and in-house tech team in place turned out to be a great investment that allowed the VA CTO team to respond rapidly to the urgent needs of Veterans.

## 4. Don’t let perfect be the enemy of the good
{{< card-quote text="If you’re not embarrassed by the first version of your product, you’ve launched too late." cite="Reid Hoffman, an American entrepreneur" >}}

**Likhitha**: It’s easy to get hung up on wanting to ship a perfect product from the get-go, be it for precision or for risk aversion. In the wise words of Reid Hoffman, an American entrepreneur, “If you’re not embarrassed by the first version of your product, you’ve launched too late.” By waiting to ship the perfect product, we’d be wasting time instead of actually getting the product in the hands of real users through which we can further learn and iterate. Creating a culture for iteration rather than striving for perfection was critical — this mindset had to be adopted by our immediate team and leaders supporting us. We knew going in that what we put out on Day 1 wouldn’t be perfect; we prepared ourselves to iterate quickly and employed mechanisms where we could collect and incorporate user feedback. As we kicked off the effort, we declared a set of guiding principles and “ship-it must-haves” to align towards this mindset. Having these criteria pre-established also helped us stay focused on priorities and stick to our immediate goals. Our “ship-it must-haves” were the following:

1.  We have validated user needs and have reasonable confidence that the right content is in place.
2.  We meet HHS and HRSA compliance and launch requirements.
3.  We adhere to the latest web design standards. In order to create a beautiful and modern website, we leveraged the [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS) to easily adopt mobile-friendly design standards.
4.  Website content including links are reviewed and signed off by source-of-truth owners.
5.  Website can withstand high-traffic, and we are operationally ready.
6.  We ensure there is a way for website users to send us feedback.

**Kaeli**: An important part of this piece of advice is “don’t reinvent the wheel.” Even though we had the in-house tech team available who could have built the VA coronavirus chatbot themselves, we saved precious time by starting with a commercial off-the-shelf chatbot framework. There were some minor trade-offs in customizability, but it got the job done and addressed the pressing need to get information to Veterans quickly.

----------

Are you passionate about the civic impact of human-centered design and product development? Interested in using your expertise for public good? Learn more about PIF [at our website](https://pif.gov/), and follow us on [Twitter](https://www.twitter.com/PIFgov) and [LinkedIn](https://www.linkedin.com/company/white-house-presidential-innovation-fellows/) to find the latest work from our fellows.
