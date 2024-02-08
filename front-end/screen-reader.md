---
layout: primary
title: Screen reader access
permalink: /front-end/screen-reader/
category: Front-end development
sidebar: frontend
question: Can you use a screen reader to access the page content?
personas:
- Devonte is blind and uses a screen reader to navigate the web.
---

### Steps to take
- Use a screen reader to make sure you can land on controls and that they’re announcing things as they should.
- Determine whether the HTML document has a language attribute so that screen readers will read it with the correct accent and pronunciation. For example: `<html lang="en">`.
- If forms are present, make sure the screen reader reads labels and instructions.
- Make sure that all links are properly descriptive. For example, the link text "Read More" provides no context about where the user will go if they click it, while "Read more about dinosaurs" describes what’s on the other side of the link.

<ul class="usa-accordion usa-accordion--bordered">
  <li>
    <button class="usa-accordion__button"
      aria-expanded="false" aria-controls="amendment-1">
      Use VoiceOver screen reader on Mac
    </button>
    <div id="amendment-1" class="usa-accordion__content">
      <ul>
        <li><b>Turn VoiceOver on</b>: command (⌘) + F5</li>
        <li><b>Go into web area</b>: control + alt + shift + down arrow (⬇)</li>
        <li><b>Navigate right</b>: control + alt + right arrow (➡️️)</li>
        <li><b>Navigate by headings</b>: control + alt + command (⌘) + H</li>
        <li><b>Click</b>: control + alt + spacebar</li>
      </ul>
      <p class="usa-text-small">Use rotor to browse pages. The rotor lists common elements like <i>headings</i>, <i>links</i>, and <i>images</i>, and lets you navigate directly to the element of your choosing.</p>
      <ul>
        <li><b>Turn on rotor</b>: control + alt + U</li>
        <li><b>Navigate rotor</b>: left and right, up and down arrows</li>
      </ul>
      <p class="usa-text-small">Note: While VoiceOver is most accessible to those of us using Macs, it’s not as good a screen reader as NVDA.</p>
    </div>
  </li>
</ul>

#### Resources
<a href="https://youtu.be/5R-6WvAihms">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: Screen Reader Basics: VoiceOver
</a>
<br>
<a href="https://youtu.be/cOmehxAU_4s?t=3m25s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: How I do an accessibility check (screen reader)
</a>
- [Download NVDA screen reader (NV Access)](https://www.nvaccess.org/download/)

#### WCAG 2.0 references
[1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#content-structure-separation-programmatic)

<a class="usa-button button-next" href="{{ site.baseurl }}/front-end/headings/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
