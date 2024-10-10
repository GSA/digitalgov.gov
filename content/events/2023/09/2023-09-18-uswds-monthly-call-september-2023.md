---
title: USWDS Monthly Call - September 2023
deck: Stepping back to look at the big picture
kicker: USWDS mission and vision
summary: We'll explore what it means to pursue mission-centered design and decision-making.

host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsdOygpzwqGGXfWANuR1VJ_0U8wGfc2Bc#/registration
date: 2023-09-21 14:00:00 -0500
end_date: 2023-09-21 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - user-experience

slug: uswds-monthly-call-september-2023

# zoom, youtube_live, adobe_connect, google
event_platform: zoom

primary_image: 2023-uswds-monthly-call-september-title-card
# YouTube ID
youtube_id: rl5hgoOK22o
youtube_title: "Stepping back to look at the big picture"
---
{{< asset-static file="uswds-monthly-call-september-2023.pptx" label="View the slides (PowerPoint presentation, 3.4 MB, 99 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for September 2023" icon="content_copy" >}}**Slide 1:** Thanks Jeannie, and welcome, everyone, to the U.S. Web Design System monthly call for September 2023, where we've celebrated Labor Day, shown here with a USWDS logo in red white and blue. And if you squint perhaps you can see the form of Rosie the Riveter, with her bicep, blue shirt, and red bandana?

And Saturday is the fall equinox, with the USWDS logo showing the seasons change: from green and gold, to brown and red.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a blue button down and bright blue socks!

Unfortunately, while we are recording this call, we currently aren't able to always share the video publicly. That said, we are making progress on being able to share videos and we're building the capacity to slowly release more and more of these monthly calls publicly. So stay tuned for more updates. When we do post videos publicly, they'll be available via the Digital.gov event page.

We'll be posting links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? 

First, we've got a nice new site launch, close to home.

Then we'll talk about what's in our next release, USWDS 3.6.1.

And finally we'll continue our discussion from last month, stepping back from our near term roadmap to the USWDS mission, vision, and polestar, strategic tools that drive our product development.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** Today we've got a new redesign launch from 18F, built on USWDS 3. 18F is, like us, a part of GSA's Technology Transformation Services. 18F helps other government agencies build, buy, and share technology products. Their redesigned website homepage features a crisp, simple layout, focused on the words "18F knows how to work within government because we're already here," alongside a schematic illustration of connected government products.

**Slide 6:** Congratulations to the team! And be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** So let's get into it with USWDS 3.6.1, a small but mighty point release with a number of useful fixes.

**Slide 8:** Here are some of the key improvements in USWDS 3.6.1

**Stacked responsive table reads properly in Safari.** We fixed a bug that prevented the stacked responsive table from announcing properly in the Safari browser. 

**Tile borders are less distracting.** We fixed a regression that unintentionally darkened the borders of radio tiles and checkbox tiles. 

**Wrapping breadcrumbs now wrap properly.** We updated breadcrumb wrapping to allow not only wrapping between elements, but wrapping within very long breadcrumb elements in the wrap variant.

**Improved display of tooltip.** We fixed an issue with the tooltip that could cause it to flicker when it needs to be repositioned.

**Improved image display in the open banner.** We improved the alignment of one of the images in the gov banner.

And finally, we **fixed a rare mobile menu bug in Safari** where for a small range of viewport widths just at or below the desktop breakpoint, the mobile menu doesn't open properly.

**Slide 9:** And that's USWDS 3.6.1. We're wrapping this release up now, and we'll get it out next week.

**Slide 10:** And now I'd like to talk about the USWDS mission, vision, and polestar. We'll talk a bit more about what these individual terms mean in a bit, but together they're a statement of guiding values. A strategic tool that helps us make valuable decisions. 

It's been almost four years since we developed our existing mission and vision. As we plan for the future — in our existing roadmap and beyond — it's time to reevaluate and see whether our mission is still driving us forward in ways that help us deliver on the value teams expect from us.

