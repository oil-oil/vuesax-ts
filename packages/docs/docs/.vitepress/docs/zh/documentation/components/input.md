---
prev: Loading
next: Checkbox
props : 
    - name: placeholder
      type: String
      values: String
      description: 在输入框中添加占位内容
      usageUrl: input#label-placeholder
    - name: label
      type: String
      values: string
      description: 在输入框上方添加标签
      usageUrl: input#label
    - name: labelPlaceholder
      type: String
      values: string
      description: 添加占位内容，聚焦时变为标签。
      usageUrl: input#label-placeholder
    - name: color
      type: String
      values: VuesaxColors | RGB | HEX
      description: 修改输入框的颜色
      default: "null"
      usageUrl: input#color
    - name: status
      type: String
      values: VuesaxColors | RGB | HEX
      description: 通过更改状态来更改输入框的背景颜色
      usageUrl: input#status
    - name: progress
      type: Number
      values: 0 - 100
      description: 添加一个从红色开始到绿色结束的进度条
      default: 0
      usageUrl: input#progress
    - name: loading
      type: Boolean
      values: true | false
      description: 为输入框添加加载动画
      default: "false"
      usageUrl: input#loading
    - name: type
      type: String
      values: Html Type
      description: 更改输入框类型（html 值）
      default: text
      usageUrl: input#input-type
    - name: border
      type: Boolean
      values: true | false
      description: 将输入改为底部边框样式
      default: "false"
      usageUrl: input#border
    - name: shadow
      type: Boolean
      values: true | false
      description: 为输入框添加阴影
      default: "false"
      usageUrl: input#shadow
    - name: iconAfter
      type: Boolean
      values: true | false
      description: 将图标放在输入框右侧
      default: "false"
      usageUrl: input#icon
    - name: visiblePassword
      type: Boolean
      values: true | false
      description: 如果输入的是密码类型，确定是否为显示密码。
      default: "false"
      usageUrl: input#input-type
slots : 
    - name: icon
      type: slot
      values:
      description: 为输入框添加图标
      usageUrl: input#icon
    - name: message
      type: slot
      values:
      description: 在输入内容下方添加说明性文字
      usageUrl: input#message
---

# Input 输入框

<card>

## Default

使用 `<VsInput>` 组件可以非常方便的添加一个输入框元素

</card>

<card subtitle="Label">

## Label

使用 `label` 属性为输入框添加 label

</card>

<card subtitle="LabelPlaceholder">

## Label Placeholder

你可以使用 "label-placeholder "属性，在占位符处于焦点时或在焦点上时添加精美的动画，或者将占位符的值变成输入上方的标签

</card>

<card subtitle="Color">

## Color

使用 `color` 属性更改组件的颜色并在 Input 下方添加边框，允许输入是 vuesax 的主题色和自定义颜色（**RGB**，**HEX**)

</card>

<card subtitle="Icon">

## icon

如果需要在输入前面添加图标，可以使用属性 `iconbefore` 来实现。

</card>

<card subtitle="Message">

## Message

你可以使用 `slot="message-{vuesax color}"` 在输入框下面添加一条信息，以提示字段缺失或数值错误。

</card>

<card subtitle="Status">

## Status

更改某个状态下的输入颜色，允许的状态有(primary, success, danger, warn, dark)。

</card>

<card subtitle="Progress">

## Progress

添加验证进度条，常用的场景是用于验证密码和输入中的正确数据，其值为（0 - 100）。

:::tip
该示例验证密码至少需要满足：

- 一个特殊字符
  - 超过 6 位数
  - 一个小写字母
  - 一个大写字母
  - 一个数字
:::

</card>

<card subtitle="Loading">

## Loading

为带有 `loading` 属性的输入添加加载动画，该属性是 `boolean` 类型。

</card>

<card subtitle="InputTypes">

## Input types

使用 `type` 属性更改输入框的类型，将其作为原生 html 输入框属性，默认值为`text`。

</card>

<card subtitle="Border">

## Border

使用 `border` 属性可以为输入框添加边框，该值为 `boolean` 类型

</card>

<card subtitle="Shadow">

## Shadow

使用 `shadow` 属性可以为输入框添加阴影，该值为 `boolean` 类型

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
