# ZeroUI CSS Framework

CSS Library for Zero UI. Details of the styles and classes are described below.

## Table of Content

<details>

<summary style="cursor: pointer;">
  <b>Click to Expand</b>
</summary>

<!-- MarkdownTOC -->

1. [Typography](#1-typography)
2. [Button](#2-button)

<!-- /MarkdownTOC -->
</details>

## 1. Typography

How to use the header, sub-header, body, caption, overline styles are described below.

![Text Styles](./.assets/typography.png 'Text Styles')

<figcaption align="center">Fig.1 - Text Styles</figcaption>

### 1.1. Headers

Six types of headers are provided. Header 1, 2, 3, 4, 5, and 6. Class names for these classes are `zui-header-1`, `zui-header-2`, `zui-header-3`, `zui-header-4`, `zui-header-5`, and `zui-header-6` respectively. There are two more classes for sub headers. `zui-subheader-1` and `zui-subheader-2`. All of the styles are using **Century Gothic** font face.

```html
<!-- Headers -->
<h1 class="zui-header-1">Header 1 - 6rem - 96px</h1>
<h2 class="zui-header-2">Header 2 - 3.75rem - 60px</h2>
<h3 class="zui-header-3">Header 3 - 3rem - 48px</h3>
<h4 class="zui-header-4">Header 4 - 2.125rem - 34px</h4>
<h5 class="zui-header-5">Header 5 - 1.5rem - 24px</h5>
<h6 class="zui-header-6">Header 6 - 1.25rem - 20px</h6>
<!-- Sub Headers -->
<div class="zui-subheader-1">This is a subheader - 1rem - 16px</div>
<div class="zui-subheader-2">This is also a subheader - 0.875rem - 14px</div>
```

### 1.2. Body

Two types of body designs are available. Body 1 and body 2 styles can be achievable by the class names of `zui-body-1` and `zui-body-2` respectively. These two body styles uses **Inter** font face.

```html
<p class="zui-body-1">This is a body paragraph text - 1rem - 16px</p>
<p class="zui-body-2">This is also a body paragraph text - 1.5rem - 24px</p>
```

### 1.3. Caption and Overline Text

`zui-caption` and `zui-overline` are the two classes which are used for getting caption and overline styles. Caption uses **Century Gothic** and overline uses **Inter** font face.

```html
<p class="zui-caption">This is a caption - 0.75rem - 12px.</p>
<p class="zui-overline">This is a overline text sample - 0.625rem - 10px</p>
```

## 2. Button

![Button Styles](./.assets/buttons.png 'Button Styles')

<figcaption align="center">Fig.2 - Button Styles</figcaption>
