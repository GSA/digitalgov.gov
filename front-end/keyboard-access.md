---
layout: primary
title: Keyboard access
permalink: /front-end/keyboard-access/
question: Can you reach anything that’s interactive using the tab key?
personas:
- Maria has tendonitis and is unable to use a mouse; instead, she uses the keyboard to navigate the web.
---

### Steps to take
- Use the keyboard to navigate through the page using the `tab` key.
- Make sure you can reach all interactive elements and trigger them with the `spacebar`, `enter` key, or arrow keys.
  - Use semantic HTML elements that are accessible by default (For example: buttons, labeled inputs, etc). If you must use divs for interactions, ensure they are focusable and labeled appropriately.
- Check to see that focus is always visible and appears in logical order.
- Make sure that no content gets focused offscreen or is hidden from view.
- Check to see that the page includes a skip navigation link (if navigation is present before the main content). This will allow users to skip past navigation to reach the page’s main content.

#### Resources
<a href="https://youtu.be/cOmehxAU_4s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: How I do an accessibility check
</a>

#### References
- [2.1 Keyboard Accessible (Guideline) \| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#keyboard-operation)
- [2.1.1 Keyboard \| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/#keyboard-operation-keyboard-operable)
- [2.1.2 No Keyboard Trap \| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/#keyboard-operation-trapping)
- [2.4.3 Focus Order\| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/#navigation-mechanisms-focus-order)
- [2.4.7 Focus Visible \| WCAG 2.0](https://www.w3.org/WAI/WCAG20/quickref/#navigation-mechanisms-focus-visible)

<a class="usa-button button-next" href="{{ site.baseurl }}/front-end/screen-reader/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
