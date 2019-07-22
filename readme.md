# Digital.gov

## We help people in government build better digital services
https://digital.gov

- Sign-up for the [Digital.gov newsletter »]({{< ref "/about/subscribe.md" >}})
- Follow us on [Twitter »](https://twitter.com/digital_gov/)
- Like our page on [Facebook »](https://www.facebook.com/digitalgov/)


---


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

`hugo serve --config=config.yml` _(can take 2-3 minutes to launch)_
or
`hugo serve --config=config_dev.yml` _(can take 20 secsto launch but only builds a portion of the content)_

**visit** http://localhost:1313/
