---
permalink: news/index.html
layout: docs
title: All posts
---

{% assign postsByYearMonth = site.posts | group_by_exp:"post", "post.date | date: '%b %Y'"  %}
{% for yearMonth in postsByYearMonth %}
<h3>{{ yearMonth.name }}</h3>
<ul>
  {% for post in yearMonth.items %}
    <li><a href="{{ post.url }}"><strong>{{ post.date | date: "%B %-d "}}:</strong> {{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
