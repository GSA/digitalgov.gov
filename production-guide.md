# Digital.gov Production Guide

#### Front Matter
This is the front matter.
```
---
permalink: /about/
layout: docs

title: About Digital.gov
---
```

#### Redirects
Redirects are ways to direct traffic that would be going to one place on your site, and have it routed to another destination.

Often, you need to do a redirect when you are removing a page, or merging two pages together. For example, you might want to merge these two pages together into one destination — because why should you have two separate destinations on the site for Twitter Basics:

```
/resources/twitter-basics
/resources/twitter-for-beginners

```
_Note: the paths are the permalinks_

Let's say this is the page we want to keep around `/resources/twitter-basics`. In this file, you are going to want to add the following data to the **front matter** in the file.

```
redirect_from:
    - /resources/twitter-for-beginners
```

This means that anyone coming to `/resources/twitter-for-beginners` will be redirected to `/resources/twitter-basics`.

You can now safely delete the `/resources/twitter-for-beginners` file and be assured that people who go to that URL will be redirected to the new location.

The front matter for the file you are keeping should look like this:
```
---
permalink: /resources/twitter-basics
layout: docs

title: Twitter Basics

redirect_from:
  - /resources/twitter-for-beginners
---
```
