---
prev: Modal
next: Table
last Update: 2/10/2020, 2:21:50 AM
props : 
    - name: v-model
      type: Number
      values: Number
      description: 当前的分页
      default: 1
      usageUrl: pagination#default
    - name: color
      type: Vuesax colors, RGB, HEX
      values: String
      description: 更改组件的基本颜色。
      default: "primary"
      usageUrl: pagination#color
    - name: disabled
      type: Boolean
      values: true | false
      description: 确定整个组件是否处于禁用状态。
      default: "false"
      usageUrl: pagination#disabled
    - name: noArrow
      type: Boolean
      values: true | false
      description: 移除组件的箭头。
      default: "false"
      usageUrl: pagination#noArrow
    - name: onlyArrow
      type: Boolean
      values: true | false
      description: 删除分页项，只留下箭头。
      default: "false"
      usageUrl: pagination#onlyArrow
    - name: shape
      type: String
      values: circle | square | dotted | compact
      description: 修改分页器按钮样式.
      default: "false"
      usageUrl: pagination#circle
    - name: disabledItems	
      type: Number[]
      values: Number[]
      description: 确定哪些分页项处于禁用状态。	
      default: "[]"
      usageUrl: pagination#disabledItems
    - name: loadingItems	
      type: Number[]
      values: Number[]
      description: 确定哪些分页项处于加载状态。
      default: "[]"
      usageUrl: pagination#loadingItems
    - name: progress	
      type: Boolean
      values: true | false
      description: 为组件添加进度条，进度条由当前页面和页面总数（长度）决定。
      default: "false"
      usageUrl: pagination#progress
    - name: pageStep	
      type: Number
      values: Number
      description: 修改点击...按钮跳转的页数
      default: 5
      usageUrl: pagination#pageStep
    - name: infinite	
      type: Boolean
      values: true | false
      description: 确定分页是否无限。
      default: "false"
      usageUrl: pagination#infinite
---

# Pagination 分页器

<card>

## Default

使用 `VsPagination` 组件轻松添加分页器，其中必填的属性是 `length` 和 `v-model`.

</card>

<card subtitle="Color">

## Color

使用 `color` 属性可更改组件和部分子组件的基本颜色

允许的值有:

- primary
- success
- danger
- warning
- dark
- RGB
- HEX

</card>

<card subtitle="Disabled">

## Disabled

使用 `disabled` 属性更改组件的禁用状态，该属性是布尔类型。

</card>

<card subtitle="NoArrow">

## No Arrow

我们可以使用 "noArrows "属性移除上一页和下一页的箭头

</card>

<card subtitle="OnlyArrow">

## OnlyArrow

在比较小的空间中，我们可能需要移除按钮，只留下箭头，为此我们设置了属性 `onlyArrows` 。

</card>

<card subtitle="Circle">

## Circle

如果想让分页器按钮变成圆形，可以将 `shape` 属性设置为 `circle`。

</card>

<card subtitle="Square">

## Square

如果想让分页器按钮变成正方形，可以将 `shape` 属性设置为 `circle`。

</card>

<card subtitle="Dotted">

## Dotted

如果想让分页器按钮变成点状，可以将 `shape` 属性设置为 `dotted` 。

</card>

<card subtitle="DisabledItems">

## Disabled Items

我们可以使用 `disabledItems` 属性为分页组件设置特定的禁用按钮，该属性是一个数组，包含我们要设置为禁用状态的按钮的索引。

</card>

<card subtitle="LoadingItems">

## Loading Items

通过移除按钮之间的边距来更改整个组件的样式，可以将 `shape` 属性设置为 `compact`。

</card>

<card subtitle="Compact">

## Compact

Change the style of the entire component by removing the margin between the buttons, you can set the `shape` property to `compact`.

</card>

<card subtitle="Slot">

## Slot

我们可能需要自定义分页，为此您可以使用箭头之间的默认插槽，并替换页面上的项目

</card>

<card subtitle="Progress">

## Progress

使用 `progress` 属性参考最后一页的位置，为分页添加进度条

</card>

<card subtitle="PageStep">

## Page Step

我们可以更改用户点击...按钮时增加的页数，以便快速前进更多页，这可以通过 `pageStep` 属性实现，其值将是添加或减少的页数（默认值为 5）。

</card>

<card subtitle="Infinite">

## Infinite

我们可以使用 `infinite` 属性实现无限分页，这意味着箭头按钮不再处于禁用状态。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
