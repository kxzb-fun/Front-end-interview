---
lang: zh-CN
title: CSS 居中方式总结
description: 本对话介绍了五种常见的网页元素水平垂直居中的方法：1. 使用CSS伪元素:before在容器上设置参照物进行居中；2. 绝对定位配合left:50%, top:50%，然后通过margin进行调整；3. CSS transform配合translate进行居中；4. 使用calc函数实现精确的百分比偏移；5. 弹性盒子布局是最推荐的方法，只需设置父元素的display属性为flex，并通过justify-content和align-items属性轻松实现所有子元素的水平垂直居中。
---

本文介绍了五种常见的网页元素水平垂直居中的方法：

1. 使用CSS伪元素:before在容器上设置参照物进行居中
2. 绝对定位配合left:50%, top:50%，然后通过margin进行调整；
3. CSS transform配合translate进行居中；
4. 使用calc函数实现精确的百分比偏移；
5. 弹性盒子布局是最推荐的方法，只需设置父元素的display属性为flex，并通过justify-content和align-items属性轻松实现所有子元素的水平垂直居中。

## 如何让一个 div 水平垂直居中

说起盒子居中问题，那么就一是两个方向，一个是水平居中，另一个是垂直居中。

## 水平方向居中

### 通过margin 0 auto实现盒子水平居中

在CSS中，通过设置margin-left和margin-right为auto值可以使盒子水平居中。当margin-left设置为auto时，它会自动适应其父元素的空间，最终使盒子位于父元素的右边缘；而当margin-right设置为auto时，它会自动适应其父元素的空间，最终使盒子位于父元素的左边缘。当这两个属性同时设置为auto时，盒子就会居中于父元素内部。

```html
<div class="container">
  <div class="centered">Content</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
}
```

### 弹性盒子display flex和justify content center实现水平居中

通过将元素的display属性设置为flex，可以将其转化为弹性盒子。然后利用justify-content属性，设置为center，可以使子元素（盒子）在弹性盒子中水平居中。这种方式相对于margin 0 auto更为简洁且易于管理，尤其是在父元素结构复杂的情况下，避免了使用多个margin值调整位置的繁琐操作。

```html
<div class="centered">Content</div>
```

```css
.centered {
  width: 50%; /* 或任何你希望的宽度 */
  margin: 0 auto;
}
```

### 绝对定位和负边距

这种方法适用于固定宽度的 div 元素。

- `left: 50%` 将元素的左边缘移动到容器的中点。
- `transform: translateX(-50%)` 将元素向左移动其自身宽度的 50%，使其中心对齐容器的中点。

```html
<div class="container">
  <div class="centered">Content</div>
</div>

```

```css
.container {
  position: relative;
}
.centered {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

```

## 垂直方向居中

### 通过伪元素before实现垂直居中

通过给父元素设置position: relative，并在其内部添加一个position: absolute的伪元素before，将before元素的top和left属性分别设置为50%。接着，再设置负的margin-top和margin-left来抵消元素本身的位置，使得before元素居中于父元素内部，进而实现子元素的垂直居中效果。这种方式相较于使用兄弟元素做参照物更为灵活，适用于父元素不需要设置额外高度或宽度的情况

```html
<div class="container">
  <div class="centered">Content</div>
</div>

```

```css
.container {
  position: relative; /* 使伪元素相对于父容器定位 */
  height: 100vh; /* 为了演示效果，设置父容器高度 */
  border: 1px solid black; /* 可选，用于视觉效果 */
}

.container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.centered {
  position: relative; /* 使子元素相对于父容器定位 */
  transform: translateY(-50%); /* 向上移动50%高度，实现垂直居中 */
}

```

### 使用绝对定位来实现垂直居中

在相对定位父元素中，设置position: absolute并将元素的left和top属性分别设置为50%。为了使元素居中，需要同时设置负的margin-left和margin-top。此外，还可以利用transform属性中的translate属性来实现相同的效果。这种方式较为直观且易于理解，但需要手动计算负值以达到居中效果。

```html
<div class="container">
  <div class="centered">Content</div>
</div>

```

```css
.container {
  position: relative;
  height: 100vh; /* 确保容器有足够的高度 */
}
.centered {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

```
