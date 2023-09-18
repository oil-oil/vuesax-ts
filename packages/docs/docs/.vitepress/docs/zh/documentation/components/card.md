---
prev: Sidebar
props : 
    - name: type
      type: String
      values: 1,2,3,4,5
      description: 更改文字的样式和内部结构的位置。
      default: 1
      usageUrl: card#Type2
slots : 
    - name: text
      type: slot
      description: 根据卡片类型，在指定的区域中添加文本
      usageUrl: card#default
    - name: title
      type: slot
      description: 根据卡片类型，在指定的区域中添加标题
      usageUrl: card#default
    - name: buttons
      type: slot
      description: 根据卡片类型，在指定的区域中添加按钮
      usageUrl: card#default
    - name: interactions
      type: slot
      description: 根据卡片类型，在指定的区域中添加交互
      usageUrl: card#default
    - name: img
      type: slot
      description: 根据卡片类型，在指定的区域中添加图片
      usageUrl: card#default
---

# Card

<card>

## Default

使用 `VsCard` 添加一个卡片组件，该组件有如下几个插槽：

- title
- text
- buttons
- interactions
- img

</card>

<card subtitle="Type2">

## Type 2

`type` 属性为 `2` 对应的卡片样式：

</card>

<card subtitle="Type3">

## Type 3

`type` 属性为 `3` 对应的卡片样式：


</card>

<card subtitle="Type4">

## Type 4

`type` 属性为 `4` 对应的卡片样式：

</card>

<card subtitle="Type5">

## Type 5

`type` 属性为 `5` 对应的卡片样式：

</card>

<card subtitle="Group">

## Group

可以使用 `VsCardGroup` 组件创建一组滚动卡片

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>