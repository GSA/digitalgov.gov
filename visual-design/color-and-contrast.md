---
layout: primary
title: Color and contrast
permalink: /visual-design/color-and-contrast/
question: Is there enough contrast between text and its background color?

personas:
- Esther has low vision and needs content to have enough contrast to read it.
---

### Steps to take
- Provide good contrast. Make sure the contrast between the text and background is greater than or equal to 4.5:1 for small text and 3:1 for large text.
  - Test your color palette for accessible combinations with [Accessible Color Palette Builder](https://toolness.github.io/accessible-color-matrix/) or [Contrast Grid](http://contrast-grid.eightshapes.com/).
  - Measure the contrast between text and backgound colors with tools like [WebAIM's Color Contrast Checker](http://webaim.org/resources/contrastchecker/) or a [Sketch plugin](https://github.com/getflourish/Sketch-Color-Contrast-Analyser).
- Exceptions:
  - Color contrast ratio requirements apply to text and graphics that are essential for understanding the content or functionality. You don’t need to meet color contrast requirements for logos or incidental graphic elements.
  - Text that is part of a disabled control states or disabled buttons does not need to meet the minimum contrast ratio.
  - Text that is part of a logo has no minimum contrast requirement.
- Slightly temper the contrast between your text and background color. For example: don’t use pure black text on a pure white background. Stark contrast can result in blurred or moving text for people with Irlen syndrome.
- To use text over images, add a solid background behind the text or a dark overlay to the image.

#### Resources
<a href="https://www.youtube.com/watch?v=gH1JieTZQ1k">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: Meeting contrast requirements
</a>
<br>
<a href="https://youtu.be/cOmehxAU_4s?t=8m36s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: How I do an accessibility check (contrast)
</a>

#### References
- [Guideline 1.4.3 – Contrast (Minimum)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#visual-audio-contrast-contrast)

## Can you still understand everything the design is communicating without depending on color?

**Why it’s important**: Joel is red-green colorblind and can’t reliably make sense of information conveyed with color alone.

### Steps to take
- Don’t use color alone to convey meaning. Use icons, written content, and other visual elements to reinforce clear communication of the content.
- Test what it’s like to view your designs through a [color blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/).

#### References
[Guideline 1.4.1 – Use of Color \| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#visual-audio-contrast-without-color)

<a class="usa-button button-next" href="{{ site.baseurl }}/visual-design/layout-and-hierarchy/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
