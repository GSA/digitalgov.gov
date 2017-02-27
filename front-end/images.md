---
layout: page
title: Images
permalink: /front-end/images/
---

## Do images have good alt text?

**Why it’s important**: Carmen’s page didn’t load all the way and didn’t get to download the images. Amanda is blind and has to read the alt text to understand the contents of the image. John is looking for information with a search engine and needs help being directed to the right content (descriptive alt tags will improve search).

### Steps to take
- Include meaningful information describing each image in the alt text.
- Use an empty alt attribute when text describing the image is already on the page.
- Don’t start the alt text with _Image of_ or _Photo of_ – the screen reader already announces that images are images.
- If the image is decorative and you don’t want the screen reader to announce it at all, use  empty alt text `(alt="")` or CSS background images.

<a href="https://www.youtube.com/watch?v=XCa6U1BllCY">
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
