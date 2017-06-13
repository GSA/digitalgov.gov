---


date: 2015-09-16 10:00:13 -0400
title: 'Speed Matters\: Optimizing Your Website For Maximum Performance'
summary: 'Every second counts, even those precious two or three seconds it takes your website to load. When it comes to mobile, users won&rsquo;t wait. During a recent DigitalGov University webinar, Jeremy Vanderlan, Technical Deputy for AIDS.gov, explained how even fractions of a second can have a negative impact on a user&rsquo;s impression of your website.'
authors: [jparcell]
categories:
  - Content
  - Mobile
  - Monthly Theme
tags:
  - analytics
  - HHS
  - mobile
  - mobile testing
  - Mobile UX Guideline 4
  - Recaps
  - United States Department of Health and Human Services
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/11/600-x-330-Slow-Connection-Speed-Internet-Jrcasas-iStock-Thinkstock-164483907.jpg" alt="Slow Connection Speed Internet" %} 

Every second counts, even those precious two or three seconds it takes your website to load. When it [comes to mobile](https://www.WHATEVER/2014/11/18/trends-on-tuesday-speed-matters-when-measuring-responsive-web-design-performance-load-times/), users won’t wait.

During a [recent DigitalGov University webinar](https://www.youtube.com/watch?t=10&v=sDTgYySlvEI), Jeremy Vanderlan, Technical Deputy for AIDS.gov, explained how even fractions of a second can have a negative impact on a user’s impression of your website. Performance/load time for Web pages has become so important that Google now considers it [one of three equal components](http://backlinko.com/google-ranking-factors) to good user experience, along with design and functionality, he noted.

Vanderlan offered tips on how agencies can test and increase their speed. In addition, he demoed a number of free or low-cost testing tools he regularly uses to get measures on the following [key metrics](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics):

  * Time to First Byte—This is the measure of how long it takes for the request that is sent to the Web server by the browser to be returned. Think of it as a “round trip” measurement. This is also a good gauge of caching resources on the server (think static, as opposed to dynamic content).
  * Start Render—This is when the browser starts painting the content onto the page.
  * Requests—This is the total number of Web assets being sent to the browser. These files are: images, HTML, CSS, and JavaScript.
  * Document Complete—This is the time it takes for all of the static content to be loaded by the browser.
  * Bytes In—This is the overall weight, in bytes, of the Web page. This is the amount of kilobytes or megabytes being sent. The impact here is on user data plans.

Vanderlan explained that while 80% of your Web page’s load time is determined by factors on the client side, you should perform due diligence and verify that your server is doing its part (e.g., caching content.)

He said the best opportunity for optimization are those pretty images you have sprinkled all over your website. Reducing their size will go a long way to improving the load times of the Web pages.

JavaScript loading is the tricky component in all of this. Often, common components like jQuery or analytics tools can actually slow down the browser’s rendering speed. This is because JavaScript executes in a single thread in the browser; it blocks other activities from happening. In the case of a tool like Google Analytics, it has no part in rendering content on the page, so if possible, it should always be deferred as one of the last elements to be requested from the server. Each site is different in this respect, but identifying JavaScript that slows down the browser can yield significant performance wins.

Vanderlan also emphasized that performance testing should become a regular habit: Make someone accountable for testing, develop an action plan and focus on critical tasks. Start by knowing your website traffic—identify where most people going, and then work from there.

Watch the webinar for other tips and tools that will help improve your website’s speed!

[youtube=http://www.youtube.com/watch?v=sDTgYySlvEI&w=600]