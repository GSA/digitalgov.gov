---
slug: guide-create-mobile-friendly-websites
date: 2018-09-29 12:30:00 -0500
title: "A Guide to Creating Mobile-Friendly Websites"
deck: Five tactics for improving the performance of your website
summary: "Based on a recent six-month study, this guide outlines the top five practices needed to improve the mobile-friendliness of federal websites&#58; the optimization of JavaScript, CSS, and images, caching, and pop-ups&#46;"
featured_image:
  uid: army-mobile
topics:
  - mobile
  - strategy
  - mobile-gov
  - mobile-gov-community-of-practice

---

_This guide was created by [David Fern](https://digital.gov/authors/david-fern/), Social Security Administration._

JavaScript usage, CSS usage, image and resource sizing, caching/network usage, and pop-ups. These are the top practices that the most visited government websites should focus on in order to be more mobile-friendly. But how can you work on each of these areas to help ensure your website keeps mobile users delighted and coming back?

For six months, from September 22, 2017 to March 22, 2018, the [Federal Crowdsource Mobile Testing Program](https://digital.gov/services/mobile-application-testing-program/) tested the 26 U.S. federal government websites that are most visited on mobile devices (smartphones and tablets) using seven mobile-friendly automated test tools. The results indicated that these were the common practices that make these sites not as mobile-friendly as a user might expect or want in a mobile experience. Most of these areas do not directly relate to usability issues, but instead, concern how the site is built (which can lead to poor performance). For more information on how we conducted the tests, see the Methodology section at the end.

The information here outlines the top five practices we found across these sites:

<ol>
  <li><strong>Optimize JavaScript</strong> </li>
    <ul>
      <li>JavaScript Placement </li>
      <li>JavaScript Minify </li>
      <li>Do Not Use Inline JavaScript </li>
    </ul>
  <li><strong>Optimize CSS</strong> </li>
    <ul>
      <li>Avoid Absolute Dimensions and Positions in CSS Directives </li>
      <li>Use External Stylesheets to Separate Caching of CSS from the Content </li>
      <li>Combine CSS Image Assets into Sprite Files </li>
    </ul>
  <li><strong>Optimize Images</strong> </li>
    <ul>
      <li>Limit Page Size and Weight </li>
      <li>Enable Resource Compression </li>
      <li>Optimize Images </li>
      <li>Specify Image Dimensions </li>
    </ul>
  <li><strong>Utilize Caching</strong> </li>
    <ul>
      <li>Leverage Browser Caching </li>
      <li>Combine Multiple Files For Improved Performance </li>
    </ul>
  <li><strong>Avoid Pop-ups</strong> </li>
</ol>

Keep in mind, if a website is developed using a content management system (CMS) or development framework, not all of these settings may be configurable. However, we suggest that developers research the capabilities of the system to determine if they can be. Some of these recommendations may occur in the web server layer, which may be separate from the program code.

{{< img src="army-mobile" alt="A closeup on the hands of a person wearing Army camouflage, holding a cell phone with the Army website homepage on the screen." >}}

## 1. Optimize JavaScript

The most common issue found is JavaScript use. JavaScript is used on many desktop and mobile applications because it extends the functionality of web pages, is a relatively easy language to learn and use, and it executes relatively quickly on the client side. However, if JavaScript is not placed and executed from an optimal place in the code, not minimized, nor used inline, it may negatively affect the application performance on mobile devices that traditionally have minimal resources.

### JavaScript Placement

**Issue** - Grouping JavaScript at the end of the page markup is optimal for page load. When the HTTP specification puts JavaScript elsewhere on the page (e.g. at the top), this may result in loading blocking while the JavaScript files are downloaded. Additionally, before the browser can render a page it has to build the DOM tree by parsing the HTML markup. Whenever the parser encounters a script, it stops and executes the script before it continues parsing. This slows the performance of the page load.

**Solution** - Put scripts in the `<head>` tag and use the `async` or `defer` attributes, which allows the scripts to be downloaded ASAP without blocking your browser.

Scripts with the `async` attribute are executed asynchronously. This means the script is executed as soon as it is downloaded—without blocking the browser in the meantime—and that the second script can be downloaded and executed before the first script.

Scripts with the `defer` attribute are executed in order (i.e., first script one, then script two). This also does not block the browser. Unlike `async` scripts, `defer` scripts are only executed after the entire document has been loaded.

#### References

- Fixit – JavaScript Placement | [https://mobiforge.com/design-development/fixit-javascript-placement](https://mobiforge.com/design-development/fixit-javascript-placement)
- Remove Render Blocking JavaScript | [https://developers.google.com/speed/docs/insights/BlockingJS](https://developers.google.com/speed/docs/insights/BlockingJS)
- Reduce the size of the above the fold content | [https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)
- Where should I put `<script>` tags in HTML markup? | [http://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup](http://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup)

### JavaScript Minify

**Issue** - JavaScript files should always be minimized to reduce transit time and help speed up page load.

**Solution** - Minification removes unnecessary or redundant data without affecting how the resource is processed by the browser. The Integrated Developer Environment (IDE) tool used to develop the site may include features that will minify the JavaScript during the build process. You can also do this with Google Closure tools, including the Closure Compiler, an optimizer that rewrites your code and minimizes the dead space to make it download quicker. It is typical to minify only in the production environment, as troubleshooting and debugging in the development environments will be easier with non-minified JavaScript.

#### References

- Minify Resources (HTML, CSS, and JavaScript) | [https://developers.google.com/speed/docs/insights/MinifyResources](https://developers.google.com/speed/docs/insights/MinifyResources)
- How to Minify Your Websites CSS, HTML & JavaScript | [https://www.elegantthemes.com/blog/tips-tricks/how-to-minify-your-websites-css-html-javascript](https://www.elegantthemes.com/blog/tips-tricks/how-to-minify-your-websites-css-html-javascript)

### Do Not Use Inline JavaScript

**Issue** - Inline JavaScript code should not be used because it requires that the browser pass JavaScript code markup that slows processing.

**Solution** - Move all JavaScript code to a single minified file, which provides a clean separation of markup, style and code. This can also be accomplished by enabling the “Inline JavaScript” filter in Apache and Nginx web servers.

#### References

- Fixit – Inline JavaScript | [https://mobiforge.com/design-development/fixit-inline-javascript](https://mobiforge.com/design-development/fixit-inline-javascript)
- Inline JavaScript | [https://modpagespeed.com/doc/filter-js-inline](https://modpagespeed.com/doc/filter-js-inline)
- Why Inline CSS and JavaScript Code is Such a Bad Thing | [https://dzone.com/articles/why-inline-css-and-javascript-](https://dzone.com/articles/why-inline-css-and-javascript-)

**Resources**:

- JavaScript: Advantages and Disadvantages http://www.jscripters.com/javascript-advantages-and-disadvantages/

## 2. Optimize CSS

Cascading Style Sheets (CSS) describe how HTML elements are to be displayed on screen, can save a lot of work, and can control the layout of multiple web pages simultaneously.

However, CSS can increase application load time if absolute dimensions and positions in CSS directives are specified, external stylesheets are not used to separate caching of the CSS from the content, CSS image assets are not combined into Sprite files, and/or there is more than one `H1` tag per page.

### Avoid Absolute Dimensions and Positions in CSS directives

**Issue** - Pixel and absolute dimensions and positions in CSS directives should be avoided, as they may not allow the browser to adapt content to fit the display or render correctly on all device types. However, there are exceptions to this rule. For example, if you want images to be tailored to fit a particular display it makes more sense to specify the dimension in pixels. In addition, pixel measures may be appropriate for margins, borders, and padding.

**Solution** – Use relative measures such as `em`, `ex`, `bolder`, `larger`, and `thick` where possible. For example, when specifying font, use `font-size: 1.5em` instead of `font-size: 12px`.

#### References

- Fixit - Measures | [https://mobiforge.com/design-development/fixit-measures](https://mobiforge.com/design-development/fixit-measures)

### Use External Stylesheets to Separate Caching of CSS from the Content

**Issue** – External stylesheets should be used to separate the CSS instructions from the HTML. This CSS caching by a web browser avoids another trip to the server and speeds up page loading.

**Solution** – In the `<head>` section of the HTML, use language to call the CSS file externally, keeping the CSS instructions in a separate file from the HTML (see below).

```
<link rel="stylesheet" type="text/css" href="https://mysite.com/main.css" media="screen" title="style (screen)" />
```

**Caveat**: Using many external CSS stylesheets can adversely affect performance, so they should be combined into a single external CSS.

#### References

- Internal vs External CSS | [http://infoheap.com/internal-vs-external-css/](http://infoheap.com/internal-vs-external-css/)
- Optimize CSS Delivery | [https://varvy.com/pagespeed/optimize-css-delivery.html](https://varvy.com/pagespeed/optimize-css-delivery.html)

### Combine CSS Image Assets into Sprite Files

**Issue** - When many images are used independently, it requires several network requests to download each one. CSS Sprites combine multiple images into a single image file for use on a website to speed up delivery and load time. The file can then be cut up using CSS.

**Solution** - You can find many tools to create sprite sheets, including Compass, Lemonade, SpriteMe, Fireworks CS6, and TexturePacker.

#### References

- Fixit – Image Sprints | [https://mobiforge.com/design-development/fixit-image-sprites](https://mobiforge.com/design-development/fixit-image-sprites)
- CSS Sprites: What They are, Why They’re Cool, and How to Use Them | [https://css-tricks.com/css-sprites/](https://css-tricks.com/css-sprites/)
- CSS Sprite Sheets: Best Practices, Tools and Helpful Applications | [https://webdesign.tutsplus.com/articles/css-sprite-sheets-best-practices-tools-and-helpful-applications--webdesign-8340](https://webdesign.tutsplus.com/articles/css-sprite-sheets-best-practices-tools-and-helpful-applications--webdesign-8340)

#### Resources

- What is CSS? | [https://www.w3schools.com/css/css_intro.asp](https://www.w3schools.com/css/css_intro.asp)

## 3. Optimize Images

Page weight, also known as "the gravity of the web," decreases your application performance by increasing load time and reducing network data usage. Understanding page weight, resource compression, optimization of images, and image dimensions is critical to a successful web strategy.

### Limit Page Size and Weight

**Issue** - The total file size of the page including dependent files will affect the load time and the amount of time it takes a mobile crawler to evaluate. Clean and light pages are best for mobile SEO; mobile search engines will prefer to rank these pages. Strive to keep the file size of all mobile pages below 25 kilobytes. This is the maximum file size that the iPhone will cache for any element that is downloaded.

**Solution** - There are many ways to reduce page weight including image optimization, gzip compression, Minification, Caching, JavaScript, and CSS consolidation. Other solutions include avoiding the following: embeds and includes, JavaScript and CSS frameworks, custom fonts, and unnecessary page clutter. The best solution depends on the specifics of your site.

#### References

- Fixit – Page Size Limit | [https://mobiforge.com/design-development/fixit-page-size-limit](https://mobiforge.com/design-development/fixit-page-size-limit)
- Understanding Page Weight | [https://mobiforge.com/research-analysis/understanding-web-page-weight](https://mobiforge.com/research-analysis/understanding-web-page-weight)
- Reducing Page Weight | [https://mobiforge.com/design-development/reducing-page-weight](https://mobiforge.com/design-development/reducing-page-weight)

### Enable Resource Compression

**Issue** - Compressing resources with gzip or Deflate can reduce the number of bytes sent over the network.

**Solution** - Most servers can be configured to use gzip compression. For example, you can enable gzip compression on an Apache server using the `.htaccess` configuration file. You can also use mod_gzip to enable gzip compression, and mod_deflate to compress the output from your server before sending it to your visitor. If your site is hosted on a Windows server, you can enable compression for both static and dynamic files by selecting “enable static compression” in the IIS (Internet Information Services) manager.

#### References

- Enable Compression | [https://developers.google.com/speed/docs/insights/EnableCompression](https://developers.google.com/speed/docs/insights/EnableCompression)
- Enable gzip Compression | [https://varvy.com/pagespeed/enable-compression.html](https://varvy.com/pagespeed/enable-compression.html)
- How to Enable gzip Compression | [https://www.giftofspeed.com/enable-gzip-compression/](https://www.giftofspeed.com/enable-gzip-compression/)

### Optimize Images

**Issue** - Images on the page should be optimized to reduce their file size without significantly affecting their visual quality. Formatting and compressing images can save many bytes of data.

**Solution** - Use image compression apps to easily reduce the file size of images. These tools remove hidden data in the image file, like additional color profiles and metadata (e.g., geolocation of where the photograph was taken), that aren’t needed. They provide a quick and easy way to reduce files size without losing any image quality. Image compression tools include TinyJPG, Compressor.io, Kraken, ImageOptimizer, ImageOptim, Crush Pics, and Minifier (Shopify Apps).

#### References

- Optimize Images | [https://developers.google.com/speed/docs/insights/OptimizeImages](https://developers.google.com/speed/docs/insights/OptimizeImages)
- Fixit – Image Crunch | [https://mobiforge.com/design-development/fixit-image-crunch](https://mobiforge.com/design-development/fixit-image-crunch)
- Optimizing Images for Web: A practical Guide | [https://www.abetterlemonadestand.com/optimizing-images-for-web/](https://www.abetterlemonadestand.com/optimizing-images-for-web/)
- How to Optimize Images for Your WordPress Website | [https://www.elegantthemes.com/blog/tips-tricks/optimize-images-for-your-wordpress-website](https://www.elegantthemes.com/blog/tips-tricks/optimize-images-for-your-wordpress-website)

### Specify Image Dimensions

**Issue** - Image dimensions should always be included and images should not be resampled at run-time, as this will slow the rendering of the page. When images are referenced from within your markup, you should list their display dimensions for the browser. Specifying a width and height for all images allows for faster rendering by eliminating the need for unnecessary reflows and repaints.

**Solution** - Specify image width and height by including the `width` and `height` attributes when you use the `img` element (see below).

```
<img src="images/clown.jpg" width="50" height="50" />
```

If no dimensions are specified in the containing document, or if the dimensions specified do not match those of the actual images, the browser will require a reflow and repaint once the images are downloaded. To prevent reflows, specify the width and height of all images either in the HTML `<img>` tag or in CSS.

#### References

- Fixit – Specify Image Sizes | https://mobiforge.com/design-development/fixit-specify-image-sizes
- Specify Image Dimensions | https://gtmetrix.com/specify-image-dimensions.html

## 4. Utilize Caching

Reducing the number of times your application requests and processes resources will improve your load time and reduce network data usage. You can do this in two ways: local caching or minimizing the use of external scripts and objects.

### Leverage Browser Caching

**Issue** - Fetching resources over the network is both slow and expensive and the download may require multiple round-trips between the client and server, which delays processing and may block rendering of page content. This can also incur data costs for the visitor. All server responses should specify a caching policy to help the client determine if and when they can reuse a previously fetched response.

**Solution** - Leverage browser caching by changing the request headers of your resources to use caching. You can either add some code to the `.htaccess` configuration file on the web host/server or use the basic `Cache-Control` HTTP header (see below).

```
Cache-Control: max-age=2592000, public
```

#### References

- Leverage Browser Caching | [https://developers.google.com/speed/docs/insights/LeverageBrowserCaching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)
- Fixit - Caching | [https://mobiforge.com/design-development/fixit-caching](https://mobiforge.com/design-development/fixit-caching)
- Leverage Browser Caching | [https://varvy.com/pagespeed/leverage-browser-caching.html](https://varvy.com/pagespeed/leverage-browser-caching.html)
- What is .htaccess? | [http://www.htaccess-guide.com/](http://www.htaccess-guide.com/)
- Cache-Control | [https://varvy.com/pagespeed/cache-control.html](https://varvy.com/pagespeed/cache-control.html)

### Combine Multiple Files For Improved Performance

**Issue** - Every external object downloaded on a page requires a separate domain name server (DNS) request. This is not a big problem on a traditional computer with a fast connection, but on slower mobile networks it can cause latency. This will hurt application performance and load time.

**Solution** - Reduce the number and size of resources required for the site. However, if that is not possible, combine all external CSS files into a single style sheet or all JavaScript files into one big file to reduce the number of calls to the browser.

#### References

- Mobile Web Application Best Practices – Minimize External Resources | [https://varvy.com/pagespeed/cache-control.html](https://www.w3.org/TR/mwabp/#bp-conserve-ext-files)
- How to Reduce HTTP requests to Speed Up Your WordPress Site | [https://yoast.com/reduce-http-requests-wordpress/](https://yoast.com/reduce-http-requests-wordpress/)
- Easy Steps to Improve Page Load Times | [http://www.peachpit.com/articles/article.aspx?p=1431494&seqNum=5](http://www.peachpit.com/articles/article.aspx?p=1431494&seqNum=5)

## 5. Avoid Pop-ups

The use of pop-ups is not necessarily bad on a desktop application. However, if the application uses responsive design or is used on a mobile application, pop-ups often obstruct and hurt the user experience. They draw the user's attention away from the page to the pop-up, and the novice user quickly becomes confused and frustrated.

### Pop-ups

**Issue** - Pop-up windows are not supported on many mobile devices and using them can have unpredictable results

**Solution** - There are many alternatives to pop-ups that are visible without taking up the entire window, such as lightboxes, inline expansion, and stationary banner ads.

#### References

- Fixit – Pop-up Windows | [https://mobiforge.com/design-development/fixit-pop-windows](https://mobiforge.com/design-development/fixit-pop-windows)
- The Death of Mobile Pop-Ups and What You Can Do Instead | [http://searchengineland.com/death-mobile-pop-ups-can-instead-263390](http://searchengineland.com/death-mobile-pop-ups-can-instead-263390)
- Google is Cracking Down on Intrusive Mobile Pop-Ups: Here's What Marketers Need to Know | [https://blog.hubspot.com/marketing/google-pop-up-mobile-marketing#sm.0000u10cf1u3gcsdyzz2qa1xm5ugf](https://blog.hubspot.com/marketing/google-pop-up-mobile-marketing#sm.0000u10cf1u3gcsdyzz2qa1xm5ugf)
- Which is the Best Alternative to a Pop-up? | [https://www.quora.com/Which-is-the-best-alternative-to-a-pop-up](https://www.quora.com/Which-is-the-best-alternative-to-a-pop-up)
- 5 Essential UX Rules for Dialog Design | [https://uxplanet.org/5-essential-ux-rules-for-dialog-design-4de258c22116](https://uxplanet.org/5-essential-ux-rules-for-dialog-design-4de258c22116)
- 9 Not So Intrusive Alternatives to Hover Pop-up Ads | [https://www.linkedin.com/pulse/9-not-so-intrusive-alternatives-hover-pop-up-ads-paula-agius](https://www.linkedin.com/pulse/9-not-so-intrusive-alternatives-hover-pop-up-ads-paula-agius)

## Our Methodology for This Study

We used the following steps to conduct this study:

1. Using [Digital Analytics Program](https://digital.gov/dap/) (DAP) statistics, we pulled the names of the top 26 U.S. federal government websites accessed by mobile devices.
2. We tested each site using seven mobile-friendly automated test tools:
   - Google Mobile-Friendly Test | [https://www.google.com/webmasters/tools/mobile-friendly/](https://www.google.com/webmasters/tools/mobile-friendly/)
   - Mobile Moxie | [https://www.mobilemoxie.com/tools/site_analysis/](https://www.mobilemoxie.com/tools/site_analysis/)
   - Mobi Ready | [http://ready.mobi/](http://ready.mobi/)
   - Page Insights | [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/)
   - W3C MobileOK Checker | https://validator.w3.org/mobile/
   - Varvy SEO tool | [https://varvy.com/](https://varvy.com/)
   - Gtmetrix - [https://gtmetrix.com/](https://gtmetrix.com/)
3. After looking at the failed criteria reported by each tool, we compiled the results into a single Microsoft Excel spreadsheet.
4. We grouped the issues that we found on 15 or more sites into the five categories covered in this guide, which are listed in order of most occurrences (JavaScript) to least occurrences (pop-ups).

---

_All references to specific brands and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency._
