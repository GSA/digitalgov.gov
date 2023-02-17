---
title: USWDS Monthly Call - February 2023
deck: Using USWDS design tokens
kicker: USWDS
summary: "Join us as we take a deep dive into USWDS design tokens. We’ll cover:
  what they are, how they’re used, and how you can adapt them to your branding
  needs."
host: U.S. Web Design System
event_organizer: Digital.gov
cop_events: ""
registration_url: https://gsa.zoomgov.com/meeting/register/vJItdOitrTIjG0pADR0k0Ij_xeiSBknpJyE
captions: https://www.streamtext.net/player?event=BIS-GSA-JY
date: 2023-02-16 14:00:00 -0500
end_date: 2023-02-16 15:00:00 -0500
# See all topics at https://digital.gov/topics
topics:
  - uswds
  - open-source
  - design
slug: uswds-monthly-call-february-2023
# zoom, youtube_live, adobe_connect, google
event_platform: zoom\
primary_image: 2023-uswds-monthly-call-feb-title-card
---

{{< asset-static file="uswds-monthly-call-february-2023.pptx" label="View the slides (PowerPoint presentation, 1.4 MB, 67 pages)" >}}

{{< accordion kicker="Slide by Slide" title="USWDS Monthly Call - Presentation Script for February 2023" icon="content_copy" >}}**Slide 1:** Hi there and welcome to the U.S. Web Design System monthly call for February 2023.

This month we're celebrating Black History Month with shades of green, gold, orange, and brown, as well as Valentine's Day this week with shades of pink, and Presidents Day next week with red, white, blue, and gray.

**Slide 2:** My name is Dan Williams, he/him, and I'm the USWDS product lead — and this is my avatar: dark hair, blue sweater, collared shirt. I'd also like to mention that when we introduce ourselves in these calls, you'll hear things like self-descriptions and pronouns — these help everyone share the same context and know a bit more about who we are, whether or not you can see us.

First, I'd like to mention that we're recording this monthly call, so please refrain from turning on your camera. We will manually turn off any cameras to ensure the recording doesn't show us on camera. Unfortunately, while we are recording this call, we currently aren't able to share the video publicly.

I’d also like to remind you that by voluntarily attending this Digital.gov event, you agree to abide by Digital.gov’s community guidelines at [digital.gov/communities/community-guidelines/](digital.gov/communities/community-guidelines/). You can leave the meeting at any time if you do not agree to abide by these guidelines. We’ve posted a link to the community guidelines in the chat.

If you are in the Zoom app, you can use integrated live captioning by selecting the “CC” button on the bottom of the screen. If you prefer live captioning in a separate window, we've posted a link to the live captioning in the chat.

We'll be posting other links and references into the chat as we go along, and I encourage you to ask questions in the chat at any time. If any member of our team can answer your question in the chat, we'll do so, otherwise there'll be some time for questions and answers at the end of the hour. Also, be sure to introduce yourself in the chat as well — it's nice to know who's here. It's good to have you here today.

For those of you who find the chat distracting, you’re welcome to close or hide the chat window during the main presentation. You can reopen it later during the Q&A session at the end of this call.

So thanks! And, with that, let's get started!

**Slide 3:** So what's our agenda for today? First we'll look at a few great new site launches. Then I'll give a quick update on what to expect in the next USWDS release. Then I'd like to give you a heads up about an important survey we're running right now. And then we’ll spend the rest of our time here today talking about design tokens!

We ought to have some time left at the end for Q&A. So let's get right into it.

**Slide 4:** It's been a couple months since we've called out any site launches in the call, but over the last few months we've had a number of notable ones that are well worth your attention and kudos!

