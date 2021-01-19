---
slug: optimize-minify-compression
date: 2018-12-21 10:00:00 -0500
title: 'The Smaller the Better, When It Comes to Page Resources!'
summary: "This week's addition to the Eight Principles of Mobile-Friendliness guide covers making page resources smaller to improve page rendering."
guide: mobile-principles

aliases:
  - /resources/mobile/principles/optimize-minify-compression

---

This week we will talk about making page resources smaller to improve the rendering of the page.

The incorrect sizing and placement of objects on a site may lead to longer page load times and mobile unfriendliness. Mobile devices are getting faster with every new release, however they still rely on the mobile network to get the information to the device and we have all been in locations where we have little to no bars of connectivity. If we can reduce the size of what is being sent over the network, the page will load faster. The following are 5 solutions to make your page content lighter:

1. Enable Compression
2. Minify Resources
3. Optimize Images
4. Optimize CSS Delivery
5. Prioritize Visible Content

## Enable Compression

### Issue: Large page files, which result in poor rendering performance

Enabling file compression typically saves around 50 to 70 percent of the file size, and may reduce the size of page resources by up to 90 percent. This will significantly reduce the time it takes to download the resource, and improve the time to first render the page. A good standard practice is to use gzip since all modern browsers support gzip compression for HTTP requests.

### Solution: Use gzip on compressible resources!

