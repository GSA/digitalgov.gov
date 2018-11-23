---
url: /resources/mobile/principles/tap-targets/
date: 2018-11-20 12:30:00 -0500
title: 'Remember That We Navigate Mobile Sites Using Our Fingers'
summary: 'Week three of our series, Eight Principles of Mobile-Friendliness, covers how to size fonts and other tap targets, like links.'
type: guide

---

This week we will focus on font sizes and tap targets that are too small to be used on a mobile device. The following are two solutions to help prevent incorrect sizing and placement of objects on a site that may lead to mobile unfriendliness. 

1. Use Legible Font Sizes 
2. Size Your Tap Targets Appropriately 

Small font sizes and inappropriately sized tap targets may negatively impact the usability of your site and can be detected using Google's [Mobile Friendly Test](https://search.google.com/test/mobile-friendly) tool, [DigitalDashboard.gov](https://www.digitaldashboard.gov/), and the [Information Technology & Innovation Foundation (ITIF) Benchmarking Report](https://itif.org/publications/2017/03/08/benchmarking-us-government-websites). 

The rest of this article details these two preventable usability issues related to sizing and placement of objects. 

## Use Legible Font Sizes 

**Issue: When viewed on a mobile device, the font size is too small to read.** 

When reading text on a mobile device, a font size smaller than 12 points may be challenging to read, and often forces the reader to zoom by pinching and stretching the screen to comfortably read the text. To add to the complexity, web font size may be specified in [a variety of units](https://www.youtube.com/watch?v=qrduUUdxBSY&t=21), including: 

- Pixels (px) – vary depending on the device size. CSS spec allows 2 interpretations of CSS px unit:  
   1. A pixel is 1/96 of a inch (0.2645 mm) (for web designers, think of this as designing for 96 DPI desktop monitor). 
   2. A CSS Pixel is a “reference pixel”. A “reference pixel” has a visual angle of 0.0213 degrees. 
- Points (pt) — .75 points is equal to 1 pixel 
- EMs (em) – Percentage of the font size being used. For example, if the `font-size` property of the document is set to 12pt, 1em is equal to 12pt. Ems are scalable in nature, so, 2em would equal **24pt**, .5em would equal **6pt**, and so on. 

Additionally, the viewport affects how font is scaled. A page without a properly configured viewport is scaled down on mobile devices, which often results in the text being illegible because of the small size. 

**Solution: Select an appropriate font size!** 

There is much more to fonts than meets the eye. The following are five things to remember when selecting and sizing your fonts. 

<ol>
   <li>Use a Standard Font Family <br />Standard font families, such as Arial or Times New Roman, are likely already installed on your user's computer or mobile device. To better ensure that the page looks as intended, list the specific font that you want the browser to check for first, then one or two more fonts that are similar to the first one, just in case it is unavailable. You should end the list with a generic font in case none of your selections are available to your user. There are <a href="https://www.w3.org/Style/Examples/007/fonts.en.html">five generic fonts</a>: <br /><br />

<ul>
<li><a href="https://en.wikipedia.org/wiki/Serif">serif</a> </li>
<li><a href="https://en.wikipedia.org/wiki/Sans-serif">sans-serif</a> </li>
<li><a href="https://en.wikipedia.org/wiki/Monospaced_font">monospace</a> </li>
<li>cursive (fonts that look like handwriting) </li>
   <li>fantasy (decorative fonts, often used for titles) </li>
      </ul>

<br /><br />In this first CSS example, the browser will try to display paragraphs in Times New Roman, a serif font. If that is not available, it will look for Georgia; another serif font. If neither are available, the browser will know to use whichever is the user's default serif font. <br /><br />

`p {font-family: "Times New Roman", Georgia, serif;} `

This second CSS example follows the same process, but uses <em>sans-serif</em> fonts: <br /><br />

`p {font-family: Arial, Verdana, Tahoma, sans-serif;}`

This third CSS example uses <em>monospace</em> fonts: <br /><br />

`p {font-family: "Courier New", Courier, monospace;}` <br /><br /></li>
<li>Use a base font size of 16 <a href="http://xahlee.info/js/web_design_screen_density.html">CSS pixels</a> <br />In the body, explicitly declare a font size for your page as 16px as a page-wide instruction. This also tells the page to adjust to the fonts we are using when rendering. <br />In the CSS, use: <br /><br />

`body {font-size:16px;}` <br /><br /></li>

<li>Use font sizes relative to the base size to define the typographic scale. <br /><br />

With the font size set for the entire page above, make relative or percentage calls to adjust that font size so html tags such as H1s and H2s are appropriately sized and rendered as shown below. <br /><br />

In the CSS, use: <br /><br />

`body {font-size: 16px;}`
`p {font-size: 120%;}`
`h1 {font-size: 250%;}`

<br /><br />This ensures that all the font size relationships will always stay the same no matter the screen size. <br /><br /></li>

<li>Restrict the number of fonts used and the typographic scale <br /><br />

Too many fonts and font sizes lead to messy and overly complex page layouts. While complex page layouts may be acceptable and readable on a desktop monitor, they may not be as readable on the smaller mobile device screen. <br /><br /></li>

<li>Use the browser default line height of 1.2em <br /><br />

The amount of space between lines of text, which can be set using the CSS property, `line-height`, may affect the readability of a page. On a desktop monitor, small spacing or tight text may be acceptable, but on smaller mobile devices, reading such text is more difficult without zooming. Google recommends using at least the browser default line height of 1.2. This means that the space between the lines of text is at least 1.2 times the size of the text. <br /><br />

In this CSS example, the paragraph selector has the `font-size` property set to a value of 120 percent, and the `line-height` property set to a value of 1.2. <br /><br />

`p {font-size: 120%; line-height: 1.2;}` <br /><br />

The amount of space between lines of link text can be even more problematic as the link needs to be pressed by a fingertip and is related to the next section. To ensure room to tap the link, increasing the line height may be necessary. <br /><br />

In this CSS example, the unordered list selector has the `line-height` property set to a value of 200 percent. <br /><br />

`ul {line-height: 200%;}` <br /><br /></li>
</ol>

### References 

CSS: What’s a CSS Pixel? What’s a Reference Pixel | http://xahlee.info/js/web_design_screen_density.html <br />
Document Doesn't Use Legible Font Sizes | https://developers.google.com/web/tools/lighthouse/audits/font-sizes <br />
SEO Do’s and Don’ts with Font Sizes and Colors | https://www.seoblog.com/2014/06/seo-dos-donts-font-sizes-colors/ <br />
Legible Font Size | https://varvy.com/mobile/legible-font-size.html <br />
Use Legible Font Sizes | http://sitegrasp.com/mobile-design-tips/use-legible-font-sizes.html <br />
Webfont options and speed | https://varvy.com/pagespeed/web-font-options.html 

## Size Your Tap Targets Appropriately 

**Issue: Objects on the mobile device are too small to be accurately touched to elicit correct application behavior.** 

Tap targets are objects on a page that you interact with, including links, buttons, form fields, etc. On the desktop, we usually use the small and accurate mouse pointer, but on smaller, mobile devices, we use our much bigger and less accurate finger. Not only do the tap targets need to be “big enough,” they need to be placed far enough from other tap targets that the user is able to tap only the desired target. 

**Solution: Ensure tap targets are at least 48 CSS pixels wide or tall, are spaced about 8 pixels apart, and that there are at least 32 CSS pixels wide and tall.** 

The average size of the pad of an adult finger pad 10 millimeters wide. Android recommends a tap target size of about 7 mm for any element, and to ensure the tap targets are at least 48 CSS pixels wide or tall and at least be 32 CSS pixels between any tap targets, so that a user's finger pressing on one tap target does not inadvertently touch another tap target. 

For example, if you want to ensure a link list has enough room between lines to click, use the following line of CSS code to use a larger line height if the screen is small, or use a more normal line height for larger screens. 

In the CSS use:  

`li a {line-height: 1.8; } @media (min-width:60em) {li a {line-height: 1.2; }}`

### References 

Accessible Styles | https://developers.google.com/web/fundamentals/accessibility/accessible-styles#multi-device_responsive_design <br />
PageSpeed Insights Size Tap Targets Appropriately | https://stallion-theme.co.uk/google-pagespeed-insights-size-tap-targets/ <br />
Size Tap Targets | https://growthrobotics.com/size-tap-targets/ <br />
Size Tap Targets Appropriately | https://varvy.com/mobile/tap-target-size.html <br />
The Four Fixes To Avoid The Google Mobile-Apocalypse | https://authoritylabs.com/blog/four-fixes-avoid-google-mobile-apocalypse-update/ 
