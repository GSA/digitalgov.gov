---
title: USWDS Monthly Call - March 2024
deck: How to build with U.S. Web Design System tools
kicker: USWDS
summary: Join the U.S. Web Design System team for a lesson on customizing and extending the design system.
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJIsdu6pqzwuH6ocAtOZ2fI_hHryn0lQ9es
date: 2024-03-21 14:00:00 -0500
end_date: 2024-03-21 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - design
  - software-engineering
  - user-centered-design
slug: uswds-monthly-call-march-2024
# zoom, youtube_live, adobe_connect, google
event_platform: zoom
primary_image: 2024-uswds-monthly-call-march-title-card
youtube_id: M2_SVDc_eCM
---

{{< asset-static file="uswds-monthly-call-march-2024.pptx" label="View the slides (Powerpoint presentation, 1.9 MB, 20 slides)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for March 2024" icon="content_copy" >}}**Slide 1:** Welcome everyone, to the U.S. Web Design System monthly call for March 2024 — This month we're celebrating Women's History Month (with shades of orange, teal, purple, and pink. As well as the first day of Spring, the Vernal Equinox, which was on Tuesday with shades of pink like a cherry blossom.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and here on-screen is my avatar: dark hair, blue sweater, collared shirt. Today my physical self is wearing a black and white checked flannel shirt.

As Jeannie mentioned, we are recording this call, and I'm happy to say we've started to be able to share the recordings of these monthly calls publicly. You can find pretty much everything from the last year's worth of monthly calls — back to January 2023 — on our website, at [designsystem.digital.gov/about/monthly-calls/](https://designsystem.digital.gov/about/monthly-calls/). We typically post videos shortly after the monthly call, and we also link out to the slides and the script, hosted at digital.gov. We've posted a link to our monthly call page in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today. 

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today?

We’ve got a very relevant new site launch, a couple product updates, and then we’ll spend the rest of the time talking about a USWDS component lifecycle model and our new approach to new-component proposals.

**Slide 4:** So let's get into it with site launches.

**Slide 5:** This month we're featuring [directfile.irs.gov](http://directfile.irs.gov), the Direct File Pilot from the Internal Revenue Service. Direct File is a new tax tool to file your federal taxes for free directly with the IRS, supporting tax filers in 12 states. The Direct File homepage features a simple blue and white layout, with the gov banner at the top of the page, and an informational site alert that says that the Direct File pilot is currently open to new participants. The hero section has an embedded video explaining the pilot, and the words "Join the IRS Direct File Pilot."

**Slide 6:** This is a great site to highlight in March, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel!

**Slide 7:** Now for a few product updates.

**Slide 8:** First USWDS 3.8.0. We've mentioned it the last couple monthly calls, and it is finally out now. I won't go into the details of 3.8.0 since we've discussed it so much recently, but check out the release notes for lots of details. We're pasting the direct link in the chat, it's with all our other releases and release notes at [github.com/uswds/uswds/releases](https://github.com/uswds/uswds/releases/tag/v3.8.0).

**Slide 9:** Next, new component discussions. We spent last month talking about our new component discussions, proposals, and the component lifecycle model. Well, we now have ten active component discussions on our discussion board:
* Common feedback
* CUI banner
* Glossary
* Spinner
* Tabs
* Toast
* Toggle
* Quote with attribution
* Skipto
* Sidebar primary navigation

If you're interested in any of these components and would like to be part of the discussion that helps make the case for the component, head over to our discussion board at [github.com/uswds/uswds/discussions](http://github.com/uswds/uswds/discussions), then go to "Component proposals". We hope you get involved!

**Slide 10:** We've also published three new accessibility test pages: **Icon**, **Table**, and **Typography**. We'll post direct links in the chat, but you can get to any new accessibility tests page by visiting the component's page on our website and selecting "Accessibility Tests" in the side navigation.

**Slide 11:** And finally, getting your feedback is critical for us to be able to deliver a design system that works for you. To that end, we’ve created a new webpage and signup form for federal employees who might like to participate in usability research with us.

You can find this new information on our website at [designsystem.digital.gov/about/research/recruitment/general-fed](http://designsystem.digital.gov/about/research/recruitment/general-fed) — and of course, the link is also in the chat. 

We're looking for federal employees who serve as designers, developers, content strategists, accessibility specialists, UX leaders, or in any UX/CX-adjacent role and have any level of experience and proficiency with the design system, from being an absolute beginner to a seasoned expert.

Feel free to go to that new webpage to learn more about our research program and what to expect, and sign up if interested. Also feel free to email us at uswds@gsa.gov with any questions you have.

**Slide 12:** So now let's get into our main event. Which is **Building with USWDS**. Today we're going to have a demo of theming, styling, and extending USWDS components: How to build on the components that USWDS delivers to deliver new things that we don't yet deliver. While doing so, we take a look at how we think about building and designing with the design system, and how we use tokens and other techniques to build new work that feels of a piece with the design system, not just in how it looks, but in the code itself.

**Slide 13:** And to help do this, I'd like to introduce two of my colleagues.

First, James Mejia, a contractor and a front-end engineer on the USWDS core team. James, can you introduce yourself and give a brief self description?

James: Hey there everyone, my name is James Mejia. Like Dan said, I'm a contracted engineer and I'm wearing a brown jacket for this chilly weather and I have short dark hair.

Dan: Cool, thanks James. 

**Slide 14:** And I'd also like to introduce Charlie Mahoney, a contractor and a front-end engineer on the USWDS core team. Charlie, can you introduce yourself and give a brief self description?

Charlie: Of course. Hey there, I'm Charlie Mahoney. My pronouns are he/him, I'm wearing a burgundy sweater and I have dark slightly longer hair, also a USWDS contractor.

Dan: Cool, thank you Charlie.

**Slide 15:** So before I pass it over to James and Charlie, I'd like to call out a couple things we'll be covering in the demo.

We're going to be looking at USWDS Tokens. We're going to be looking at Theme settings, Functions and mixins, Overrides and Stylesheet customization. We're looking at color contrast and a little bit at the structure of stylesheets and organizing your files.

So to that end I will throw it over to James and Charlie to help go through this demo.

**Slide 16:** DEMO

Charlie: Thank you so much Dan. So like Dan said, this is a new part of our tutorial we offer on our GitHub under USWDS tutorial. If you completed part one it teaches you how to get started with the design system, installing it, and setting up compile as well as creating what we like to call the USWDS sandwich and adding components to the project. In this second part we're going to take a look at theming, customizing, and extending the design system. We'll use the theme settings to do broad, wide sweeping changes to the design system add some custom styles to advance that and customize the components further than theme settings offer and lastly we'll create a custom component and use everything USWDS has to offer to really make it our own. How does that sound James?

James: That sounds fantastic Charlie, I'm excited to get started. I will be driving the code and browser so looking forward to your help in doing all these exercises.

Charlie: Absolutely! All right, what do you say we dive right in? Do you want to scroll down to the first section theming with USWDS components?

James: Okay, I'm in Part One.

Charlie: So what you're looking at here on screen is you'll see on the left side we'll have instructions available to you that you'll follow step by step to get started and on the right we have our card component and this is our standard variant card component right as you'd see on the component page and if you were to copy and paste the markup to your project this is exactly how it would appear. You want to take a look at that component page?

James: Of course, I have it right here. This is the USWDS card component page and at the top we see a little bit about the card component, you see the different preview for the variants. Right underneath that we have the component code that you can copy into your project or your tutorial as you follow along. We also see guidance about when to use or when to not use the card component as well as usability, accessibility, and other guidance for using the card component. If I scroll a little bit further down I think I see the section that you mentioned earlier about card settings.

Charlie: That's right and all these settings are just things that are available to you to make, like I said, broad sweeping changes to all the cards throughout your project. It'll give you the variable name and then a short description of what the theme setting accomplishes.

James: Okay, so changing these makes changes to all my cards.

Charlie: That's right, if you have any cards throughout your project it will affect them all effectively letting you customize them without having to go through and write a bunch of meticulous custom styles.

James: Hey, that sounds pretty good to me.

Charlie: I like it, let's do it. If you hop back over to that demo page you'll see a couple styles that we have selected to update. If you want to go ahead and give those a copy and then we can jump over into our editor and look at the USWDS theme file.

James: Sure, you said USWDS theme?

Charlie: That's right, so this file is where we will add all of our theme settings. What you're seeing here now is some theme settings that are set during the first part of the tutorial. It's important I would recommend completing this first step so you're ready for part two. So if you're joining us and jumping along, just make sure you complete those first steps.

James: Oh I remember these. These made some changes to the typeface and the banner, right?

Charlie: That's right.

James: Okay, so I paste it in my new settings and I think I recognize two of them because of the related card. What about this "border-radius-large"?

Charlie: So this border-radius-large allows us to update the sizing token for the large that we will be using in theme card border radius. It's a little bit larger than the standard large token and this will allow us to have a slightly more curved hard radius.

James: Okay, if you don't mind I'm going to swap over to the preview just to see what it looks like before  and then I'll jump back to the code, give that a save and then see what changed. Hey, they got rounder.

Charlie: Look at that, I like it, it's very modern looking.

James: Fluffy.

Charlie: And it's important to note, James is running our compile watch command which allows the system to recompile on saves and that's how he was able to make this change so quickly.

James: That's a good point. So what's next?

Charlie: Next, let's keep it going. We have a couple other settings if you want to scroll down for us, why don't we go ahead and update the typeset for our card header? Currently it's using a Serif font and is a good size but I'm interested in making it a little bit bigger.

James: Interesting, so this setting is not like the other settings. It has three different types of of changes, customizations?

Charlie: Yeah, let's go through each of them real quickly. We have the Sans font. This is updating from the Serif to the Sans and if you look at the top of this theme setting page we can see that we are actually updating the Sans font to Public Sans.

James: Oh that's right, I see it right here on line 12.

Charlie: That's right, and then we're going in and setting the font size to extra large, it'll bump up that font size for us. James: Okay. Charlie: Lastly, we have a line height token which is setting the line height to a little bit of a tighter line height.

James: Okay, so I've saved that and I'll go back to my browser and hit refresh just to see that change. Oh there we go.

Charlie: I like it.

James: How did you know about these settings and what it takes? How can I find that out?

Charlie: Yeah, so on the design system website we have a documentation page which features a large settings table if you want to open that up for the audience here.

James: Okay, there we go.

Charlie: You can see here these are specific to the card component but on this page you'll find all of our system settings as well as all of the component settings. You'll see the name of the token, the variable name as well as some defaults and descriptions. And to answer your question, you can see the type where we can see that for theme card header-typeset you'll see family, size, and line height are the types of tokens that it takes.

James: Yeah, I remember these settings. Here's the one that we just changed and the one that I asked you about, right? And there's "heading", "large", and 2 and these little tags are the ones that you just mentioned where I can find what values they accept.

Charlie: Absolutely and you can actually click each of those tags and it will take you to another page with more information on the tokens available to you and how to use them.

James: Okay, so I've clicked on size and I'm on the Font size design token page and I see the extra large that we entered so it'll be about 32 pixels once rendered.

Charlie: That's right.

James: Sounds good to me. Should I jump back to the demo?

Charlie: Yeah, let's go take another look at that. It's looking pretty good. Let's add a little bit more padding settings to give our card a little bit of room to breathe.

James: Okay, and I'll do that by copying this setting that says card padding perimeter 4, right?

Charlie: Absolutely.

James: So I'll add that here and save.

Charlie: Yeah, let's let it recompile and then let's go back to the demo and see what that looks like.

James: A little bit more breathing room.

Charlie: Absolutely, it's looking pretty good. Let's finish up this section by customizing some of our primary color settings. These are some systemwide settings that will let you update our primary color token. You can see on the card component it is using a blue button and that is set to primary currently. So let's try updating it to a nice indigo color.

James: Okay, and I assume you got these from the settings page as well?

Charlie: That is right.

James: Alright, I've copied and we'll paste.

Charlie: Absolutely. So one of the benefits here is using these tokens allows you to use more semantic language when adding these colors or discussing with designers instead of saying, "hey, let's make this card button indigo-60v", you can say, "hey let's let the card button use our primary color" and you can use this to set the primary to whatever styling needs your brand needs.

James: That's pretty convenient it's definitely a lot easier to remember primary than indigo-60v.

Charlie: I agree. Let's check it out and see what it looks like.

James: Oh look at that.

Charlie: It's nice, right? And because we set not just primary but dark and darker and lighter ones as well it'll set any styles that use those tokens so you can see he is hovering over the button and it is taking that primary dark token.

James: Oh yeah you're right, so it took care of all of this for me without me having to write custom styles.

Charlie: That's right, pretty convenient. Alright, so we've experienced playing with a couple of the theme settings but what if you want to take this a little bit further, what if there are some customizations you want to make that are not available with theme settings? Well luckily you're not out of luck when it comes to USWDS. What do you say we move on to adding some custom styles, James?

James: Yeah, let's do it. I'll scroll down to Part Two: Customizing card using custom styles.

Charlie: That's right, the first step of adding our custom styles is going to be to add a custom class to the markup so that we don't have the styles step on each other's toes and there's no specificity conflicts here.

James: Okay, I like the sound of that.

Charlie: Yeah, let's jump back over into your editor and we have a card, that html file, that is housing all of our component markup at this time. 

James: Okay, I found card html and it looks like the standard markup in the code example on the website.

Charlie: Exactly. This is exactly what you would copy and paste over if you were getting started with USWDS. So we have this outer div with a "usa-card" class. It is standard naming convention we like to prefix our classes with a two to three letter prefix to identify the organization that it belongs to so USWDS uses "usa" for all of our components. For the sake of this tutorial why don't we use "my"? We'll call it "my-card".

James: That sounds good to me. So you said I wouldn't want to use "usa-card" to add my custom styles.

Charlie: Yeah, that's right.  It could just lead into specificity issues down the road, unintended changes, and you know if we make an update to what the "usa-card" styles are, it might wipe out your custom styles and you wouldn't want that.

James: Oh no, not at all. That sounds pretty bad.

Charlie: That's right and in a similar fashion we're also going to want to make sure that we isolate all of our styles and keep things organized so why don't we create a new file to have all of our SCSS styles?

James: Okay, how do I do that? I've opened up my terminal.

Charlie: You open up your terminal, that's right, and then since James is opening up a terminal within VS code it is already at his project directory. If you open up one outside of this you might might have to change directories to get to your project path but since we're here we can go ahead and run the make directory command and we're going to add a components directory to our theme directory.

James: Okay, looks like that worked.

Charlie: Alright, so now that we have that directory we'll go ahead and create a new file within that directory. It'll be a CSS partial for our card component.

James: Okay so how do I create the CSS partial?

Charlie: I would run touch and then we're going to do the path that we just mentioned, theme components and we'll name it my card and since it's a CSS SCSS partial we'll prefix it with an underscore.

James: Sounds good, that looks to have worked.

Charlie: Alrighty, before we get to styling we want to make sure that USWDS knows to include these styles in its compilation so if you can navigate to USWDS theme custom styles, here is where you can see we are importing our project styles and we're going to go ahead and forward over this new stylesheet so it doesn't get left out when we compile our USWDS CSS. Perfect, now that we've completed this you can go ahead and close out of that file, why don't we go into our new card partial file and get styling.

James: Alright, let's do it. What do I need to do first?

Charlie: So if we want to make use of a lot of the tools that USWDS has to offer we are going to want to import the USWDS core package. If you go back to your demo and scroll down to the instructions you'll see exactly how you can do that.

James: So copy the same file, "uswds-core" in step 5, right?

Charlie: That's right, if you want to give that a copy and go back to our editor, we can paste it at the top using the Sass use directive and we're using it as *, the all selector. This allows us to use these with their name given to them by USWDS without having to prefix it with uswds-core color for example. You can just call the color function using color.

James: That's convenient, what's next?

Charlie: Let's hop back over to the demo and you'll see a couple styles that we're going to grab. This first one is going to target first our custom class selector and then the class that we want to override the styles. So it would be my-card, usa-card, container.

James: Alright, we're going to override the background of the card container, right?

Charlie: That's right. 

James: Because we didn't have a setting that was available to us.

Charlie: That's right and we don't want you to be limited by just what the settings offer.

James: Okay, so I pasted it in and hit save.

Charlie: We're using the color function which is built to use our USWDS color tokens if you were just to set background color and then use it it might not know what exactly that yellow token was but thankfully the color function allows you to use these tokens throughout your project.

James: Oh right, that's what the use uswds-core did.

Charlie: That's right.

James: Okay, so I'll refresh and I see my card update, looks pretty good.

Charlie: I like it, nice soft yellow just in time for spring.

James: Yeah, that's true. How can we continue to customize this?

Charlie: Well lucky for you we've picked out a couple other settings that we would like to show off so why don't you go ahead and copy that next group settings here. We're going to update the margin using some units and we're going to use the font weight using a font weight token. So in each of these we're doing just like we did above, targeting our custom class and then the classes of the styles that we want to override using the respective function with the tokens that they absorb.

James: Alright, I see those USWDS functions that you mentioned and I'll jump back to the demo and refresh and it's looking better.

Charlie: I like it. Bumped down the boldness just a little bit and increased that margin. I think it's looking pretty good, what do you think?

James: I'd say so.

Charlie: At this point we've now talked about a theming - making broad sweeping changes with the theme settings and writing custom styles to get a little bit more specific and add an advanced level of customization to the components on your page, pretty neat.

James: This is awesome and I didn't have to write too many custom styles.

Charlie: No, so now let's take a look at well, what if you want to take this further, use everything that we've gone through so far and maybe create our own component? Maybe card is close to what you want for your project but you need something a little more specialized and specific. So in this section we're going to take the principles learned so far using card and create a custom testimonial component to show off a quote.

James: Sounds good to me, I like specialized.

Charlie: To get started with the custom component let's first get started creating the skeleton of what the markup will look like. Go ahead and copy that markup we have an empty testimonial html page that you can pull up in the editor and get started.

James: I found it and just like you said, it's empty.

Charlie: That's right and if you were to compare this to the save the card component you'll see a pretty similar structure. We have our opening divs and then we have on our testimonial side of things we have a body and a footer and it kind of follows this outline set for us by card and just fits it a little bit more towards our needs.

James: You're right, it looks like the card skeleton.

Charlie: Why don't you say we get started adding some things for a card and actually flushing out the component.

James: That sounds great, let's do it.

Charlie: Alrighty, back on the demo page we have some text for you to use as the actual quote.

James: Okay, it's kind of a core requirement of the testimonial huh?

Charlie: Yeah, I'd say so and it's like it took the words right out of your mouth. Next let's go ahead and let's populate the footer section we have a little image for a profile photo for our 
"quotee" as well as a profile section to give them a name and a title.

James: Alright, "Mr. J" fake name.

Charlie: Yeah, and before we look at what that looks like why don't we add just a little more visual flare. Can you go to the icon component page and let's see if there's any icons we can use to help spice this component up.

James: Yeah, I sure can. I'm on the icon page.

Charlie: You'll see on the icon page all the things that we talked about that would be found on any component page for USWDS and some guidance and some accessibility guidance, everything like that. And you'll also find this beautiful preview where you can actually search to see what icons are available to you so let's start. Maybe type quote and see if there's anything we could use. Check that out.

James: How do I get this code?

Charlie: well you can actually see that it is a button if you go ahead and click that it'll copy the code right to your clipboard.

James: There we go, it's convenient. I'll go back to my editor and where do I need to paste this?

Charlie: Let's paste it right beneath the opening my testimonial div right at the top there and since we're going to want to style this in the future let's add a my testimonial icon class to our svg and why don't we go ahead and add some height and width attributes to add some semantic sizing to this.

James: Sure, I'll get that from the code example. How does it look?

Charlie: It looks pretty good to me why don't we see what it looks like on the demo page.

James: I've been wanting to refresh. My testimonial is looking a little off.

Charlie: Oh I thought it looked great.

James: If you squint your eyes.

Charlie: (laughing) We'll see of course right now it is just the markup but it does look like we are missing something, we don't see that quotation icon that we grabbed before. People who are returning to this tutorial from the beginning might remember that you must always check your assets to make sure that they fit your project needs. What is on the component pages might not be a one for one match to the structure of your project. Here you can see, by default it's going to assets image and sprite but with our project we are assets and then a a uswds directory. So why don't we go ahead and update that.

James: You said assets and then uswds because this is our custom project path. Charlie: That's right. James: Okay so I've updated that and saved and I should be able to refresh and there we go.

Charlie: Nice, we have the bones of our custom components why don't we repeat some of the steps that we outlined above and create a custom stylesheet partial to start styling this thing.

James: Okay, so I'll open up my terminal and help me out with the command.

Charlie: Yeah, we're going to run the touch command and we're going to go to theme components and we'll call this one my-testimonial.scss.

Charlie: Beautiful, and always remember we're going to want to add this to our theme custom styles so that it gets compiled with USWDS styles.

James: Oh that's true because I could be styling and not see anything.

Charlie: It's always important to check this. If you're adding your styles and you're not seeing anything, pro tip: you might be missing the forward here.

James: Okay, so my forward is set, what's next?

Charlie: To get things started we've provided some base styles to just get the ball rolling on the testimonial if you want to jump over to the demo you can copy and paste that in and you'll see here we are doing just like we did before we are importing the USWDS core package and we are setting some css properties using some of our tokens. So you'll see things like the unit function or the color function. On your own time while you're completing this go through and see if you can catch all the places that we are using the tokens.

James: I see, so in my custom testimonial stylesheet I see uswds-core like we said before so I can have access to these color functions and units.

Charlie: Precisely. What do we say we get into specializing this thing a little bit making it the best code it can be?

James: Do you mind if I take a peek first at what it looks like? Charlie: Absolutely.

James: Hey, looks good.

Charlie: Looking pretty good, right? I'm liking the soft purple.

James: Yeah, I'd say so. Are we done?

Charlie: No, we we had a little bit more. We have some more fun in store for you.

James: Are we going to make this better?

Charlie: Yeah, absolutely. Let's follow some of the USWDS core tenants to make this very readable and very reusable. You'll see the fill and stroke are both using color indigo-30 and if you wanted to update one that means you could probably want to update the other so to reduce some redundancy why don't we store that as a variable and then update those definitions so that you only have to change it once if you ever choose to change that color icon.

James: Oh that's smart. Okay so I've created the variable and I'm going to replace the previous fill and stroke with the variable. There we go. Now I can update it once and have both populated.

Charlie: That's right so we were using that color before. Let's go ahead and give it a refresh and make sure that color didn't disappear. Looks the same and I think that's a success for us then.

James: Okay, so far so good.

Charlie: Alright, now let's use some mixins to show a little bit more powerful customizations that can help reduce additional redundancy as well as use some of those same theme settings that we customized earlier on in the tutorial.

James: Okay, time to save those precious lines of code, huh?

Charlie: That's right.

James: So I'll copy over these includes that are highlighted and add them to- where do I need to add them to?

Charlie: This is going to go right into the my-testimonial class right up there at the top and we'll take a look at these. First thing we'll take a look at is what some of these are replacing so we have u-margin-x. This is a cool tool that lets you set the margin along a x axis so the left and the right instead of having to define them both you can just go ahead and define the one and it'll keep them nice and uniform.

James: That's convenient. So I can delete these.

Charlie: That's right and then you'll see we're also adding a utility mixin for some padding and using this mixin we're able to actually absorb some of the theme settings that we used at the beginning. So that theme-card-padding-perimeter set earlier, we can actually use that and add some uniformity between our card component and our new testimony.

James: I see. I'm using card settings so that it's like card but not exactly card.

Charlie: Exactly. Just another way that you can use the theme settings available to you to again, create more wide sweeping changes if one day you decide that all your cards including the testimonial need to change the border radius or something like that, you'll be able to keep it all uniform.

James: Yeah, I can just take what I need. So I've gotten rid of the padding setting that I set previously and I'm using the mixin now. I hit save and I really want to peek and see what it looks like now. Charlie: I think we should.

James: Okay, oh look at that. 

Charlie: Looks good. Looks just like the card right above it. Now let's play with some of the colors. Go ahead and let's copy those we're going to change the background color and the color and similar to what we were talking about in the theme setting. We're going to use these token names so we don't have to worry about indigo 10 we're simply going to change the color the text color to primary light and the background color to primary dark and keep things on brand with this tutorial.

James: Oh yeah, that's the thing we talked about where it's easier to remember primary over indigo-10.

Charlie: Yeah, let's give that a save and check it out.

James: Oh this looks nice.

Charlie: It looks nice and the large font looks okay but that smaller font it's getting a little bit harder to read. Those colors maybe a little bit too close.

James: Yeah, a little too faint for these old eyes.

Charlie: Yeah, so James is inspecting the color here, what does that say?

James: It says it does not meet WCAG standards for accessible text.

Charlie: That's unfortunate and you know we we have a grading system here at USWDS and we always want to code with accessibility in mind and you can use this grading system. We saw things like indigo-10 indigo-70 and we can assure that a difference or a magic number of 50+ will ensure AA across any two color values.

James: Oh I think I've seen this on the color tokens page. Right here - magic number.

Charlie: That's right. So like we said before, a difference of 50 will get you the AA requirement but that's kind of hard to see now that we've abstracted away to this primary, right? But luckily we have tools to help with that so why don't you copy that set text and background and we'll learn how to set the background and text color as well as check for contrast on the fly.

James: Okay, so I'll replace the styles that I just pasted and we'll replace that with set text and background and you said this way I don't have to worry about what grading it is?

Charlie: Right, so this will help us by not only setting the text and background at the same time but comparing them for us. Would you mind opening your terminal so we can see the compilation process?

James: No, I don't mind at all. Let me clear my terminal and hit save again and it looks like a warning popped up on the right hand side.

Charlie: That's right and if we read that warning it says that neither the specified prefer color token for the text, primary light, or the fallback ink have AA color contrast against primary dark. So this is checking the color that we set as well as a fallback of the default text color and saying that neither of them have correct color contrast and wants to warn you so that you can continue the testing and maybe find a color that is assured to have correct color contrast.

James: Okay so in this case they tried to help me out but it couldn't so it gave me a warning.

Charlie: That's right, USWDS does everything we can to keep accessibility in mind but once you start making customizations there's only so much that we can do on our side so we want to make sure to provide warnings when these customizations might start breaking things.

James: So how do I fix it?

Charlie: Why don't we use one of the other tokens that we set and change it to primary lighter and see if that does anything for us.

James: I was going to hide my terminal but I wanted to check to see if the error was gone and it looks like it's gone.

Charlie: I think so. Why don't we go and take a look at our brand new component to see how it's looking.

James: That's much better.

Charlie: I think so and just like that James, you've learned about setting wide-sweeping theme settings and changing all the instances of a card all at once without writing custom styles, advancing that to writing custom styles and adding a little bit more personalization that beyond what theme settings offer and then taking everything USWDS has to offer including mixins and functions and tokens to create your own component and it's looking pretty good.

James: I'd say so, look at how beautiful that is.

Charlie: I like it. What do you think Dan? How do you like our new component?

Dan: Thanks Charlie, this is Dan and I really do think that this is one of the best USWDS tutorials I've followed all the way to the end. This is all part of a USWDS tutorial repo that we posted a link to in the chat and we'll call back again later. Like James and Charlie mentioned part one of the tutorial and this is something we did about a year ago when we looked at part one and part one is really about like getting up to speed with the design system, installing it into a project and beginning to connect it to your project's existing styles so you can add USWDS incrementally into a project. And then as you follow along into part two, this part that we just looked at today, is like okay what if we want to begin to build more stuff with USWDS and begin to develop a higher level of integration between the design system and our project. So when you go and you visit that tutorial and you try to do it yourself you'll start from the very beginning and go all the way from nothing to building your own simple USWDS components. Now I'm going to share my screen and pop back over to the slides. 

**Slide 17:** Thank you James and thank you Charlie! There's a lot of stuff  enclosed in that tutorial and if you're interested it does make sense to just go and do it yourself to get a sense of of doing it and what we're actually talking about here. But when we're building with USWDS there are a few things I think we want to keep in mind. First, that we want to use USWDS tokens whenever possible when we're setting colors, when we're setting font sizes, when we're setting spacing units, use those tokens, use those pallets to build your new stuff. That's  the fundamental and lowest level way that we can begin to connect to all of our sites together by using the same  same pallets. And get familiar with settings. There's a lot of power in settings and there's a lot that you can begin to do in your project to tailor it to what your project needs without even modifying a lot of CSS. Just with a few settings you can  do some meaningful things. It's important to override our USWDS Sass, our stylesheets with project classes just like we made "my-card" that allows us to move our overrides into a separate section so it doesn't risk getting clobbered by updating USWDS, helps with specificity, keeps everything organized and separated. And that you can you can build with existing components that when we were looking at developing our testimonial component there are things that we could take from card.

We can use buttons in other things, we can use the grid, we can- when we're building new things, how can we use some of the existing design system components to give ourselves a starting point for something new. And really just to experiment with confidence that the design system really is meant to be building new things and to be  really trying to engage with your audience and to keep pushing. There are some things we like to do consistently again and again using USWDS tokens, using the banner, using other common components, but there is room for experimentation and you should experiment with confidence with the design system.

**Slide 18:** You can follow this tutorial today. [github.com/uswds/uswds-tutorial](http://github.com/uswds/uswds-tutorial)

**Slide 19:** Q&A

**Slide 20:** Thanks for joining today’s USWDS monthly call. We'll be back in April with an introduction to Web Components, the technology we're working toward as a design system. 
If you have a question we weren't able to answer in the call, or thought of later, please head into our public Slack and ask it there. We'll be around after the call to answer questions.

Have a great day and we'll see you next month!

{{< /accordion >}}

Join the U.S. Web Design System team for a lesson on customizing and extending USWDS. You’ll learn how to build new components that look and feel consistent with existing components.

You’ll learn to:

* Work with design system settings
* Apply tokens consistently with Sass functions and mixins
* Avoid style conflicts when overriding defaults
* Use tools for ensuring proper color contrast in every context

**This event is best suited for:** Developers who have basic to advanced familiarity with the design system.

## Speakers

* **Dan Williams** **-** Product Lead, USWDS
* **James Mejia** **-** Developer, USWDS Contractor
* **Charlie Mahoney** **-** Developer, USWDS Contractor

## Join our Communities of Practice

* [USWDS](https://designsystem.digital.gov/about/community/)
* [Section 508 IT Accessibility](https://www.section508.gov/manage/join-the-508-community/)

*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@gsa.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