Your web server has gzip compression enabled (but may be configured differently depending on the specific server). The following four examples, [outlined in a blog post on Varvy.com](https://varvy.com/pagespeed/enable-compression.html), are ways to enable gzip on some of the most common servers.

**General .htaccess** — Enable the zip parameters in the `.htaccess` file. Below is an example:

<pre>
&#60;ifModule mod_gzip.c&#62;
mod_gzip_on Yes
mod_gzip_dechunk Yes
mod_gzip_item_include file .(html?|txt|css|js|php|pl)$
mod_gzip_item_include handler ^cgi-script$
mod_gzip_item_include mime ^text/.*
mod_gzip_item_include mime ^application/x-javascript.*
mod_gzip_item_exclude mime ^image/.*
mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
&#60; /ifModule&#62;
</pre>

**Apache Server** — Enable the zip parameters in the .htaccess file. Below is an example:

<pre>
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript
</pre>

**NGINX Server** — Enable compression by adding the following code to your config file:

<pre>
gzip on;
gzip_comp_level 2;
gzip_http_version 1.0;
gzip_proxied any;
gzip_min_length 1100;
gzip_buffers 16 8k;
gzip_types text/plain text/html text/css application/x-javascript
text/xml application/xml application/xml+rss text/javascript;

# Disable for IE &lt; 6 because there are some known problems
gzip_disable "MSIE [1-6].(?!.*SV1)";

# Add a vary header for downstream proxies to avoid sending cached
gzipped files to IE6
gzip_vary on;
</pre>

**Litespeed Server** — Under the server's configuration section, go to “Tuning” and make sure that “enable compression” is on.

You can quickly a test with a gzip compression tool, such as https://varvy.com/tools/gzip/.

One final word of caution: proxy servers and anti-virus software may disable compression as files are downloaded to a client machine.

### References

- **Enable Compression** | https://developers.google.com/speed/docs/insights/EnableCompression
- **Enable Gzip Compression** | https://varvy.com/pagespeed/enable-compression.html
- **How to Fix PageSpeed Insights Enable Compression in WordPress** | https://www.proteusthemes.com/help/fix-pagespeed-insights-enable-compression-wordpress/

## Minify Resources

### Issue: Large CSS, JavaScript, and HTML Files Increase Download Speeds

To improve performance CSS, JavaScript, and HTML files should be as lean as possible. Minification is the process of removing unnecessary or redundant data, unnecessary spaces, formatting and comments from the files, without affecting how the resource is processed by the browser - e.g., code comments and formatting, removing unused code, and using shorter variable and function names. This in turn reduces the file size and potentially increases the download speed of the file to the browser.

The following is an example of how minification reduces a CSS file.

The following is the CSS file text that has not been minimized:

<pre>
&#47;&#42; Slider Comment 1 &#42;&#47;

&#35;slider ul &#123;
  position: relative;
  margin: 0;
  padding: 0;
  height: 200px;
  list-style: none;
&#125;

&#47;&#42; Slider Comment 2 &#42;&#47;

#slider ul li &#123;
  position: relative;
  display: block;
  float: left;
  margin: 0;
  padding: 0;
  width: 500px;
  height: 300px;
  background: #ccc;
  text-align: center;
  line-height: 300px;
&#125;
</pre>

The following is the CSS file text minimized, notice the difference, no white space and everything on one line:

`#slider ul {position:relative; margin:0; padding:0; height:200px; list-style:none;} #slider ul li {position:relative; display:block; float:left; margin:0; padding:0; width:500px; height:300px; background:#ccc; text-align:center; line-height:300px;} `

### Solution: Use tools to minify CSS, JavaScript, and HTML files!

Each file type requires a different process to minimize the file, and there are many tools available to minify each file type. The following are some examples.

- **HTML**
  - html-minifier - https://github.com/kangax/html-minifier
  - HTML Minifier tool - https://www.webnots.com/seo-tools/html-minifier
- **CSS**
  - cssnano - https://github.com/cssnano/cssnano
  - csso - https://github.com/css/csso
  - CSS Minifier - https://www.webnots.com/seo-tools/css-minifier
- **JavaScript**
  - UglifyJS2 - https://github.com/mishoo/UglifyJS2
  - JSMin - http://crockford.com/javascript/jsmin
  - YUI Compressor - http://yui.github.io/yuicompressor/
  - JS Minifier - https://www.webnots.com/seo-tools/js-minifier

### References

- **Minify Resources (HTML, CSS, and JavaScript)** | https://developers.google.com/speed/docs/insights/MinifyResources
- **YSlow: Minify JavaScript and CSS** | https://gtmetrix.com/minify-javascript-and-css.html
- **What is Minification and How to Minify CSS, JS and HTML?** | https://www.webnots.com/what-is-minification-of-css-javascript-and-html/

## Optimize Images

### Issue: Image files are too large and impact performance

To improve performance, images should be as lean as possible. We often create or save beautiful colorful images to our site not understanding that images often account for most of the downloaded bytes on a page. Images hold data other than simply the pixels we see on the screen; this data increases the size of the image file, which in turn leads to longer load times as the image downloads.

Additionally, there are two forms of compression: Lossy and Lossless. The Lossless format retains all the information needed to produce the original image. So Lossless images carry a lot more data and in return are a much larger file size, while the Lossy formatted images will look slightly different than the original image when uncompressed. Keep in mind that this is noticeable. Lossy compression is good for web because images use a smaller amount of memory, but can look like the original image.

We choose to optimize images because 90 percent of most websites are graphics-dependent and therefore have a lot of image files. Leaving these images uncompressed and in the wrong format can drastically slow down your page load times.

### Solution: Use tools to compress image files!

While image optimization is still more of an “art” than a science, the following are three key considerations when optimizing an image:

 - **Use Proper File Formats** – For graphics such as icons, bullets or other graphics that don't use many colors, use a [GIF file format](https://en.wikipedia.org/wiki/GIF) and save the file with fewer colors. However, if your image has more detailed graphics and colors, use [JPEG file format](https://en.wikipedia.org/wiki/JPEG) to save your images and reduce the quality. The following are a few more file format recommendations:
   - Use JPEG files for all high quality photographic images
   - Use GIF files for imagines that contain animation or very small or simple graphics. For example, images less than 10 x 10 pixels, or a color palette of fewer than 3 colors
   - Never use [BMP](https://en.wikipedia.org/wiki/BMP_file_format) or [TIFF](https://en.wikipedia.org/wiki/TIFF) image files
 - **Save the Image Using Proper Dimensions** - Save the image in the desired size to reduce the file size instead of using HTML or CSS to resize your images. This will improve the rendering time. There are many programs available to resize images—from the simple [GNU Image Manipulation Program](https://www.gimp.org/) (GIMP), to more advanced software programs such as Photoshop, Illustrator, or Fireworks.
 - **Optimize the Image** - Crop your images to remove any whitespace around the image, and use CSS to provide padding. Image optimization is done using one of many tools depending on the format. The following are some examples of image compression tools.
   - **Multiple File Types**
     - ImageMagick https://www.imagemagick.org/script/convert.php
   - **JPEG**
     - JPEE 9 http://jpegclub.org/
     - jpegoptim http://freshmeat.sourceforge.net/projects/jpegoptim/
   - **PNG**
     - OptiPNG: Advanced PNG Optimizer http://optipng.sourceforge.net/
     - PNGOUT http://www.advsys.net/ken/util/pngout.htm

### References

- **Optimize Images** | https://developers.google.com/speed/docs/insights/OptimizeImages
- **PageSpeed: Optimize Images** | https://gtmetrix.com/optimize-images.html
- **Image Optimization 101 – Optimize Blog Post Images For SEO** | https://www.bloggertipstricks.com/image-optimization-seo.html

## Optimize CSS Delivery

### Issue: Render-blocking style sheets results in slow page load times

For the browser to render a page it must first process all the style and layout information. However, the browser will block rendering until all external stylesheets are downloaded and processed, which may require multiple round trips and delay the time to first render.

In a perfect and uncomplicated world, CSS setup might look something like this:

- A single external style sheet will be used and be smaller than 75 kb
- For content appearing above the fold, use inline CSS in the style attribute of HTML tags for quicker page rendering of the content that will be viewed first
- No [&#64;import calls](https://www.w3schools.com/cssref/pr_import_rule.asp) being made to the CSS
- No CSS in HTML code such as divs or h1s below the fold, as this content can load slower than the code above the fold that is generally read first by the user.

However, in practice, things are often more complicated, and each complication delays page rendering.

### Solution: Streamline your CSS files to make them more efficient!

The following are some recommendations on how to streamline your CSS files to promote the fastest loading and rendering for the client:

 - **Don't inline large data URLs** – A Data URL is a URI scheme that provides a way to inline data in an HTML document. While inlining small URIs in your CSS may be fine, inlining large data URIs can cause the size of the CSS to be much larger, which will slow down page render time. There are many data URL generators available online to assist in building URI schemas most efficiently.

 - **Do not inline CSS attributes in HTML elements** – Avoid using inline CSS on repeated HTML elements, such as the paragraph tag `<p style="___;">` where possible because this often leads to code duplication. Traditionally, we have included inline CSS styles in HTML elements, but this may cause browsers to respond slower. We should avoid using inline CSS on repeated HTML elements below the fold where possible (such as the paragraph tag `<p style="___;">`) because this often leads to code duplication. Additionally, including styles in our code is against the [Content Security Policy](https://frontend.18f.gov/security/content-security-policy/) of the World Wide Web Consortium (W3C) that will block any element levels styles by default. Additional guidance can be found the [W3C 2016 Content Policy Level 2 Recommendation](https://www.w3.org/TR/CSP2/), or the [W3C 2018 Content Security Policy Level 3 Working Draft](https://www.w3.org/TR/CSP3/).

 - **If you have more than one CSS file, they should be combined into one file** – If using multiple external CSS files, consolidate them into a single file to improve the download time by decreasing the round trip fetching files.

 - **External CSS files** – The use of external CSS files is the main way that CSS is being used in web pages, with the CSS instructions in a separate file other than your HTML. The advantage of this is that the CSS file is being cached by the browser. However, the problem arises when there are several of these files.

 - **Do not use &#64;import to call your CSS files** - The &#64;import call is when external CSS files are called using the &#64;import command rather than linking to it directly. This causes the CSS file to load slower than the link method as they can only be downloaded one at a time using this method. This decreases speed of rendering as it waits for downloading files.

Once you have your site and pages ready, run it against these two sites, which will help you assess the performance of your CSS sheets:

- CSS Delivery Tool https://varvy.com/tools/css-delivery/
- Inline CSS Scripts https://www.giftofspeed.com/inline-your-css-code/

### References

- **CSS Optimized Test** | https://www.giftofspeed.com/css-delivery/
- **Optimize CSS Delivery**
  - https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
  - https://varvy.com/pagespeed/optimize-css-delivery.html

## Prioritize Visible Content

### Issue: Users don’t need the entire page to load to start looking at the above the fold content.

Visible content—also referred to as, _[above the fold](https://en.wikipedia.org/wiki/Above_the_fold)_ (a newspaper term)—is the part of the screen that the user sees first, before they do any scrolling. Often this is the title and/or navigation menu. Users want to see a page load quickly. However, many web pages are fairly large and no user wants to wait for an entire page to load before they see any visible content. The bigger the page, the more network round-trips are required to fetch and to render the above-the-fold content of the page. Loading the visible content before the other elements of a page creates a much better user experience.

### Solution: Prioritize and limit the size of the data needed to render the visible content or above the fold content of your page

In addition to the other performance recommendations above (such as enabling compression, minifying resources, optimizing images, and optimizing CSS delivery), below are some additional recommendations you can use to prioritize and limit the size of your page to improve the visual content experience:

 - **Structure HTML to load the visible or above-the-fold content first** – The simplest way to improve how a user perceives the load time of a web page is to load the HTML required for the above-the-fold content first by placing it at the top of the HTML file within the body tags. Since the browser reads HTML one line of code at a time, and in order, code for the visible content will be read and executed first. <br /><br />Moving a block of HTML code is easy, simply cut and paste the HTML block that contains the visible content above all the other elements. Yet, another option to speed up the loading of the visible content is to place all the CSS required to display the content within the HTML file instead of a separate file.

 - **Load components in order of importance** – List your components and order them from most to least important and look for a way to load them in priority order. For example, if you have main content and a sidebar that includes a Google AdSense ad, a Twitter button, Facebook button, and a Google Plus button, it would be most advantageous to load the main page then the less important sidebar, then any footer content such as company location and contact information. Finally, try to leave any JavaScript processing until the end after the page load, to save some time. By loading things in priority order, the user can start reviewing the Visible Content or above-the-fold while the rest of the page loads and they will report a great loading page even if the entire page has not actually loaded.

### References

- **Reduce the Size of the Above the fold Content** | https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent
- **Prioritize Visible Content**
  - https://varvy.com/pagespeed/prioritize-visible-content.html
  - http://web-design-eastbourne.co.uk/blog/prioritize-visible-content/

---

_(All references to specific brands, products, and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency.)_
