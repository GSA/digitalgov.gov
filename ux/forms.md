---
layout: primary
title: Forms
permalink: /ux/forms/
---

## Can all users understand and fill out forms?

**Why it’s important**: Esther is beginning to show signs of dementia and has trouble with short term memory loss, she needs context clues and instructions to stay visible on the screen or she loses her place. Jerome uses a screen magnifier and when validation messages are shown off to the side he can easily miss them.

- Make sure all inputs have descriptive labels that remain visible even after a field has been filled in.
- Try to use HTML form elements as much as possible, and test any custom interactions for use with screen readers and keyboard only.
- Use a straw or make a narrow window with your fist and view the page through that, scanning vertically but not horizontally. This can help you discover if content is hidden from users using screen magnifiers.
- Minimize the number of responses overall and that are displayed on a single page, but provide context clues throughout for people who might easily lose their place.

### Resource
[GDS’s guidance on form structure](https://www.gov.uk/service-manual/design/form-structure)

## Have you identified which images are meaningful and which images are decorative in mockups?

**Why it’s important**: Carmen’s page didn’t load all the way and didn’t get to download the images. Amanda is blind and uses a braille reader to understand the content of images. John is looking for information with a search engine and needs help being directed to the right content (descriptive alt tags will improve search).

- Images that are purely decorative shouldn’t be announced by the screenreader, work with your front end designer to make sure they’re coded correctly.
- Images that have meaning should include alt text and possibly a longer description, work with the content designer on your team to create these.

<a class="usa-button button-next" href="{{ site.baseurl }}/ux/touch-targets/">
  Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
</a>
