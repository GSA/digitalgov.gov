---
date: 2024-12-31 00:00:00 -0500
title: "Reduce, remove, remediate: PDFs and government websites"
deck: "A discussion on fixing issues, reducing files, and slowing down production of PDFs for better access to information."
summary: "In a recent governmentwide community discussion, we shared tips to remediate the use of PDFs on government websites, focusing on balancing needs, choosing formats, starting fixes, and ensuring documents are accessible for everyone."

# See all authors at https://digital.gov/authors
authors:
  - annette-super
  - dmccleskey

# See all topics at https://digital.gov/topics
topics:
  - accessibility
  - design
  - user-experience
  - content-strategy

slug: reduce-remove-remediate-pdfs-and-government-websites

primary_image: ""

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Members of the Digital.gov [Web Managers Community](https://digital.gov/communities/web-content-managers/) often have lively conversations about the challenges agencies face when reducing, removing, and remediating PDFs. 

The word is definitely out — we need to reconsider our use of PDFs. But the history of using PDFs to share content runs deep. And while it’s true that there are still some valid use cases for PDFs, most of what currently exists would be better delivered using HTML as a standard webpage.  After all, Office of Management and Budget (OMB) Memo M-23-22, Delivering a Digital-first Public Experience, encourages us to default to HTML.

{{< ring title="Understand the policy framework">}}

[Explore 21st Century Integrated Digital Experience Act and OMB M-23-22](https://digital.gov/resources/delivering-digital-first-public-experience/).

{{< /ring >}}

Digital practitioners from fifteen agencies weighed in during the latest conversation on the current state of affairs. And, true to the value of community, they offered steps their organizations have taken to start chipping away at the work of reducing and remediating PDFs. We are sharing community member quotes from the discussion in this post to provide some sense of the conversation.

{{< quote-block text="So many pdfs! So little time… and people… and money." >}}

## What is a PDF?

The Portable Document Format (PDF) is a file format that's standardized by the International Organization for Standardization (ISO) as ISO 32000. The current PDF specification is [ISO 32000-2:2020](https://www.loc.gov/preservation/digital/formats/fdd/fdd000474.shtml), which was published in December 2020. 

PDF files are independent of the software, hardware, or operating system being used. They can include text, images, graphics, audio, video, links, buttons, form fields, and business logic. They can also be electronically signed. 

## Balancing competing requirements

There are many complexities surrounding PDF use on government websites. Community members asked for insights into balancing accessibility with preserving the legal integrity of government documents and public transparency. 

Here are two common concerns about reducing the reliance on PDFs to deliver information:

- **Preserving information:** Agencies may rely on PDFs to maintain the integrity of official documents, such as policies, memos, and regulatory information. These documents are often lengthy and dense and don't easily convert to HTML.
- **Balancing priorities:** Agency web teams may lack the people, time, or money to convert or remediate hundreds or thousands of legacy PDF files in addition to other tasks.

## Choosing the right format for your content

Many people think of “content” as both the information communicated and the file the information is saved in, but these are separate concepts. The “content” is the information inside the file. The file itself, regardless of type, is the delivery format. PDFs, HTML, mobile apps, and social media posts are all formats, and most can deliver the same content. When deciding whether to publish content in one format or another, the question should be: “Who will be consuming this content, and how?”

First, are you considering [accessibility](https://digital.gov/topics/accessibility/)? People with disabilities, and especially those who use assistive technologies to access content, may encounter difficulties when using PDFs. Unless a PDF file is formatted carefully and intentionally, key information and functionality may not be available to those with low vision and people using screen readers and other assistive technologies. This information can be high level like document structure or details within the content itself.

Next, is your format appropriate for [mobile devices](https://digital.gov/topics/mobile/)? More than 50 percent of users access government resources from their phones, according to [analytics.usa.gov](http://analytics.usa.gov). PDFs can be difficult to read and interact with on a phone.  It’s important to optimize content for different devices. Check your web analytics to see how people access your content, and prioritize formats that will work well for them.

Finally, are you [optimizing for search engines](https://digital.gov/topics/search-engine-optimization/)? PDFs and other static files may be demoted by ranking algorithms for usability reasons. Make sure that the information you want people to find through search is offered in HTML format.

## Creating documents with accessibility in mind 

{{< quote-block text="You can make many PDFs accessible, but it’s a big pain to do so, very time consuming (or expensive if you outsource), and still doesn’t help mobile users." >}} 

Steer stakeholders and content creators away from PDFs and towards HTML for new content. The best way to stop needing to remediate PDFs for accessibility is to establish firm governance to prevent publication of more PDFs. 

In addition to updating your [governance](https://digital.gov/resources/an-introduction-to-digital-governance/), it’s also a best practice to create accessible content and remediate any remaining PDFs. Focus on core principles that ensure content is well-organized with logical navigation, regardless of the file type. 

Here are some best practices for content delivery:

- **Structure:** Use uniform and hierarchical headings to structure the document. They provide a clear path for people using assistive technologies, allowing them to easily navigate content and jump directly to specific sections.
- **Simplicity:** Use the simplest table configuration possible, and only use tables when needed. Tables need header cells and data cells to enable screen readers to reference the associated header cells, so the reader and listener don’t lose context. 
- **Context:** Use link text that describes the destination of the link. It should make sense out of context. Screen readers read each link out loud, in sequential order, so meaningful link text lets the person know what the linked web page may be about. This includes adding alternative text descriptions, or “alt text,” on all images. Write descriptions as if you were talking with someone on the phone. For more information, read Section508.gov’s post on [authoring meaningful alt text](https://www.section508.gov/create/alternative-text/) and the U.S. Web Design System’s [link guidance](https://designsystem.digital.gov/components/link/).
- **Scannability:** Use headings, paragraph breaks, and lists to break up large blocks of text and make content easier to consume. Additionally, ensure proper contrast and generous text sizing so that no information is [difficult to perceive](https://digital.gov/resources/an-advanced-approach-to-accessibility/). 
- **Redirects:** Once a PDF has been removed from the site, you can add a redirect on the file’s old URL to take users to the right place if they have followed a stale link. For more information, read Digital.gov's post on [using analytics tools to find URLs that are causing errors](https://digital.gov/2020/10/27/zero-pageviews-is-your-goal-finding-problem-pages-with-website-analytics/).

## Tips for creating accessible PDFs

{{< quote-block text="Stem the flow first of all, otherwise you’re bailing water from a running stream." >}} 

Remember, in general, it’s best practice for content creators to default to HTML content over other file formats. Choose the format for publishing your content that will best support the user experience and accessibility in your context. If your users do need accessible PDFs, keep the following tips in mind:

- **Limit PDFs** to the most useful applications, including:
    - information needed by people in areas with limited internet, 
    - forms or documents that will be printed for use, or 
    - materials that require a consistent format to support usability. 
- **Use the editing toolbar** in your word processor to format your document. Although doing this does not inherently make your document accessible, it will help structure the PDF that is generated from your file.
- **Spell out redactions.** Documents with redactions are difficult to make accessible. Consider replacing the sections or words to be redacted with `[Redacted]`. Double-check the metadata to ensure any text relating to the redacted information is removed.
- **Ensure accessibility in every version.** If you make a PDF accessible and then edit the content, the new version of the PDF will also need to be made accessible as a separate process.
- **Include revision information and contact options** for users seeking alternative formats as part of the content in your PDF files.

{{< note variant="join" >}}
The **Web Managers Community of Practice** is a group of government digital professionals working to create a better online experience for the public. [Join the Web Managers Community](https://digital.gov/communities/web-content-managers/).
{{< /note >}}
