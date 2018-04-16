---
layout: primary
title: Images
permalink: /front-end/images/
question: Do images have good alt text?
personas:
- Carmen’s page didn’t load all the way and didn’t get to download the images. 
- Amanda is blind and has to read the alt text to understand the contents of the image. 
- John is looking for information with a search engine and needs help being directed to the right content (descriptive alt tags will improve search).
---

### Steps to take
- Include meaningful information describing each image in the alt text.
- Use null (empty) alt text when text describing the image is already on the page (`alt=""`).
- Don’t start the alt text with _Image of_ or _Photo of_ – the screen reader already announces that images are images.
- If the image is decorative and you don’t want the screen reader to announce it at all, use null (empty) alt text (`alt=""`) or CSS background images.

#### References
[Guideline 1.1 – Text Alternatives](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=11%2C111#text-equiv)

<a class="usa-button button-next" href="{{ site.baseurl }}/front-end/color-and-contrast/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
