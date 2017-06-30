---
layout: primary
title: Navigation shortcuts
permalink: /ux/navigation-shortcuts/
---

## Have you included navigation shortcuts for screen reader and keyboard users?
**Why it’s important**: Jerry is blind and uses a screen reader to navigate the web, he uses landmark elements to quickly navigate through sections of a webpage. Rasheed’s vision is fine but has trouble using a mouse, so he navigates the web using only his keyboard – he hates having to tab through all the links in the header navigation to get to the main content of a page.

### Steps to take:

- Work with your front end designer to identify the [basic landmark elements](https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html) in your wireframes, particularly for complex layouts. Landmark elements are identified either through HTML5 semantic markers or through ARIA roles when HTML can’t identify something. You don’t need to be an expert on HTML or ARIA, as long as you know the basics.
  - header
  - nav
  - main
  - footer
  - search
  - form
- Include a “Skip to main content” link before the header for keyboard users. Keyboard users can’t take advantage of landmark navigation so a skip link helps them navigate more quickly. This link can be visually hidden but [should become visible when it has focus](http://webaim.org/techniques/skipnav/#invisible).

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
