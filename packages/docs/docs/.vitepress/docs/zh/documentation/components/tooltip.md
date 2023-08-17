---
prev: Radio
next: Modal
last Update: 2023/13/1
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 更改文字提示的颜色
      default: primary
      usageUrl: tooltip#color
    - name: v-model
      type: Boolean
      values: true | false
      description: 确定组件是否处于禁用状态。
      default: "false"
      usageUrl: tooltip#default
    - name: left, right, bottom
      type: Boolean
      values: true | false
      description: 修改文字提示的位置
      default: top
      usageUrl: tooltip#position
    - name: border
      type: Boolean
      values: true | false
      description: 通过添加边框来更改文字提示的样式。
      default: "false"
      usageUrl: tooltip#border
    - name: borderThick
      type: Boolean
      values: true | false
      description: 改变文字提示的样式，仅在箭头位置添加粗边框。
      default: "false"
      usageUrl: tooltip#border
    - name: square
      type: Boolean
      values: true | false
      description: 确定文字提示是否为无边框半径的矩形。
      default: "false"
      usageUrl: tooltip#square
    - name: circle
      type: Boolean
      values: true | false
      description: 将边框半径改为 20px，这样如果是一行文字，边角就会是圆形的。
      default: "false"
      usageUrl: tooltip#circle
    - name: shadow
      type: Boolean
      values: true | false
      description: 通过添加阴影和更改背景来改变文字提示的样式。
      default: "false"
      usageUrl: tooltip#shadow
    - name: noArrow
      type: Boolean
      values: true | false
      description: 删除文字提示中的箭头。
      default: "false"
      usageUrl: tooltip#border
    - name: notHover
      type: Boolean
      values: true | false
      description: 默认文字提示是在父元素上悬停时生成的，该功能已被移除，悬停时不再显示或消失。
      default: "false"
      usageUrl: tooltip#content
    - name: interactivity
      type: Boolean
      values: true | false
      description: 确定文字提示是否具有交互性，是否可以点击而不会自动隐藏
      default: "false"
      usageUrl: tooltip#content
    - name: loading
      type: Boolean
      values: true | false
      description: 确定文字提示是否有加载样式和动画。
      default: "false"
      usageUrl: tooltip#loading
slots : 
    - name: default
      type: slot
      values:
      description: 添加文字提示的触发元素。
      default: 
      usageUrl: tooltip#default
    - name: tooltip
      type: slot
      values:
      description: It is the content that will go inside the tooltip.
      default: 
      usageUrl: tooltip#default
---

# Tooltip 文字提示

<card>

## Default

使用 `VsTooltip` 组件轻松添加文字提示，`default` 插槽内的内容是文字提示的父元素，也是触发显示或隐藏的元素。

`tooltip` 插槽是文字提示中的内容

</card>

<card subtitle="Position">

## Position

使用 `position` 属性更改文字提示的位置

- top (default)
- bottom
- left
- right

</card>

<card subtitle="Color">

## Color

<coloren />

</card>

<card subtitle="Border">

## Border

使用 `border` 属性添加边框并更改背景颜色

::: tip
现在，`color` 属性将改变边框的颜色
:::

</card>

<card subtitle="Square">

## Square

更改文字提示的 `border-radius`，使其变为一个矩形

</card>

<card subtitle="Circle">

## Circle

更改文字提示的 `border-radius`，使其更加圆润

::: tip
该属性仅适用于文字提示少于一行文字的情况。
:::

</card>

<card subtitle="Shadow">

## Shadow

更改文字提示的样式，使其具有阴影和背景颜色

</card>


<card subtitle="NotArrow">

## Not Arrow

在某些情况下，您可能需要从文字提示中移除箭头，为此您可以使用 `not-arrow` 属性

</card>

<card subtitle="Loading">

## Loading

为文字提示添加动画和加载样式

</card>

<card subtitle="Content">

## Content

我们创建文字提示组件的方式让您可以自由添加任何内容，并在其中添加各种组件。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api></Api>
