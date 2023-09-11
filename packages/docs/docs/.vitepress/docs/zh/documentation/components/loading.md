---
prev: Alert
next: Input
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 更改加载动画的颜色。
      default: primary
      usageUrl: loading#color
    - name: type
      type: String
      values: waves | corners | border | points | square | gradient | rectangle | circles | square-rotate | scale
      description: 更改加载动画。
      default:
      usageUrl: loading#type
    - name: text
      type: String
      values: String
      description: 在加载动画下方添加文本。
      default: 
      usageUrl: loading#text
    - name: percent
      type: String
      values: (0% - 100%)
      description: 在加载中添加百分比文本。
      default: 
      usageUrl: loading#percent
    - name: progress
      type: Number
      values: (0 - 100)
      description: 添加一个进度条，progress 就是当前的进度值。
      default: 
      usageUrl: loading#percent
    - name: opacity
      type: String
      values: (0 - 1)
      description: 更改背景的透明度。
      default: 0.6
      usageUrl: loading#background
    - name: scale
      type: String
      values: (0 - 1)
      description: 更改加载动画的大小。
      default: 1
      usageUrl: loading#type
---
# Loading 加载

<card>

## Default

使用 vuesax hook `useLoading(Props)` 创建加载效果

</card>

<card subtitle="Type">

## Type

使用选项 `type` 更改加载动画类型

有以下选项:

- waves
- corners
- border
- points
- square
- gradient
- rectangle
- circles
- square-rotate
- scale

::: tip
  点击示例加载即可再全屏显示加载动画
:::

</card>

<card subtitle="Color">

## Color

使用 `color` 属性和颜色值（例如 **#fff**、**rgba (100, 10, 5)** 或 vuesax 的 **primary**）更改按钮组件的颜色，这只会影响组件，其值可以是动态的

</card>

<card subtitle="Background">

## Background

你可以使用属性 `background` 更改加载背景颜色

</card>

<card subtitle="Text">

## Text

使用属性 `text` 添加加载或通知用户正在加载或尚未加载的描述性文字

</card>

<card subtitle="Percent">

## Percent

你可以使用 `percent` 属性添加百分比字符串，如果需要更改该值，请使用加载实例中的 `changePercent` 函数。

</card>

<card subtitle="Progress">

## Progress

使用 `progress` 属性在顶部添加一个进度条，以显示加载进度，该值是一个决定百分比的数字，允许值为 `(0 - 100)`

</card>

<card subtitle="Target">

## Target

如果要在特定 dom 元素上使用加载。请将加载组件放到父容器中，并设置 `visible` 值。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
