---


date: 2016-02-29 10:21:01 -0400
title: 'The Content Corner\: Facebook Expands Access to Instant Articles'
summary: 'As I begin to wind down my time at The Content Corner, I have realized that one of my biggest content concerns uncovered during my tenure is digital sharecropping. The recent announcement from Facebook that they will soon open their Instant Articles publishing capability to everyone was reason enough for me to revisit the topic'
authors: [tymanuel]
categories:
  - Content
  - Monthly Theme
  - Social Media
tags:
  - content models
  - Facebook
  - open and structured content models
  - social media
  - structured content
  - The Content Corner
---

As I begin to wind down my time at The Content Corner, I have realized that one of my biggest content concerns uncovered during my tenure is [digital sharecropping](https://www.WHATEVER/2015/10/26/the-content-corner-twitter-apple-news-and-the-importance-of-our-websites/). The [recent announcement from Facebook](https://contently.com/strategist/2016/02/17/facebook-will-likely-open-instant-articles-to-brands-publishers-grandma) that they will soon open their Instant Articles publishing capability to everyone was reason enough for me to revisit the topic of owning and controlling our content one more time. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/02/600-x-400-National-Geographic-Instant-Article-Facebook.jpg" alt="An Instant Article by National Geographic seen on a smart phone." %} 

While I dislike the term digital sharecropping (coined by [Nicholas Carr](http://www.roughtype.com/?p=634)), I haven’t found a better or more succinct explanation for this ongoing drive for private companies and platforms to own our content (while we do all the work).

There are legitimate concerns to this ever-increasing practice, especially for those of us within the public sector. But after further exploration of Facebook’s announcement, I am personally less concerned with Instant Articles’ potentially detrimental effects and more excited about their possibilities. People far more influential and savvy than myself, such as Gawker founder Nick Denton, [seem to have warmed to Facebook’s publishing platform](http://www.businessinsider.com/gawker-ceo-nick-denton-on-the-ad-tech-mess-2016-1) as well. But before I explain why Instant Articles may not be the danger that I originally thought, let’s briefly examine what they are in the first place.

## What Is Instant Articles?

Facebook launched [Instant Articles](https://developers.facebook.com/docs/instant-articles) as a way for a limited number of early partners to develop content in a more Facebook-friendly format. For example, Instant Articles load as much as 10 times faster than external links and allow for additional branding and rich media displays. If you are asking yourself the question of why you should be interested in Instant Articles, anything that can get your content in front of Facebook’s 1.5 billion plus users ten times faster is worth a serious discussion.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/02/600-x-450-screen-captures-of-CNN-Instant-Article-in-Feed-and-opened-within-Facebook.jpg" alt="Screen captures of CNN Instant Article in Feed and opened within Facebook" %}

The format is also built on an open format utilizing HTML5 which helps ensure your content is as clean, responsive, and flexible as possible. I think the markup that is required by Instant Articles is a great way of reinforcing the importance of [structured content and content models](https://www.WHATEVER/event/open-and-structured-content-models-project-hands-on-workshop/) and keeps the sharing and reuse of our content front and center during the process.

## Automatic Article Creation

Another feature that helped me change my opinion about the dangers of Instant Articles is the ability to [use your own RSS feed to create and publish articles](https://developers.facebook.com/blog/post/2015/09/22/instant-articles-from-CMS/). You do have to make sure the RSS feed meets the formatting requirements of Instant Articles, but your CMS may be able to easily accommodate this depending on its flexibility.

<table>
  <th>
    Element
  </th>
  
  <th>
    Description
  </th>
  
  <th>
    Required
  </th>
  
  <tr>
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;title></code>
    </td>
    
    <td>
      The headline of the article.
    </td>
    
    <td>
      Yes
    </td>
  </tr>
  
  <tr style="background-color: #f6f7f8">
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;link></code>
    </td>
    
    <td>
      The canonical URL for this article on your site.
    </td>
    
    <td>
      Yes
    </td>
  </tr>
  
  <tr>
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;content:encoded></code>
    </td>
    
    <td>
      The full content of your article, in HTML form. Remember to escape all HTML content by wrapping it within a <a href="http://l.facebook.com/l.php?u=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCDATA&h=UAQHD5Fhs&s=1" target="_blank" rel="nofollow">CDATA section.</a>
    </td>
    
    <td>
      Yes
    </td>
  </tr>
  
  <tr style="background-color: #f6f7f8">
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;guid></code>
    </td>
    
    <td>
      A string that provides a unique identifier for this article in your feed.
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;description></code>
    </td>
    
    <td>
      A summary of your article, in plain text form.
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr style="background-color: #f6f7f8">
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;pubDate></code>
    </td>
    
    <td>
      The date of the article’s publication, in <a href="http://l.facebook.com/l.php?u=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FISO_8601&h=LAQG6Dy_D&s=1" target="_blank" rel="nofollow">ISO-8601 format.</a>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <code style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace">&lt;author></code>
    </td>
    
    <td>
      Name of the person who wrote the article. Use multiple <span style="color: #52bb5d;border: 0pt;padding: 0pt;background-color: none;background: none;font-family: Menlo, Monaco, Andale Mono, Courier New, monospace;font-size: smaller"><author></span> elements for multiple authors.
    </td>
    
    <td>
    </td>
  </tr>
</table>

Once you have an approved RSS feed, Facebook will automatically ingest your content into the Instant Articles platform, allowing you to choose whether all content in the feed is automatically published or whether it stays as a draft and you manually publish.

Instant Articles also allows you to edit content imported via your RSS feed or to manually create articles within the admin interface.

As opposed to the very real concern about generating content that can only live on a specific social media platform, this allows you to simply create a more Facebook-friendly version of your content. Your content simply becomes more responsive or adaptive (and they are not the same—more on that in a later column) and remains shareable outside of the Facebook ecosystem.

This sentence from [Facebook’s Dev News page](https://developers.facebook.com/blog/post/2015/09/22/instant-articles-from-CMS/) says it all: “Each Instant Article is associated with the URL where the Web version is hosted on the publisher&#8217;s website.” Your content remains on your site; if applicable, an Instant Article version of your content will be displayed and will leverage the speed and media features that Facebook has, but in other instances a user will be directed to your site. So instead of being a digital sharecropper, Instant Articles serves a more traditional social media function as a place to display your own wares.

Is the mad grab for your content over? I don’t think so, and I still feel we should remain cautious where we generate custom content as opposed to sharing our content. I remain protective of the place our agency websites play in maintaining a clear brand identity to our citizens. However, I also respect the need to display content in the fastest and most accessible manner technology allows. Facebook Instant Articles seems initially like another way to honor both of those goals. Anyone out there thinking of leveraging Instant Articles? Is anyone already doing it? Share your thoughts and experiences below.

_You’ve just finished reading the latest article from our Monday column, [The Content Corner](https://www.WHATEVER/tag/the-content-corner/). This column focuses on helping solve the main content issues facing federal digital professionals, including producing enough content and making that content engaging._