**Slide 11:** I'll be talking about these ideas today alongside Anne Petersen, the USWDS Experience Design Lead. Anne, can you introduce yourself for folks?

Anne: Hi everyone: I’m Anne, my pronouns are they/them, and I’m the U.S. Web Design System’s newest full-time federal employee, our Experience Design Lead. In the interest of inclusion and accessibility, I’m a white person with short brown hair and small brown glasses. I’m aiming for a fairly androgynous look if that helps. Again, very glad to be part of the team. 

Dan: Thanks Anne. They'll be joining me a little later, but first I'd like to set the stage and talk about where we are today and where we've been.

**Slide 12:** If you attended last month's call, I'd like to assure you that while we talked about some of our history in the context of our roadmap planning, I'm not simply going to cover the same ground we covered last week — but those who've been following along with the design system over time will likely recognize a few of the sights along the way. 

So, USWDS, as a public product, turns eight next week. My son just turned seven, and I know that — at least in human terms — we aren't toddlers any more. We have some opinions, for sure, and are able to articulate them with increased clarity. But we're also very much the same as we've always been.

**Slide 13:** So let's look back to September 2015 — a world away, but also not so long ago.

**Slide 14:** On September 28, 2015, we had our first public "hello world," introducing ourselves for the first time with [a blog post on the 18F blog](https://18f.gsa.gov/2015/09/28/web-design-standards/). USWDS 0.8 followed on October 13, 2015. This blog post is still live on the newly redesigned 18F site, and we've linked to it in the chat. On screen we see a screenshot from the date of the original post, which reads "Introducing the U.S. Web Design Standards" with an old iteration of the gov banner, and the old 18F logo with its sky blue logo, with a hex code of **#1188ff**.

**Slide 15:** The post calls out a question that is still relevant today: “Is it possible to create a shared set of tools to provide consistent, beautiful, and easy-to-use government websites?”

It might seem disappointing that this question is still relevant today, but I'm not sure I see it that way. Here in 2023, we see an ongoing commitment to the challenge this blog post articulates. 

It's noteworthy that USWDS still exists eight years later, and that there's an engaged human-centered design practice all across government that has only grown in its influence and output. Digital experience is a part of the law. Customer experience and a culture of design work that lowers the barriers to entry for government services is an Executive priority. 

We are shaping the future of government digital services every day with this work, and I'm humbled that this community, doing the work day in and day out, are engaged with what we do, pushing us forward, testing us, and inspiring us with the work you do, and adding to a common body of knowledge that subsequent teams can build from. 

"Is it possible?" we asked on Day One. Yes. The work is slow, but the tortoise progresses.

**Slide 16:** Our first design principles, stated on Day One, still influence how we work. You'll probably recognize every item here as essentially common knowledge at this point. And here I'll read directly from the post: 

  **Make the best thing the easiest thing.** We believe that making tools that align with the values and needs of digital workers in the federal government will drive adoption.

  **Be accessible out of the box.** We created tools that seamlessly meet the standards of 508 accessibility, from colors to code.

  **Design for flexibility.** We aim to give the American people a sense of familiarity when using government services, while allowing agencies to customize these tools to fit their unique needs.

  **Reuse, reuse, reuse.** We reviewed, tested, evaluated, and repurposed existing patterns, code, and designs from dozens of government and private sector style guides to make use of tried-and-true best practices.

We didn't have an explicit mission or vision in those days, but you can see these principles in our current [design principles](https://designsystem.digital.gov/design-principles/) and our [product values](https://designsystem.digital.gov/about/product-values/).

**Slide 17:** In January 2018 we retired the name "Design Standards" to call ourselves what we actually are as a product: a "Design System," not requirements established by consensus and approved by a recognized body as a NIST Standard, but a collection of principles, guidance, and code that helps disparate teams align on common goals and design from common tools. 

**Slide 18:** Twelve months later came the 21st Century Integrated Digital Experience Act, on December 20, 2018, two days before a month-long government shutdown, calling out the requirement for "a consistent appearance" for websites and digital services.

**Slide 19:** And a year after that came the publication of the Website Standards that explicitly tie USWDS to the requirements in 21st Century IDEA.

**Slide 20:** At this point, we —then, a two-person team maintaining the design system — decided we needed a mission and a vision. But why?

**Slide 21:** Our mission and vision was meant to give us stability through all this change, to keep us focused on what was really important, and on what we knew was important to the teams that use or might use the design system.

**Slide 22:** So in 2020, we developed the mission and vision that [you can see on the USWDS website today](https://designsystem.digital.gov/about/). Our mission:

**USWDS is a design system for the federal government. We make it easier to build accessible, mobile-friendly government websites.**

To my eyes, this is a humble and practical mission statement that grows directly from the Day One design principles. It was, in fact, important for us to reiterate that we are a design system in our mission statement, and to use that space to reiterate key values also called out in the law: accessibility and mobile friendliness.

**Slide 23:** Our 2020 *vision* was really important to us. 

**We envision empowered agency digital teams who share solutions and use effective human-centered design practices.**

Process was the key here. This vision is all about the teams we support and is meant to echo the USWDS Design Principles: the foundation of what we build comes from starting with real user needs, earning trust, embracing accessibility, promoting continuity, and listening. 

Of all the progress I've seen in the last four years, that progress in the service of this vision has been the most heartening. I already mentioned it above, but if this is the foundation of what we want to accomplish, that foundation is strong and getting stronger.

**Slide 24:** And here we are in 2023 with a design system that makes it easier to build accessible, mobile-friendly government websites, and a community of agency digital teams who share solutions and use effective human-centered design practices.

Is it as easy as it could be to build websites? No.

Are we all as empowered and effective as we could be? No.

There's still plenty of opportunity to grow within this mission and vision, but increasingly we've noticed more and more value, more and more of what teams need and expect from us, that doesn't feel like it's expressed in this mission and vision. So we needed to ask ourselves...

**Slide 25:** Is this still the whole story?

**Slide 26:** Do our mission and vision still express our values and value?

**Slide 27:** Do they help guide our decisions?

**Slide 28:** And do they still inspire?

**Slide 29:** I think the honest answer is yes and no. We've talked to a lot of teams in the last few months, and we've done a lot of planning for what we want to accomplish in the near term, and there are a couple of themes to what we've heard that fall somewhat outside the scope of our mission and vision.

**Slide 30:** The first is commonality — or the importance of the elements of *appearance*, of *experience*, of *familiarity* that we share as government services.

**Slide 31:** The second is value over time — how the value of using a design system shouldn't only be at the beginning, when  you build, but ongoing: in how you stay up-to-date over time.

**Slide 32:** I'd like to start with the idea of value over time and what's perhaps an obvious observation: That the design system should deliver value over the lifetime of a service.

**Slide 33:** That there's value in making it easier to update.

**Slide 34:** Easier to get new improvements — new features and bugfixes. Better accessibility. Components and patterns that are easier to use.

**Slide 35:** That there's value in making it easier to change. To evolve. As we talked about last time, in reducing the cost of change from the perspective of both implementation cost and justification cost.

**Slide 36:** In general, as we keep making improvements to the design system, it should be easier and easier to stay up to date.

**Slide 37:** In fact, we think that this is where the biggest value of the design system lies: after a site or service is launched instead of before. 

**Slide 38:** Eight years in, we now know that this is the beginning, and that we're committed to the long term. This project is a long-term process and USWDS is a long-term solution and partner. We will support long-term solutions and success, to be a service that will be here to support teams for the next eight years, ten years, twenty years.

**Slide 39:** What will the future look like in eight years? Ten years? Twenty years?

**Slide 40:** We know that it will be different from today. And that together, we will shape it. Because that's what we've done and that's what we'll keep doing. This is why we're working toward solutions like web components, so we can continuously refine and redefine our solutions, based on real research with real users — and not just our own research, but research from across agencies and user journeys — then scale those improvements across the design system. Over time, we will see the increasing breadth and depth of our common knowledge as an incalculable asset, and an ever-improving case for common solutions. 

**Slide 41:** A case for common solutions, common knowledge, *commonality*.

**Slide 42:** As you recall, one of our Day One principles was **Design for flexibility**, which we described as "a sense of familiarity when using government services, while allowing agencies to customize these tools to fit their unique needs." 

If our services were cars, we'd want folks to be able to get into any of them and know how to drive. An accelerator and a brake pedal where you expect them. A steering wheel within arm's reach. Seat belts, windshield wipers, and air bags. 

Some of these vehicles would be more rugged, some more fancy. Each would have their audience and their purpose, but each have the same familiar, easy-to-use fundamentals that mean that anyone could drive any of them. And maybe they'd all share the same kind of distinctive license plate as well.

Our *process* identifies, codifies, scales, and refines these commonalities. Experimentation, creativity, and research move them forward. The process of developing the design language of familiar, easy-to-use government services is an ongoing dynamic that shapes our evolution.

**Slide 43:** So there were some key values that fell outside our mission and vision. We are maturing as a product, a team, and a community, and we felt that the time was right to revisit our mission and vision, and take a fresh look at how we think strategically. So, did we take that fresh look, Anne?

**Slide 44:** Anne: Thanks Dan. We did.

**Slide 45:** I’m here to tell you about our approach, as nonlinear as it may have felt, so that you understand one way to do this. It’s not **the** way — like we said last time, we’re a team that’s maturing along with the rest of you — but it is **a** way, and it seems to have worked for us.

**Slide 46:** First, we set out some definitions for everyone to work from. Mission and vision are approached with a lot of variability elsewhere, and with a lot of crossover. Out there in the universe of missions and visions, some places differentiate the two in one way, or another, and even sometimes I see them kind of swapped in definition. These two words —mission, and vision — kind of get fuzzy and overlap if you look at them too closely.

So, we paired the two and worked on both. At times we prioritized one or the other, but they’re so interrelated we needed to work with them alongside each other.

**Slide 47:** Here are those two words, mission and vision — fuzzy, and overlapping. This process felt like this sometimes.

**Slide 48:** But how **we** defined them: Your mission is your purpose, writ large. It should be ambitious but believable, and from the point of view of the people who benefit from it. It reflects in practical terms what we do **now**, but also what we expect we’ll still be doing in 10 to 15 years. It encapsulates, and is unique to, whatever it’s for, in this case USWDS. A great mission is compelling, clear, unique, and memorable. And it needs to be short.

**Slide 49:** Really short. Like, that’s-too-many-words-you’ll-have-to-return-some kind of short. This slide says “Make it short” with “make it” crossed out and another editing mark indicating the whole sentence should just be: “short.”

**Slide 50:** Your vision describes broadly what’s in the future and how you hope to get there. It’s your elevator pitch for the impact you could have, or how you summarize what you do to someone completely unfamiliar.

*Most* are aspirational but not unrealistic. So for us: what does the design system solve — for who — how does this help — and what’s the outcome in our ideal world? These can change every 5 years or so, but should be continuously looking into the future. If you’ve achieved your vision, you’re probably aiming too low.

It also *explains* more than the mission. For us, the mission is the briefest encapsulation of what we do, whereas the vision shows what we want to accomplish, broadly.

But also, having a mission and vision is great, but how do we put them into action? *That’s* where your polestar comes in, and later your roadmap. But first, to polestars:

**Slide 51:** Polestar. This is what you measure your actions against, your guiding mechanism for decision-making. It describes how the team should **do** the thing, motivating us all and showing how we contribute to the mission and vision. A polestar can also help you figure out if you’re about to prioritize something that doesn’t contribute to the core point of the organization.

**Slide 52:** Now, to move to our guiding principles *for this work*. First, we wanted to eliminate jargon and stick to plain language, with a fairly broad definition of both, in order to achieve clarity. We want *anyone* to be able to understand our mission and vision. Polestars, on the other hand, bring a little more clarity *internally* than externally — including for those who know and use the system, in our case — so can have just a smidge more technicality to them.

**Slide 53:** The often-used measure you may have heard before is if a family member might understand. I like to use the measure of “would anyone you just met understand?” Someone you **just met** — who you don’t know the expertise of necessarily — so you need to make it as simple as possible before you hear from them what angle they might be interested in, if they’re interested enough to learn more. Simple, and clear.

**Slide 54:** Next, does it sound like us? Does it sound like how we usually communicate? Does it support our actual continuous product values and design principles, as we practice them?

**Slide 55:** But also — let’s be real. Like, **us** us. We’re humans, behind the screen. A great team doing great work — and thank you to the full set of humans that all worked on this, it was really tough work – but still, we’re a team composed of people. As I’ve mentioned previously, ultimately we are two — count ‘em, two — full-time federal staff members plus a core team of contractors. We do have a bit of other federal staff support, and then also a terrific community. And thanks for being part of that. But let’s be both ambitious **and** realistic about what we can accomplish together.

**Slide 56:** And does it sound like ONLY us? What is **purely** the U.S. Web Design System and no other product or system or program? What can **we** do that others can’t?

**Slide 57:** But we also don’t want to get too lofty, or we’ll lose our head in the clouds. Abstract grandiosity does not support clarity. It has to be rooted in what we do day-to-day, and specifically encapsulate what we do **now**.

**Slide 58:** Speaking of time, and to help provide some grounding, I should note the typical cadence of change for these tools. A **mission** changes the least often. It’s your purpose; it’s why you’re here. It’s enduring. We can fine-tune it rarely, but it shouldn’t change often.

By frequency of change, that’s followed by **vision**, which you can adjust a little as you learn more or your landscape changes. 

After vision, the next thing that may change a little more frequently may be your polestar — **how** you do what you do to reach your vision, which can change as you find and create new, improved and more efficient methods and processes. 

But back to your core — your mission and vision. You can **rely** on these underlying principles, your mission especially, which should not change with the direction the wind’s blowing.

**Slide 59:** Maybe most importantly at this point, we need to avoid mentioning specific technologies. Not only are they jargon, but they also limit us. What if in four years or eight years a technology we mention is no longer used or available?

**Slide 60:** This is a list of some *exact* words of phrases we wanted to avoid for various reasons — either they’re jargon, or they mean different things to different people, or they’re a specific technology or approach that would *limit* our ability to adjust as we needed to. Things like playbook, template, standards, sustainable, code, mobile, continuous improvement, universal design — even design system and agile.

**Slide 61:** This slide says Who, What, How and Why. To start on this process of uncovering and articulating these key concepts, we got the core team together for a workshop. In this workshop, we started with these core questions: **Who** is the U.S. Web Design System’s audience? **What** are our goals for the system? **How** can we achieve those goals? **Why** is it important that we do? That is, what’s the design system’s **impact**?

**Slide 62:** We then used *those* as source material for thinking about our purpose — that is, our mission — and what we want to accomplish — that is, our vision — creating two fields of variously colored virtual sticky notes, all of them unreadable at this scale.

**Slide 63:** But then we refined to get fewer, more focused ideas.

**Slide 64:** And refined again, to get to even fewer.

**Slide 65:** Sometimes we had to take a step back for a wider view, reaching back into earlier versions to pick up concepts that we thought at the time weren’t working. But sometimes those earlier ideas helped us make connections or get to an approach we hadn’t considered yet.

**Slide 66:** This process honestly got frustrating — showing here even more different sizes and colors of stickies with labels and also a select few that appear in frames — but since I’ve done this kind of missioning and visioning a few times before, I could tell everyone that that’s incredibly normal. Happens *every time* in this process. At this point we could tell we didn’t have it yet, but we didn’t know what “it” *was*, quite.

**Slide 67:** So we looked at some other examples, while doing essentially a really intense, long session of *working through our wording*. Fine-tuning through to *just* the *right* **word**. Improve or adapt or define or refine. They’re *different*, and words matter. 

**Slide 68:** But here, where we concluded, are just three colored stickies with labels in navy blue, medium blue, and red, still unreadable. But this is where we wrapped up. What they *actually* came out to be… well, that’s next. I’ll pass it over to Dan.

**Slide 69:** Dan: Thanks Anne. Yes, I think I used the words "dark night of the soul" as we passed through one of the more despairing parts of the process. And there were some. You know, we really value talking about the process of design work — of which writing work is very much a part — since we like to show our work. But it isn't always pretty. 

Doing this kind of work can be like watching dreams be born and die. And that dark period between death and rebirth is where you can really question your choices.

E.B. White had this quote: “Humor can be dissected, as a frog can, but the thing dies in the process and the innards are discouraging to any but the pure scientific mind.”

Luckily, we were writing a government mission statement. And hopefully our innards might find some additional use.

So what did we find?

**Slide 70:** First, we wanted to step back and just identify ourselves. Who are we?

**Slide 71:** We identified words like **Design** and **System**, **Resource**, **Reference**, **Library**, **Service**, and **Styleguide**, among others. But really there was only one good answer to the question of who we are:

**Slide 72:** Our identity: **The design system for the federal government**

**Slide 73:** About that "the." We've been really cautious about using "the design system," favoring "a design system" when we talked about ourselves, but it did beg the question, are there others?

**Slide 74:** Well of course there are other design systems. And there are rules and guidance for various elements of design and usage that span the entire federal government, but we are the only government design system developed for use across the federal government. This was perhaps an instance where our inclination to humility might just make things less clear. So "the design system" it is.

**Slide 75:** Why do we exist? The eternal question.

**Slide 76:** We identified some action words that express what we do. Words like **Design**, **Align**, **Shape**, **Connect**, **Maintain**, **Improve**, and **Define**.

**Slide 77:** We also identified some descriptive words that express how we want to be. Words like **Honest**, **Open**, **Clear**, **Curious**, **Humane**, **Straightforward**, and **Fair**.

**Slide 78:** And as we went through this process, we felt like our mission should encompass not just what we do as our team but what we do together with our community.

**Slide 79:** And what is it we're doing? Bit by bit, improvement by improvement we're finding and fixing bugs, asking questions, listening, identifying what works and what can work better, trying new things, failing, trying again, failing better, being intentional, celebrating successes, putting in the work, always moving forward, and trying to answer the question: "Well, how should this be?" and in the answers to that question, shaping the future.

**Slide 80:** And that's where we found our mission: **Shaping the future of government digital services**. Something we do together, over time. It's a very small point, but many mission statements begin with "we" and this one does not, intended to point not back at ourselves but to be inclusive of everyone involved in our process.

**Slide 81:** So as we address the future, what's in that future? 

**Slide 82:** We identified some descriptive words that describe our best future. Words like **Empowered**, **Centered**, **Equitable**, **Trustworthy**, **Familiar**, **Reliable**, and **Better**.

**Slide 83:** Thinking about the future, I keep coming back to the Jane Jacobs quote we looked at last week: “Development isn’t a collection of things, it’s a process that yields things.” It's a warning about seeking solutions that exist outside of the culture that supports them, focusing only on the outputs and not a process that sustains them.

**Slide 84:** When we think about our vision of the future, no valuable, generative future is sustainable without people and process.

**Slide 85:** No valuable, generative future is sustainable without hard work and support.

**Slide 86:** And no valuable, generative future is sustainable without new change and creativity.

**Slide 87:** So our vision is a two-part vision, pairing people and outputs: **Empowered and supported digital service teams. Familiar and easy-to-use digital services.**

**Slide 88:** And finally, what are we doing in support of this mission and vision?

**Slide 89:** We identified some descriptive words that describe our activities. Words like **Help**, **Develop**, **Research**, **Design**, **Support**, **Maintain**, and **Improve**. 

**Slide 90:** And we also thought about what we try to help teams do: **Design**, **Align**, **Explore**, **Maintain**, **Contribute**, **Research**, and **Update**. 

**Slide 91:** And this resulted in our polestar: **We help government teams align, design, and keep their websites and services up to date.**

**Slide 92:** This polestar begins to more fully capture the breadth of the how teams work with the design system: getting started and building alignment; designing, building, and redesigning; and the continuous process of staying up to date and improving over time.

**Slide 93:** Together, this USWDS mission, vision, and polestar function as a better strategic tool as we evolve as a product and as the expectations teams and the public have for us evolve as well. 

Our mission — **Shaping the future of government services** — keeps the future always in front of us, focused on a dynamic, collaborative creative process.

Our vision — **Empowered and supported digital service teams Familiar and easy-to-use digital services.** — helps us more fully understand our value and the goals of this process.

Our polestar — **We help government teams align, design, and keep their websites and services up to date** — helps us understand how we deliver against valuable, sometimes measurable, outcomes. 

For alignment, how are we doing for driving adoption, building consensus, providing evidence, and delivering common solutions that teams actually use. 

For design, how are we doing for improving the design and development speed; are we delivering all the components, patterns, and guidance that teams need, and are these tools flexible, modular, and reliable

For keeping websites and services up to date, Are we reducing the time and effort it takes to update and upgrade? Do we see more teams using more current version of the design system?

Right now, I know it's working because I feel the potential and the terror. I feel the potential in what we're able to do, and I feel the terror in knowing where we still fall short. But this, I think, is good. There's no room to be complacent.

**Slide 94:** And I want to also acknowledge that any mission and vision can't include everything. Is it meaningful that accessibility, mobile-friendliness, and human-centered design no longer appear in the mission and vision by name? In every real way, that answer is no. And that's because our USWDS design principles aren't going anywhere and are just as important as they've ever been. It's worth reiterating that the foundation of what we build comes from starting with real user needs, earning trust, embracing accessibility, promoting continuity, and listening. Those are our shared values that do not change.

**Slide 95:** So what's next? For now, nothing. We've spent the last month working through this process, and we're going to sit with it for a moment. But we expect that in about a month, you'll begin to see this on our website, and explicitly reflected in what we do and how we talk about it.

**Slide 96:** So finally, I want to say thank you to our team for doing this work and getting us here. It's been tough but healthy to work through this process together. I can't wait for what's next.

**Slide 97:** Onward!

**Slide 98:** Q&A

**Slide 99:** We'll be back in October where we hope to talk about our Product Values, as well as progress on new component proposals. 

If you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Have a great day, and a great rest of September!

{{< /accordion >}}

It's been eight years since the first public release of the U.S. Web Design System (USWDS). What have we done? Where are we going? What have we learned? Let's revisit our mission and vision as we look out in the direction of the next eight years.

We’ll discuss:

* USWDS mission and vision
* What we've learned from talking with teams
* A mission-focused future

**This event is best suited for:** Anyone who uses the U.S. Web Design System.

## Speakers

* **Dan Williams** **—** Product Lead, USWDS
* **Anne Petersen** **—** Experience Design Lead, USWDS

## Related resources

Last month, we talked about what’s on the Design System’s product roadmap. Check out the [slides from the Design System roadmap discussion](https://digital.gov/event/2023/08/17/uswds-monthly-call-august-2023/). 

Also, take a look at the [USWDS product roadmap](https://github.com/orgs/uswds/projects/13/views/1?visibleFields=%5B%22Title%22%2C%22Labels%22%5D) to learn more about what the team is working on for the rest of 2023 and into 2024.

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
