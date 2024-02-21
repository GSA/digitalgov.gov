---
date: 2019-07-31 09:00:00 -0500
title: "Accessibility for user experience designers"
deck: ""
summary: ""
guide: accessibility-for-teams
image: guide-dap
primary_image: guide-dap
topics:
  - accessibility
  - product-and-project-management
  - user-experience
layout: single
---

## Adopt an inclusive design mentality.

If you have project-specific questions, ask your agency’s accessibility team.

## Adopt an inclusive design mentality.

- Celebrate accessibility requirements as a set of design constraints that help you create a better product for all users.
- Gain a basic understanding of the main categories of disabilities, limitations, or constraints that affect how people use digital services –
  - Vision disabilities – such as blindness and low vision, color blindness,
  - Hearing disabilities – such as deafness and low hearing, tinnitus
  - Motor problems – such as hand tremors, physical deformities or amputations
  - Cognitive disorders – such as dyslexia, dementia, or being sleep deprived
- Understand that almost everyone experiences some type of disability either permanently, temporarily, or situationally. For example: having only one arm is a permanent condition, having an arm in a cast is temporary, and holding a baby in one arm is situational – but in each case you’re restricted to completing tasks with one arm.
- Look for ways that making your product easier to use for folks with disabilities also improves the experience for everyone.
- Inclusive design principles [inclusive design](http://inclusivedesignprinciples.org/)
- [Microsoft’s Inclusive Design Manual](https://www.microsoft.com/design/inclusive/)
- When conducting user research, make sure the diversity of your participants reflects the diverse abilities, circumstances, and backgrounds of your actual users.

### Resources
- Inclusive design principles [inclusive design](http://inclusivedesignprinciples.org/)
- [Microsoft’s Inclusive Design Manual](https://www.microsoft.com/design/inclusive/)
- [Microsoft’s Inclusive Design Toolkit (PDF, 22 MB, 32 pages)](https://download.microsoft.com/download/b/0/d/b0d4bf87-09ce-4417-8f28-d60703d672ed/inclusive_toolkit_manual_final.pdf)
- [1.3 Adaptable (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#content-structure-separation)
- [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#content-structure-separation-understanding)
- Take an Accessibility 101 class to get a baseline knowledge of accessibility.
## Get familiar with the basic ways people use assistive technology.

- Some assistive technologies are likely only going to be used by people with specific, long-term disabilities. These include screen readers, switch devices, screen magnifiers, and others. Other kinds of assistive technologies may be more familiar to you and include voice control on your cell phone, ergonomic keyboards, or a browser’s native zoom function. People have different skill levels in how they use these technologies.
- Take an Accessibility 101 class, such as [Udacity’s Web Accessibility class](https://www.udacity.com/course/web-accessibility--ud891), to get a baseline knowledge of accessibility.
- Learn how to [navigate a webpage using only your keyboard]({{< link "/guides/accessibility-for-teams/front-end-development/" >}}) and learn how to use a screen reader, [such as VoiceOver on your Mac]({{< link "/guides/accessibility-for-teams/front-end-development/" >}}) so you can spot check new features when necessary. This can help you understand the technology itself, but keep in mind that folks who use it every day will often have their own strategies for using these tools.
- Observe people using assistive technology (AT) on your product or others. In some cases you may be able to find videos demonstrating how people use different strategies to interact with digital products.

### Resources
- [1.3 Adaptable (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#content-structure-separation)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#content-structure-separation-programmatic)

## Humanize accessibility for your team.

- Cover accessibility and inclusive design issues when conducting user research. Consider the native language, [literacy](http://contentsmagazine.com/articles/the-audience-you-didnt-know-you-had/), digital literacy, and digital access of your users as well as potential visual, hearing, motor, and cognitive disabilities.
- Incorporate accessibility considerations in your personas, user archetypes, or user stories. This could take the form of swapping out [accessibility issues in your personas](https://www.perpendicularangel.com/portfolio/publications/published-on-the-pastry-box/an-alphabet-of-accessibility-issues/) or creating standalone user stories focused on accessibility.
- Help your team learn about the experience of using your product with assistive technology. (Keep in mind that the way a person with a disability uses assistive tools may be very different from your experience of the tools.) This could include:
  - Ask each person on your team to turn off their mouse and trackpad and navigate the product using only their keyboard.
  - Find an appropriate [empathy prompt](https://empathyprompts.net/#diminished-problem-solving-skills) and walk your team through it.

## Tab order
### Why it's important
Do your wireframes or design mockups indicate a logical tab order for people using a keyboard, or other assistive technology, to navigate?

- Maria has tendonitis and is unable to use a mouse; instead, she uses the keyboard to navigate the web. When focus jumps randomly around the page she gets confused.


- A user should be able to use the tab key to navigate to every interactive element on a page.
- For links, users should be able to activate them with the enter key.
- For buttons, users should be able to activate them with either the spacebar or the enter key.
- Users should be able to tab through interactive items in a logical order, usually from left to right and top to bottom. Sometimes a logical order will be obvious to your front end team based on a simple layout, but in more complicated layouts you may need to identify the tab order in your wireframes or mockups.
- Each interactive element should have a visible focus state, work with your visual designer to make sure you’ve accounted for these.

### Resources
- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG20/quickref/#content-structure-separation-sequence)
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-focus-order)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-focus-visible)

## Focus
### Why it's important
Have you designed for logical focus behavior on interactive elements?

- Jiang is blind and uses a screen reader to navigate the web – when a modal pops up and doesn’t receive focus he may not even know it’s there.

### Steps to take
Work with your front end designer to identify any interactions on the page that require JavaScript or that can’t be created using default HTML elements. You should intentionally design how focus flows through these interactions.

### Resources
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-focus-order)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-focus-visible)
- [3.2.1 On Focus](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#consistent-behavior-receive-focus)

## Navigation shortcuts
### Why it's important
Have you included navigation shortcuts for screen reader and keyboard users?

- Rasheed is blind and uses a screen reader to navigate the web; he uses landmark elements to quickly navigate through sections of a webpage. 
- Li’s vision is fine but has trouble using a mouse, so he navigates the web using only his keyboard – he hates having to tab through all the links in the header navigation to get to the main content of a page.

### Steps to take

- Work with your front end designer to identify the [basic landmark elements](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) in your wireframes, particularly for complex layouts. Landmark elements are identified either through HTML5 semantic markers or through ARIA roles when HTML can’t identify something. You don’t need to be an expert on HTML or ARIA, as long as you know the basics.
  - header
  - nav
  - main
  - footer
  - search
  - form
- Include a “Skip to main content” link before the header for keyboard users. Keyboard users can’t take advantage of landmark navigation so a skip link helps them navigate more quickly. This link can be visually hidden but [should become visible when it has focus](http://webaim.org/techniques/skipnav/#hidden).

### Resources
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#content-structure-separation-programmatic)
- [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-skip)

## Forms
### Why it's important
Can all users understand and fill out forms?

- Esther is beginning to show signs of dementia and has trouble with short term memory loss, she needs context clues and instructions to stay visible on the screen or she loses her place. 
- Jerome uses a screen magnifier and when validation messages are shown off to the side he can easily miss them.

### Steps to take
- Make sure all inputs have descriptive labels that remain visible even after a field has been filled in.
- Try to use HTML form elements as much as possible, and test any custom interactions for use with screen readers and keyboard only.
- Use a straw or make a narrow window with your fist and view the page through that, scanning vertically but not horizontally. This can help you discover if content is hidden from users using screen magnifiers.
- Minimize the number of responses overall and that are displayed on a single page, but provide context clues throughout for people who might easily lose their place.

### Resources
- [USWDS - Form component](https://designsystem.digital.gov/components/form/)
- [USWDS - Form templates](https://designsystem.digital.gov/templates/form-templates/)
- [GDS’s guidance on form structure](https://www.gov.uk/service-manual/design/form-structure)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/#text-equiv-all)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/#content-structure-separation-programmatic)
- [3.2.1 On Focus](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#consistent-behavior-receive-focus)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG20/quickref/#minimize-error-cues)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG20/quickref/#ensure-compat-rsv)

## Images
### Why it's important
Have you identified which images are meaningful and which images are decorative in mockups?

- Carmen’s page didn’t load all the way and didn’t get to download the images. 
- Amanda is blind and uses a braille reader to understand the content of images. 
- John is looking for information with a search engine and needs help being directed to the right content (descriptive alt tags will improve search).


### Steps to take
- Images that are purely decorative shouldn’t be announced by the screenreader, work with your front-end developer to make sure they’re coded correctly.
- Images that have meaning should include alt text and possibly a longer description, work with the content designer on your team to create these.
- Making sure any text in images of text is at least 14 points and has good contrast.

### Resources
- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=11%2C111#text-equiv)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)

## Touch targets
### Why it's important
Are your touch targets large enough and easy to reach?

- Harold has gigantism due to a tumor on his pituitary gland during childhood. He has very large hands which makes small links, or links that are too close together difficult to tap on his phone. 
- Rosa checks the latest news on her phone during her morning commute on a jostling bus, often while sipping from the coffee cup in her other hand.


### Steps to take
- Make sure you can reach primary actions easily with either right or left thumbs, even on larger phones. Items on the bottom of the screen tend to be easier to reach.
- Make touch targets at least 44 px or 10 mm. This will allow the target to be tapped by the average adult finger pad, which measures 10 mm. The icons may be smaller and you can work with your developer to extend padding past the icon. Pay particular attention to how [line-height affects touch target size](https://digital.gov/guides/mobile-principles/tap-targets/).

### Resources
- [2.5.5 Touch Target (WCAG 2.1)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [3.2 Touch Target Size and Spacing \| Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile](https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing)
- [3.5 Placing buttons where they are easy to access \| Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile](https://www.w3.org/TR/mobile-accessibility-mapping/#h-placing-buttons-where-they-are-easy-to-access)
