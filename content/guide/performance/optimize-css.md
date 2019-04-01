---
url: /guide/performance/optimize-css/
title: 'Optimize CSS'
type: guide
guide: performance
summary: "How to optimize CSS and improve the performance of your website."
weight: 2
deck: 'The way your website uses CSS has a big impact on the performance of your website'

---

Cascading Style Sheets (CSS) describe how HTML elements are to be displayed on screen, can save a lot of work, and can control the layout of multiple web pages simultaneously.

However, CSS can increase application load time if absolute dimensions and positions in CSS directives are specified, external stylesheets are not used to separate caching of the CSS from the content, CSS image assets are not combined into Sprite files, and/or there is more than one `H1` Tag per page.


## Avoid Absolute Dimensions and Positions in CSS directives

**Issue** - Pixel and absolute dimensions and positions in CSS directives should be avoided, as they may not allow the browser to adapt content to fit the display or render correctly on all device types. However, there are exceptions to this rule. For example, if you want images to be tailored to fit a particular display it makes more sense to specify the dimension in pixels. In addition, pixel measures may be appropriate for margins, borders, and padding.

**Solution** – Use relative measures such as em, ex, bolder, larger, and thick where possible. For example, when specifying font, use font-size: 1.5em instead of font-size: 12px.

### References

- Fixit - Measures https://mobiforge.com/design-development/fixit-measures


## Use External Stylesheets to Separate Caching of CSS from the Content

**Issue** – External stylesheets should be used to separate the CSS instructions from the HTML. This CSS caching by a web browser avoids another trip to the server and speeds up page loading.

**Solution** – In the `<head>` section of the HTML, use language to call the CSS file externally, keeping the CSS instructions in a separate file from the HTML (see below).


```
<link rel="stylesheet" type="text/css"
href="https://mysite.com/main.css" media="screen" title="style (screen)" />
```

_**Caveat:** Using many external CSS stylesheets can adversely affect performance, so they should be combined into a single external CSS._

### References

- Internal vs External CSS | http://infoheap.com/internal-vs-external-css/
- Optimize CSS Delivery | https://varvy.com/pagespeed/optimize-css-delivery.html


## Combine CSS Image Assets into Sprite Files

**Issue** - When many images are used independently, it requires several network requests to download each one. CSS Sprites combine multiple images into a single image file for use on a website to speed up delivery and load time. The file can then be cut-up using CSS.

**Solution** - You can find many tools to create sprite sheets, including Compass, Lemonade, SpriteMe, Fireworks CS6, and TexturePacker.


### References

- Fixit – Image Sprints | https://mobiforge.com/design-development/fixit-image-sprites
- CSS Sprites: What They are, Why They’re Cool, and How to Use Them | https://css-tricks.com/css-sprites/
- CSS Sprite Sheets: Best Practices, Tools and Helpful Applications | https://webdesign.tutsplus.com/articles/css-sprite-sheets-best-practices-tools-and-helpful-applications--webdesign-8340

### Resources

- What is CSS? | https://www.w3schools.com/css/css_intro.asp
