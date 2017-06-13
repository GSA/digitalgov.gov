---


date: 2013-06-26 2:18:22 -0400
title: 'Making Multimedia Section 508 Compliant and Accessible'
summary: 'You&amp;#8217;ve seen videos, podcasts, and audio files on your favorite sites&mdash;whether they&amp;#8217;re government, private sector, or entertainment sites. These are often viral media\: media clips that are wildly popular, are shared through blogs or e&ndash;mail, produce chatter on the web, and increase traffic to websites. Some government agencies are using this phenomenon, by participating in'
authors: [angela-hooker]
categories:
  - 'User Testing &amp; Research'
tags:
  - accessibility
  - section 508
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/06/250-x-143-disabled-button-goldy-iStock-Thinkstock-494125429.jpg" alt="A disabled symbol on a keyboard button" %} 

You&#8217;ve seen videos, podcasts, and audio files on your favorite sites—whether they&#8217;re government, private sector, or entertainment sites. These are often viral media: media clips that are wildly popular, are shared through blogs or e–mail, produce chatter on the web, and increase traffic to websites. Some government agencies are using this phenomenon, by participating in the &#8220;social web,&#8221; to further their missions and support the President&#8217;s mandate for [government agencies to be transparent and collaborative](http://www.whitehouse.gov/the_press_office/TransparencyandOpenGovernment/) with U.S. citizens. However, we also have the challenge of presenting government content in an accessible format. It&#8217;s no secret that many sites where users post media are not Section 508 conformant (compliant) nor are they accessible. Here are the facts, requirements, and resources for posting media files that your site&#8217;s visitors can easily access.

## Why We Need Accessibility

Imagine, if it isn&#8217;t an issue for you, that you have severe arthritis and you must use your keyboard instead of your mouse to navigate websites. One day, a friend sends you a link to a must see video on a popular video site, to which you eagerly go … but, because this site wasn&#8217;t built with accessibility features, you can&#8217;t use your keyboard to activate the video player&#8217;s play, pause, rewind, and volume buttons. Suppose you experience frustration because you can&#8217;t navigate the site with your screen reader; or you have a cognitive disability and need to read the video&#8217;s transcript to understand its content; or you&#8217;re deaf or hard of hearing, and there are no captions on the video, so you don&#8217;t know what&#8217;s being said in it.

These are only a few examples of what your users will face if your media files lack accessibility. However, if you plan for accessibility when creating and posting media, you can create a rich, interactive community where users can get important government information from your agency&#8217;s official website or blog and dialogue with government.

## Section 508 Requirements that Apply to Media

To make the most accessible products, know what Section 508 requirements apply to your media:

### Podcasts and other sound files:

