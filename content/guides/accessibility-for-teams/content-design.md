---
date: 2018-07-09 09:00:00 -0500
title: "Accessibility for content designers"
deck: ""
summary: "Accessible writing ensures your content is easier for everyone to read. As we build government services, we want to ensure they are accessible and welcoming to everyone who needs to use them."
guide: accessibility-for-teams
image: guide-dap
primary_image: guide-dap
summary_box: true
topics:
  - accessibility
  - product-and-project-management
  - user-experience
layout: single
---

Accessible writing ensures your content is easier for everyone to read. As we build government services, we want to ensure they are accessible and welcoming to everyone who needs to use them.

**How to use this guide:**

* We recommend conducting accessibility testing throughout the design and development processes.
* If you have project-specific questions, ask your agency’s accessibility team.

## Plain language

Can you quickly understand the main points of the content?

### Why it's important

- Karin is not a native English speaker and she sometimes has trouble decoding legal or bureaucratic language.
- John has a developmental disability and has difficulty interpreting content written above a sixth-grade reading level.
- Kai has low tech literacy and often doesn’t understand highly technical language.

### Steps to take

- Refer to the [plain language section](https://pages.18f.gov/content-guide/plain-language/) of 18F’s Content Guide for general guidance, lists of words to avoid, and links to plain-language resources.
- As you’re writing, consider the tech literacy level of your target audience. Define technical terms that may be unfamiliar, and use a product or service’s full name before using its acronym or abbreviation. You may also consider [adding a glossary](https://github.com/18F/glossary) if your content contains many potentially unfamiliar terms.
Include in-line definitions for scientific, legal, or technical terms that you must use.
- Avoid using idiomatic language.
- Test the readability of your content using [Hemingway App](http://www.hemingwayapp.com/), [Readable.io](https://readable.io/), or a similar tool.

### Resources

- [Federal plain language guidelines - PlainLanguage.gov](https://www.plainlanguage.gov/guidelines/)
- Web Content Accessibility Guidelines (WCAG) 2.0 references:
  - [3.1 Readable (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/#meaning)
  - [3.1.3 Unusual Words](https://www.w3.org/WAI/WCAG20/quickref/#meaning-idioms)
  - [3.1.4 Abbreviations](https://www.w3.org/WAI/WCAG20/quickref/#meaning-located)
  - [3.1.5 Reading Level](https://www.w3.org/WAI/WCAG20/quickref/#meaning-supplements)

## Reference materials

Can you easily access supplementary information clarifying the content?

### Why it's important

- Gilbert reads at a twelfth-grade level but isn’t familiar with the nuances of a site’s subject matter; to fully understand the site content, he needs easy-to-access contextual information.

### Steps to take

- Consider defining technical or other potentially unfamiliar terms in line; this creates a much more continuous reading experience for the user.
- If you find that you need to define a large number of terms within your content, consider adding a separate glossary page.
- Use hyperlinks or a tooltip rather than footnotes to direct users to definitions. Footnotes can create a jarring reading experience, and they may not render correctly on mobile devices.

### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [3.1.3 Unusual Words](https://www.w3.org/WAI/WCAG20/quickref/#meaning-idioms)

## Easy-to-parse graphic elements

Can you easily interpret content associated with graphic elements?

### Why it's important

- Marisa primarily uses her mobile device to browse websites and has trouble interpreting visualizations with small text.

### Steps to take

- Include visual elements in line with text rather than separated from it; a graphic’s proximity to associated content helps reinforce the relationship between the visual and its written description.
- Make sure all graphics have descriptive captions (if necessary). Also make sure that captions share a common form and voice.
- Include meaningful information describing each graphic element in the alt text.
- Use null (empty) alt text when text describing the graphic element is already on the page (`alt=""`).
- If the graphic element is decorative and you don’t want the screen reader to announce it at all, use  null (empty) alt text (`alt=""`).
- Consider presenting dense technical language in a format other than as part of a graphic. When compressed to mobile view (in other words, a harder-to-read format), graphs and charts with technical language can be tough to interpret.

### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)


## Scannable content

Can you scan the page without having to pause for long passages? Can you quickly grasp the meaning of a section based on its heading?

### Why it's important

- Jerrold has a cognitive disability that makes it difficult for him to read long, uninterrupted passages of text. 
- Sharon reads most online content using her mobile device and finds it difficult to navigate long paragraphs.

### Steps to take

- Use short sentences, whenever possible. Varying sentence length can add interest to a piece, but whenever possible, avoid unnecessarily long sentences — these can present obstacles to people who have difficulty reading. They can also be harder to skim on mobile devices.
- Likewise, keep your paragraphs short and focused. Short paragraphs, like short sentences, are easier to scan on mobile devices.
- Use precise and descriptive [headings](https://content-guide.18f.gov/headings-and-titles/) to help readers grasp the main points of a piece without reading it in its entirety.
- Check the continuity between sections. Paragraphs that don’t have clear thematic links from one to the next can cause difficulties for some readers.

### Resources

- [18F Content Guide: Headings and titles](https://content-guide.18f.gov/headings-and-titles/)

### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=128%2C14&currentsidebar=%23col_overview#navigation-mechanisms-descriptive)
- [3.1.5 Reading Level](https://www.w3.org/WAI/WCAG20/quickref/#meaning-supplements)


## Images

Do your images have descriptive alt text?

### Why it's important

- Carmen’s page didn’t load all the way and didn’t get to download the images. 
- Amanda is blind and uses a braille reader to understand the contents of images. 
- John is looking for information with a search engine and needs help being directed to the right content (descriptive alt tags will improve search).

### Steps to take

- Include meaningful information describing each image in the alt text.
- Use null (empty) alt text when text describing the image is already on the page (`alt=""`).
- Don’t start the alt text with _Image of_ or _Photo of_ – the screen reader already announces that images are images.
- If the image is decorative and you don’t want the screen reader to announce it at all, use  null (empty) alt text (`alt=""`).

### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation)

**Video tutorial: Text alternatives**

{{< youtube id="XCa6U1BllCY" title="Text Alternatives" >}}


## Links

Do all links have properly descriptive text?

### Why it's important

- Jerry is blind and uses a screen reader to navigate the web. He often uses the <code>tab</code> key to quickly scan a page by reading out only the text links without the surrounding copy.

### Steps to take

- Make sure the voice and tone of your link text match those of the rest of the content to create a more continuous user experience. Folks using screen readers and those reading page copy won’t be jarred from their experience if all text reflects the same voice and tone guidelines.
- Create link text that’s as specific as possible. For example, instead of using Click here (which may not make sense for folks using screen readers), consider instead something like Download the full report. Descriptive links provide all users more information about an action they may undertake.
- Include information about what a link leads to; this is especially important for folks who use mobile devices. If you’re linking to a PDF, say so.

### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-refs)


##  Information architecture

Is your site organized such that everyone can navigate it easily?

### Why it's important

- Beth has a lower tech literacy level and needs a site’s layout to be clear.
- Julian has low vision and uses a screen reader to navigate the web. Kendra has a newborn and her attention is often divided; she needs to be able to understand a site’s contents at a glance.
- Lyle is undergoing a crisis and needs to quickly find just the content pertinent to him.


### Steps to take

- Write descriptive page titles. Users who rely on assistive technologies like screen readers may not be able to use visual cues to determine a page’s purpose. Make sure your page titles concisely convey each page’s focus.
- Make sure users can navigate a site in multiple ways. Some strategies include providing a table of contents, providing a sitemap, linking between pages, and including sitewide search.
- Indicate changes in language (for example, when including a foreign word in a predominantly English text). This will help people using screen readers, people with cognitive disabilities, and folks using braille translation software to fully understand your content.
- Use a screen reader or simulator to make sure you can land on controls and that they’re announcing things as they should.
- Determine whether the HTML document has a language attribute so that screen readers will read it with the correct accent and pronunciation. For example: `<html lang="en">`. (Note: If you’re not comfortable taking this step, feel free to ask another designer on your project team to help.)
- If forms are present, make sure the screen reader reads labels and instructions.


### Use VoiceOver screen reader on Mac

- **Turn VoiceOver on**: command (⌘) + F5
- **Go into web area**: control + alt + shift + down arrow (⬇)
- **Navigate right**: control + alt + right arrow (➡️️)
- **Navigate by heading**: control + alt + command (⌘) + H
- **Click**: control + alt + spacebar

Use rotor to browse pages. The rotor lists common elements like <i>headings</i>, <i>links</i>, and <i>images</i>, and lets you navigate directly to the element of your choosing.

- **Turn on rotor**: control + alt + U
- **Navigate rotor**: left and right, up and down arrows


### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#content-structure-separation-programmatic)
- [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-skip)


## Video and multimedia

Is everyone able to access your multimedia content?

### Why it's important

- Blake is hearing-impaired and cannot rely on audio.
- Sandra is a non-native English speaker and has difficulty understanding video.

### Steps to take

- Make sure that captions are synchronized to appear around the same time that they would be heard in the audio.
- Captions do not need to be a word-for-word version of the audio, but should be a concise equivalent.
- Use a modern video player that supports captions.
- If you've captioned your video, provide a transcript as one of the optional output formats produced by the closed captioning process. 
  - To make the transcript available, link to it from your web page, wherever you link to or display the associated video.
- Audio description is required when important information is visually shown on the screen that cannot be observed by a blind or vision-impaired individual.  

### About transcripts

A transcript is a text version of the media content. A transcript should capture all the spoken audio, plus on-screen text and descriptions of key visual information that wouldn’t otherwise be accessible without seeing the video. Transcripts make video content accessible to everyone, including people who are unable to view the video due to accessibility problems or technical limitations. They are also helpful for people who want to quickly scan or search a video’s content but do not have the time to watch the entire video.

### Web Content Accessibility Guidelines (WCAG) 2.0 references:

- [1.1 Text Alternatives (Guideline)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview&tags=images%2Cimages-of-text%2Ctext-alternatives#text-equiv)
- [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded)
- [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG21/quickref/#captions-live)
