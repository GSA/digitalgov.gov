---


date: 2015-03-18 10:00:17 -0400
title: 'The API Briefing\: Introduction to Web Components'
summary: ' Instead of writing about a specific federal API this week, I want to talk about a new, evolving way of building Web interfaces and complete applications. Web Components allow developers to create their element that extends the HTML5 set of tags. Developers can create a Web Component that'
authors: [bbrantley]
categories:
  - API
tags:
  - API
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/512-x-400-Web-Components-light-logo.jpg" alt="Web Components light logo" %}

Instead of writing about a specific federal API this week, I want to talk about a new, evolving way of building Web interfaces and complete applications. Web Components allow developers to create their element that extends the <a href="http://en.wikipedia.org/wiki/HTML5" target="_blank">HTML5</a> set of tags. Developers can create a Web Component that is a button that performs a specific function, such as composing and sending an email. Alternatively, a Web Component can be a complete application that a developer can easily drop into a Web page or mobile app.

Developers can do that now just by using JavaScript libraries such as <a href="http://jquery.com/" target="_blank">jQuery</a> or <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> and swapping code through GitHub. What makes Web Components different is that the components can be encapsulated. That means that all a developer has to do is import the Web Component into the <a href="http://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a> page or mobile app without having to load the necessary JavaScript libraries or any other files. It is essentially plug-and-play pieces for the Web page/mobile app.

Web Components are self-contained because of four technologies. First, there are <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements" target="_blank">Custom Elements</a> which allow the developer to create a customized <a href="http://en.wikipedia.org/wiki/HTML_element" target="_blank">HTML element</a>. The custom element can have its properties and methods. The second technology is the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" target="_blank">HTML Template Element</a>. The HTML Template can hold HTML content that isn’t displayed until triggered by a JavaScript event.

<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM" target="_blank">Shadow DOM</a> is the third technology. DOM stands for the “document object model” and is a map of the HTML document. A DOM is used by JavaScript and <a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">Cascading Style Sheets (CSS)</a> to make changes to an HTML page according to user interaction or a JavaScript program. The Shadow DOM is used by the Web Component to hold JavaScript and CSS separate from the main DOM.

The fourth technology is the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports" target="_blank">HTML Import</a> which packages the Web Component and allows the developer to include Web Components into the Web page or mobile app. As you can guess, APIs are working behind the scenes to make each of these technologies work.

If you would like to learn more about Web Components, you can start with these resources. (_This list does not imply endorsement by the federal government. These are just illustrative examples_):

  * <a href="http://tech.pro/blog/1940/getting-started-with-web-components" target="_blank">A technical introduction to Web Components</a>
  * <a href="https://www.youtube.com/watch?v=fqULJBBEVQE&feature=youtu.be" target="_blank">A video presentation of the potential of Web Components (33 minutes)</a>
  * <a href="http://webcomponents.org/" target="_blank">Webcomponents.org</a>
  * <a href="https://www.polymer-project.org/0.5/" target="_blank">Google’s Polymer</a>
  * <a href="http://www.binpress.com/blog/2014/06/26/polymer-vs-angular/" target="_blank">How the Angular JavaScript library differs from Google’s Polymer</a>
  * <a href="http://component.kitchen/tutorial" target="_blank">Component Kitchen’s interactive Web Components tutorial</a>
  * <a href="http://webdesign.tutsplus.com/articles/how-to-create-your-own-html-elements-with-web-components--cms-21524" target="_blank">How to create your HTML elements using Web Components</a>

Web Components present another way that federal agencies can package and distribute their APIs. Maybe a possible new project is to create a federal Web Components library for website developers and mobile app developers?

_*API – Application Programming Interface; how software programs and databases share data and functions with each other. Check out [APIs in Government](https://www.WHATEVER/2013/04/30/apis-in-government/) for more information._

_Each week, “[The API Briefing](https://www.WHATEVER/tag/wednesday-api-briefing/)” will showcase government APIs and the latest API news and trends. Visit this column every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via <a href="mailto:%20bill@billbrantley.com" target="_blank">email</a>. All opinions are my own and do not reflect the opinions of the USDA and GSA._