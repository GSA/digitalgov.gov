---
title: USWDS Monthly Call - March 2023
summary: "Making sense: Cognition, perception, and design"
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItceqgqjwoHl_zCE4rfcQlOhV1ePPSqjg
end_date: 2023-03-28 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - open-source
  - usability
slug: uswds-monthly-call-march-2023
captions: https://www.streamtext.net/player/?event=BIS-GSA-1731
date: 2023-03-28 14:00:00 -0500
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
# YouTube ID
youtube_id: ceRXbLwEgD0
---

{{< asset-static file="uswds-monthly-call-march-2023.pptx" label="View the slides (PowerPoint presentation, 1.8 MB, 56 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for March 2023" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call.

For March 2023, this month, we're celebrating Women's History Month (with our logo in shades of orange, teal, purple, and pink), as well as St. Patrick's Day this week (with shades of clover green), and the Spring Equinox next week (with shades of cherry-blossom pink). This week also featured both Pi Day and the Ides of March. Perhaps you did as I did, and had a meal with both pizza and a caesar salad.

**Slide 2:** My name is Dan Williams, [my pronouns are] he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing something very similar, a blue cardigan and collared shirt. I'd like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](digital.gov/communities/community-guidelines/) - you can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat.

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?
First we'll take a quick look at the most recent design system releases.
Then we'll spend the rest of our time talking about cognitive theory!
We ought to have some time left at the end for Q&A. So let's get right into it.

**Slide 4:** Since the last monthly call, we've published both USWDS 3.4.0 and 3.4.1. Due to a sequencing error in our release process, we inadvertently left a couple new features out of USWDS 3.4.0 when we released it, so we quickly released a patch version, 3.4.1, that includes all the features and bugfixes we intended to release in 3.4.0.

**Slide 5:** Here's a bit of what you get in this feature-filled release:
- Since we no longer directly support IE11 post-USWDS 3.0, as of USWDS 3.4.1 we now no longer reference woff and ttf font files in our @font-face rules — we only reference woff2 fonts. This means if you self-host a custom font in your project that only includes woff2 files, our built-in font face generator will work for you. It was time. But if your project still has to support IE11, we have a new setting you can pass that will output the woff and ttf fonts as well.
- This release will also improve contrast of incomplete step indicator steps
- It will allow full-page width headers
- It will remove grid dependency from usa-banner package
- And properly vocalize secondary navigation items 
- And it will Improve wrapping of external links and icons

**Slide 6:** In addition, USWDS 3.4.1 will also
- Allow date pickers inside modals
- Improve URL display for in-page navigation links
- Allow any spacing unit in alert padding settings
- Fix broken outline-05 utility
- And finally, on our website, we expanded and improved our Gender Identity and Sex patterns and guidance.

**Slide 7:** And that's USWDS 3.4.1. It's out now.

**Slide 8:** So I'd like to take a  little bit of a step back this month and discuss something that I've often considered one of the fundamentals of design, learning a bit about how our brains make sense of the world. 

After we published our pattern guidance, we got some good feedback that while we were starting to get into patterns and interactions, we still didn't have any information about general rules of UX. We definitely should! And as I was thinking through the kinds of things that we might consider general rules of UX, I kept coming back to some of the ideas we'll talk about today — and as the USWDS team starts to think about how we want to address general rules of UX, we might start with some observations about human cognition that are more than 100 years old, but continue to be proven by neuroscience today.

So let me take a swing at trying to make something that's interesting to me, interesting to others in **Making Sense: Attention, grouping, and decisions!** Now, I'm an enthusiastic practitioner, interested in the topics I'll discuss here, but I'm not a psychologist nor a cognitive scientist. If you are, and I say something that doesn't sound right to you, call it out in the chat and we'll be sure to discuss it at the end.

**Slide 9:** There are all types of angles on design work when it comes to the products we're all a part of, websites and digital services: there's visual design, product design, interaction design, content design, service design, ux design, and the the tenets of human-centered design that connect all of these.

**Slide 10:** These are ways that we all contribute to the process of design, to the process of intentional decision making, whether we're helping to make these decisions or supporting the ways we make them or the ways we implement these decisions in our products.

**Slide 11:** By and large, at the end of the day, we're designing for people. In some ways we support machines and other processes, but our end users are typically the humans we center our design process around.

**Slide 12:** So one of the things that connects many design disciplines is human interaction. We're creating tools and spaces — predominant digital spaces — for people to do things. So one thing I'd like to assert is that in our world of designing for human interaction, we designers are engineers of human attention. 

Just as electrical engineers deal with electricity and structural engineers work with materials like steel, concrete, wood, plastic, and water, human interaction digital designers (to use a broad term) deal with human attention: conserving, supporting, sustaining, and rewarding the attention of the people who use our sites and services to do something that they need or want to do.

**Slide 13:** Just as electricity, steel, and water have their own properties, characteristics, and physics, attention is a resource with its own properties.

**Slide 14:** So what is attention? Attention is the focus of awareness, following one stream of sensation over another. Of the countless sources of sensory input available to our bodies, attention is the stream we choose, consciously or unconsciously.

**Slide 15:** Attention is coordinated in the brain, and in part directed by the sense of self we hold in our brains, which we might call the mind. We can consciously direct our focus — direct our attention — in different ways (in different physical or mental directions) based on a conscious goal, or intention. When we're goal seeking, our intention directs our attention.

For instance, if we want to make breakfast, we might direct our attention (our sensory focus) toward navigating our body to the kitchen, asking ourself what we want to eat, then checking the cabinet for cereal, the refrigerator for milk, and the shelf for bowl, and so on. 

For many of the tasks we attend to in our day-to-day lives, this type of attention — of using our senses and our memory to follow a chain or flow of navigation and decision making — is simple and frictionless, and takes little energy.

**Slide 16:** And this is good, since it turns out that we humans have somewhat little energy to spend on decision making. Our brains have evolved to become extremely efficient at navigating huge amounts of sensory information to accomplish tasks, and the primary way our brains do this is by forgetting and ignoring. We are very good at forgetting and ignoring!

**Slide 17:** Attention is as much about ignoring as it is about focusing. We spend energy on attention so we don't spend it trying to understand everything that's happening around us. 

Forgetting is the job of what we call working memory. Working memory is not entirely dissimilar to the random access memory we have in our computer — type of temporary buffer memory that helps us make the decision we need to make at the moment then move on to something else. We don't typically store vast quantities of sensory data directly in our brains the way a digital camera might. What we store in working memory is only stored for somewhere between a fraction of a second to just a few seconds.

Notably, our brains have separate areas for processing visual working memory and language-based working memory. This is also true for deaf people: the message content of sign language is processed differently from other visual stimuli. Language-based working memory is sometimes called an echoic loop.

Throughout the flow of an action, our brains use the perceptual or orientation working memory with the language working memory to make decisions. For example, the message "let the dog out" and the image of a dog near a door might lead to a plan to open the door. This creates an intention, which directs the next step in the flow of attention. Let's navigate to the door. Find the handle and turn it. What?!? The door is locked?!? OK, don't panic. Let's use a bit more working memory and attention to unlock the door and continue with the flow. We've got this!

In another hour, will we remember whether the door was locked when we let out the dog? Probably not! Will we even remember in another 10 minutes? Probably not! Every brain is a bit different, but this tends to be the case. It takes real effort and may even be impossible to remember what you had for dinner a week ago.

**Slide 18:** Our brains are optimized to be just-in-time systems. We acquire and store just enough information to get us on to the next thing. And only, over time, if there are significant internal or external consequences to a particular action do we begin to form longer-term associations that we call long-term memories.

**Slide 19:** In fact, if we look around our room, we can easily recognize it as our room — but if we were asked to draw or describe specific features of the room, like whether there was specific shirt or book here or there — or certainly something like how many stripes are on the rug —  it might be hard to conjure those specifics. We often only get the gist of a situation, and selectively use our senses and our attention only when we need it to draw out specifics. A principle of cognition is that "the world is its own memory" — we are beings that are built to live in a kind of consistent, coherent, and continuous reality. It's important that we can trust that if we have a chair in our room, for instance, it'll be there until we move it. It doesn't just disappear. The world is its own memory, its continuity and consistency are the foundation that we as humans depend on to work properly.

**Slide 20:** We're constantly toggling from gist to specific — trying to maintain a general model that can allow us to navigate to something specific when we need it. The relationship between gist and specific is what allows us to use our attention and our working memory efficiently and effectively to navigate a world of infinite information without requiring infinite resources.

**Slide 21:** Imagine that you've been given an unusual task: enter an unfamiliar building and find a jar of honey. If you were in your own home, you might know where you'd look. It wouldn't take much energy. It would even be easy to give directions to a neighbor trying to find a jar of honey in your home, even if they've never been inside it. Now let me describe two very terrible buildings that would make this task difficult.

**Slide 22:** The first is what we'll call **the random warehouse**. It's just a big open warehouse with shelves and shelves of different items, arranged randomly. Where would you look for the honey? What strategies might you use to find it? Is there any gist you could make of this situation to help you out? Probably not! You'd just have to look thoroughly and monotonously from one shelf to another trying to scan for this specific jar. It would be a big task and you might give up. It's a lot of work to go from item to item. It's tedious and time consuming! There's no organization! How much do you really want that honey?

**Slide 23:** The next scenario might be even worse. Let's call it **the mystery house**. In the mystery house, it looks a lot like the type of house you recognize. It has rooms like kitchens and bathrooms and living rooms, but nothing is where you expect it to be, the kitchen cabinets seem to be full of laundry, there's a stairway that leads nowhere. It has the appearance of order, but it's completely out of sync with your expectations! While the first scenario feels lazy and tedious, this one actually feels cruel. It's encouraging us to see organization, to make a gist then punishing us for doing it. I don't know about you but I'd give up on finding that honey in the mystery house much faster than in the random warehouse. It actually takes more energy to work against bad organization than against no organization!

**Slide 24:** Our minds need consistent, meaningful organization to make sense of the world. We need to be able to move from gist to specific with as little energy as possible. And our minds are built to do just this: create gists and spot differences.

**Slide 25:** For more than 100 years, scientists and psychologists have been studying the concept of the gist, and it has a fancy German name as well: gestalt. Gestalt, which might also be translated as wholeness or form is a concept explored in depth by the Czech psychologist Max Wertheimer in the early part of the 20th century — around the time of the first World War. Gestalt theory proposes that we make sense of the world through the perception of wholeness — and that this wholeness is a kind of model, different from being simply the totality of its constituent parts.

Wertheimer helped define the field of **cognitive psychology**, which was focused on attention, language use, memory, perception, problem solving, creativity, and reasoning. This is and was distinguished from **behaviorism**, which saw some of these cognitive concepts as fundamentally unknowable — or at least unobservable — focusing instead on what can be more easily observable, or behaviors.

It's perhaps important to say that when it comes to understanding how we live, think, and act, there may be no either/or here. Both behaviorism and cognitive psychology contribute to what — ironically — we might consider the gestalt or gist of human psychology.

**Slide 26:** Gestalt psychology proposes that our minds function not as recording devices, or accumulators of data. We do accumulate data, but what our brains store most effectively are models, organizational concepts that allow us to store group information — a kind of compression algorithm that allows us to avoid data redundancy. We don't need to know what every single iteration of an apple looks like, we only need to hold the concept of an apple and sample the details from case to case as our intention and attention demands.

**Slide 27:** Gestalt theory proposes that our minds are built to form groups — that we perform certain kinds of grouping automatically — and cognitive science has ample evidence that this is true. I'd like to show some types of grouping identified by gestalt theorists. You may have some familiarity with them already, they're called the **Gestalt Principles of Grouping**. These are visual examples, but grouping is not an exclusively visual phenomenon. Think of how we perceive something like rhythm in music: we hear or even feel the rhythm as a complete structure — a wholeness — instead of simply a sequence of individual notes or beats. 

Today, we're going to look at seven principles of grouping. This is a living field, some of these principles are the originals identified by the original Gestalt theorists, and some have been added by subsequent studies.

**Slide 28:** The first concept is somewhat meta, and it's the concept that we want to find meaning by grouping. We tend to group stimuli in a way that preserves and enhances some type of meaning, preferring the simplest explanation. This is called the **principle of Prägnanz** — whose exact translation is precision, but might better be translated as elegance, in the way that a solution to a problem might be considered elegant. We're inclined to find an elegant explanation to describe a collection of data. 

A common example of this principle is anthropomorphization: the way we might see an elephant in a cloud or a face in the splotches on your toast. In a more practical sense, it helps us orient to unusual perspective or lighting — seeing a cat in a curving pattern of shadows on the bed at night, for instance. Or in the example on this slide, we can see what might be considered a complex pattern of arcs and intersections, but the principle of Prägnanz predicts that most of us will quickly interpret this image as six overlapping circles.

**Slide 29:** The second grouping principle says that we're inclined to group together items that have similar characteristics. This could be color, shape, size, texture, orientation, etc. This one is called the **principle of Similarity**.

Links, buttons, fonts, headers — grouping less influenced by proximity.

**Slide 30:** The third grouping principle says that we’re inclined to group together objects that are closer together physically. This is called the **principle of Proximity**.

Sectioning, items in a navigation, spacing and whitespace.

**Slide 31:** The fourth grouping principle says that we’re inclined to group together objects that are found in the same closed region. This is called the **principle of Common Region**.

Connecting sometimes dissimilar items, powerful effect strong than other forms of grouping.

**Slide 32:** The fifth grouping principle says that we’re inclined to group together objects that are moving together. This is called the **principle of Common Fate**.

Reduce animation in the design system, scrolling, avoiding parallax, moving at different speeds.

**Slide 33:** The fifth grouping principle says that we’re inclined to group together objects that follow a common path, and that we favor smooth or curved paths over those with unexpected changes in direction. This is called the **principle of Continuity**.

Gradual incremental change improves group identity, in a large-scale sense, this builds trust. common path is also used in something like step indicator, or process list.

**Slide 34:** The sixth grouping principle says that we're inclined to fill in blanks to perceive a complete object whenever an external stimulus partially matches that object. This is called the **principle of Closure**.

Indication that more information exists off-screen. Used in slider and carousel, but also in standard vertical scrolling. The inverse is the "illusion of completeness" when there is more content off-screen, but there's no indication that you should scroll, there are no partial elements you want to complete.

**Slide 35:** Just as our brains are inclined to group elements by characteristics that imply a group identity, we're equally inclined to identify differences between a single element and other elements in the same perceptual field, groups of one. You could think about this perception of difference as contrast since contrast is measurement of the degree of difference. We're all familiar with color contrast and what's required by Section 508 and WCAG, which is a difference in luminance, but there are lots of other ways to perceive difference. 

When there are groups of one with sufficient difference, the result is something called the pop-out effect. In the pop-out effect, the element that is different pops out of its context and captures primary attention. Often only after we attend to the element isolated by the pop-out effect can we attend to other groupings and other characteristics of an environment. The pop-out effect can be a powerful driver of attention and, as such, can also be super distracting. Sometimes the power of the pop-out effect can overwhelm the attention and capture all the resources in working memory, at least until it can be actively ignored. Use it intentionally and be on the lookout for any unintentional pop-outs. 

Here are a few characteristics that can trigger the pop-out effect. 

Some are more dramatic than others, and all of them depend on the degree of difference.

**Slide 36:** Luminance

**Slide 37:** Size

**Slide 38:** Shape

**Slide 39:** Hue

**Slide 40:** Alignment

**Slide 41:** Orientation

**Slide 42:** Outline

**Slide 43:** Our brains are really good at both grouping and finding key details. Part of our job as designers is to use what the brain is already doing all the time and reinforce that activity with meaning. Our job is to understand the intentions of the people who use our sites and services, and create interactive environments that are organized in such a way that folks can easily orient themselves and make a reliable guess about what they should do next.

**Slide 44:** As I was writing this presentation, I thought that an alternative title for it — instead of **Making Sense** — might be **What Do I Do Now?** since this is the driving force behind every interaction big and small. How do I make the next decision? Where do I focus my attention now?

**Slide 45:** Each decision that a user needs to make in any process uses up a little bit of working memory. And the total amount of working memory we're using at any one time is something we call **cognitive load**. And when the cognitive load reaches the max of our working memory, that's when we get frustrated and give up or get mad.

**Slide 46:** People have all their free working memory available to a task only on the best of days. Most days, there are plenty of other things happening that are literally taking up space in our memory. Distractions, stresses, and fatigue all add to our cognitive load, leaving even less available for understanding how to do something new.

When possible we want to structure our experiences so each individual step a user takes is as meaningful and as simple as it can be.

**Slide 47:**  Using meaningful groupings is like creating a navigable decision tree. The first groupings we notice are our first decision —in which grouping should I focus my attention first? Then we sample a detail from that grouping. What's the purpose of that grouping? Did it confirm my assumption about its purpose? Does it have the information I'm looking for? If not, we go to the next grouping. Then, when we find a relevant grouping we look inside it to make our next decision. At each step we want to limit the amount of decision-making we expect of the user. Studies show that people have a much harder time if they're trying to decide from between more than seven choices. More than seven, you may want to reorganize groupings so users can make a simpler choice first.

**Slide 48:** And of course, these groupings should be meaningful. Remember the mystery house example from before —structure that gave the appearance of meaning without meaningful organization was even more frustrating than no structure at all! Beware of miscellaneous, grab-bag sections in your sites and services, like a sidebar that contains a half-dozen unrelated modules.

**Slide 49:** Using meaningful groupings to help users easily get the gist of an interaction is drawn from research into the visual parts of the brain and came out of studying visual design, but the concept can also inform how we design for blind users and is very applicable to understanding the needs of folks who are colorblind, or who use screen magnifiers. And it's also critically important to content designers.

**Slide 50:** Even though blind users navigating our sites with screen readers aren't perceiving our page groupings visually, many of these meaningful groupings still exist, and are, in fact, more explicit and important for screen readers. Some of the most common visual groupings are defined in our markup with semantic HTML and ARIA roles. Markup semantics, which ARIA extends, give canonical names to common groupings **Header**, **footer**, **main**, **body**, **section**, **nav**, **article**, **aside**, **figure**, and **lists** are all examples of meaningful groupings available to screen readers. In fact, semantic HTML and ARIA roles can give a great hint to designers about the types of groupings they should make sure are clear in their visual designs!

Blind users certainly use focused attention and working memory, and have limited cognitive load. Just as sighted users might use their eyes to scan groups and common elements, screen readers users can and do similarly scan and browse pages. Technology should enable the same type of gist/detail scanning that sighted users do with their eyes.

**Slide 51:** Other perceptual differences like color blindness and limited field of vision highlight the importance of layering methods of grouping and difference. Don't leave critical functionality ungrouped; with something like screen magnifiers, the field of vision is constrained, need to visually connect functionality.

**Slide 52:** And finally, many of the principles of grouping and distinction are critically important to content design. Chapters, sections, paragraphs, sentences and lists are common structural groupings that are considered the building blocks of writing. 

The techniques of Plain Language filter these building blocks through the lens of cognitive load and simplicity. 

- Use clear headings. 
- Keep paragraphs short. 
- Use lists instead of paragraphs when possible. 
- Stick to the point.
- Use parallel structure to highlight the differences between clauses. 

Each of these guidelines helps users easily scan to find the meaning of a group of text. In so many ways, our overall grouping structures of layout and design exist to support text. Our layout grouping should be informed by our content, and our content should, itself, be meaningfully grouped.

**Slide 53:** At the end of the day, all of this somewhat academic content is in the service of helping us better and more completely understand the people we serve. For us designers, none of this information is useful independent of user experience, no design is better because it better implements Gestalt groupings, no designer is more effective because they think of themselves as an engineer of attention. A design is better because it addresses user needs more effectively. If information about some of what we understand to be fundamentals of cognition helps us stay engaged with our audience, and helps us understand what kind of design decisions to try when we have a problem, then that, I hope, is also something of value.

**Slide 54:** For more information, you can find a number of good resources online. Here are a few things to search for: 

- Gestalt principles of grouping
- Max Wertheimer
- cognitive psychology
- attention
- cognitive load
- working memory
- unconscious pop-out
- selective attention test video

**Slide 55:** Q&A

**Slide 56:** Thanks for joining today’s USWDS monthly call. Next month, we’ll be digging into some of the results of our recent top tasks survey. We had more than 100 responses to this survey and there are some clear findings we'd like to share. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you next month!

{{< /accordion >}}

Join the Design System team as we take a step back and explore how our design decisions both support and are supported by the ways our bodies and brains perceive order and make sense of the world.

In this session, we'll discuss: 

* How does grouping affect perception?
* What is cognitive load?
* How can we use principles of cognition in the service of design decisions?

**This event is best suited for:** Designers of all levels

## Speakers

* **Dan Williams -** Product Lead, USWDS

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
