---
layout: page-front-end
title: Keyboard access
permalink: /front-end/keyboard-access/
---
## Can you reach anything that’s interactive using the tab key?

**Why it’s important**: Maria has tendonitis and is unable to use a mouse; instead, she uses the keyboard to navigate the web.

### Steps to take
- Use the keyboard to navigate through the page using the `tab` key.
- Make sure you can reach all interactive elements and trigger them with the `spacebar`, `enter` key, or arrow keys.
  - Use semantic HTML elements that are accessible by default (For example: buttons, labeled inputs, etc). If you must use divs for interactions, ensure they are focusable and labeled appropriately.
- Check to see that focus is always visible and appears in logical order.
- Make sure that no content gets focused offscreen or is hidden from view.
- Check to see that the page includes a skip navigation link (if navigation is present before the main content). This will allow users to skip past navigation to reach the page’s main content.

<a href="https://youtu.be/cOmehxAU_4s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>
  Video tutorial
</a>

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
