---
layout: primary
title: Images
permalink: /front-end/images/
sidebar: frontend
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

#### WCAG 2.0 references
- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)

<a class="usa-button button-next" href="{{ site.baseurl }}/front-end/color-and-contrast/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
