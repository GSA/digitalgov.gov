<h1><img src="https://demo.digital.gov/img/digitalgov-logo-black.svg" alt="Digital.gov Logo"/></h1>

## We help people in government build better digital services
https://digital.gov

- Sign-up for the [Digital.gov newsletter »]({{< ref "/about/subscribe.md" >}})
- Follow us on [Twitter »](https://twitter.com/digital_gov/)
- Like our page on [Facebook »](https://www.facebook.com/digitalgov/)

Want to learn more about how we work? [Check out our Wiki page »](https://github.com/GSA/digitalgov.gov/wiki)


---


[![CircleCI](https://circleci.com/gh/GSA/digitalgov.gov/tree/master.svg?style=svg)](https://circleci.com/gh/GSA/digitalgov.gov/tree/master)

## Development Guide

[Digital.gov](https://digital.gov/) is built with [Hugo](https://gohugo.io/) and hosted by [Federalist](https://federalist.18f.gov/) and [Cloud.gov](https://cloud.gov/).


### Install NPM Dependencies

`npm install`

### Install Hugo

[Read the HUGO quickstart guide »](https://gohugo.io/getting-started/quick-start/)

**For OSX:**
`brew install hugo`
_see https://gohugo.io/getting-started/installing/ for other OSs_

#### Run

1. Run `hugo serve` in the terminal
2. _wait 5-6 secs_
3. visit http://localhost:1313/

**Other helpful HUGO commands:**

- `hugo serve --templateMetricsHints` — for seeing where you can apply caching in templates and speed up the build time
[See more »](https://gohugo.io/commands/hugo/)


## Accessibility tests

We follow the WCAG2AA standard, and one of the ways we check that we're following the right rules is through automated tools, like [**pa11y**](https://github.com/pa11y/pa11y/). For more info on the rules being tested checkout the [pa11y wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).

### Running tests

To run a web accessibility test on digital.gov do the following:

1. Check out the site from GitHub https://github.com/GSA/digitalgov.gov/
1. Install and run the site locally following the `Install` and `Run` instructions above. *Site must be running locally to perform the scan.*
  - If this is your first time running pa11y, then you'll need to run `npm install` to make sure pa11ly is installed.
2. In a separate terminal window, run `npm run test:pa11y` to initiate the accessibility checker.

*Note*: Currently, this only runs accessiblity checks on the site home page as a Proof of Concept demonstration.

Accessibility testing configuration is located in the .pa11yci file.


## Common Regex scripts

### convert legacy-img to standard img

```
{{< legacy-img src="/\d+/\d+/\d{2,4}[-x]+\d{2,4}[_-]*(.+?)\.[pngje]+"( alt=".+?")* >}}
```
```
{{< img src="$1"$2 >}}
```

### convert CDN links
```
{{< legacy-img src="/(\d{4,4})
{{< legacy-img src="$1
```

### replace `url` with `slug` in posts
```
^url: .+/([^/]+)\.md
slug: $1
```
