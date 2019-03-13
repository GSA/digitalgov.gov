---
url: /guide/performance/optimize-images/
title: 'Optimize Images'
type: guide
guide: performance
guidenav: performance
summary: 'How to optimize images and improve the performance of your website.'
weight: 3
deck: 'Understanding page weight, resource compression, optimization of images, and image dimensions is critical to a successful web strategy'
---

Page weight is the “gravity of the web” that decreases your application performance by increasing load time and reducing network data usage. Understanding page weight, resource compression, optimization of images, and image dimensions is critical to a successful web strategy.


## Limit Page Size and Weight

**Issue** - The total file size of the page including dependent files will affect the load time and the amount of time it takes a mobile crawler to evaluate. Clean and light pages are best for mobile SEO; mobile search engines will prefer to rank these pages. Strive to keep the file size of all mobile pages below 25Kb. This is the maximum file size that the iPhone will cache for any element that is downloaded.

**Solution** - There are many ways to reduce page weight including image optimization, gzip compression, Minification, Caching, JavaScript, and CSS consolidation. Other solutions include avoiding the following: embeds and includes, JavaScript and CSS frameworks, custom fonts, and unnecessary page clutter. The best solution depends on the specifics of your site.


### References

- Fixit – Page Size Limit | https://mobiforge.com/design-development/fixit-page-size-limit
- Understanding Page Weight | https://mobiforge.com/research-analysis/understanding-web-page-weight
- Reducing Page Weight | https://mobiforge.com/design-development/reducing-page-weight


## Enable Resource Compression

**Issue** - Compressing resources with gzip or Deflate can reduce the number of bytes sent over the network.

**Solution** - Most servers can be configured to use gzip compression. For example, you can enable gzip compression on an Apache server using the .htaccess configuration file. You can also use Mod_gzip to enable gzip compression and mod_deflate to compress the output from your server before sending it to your visitor. If your site is hosted on a Windows server, you can enable compression for both static and dynamic files by selecting “enable static compression” in the IIS manager.

### References

- Enable Compression | https://developers.google.com/speed/docs/insights/EnableCompression
- Enable gzip Compression | https://varvy.com/pagespeed/enable-compression.html
- How to Enable gzip Compression | https://www.giftofspeed.com/enable-gzip-compression/


## Optimize Images

**Issue** - Images on the page should be optimized to reduce their file size without significantly affecting their visual quality. Formatting and compressing images can save many bytes of data.

**Solution** - Use image compression apps to easily reduce the file size of images. These tools remove hidden data in the image file, like additional color profiles and metadata (e.g. geolocation of where the photograph was taken), that aren’t needed. They provide a quick and easy way to reduce files size without losing any image quality. Image compression tools include TinyJPG, Compressor.io, Kraken, ImageOptimizer, ImageOptim, Crush Pics, and Minifier (Shopify Apps).


### References

- Optimize Images | https://developers.google.com/speed/docs/insights/OptimizeImages
- Fixit – Image Crunch | https://mobiforge.com/design-development/fixit-image-crunch
- Optimizing Images for Web: A practical Guide | https://www.abetterlemonadestand.com/optimizing-images-for-web/
- How to Optimize Images for Your WordPress Website | https://www.elegantthemes.com/blog/tips-tricks/optimize-images-for-your-wordpress-website


## Specify Image Dimensions

**Issue** - Image dimensions should always be included and images should not be resampled at run-time, as this will slow the rendering of the page. When images are referenced from within your markup, you should list their display dimensions for the browser. Specifying a width and height for all images allows for faster rendering by eliminating the need for unnecessary reflows and repaints.

**Solution** - Specify image width and height by including the width and height attributes when you use the `<img>` element (see below).

```
<img src="images/clown.jpg" width="50" height="50" />
```

If no dimensions are specified in the containing document, or if the dimensions specified do not match those of the actual images, the browser will require a reflow and repaint once the images are downloaded. To prevent reflows, specify the width and height of all images either in the HTML `<img>` tag or in CSS.

### References

- Fixit – Specify Image Sizes | https://mobiforge.com/design-development/fixit-specify-image-sizes
- Specify Image Dimensions | https://gtmetrix.com/specify-image-dimensions.html
