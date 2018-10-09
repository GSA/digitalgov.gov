---
url: /guide/performance/optimize-javascript
title: 'Optimize JavaScript'
type: guide
guide: performance
guidenav: performance
summary: 'How to optimize javascript to improve the performance of your website.'
weight: 4
deck: "The way your website uses JavaScript has a big impact on the performance of your website"

---

The most common issue found is JavaScript use. JavaScript is used on many desktop and mobile applications because it extends the functionality of web pages, is a relatively easy language to learn and use, and it executes relatively quickly on the client side. However, if JavaScript is not placed and executed from an optimal place in the code, not minimized, nor used inline, it may negatively affect the application performance on mobile devices that traditionally have minimal resources.

Keep in mind, if a website is developed using a Content Management System (CMS) or development framework, not all of these settings may be configurable. However, we suggest that developers research the capabilities of the system to determine if they can be. Some of these recommendations may occur in the web server layer, which may be separate from the program code.



## JavaScript Placement

**Issue** - Grouping JavaScript at the end of the page markup is optimal for page load. When the HTTP specification puts JavaScript elsewhere on the page (e.g. at the top), this may result in loading blocking while the JavaScript files are downloaded. Additionally, before the browser can render a page it has to build the DOM tree by parsing the HTML markup. Whenever the parser encounters a script, it stops and executes the script before it continues parsing. This slows the performance of the page load.

**Solution** - Put scripts in the `<head>` tag and use `async` or `defer` attributes, which allows the scripts to be downloaded ASAP without blocking your browser.

Scripts with the `async` attribute are executed asynchronously. This means the script is executed as soon as it is downloaded—without blocking the browser in the meantime—and that the second script can be downloaded and executed before the first script.

Scripts with the `defer` attribute are executed in order (i.e., first script one, then script two). This also does not block the browser. Unlike `async` scripts,`defer` scripts are only executed after the entire document has been loaded.


### References

- Fixit – JavaScript Placement | https://mobiforge.com/design-development/fixit-javascript-placement
- Remove Render Blocking JavaScript | https://developers.google.com/speed/docs/insights/BlockingJS
- Reduce the size of the above the fold content | https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent
- Where should I put `<script>` tags in HTML markup?  http://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup


## Minify Your JavaScript

**Issue** - JavaScript files should always be minimized to reduce transit time and help speed up page load.

**Solution** - Minification removes unnecessary or redundant data without affecting how the resource is processed by the browser. The Integrated Developer Environment (IDE) tool used to develop the site may include features that will minify the JavaScript during the build process. You can also do this with Google Closure tools, including the Closure Compiler, an optimizer that rewrites your code and minimizes the dead space to make it download quicker. It is typical to minify only in the production environment, as troubleshooting and debugging in the development environments will be easier with non-minified JavaScript.

### References

- Minify Resources (HTML, CSS, and JavaScript) https://developers.google.com/speed/docs/insights/MinifyResources
- How to Minify Your Websites CSS, HTML & JavaScript https://www.elegantthemes.com/blog/tips-tricks/how-to-minify-your-websites-css-html-javascript


## Do Not Use Inline JavaScript

**Issue** - Inline JavaScript code should not be used because it requires that the browser pass JavaScript code markup that slows processing.

**Solution** - Move all JavaScript code to a single minified file, which provides a clean separation of markup, style and code. This can also be accomplished by enabling the “Inline JavaScript” filter in Apache and Nginx web servers.


### References
- Fixit – Inline JavaScript https://mobiforge.com/design-development/fixit-inline-javascript
- Inline JavaScript https://modpagespeed.com/doc/filter-js-inline
- Why Inline CSS and JavaScript Code is Such a Bad Thing https://dzone.com/articles/why-inline-css-and-javascript-

### Resources:

- JavaScript: Advantages and Disadvantages | http://www.jscripters.com/javascript-advantages-and-disadvantages/
