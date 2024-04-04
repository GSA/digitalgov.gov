---
date: 2023-08-28 19:28:00 -0500
title: "Inclusivity and automation"
deck: "How a bot can help you stay accountable"
summary: "Bots can help us improve our inclusivity by gently nudging us to use more appropriate language, explaining why some terms are offensive, and prompting us to consider others."

# See all topics at https://digital.gov/topics
topics:
  - communication
  - artificial-intelligence
  - robotic-process-automation
  - digital-service-delivery
  - plain-language

# See all authors at https://digital.gov/authors
authors:
  - frances-carden

slug: inclusivity-and-automation

primary_image: chatbot-group-comments-gmast3r-istock-getty-images-1362558433-comp

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

We use language every day to describe our wants and desires, how we’re feeling, and to share general updates and assumptions. This is something we do automatically, without thinking&mdash;but we all innately know that despite how casually language is used, it makes an impact. Language is powerful, and we often use words and phrases without really knowing what they mean or the history behind them.

What’s an example? When you say that someone has “stolen your thunder,” you’re actually referring to an idea from John Dennis, an 18th century dramatist. He decided to create a thunder machine for his play, but the machine didn’t work. Later on, the thunder machine idea was stolen and successfully used in a play you might be familiar with … Macbeth!

But not all etymology is so innocuous. I guarantee that you’ve heard (and probably used) the term `grandfathered` when talking about a project or initiative being retroactively included. But the term actually arose from voter restrictions that prevented Black people from voting. This is just one example among many.

It’s not easy (and certainly not always possible), though, to research the history and connotations of every word before you use it. We all know that we should be responsible for our language — the terms we use, and the way we engage people around us — but sometimes we need a little nudge. Enter the [Inclusion Bot](https://18f.gsa.gov/2022/11/14/improving-inclusion-continuously-how-we-iterated-on-our-bot-to-promote-more-inclusive-and-thoughtful-language/), developed by GSA’s Technology Transformation Services (TTS) office.

On July 19, 2023, the [Communicators Community of Practice](https://digital.gov/communities/communicators/) hosted a [webinar to introduce the Inclusion Bot](https://digital.gov/event/2023/07/19/supporting-inclusive-language-through-automation/), talk about how automation can support inclusive language, and show the audience how to apply these principles to create their own automations. Speakers from TTS engaged with the audience, leading with a presentation to show why the bot was developed, how it evolved, and how we can leverage the idea of automation to continue supporting inclusive language. The speakers engaged in a live question and answer session afterward, where the audience asked questions to understand the parameters of the bot, understand how they can apply these ideas, and suggest additional terms that should be added.

{{< youtube id="4xwC2q8G4J8" title="Supporting inclusive language through automation" >}}

## How it started: Guys Bot

The [Inclusion Bot started small](https://18f.gsa.gov/2016/01/12/hacking-inclusion-by-customizing-a-slack-bot/), publicly flagging uses of the gendered term `guys`. It would provide examples of more inclusive language, using terms such as `folks` or `y’all` (you all). But it wasn’t perfect. The bot also included references from popular TV shows — however, suggesting `fellow kids` as an alternative to `guys`, unintentionally alienated users not familiar with the show that famously used that phrase. The bot also couldn’t differentiate between guys when used in other contexts either, such as a business or brand name.

## Where it is now: Inclusion Bot

As the TTS team incorporated feedback, they began to iteratively refine. The purpose of the bot is not to shame, but to promote learning. With that in mind, the team made the response messages private to the person who used the word or term, while also using an emoji to show the public that the bot had already responded and that they didn’t need to. References to popular shows were taken out and [more words were added.](https://github.com/18F/charlie/blob/main/InclusionBot.md#racist) Information was added to the bot’s automatic message to provide more detail about why a user might want to reconsider a chosen term.

## How do you start?

Do you want to do something similar? Start simple. Consider the culture of your workplace, start a conversation, and get people involved. You’ll want to introduce the concept slowly, with just a few terms at first, giving people time to get used to the bot, learn how it works, and begin incorporating the language changes. This gives you time to iteratively refine as your use of the bot expands, allowing you to customize it to your organization’s needs and culture.

{{< img src="chatbot-group-comments-gmast3r-istock-getty-images-1362558433-comp" >}}

## How do you continue?

Continue engaging your community. Be willing to listen. What is working, what could be better? Be prepared to customize the bot so that your community feels a sense of ownership and is inspired to contribute. Allow people to provide feedback both publicly and privately, giving them multiple options to communicate their questions and ideas.

Once you get this feedback, you need a defined process to integrate it. Don’t let the feedback loop close without action. Be willing to act on what you have heard, to continue changing the bot’s functions. Throughout this process, be transparent and open. Keep the dialogue going. Tell people what is changing and why. Make it clear that you are hearing their feedback and acting on it.

## How do you start technically?

How do you start on the technical side of building your inclusion bot? This will ultimately depend on the technology and platform available to you. The technical implementation is generally carried out by a small team. That team needs to stay open to feedback as your culture responds over time.

Before choosing your technology, you’ll want to have some organizational conversations — for example, decide if you want the tool to respond publicly or privately. Have your list of terms and alternatives ready, and some idea of the automatic responses that you want to use.

When checking out available tools, be sure that you [choose a tool that is accessible](https://www.section508.gov/tools/) so everyone in your organization can benefit from it.

## What can’t you automate?

An inclusion bot is still a “blunt tool” — that is, it’s limited, and can only do so much. The purpose of the bot is to prompt us and provide learning opportunities to help us practice a more inclusive vocabulary. The audience has to be willing to learn, grow, and change. We should note, however, that bots do not take the place of real conversations. If someone is being deliberately offensive, the bot cannot change their behavior. But for those who are open to learning, it can be a motivator and support tool to understand why some terms are considered sensitive or offensive, and why we should work to remove them from our daily speech.

## Keep track of your culture

Terminology changes not only based on history, but also our broader culture. For example, some words are being reclaimed by certain communities. To keep up to date with terms as they change over time, you’ll need to listen for changes and pay attention to the culture around you. This is also where gathering community feedback is useful. Be willing to change your approach, update your list, and address community needs. This is not a one-time effort, but an evolving learning approach.

Automation helps us with this approach, giving us gentle nudges, prompting us to stop and think more deeply about the things that we say, but ultimately the onus is on the individual to want to do better, to continue learning, and to consciously make an effort to improve how we communicate with each other.

## Where can I learn more?

* [Hacking inclusion: How we customized a bot to gently correct people who use the word ‘guys’ (2016)](https://18f.gsa.gov/2016/01/12/hacking-inclusion-by-customizing-a-slack-bot/)
* [Executive Order 14035 on Diversity, Equity, Inclusion, and Accessibility in the Federal Workforce (2021)](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/06/25/executive-order-on-diversity-equity-inclusion-and-accessibility-in-the-federal-workforce/)
* [Improving inclusion, continuously: how we iterated on our bot to promote more inclusive and thoughtful language (2022)](https://18f.gsa.gov/2022/11/14/improving-inclusion-continuously-how-we-iterated-on-our-bot-to-promote-more-inclusive-and-thoughtful-language/)
