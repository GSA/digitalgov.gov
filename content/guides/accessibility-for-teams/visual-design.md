---
date: 2018-07-09 09:00:00 -0500
title: "Accessibility for visual designers"
deck: ""
summary: "Everyone benefits from designs that are easier to see. People with different visual abilities see your designs in varying ways—the diverse nature of impairments creates a wide variation in how your designs are perceived. A clean and clear visual presentation helps everyone make sense of a website's information and functionality."
guide: accessibility-for-teams
image: guide-dap
primary_image: guide-dap
summary_box: true
topics:
  - accessibility
  - product-and-project-management
  - user-experience
layout: single
---

## Getting started

**How to use this guide:**

- We recommend planning for accessibility in your design process and regularly conducting accessibility testing throughout the design and development processes.
- If you have project-specific questions, ask your agency’s accessibility team.

## Color and Contrast

1) Is there enough contrast between text and its background color?

### Why it’s important

- Esther has low vision and needs content to have enough contrast to read it.

### Steps to take

1. Provide good contrast. Make sure the contrast between the text and background is greater than or equal to 4.5:1 for small text and 3:1 for large text.
   - Test your color palette for accessible combinations with [Accessible Color Palette Builder](https://toolness.github.io/accessible-color-matrix/) or [Contrast Grid](http://contrast-grid.eightshapes.com/).
   - Measure the contrast between text and backgound colors with tools like [WebAIM's Color Contrast Checker](http://webaim.org/resources/contrastchecker/) or a [Sketch plugin](https://github.com/getflourish/Sketch-Color-Contrast-Analyser).
2. Exceptions:
   - Color contrast ratio requirements apply to text and graphics that are essential for understanding the content or functionality. You don’t need to meet color contrast requirements for logos or incidental graphic elements.
   - Text that is part of a disabled control's state or disabled buttons does not need to meet the minimum contrast ratio.
   - Text that is part of a logo has no minimum contrast requirement.
3. Slightly temper the contrast between your text and background color. For example: don’t use pure black text on a pure white background. Stark contrast can result in blurred or moving text for people with Irlen syndrome.
4. To use text over images, add a solid background behind the text or a dark overlay to the image.

### Resources

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [Guideline 1.4.3 – Contrast (Minimum)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#visual-audio-contrast-contrast)

**Video tutorial: Meeting contrast requirements**

{{< youtube id="gH1JieTZQ1k" title="Meeting Contrast Requirements" >}}

**Video tutorial: How I do an accessibility check (contrast)**

{{< youtube id="cOmehxAU_4s" title="How I do an accessibility check" >}}


2) Can you still understand everything the design is communicating without depending on color?

### Why it’s important

- Joel is red-green colorblind and can’t reliably make sense of information conveyed with color alone.

### Steps to take

1. Don’t use color alone to convey meaning. Use icons, written content, and other visual elements to reinforce clear communication of the content.
2. Test what it’s like to view your designs through a [color blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/).

### Resources

Web Content Accessibility Guidelines (WCAG) 2.0 references:

[1.4.1 Use of Color](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#visual-audio-contrast-without-color)


## Layout and Hierarchy

Can you quickly understand the meaning of the page and complete your task?

### Why it's important

- Avi is distracted and needs to fill out an important web form
- Benny has attention deficit disorder and has trouble staying focused on busy pages
- Juanita doesn’t feel confident about using technology because she previously wasn’t able to find what she was looking for.

### Steps to take

1. Make sure key information is discernable at a glance. Design minimally and intentionally so that the user can get as much info as quickly as possible.
2. Create a clear hierarchy of importance by placing items on the screen according to their relative level of importance. For example, place important actions at the top or bottom of the screen (reachable with shortcuts).
3. Plan heading structure early. Ensure all content and design fits into a logical heading structure.
4. Consider reading order. The reading order should be the same as the visual order.
5. Group related items in proximity to one another to help those who have low vision or trouble focusing on the screen.

### Resources

- [Accessibility - Material Design](https://m2.material.io/design/usability/accessibility.html)
- [WebAIM: Web Accessibility for Designers](http://webaim.org/resources/designers/)

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG20/quickref/#content-structure-separation-sequence)
- [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#navigation-mechanisms-descriptive)


## Typography

Can you easily read and comprehend textual information on the page?

### Why it's important

- Zelda has low vision and has trouble reading small text. 
- Yulia’s eyes are strained after a long day of working on a computer.

### Steps to take

1. **Use a large enough font size for body text so that people can comfortably read.** Use at least an effective size of 16px, but this can vary depending on the design of the font.
2. **Maintain a line length that promotes comfortable reading.** Don’t make lines too long or too short: 45-75 characters per line is acceptable and approximately 66 characters per line is comfortable. Shorter pieces of text are fine for captions, marginal text, and forms.
3. **Choose a typeface that emphasizes clarity and legibility.**
   - Factors to consider:
     - It performs well when it’s small or large.
     - It has a large x-height.
     - The character is large for its point size.
     - The metrics (such as x-height) are consistent between letterforms.
     - Individual letterforms are distinct in shape and can’t they be confused with others. For example: I, l, and 1 are distinct. 0 and O are distinct.
     - The typeface supports all of the characters and font styles that are needed.
   - Some designers recommend sans-serif faces for UIs and serif faces for longform reading, but these are not hard-and-fast rules.
   - For an easy place to get started, the [U.S. Web Design Standards](https://designsystem.digital.gov/) (USWDS) [Typography page](https://designsystem.digital.gov/components/typography/) includes a set of [open source typeface recommendations](https://designsystem.digital.gov/components/typography/#included-typefaces) that emphasize legibility.
4. **Use headings to communicate hierarchy.** Ensure heading styles differ from paragraph text by some combination of size, weight, face, or color. This ensures they’re distinct from paragraph text but are related to each other with some consistency, which helps with scanning.
5. **Use your type size and line width to determine a line height that people can comfortably read.** The larger the type size and line width, the larger the line height should be. For running/body text, that’s usually around 1.4-1.65, headings at around 1-1.3, and captions or short lines at around 1.3. Lines that are leaded too tightly or loosely can diminish readability by making it harder for the eye to know where to return to when the line breaks.

### Resources

- [U.S. Web Design System (USWDS) research report: Inclusive design patterns](https://designsystem.digital.gov/together/) 
- [Better Web Type by Matej Latin](https://betterwebtype.com/)
- [Text legibility - Material Design](https://material.io/design/color/text-legibility.html)

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.4.8 Visual Presentation](https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-visual-presentation)


## Graphics and images

Can you easily understand content associated with graphics, icons, and images?

### Why it's important

- Marisa primarily uses her mobile device to browse websites and has trouble interpreting visualizations with small text.

### Steps to take

1. Make sure all graphics have descriptive captions written in plain language.
2. Avoid using graphics when written content could communicate the same thing.
3. Use icons as helpful visual cues to connect to concepts. Only use icons purposefully and not for decoration. Use familiar icons that people are accustomed to associating with common actions, like a trash can to represent deleting something.
4. To use text over images, add a solid background behind the text or a dark overlay to the image.

### Resources

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)


## Data visualizations

Can you understand the overall trend of the graph? Can you quickly grasp the relationship between parts of the data?

### Why it's important

- Kwame has trouble reading graphs with small text.

### Steps to take

1. Follow data visualization best practices: allow the data and your communication goals for the visualization to dictate the format and visual style, instead of the latest aesthetic trend.
2. Support the visuals with a brief description of the overall trend that’s generated by the chart to give context.
3. Ensure the data and variables are clearly labeled.
4. Make sure there’s sufficient contrast between graph colors so people with color blindness can distinguish the colors.
5. Consider complementing the graph with a table of information so that it can be read more easily by screen reader users and when compressed to mobile.

### Resources

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=11%2C111#text-equiv)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/#content-structure-separation-programmatic)
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#visual-audio-contrast-without-color)


## Forms

Are forms as simple as possible and only ask what’s needed to complete the task? Can you successfully complete the form?

### Why it's important

- Mateo is in a hurry to fill out a medical insurance form for his sick daughter.
- Janet has dementia and needs to validate her identification to request a new social security card.

### Steps to take

1. **Present fields in a single-column layout.** This keeps visual momentum moving down the page so users don’t have to reorient themselves with multiple columns. (Exceptions to this rule are short, logical fields that may be presented on the same row like _City_, _State_, and _Zip code_.)
2. **Ensure form fields are visibly labeled.**
3. **Make sure form fields have clearly defined boundaries** or outlines so that people with cognitive disabilities know the size and location of the click target.
4. **Do not use placeholder text in form fields.** Placeholder text causes usability issues because it disappears when content is entered into the form field. Hints and instructions should be persistent and placed outside of the field.
5. **Provide highly visible and specific error states.** Use multiple cues like color, icons, bold font weight, heavy border or outline, and helpful text to make sure users don’t overlook this critical information.

### Resources

- [USWDS - Form component](https://designsystem.digital.gov/components/form/)
- [USWDS - Form templates](https://designsystem.digital.gov/templates/form-templates/)
- [Nielsen Norman Group: Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/)

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/#text-equiv-all)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/#content-structure-separation-programmatic)
- [3.2.1 On Focus](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#consistent-behavior-receive-focus)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG20/quickref/#minimize-error-cues)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG20/quickref/#ensure-compat-rsv)


## Mobile

Can you understand key information and perform critical tasks on a mobile device?

### Why it's important

- Miyako just lost her job and canceled her home internet to stretch her budget. She only uses her cell phone to browse the internet.
- Reza is recovering from a stroke and slowly relearning how to use his arm. He uses his phone to help him find information on the web.

### Steps to take

1. Make sure you can reach primary actions easily with either right or left thumbs.
2. Make touch targets at least 48px. This will allow the target to be tapped by the average adult finger pad, which measures 10mm. The icons may be smaller and you can work with your developer to extend padding past the icon.
3. In most cases, touch targets are separated by 8px of space or more to ensure users don't select the wrong action.

### Web Content Accessibility Guidelines (WCAG) 2.0 references

Mobile Accessibility: How WCAG 2.0 and Other World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) Guidelines Apply to Mobile

- [3.2 Touch Target Size and Spacing](https://www.w3.org/TR/mobile-accessibility-mapping/#touch-target-size-and-spacing)
- [3.5 Placing buttons where they are easy to access](https://www.w3.org/TR/mobile-accessibility-mapping/#placing-buttons-where-they-are-easy-to-access)


## Keyboard access

Can you reach anything that’s interactive using the tab key?

### Why it's important

- Maria has tendonitis and is unable to use a mouse; instead, she uses the keyboard to navigate the web.

### Steps to take

1. Using only your keyboard, navigate through the page using the `tab` key.
2. Make sure you can reach all interactive elements and trigger them with the `spacebar`, `enter` key, or arrow keys, and ensure that you have designed intentional styles for these states: focus, hover, active, and visited.
3. Check to see that focus is always visible and that interactive items on the page appear  in logical order. Make sure that no content gets focused offscreen or is hidden from view.
4. Check to see that the page includes a skip navigation link (if navigation is present before the main content). This will allow users to skip past navigation to reach the page’s main content.

### Resources

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG20/quickref/#keyboard-operation-keyboard-operable)
- [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG20/quickref/#keyboard-operation-trapping)
- [2.4.3 Focus Order\| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/#navigation-mechanisms-focus-order)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG20/quickref/#navigation-mechanisms-focus-visible)

**Video tutorial: How I do an accessibility check**

{{< youtube id="cOmehxAU_4s" title="How I do an accessibility check" >}}


## Screen reader

Can you use a screen reader to access the page content?

### Why it's important

- Aisha is blind and uses a screen reader to navigate the web.

### Steps to take

1. Use a screen reader to make sure you can land on controls and that they’re announcing content in the appropriate order and context (i.e. labels before form fields, headers before content, etc.).
2. If forms are present, make sure the screen reader reads labels and instructions.
3. Make sure that all links are properly descriptive. For example, the link text “Read More” provides no context about where the user will go if they click it, while “Read more about dinosaurs” describes what’s on the other side of the link.

### Use VoiceOver screen reader on Mac

- **Turn VoiceOver on**: command (⌘) + F5
- **Go into web area**: control + alt + shift + down arrow (⬇)
- **Navigate right**: control + alt + right arrow (➡️️)
- **Navigate by heading**: control + alt + command (⌘) + H
- **Click**: control + alt + spacebar

Use rotor to browse pages. The rotor lists common elements like <i>headings</i>, <i>links</i>, and <i>images</i>, and lets you navigate directly to the element of your choosing.

- **Turn on rotor**: control + alt + U
- **Navigate rotor**: left and right, up and down arrows

### Resources

- [Download NVDA screen reader (NV Access)](https://www.nvaccess.org/download/)

Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#content-structure-separation-programmatic)

**Video tutorial: Screen Reader Basics: VoiceOver**

{{< youtube id="5R-6WvAihms" title="Screen Reader Basics: VoiceOver" >}}

**Video tutorial: How I do an accessibility check (screen reader)**

{{< youtube id="cOmehxAU_4s" title="How I do an accessibility check" >}}

---

**Disclaimer**: All references to specific brands, products, and companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency.
