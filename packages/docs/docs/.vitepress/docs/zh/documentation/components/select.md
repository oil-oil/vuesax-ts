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

使用 `label` 属性可以轻松将标签添加到 Select 中，我们还可以添加一个 ``label-placeholder`，顾名思义，这是一个鼓励使用标签的占位符，最后是带有`placeholder` 属性的占位符

</card>

<card subtitle="Group">

## Group

使用子组件 `vs-option-group`对选择内的选项进行分组， "title" 插槽可以为每一项组添加标题。

</card>

<card subtitle="Filter">

## Filter

我们可以使用 `filter` 属性添加过滤选项的功能，此属性是 `boolean` 类型

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

<Api></Api>
