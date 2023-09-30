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

| ![Text Styles](./.assets/typography.png 'Text Styles') |
| :----------------------------------------------------: |
|                  Fig.1 - Text Styles                   |

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

To use button component you must use `zui-btn` class. It will give the button a basic style. **Inter** font face is used on the button component. In addition the button component's has several properties. Like- size, color, variation, button's state, etc. Those are describe below with a demo output.

### 2.1. Button Size

Buttons come in three sizes: small, medium, and large. To achieve these sizes you must use `zui-btn-size-sm`, `zui-btn-size-md`, or `zui-btn-size-lg` class name.

```html
<!-- Small Button -->
<button class="zui-btn zui-btn-size-sm">Small Button</button>
<!-- Medium Button -->
<button class="zui-btn zui-btn-size-md">Medium Button</button>
<!-- Large Button -->
<button class="zui-btn zui-btn-size-lg">Large Button</button>
```

| ![Button Sizes](./.assets/button-sizes.png 'Button Sizes') |
| :--------------------------------------------------------: |
|                    Fig.2 - Button Size                     |

### 2.2. Button Colors and Variations

There are eight colors in this design system. Two button types like default button and pill button and three variants like primary, secondary, etc. are available.

The class name structured as zui-btn-`{color name}`-`{variant name}`. For pill button `zui-btn-pill` class is required.

The class names for each colors and variant is given below.

- **Color**
  - Primary: `zui-btn-primary-{variant name}`
  - Secondary: `zui-btn-secondary-{variant name}`
  - Success: `zui-btn-success-{variant name}`
  - Error: `zui-btn-error-{variant name}`
  - Info: `zui-btn-info-{variant name}`
  - Warning: `zui-btn-warning-{variant name}`
  - Light: `zui-btn-light-{variant name}`
  - Dark: `zui-btn-dark-{variant name}`
- **Variant**
  - Contained: `zui-btn-{color name}-contained`
  - Outlined: `zui-btn-{color name}-contained`
  - Text: `zui-btn-{color name}-contained`
- **Pill Button**
  - Primary Pill Contained: `zui-btn` `zui-btn-primary-contained` **`zui-btn-pill`**
  - Primary Pill Outlined: `zui-btn` `zui-btn-primary-outlined` **`zui-btn-pill`**
  - Primary Pill Text: `zui-btn` `zui-btn-primary-text` **`zui-btn-pill`**

```html
<!-- Primary Contained Button -->
<button class="zui-btn zui-btn-primary-contained">Button</button>
<!-- Primary Outlined Button -->
<button class="zui-btn zui-btn-outlined-contained">Button</button>
<!-- Primary Text Button -->
<button class="zui-btn zui-btn-text-contained">Button</button>

<!--  -->

<!-- Primary Text Pill Button -->
<button class="zui-btn zui-btn-text-contained zui-btn-pill">Button</button>
```

Button styles are shown in the following figure.

| ![Button Styles](./.assets/buttons.png 'Button Styles') |
| :-----------------------------------------------------: |
|                  Fig.3 - Button Styles                  |
