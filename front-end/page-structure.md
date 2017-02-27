---
layout: page-front-end
title: Page structure
permalink: /front-end/page-structure/
---

## Are you using semantic elements and roles?

**Why it’s important**: John is low-sighted and navigates pages by jumping to the page section he wants to get to.

### Steps to take
- Use sectioning elements to create a broad outline of your page content; examples of these elements include `header`, `nav`, `main`, and `footer`. Use content sectioning elements like `section`, `article`, and `aside` to organize the document content into logical pieces.
- Add `role="banner"` to your masthead and `role="contentinfo"` to your page footer once per page to define landmark elements.

<a href="https://www.youtube.com/watch?time_continue=12&v=bww3IaktlRY">
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
