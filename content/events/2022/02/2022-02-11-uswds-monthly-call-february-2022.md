---
title: "USWDS Monthly Call - February 2022"
kicker: Moving Toward a USWDS API
summary: In this event, we will explore possibilities for a component API for the U.S. Web Design System.

host: U.S. Web Design System
event_organizer: Digital.gov
registration_url: https://www.eventbrite.com/e/uswds-monthly-call-moving-toward-a-uswds-api-feb-2022-tickets-267702765177
date: 2022-02-17 14:00:00 -0500
end_date: 2022-02-17 15:00:00 -0500

# See all topics at https://digital.gov/topics
topics:
  - design
  - api
  - uswds
# See all authors at https://digital.gov/authors
authors:
  - dan-williams
slug: uswds-monthly-call-february-2022
# zoom, youtube_live, adobe_connect, google
event_platform: zoom

---

[View the slides (PowerPoint, 13.4 MB, 75 pages)](https://designsystem.digital.gov/files/monthly-calls/uswds-monthly-call-february-2022-distro.pptx.zip)

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call Script for February 2022" icon="content_copy" >}}

**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for February 2022. And, for February we're celebrating Black history month (with a red, gold, green, and brown logo), Valentine's Day (with a logo in shades of pink), and Washington's Birthday (otherwise known as Presidents Day — with a red, white, blue, and gray logo). 

**Slide 2:** My name is Dan Williams, and I'm the USWDS product lead and this is my avatar, which maybe looks a bit like my best self — bright-eyed and positive perhaps! Thanks for being here!

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera.

I’d also like to remind you that all attendees must abide by the TTS Code of Conduct, which is available at handbook.tts.gsa.gov/code-of-conduct. We’ve posted the link to the code of conduct in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? First we'll show off three excellent new site launches. Then I've got a handful of design system product updates. And then we'll take a look at what is means to work toward a USWDS API — some of the opportunities we see, the problems were trying to solve, and how we're thinking about this challenge.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** First up, https://www.childtaxcredit.gov/, a new site to help folks with children claim their new child tax credit. The homepage shows a big bright picture of a father and his kids, along with buttons to Get your Child Tax Credit and Check your eligibility. Also of note is a language switcher in the top-right corner, that points Spanish speaking users to the Spanish-language version of the site.

**Slide 6:** Next, https://www.doioig.gov/, the website of the Office of the Inspector General for the Department of the Interior. If you use the USWDS Identifier, it includes links required on all government web sites. One of those links is to your agency's Office of the Inspector General. For the Department of the Interior, their OIG homepage shows a large image of the coronavirus, the words "pandemic response oversight," and a big red button in the top right corner that reads "report fraud, waste, and abuse."

**Slide 7:** And finally, https://www.dhs.gov/, the website of the Department of Homeland Security. We were pleased to work with the DHS team early in their redesign process, and we're proud to see what they built. The DHS team worked hard to build a site that uses the design system as close to its default settings as possible, and the result is a site and a homepage that's immediately identifiable. Their homepage is a clear white and DHS blue, gov banner at the top of the page, search in the top-right, and hero section featuring DHS personnel, and a message that reads "a strong year of progress at DHS".

**Slide 8:** Congratulations, and great work, everyone! Each month there's a lot of hard work reflected in these humble screenshots. Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 9:** So, about sending us an email. After a couple good years of service, our uswds@support.digitalgov.gov email address is retiring. Starting this month, we're changing the USWDS support email address. I know everyone has come to know and love uswds@support.digitalgov.gov and particularly how it runs tripplingly off the tongue and typing fingers, but over the coming month we'll be phasing it out in favor of a new address. So, today let's raise a glass for uswds@support.digitalgov.gov and say hello to:

**Slide 10:** uswds@gsa.gov. Moving forward, if you'd like to get in touch with us, send us a note at the simple and straightforward uswds@gsa.gov. In fact, you can use that email address today — and you should! So update your address books, and tell your friends.

Behind the scenes, we're moving to a new email ticketing system, and while in the best case this should be a "who cares why are you telling me this" thing, there may be a few hiccups as we make the transition. If you see an email coming from "IT Service Desk" after emailing us, it's probably us. We hope that within a week or so all our emails will be obvious and clearly from USWDS, but if you've emailed us and haven't heard anything back, check in again — we're still there, and we're still ironing out the quirks.

**Slide 11:** So now, a few product updates.

**Slide 12:** So, moving on to design system releases. USWDS 2.13.2

**Slide 13:** Improved submenu item targets in the Header: We're making the touch and click target bigger in header dropdown menus.

**Slide 14:** Improved ARIA markup in the Combo box: We improved the accessibility of Combo box by including the proper aria-control property on the select.

**Slide 15:** Removed inline styles from GitHub icon: We improved the markup of the Github icon to prevent a possible conflict with common  Content Security Policies which can flag use of inline styles.

**Slide 16:** Improved accessibility of disclosure buttons in mobile Footer: We improved the accessibility of the large footer by assuring that each collapsible section is triggered by a proper button.

**Slide 17:** And that's USWDS 2.13.2 — available next week.

**Slide 18:** We're also gearing up for a new release of the USWDS 3.0: Beta 3 — which gets us to Sass Module support! We're still working through the finishing touches on this, but we'll have a version of USWDS with Sass module support next week. Next on our list is making it as easy as possible for teams to use this new module-based Sass in their existing codebase.

**Slide 19:** And that's USWDS 3.0 Beta 3 — as I said, also available next week.

**Slide 20:** Toward a USWDS API

**Slide 21:** Why do we even use design systems? Why are they powerful?

**Slide 22:** 

* Speak the same design language
* Start building faster
* Share solutions
* Coordinate design across a large organization

By that measure USWDS is pretty successful.

**Slide 23:** But what about staying in sync over time? Coordination isn't just starting from the same styles, it's staying in sync as the design system improves and matures — and this is where USWDS begins to break down a bit. An effective design system doesn't just scale design expertise at a single moment in time, it connects projects so projects can grow and improve together over time.

**Slide 24:** Here's what we'd hope this kind of design system — with connected improvement over time — would work: We'd have a network of projects connected together with the design system as the central node — either directly, or via a parent design system that is, itself, connected to USWDS.

**Slide 25:** As teams implement the design system and adapt it to their needs, they learn how the design system can improve — where there are bugs, accessibility issues, or any place what the design system provides isn't as effective as it should be.

**Slide 26:** These teams can make a change, or a fix, or let USWDS know that there's a problem.

**Slide 27:** Then USWDS picks up the improvement. We fix it at the design system level, and we make an update to our code.

**Slide 28:** We push the improvement out in an update. Then downstream projects install the update, and the improvements scale across the network of design system users.

**Slide 29:** That's the ideal case. And that's where we can really see the power of a design system — not just as a one-and-done thing, but as a way to evolve together and at scale across the whole project network, over time. The whole network benefits.

**Slide 30:** Today, it's not quite so simple or so effective. And this is because it can be hard to stay in sync with the design system, and it takes effort to update to new versions — the more we change in an update, the more effort it can take.

**Slide 31:** Back in the halcyon early days of a design system all is well. Everyone's in the same place, everything's new and everyone's in sync!

**Slide 32:** But if it takes energy to update and stay in sync, not every team will be able to do it — or be able to do it at the same speed. The harder it is to update, the bigger the difference between teams that can do it and teams that cannot.

**Slide 33:** Fragmentation grows with each new version.

**Slide 34:** But the design system can't just stop evolving. It can't freeze or stop maturing. In the world of software development, to stop is to begin to die.

**Slide 35:** And with each change, not only does the fragmentation widen, but the effort needed to migrate to the current version grows and grows. This tech debt only gets bigger and bigger over time. Teams that don't have the resources to stay up-to-date will only find it more and more difficult to migrate when it's really needed.

**Slide 36:** And now just scale this issue up in time and footprint. The more the design system grows, when updating is hard, the problem gets bigger and bigger. So it's important to address these updating and migrating issues as soon as possible. Like planting a tree — the best time was probably a couple years ago. But the next best time is now.

**Slide 37:** How can we reduce breaking changes while allowing product evolution? As we saw in our September monthly call from last year, breaking changes are at the heart of this difficulty, where a breaking change is defined as a change in our source code that can require downstream change to for our users — a change to how people and machines use the design system code — a change to what's called the Application Programming Interface, or API.

**Slide 38:** But what is an API? APIs are the explicit connections between applications. They're the user interface for code.

**Slide 39:** They're like little predefined inputs and outputs: the way our application says "do this and get that."

**Slide 40:** Hook them up properly and get predictable results.

**Slide 41:** But if the user interface changes, the connection breaks. If you "do this" and no longer "get that," the interface is broken.

**Slide 42:** So how does this work in practice? And what does this mean in the context of USWDS? How does the USWDS API (or the lack of one?) keep the design system from reaching its potential, and what might we do to address this problem?

**Slide 43:** To work through this issue, I'd like to introduce you to a different kind of analogous product: a magical machine I've invented. It's called the VirtuWheel.

**Slide 44:** Say hello to VirtuWheel: It's a pretty cool piece of magical technology. It can actually create a real wheel out of pure information. Just set it up, connect it to your car, it'll build a new set of wheels for your car every time you use your car. Set it up, connect to the internet, and get a real wheel. It’s the future of wheels.

**Slide 45:** But VirtuWheel is a little complicated. What we ship to you are our best-in-class blueprints and you do have to assemble it yourself. Oh but it's incredible… once you put it together. It connects to the internet. You assemble a matrix of sensors, assign each sensor a unique name, which corresponds to an instruction set that tells the machine how to build a part of the final wheel. The instruction set is called VirtuWheelOS, and it connects each of the sensors, by name, to its individual definition.

**Slide 46:** And there are all kinds of sensors. There are bolt sensors and rim sensors. Tread sensors and air pressure sensors. Nuts and washers have sensors too! We made a sensor for every single part, even the ones you've never heard of! Just put them all together in the right arrangement and you're good to go!

And if you need VirtuWheel for a bicycle or a tractor, we have a special set of blueprints for those too. It does have all different sensors, though.

**Slide 47:** But when all those sensors and connectors are setup and in the right place…

**Slide 48:** …it works!

**Slide 49:** You just generated a just-in-time real-deal wheel you can drive on.

**Slide 50:** Hey, you installed your VirtuWheel, great! Now, good news and bad news. First, we learned that VirtuWheel is not as effective on icy roads as we were hoping. And it's susceptible to corrosion in extreme winter conditions as well. Glad we caught these issues early.

**Slide 51:** And we have a fix. Just download VirtuWheel OS 1.1… and follow the instructions for changing the order and naming of all the sensors in your version. Make sure not to install VirtuWheel OS 1.1 without reordering and renaming your sensors — your wheel may behave… unpredictably.

**Slide 52:** And now VirtuWheelOS 1.2 is out now, too. It builds on the improvements in VirtuWheelOS 1.1 to deliver an even smoother ride. Just follow the instructions from VirtuWheelOS 1.1, then make the additional changes outlined in the VirtuWheelOS 1.2 release notes. We include all new blueprints with each update!

It is a bit technical. Hopefully you still have the person around who installed the original VirtuWheel.

**Slide 53:** Before you know it, it becomes too much work to keep up with the changes to VirtuWheelOS. And when VirtuWheelOS 2.0 comes out, all it sounds like is work.

Not only that, but some folks with newer cars are frustrated with VirtuWheel for another reason. VirtuWheel only initializes its wheel when you turn on the car. Some newer car makers want the ability to press a button on the dashboard to change the wheel mode from, say, normal to ice mode or off-road mode. Some imagine changing the wheel mode automatically, based on sensors in the wheel itself. But VirtuWheel doesn't support this — you have to turn the car on and off to trigger a new VirtuWheel.

**Slide 54:** VirtuWheel is amazing: it can make a real wheel out of pure information and magic! But it's complicated because not only do you have to build it yourself, but VirtuWheelOS depends on how you build it, and the specific names of all the sensors you installed, and their arrangement. It's frustrating that it's as complicated as building an actual wheel to know how to build a VirtuWheel!

One of the many issues with our VirtuWheel is that it really doesn't have an interface. The interface is, essentially, how you build it. The interface is the name of each individual sensor and how those sensors have been installed. That's why updates to VirtuWheelOS can be so complicated: To change it, you have to rebuild it every time. The wheel may be virtual, but the sensors are not — it's your responsibility to make sure they're up to date with the OS.

**Slide 55:** That's when someone invented the Virtual Sensor. That's right. If we can make a virtual wheel, why use virtual sensors to build it? Why require users to assemble it themselves?

**Slide 56:** This was the proposal that made jaws drop at the VirtuWheel research and development department annual meeting. The team showed off a new VirtuWheel device that used virtual sensors defined by VirtuWheelOS to build the wheel. They work just like real sensors! They output a real wheel just like the other sensors.

**Slide 57:** But now you don't need to assemble it. All users had to do was attach one simple device to their vehicle and it made a wheel. It automatically connects to VirtuWheel OS. No setup required.

**Slide 58:** And what's more, the new device has a control panel.

**Slide 59:** Now you control your VirtuWheel with a control panel, instead of by building a new wheel for each purpose.

The control panel has three dials: vehicle, radius, and condition. Instead of building new devices each time, you just set some settings.

**Slide 60:** Choose Car and the device makes a car wheel. You can set the vehicle type to car, bike, or tractor.

**Slide 61:** Choose Bike and the device makes a bicycle wheel. You can set the radius to small, medium, or large.

**Slide 62:** Choose Tractor and the device makes a tractor wheel. And you can set the condition to standard, ice, or off-road.

Inside, the new VirtuWheel does its magic, and reconfigures its virtual sensors and instruction sets.

The new virtual sensors and control panel made a huge difference to how folks could use VirtuWheel. It was much easier to set up and install — no messing around with blueprints and sensors. It was much easier to understand — there were just a few documented settings. And it was much easier to maintain as well.

**Slide 63:** Then the developers showed off something amazing that was never before possible with VirtuWheel: Automatic puncture fix and zero-friction bearings. This could make a huge difference for safety and performance, but it required a massive overhaul to the wheel sensors. With earlier versions, folks might expect to spend hours or days rebuilding their VirtuWheel to get these improvements, but with the new architecture, all they needed to do was update the OS, the virtual sensors arranged themselves automatically, and users just got the new, better wheel.

**Slide 64:** As long as VirtuWheel didn't change the settings on the control panel, users would get the wheel they expect, with any improvements, without all the effort. Now it really did seem like magic.

**Slide 65:** No blueprints.

**Slide 66:** No sensor building.

**Slide 67:** Now the settings, not the internal structure, are the interface. But someone raised an objection: What about the hobbyists? They love tinkering with VirtuWheel and getting their hands dirty understanding the sensors!

Not to worry said the engineers — anyone can still open up the machine and tinker. They'll just be tinkering at a different level. Those who like to tinker can tinker and those who don't care at all about what's going on inside the machine never have to think about it.

What about the settings on the control panel itself, asked a stakeholder? How do we know if it fits all the use cases our users need? How do we build the best, most useful control panel, asked another? And how can we make sure that our new VirtuWheel is compatible with all the different ways folks are building modern vehicles, asked a third?

Well, the engineers replied, we'll have to do the best we can at first, ask what folks need, and learn how our audience is using VirtuWheel. We'll look at what architecture is most interoperable. We'll do our best, and iterate on the control panel as we move forward with the product — but now, at least, we're asking the right questions.

**Slide 68:** When we think about what we're building with USWDS, our components are essentially similar to the VirtuWheel, instead of making wheels for cars, we're delivering buttons, form fields, custom lists, modals, cards, etc. for websites and services. But our components share the original VirtuWheel's implementation and maintenance issues. VirtuWheel's blueprints, sensors, names, and definitions are our markup, class names, and styling.

And when we think about a component API — an application programming interface — just as with VirtuWheel, we're talking about abstracting all of that internal stuff away, and focussing on the control panel: what settings does the component need? what content does it accept? and how does it connect to the rest of the service and other components?

For each component, we need to ask: What does its control panel do? what inputs and outputs does it have? and what's the shape of its power cable, essentially — does it have three prongs or two?

**Slide 69:** We'll need to think not only about what a component is, but what a component needs to do. I believe this has significant overlap with some of the thinking around semantic markup and the priorities that lead to the development of HTML5. This, for instance, is what led us from the `<b>` tag to the `<strong>` tag. Both tags are rudimentary APIs, but the modern `<strong>` tag helps us focus on the purpose, not output. It is, arguably, a more effective API because the naming convention, the abstraction, the thing that is meant to stay most consistent over time is the purpose of the element. Semantics and purpose is something we'll keep in mind as we think about a USWDS component API.
  
**Slide 70 & 71:** And this gets to the purpose and the power of an API: The API — the controls — are what stay the same so that everything else can change. The true importance of a button isn't in the specifics of how it's built — what's going internally to make a button appear — it's in what it does, it's purpose. APIs let teams focus on what the component is doing, and abstracts away everything else. It makes the "everything else" our responsibility, the responsibility of the design system. You can focus on things that are closer to your product and your mission: what the button says, how important it should be, and what action the button triggers. We focus on making sure it acts like a button for everyone that uses it: Improving its accessibility, perfecting its typography, and making sure it's doing everything you want it to do, as well as it can do it.
  
**Slide 72:** We see this as the next major paradigm shift in the story of the design system. USWDS 1.0 introduced a practical, reusable styleguide. USWDS 2.0 introduced a consistent language of design tokens. USWDS 3.0 will unbundle the design system and improve modularity. And as we move on from 3.0, our focus will be on resilience, maintainability, and interoperability — toward building a design system that can evolve at scale, together, for years to come.
  
**Slide 73:** In many ways, realizing the full power of the design system still lies ahead of us. So let's get out there and reinvent our wheels.
  
**Slide 74:** [Q&A]
  
**Slide 75:** Thanks for joining today’s USWDS monthly call. Next month, the monthly call will be on March 17, 2022, the third Thursday of the month, and St. Patrick's Day. We'll have a USWDS 3.0 Preview!
  
As always, I encourage you to join our community in the #uswds-public Slack channel so you can follow our progress, get answers, and contribute to the discussion.
  
Follow us on Github at github.com/uswds, check out our website, and visit designsystem.digital.gov/about/community to join us and your colleagues across government who are using USWDS.
  
Thank you, and see you next month!


{{< /accordion >}}

---

What would it look like to implement and customize our design system via a component API? 

Join us for a discussion of what might be next for USWDS after the release of USWDS 3.0 this spring.

The USWDS team will discuss how an API might help us work all together more effectively, and how an API might make it easier to maintain and update a USWDS project. 

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
