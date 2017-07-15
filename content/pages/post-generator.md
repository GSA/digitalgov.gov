---
url: /post-generator
type: old_doc
date: 2017-07-08 3:46:23 -0400
title: Post Generator
summary: this is a summary
authors:
  - jeremyzilar
---
<link rel='stylesheet' href='/css/new-post.css' type='text/css' media='all' />
<script src='/js/new-post.js' type='text/javascript' charset='utf-8'></script>

<form id="matter-maker" action="new-post" method="get" accept-charset="utf-8">
  <label><input class="m_date fm" type="text" name="m_date" value="" placeholder="Date"></label>
  <label><input class="m_title fm" type="text" name="m_title" value="" placeholder="Headline"></label>
  <label><input class="m_summary fm" type="text" name="m_summary" value="" placeholder="Summary"></label>
  <label><input class="m_author fm" type="text" name="m_author" value="" placeholder="Author"></label>
  <label><input class="m_categories fm" type="text" name="m_categories" value="" placeholder="Categories"></label>
  <label><input class="m_tag fm" type="text" name="m_tag" value="" placeholder="Tags"></label>
</form>
<p>
<textarea id="post-matter" name="post-matter"></textarea>
