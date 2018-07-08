---
layout: primary
title: Automated testing
permalink: /front-end/automated-testing/
sidebar: frontend
question: Did your accessibility testing tools provide accurate results?
---

**Why it's important:** Including automated accessibility testing throughout the development process can help quickly catch [many accessibility errors](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/), but can’t guarantee that your site is accessible. Always combine automated testing with ongoing manual testing. Manual testing is the most reliable method to assess accessibility. 

### Steps to take
- **Quick check**: Use a tool to quickly check for common errors. You can use [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US), [Lighthouse Accessibility Audit (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse/), or [WAVE](http://wave.webaim.org/extension/).
- **Build process**: Integrate a tool like [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master) to your build process to add accessibility tests locally so you catch errors as you build out your website.
- **Continuous integration**: Use a tool like [AccessLint](https://www.accesslint.com/) to find accessibility issues in your GitHub pull requests.
- **Simulate impairments**: Use these tools to simulate color blindness, low vision, zoom, low contrast, high contrast, and more.

#### Resources
<a href="https://youtu.be/cOmehxAU_4s?t=8m57s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: How I do an accessibility check (tools and extensions)
</a>