[Paragraph A, Section 508 1194.22](http://www.access-board.gov/sec508/guide/1194.22.htm#(a)) says, &#8220;A text equivalent for every non-text element shall be provided (e.g., via &#8220;alt,&#8221; &#8220;longdesc,&#8221; or in element content).&#8221;

If you post podcasts or other audio-only files, such as .mp3&#8217;s, on your website, you must include text transcripts of these files. You may provide an HTML page containing the transcript or you may link to a separate text file.

If your podcast has video with it (called a &#8220;vodcast&#8221;), the same requirements for video apply; review the &#8220;Videos and multimedia presentations&#8221; section below for details.

If you have a background audio track on a web page, it&#8217;s only necessary to provide a transcript if the track provides content and context to the page. However, it&#8217;s not recommended to &#8220;autoplay&#8221; media (to load and automatically play a media file when a web page loads) since it interrupts assistive technologies (AT). Allow your users to choose if they want to listen to the track and provide an on and off button.

A note about text equivalents: If you post videos or a multimedia presentation, only including text transcripts of these files does not fulfill Section 508 requirements; see the section &#8220;Videos and multimedia presentations&#8221; for help.

### Videos and multimedia presentations:

Make sure your video, animation, or other multimedia product does not contain flashing, strobing, or flickering elements within a frequency greater than 2 Hz and lower than 55 Hz, as they can cause some people to experience seizures, dizziness, and nausea. You can test to see if your content falls in these ranges. See the [PEAT Tool](http://trace.wisc.edu/peat) from the Trace Center and IBM&#8217;s [Human Ability and Accessibility Center&#8217;s Developer Guidelines](http://www-03.ibm.com/able/guidelines/software/swblinking.html).

Graphics that contain certain types of optical illusions can also have the same effect on users. Further, this type of flashing and movement can be distracting for some users with cognitive disabilities. For more background, see WebAIM&#8217;s article on [Seizure Disorders](http://www.webaim.org/articles/seizure).

If you have a media item that contains this type of flashing, strobing, or optical illusions, do not post it. If you find that you&#8217;re overruled and must post this media, include a warning in your content, and do not automatically play the media or show the graphic when your page loads—allow your users to start and stop the media or click to access the graphic if they want to view it.

For in-depth information on video accessibility, see DigitalGov.gov&#8217;s article: [Create Section 508-Compliant Videos on Your Government Websites](https://digitalgov.sites.usa.gov/2013/11/21/create-section-508-compliant-videos-on-your-government-websites-2/).

### Software to play videos, audio, and multimedia:

[Paragraph M, Section 508 1194.22](http://www.access-board.gov/sec508/guide/1194.22.htm#(m)) states, &#8220;When a web page requires that an applet, plug-in, or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with 1194.21(a) through (l).&#8221;

Modern web browsers inform users when a missing plug-in is needed to access special content on a web page; however, with the many new devices and &#8220;user agents&#8221; available, it&#8217;s still best to provide a link to the required software (such as QuickTime, Flash, Real, etc.) on the page where your media is located.

The software to which you link must also fulfill Section 508 requirements for software as outlined in Section 508 1194.21, [Software Applications and Operating Systems](http://www.access-board.gov/sec508/guide/1194.21.htm). Briefly, the requirements from this section are that the software must:

  * Be navigable using a keyboard;
  * Not interfere with accessibility features of other software or the operating system;
  * Provide an on-screen indication of the current focus (the currently selected place of action);
  * Provide information about the roles, states, and operation of each interface element to assistive technology;
  * Use meanings consistently for any images that identify the software&#8217;s controls, status, or program elements;
  * Use the operating system to display text and contextual information;
  * Not override any user defined display settings in the operating system;
  * Give users the choice of turning off animations and displaying information from the animations in other method;
  * Not rely only on color to prompt users, or provide information or context;
  * Provide a wide variety of color and contrast settings (only if the application allows users to adjust color and contrast);
  * Not cause blinking or flashing at a rate greater than 2 Hz and lower than 55 Hz; and,
  * Ensure that users of AT are able to fully use and navigate through electronic forms, and provide any necessary cues and directions to the AT.

For in-depth information on these requirements, see the [U.S. Access Board&#8217;s guide on 1194.21](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/guide-to-the-section-508-standards/software-applications-and-operating-systems-1194-21).

If you&#8217;ve developed a custom player for your media, the same requirements apply—it must meet the requirements in [1194.21](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/guide-to-the-section-508-standards/software-applications-and-operating-systems-1194-21). When your custom player is developed, be sure to use commonly used terms for the player&#8217;s control buttons (for example, play, stop, rewind, pause, volume, mute, captions on, captions off, etc.). Because these terms are read to users of screen readers and refreshable Braille displays, be sure to ask your developer or vendor to add labels to the player&#8217;s controls.

### Comparable access:

Section 508&#8217;s [Functional Performance Criteria](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards#subpart_c), (1194.31), is one of the most overlooked when it comes to new media projects. To gain a clearer understanding of when the functional performance criteria applies, see [Section508 Acquisition FAQs about comparable access](http://www.census.gov/procur/www/508-faq.html), section B.2. Briefly, your product must provide comparable access:

  * To people who are blind or have low vision, and/or be usable with assistive technologies for visual impairments;
  * To people who are deaf or hard of hearing, and/or be usable with assistive technologies for hearing impairments;
  * So people with motor disabilities can obtain and use your product; and,
  * So people can use your product without relying on speech.

### Posting on non-government sites:

Many agencies are seeking a definitive answer on whether they would violate Section 508 guidelines by posting multimedia content on non-government sites that are inaccessible. For clarification, [Section 508, 1194.1, Purpose](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards#subpart_a) states, &#8220;The purpose of this part is to implement section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. 794d). Section 508 requires that when Federal agencies _develop, procure, maintain, or use electronic and information technology_, Federal employees with disabilities have access to and use of information and data that is comparable to the access and use by Federal employees who are not individuals with disabilities, unless an undue burden would be imposed on the agency. Section 508 also requires that individuals with disabilities, who are members of the public seeking information or services from a Federal agency, have access to and use of information and data that is comparable to that provided to the public who are not individuals with disabilities, unless an undue burden would be imposed on the agency,&#8221; (emphasis added).

Further, [Section 508, 1194.2, Application](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards#subpart_a) also says, &#8220;Products covered by this part shall comply with all applicable provisions of this part. When _developing_, _procuring_, _maintaining_, or _using_ electronic and information technology, _each agency shall ensure that the products comply with the applicable provisions of this part_, unless an undue burden would be imposed on the agency,&#8221; (emphasis added).

This stipulates that agencies should ensure Section 508 compliance whether content is on an agency or public site, and it includes software, sites, and services that are free of charge.

However, there are many social networking sites that the public uses, and while those sites may not be accessible, agencies may want to use them to provide information and engage with the public. Many federal employees use a practical approach to providing accessible content, by posting videos and presentations on these sites and also posting the same content, in an accessible manner, on their own agency sites.

## Tips for Implementing

  * When planning your multimedia project, include development time for adding accessibility features and testing.
  * If your videos will be produced by a vendor, stipulate in your contract that captions and transcripts be included if you don&#8217;t have the in-house resources to produce them.
  * For your users&#8217; convenience, post transcripts (in HTML or a separate text file) of your media on your website. Including a transcript with your video and audio products will be beneficial to your users with cognitive disabilities, who may find a transcript aids in comprehension; to users with low-English/language proficiency, as they may struggle with unfamiliar words; and to non-technical users, if the video contains jargon. The bonus is that it will also help with site indexing and search engine optimization.
  * Instead of embedding media on your page, provide a link to a standalone media player. This provides increased accessibility.
  * Rather than setting videos and other multimedia with sound to start playing when your web page loads, allow your users to start the media. Otherwise, the sound will interfere with content read by screen readers and refreshable Braille displays.

## Key Areas to Test for Accessibility

This isn&#8217;t a comprehensive list, but these are important items you&#8217;ll need to check in addition to your general accessibility testing.

  * Use your keyboard to navigate through the multimedia player: Use the tab, enter, and spacebar keys to start, stop, fast forward, rewind, turn on/off captions, maximize/minimize the window, and raise/lower the volume, in addition to any other controls your player uses. When testing with the tab key, be sure the tabbing order makes sense.
  * Use a screen reader to review your pages, media player&#8217;s controls, etc.: Check all of the items you reviewed with your keyboard, plus listen to any directions and cues; make sure there&#8217;s nothing like &#8220;1 button; 2 button&#8221; (make sure the buttons are &#8220;labeled&#8221; with commonly used terms); listen to the entire page/window: listen to the links as list (out of their written context, to make sure they make sense), open lists of graphics and headings; listen to any synchronized audio description tracks); turn off your monitor while you listen to the screen reader and compare it to a script of the exact content that should be heard from the screen reader.
  * Make sure your transcripts read exactly as the audio from your media; check the transcripts for proper punctuation; and, if the person speaking uses any acronyms, define them.
  * Watch your video to confirm that the captions are visually clear and not &#8220;pixelated,&#8221; especially if you&#8217;ve used open captions; review the captions for spelling, proper grammar, and punctuation.
  * Ask people with different disabilities to test your media project. Their results in using your media may be different from yours.
  * Document your testing with screen shots, reports from testing tools, etc.

## Examples

  * [Cal State San Bernardino](http://media.csusb.edu/video/chga/accessible_all.html) has videos that are accessible by keyboard and feature closed captions.
  * NASA has an extensive, [accessible podcast library](http://www.nasa.gov/multimedia/podcasting/twan_podcast_features.html) and is an excellent business model for podcasting.
  * [TeacherTube](http://teachertube.com/) has a video player interface that is fully navigable by keyboard.
  * The [University of Washington offers videos](http://www.washington.edu/doit/Video/) in QuickTime, Windows Media, and Flash formats. They also provide transcripts of their videos.

## Resources

**General Information:**

  * Peter Batchelor and Jonathan O&#8217;Donnell share guidelines for [accessible podcasts](http://jod.id.au/tutorial/accessible-podcast.html) and other podcasting resources.
  * [Autoplay is Bad for All Users](http://www.punkchip.com/2009/04/autoplay-is-bad-for-all-users) outlines reasons why media shouldn&#8217;t play immediately upon loading in a web page.
  * 456 Berea Street has [quick tips for testing with a screen reader](http://www.456bereastreet.com/archive/200903/screen_reader_testing/). Also see Marco Zehe&#8217;s blog entry on [testing with NDVA and Firefox](http://www.marcozehe.de/articles/how-to-use-nvda-and-firefox-to-test-your-web-pages-for-accessibility/).
  * Juicy Studios has a helpful article on understanding [photosensitive epilepsy and flickering](http://juicystudio.com/article/photosensitive-epilepsy.php).
  * [AssistiveWare](http://www.assistiveware.com/videos.php) has videos that illustrate the importance of accessibility.

### Developers&#8217; Resources:

  * See Terrill Thompson&#8217;s blog post, [Comparison of Browsers on HTML5 Video Accessibility](http://terrillthompson.com/blog/366).
  * [Six Things to Know About Video for the Web](http://www.viget.com/inspire/6-things-to-know-about-video-for-the-web/) has valuable general information for planning your video strategy.
  * If you&#8217;re using a Flash-based player, review [Flash and WCAG 2.0](http://www.paciellogroup.com/blog/?p=185) (available in several formats), from the Paciello Group. While WCAG 2.0 (Web Content Accessibility Guidelines) guidelines are somewhat different from Section 508, it provides increased accessibility. Note that the [Section 508 guidelines currently under review were written to harmonize with WCAG 2.0](http://www.access-board.gov/guidelines-and-standards/communications-a-it/about-the-ict-refresh/draft-rule-2011/508-chapter-2-scoping-requirements#five).
  * The Flash player has bugs that affect its accessibility in browsers except Internet Explorer. See [Providing Keyboard Access to a Flash Object and Avoiding a Keyboard Trap](http://www.w3.org/TR/WCAG20-TECHS/FLASH17.html), from the W3C-WAI&#8217;s WCAG 2.0 guidelines.
  * Jim Thatcher&#8217;s &#8220;Requirement for Captioning&#8221; section of his [Audio and Multimedia](http://www.jimthatcher.com/webcourse6.htm) tutorial explains the different types of markup language for captions.
  * [The National Center on Disability and Access to Education](http://ncdae.org/resources/articles/captioning.php) (NCDAE) has extensive information to help you plan your captioning strategy.
  * [MAGpie is a free captioning tool](http://ncam.wgbh.org/invent_build/web_multimedia/tools-guidelines/magpie) that&#8217;s available from the National Center on Accessible Media. See WebAIM&#8217;s guide on [Captioning with MAGpie](http://www.webaim.org/techniques/captions/magpie/version2/) for help.