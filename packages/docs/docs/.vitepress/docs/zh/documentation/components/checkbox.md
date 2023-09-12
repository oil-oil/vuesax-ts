---
prev: Input
next: Switch
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 更改复选框及其部分子组件的颜色
      default: primary
      usageUrl: checkbox#color
    - name: v-model
      type: Boolean
      values: true | false
      description: 确定复选框的值
      default: "false"
      usageUrl: checkbox#default
    - name: loading
      type: Boolean
      values: true | false
      description: 添加加载动画并禁用输入
      default: "false"
      usageUrl: checkbox#loading
    - name: lineThrough
      type: Boolean
      values: true | false
      description: 选中时，在标签中添加横线
      default: "false"
      usageUrl: checkbox#line-through
    - name: indeterminate
      type: Boolean
      values: true | false
      description: 选中时，在标签中央添加一行
      default: "false"
      usageUrl: checkbox#indeterminate
    - name: labelBefore
      type: Boolean
      values: true | false
      description: 将默认复选框图标改为表示未确定数据的线条
      default: "false"
      usageUrl: checkbox#label
    - name: checked
      type: Boolean
      values: true | false
      description: 确定组件是否处于初始校验状态（这会将 v-model 中计算的属性更改为 true）
      default: "false"
      usageUrl: checkbox#boolean-value
slots : 
    - name: icon
      type: slot
      values:
      description: 更改组件图标
      default: 
      usageUrl: checkbox#icon
    - name: default
      type: slot
      values:
      description: 为组件添加标签
      default: 
      usageUrl: checkbox#default
---

# Checkbox 复选框

<card>

## Default

轻松添加一个带有精美动画的复选框输入框

</card>

<card subtitle="Color">

## color

使用 `color` 属性和颜色值（例如 **#fff**、**rgba (100, 10, 5)** 或 vuesax 的 **primary**）更改按钮组件的颜色，这只会影响组件，其值可以是动态的

</card>

<card subtitle="BooleanValue">

## Boolean Value

默认情况下，该组件与一个布尔值一起使用，当被勾选时返回`true`，当未被勾选时返回`false`。

</card>

<card subtitle="Icon">

## Icon

使用 `slot="icon"` 更改复选框组件内的图标

<utils-icon />

</card>

<card subtitle="Label">

## Label

在组件的默认插槽中，你可以为它添加标签

</card>

<card subtitle="Loading">

## Loading

你可以使用 `loading` 属性添加加载状态，该属性是 `boolean` 类型

</card>

<card subtitle="LineThrough">

## Line Through

使用 `line-through` 属性，在选中复选框时，标签中间添加一行线

</card>

<card subtitle="Indeterminate">

## Indeterminate

在某些情况下，如果你有多个复选框，而只需要一个复选框来管理所有其他复选框，这时你可以使用 `indeterminate` 属性，为复选框添加不同的样式。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
