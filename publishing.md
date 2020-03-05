# Digital.gov / Publishing

## A guide to publishing in a GitHub based workflow

To proceed, you will need a GitHub account [http://github.com](http://github.com) and you will need to have the DigitalGov team add you as an contributor to our repo. Send us a note at [digitalgov@gsa.gov](mailto:digitalgov@gsa.gov)

---


### Creating a Draft for Review on GitHub.com

**Step 1.** — Log in to [http://github.com](http://github.com)

**Step 2.** — Submit your post for review by creating a 'new issue' --> https://github.com/GSA/digitalgov.gov/issues/new/?labels=draft&milestone=Editorial

**Step 3.** — Enter the title and body of your post in the 'new issue' and format your post as needed _`(bold, italics, links, etc...)`_. Here is an example draft: https://github.com/GSA/digitalgov.gov/issues/83

**Step 4.** — Save/Submit. The DigitalGov team will be notified of the new submission. Feel free to edit your submission at any point. Any comments on your submission will be left on this this page and you'll get notified via email as this post moves along the workflow.


- - -
### Producing and Publishing a new Post on GitHub.com

**Note:** _You will need WRITE access to the digitalgov.gov repo in order to create a new post. In addition, formatting options are not available in this stage of the workflow. If you would like formatting options, please submit a draft for review first, then copy the body of the post into Step 3._

#### Step 1.
Log in to [http://github.com](http://github.com)

#### Step 2.
Enter the post data _(a.k.a front-matter)_ for your post here --> https://demo.digitalgov.gov/new/

When done, click the link at the bottom of the form to create a new file in GitHub.

#### Step 3.
You should now be on GitHub.com and you should see the front matter you've created in the file editor.

Paste the body of your post where it says. `***Paste content here. Delete this line***`. Don't forget to delete that line.

**NOTE:** formatting options are not available in this stage of the workflow. If you would like formatting options, please submit a draft for review first, then copy the body of the post into Step 3._

Here is an example post: https://raw.githubusercontent.com/GSA/digitalgov.gov/demo/content/posts/2014-02-18-trends-on-tuesday-distracted-walking.md

#### Step 4.
The digitalgov.gov team will be notified of the new submission. Feel free to edit your submission at any point. Any comments on your submission will be left on this this page.

- - -
### Adding a new Author

All of our authors are in separate data files:
https://github.com/GSA/digitalgov.gov/tree/demo/data/people/authors

To make a new author:
1. Copy the text/data from one of the existing author data files
2. Create a new one in the authors folder (parent folder)
3. Commit the file directly to the `demo` branch

`Note:` Watch out for special characters `"$&:/@'` in the author files, check names with apostrophes.

- - -
### Creating a Redirect

A redirect is when you need to make traffic that is going to one URL, arrive at another.

The most common need for a redirect is when you change the `slug` or `date` of a page/post/event.


**How to add a redirect**

Add the following snippet to the front-matter of your new file (page) and enter in the old URLs you'll be redirecting from.

```
aliases:
  - /2012/05/05/my-old-url/
```
If the URL you want to redirect is `https://digitalgov.gov/2012/05/05/my-old-url/`, then you'll want to enter `/2012/05/05/my-old-url/`.

If you have multiple pages that you are redirecting to a new single page, enter them like this:

```
aliases:
  - /2012/05/05/my-old-url/
  - /docs/old-document-url/
  - /events/old-event-page/
```


- - -
### All the Front Matter Data You'll ever need

```
---
slug: headline-example
date: 2017-09-22 16:24:59 -0400
title: 'Headline Example'
summary: 'Summary goes here'
xposted_from: https://some.url
authors:
  - jeremyzilar
categories:
  - breakfast
tag:
  - eggs
  - coffee
  - toast
featured_image:
  uid: breakfast-time
  alt: 'This is my digital breakfast'
---

***Paste content here. Delete this line***
```
