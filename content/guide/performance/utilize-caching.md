---
url: /guide/performance/utilize-caching/
title: 'Utilize Caching'
type: guide
guide: performance
summary: 'How to utilize caching to improve the performance of your website.'
weight: 5
deck: 'Reducing the number of times your application requests and processes resources will improve your load time and reduce network data usage'
---

You can do this in two ways: local caching or minimizing the use of external scripts and objects.


## Leverage Browser Caching

**Issue** - Fetching resources over the network is both slow and expensive and the download may require multiple round-trips between the client and server, which delays processing and may block rendering of page content. This can also incur data costs for the visitor. All server responses should specify a caching policy to help the client determine if and when they can reuse a previously fetched response.

**Solution** - Leverage browser caching by changing the request headers of your resources to use caching. You can either  add some code to the “.htaccess” configuration file on the web host/server or use the basic Cache-Control HTTP header (see below).

```
Cache-Control: max-age=2592000, public
```

### References

- Leverage Browser Caching | https://developers.google.com/speed/docs/insights/LeverageBrowserCaching
- Fixit - Caching | https://mobiforge.com/design-development/fixit-caching
- Leverage Browser Caching | https://varvy.com/pagespeed/leverage-browser-caching.html
- What is .htaccess? | http://www.htaccess-guide.com/
- Cache-Control | https://varvy.com/pagespeed/cache-control.html



## Combine Multiple Files For Improved Performance

**Issue** - Every external object downloaded on a page requires a separate DNS request. This is not a big problem on a traditional computer with a fast connection, but on slower mobile networks it can cause latency. This will hurt application performance and load time.

**Solution** - Reduce the number and size of resources required for the site. However, if that is not possible, combine all external CSS files into a single style sheet or all JavaScript files into one big file to reduce the number of calls to the browser.


### References

- Mobile Web Application Best Practices – Minimize External Resources | https://www.w3.org/TR/mwabp/#bp-conserve-ext-files
- How to Reduce HTTP requests to Speed Up Your WordPress Site | https://yoast.com/reduce-http-requests-wordpress/
- Easy Steps to Improve Page Load Times | http://www.peachpit.com/articles/article.aspx?p=1431494&seqNum=5
