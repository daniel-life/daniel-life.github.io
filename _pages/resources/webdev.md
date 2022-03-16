---
title: "Web Development tips and tricks"
permalink: /resources/webdev
layout: default
---

# Web development tips!
## 1. Make footer stay at the bottom of the website (without putting many break lines or pasting it at the bottom)
I personally have encountered this issue, with many of my classmates and people online. That is their footers do not stay at the bottom of the website and floats in the middle of the website. This solution will not only help to ensure that it is at the bottom of the website, but also do it in the most efficient way. This can be used in any website.
``` css
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
```
the CSS above can be placed in your web.css that applies to all pages (I have placed in <a href="https://daniel-life.github.io/static/css/web.css" target="_blank">Here</a>). Below is an example of the structure of your layouts html files, which is your template to be displayed across all pages. Don't worry if you have a phone as it will also work in _vertically smaller pages_. In this Example, the style is applied into the _main_content_wrap_.

``` html
<div id="header_wrap" class="outer">
    <!-- HEADER CONTENT -->
</div>

<div id="main_content_wrap" class="outer" style="flex: 1;">
    <section id="main_content" class="inner">
        <!-- MAIN CONTENT -->
    </section>
</div>

<div id="footer_wrap" class="outer">
    <!-- FOOTER CONTENT -->
</div>
``` 
