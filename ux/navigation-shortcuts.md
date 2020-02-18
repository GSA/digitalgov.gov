---
layout: primary
title: Navigation shortcuts
permalink: /ux/navigation-shortcuts/
category: UX design
sidebar: ux
question: Have you included navigation shortcuts for screen reader and keyboard users?
personas:
- Rasheed is blind and uses a screen reader to navigate the web; he uses landmark elements to quickly navigate through sections of a webpage. 
- Li’s vision is fine but has trouble using a mouse, so he navigates the web using only his keyboard – he hates having to tab through all the links in the header navigation to get to the main content of a page.
---

### Steps to take

- Work with your front end designer to identify the [basic landmark elements](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) in your wireframes, particularly for complex layouts. Landmark elements are identified either through HTML5 semantic markers or through ARIA roles when HTML can’t identify something. You don’t need to be an expert on HTML or ARIA, as long as you know the basics.
  - header
  - nav
  - main
  - footer
  - search
  - form
- Include a “Skip to main content” link before the header for keyboard users. Keyboard users can’t take advantage of landmark navigation so a skip link helps them navigate more quickly. This link can be visually hidden but [should become visible when it has focus](http://webaim.org/techniques/skipnav/#invisible).

#### WCAG 2.0 references
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#content-structure-separation-programmatic)
- [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-skip)

<a class="usa-button button-next" href="{{ site.baseurl }}/ux/forms/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
