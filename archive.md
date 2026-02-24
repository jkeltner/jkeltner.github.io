---
layout: page
title: Archive
permalink: /archive/
---

{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
## {{ year.name }}

{% for post in year.items %}
- [{{ post.title }}]({{ post.url }}) <span class="post-meta">{{ post.date | date: "%b %-d" }}</span>
{% endfor %}
{% endfor %}
