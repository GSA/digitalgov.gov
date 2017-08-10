---
url: /new
type: docs
layout: 1col
date: 2017-07-08 3:46:23 -0400
title: Create a new post
summary: this is a summary
---


<div class="matter-container">
  <div class="btn-group">
    <button class="btn selected" type="button" data-type="post">post</button><button class="btn" type="button" data-type="page">page</button><button class="btn" type="button" data-type="event">event</button>
  </div>
  <div class="gcol gcol1">
    <form id="matter-maker" action="new-post" method="get" accept-charset="utf-8">
      <input class="fm hidden" type="text" name="m_url" value="">
      <label class="m_date">
        Date
        <input class="fm" type="text" name="m_date" value="">
      </label>
      <label class="m_title">
        Headline
        <input class="m_title fm" type="text" name="m_title" value="">
      </label>
      <label class="m_summary">
        Summary
        <input class="m_summary fm" type="text" name="m_summary" value="">
      </label>
      <label class="m_author">
        Author
        <input class="m_author fm" type="text" name="m_author" value="">
      </label>
      <label class="m_categories">
        Categories
        <input class="m_categories fm" type="text" name="m_categories" value="">
      </label>
      <label class="m_tag">
        Tags
        <input class="m_tag fm" type="text" name="m_tag" value="">
      </label>
    </form>
  </div>
  <div class="gcol gcol2">
    <pre id="filename" class="mttr">***</pre>
    <pre id="post-matter" class="mttr">---</pre>
    <p><a id="newfile" href="https://github.com/GSA/digital.gov/new/demo/content/posts/draft?filename=newfile.md&value=hello" target="_new" title="create a new post in GitHub">Create in GitHub »</a></p>
  </div>
</div>
