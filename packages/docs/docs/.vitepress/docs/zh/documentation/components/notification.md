---
prev: Avatar
next: Radio
last Update: 2023/13/1
---
# Notification 警告

<card>

## Default

使用 vuesax hook（`useNotification`）生成通知

:::tip
  `title` 和 `text` 属性是必填的
:::

</card>

<card subtitle="Position">

## Position

使用 `position` 属性更改通知的弹出位置

supported values

- `bottom-right` <Badge type="text" text="Default"/>
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

</card>

<card subtitle="Color">

## Color

使用 `color` 属性可更改组件和部分子组件的基本颜色，如果想更好地理解颜色和主题的处理方法，请参阅它。

Allowed values ​​are:

- primary
- success
- danger
- warning
- dark
- RGB
- HEX

</card>

<card subtitle="Icons">

## Icons

将图标作为通过 `icon` 插槽添加到通知中

</card>

<card subtitle="Progress">

## Progress

如果 `progressAuto` 属性的值为 `true`，则在通知中添加进度条，并由 `duration` 属性决定是否达到 100%。

</card>

<card subtitle="Duration">

## Duration

使用 `duration` 属性更改通知的持续时间，该值为 `number` 类型，用于确定隐藏组件前的秒数，**10s** 等于 **10000** 的值。

如果我们需要通知永不隐藏，持续时间值应为 `undefined`。

</card>

<card subtitle="Square">

## Square

我们可以使用 `square` 属性移除所有圆角，该属性是 `boolean` 类型

</card>

<card subtitle="Border">

## Border

我们可以通过添加 `border`  属性来将 Notification 设置为带有边框的样式，该属性是 `boolean` 类型

</card>

<card subtitle="Flat">

## Flat

我们可以通过添加 `flat`  属性来将 Notification 设置为扁平的样式，该属性是 `boolean` 类型

</card>

<card subtitle="Loading">

## Loading

使用 `loading` 属性为通知添加加载动画，拥有此属性将只显示动画而隐藏内容

</card>

<card subtitle="Width">

## Width

使用属性 `width` 将通知的大小更改为整个屏幕的大小，并将其值设为 `100%`。

如果需要根据内容自动调整通知的大小，可以使用 `auto` 值来实现。

</card>

<card subtitle="Sticky">

## Sticky

您可以使用 `sticky` 属性为粘贴组件的最近角添加样式，该属性是一个 `boolean` po，其值只能是 `true` 。

</card>

<card subtitle="Example">

## Example

如果想在通知中添加任意元素，我们可以使用 `content` 属性，该属性只能接收一个导入的组件，它将在通知中生成该组件。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api></Api>
