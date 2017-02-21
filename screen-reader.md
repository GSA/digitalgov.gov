---
layout: page
title: Screen reader access
permalink: /screen-reader/
---
## Can you use a screen reader to access the page content?

### Why it’s important
Jerry is blind and uses a screen reader to navigate the web.

### Steps to take
- Use a screen reader to make sure you can land on controls and that they’re announcing things as they should.
- Determine whether the HTML document has a language attribute so that screen readers will read it with the correct accent and pronunciation. For example: `<html lang="en">`.
- If forms are present, make sure the screen reader reads labels and instructions.
- Make sure that all links are properly descriptive. For example, the link text "Read More" provides no context about where the user will go if they click it, while "Read more about dinosaurs" describes what’s on the other side of the link.

<ul class="usa-accordion usa-accordion-bordered">
  <li>
    <button class="usa-accordion-button"
      aria-expanded="false" aria-controls="amendment-1">
      Use VoiceOver screen reader on Mac
    </button>
    <div id="amendment-1" class="usa-accordion-content">
      <ul>
        <li><b>Turn VoiceOver on</b>: command (⌘) + F5</li>
        <li><b>Go into web area</b>: control + alt + shift + down arrow (⬇)</li>
        <li><b>Navigate right</b>: control + alt + right arrow (➡️️)</li>
        <li><b>Navigate by headings</b>: control + alt + command (⌘) + H</li>
        <li><b>Click</b>: control + alt + spacebar</li>
        <li><b>Turn on rotor</b>: control + alt + U</li>
        <li><b>Navigate rotor</b>: left and right, up and down arrows</li>
      </ul>
      <p class="usa-text-small">*Use rotor to browse web pages more efficiently. The rotor lists common elements like “headings,” “links,” and “images,” and lets you navigate directly to the element of your choosing.</p>
    </div>
  </li>
</ul>

<a href="https://youtu.be/5R-6WvAihms">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>
  Video tutorial 1
</a>
<br>
<a href="https://youtu.be/cOmehxAU_4s?t=3m25s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>
  Video tutorial 2
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
