---
layout: page-visual-design
title: Color and contrast
permalink: /visual-design/color-and-contrast/
---

## Is there enough contrast between text and its background color?

**Why it’s important**: Esther has low vision and needs content to have enough contrast to read it.

### Steps to take
- Provide good contrast. Make sure the contrast between the text and background is greater than or equal to 4.5:1 for small text and 3:1 for large text.
  - Test your color palette for accessible combinations with https://toolness.github.io/accessible-color-matrix/ or http://contrast-grid.eightshapes.com/
  - Measure the contrast between text and backgound colors with tools like a [manual check](http://webaim.org/resources/contrastchecker/) or [Sketch plugin](https://github.com/getflourish/Sketch-Color-Contrast-Analyser).
- Slightly temper the contrast between your text and background color. For example: don’t use pure black text on a pure white background. Stark contrast can result in blurred or moving text for people with Irlen syndrome.
- Exceptions:
  - Color contrast ratio requirements apply specifically to text. You don’t need to meet color contrast ratio requirements for graphic elements in charts, illustrations, or icons.
  - Text that is part of a disabled control states or disabled buttons does not need to meet the minimum contrast ratio.
  - Text that is part of a logo has no minimum contrast requirement.
- To use text over images, add a solid background behind the text or a dark overlay to the image.

<a href="https://www.youtube.com/watch?v=gH1JieTZQ1k">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>
  Video tutorial: Meeting Contrast Requirements
</a>
<br>
<a href="https://youtu.be/cOmehxAU_4s?t=8m36s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>
  Video tutorial: How do I do an accessibility audit (contrast)
</a>

## Can you still understand everything the design is communicating without depending on color?

Why it’s important: Joel is red-green colorblind and can’t reliably make sense of information conveyed with color alone.

### Steps to take:
- Don’t use color alone to convey meaning. Use icons, written content, and other visual elements to reinforce clear communication of the content.
- Test what it’s like to view your designs through a [color blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/).

<button>
  <i class="fa fa-check" aria-hidden="true"></i>
  Yes
</button>
<button class="usa-button-secondary">
  <i class="fa fa-times" aria-hidden="true"></i>
  No
</button>
<button class="usa-button button-question">
  <i class="fa fa-question" aria-hidden="true"></i>
  I'm not sure
</button>
<button class="usa-button-outline button-skip" type="button">Skip >></button>
