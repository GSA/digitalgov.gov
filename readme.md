<h1><img src="https://digital.gov/img/digitalgov-logo.svg" alt="Digital.gov Logo"/></h1>

## We help people in government build better digital services

https://digital.gov

- Sign-up for the [Digital.gov newsletter »](https://digital.gov/about/subscribe/)
- Follow us on [Twitter »](https://twitter.com/digital_gov/)
- Like our page on [Facebook »](https://www.facebook.com/digitalgov/)

Want to learn more about how we work? [Check out our Wiki page »](https://github.com/GSA/digitalgov.gov/wiki)

---

## Repositories

As a product, [digital.gov](https://digital.gov) maintains a collection of repositories. All of our work is open source and we encourage you to take a look at and contribute to our projects by submitting a Pull Request, a Github Issue, or commenting on existing Issues and Pull Requests.

The repositories below are all used to maintain [digital.gov:](https://digital.gov)

<details>
  <summary>Platform</summary>

| Project                                                                                       | Description                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GSA/**digitalgov.gov**](https://github.com/GSA/digitalgov.gov)                               | (This repo) Site platform currently deployed as a static site built with [Hugo](https://gohugo.io/) and hosted by [Federalist](https://federalist.18f.gov/) and [Cloud.gov](https://cloud.gov/).|
| [18F/**dns**](https://github.com/18F/dns)                              | DNS configuration for digital.gov domains managed by GSA TTS.|
| [uswds/**uswds**](https://github.com/uswds/uswds)                              | This site is developed using the U.S. Web Design System v2, managed by GSA TTS.|

</details>

<details>
  <summary>Tools - projects we have created in order to better aid our work on the digital.gov platform.</summary>

| Project                                                                                       | Description                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GSA/**digital.gov-design**](https://github.com/GSA/digital.gov-design)      | A collection of design assets used for the digital.gov platform.                                                          |
| [GSA/**digitalgov-workflow**](https://github.com/GSA/digitalgov-workflow)                           | A tool for managing the digital.gov editorial workflow on GitHub.                                                                                                                                                                            |
| [GSA/**redir**](https://github.com/GSA/redir)                   | A basic [Jekyll](https://jekyllrb.com/) template to use for temporary redirects.

</details>

---

## Development Guide

### Technologies you should be familiarize yourself with

- [Hugo](https://gohugo.io/documentation/) - The primary site engine that builds digital.gov code and content.
- [Front Matter](https://gohugo.io/content-management/front-matter#readout) - The top of each page/post includes keywords within `---` tags. This is meta data that helps Hugo build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) - the design system used in digital.gov.
- [Gulp](https://gulpjs.com/) - the asset pipeline.

### Installation

#### Prerequisites

Install [Gulp](https://gulpjs.com/) globally from your terminal command line:

```
npm install gulp-cli -g
```

To use Gulp, you must have [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com) installed.
We're currently using Node v14. A recommended way of changing your Node version is to use a node version manager tool like [`n`](https://www.npmjs.com/package/n) to quickly change between node versions.

NPM is package along with Node. Check your versions of these in your terminal command line by typing:

```
node -v
npm -v
```

Using [Homebrew](https://docs.brew.sh/) is a quick and easy way to install Hugo. [Install Homebrew](https://docs.brew.sh/Installation) before getting started.

#### Install Hugo 0.92.0

[Read the HUGO quickstart guide »](https://gohugo.io/getting-started/quick-start/)

**[For OSX](https://gohugo.io/getting-started/installing/#install-hugo-with-brew):**
`brew install hugo`
_see https://gohugo.io/getting-started/installing/ for other OSs_

Quickly check your Hugo version at your terminal command line by running:

```
hugo version
```

**Note:** Digital.gov currently uses Hugo version 0.92.0. This is noted in our [.hugo-version](.hugo-version) file.
If Hugo has released a new version, but digital.gov hasn't been upgraded to that version, you may get errors when building locally. It is possible to use Homebrew to download a previous version of Hugo. To do that follow these instructions: [Using Legacy Versions of the Hugo Static Site Generator](https://www.fernandomc.com/posts/brew-install-legacy-hugo-site-generator/)

#### Setup

Once the prerequisites are installed, [clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to your local machine. Then navigate to the project folder in your terminal and run:

```
npm install
```

This will install all of the Node dependencies needed to run your Hugo environment. This may take a little while!

#### Local Development

Running the local development server is as simple as running:

```
npm start
```

NPM will run the following scripts:

- `gulp env` — sets the environment variable to development (local builds only, not in Federalist)
- `gulp` — builds and compresses all of the SCSS and JS files, and copies jquery and uswds js from `node_modules` and puts them in the `/dist/` folder.
- `gulp Watch` — starts a watch task to look for changes in the SCSS and JS files
- `hugo serve` — builds all of the pages in hugo and creates a local server at `http://localhost:1313/`

When Hugo is done building, you should see a success message like:

```
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

You may then view your local site in the browser at `http://localhost:1313/`.

Local development is powered by BrowserSync, to allow rapid development through:

- A local development server at `http://localhost:1313/`.
- Automatic CSS & JS updates without reloading the page
- Automatic page reloads when content is changed

### Configuration

#### Environment Variables

This project uses environment variables to handle uploading of images to AWS (powered by Gulp scripts).

In your command line terminal run `cp env.example .env` to create a template .env file in the root directory of the project.

Replace “[your key goes here]” in the .env file with your AWS key.

#### Asset Pipeline

_NOTE: This is now included in the `npm start` command above_

All style and image build tasks are handled by [Gulp](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles) and are located in `gulpfile.js`. All parts of the build are configurable in discrete files (located in config/gulp) to make management easy.

Starting the gulp watch tasks to compile styles. This can be done in the terminal command line by running:

```
gulp
```

You would want to have the Hugo build running along with a `gulp` session in separate terminal sessions in order to compile and watch both content and style changes.

**Tip:** Use the keyboard shortcut `control + c` to stop the gulp watch process.

### Images

Images found in `content/images/inbox/` will be optimized and compressed and sent to an AWS S3 bucket for usage in your layouts and content. This is done by running the `gulp img` command. See the digital.gov wiki for [how to process images](https://github.com/GSA/digitalgov.gov/wiki/Adding-Images).

**Other helpful HUGO commands:**

- `hugo build` — builds all the pages in the site, without creating a server
- `hugo serve` — builds all of the pages in hugo and creates a local server at `http://localhost:1313/`
- `hugo serve --templateMetricsHints` — for seeing where you can apply caching in templates and speed up the build time
[See more in the Hugo docs »](https://gohugo.io/commands/hugo/)

## Upgrading Hugo

1. Read through [the recent releases](https://github.com/gohugoio/hugo/releases)
1. Run `brew upgrade hugo` to upgrade your local copy ([docs](https://gohugo.io/getting-started/installing/#upgrade-hugo)).
1. Set the version in the `.hugo-version` file. This is only used for telling Federalist which version of Hugo they should checkout and use.
1. Update this README.md to show the current hugo version
1. Update the version in `.circleci/config.yml to ensure that the same version of Hugo is being used for CI.

## Accessibility tests

We follow the WCAG2AA standard, and one of the ways we check that we're following the right rules is through automated tools, like [**pa11y**](https://github.com/pa11y/pa11y/). For more info on the rules being tested checkout the [pa11y wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).

### Running tests

To run a web accessibility test on digital.gov do the following:

1. Check out the site from GitHub https://github.com/GSA/digitalgov.gov/
1. Install and run the site locally following the `Install` and `Run` instructions above. *Site must be running locally to perform the scan.*

- If this is your first time running pa11y, then you'll need to run `npm install` to make sure pa11ly is installed.

2. In a separate terminal window, run `npm run test:pa11y` to initiate the accessibility checker.

*Note*: Currently, this only runs accessibility checks on the site home page as a Proof of Concept demonstration.

Accessibility testing configuration is located in the .pa11yci file.

## Linters

To test the validity of API JSON files, run `npm run lint:json` in the terminal on your local machine.  This will check the validity of the Hugo generated JSON files used for the API. Currently, it validates authors, images, and topics using the tool `jsonlint`. If an issue is found with the JSON, `jsonlint` will return a non-zero exit code causing CircleCI to fail. See the [wiki API page](https://github.com/GSA/digitalgov.gov/wiki/APIs) for fixing API issues.

Markdown testing can be performed by running `npm run lint:markdown`. The rules that are used for the linter can be found in `.markdown-lint.yml`.

HTML linting can be performed by running 'npm run test:htmlproofer'.
To have HTMLproofer ignore certain content see: https://github.com/gjtorikian/html-proofer#ignoring-content

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
