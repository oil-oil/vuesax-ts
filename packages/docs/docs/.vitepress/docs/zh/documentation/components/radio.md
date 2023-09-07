---
prev: Notification
next: Tooltip
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改单选框的颜色
      default: primary
      usageUrl: radio#color
    - name: disabled
      type: Boolean
      values: true | false
      description: 确定单选框是否处于禁用状态
      default: "false"
      usageUrl: radio#default
    - name: loading
      type: Boolean
      values: true | false
      description: 确定单选框是否有加载动画并已禁用
      default: "false"
      usageUrl: radio#loading
    - name: value
      type: String
      values: String
      description: 确定单选框的值。
      default: 
      usageUrl: radio#default
slots : 
    - name: default
      type: slot
      values:
      description: 为单选框添加标签
      default: 
      usageUrl: radio#default
    - name: icon
      type: slot
      values:
      description: 为单选框中添加一个图标。
      default: 
      usageUrl: radio#default
---

# Radio 单选框

<card>

## Default

使用组件 `<VsRadio />` 添加单选框

</card>

<card subtitle="Color">

## Color

使用 `color` 属性更改组件的颜色，允许的值有（vuesax 的主题颜色、RGB、HEX）

</card>

<card subtitle="Label">

## Label

使用 `default` 插槽为单选框添加标签，如果需要标签位于单选框之前，可以使用 `label-before` 属性

</card>

<card subtitle="Loading">

## Loading

为组件添加加载动画，当单选框激活此属性时，它同时也处于 `disabled` 状态

</card>

<card subtitle="Icon">

## Icon

使用 `icon` 插槽在单选框中添加图标

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
