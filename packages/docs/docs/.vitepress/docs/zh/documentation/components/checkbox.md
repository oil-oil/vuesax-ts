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

## 布尔值

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

## LineThrough

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
