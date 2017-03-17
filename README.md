# jekyll-uswds

This is a [Jekyll theme](https://jekyllrb.com/docs/themes/) for the
[U.S. Web Design Standards](https://standards.usa.gov).

## Table of contents
1. [Installation](#installation)
    1. [Development](#development)
    1. [Versioning](#versioning)
1. [Configuration](#configuration)
    1. [Site title](#site-title)
    1. [Navigation](#navigation)
      1. [Page subnavigation](#page-subnavigation)
1. [Assets](#assets)
    1. [Stylesheets](#stylesheets)
    1. [Scripts](#scripts)
    1. [Asset load order](#asset-load-order)
1. [Customization](#customization)
    1. [Customizing with Sass](#customizing-with-sass)
    1. [Customizing with CSS overrides](#customizing-with-css-overrides)
    1. [Overriding includes and layouts](#overriding-includes-and-layouts)
1. [Components](#components)
    1. [Header](#header)
    1. [Footer](#footer)
1. [Layouts](#layouts)
    1. [Base](#layout-base)
    1. [Docs](#layout-docs)
    1. [Landing](#layout-landing)


## Installation

1. Install the theme as a Ruby Gem by adding it to your `Gemfile`
   like so:

    ```ruby
    gem 'jekyll-uswds', :git => 'https://github.com/18F/jekyll-uswds.git'
    ```

1. Fetch and update your bundled gems by running:

    ```sh
    bundle
    ```

1. Set the `theme` in your site's Jekyll configuration,
   `_config.yml`:

    ```yml
    theme: jekyll-uswds
    ```

You will need to restart your Jekyll server to see the effects.


### Development

To develop this theme and/or test it locally:

1. Clone this repo

1. Run Jekyll (`jekyll serve`) in the local clone of this repo;
   **or**

1. Create a new Jekyll project, follow the
   [installation](#installation) instructions, then change your
   `Gemfile` to point at the local clone of this repo:

    ```ruby
    gem 'jekyll-uswds', :path => '../path/to/jekyll-uswds'
    ```

### Versioning

To reference a specific version of this plugin:

1. Visit the [releases page](https://github.com/18F/jekyll-uswds/releases) and
   decide which version you want to use.

1. Add or update the `:tag` argument for this gem in your `Gemfile` to the name
   of the release tag, e.g.

    ```ruby
    gem 'jekyll-uswds', \
      :git => 'https://github.com/18F/jekyll-uswds.git', \
      :tag => 'v0.1.1'
    ```

## Configuration

Configuration of common elements ([header](#header),
[footer](#footer), [navigation](#navigation), etc.) happens in your
project's [data files](https://jekyllrb.com/docs/datafiles/). See
this project's [data directory](_data) for reference configurations
of each component.

The [base layout](#layout-base) also provides a mechanism for
automatically including [stylesheets](#stylesheets) and
[scripts](#scripts) on a site-wide, layout-wide, and per-page
basis. See [asset load order](#asset-load-order) for more
information.


### Site title

You can change your site's title with the `title` field in your
`_config.yml`.  If you want to provide an alternate title for use
_only_ in the site header, you can set the `title` field in
`_data/header.yml`.


### Navigation

This theme's navigation system is powerful and flexible. Named
navigational lists live in your project's `_data/navigation.yml`,
e.g.

```yml
# _data/navigation.yml
primary:
  - text: Documentation
    href: /docs/
  - text: Support
    href: /help/

  # link objects with a 'links' field will be presented as
  # collapsible link lists. The 'links' field can either be a
  # reference to another link list in this file, or a literal list.
  - text: Section title
    links: <links>
```

This scheme allows you to define navigational elements that can be
shared by different components, such as the [header](#header) and
[footer](#footer). See the documentation for those components for
more info.


#### Page subnavigation

If you're using the [docs layout](#layout-docs), each page may declare its own
side navigation and subnavigation in its [front matter]:

```md
---
sidenav: documentation
subnav:
  - text: Section one
    href: '#section-one'
  - text: Section two
    href: '#section-two
---
## Section one

## Section two
```

As with the [header](#header) and [footer](#footer), the `sidenav` field may
either reference a common [navigation list](#navigation) from
`_data/navigation.yml` (recommended) or be a literal list of links.

The `subnav` field should be used to link to sections _within_ the current
page, because links to other pages will cause the linking page's side
navigation to collapse when visited.

**Pro tip:** Unless your Jekyll configuration specifies otherwise, the default
Markdown formatter (Kramdown) will automatically generate predictable `id`
attributes for your page headings and convert markdown like this:

```md
## Section one
```

into:

```html
<h2 id="section-one">Section one</h2>
```

If you're using Redcarpet, you will need to configure it to enable
the `with_toc_data` extension in your `_config.yml`, like so:

```yml
markdown: redcarpet
redcarpet:
  extensions:
    - with_toc_data
```

## Assets

The [stylesheet](_includes/styles.html) and [script](_includes/scripts.html)
includes each incorporate the Standards CSS and JS files if the corresponding
`styles` and `scripts` lists aren't defined in your `_config.yml`. So unless
you add one or both of those manually, your HTML will include the following:

```html
<!-- in the <head> -->
<link rel="stylesheet" href="/assets/uswds/css/uswds.min.css" media="screen">
<!-- before </body> -->
<script src="/assets/uswds/js/uswds.min.js" async>
```

Read more about customizing [stylesheets](#stylesheets) and [scripts](#scripts)
below.


### Stylesheets

As a general rule, all stylesheets are inserted in a layouts'
`<head>`, which qualifies them as "render-blocking". Site
stylesheets can be specified in `_config.yml` or a layout or page's
[front matter] YAML in the following form:

```yml
styles:
  - /path/to/sheet.css
  - href: /path/to/sheet.css
    media: (screen|print|all) # optional
```

Stylesheets specified as objects (in the latter item above) must
have an `href` property. The `media` defaults to `screen`.


### Scripts

As a general rule, all scripts are inserted before a layouts'
`</body>`, which prevents them from blocking the rendering of your
page's content. Scripts can be specified in `_config.yml` or a
layout or page's [front matter] YAML in the following form:

```yml
scripts:
  - /path/to/script.js
  - href: /path/to/script.js
    async: true # optional
```

Scripts specified as objects (in the latter item above) must have a `src`
property. Scripts with `async: true` will get an `async` attribute, which tells
the browser _not_ to let this script's loading block the execution of
subsequent scripts. If the execution order of your scripts is **not**
important, setting `async: true` may provide performance benefits to your
users. (Conversely, if you don't know whether your scripts need to execute in a
particular order, then you should not set `async: true` because it may prevent
your scripts from running propertly.)


### Asset load order

Both [stylesheets](#stylesheets) and [scripts](#scripts) can be configured

1. Assets configured at the `site` level (in your `_config.yml`) will be loaded
   in all pages that use the USWDS [layouts](#layouts).
1. Those configured at the layout level (in that layout's [front
   matter]) will be loaded on all pages that use that layout, after
   site assets.
1. Those configured at the page level (in the page's [front matter])
   will be loaded last.


## Customization

You have two options for customizing the CSS: [Sass](#customizing-with-sass) or
[CSS overrides](#customizing-with-css-overrides). Individual sites can also
[selectively override](#overriding-includes-and-layouts) individual includes
and layouts.


### Customizing with Sass

1. Create a [Sass][] (or SCSS) entry point that sets variables and then imports
   the USWDS source files:

    ```scss
    ---
    # assets/main.scss
    ---
    // set your variables or @import them here.
    
    // at the very least, you should set the USWDS font and image paths
    // to the correct paths relative to assets/main.css, like so:
    $font-path: 'uswds/fonts';
    $img-path: 'uswds/img';
    
    @import 'uswds/all';
    ```

1. Change the path to your site's default stylesheet in your `_config.yml`:

    ```yml
    styles:
      - /assets/main.css
    ```

All of the Standards' [SCSS source files](https://github.com/18F/web-design-standards/tree/master/src/stylesheets)
are placed in the [_sass/uswds](_sass/uswds) directory and are available as
Sass imports via `@import 'uswds/<path>';`. See the [Jekyll docs][Jekyll Sass]
for more information about its Sass/SCSS support, and configuring its Sass
renderer in your site's config.


### Customizing with CSS overrides

1. Create a new CSS or Sass file that defines your customizations,
   e.g.

    ```scss
    ---
    # assets/uswds-overrides.scss
    ---
    .usa-header {
      // overrides here
    }
    ```

1. Add the new stylesheet's path to your `_config.yml` _after_
   `uswds.min.css`:

    ```yml
    styles:
      - /assets/uswds/css/uswds.min.css
      - /assets/uswds-overrides.css
    ```

### Overriding includes and layouts

Any [include](_includes) or [layout](_layouts) can be overridden by
your site by placing a file with the same name into your site's
`_includes` or `_layouts` directory. For instance:

- To change how [stylesheets](#stylesheets) are loaded or
  referenced, you can create your own `_includes/styles.html`,
  which will subsequently change how stylesheets are loaded in all
  layouts that inherit from the USWDS [base layout](#layout-base).

- You can change how the side navigation is rendered (but not which
  data it receives) in the [docs layout](#layout-docs) by creating
  your own `_includes/sidenav.html`.

- You can change how and whether the side navigation is displayed
  at all in the [docs layout](#layout-docs) by overriding
  `_layouts/docs.html`.

## Components

For some [Standards components](https://standards.usa.gov/components/),
there are two different files that control how data is passed to
the template:

1. `components/{component}.html` is the low-level template that
   assumes a similarly named global template variable. For
   instance, the header component operates on the `header` template
   variable.
1. `{component}.html` is the "concrete" implementation of the
   component that sets the appropriate global variable then
   includes the low-level template.

This separation allows you to override either of the component
includes in your own Jekyll site without having to re-implement
either the high- or low-level logic. For instance, if you want your
header data to come directly from the Jekyll configuration file
(`_config.yml`) rather than `_data/header.yml`, you can override
`_includes/header.html` to look like this:

```html
{% assign header = site.header %}
{% include components/header.html %}
```


### Header

The [header.html include](_includes/header.html) sets the `header`
template variable to `site.data.header`, the value of which is set
in your Jekyll project's `_data/header.yml` file. Then it includes
[components/header.html](_includes/components/header.html) to
render the header's markup.

See this repo's [header.yml](_data/header.yml) for more info.


### Footer

The [footer.html include](_includes/footer.html) sets the `header`
template variable to `site.data.footer`, the value of which is set
in your Jekyll project's `_data/footer.yml` file. Then it includes
[components/footer.html](_includes/components/footer.html) to
render the footer's markup.

See this repo's [footer.yml](_data/footer.yml) for more info.


## Layouts

This theme provides the following layouts, which you can use by
setting the `layout` [front matter] on each page, like so:

```yaml
---
layout: name
---
```

### `layout: base`

This is the bare-bones Standards layout, which does all of the
basic page scaffolding then drops the page content into the
`<main>` element. All of the other layouts "inherit" this one and
provide other features in the content block.

The base layout provides a layout [front matter] hook to add
attributes to the `<main>` element. You can see how this works in
the [docs layout](_layouts/docs.html#L3-L4).


### `layout: landing`

This layout implements the [landing page
template](https://standards.usa.gov/page-templates/landing/), which
accommodates the following [front matter]:

```yml
hero: # optional
  image: /path/to/image.jpg # optional
  callout:
    alt: Callout white text! # optional
    text: The rest of the callout
  button: # optional
    text: The button text
    href: /button-href/

# optional, but must be used in conjunction with 'intro', below
tagline: A tagline for your page
# also optional, but must be used with 'tagline', above
intro: |
  Some introductory text content.

  This will be processed as **Markdown**.

# an optional list of graphics to display before or after the content
graphics:
  - image:
      # note the indentation here: graphics[n].image.src
      src: /path/to/image.ext
      alt: optional alt text
    title: Optional graphic title, rendered as an <h3>
    description: Graphic description text, processed as _Markdown_.

# optional
graphics_position: (before|after)
```

Check out the YAML front matter in the [landing demo
page](demo/landing.html) for an example of how to structure it.


### `layout: docs`

This layout implements the [document page
template](https://standards.usa.gov/page-templates/docs/), and
accommodates an optional side navigation. Supported [front matter]:

* `sidenav` is a key _into_ `_data/navigation.yml`. See the
  [navigation](#navigation) docs for more info.

    A page's "current" or "active" state in the sidenav is
    determined by whether a link's `href` matches `page.url` or
    `page.permalink` for each page being rendered.

* `subnav` is a list of links to display on this page under its own
  link in the side navigation.

    **Note that subnav link hrefs are not prefixed with
    `site.baseurl`** because this breaks hash links prefixed with
    `#`.

See the [docs demo page](demo/docs.md) for an example of how this
works, and see [_data/navigation.yml](_data/navigation.yml) for how
to structure named navigation data for your site.


[Sass]: http://sass-lang.com/guide
[Jekyll Sass]: https://jekyllrb.com/docs/assets/#sassscss
[front matter]: https://jekyllrb.com/docs/frontmatter/
