---


date: 2015-07-23 10:25:03 -0400
title: 'PDFs\: A Digital Content Detour'
summary: 'The Portable Document Format, or &ldquo;PDF&rdquo; file, is one of the staple productions of many communications professionals. It&rsquo;s compact, prints exactly as formatted, and allows for clean, multiplatform distribution. However, it&rsquo;s the old &ldquo;U.S. Route&rdquo; on the Digital Interstate. Let&rsquo;s take an average user of a U.S. government website\: a 45 year old PC user'
authors: [mark-urban]
categories:
  - Accessibility
tags:
  - CDC
  - Centers for Disease Control and Prevention
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/07/466-x-400-Uploading-documents-from-laptop-Model-la-iStock-Thinkstock-177522468.jpg" alt="Uploading documents from laptop" %} 

The Portable Document Format, or “PDF” file, is one of the staple productions of many communications professionals. It’s compact, prints exactly as formatted, and allows for clean, multiplatform distribution. However, it’s the old “U.S. Route” on the Digital Interstate.

Let’s take an average user of a U.S. government website: a 45 year old PC user with Internet Explorer 10. Her child has a fever after eating at a restaurant, and wants to look up information on foodborne diseases. She goes to the CDC website, puts in “Food Poisoning” in the search, and gets a link to an article on “What is food poisoning?”. When she clicks the link, however, she gets a prompt. It asks her to install the free PDF reader. She’s redirected to the Acrobat website, where she goes through the process of installing it—assuming she’s computer savvy enough. Once installed, the browser must be restarted, if not the computer itself.

OK, installed! Now back to that article. She goes to [cdc.gov](http://www.cdc.gov/) again, searches, and gets the same link. This time it opens up, but then a popup with Adobe’s license agreement comes up. She irritably says “OK” to the legal folderol and now, finally, can see the article. It&#8217;s 5 pages long, and structured with 2 columns. She’s on her laptop, so she can’t read the columns without zooming in, and then dragging with her finger or mouse around to read the document. When she finishes reading column 1, she has to drag all the way up to the top of the page again to read column 2. Using the search feature doesn’t help much, because the screen is still jumping around from column to column as she tries to find all the time “children” are mentioned in the article. At some point, she gives up in disgust and calls her pediatrician.

Remember, this scenario is not uncommon, and we’re not talking about a user who is blind using a screen reader. We’re talking about a properly formatted, accessible PDF, used by a person without a disability. Image if, as too many government PDFs are, this was just a scanned printout! 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/07/600-x-400-Close-up-working-printer-scanner-copier-device-Piotr-Adamowicz-iStock-Thinkstock-186949650.jpg" alt="A sheet of paper lies on a copier" %} 

Don’t do this to the citizens we are supposed to serve. If you want to provide a printable PDF, fine. It’s a great format for a physical document or a long read. But don’t torture people electronically just because the Manager of the communications department likes the way the document looks when printed. Use HTML5 first, and a printable option linked off it. If you have a long document, break it up into sections, and maybe offer an .epub option, as well!

Resistance to this idea is common, from program staff to graphic designers. You’ll need to cite some reasons why PDF-only is a poor choice. Here are some I use:

  1. PDFs are often used for erroneous business reasons. 
      * “People can’t edit it.” The answer to that one is, of course, “YES they can.” There are plenty of editors for PDF documents, and no, locking it for edits will not help. In fact, an HTML document which resides on a server you control is a much more referential document.
      * “We want people to see it in this format, laid out this way”. That’s not how the world works today – people want the content, not your slick use of images.
      * “We’ve got to have the signed document.” No, you just need to put a “/s” after the person’s name. There’s no legal justification (except maybe in response to a FOIA request) for posting a picture of a document as a PDF, just so the signature can be rendered. In fact, it’s a good argument for a security issue, as you can lift the signature from the document.
      * “Policymakers want professional, printable documents.” Maybe. But we are supposed to serve all the taxpayers, not just policymakers. Feel free to link the PDF from the HTML5 document for the Senator’s staff to print.
  2. PDFs are terrible for mobile users. 
      * 40% of the hits on CDC.gov last year were mobile browsers. If you’ve ever tried to read a PDF on a phone, no further commentary is necessary. It’s a nightmare. That is poor communications, and poor public service. Yes, there are mobile PDF readers, but all are clunky, and require moving out of the browser to another, completely different interface.
  3. PDFs are a poor choice for Web or intranet content. 
      * Yes, they can be made accessible. Adobe has made great strides in this area. But it usually takes much more effort than just making the document an accessible HTML page.
      * People use dozens of different devices, and want to be able to move quickly through your content without switching platforms and applications.
      * Media and researchers need and want searchable documents that can be disseminated and quoted quickly, and are not going to spend the time scanning through a 20-page PDF to find the data they want.
      * Information updates constantly, PDFs are snapshots and must be reengineered and remade accessible to address changes.

So—think about using PDFs as a printable option, with having the content available as an accessible HTML page as the “main” option. We do this often at [CDC](http://www.cdc.gov/mmwr/mmwr_wk.html).

_Mark Urban is a Section 508 Coordinator at the Centers for Disease Control (CDC)_.