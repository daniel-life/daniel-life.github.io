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
the CSS above can be placed in your web.css that applies to all pages (I have placed in <a href="https://daniel-life.github.io/static/css/web.css" target="_blank">Here</a>). Below is an example of the structure of your layouts html files, which is your template to be displayed across all pages. It will also work in _vertically smaller pages_. In this Example, the style is applied into the _main_content_wrap_ division.

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
## 2. Preview documents in website
This is a common function that I see people wanting to do: display the content of any document in the website itself without the need to go to another website to view it. Here are the steps to do this:
Step 1: upload your document to <a href="https://drive.google.com/google">**Google Drive**</a> by dragging and dropping your document into the website. Open your document by double-clicking it in Google Drive.
Step 2: Click on **more options** icon at the top-right corner @icon-elipsis-vertical then click **open in new window**
Step 3: Copy the link in address bar, then add the codes below to your website, under <boby> tag:
``` html
<iframe src="(document link you copied)" style="width:100%; height:50rem;" frameborder="0">
```
**NOTE: Do change the /view at the end of the link to /preview, or else a forbidden 403 error will occur!**
<br>
Here is an example of how I implemented it in the about me section to show my resume:
``` HTML
<iframe src="https://drive.google.com/file/d/1DLXObo_ymvDGcK7jjLv4if1K_K084PDZ/preview" style="width:100%; height:50rem;" frameborder="0"></iframe>
```

### Explanation: what is <iframe> tag in HTML?
the iframe tag is an inline frame that embeds another document within the current HTML document. It is styled
with CSS within the iframe tag (as shown above with _<style>_ tag). This is very useful especially if you want the user to have quick access to the contents of your document without having to download it or visit another website. It is commonly used do display external content such as a document or a video.****
