# ZeroUI CSS Framework

CSS Library for Zero UI. Details of the styles and classes are described below.

## Table of Content

<details>

<summary style="cursor: pointer;">
  <b>Click to Expand</b>
</summary>

<!-- MarkdownTOC -->

- **Atoms**
  1. [Margin](#1-margin-and-padding)
  2. [Typography](#2-typography)
  3. [Button](#3-button)

<!-- /MarkdownTOC -->
</details>

## 1. Margin and Padding

Gives margin or padding to child component. There are ten margin/padding spaces available. These are- `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`. Besides that you can also define each of the dimension's margin/padding separately. The class names are structured as- `zui-margin-{space}` for margin and `zui-padding-{space}` for padding. If you want to give margin/padding in specific dimension then the class name structure is `zui-margin-{side}-{space}` for margin and `zui-padding-{side}-{space}` for padding.

**Margin/Padding sizes:**

| Space |               Class Name               | Size (rem) | Size (px) |
| :---: | :------------------------------------: | :--------: | :-------: |
| none  | `zui-margin-none` - `zui-padding-none` |     0      |     0     |
| xxxs  | `zui-margin-xxxs` - `zui-padding-xxxs` |  0.25rem   |    4px    |
|  xxs  |  `zui-margin-xxs` - `zui-padding-xxs`  |   0.5rem   |    8px    |
|  xs   |   `zui-margin-xs` - `zui-padding-xs`   |  0.75rem   |   12px    |
|  sm   |   `zui-margin-sm` - `zui-padding-sm`   |    1rem    |   16px    |
|  md   |   `zui-margin-md` - `zui-padding-md`   |   1.5rem   |   24px    |
|  lg   |   `zui-margin-lg` - `zui-padding-lg`   |    2rem    |   32px    |
|  xl   |   `zui-margin-xl` - `zui-padding-xl`   |    3rem    |   48px    |
|  xxl  |  `zui-margin-xxl` - `zui-padding-xxl`  |   4.5rem   |   72px    |
| xxxl  | `zui-margin-xxxl` - `zui-padding-xxxl` |    6rem    |   96px    |

**Margin/Padding Side:**

|  Side  |                        Class Name                        |                 Description                  |
| :----: | :------------------------------------------------------: | :------------------------------------------: |
|  Top   |    `zui-margin-{size}-top` - `zui-padding-{size}-top`    |  Apply margin/padding only on the top side   |
|  Left  |   `zui-margin-{size}-left` - `zui-padding-{size}-left`   |  Apply margin/padding only on the left side  |
| Right  |  `zui-margin-{size}-right` - `zui-padding-{size}-right`  | Apply margin/padding only on the right side  |
| Bottom | `zui-margin-{size}-bottom` - `zui-padding-{size}-bottom` | Apply margin/padding only on the bottom side |

```html
<!-- Small margin from every side -->
<div class="zui-margin-sm">1rem margin from all sides</div>
<!-- Extra large margin from every side -->
<div class="zui-margin-xl">3rem margin from all sides</div>

<!-- Small padding from every side -->
<div class="zui-padding-sm">1rem padding from all sides</div>
<!-- Extra large padding from every side -->
<div class="zui-padding-xl">3rem padding from all sides</div>

<!--  -->

<!-- Medium margin from the left side only  -->
<div class="zui-margin-md-left">1.5rem margin from the left side only</div>
<!-- Medium margin from the left and right side only  -->
<div class="zui-margin-md-left zui-margin-md-right">
  1.5rem margin from the left side only
</div>
<!-- Large padding from the left side only  -->
<div class="zui-padding-lg-left">2rem padding from the left side only</div>
<!-- Medium padding from the left and right side only  -->
<div class="zui-padding-lg-left zui-padding-lg-right">
  2rem padding from the left side only
</div>
```

## 2. Typography

How to use the header, sub-header, body, caption, overline styles are described below.

| ![Text Styles](./.assets/typography.png 'Text Styles') |
| :----------------------------------------------------: |
|                  Fig.1 - Text Styles                   |

### 2.1. Headers

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

### 2.2. Body

Two types of body designs are available. Body 1 and body 2 styles can be achievable by the class names of `zui-body-1` and `zui-body-2` respectively. These two body styles uses **Inter** font face.

```html
<p class="zui-body-1">This is a body paragraph text - 1rem - 16px</p>
<p class="zui-body-2">This is also a body paragraph text - 1.5rem - 24px</p>
```

### 2.3. Caption and Overline Text

`zui-caption` and `zui-overline` are the two classes which are used for getting caption and overline styles. Caption uses **Century Gothic** and overline uses **Inter** font face.

```html
<p class="zui-caption">This is a caption - 0.75rem - 12px.</p>
<p class="zui-overline">This is a overline text sample - 0.625rem - 10px</p>
```

## 3. Button

To use button component you must use `zui-btn` class. It will give the button a basic style. **Inter** font face is used on the button component. In addition the button component's has several properties. Like- size, color, variation, button's state, etc. Those are describe below with a demo output.

### 3.1. Button Size

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

### 3.2. Button Colors and Variations

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
