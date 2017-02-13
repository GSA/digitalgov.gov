---
layout: page
title: Automated testing
permalink: /automated-testing/
---

## Did your accessibility testing tools provide accurate results?

**Why it’s important**: Automated tools give you a broad overview and can help you catch things you missed in the manual review. Manual testing is the most reliable method to assess accessibility.

### Steps to take
- **Quick check**: Use a tool to quickly check for common errors. You can use [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US), [Chrome Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en), or [WAVE](http://wave.webaim.org/extension/).
- **Build process**: Integrate a tool like [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master) to your build process to add accessibility tests locally so you catch errors as you build out your website.
- **Continuous integration**: Integrate a tool like [AccessLintCI](https://github.com/accesslint/accesslint-ci) to run accessibility tests in CircleCI builds and see errors posted as comments in GitHub PRs.
- **Simulate impairments**: Use these tools to simulate color blindness, low vision, zoom, low contrast, high contrast, and more.

<button>Yes</button>
<button class="usa-button-secondary">No</button>
<button class="usa-button-outline" type="button">Skip >></button>
