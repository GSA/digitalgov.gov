---
slug: javascript
date: 2018-10-09 12:30:00 -0500
title: 'JavaScript Is Really Cool, When Used With Care'
summary: 'Week one of our series, Eight Principles of Mobile-Friendliness, covers the benefits of using JavaScript.'
guide: mobile-principles

aliases:
  - /resources/mobile/principles/javascript

---

JavaScript seems to have it all. It is readily available and widely used by mainstream programmers with great documentation and support. JavaScript is complemented by many other technologies and libraries such as JSON, and especially useful for graphical user interfaces (GUI). JavaScript benefits from being part of HTML5. Finally, JavaScript _will probably_ be with us for a long time as there is much JavaScript-related innovation being worked on, the JavaScript web platform is maturing rapidly, and, most importantly, JavaScript is supported by a broad coalition of companies.

With all these benefits to using JavaScript, like any great functionality&mdash;if not used correctly&mdash;it can make your site unfriendly and detract from its benefits. The following are three preventable issues caused by the incorrect implementation of JavaScript that may lead to mobile unfriendliness.

1. JavaScript Minify
2. JavaScript Placement
3. Inline JavaScript

All three of these may negatively impact your site’s performance and can be detected using Google's [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) tool, [DigitalDashboard.gov](https://www.digitaldashboard.gov/), or the [Information Technology &amp; Innovation Foundation (ITIF) Benchmarking Report](https://itif.org/publications/2017/03/08/benchmarking-us-government-websites).

## 1. JavaScript Minify

**Issue: JavaScript, as written, included dead space that slows download and execution time**

JavaScript files should always be minimized to reduce transit time and help speed up page load.

**Solution: Use tools to minify all JavaScript!**

Minification removes unnecessary or redundant data without affecting how the resource is processed by the browser. The Integrated Developer Environment (IDE) tool used to develop the site may include features that will minify the JavaScript during the build process.

You can also do this with Google Closure tools, including the Closure Compiler, an optimizer that rewrites your code and minimizes the dead space to make it download faster. It is typical to minify only in the production environment, as troubleshooting and debugging in the development environments will be easier with
non-minified JavaScript.

### References

- [Minify Resources (HTML, CSS, and JavaScript)](https://developers.google.com/speed/docs/insights/MinifyResources)
- [How to Minify Your Websites CSS, HTML & JavaScript](https://www.elegantthemes.com/blog/tips-tricks/how-to-minify-your-websites-css-html-javascript)

## 2. JavaScript Placement

**Issue: Where you place your JavaScript affects the site’s performance**

Grouping JavaScript at the end of the page markup is optimal for page load. When the HTTP specification puts JavaScript elsewhere on the page (e.g. at the top), this may result in loading blocking while the JavaScript files are downloaded. Additionally, before the browser can render a page it has to build the DOM tree by parsing the HTML markup. Whenever the parser encounters a script, it stops and executes the script before it continues parsing. This slows the performance of the page load.

**Solution: Place JavaScripts so they don’t block browser loading**

Put scripts in the `<head>` tag and use the `async` or `defer` attributes, which allows the scripts to be downloaded ASAP without blocking your browser.

Scripts with the `async` attribute are executed asynchronously. This means the script is executed as soon as it is downloaded —without blocking the browser in the meantime—and that script 2 can be downloaded and executed before script 1.

Scripts with the `defer` attribute are executed in order (i.e. first script 1, then script 2). This also does not block the browser. Unlike _async_ scripts, _defer_ scripts are only executed after the entire document has been loaded.

### References

- [Fixit – JavaScript Placement](https://mobiforge.com/design-development/fixit-javascript-placement)
- [Remove Render Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)
- [Reduce the size of the above the fold content](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)
- [Where should I put `<script>` tags in HTML markup?](http://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup)

## 3. Inline JavaScript

**Issue: Inline JavaScript prevents browser from processing, thus slowing page rendering**

Inline JavaScript code should not be used because it requires that the browser pass JavaScript code markup that slows processing.

**Solution: Separate JavaScript code from the HTML**

Move all JavaScript code to a single minified file, which provides a clean separation of markup, style and code. This can also be accomplished by enabling the “Inline JavaScript” filter in Apache and Nginx web servers.

### References

- [Fixit – Inline JavaScript](https://mobiforge.com/design-development/fixit-inline-javascript)
- [Inline JavaScript](https://modpagespeed.com/doc/filter-js-inline)
- [Why Inline CSS and JavaScript Code is Such a Bad Thing](https://dzone.com/articles/why-inline-css-and-javascript-)

**JavaScript Resources**

[JavaScript: Advantages and Disadvantages](http://www.jscripters.com/javascript-advantages-and-disadvantages/)
[Why JavaScript?](http://speakingjs.com/es5/ch02.html)

**Testing Resources**

- [Google Mobile Friendly Test Tool](https://search.google.com/test/mobile-friendly)
- [DigitalDashboard.gov](https://www.digitaldashboard.gov/)
- [Information Technology & Innovation Foundation (ITIF) Benchmarking U.S. Government Websites Report](http://www2.itif.org/2017-benchmarking-us-government-websites.pdf) (2.7 MB PDF, 90 pages)
- [New ITIF Report Inspires a Closer Look at Website Performance and Security—Here Is Where to Begin](https://digital.gov/2017/03/24/new-itif-report-inspires-a-closer-look-at-website-performance-and-security-here-is-where-to-begin/)
