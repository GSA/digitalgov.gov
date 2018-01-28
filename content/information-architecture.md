---
layout: primary
title: Information architecture
permalink: /content-design/information-architecture/
question: Is your site organized such that everyone can navigate it easily?
personas:
- Beth has a lower tech literacy level and needs a site’s layout to be clear. 
- Julian has low vision and uses a screen reader to navigate the web. Kendra has a newborn and her attention is often divided; she needs to be able to understand a site’s contents at a glance. 
- Lyle is undergoing a crisis and needs to quickly find just the content pertinent to him.
---

### Steps to take
- Write descriptive page titles. Users who rely on assistive technologies like screen readers may not be able to use visual cues to determine a page’s purpose. Make sure your page titles concisely convey each page’s focus.
- Make sure users can navigate a site in multiple ways. Some strategies include providing a table of contents, providing a sitemap, linking between pages, and including sitewide search.
- Indicate changes in language (for example, when including a foreign word in a predominantly English text). This will help people using screen readers, people with cognitive disabilities, and folks using braille translation software to fully understand your content.
- Use a screen reader or simulator to make sure you can land on controls and that they’re announcing things as they should.
- Determine whether the HTML document has a language attribute so that screen readers will read it with the correct accent and pronunciation. For example: `<html lang="en">`. (Note: If you’re not comfortable taking this step, feel free to ask another designer on your project team to help.)
- If forms are present, make sure the screen reader reads labels and instructions.

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
      </ul>
      <p class="usa-text-small">Use rotor to browse pages. The rotor lists common elements like <i>headings</i>, <i>links</i>, and <i>images</i>, and lets you navigate directly to the element of your choosing.</p>
      <ul>
        <li><b>Turn on rotor</b>: control + alt + U</li>
        <li><b>Navigate rotor</b>: left and right, up and down arrows</li>
      </ul>
    </div>
  </li>
</ul>
