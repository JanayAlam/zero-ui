# ZeroUI CSS Framework

CSS Library for Zero UI. Details of the styles and classes are described below.

## Table of Content

<details>

<summary style="cursor: pointer;">
  <b>Click to Expand</b>
</summary>

<!-- MarkdownTOC -->

1. [Typography](#1-typography)

<!-- /MarkdownTOC -->
</details>

## 1. Typography

![Typography Styles](./.assets/typography.png 'Typography Styles')

How to use the header, sub-header, body, caption, overline styles are described below.

### 1.1. Headers

Six types of headers are provided. Header 1, 2, 3, 4, 5, and 6. Class names for these classes are `header-1`, `header-2`, `header-3`, `header-4`, `header-5`, and `header-6` respectively. There are two more classes for sub headers. `subheader-1` and `subheader-2`. All of the styles are using **Century Gothic** font face.

```html
<!-- Headers -->
<h1 class="header-1">Header 1 - 6rem - 96px</h1>
<h2 class="header-2">Header 2 - 3.75rem - 60px</h2>
<h3 class="header-3">Header 3 - 3rem - 48px</h3>
<h4 class="header-4">Header 4 - 2.125rem - 34px</h4>
<h5 class="header-5">Header 5 - 1.5rem - 24px</h5>
<h6 class="header-6">Header 6 - 1.25rem - 20px</h6>
<!-- Sub Headers -->
<div class="subheader-1">This is a subheader - 1rem - 16px</div>
<div class="subheader-2">This is also a subheader - 0.875rem - 14px</div>
```

### 1.2. Body

Two types of body designs are available. Body 1 and body 2 styles can be achievable by the class names of `body-1` and `body-2` respectively. These two body styles uses **Inter** font face.

```html
<p class="body-1">This is a body paragraph text - 1rem - 16px</p>
<p class="body-2">This is also a body paragraph text - 1.5rem - 24px</p>
```

### 1.3. Caption and Overline Text

`caption` and `overline` are the two classes which are used for getting caption and overline styles. Caption uses **Century Gothic** and overline uses **Inter** font face.

```html
<p class="caption">This is a caption - 0.75rem - 12px.</p>
<p class="overline">This is a overline text sample - 0.625rem - 10px</p>
```