**Slide 5:** First, [justice.gov](https://www.justice.gov/): The website of the U.S. Department of Justice. The mission of the Department of Justice is to uphold the rule of law, to keep our country safe, and to protect civil rights. The homepage shows a gov banner, and a bold and crisp Department of Justice header, with a large gold hero section that reads "Celebrate Black History Month." Congratulations to the team on this design milestone!

**Slide 6:** Next, [opm.gov](https://opm.gov/): The website of The U.S. Office of Personnel Management. OPM serves as the chief human resources agency and personnel policy manager for the federal government. The OPM website shows a clean and inviting header with the OPM logo. In the hero area, we see a collage of images, and the text "Halp build a better America." Nice job!

**Slide 7:** And finally, [ssa.gov](https://www.ssa.gov/): The website of the Social Security Administration. Social Security provides financial protection for our nation’s people. SSA administers retirement, disability, survivor, and family benefits, and enrolls individuals in Medicare. The ssa.gov homepage get right to business with a focussed, action oriented homepage. We see the gov banner and an information banner at the top of the page. Then, after a concise header, we see a section focussed on common actions related to applying for benefits: before, during, and after. It's really inspiring to see such nice work.

**Slide 8:** Congratulations, and great work! Be sure to let our team know when a new site launches, either with an email or a note on the USWDS public Slack channel! 

**Slide 9:** Also, we're close to releasing a new update to USWDS: USWDS 3.4.0

**Slide 10:** USWDS 3.4.0 has a ton of key improvements, including:
- Improve and normalize display of disabled inputs
- Improve contrast of incomplete step indicator steps
- Allow full-page width headers
- Remove grid dependency from usa-banner package
- Properly vocalize secondary navigation items

**Slide 11:** And that's not all
- Allow date pickers inside modals
- Improve wrapping of external links and icons
- Improve URL display for in-page navigation links
- Allow any spacing unit in alert padding settings
- Fixed a broken outline-05 utility

And finally, allowing custom file formats for @font-face rules — This one is particularly exciting as it came out of Q&A question from last month. The requestor drew up an issue in GitHub and we're on the cusp of releasing that new feature in the next release!

**Slide 12:** And that's USWDS 3.4.0: Releasing this month!

**Slide 13:** We are currently looking for ways to improve how content is labeled and organized on the USWDS site (with the ultimate goal of improving navigation). As a step towards that goal, we're hoping to discover what the most [important tasks](https://touchpoints.app.cloud.gov/touchpoints/0a9a9227/submit) are that our users need to do on the US Web Design System site. What are the main things you are looking to do? What are the things you're trying to understand? Please tell us by taking a 5 minute survey so we can make things better for you on the site. You only need to answer the first 3 survey questions for your response to be considered complete. The more responses we get, the better we are able to act on your feedback - thank you!

**Slide 14:** TALKING TOKENS

**Slide 15:** I'd like to introduce a couple members of the USWDS core team, who'll be helping answer some of these questions. First, I'd like to introduce Amy Leadem, a contractor and a front-end developer. Amy, do you want to say hi and describe yourself for anyone audio-only?

Absolutely. Hello everyone! My name is Amy Leadem and I have long brown hair, dark brown eyes, and today I am wearing a black and white striped sweater with a dark green motorcycle jacket.

Thanks Amy. I'm glad to have both you and James here with me today!

**Slide 16:** Next, James Mejia, a contractor and an engineer. James, do you want to say hi and describe yourself for anyone audio-only?

**Slide 17:** Thanks James! We'll hear more from Amy and James in a little bit. But first I'd like to talk about something important — and that's the fact that I don't like getting my hair cut.

**Slide 18:** I'm pretty much always anxious when I go out to get my hair cut because I'm not sure what I want, and even if I did, I'm still — even as a putative adult — not sure how to ask for it. I don't know the language and this prevents me not just from communicating well with whomever's cutting my hair, but from communicating with myself as well, to understand what I'm thinking and what I think about that. These things go together sometimes, knowing the language, and knowing what you want: If you can't express what you want with some clarity it can make it more difficult to know what choices you have to make, and know what options are available to you. 

So a world of infinite (or ambiguous) choice not only makes it hard to choose but can sometimes obscure the fact that there are choices to be made at all. Language and choice go together. Giving a choice a name makes a choice communicable and repeatable. And in a way, it makes the choice real.

**Slide 19:** Let's take another look at my avatar, and for now, let's focus on its hair.

**Slide 20:** In the world of haircuts — especially in barbershops — sometimes folks try to make choices communicable and repeatable with charts and numbers, giving hairstyles names, or organizing looks by the clipper number. Let's call my avatar's haircut the Shaggy.

**Slide 21:** And let's think about the hairstyle choices that might be available to what we might call an avatar builder. You may be familiar with this concept, but it's a way to create different avatars — to create different character images — with modular, swappable pieces. In the pre-digital era, you may have done this by pressing plastic noses into a potato, but today there's even more range and flexibility!

The USWDS design kit comes with an avatar builder. And this avatar builder includes a range of swappable hairstyles. Long ones like:
- Gentle wave
- Straight
- Curvy
- Straight strand
- Fro
- Shaved sides, and
- Bob

And short ones like:
- Caesar
- Short round
- Short flat
- Shaggy (that's me, I guess!)
- Short curly
- Frizzle, and
- Short dreads

**Slide 22:** Each of these hairstyles is a available choice or option — any avatar could have any one of these hairstyles. They're identified, distinct, and swappable. When we design with this avatar set, we don't need to craft a new hairstyle for every avatar, adjusting images and vectors to draw something from scratch. We can use a controlled vocabulary to choose a specific item we need instead of inventing a personal vocabulary for every decision.

**Slide 23:** These hairstyles, these individual choices — identified, distinct, and swappable — are what we could call hairstyle tokens available to our avatar kit. And here we get to the somewhat abstract definition: A **token** is a **name** that signifies an available **choice**.

Something like clothing can be tokenized in all kinds of ways. For example, there may be style tokens for shirts: oxford, aloha, and tuxedo, for instance. Each of these could have its own set of color tokens. There could be sizing tokens based on obsolete measurements of a neck, chest, and sleeve — or there could be the simplified sizing tokens of Small, Medium, and Large — what we commonly call "T-shirt sizing" in design.

**Slide 24:** Our avatar set doesn't bother with sizing tokens — it's one-size fits all. It just focuses on style and color. 
For example, I could swap my **Collar + Sweater** token for a **hoodie** token. Or a **Graphic Tee**, 
**V-Neck**, **Scoop Neck**, **Blazer + Crewneck**, or **Overalls**.

**Slide 25:** There are all types of choices available to an avatar builder and each of these types has a different type of token.
Just as there are hairstyle tokens, there could be tokens for something like skin tone. Here we see a range of skin tones from **Tone 0** to **Tone 6**.

**Slide 26:** We could add in eyewear tokens, like these for no token, **round** eyewear, **prescription 1**, **eyepatch**, **kurt**, **deal with it** sunglasses, and **prescription 2**.

**Slide 27:** And facial hair tokens, like **Fancy Mustache**, **Goatee**, **Light Beard**, and **Heavy Beard**. 

**Slide 28:** And eye and mouth tokens as well, like **Crying** eyes and a **Sad** mouth, **Teardrop** eyes and an **Eating** mouth, **Side** eyes and a **Serious** mouth, or **Closed** eyes and a **Default** mouth.

**Slide 29:** And as you layer tokens, as you apply them to a design, they can have a cumulative effect. Choice interacts with choice to produce what you might think of as the expressive range of the system: what types of outcomes are possible given the available choices? Sometimes, even limited tokens can have a wide expressive range, especially when combined with other tokens. 

But it's important to understand that with tokenized decisions, the expressive range may be narrow or broad, but it will almost never be comprehensive. These avatars may be evocative of the person they're meant to represent, but they will almost never be the best representation. The challenge with a system of tokens is to make it easier to get to good enough.

**Slide 30:** It can be a complex and deep question to consider what it means to be "good enough" for a set of decisions or options. In this hairstyle example, there are more than a dozen options, but there certainly aren't every type of hairstyle that exists. Creating a controlled vocabulary and a discrete set of options very often excludes other options for most sets. We include these hairstyles, but not those. We include these colors, but not those. The goal is to simplify choice by creating a simplified model of a complex reality, but just how we simplify the model can have some profound and important implications.

Looking at avatars helps us understand choices and palettes, but it can also highlight the problems with fixed palettes as well. What if you don't see your identity reflected in the available options? What's lost when we attempt to simplify? We have to be very sensitive to a line between simplification and oversimplification in a descriptive system and try not to lose anything critical in the model.

This is a sensitive issue, particularly when you're thinking about a controlled vocabulary that's meant to communicate something specific, particularly about a person or an organization's identity. Omitting certain types of choice and favoring others can be a type of bias, of identity erasure, and an unintended silencing that we need to work hard to understand and avoid. It makes sense that teams can be passionate about colors and fonts. Identity and expression matter in a real way.

We have to be careful with the power of "good enough" — understanding that it is a powerful design tool, and one that's necessary in any complex process — but one that has to be balanced by constant feedback, listening, and adjustment.

**Slide 31:** So when we talk about tokens, when we're looking at these avatars, we're talking about things like hairstyles, clothing, color, facial hair, and eyewear. For any system where design choice is an element of the system, design tokens are the specific choices available to users of that system. 

So what do design tokens look like in the U.S. Web Design system itself? For that I'd like to pass it over to Amy!

**Slide 32:** Thanks for that great illustration, Dan. Hello again, this is Amy speaking and I am here today to talk about how tokens are used in USWDS. To do that, instead of an avatar, let's look at something that's actually in the design system: a button.

In this slide, you see the customizable properties in a component like a button – just like an avatar. However, instead of changing things like hairstyle, clothing, and eyewear, we are changing font-size, font family, color, padding and margin, border radius, and shadow. 

For each of these properties, USWDS offers a corresponding palette of tokens to help you make decisions, changes, or adjustments.

**Slide 33:** In the design system, just as in the avatar, tokens are names for distinct choices and are used in place of hard-coded values in your project.

For example, if you want an element to have a small shadow, you could use the shadow token of 1, if you want it to have a larger shadow, use the next larger token: 2. You do this instead of writing the special syntax for a box-shadow property in your CSS, which for Shadow 1 would be: 0 1px 4px 0 rgba(0,0,0,0.1)

And tokens aren't random and they aren't arbitrary. They're designed to be good choices that work well together, and to give designers meaningful and distinct choices at common decision points.

**Slide 34:** To illustrate, let’s take a look at the USWDS spacing tokens. 

The diagram on this slide shows the distribution of USWDS spacing tokens between 0 and 120px. You may notice that the tokens aren’t exactly evenly distributed. Some are, but there are proportionally more sizing tokens at the smaller end of the sizing scale than at the top.

This is to give designers more choices where there is more perceptual and proportional difference. For instance, there can be as much perceptual difference between 1px and 2px as between 48px and 56px since the difference is proportionally greater between 1 and 2 than between 48 and 56, even if the absolute difference is greater between the larger sizes. 

USWDS spacing tokens use an 8-pixel base, which means one unit is the equivalent of eight pixels. This means that two units are 16 pixels, three units are 24 pixels and so on. However, at smaller sizes we also have half-units, moving in increments of 4px up to 24px.

As a side note, I should also mention that while we're talking about pixels when we're discussing spacing tokens here, in USWDS code, under the hood the design system converts all these values into units called rem, which tend to better respect screen magnification and user size preferences, improving the accessibility of USWDS projects.

**Slide 35:** The 4- and 8-pixel multipliers in USWDS spacing units have another benefit. Since every multiple results in an even number, any element built with USWDS spacing tokens will center evenly with any other. And multiples of 8 also divide evenly into common device screen sizes as well. Increments of 5px might make it easier to do the math in your head, but 8px has more important practical benefits. And one of the benefits of using spacing tokens, is that you can get away from doing math at all! Just increment up or down a spacing token to try larger or smaller options in your designs.

**Slide 36:** Design tokens can also use meaningful naming to help anyone make easier decisions. To dig into this, let's take a look at USWDS color tokens.

This slide shows an abstract visual representation of the RGB color space, or the way that computers can represent colors using a mix of red, green, and blue light. In this model, there are more than 16 million possible colors. There are a few ways to access RGB colors in web stylesheets, and one of the most common is with something called a **hex code**, or a six-digit hexadecimal string. Without deep familiarity with these strings, they can be pretty inscrutable.

Let's try to find the hex code 7-3-B-3-E-7. Where do you think it is?

If you guessed that it's a light blue, that's right! And you're much better at reading hex code than I am! If you aren’t versed in hex values, the way we typically think about colors doesn't have much intrinsic meaning. And what If you wanted something a bit darker than that shade? What hex code would that be? And what if you wanted to change to orange? Or just a warmer blue? How would you make that decision?

**Slide 37:** USWDS color tokens are a way to more easily understand color and color relationships without understanding either hex codes or much color theory. 

Instead of using codes, USWDS color tokens use plain language ROYGBIV names for colors. We've winnowed the 16 million colors in the RGB color space down into 25 color families and 3 grayscale families, with vivid variants for each of the color families. 

This means that there are color families like **red**, **blue**, **mint**, **orange**, and **blue-warm**. But how do you know if a color is a light color or a dark color?

**Slide 38:** This is where color grade comes in. Each USWDS system color token has not only a color family, but a grade, from 0-100 in increments of 10, plus one more at grade 5. Grades indicate the brightness of a color, from 0, which is pure white to 100 which is pure black. So a grade of 50 is right in the middle between pure black and pure white. Grade 5 is very light. Grade 90 is as dark as it gets before turning into pure black. 

Color families also have vivid variants for grades 5-80, indicated in the color token system with the suffix "v". If Blue-50 is a blue token of medium brightness, Blue-50v is a similar color, but more intense. We’ve normalized these grades across color families so that a color of grade 50 in one color family will be approximately the same level of lightness as a color of grade 50 in another color family. 

This plain language and clear structure helps not only with choosing colors and understanding color choices, but it makes it a snap to know what to try if you want to try a color that's a little darker or a little lighter. Just move up or down one grade increment!

Remember that hex code from earlier: 7-3-B-3-E-7? Well that's the absolute value for the USWDS color token Blue 30. Is it at least a little easier to visualize Blue 30 than 7-3-B-3-E-7? We hope that you think that it is!

**Slide 39:** And there's one more really useful benefit to using USWDS color tokens: simple contrast calculations.

We use a term called magic number to describe the difference between any two color grades, in any family. For instance, if you had **blue 80** and **gold 20v**, the difference between 80 and 20 would result in a magic number of 60. This is kinda magical because in the USWDS color system, any color pair with a magic number of 50 or higher achieves WCAG AA color contrast. 

So if your site has a background color of Gold 5, you know that you need to have text and buttons with a color of grade 60 or higher to assure WCAG AA contrast. You don't necessarily need to have grids of color combinations with big red Xs through half of the combinations, as long as everyone on your team understands USWDS color tokens and magic number.  

Also magic numbers of 40 achieve WCAG AA Large color contrast and magic numbers of 70 achieve WCAG AAA color contrast!

**Slide 40:** The last key token types I'd like to discuss are font family and font-size tokens. 

In a way, font family and font size tokens are a bit of a mixture of spacing tokens and color tokens. On this slide we see a similar distribution visualization, showing a strong cluster of font sizes at the bottom of the scale. The 10px **micro** token is a little of an outlier, since its small size is hard to read and only appropriate in limited situations. Most of the other tokens are clustered in the 12-20px range, which is where we find the most common reading sizes, both on desktop and on mobile devices. Then fewer tokens as we move up in size with a few steps along the way for common heading sizes and very large display sizes.

**Slide 41:** However, there are a few quirks with type size. And that's because different fonts can appear to be different sizes at the same absolute pixel size. For instance, 48px (or any size) in the Merriweather font displays much bigger than the equivalent size in the Source Sans Pro font. 

On this slide we see three fonts commonly used in USWDS projects: Public Sans, Merriweather, and Source Sans Pro. It may seem a bit subtle, but the Merriweather example is the biggest of the three, the Source Sans Pro example is the smallest of the three, and Public Sans is somewhere in the middle. 

Just as with color tokens, we want font size tokens to be as swappable as possible, and teams should be able to expect that a USWDS font size token like Font Size 20 has a similar size regardless of the typeface they're using. Just as the color token Red 50 should be about the same brightness as Blue 50. 

In order to make this work, we need to do some behind the scenes math in our stylesheets to adjust the size of specific typefaces to assure that they appear optically similar to other typefaces using the same font size token. 

**Slide 42:** We call this behind-the-scenes math "font size normalization". I'll toggle between this slide and the last slide a couple times so you can see the difference. 

You can see that the Public Sans example stays the same size, while the Merriweather example got smaller and the Source Sans Pro example got larger. When we use USWDS font size tokens to set font size, we get more consistency when changing fonts. If you've ever updated the fonts in your projects and seen dramatic layout shifts, this is what we're trying to limit with font size normalization.
 
**Slide 43:** The last concept I'd like to introduce is the concept of USWDS theme tokens. 

All of the tokens we've discussed here are what we call USWDS system tokens. They're the immutable set of design tokens available to every team that uses the design system. If one team uses **Red-50**, it's the same **Red-50** that any other team uses, and that goes for any other token, like **Font Size 6** or **2 Spacing Units**. System tokens provide a broad expressive palette of design options, and they're meant to be consistent across teams and projects. This means that they're not editable. Teams can't define a new color for **Red-50**.

But teams do have opportunities for customization, and that's in how they subset these large palettes of system token for their individual project.

No single project (except the design system website!) is going to use every single color available in the design system, and they probably don't want or need 21 different font sizes either. Not only are all these tokens overkill once your team's determined its design direction, but they can be hard to use and remember.

What exactly was our project's primary color? What were the font sizes we were using?

This is where theme tokens come in.

**Slide 44:** Theme tokens allows teams to create project-specific subsets of design tokens. I like to imagine a brand new box of crayons - you know, the big one with all the colors in them. These crayons are the system tokens. For every project, you’ll make a selection of colors from this box that are the best fits for your project. These colors are the theme tokens.

The key sets of theme tokens are Theme color tokens, Theme font-size tokens, and Font type and Font role tokens.

**Slide 45:** Theme tokens have different naming schemas than their system token counterparts. And they may be closer to the way you might name colors and sizes in non-USWDS projects: by use and with relative naming, like t-shirt sizing's Small, Medium, and Large. 

Essentially, theme tokens create a new set of project-specific tokens by mapping system tokens to a new set of theme token names, which are defined in USWDS settings. 

Here we see a simplified map that sets up nine t-shirt sizes for theme spacing.
- The 3xs theme token gets the font size 2 system token
- The 2xs theme token gets the font size 3 system token
- The xs theme token gets the font size 4 system token
- And so on and so forth from 3xs to 3xl…

Now instead of using a numeric font size token in your code, you'd use a project-specific t-shirt size instead. And if you ever updated the theme token values in your settings, your code would update to match. 

With theme settings, you have even fewer decisions to make when choosing tokens.

**Slide 46:** Some theme tokens, like color tokens, also introduce a level of abstraction into your token set, so not only are you tracking fewer tokens in your project, but the tokens you do use are grouped logically by how they're used in your project.

Theme color tokens are organized by use, with Primary, Secondary, Accent-Cool, Accent-Warm, and Base (which is typically meant to be the text color), with a lightness range from lightest to darkest.

For example, say you have selected **green-cool-50** to be one of your site colors. From there, you might determine that you want it to be the primary color in your palette. After you add it to your project settings, **green-cool-50** will automatically be added to any place the **“primary”** token is referenced. 

**Slide 47:** State color tokens are similar to theme color tokens — they just apply to error, warning, success, info, emergency, and disabled states. 

Here we see a set of system color tokens mapped to some of the state color tokens available to the design system. Just as with the theme color tokens, they allow a lightness range from lightest to darkest.

**Slide 48:** The final two types of theme tokens are font type tokens and font role tokens. These two types of tokens allow you to use more abstraction in your code by assigning font-face tokens to a few font types: sans, serif, mono, lang, and icon

**Slide 49:** Font role tokens provide a similar level of abstraction for the roles of **ui**, **heading**, **body**, **code**, and **alt**. The example on this slide shows that you can assign font type tokens to font role tokens — that is, instead of assigning a font-family token like "public-sans" to the ui role, you can assign a type-based token like **sans** instead.

**Slide 50:** We've covered a lot of ground here today, and I wouldn't be surprised if we have some good questions in the Q&A later. There are a lot of details related to tokens, and how we use them in the design system, but the important thing is if you're working on a project and you're trying to make a design decision related to how something looks, check out the design system website first, and check to see if there's a set of choices we've already defined with tokens. Who knows, it might just make your life easier!

And now I'd like to pass it to James who'll discuss how we actually use tokens in code! James?

**Slide 51:** Thanks Amy, this is James again, and I'd like to build on what Dan and Amy have presented and get into how design tokens work in USWDS code.

**Slide 52:** Let’s start with a little tour of a design token documentation page. In this slide we have a screenshot of the spacing units documentation. Spacing units can be used to set padding, margins, borders, and even breakpoints. We have documentation for every token type, which is a great reference when building out your project.

**Slide 53:** Here we see a reference table that includes all of the spacing unit tokens available with their values and an example so you can visualize the spacing units. We can see the one unit token is visually equal to 8px, as well as tokens for more fine-grained values such as 2px, 1.5.

**Slide 54:** At the bottom of the spacing units page you’ll see the many ways that you can access spacing tokens in code. We’ll take a closer look in the next slide.

**Slide 55:** This section shown here lists the available functions, mixins, utilities, and settings that accept the spacing unit token. 

This shows that you can pass unit token values into the units function, the at-media breakpoint mixins, declare them as values in system theme settings, or use them in your utility classes.

**Slide 56:** USWDS provides many ways to easily access all of these tokens. In this example we can see a token name passed as a value to a function. If you were styling and wanted to use a token as a CSS property value; you’d use the appropriate function. For example, in our last slide we saw that unit tokens can be passed to the units function. 

You can also add a font-family token to the family function or color token into the color function. USWDS will read the token name and return the appropriate value on compile. When you’re using tokens you can’t access the values directly. Tokens are just a name you pass to a function or mixin to get the right value when your code compiles.

**Slide 57:** Mixins follow a similar pattern, but instead of simply outputting a CSS value; it will output both the property name and the value. The “u” stands for utility and allows us to easily sort these mixins in our styles. The utility mixin name will also follow the utility class name for simplicity. 

So in our example, the mixin will take care of writing out a valid CSS property and value for us when the code compiles.

**Slide 58:** A utility class is a single purpose class that applies just that token to the specified property. Utility classes can be helpful when prototyping. USWDS generates utility classes for each of the available tokens for a given utility. Utility classes are structured so that you first name the utility you want to style, with the appropriate token value at the end.  Since utility classes are already included in the Design System, there’s no Sass compilation necessary. We’ll see more examples in the following slides.

**Slide 59:** And finally, you can use tokens to define your USWDS theme settings. Theme settings allow you to easily tailor the look of the design system to your project needs. You can make big changes across the theme easily by simply passing tokens to the theme settings variables.

**Slide 60:** Now we’re going to look at a more realistic example. We have two very distinct looking widgets. The first widget is compact and uses the primary theme color token to set a blue background with a sans serif font. 

The widget right below it has more padding, a transparent background, and it uses a serif font set in gold to match its border color.

In the code example on the right, we can see the tokens being passed to functions. These function and token pairs set the color, type, and sizing. In the first widget we’re accessing the primary color token with color(“primary”). We’re setting the text color with color(“white”), font-family is set with family(“sans”), the font size function takes two parameters to set the size passing “sans” as the family type and “xl” as the size. We need to pass both the family and size tokens to the family function because of USWDS font normalization that Amy discussed earlier. Finally we’re using one unit of spacing to set the padding.

The second widget uses the same functions as the first, but passes different token values. We’re using color(“transparent”) to set the background color. Color(“gold-20v”) to set the text color. Family(“serif”) for the font family. Size with “serif” and “xl” to set the font size. And we’re passing 2.5 spacing units to the units function to set the padding.

**Slide 61:** We can do the same with utility mixins. These utilities will take a valid token and write out both the CSS property and value. Like before, we’re setting the same properties on these widgets. But we’re using a different technique (which are utility mixins) to set the background color “u-bg primary”, the text color “u-color white”, the font size and family with “u font sans and XL”, and the padding with “u padding” with one spacing unit passed in.

Example two uses the same techniques to set the same properties. Except it uses different token values to set those properties.

**Slide 62:** An alternative method is to not modify the Sass at all, but instead modify just the markup. With utility classes, there’s no need to run or compile anything. Instead, we can add the appropriate utility class to the element we want to style. 

Here, the widgets look the same as the previous examples, but we haven’t touched the Sass at all. You might recognize these utility classes from the utility mixins we saw before. That’s because they follow a similar naming convention. In the first widget example, we’re setting the background color with bg-primary, the text color with color-white, the font family and size with font-sans-xl, and the padding with padding-1.

The second widget follows a similar pattern, but we’re using different token values at the end of those utility classes.

**Slide 63:** Tokens are flexible. You can use a combination of theme and system tokens. You can use tokens in functions, mixins, and utility classes based on what fits your project best. Thank you! Back to you Dan.

**Slide 64:** Tokens are a common language we share, whatever role we play in the design process: Designers, developers, researchers, writers, and managers. 

Tokens are a common language we share between projects — if you're working on a USWDS project, you're engaged with the language of tokens. Between roles, between projects, between agencies. 

Tokens are a common language that machines share. The stylesheets written for one project or component are shareable between projects. 

Sharing services, sharing code, when we use this shared language it makes it easier to build services that work together.

**Slide 65:** And I still don't like getting my hair cut.

**Slide 66:** Thanks for joining today’s USWDS [monthly](https://touchpoints.app.cloud.gov/touchpoints/0a9a9227/submit) call. Next month, we’ll be talking about design and the brain, how we use the brain's desire to group things to inform our designs. Please look out for an event feedback survey from Digital.gov. You'll get this in your email, and there's also a link in the chat. Your feedback makes a difference to us, so we'd appreciate the extra time it takes you to provide it.

Thank you, and see you next month!

{{< /accordion >}}

Join us as we take a deep dive into USWDS design tokens. What are they? How are they used? How can they be adapted to agencies’ branding needs?

In this session, you’ll learn how to: 

* Get started with tokens
* Set your own custom values
* Make accessible choices


**This event is best suited for:** Designers of all levels and skill sets plus front-end developers.

## Speakers

* **Dan Williams -** Product Lead, USWDS
* **James Mejia -** Engineer, USWDS Contractor
* **Amy Leadem -** Front-End Developer, USWDS Contractor

## Related Resources
* [https://designsystem.digital.gov/design-tokens/](https://designsystem.digital.gov/design-tokens/)


*This event is part of a monthly series that takes place on the third Thursday of each month. Don’t forget to set a placeholder on your personal calendar for our future events this year.*

## About the USWDS

[The U.S. Web Design System](https://designsystem.digital.gov/) is a toolkit of principles, guidance, and code to help government teams design and build accessible, mobile-friendly websites backed by user research and modern best practices.

* [The U.S. Web Design System](https://designsystem.digital.gov/)
* [Contribute on GitHub](https://github.com/uswds/uswds/issues)
* [Email Us](mailto:uswds@support.digitalgov.gov)
* [Join our community](https://digital.gov/communities/uswds/)
* [Follow @uswds on Twitter](https://twitter.com/uswds)
