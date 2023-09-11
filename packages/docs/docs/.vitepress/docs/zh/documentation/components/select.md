---
prev: Switch
next: Avatar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 更改选择器的颜色
      default: primary
      usageUrl: select#color
    - name: disabled
      type: Boolean
      values: true | false
      description: 确定选择器是否处于禁用状态
      default: "false"
    - name: loading
      type: Boolean
      values: true | false
      description: 确定选择器是否展示加载动画并已禁用
      default: "false"
      usageUrl: select#loading
    - name: modelValue
      type: String
      values: String
      description: 确定选择器的值
      usageUrl: select#default
    - name: placeholder
      type: String
      values: String
      description: 在选择器中添加占位符。
      usageUrl: select#label
    - name: label	
      type: String
      values: String
      description: 在选择器中添加标签。
      usageUrl: select#label
    - name: label-placeholder	
      type: String
      values: String
      description: 添加一个占位符，当处于聚焦状态或有数值时，占位符就会变成一个标签
      usageUrl: select#label
    - name: filter
      type: Boolean
      values: true | false
      description: 添加过滤选择器选项的功能
      default: "false"
      usageUrl: select#filter
    - name: multiple
      type: Boolean
      values: true | false
      description: 增加从选择器中选择多个选项的功能
      default: "false"
      usageUrl: select#multiple
    - name: status
      type: String
      values: Vuesax Colors
      description: 将选择器的状态更改为所提供的颜色
      usageUrl: select#status
    - name: block
      type: Boolean
      values: true | false
      description: 更改按钮的宽度，以填充父元素
      default: "false"
slots : 
    - name: message-{color}
      type: slot
      values:
      description: 在选择下器方添加一条提示信息
      default: 
      usageUrl: select#message
    - name: noData
      type: slot
      values:
      description: 自定义过滤后无数据时显示的元素
      default: 
      usageUrl: select#filter
---

# Select 选择器

<card>

## Default

使用 `vs-select` 组件和 `vs-option` 子组件添加一个选择器

</card>

<card subtitle="Color">

## Color

使用 `color` 属性更改 Select 的颜色，允许传入 vuesax 的主题色和（`HEX`, `RGB`）

</card>

<card subtitle="Label">

## Label

使用 `label` 属性可以轻松将标签添加到 Select 中，你还可以添加一个 ``label-placeholder`，顾名思义，这是一个鼓励使用标签的占位符，最后是带有`placeholder` 属性的占位符

</card>

<card subtitle="Group">

## Group

使用子组件 `vs-option-group`对选择内的选项进行分组， "title" 插槽可以为每一项组添加标题。

</card>

<card subtitle="Filter">

## Filter

你可以使用 `filter` 属性添加过滤选项的功能，此属性是 `boolean` 类型

</card>

<card subtitle="Multiple">

## Multiple

使用 `multiple` 属性添加多选项选择功能，该属性是 `boolean` 类型

:::tip
The value of the select must be an array
:::

</card>

<card subtitle="Loading">

## Loading

使用 `loading` 属性为选择器添加加载动画，该属性是 `boolean` 类型

</card>

<card subtitle="Status">

## Status

将组件的样式更改为 "status" 属性中传递的颜色，允许的颜色仅为 vuesax 的主题颜色

:::tip
该属性可用于向用户提示缺少的字段，或在某些内容准备就绪时指示缺少的字段。
:::

</card>

<card subtitle="Message">

## Message

在选择器下方，向用户显示一条信息

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
