
# Alert 警告

<card>

## Default

Alert 组件是用于显示重要信息的组件。通常使用弹出框或滑动面板的形式，并且可以显示警告、错误、成功或信息消息。

</card>

<card subtitle="Solid">

## Solid

我们可以通过添加 solid 属性来将警告设置为纯色背景，该属性是 `boolean` 类型。

</card>

<card subtitle="Border">

## Border

我们可以通过添加 `border` 属性来将警告设置为带有边框的样式，该属性是 `boolean` 类型。

</card>

<card subtitle="Shadow">

## Shadow

我们可以通过添加 `shadow` 来将警告设置为带有阴影的样式
，该属性是 `boolean` 类型

</card>

<card subtitle="Gradient">

## Gradient

我们可以通过添加 `gradient` 属性来将警告设置为渐变色背景，该属性是 `boolean` 类型

</card>

<card subtitle="Relief">

## Relief

我们可以通过添加 `relief` 属性来将警告设置为悬浮风格，该属性是 `boolean` 类型。

</card>

<card subtitle="Animate">

## 动画

当为用户展示或隐藏警告时增加一个简单好看的动画


</card>

<card subtitle="Color">

## Color

通过 `color` 属性修改警告组件的颜色

在此示例中，我们可以单击按钮并动态调整颜色值以将其显示在 **VsAlert** 组件中：

</card>

<card subtitle="Icon">

## Icon

使用 slot 可以轻松将图标添加到警告组件

</card>

<card subtitle="Title">

## Title

我们可以使用 `slot="title"` 向警告添加描述性标题 

</card>

<card subtitle="HiddenContent">

## Hidden Content

我们可以隐藏警告的内容，只保留标题以动态显示内容

</card>

<card subtitle="Pagination">

## Pagination

有时我们需要向用户展示很多内容，但我们不想展示所有文本，使得警告变得非常高

</card>

<card subtitle="Footer">

## footer

使用 `footer` 插槽向警告添加页脚，可以在页脚中添加与用户的交互，例如按钮或复选框

</card>

<card subtitle="ProgressBar">

## Progress bar

我们可以使用 `progress` 属性和数字（`0 - 100`）向警报添加进度条

</card>

<card subtitle="Closable">

## Closable

我们可以使用 `closeable` 属性增加关闭警告的图标，该属性是一个 `boolean` 值。

</card>

<card subtitle="TimeClose">

## Time Close

如果我们需要警告在一段时间后隐藏，可以通过加入一些属性和几行代码来实现

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api></Api>

