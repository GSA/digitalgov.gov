---
layout: primary
title: Focus
permalink: /ux/focus/
---

## Have you designed for logical focus behavior on interactive elements?

**Why it’s important**: Jerry is blind and uses a screen reader to navigate the web – when a modal pops up and doesn’t receive focus he may not even know it’s there.

### Steps to take:
- Work with your front end designer to identify any interactions on the page that require JavaScript or that can’t be created using default HTML elements. You should intentionally design how focus flows through these interactions.

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
