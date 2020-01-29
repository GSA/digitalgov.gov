---
slug: viewport
date: 2018-10-09 12:30:00 -0500
title: 'The Viewport Is the Window to Your Site'
summary: 'Week two of our series, Eight Principles of Mobile-Friendliness, covers the benefits of setting your viewport.'
guide: mobile-principles

aliases:
  - /resources/mobile/principles/viewport

---

This week we will focus on the viewport, which is a major cause of mobile unfriendliness.

The viewport is the visual area of a webpage as it is displayed on a device (smartphone or tablet) screen or monitor. In the past, most of us used computer monitor of a standard size, but once we started accessing the Internet with smart phones and tablets, that fixed width web page was too large to fit on smaller screens (viewports). There seem to be thousands of screen sizes available as shown in [Viewport Sizes](http://viewportsizes.com/) and [Screen Sizes](http://www.screensiz.es/).

To address this issue, the browsers on those smaller devices would scale down the entire web page to fit the screen. However, that created another issue: a full-size web page that looked great on the desktop, but was now only a few inches tall, and in most cases, too small to use. Not to fear, Responsive Web Design (RWD) came in to save the day! RWD is all about using HTML and CSS to automatically resize, hide, shrink, or enlarge a website to make it look good on all device displays. But things can still go wrong.

The following are two solutions to preventable issues caused by the incorrect implementation of a viewport on a site.

1. **Configure the Viewport**
2. **Size Content to the Viewport**

Below are simple fixes for viewport usability issues.

## Configure the Viewport

**Issue: Without defining the viewport, size the page won't shrink to fit the screen.**

Pages should specify a viewport size using the meta viewport tag in the header, which tells the browser how to adjust the page’s dimension and scaling for optimal rendering to suit the device so the portion of the website visible to the user is appropriate.

Instead of explicitly defining viewport sizes, some opt to go one step further by using viewport breakpoints, which allow one to set a browser dimension “size range,” and when the browser dimensions are within that size range, only the styles associated with that media query will apply. By setting these breakpoints or media queries, one is able to change the page layout depending on the page size.

**Solution: Set the viewport!**

Pages optimized for a variety of device sizes should include a `<meta>` viewport tag in the head of the document. This provides instructions to the browser on how to control the page's dimensions and scaling. Google recommends writing the line of code as follows:

`<meta name="viewport" content="width=device-width, initial-scale=1">`

The `width=device-width` attribute in the `content` element tells the browser to make the width of the page the same width as whatever screen it is being shown on.

The `initial-scale=1` attribute in the `content` element lets the browser know that if the page is shown in landscape (a phone or tablet turned sideways), make the page as wide as it can be within that screen.

### References

- **Configure the Viewport** | https://varvy.com/mobile/configure-viewport.html
- **Mobile Usability Report** | https://support.google.com/webmasters/answer/6101188?hl=en
- **Responsive Design Viewports** | https://www.w3schools.com/css/css_rwd_viewport.asp
- **Set the Viewport** | https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport
- **Using the Viewport Meta Tag to Control Layout on Mobile Browsers** | https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
- **Viewport** | https://www.techopedia.com/definition/32644/viewport
- **Viewport Breakpoints** | https://docs.telerik.com/devtools/aspnet-ajax/controls/pagelayout/creating-responsive-design/viewport-breakpoints

## Size Content to the Viewport

**Issue: Content explicitly sized by pixels (px) does not always display correctly on small screens**

While the viewport might be set properly, some content may be cut off, or a user needs to scroll horizontally to see your content (words or graphics) on the page. This occurs when content is not sized properly to fit the screen and is, in most cases, caused by either the use of absolute values in CSS declarations or using images designed to look best at a specific browser width. For example, if an image is included using

`<img src="MyGraphic.png" style="width:600px;" >`

This means that even though we are responsive, the image will be cut off on devices that are less than 600 pixels wide.

**Solution: At the most, set the maximum width of the content to 100 percent!**

To fix this issue, do not declare the image width explicitly with an exact number of pixels, declare the width as a percentage or other relative measurement.

For example, a good practice would be to use:

`<img src="MyGraphic.png" style="max-width:100%;" >`

This adjusts the size to a percentage of the screen size.

This works fine for your text and graphics, but if you are using third-party widgets, frames, or videos from others, BEWARE. You may need to figure another way to size the object to display properly on the different viewports.

### References

- **&lt;img width=&quot;&quot;&gt;** | https://html.com/attributes/img-width/
- **Fluid Images** | https://templates.mailchimp.com/development/responsive-email/fluid-images/
- **Mobile Usability Report** | https://support.google.com/webmasters/answer/6101188?hl=en
- **Responsive Web Design Basics** | https://developers.google.com/web/fundamentals/design-and-ux/responsive/#size_content_to_the_viewport
- **Size Content to the Viewport** | https://varvy.com/mobile/content-size-viewport.html
