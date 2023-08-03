
# Alert 警告

<card>

## Default

<docs-warn />

Alert 组件是用于显示重要信息的组件。通常使用弹出框或滑动面板的形式，并且可以显示警告、错误、成功或信息消息。

</card>

<card subtitle="Solid">

## Solid <Badge text="New"/>

我们可以通过添加 solid 属性来将 Alert 设置为纯色背景，该属性是 `boolean` 类型。

</card>

<card subtitle="Border">

## Border <Badge text="New"/>

我们可以通过添加 `border` 属性来将 Alert 设置为带有边框的样式，该属性是 `boolean` 类型。

</card>

<card subtitle="Shadow">

## Shadow <Badge text="New"/>

我们可以通过添加 `shadow` 来将 Alert 设置为带有阴影的样式
，该属性是 `boolean` 类型

</card>

<card subtitle="Gradient">

## Gradient <Badge text="New"/>

我们可以通过添加 `gradient` 属性来将 Alert 设置为渐变色背景，该属性是 `boolean` 类型

</card>

<card subtitle="Relief">

## Relief <Badge text="New"/>

我们可以通过添加 `relief` 属性来将 Alert 设置为悬浮风格，该属性是 `boolean` 类型。

</card>

<card subtitle="Animate">

## 动画

当为用户展示或隐藏 Alert 时增加一个简单好看的动画


</card>

<card subtitle="Color">

## Color

通过 `color` 属性修改 Alert 组件的颜色

在此示例中，我们可以单击按钮并动态调整颜色值以将其显示在 **VsAlert** 组件中：

</card>

<card subtitle="Icon">

## Icon

使用 slot 可以简单将图标添加到 Alert
**icon**

<VsAlert color="warn" >
  <template #title>
  Default Icons
  </template>
Vuesax does not use any library or default icon source, with this we give you the freedom to use the one you prefer All the components that use a default icon somewhere like the close one in an <b>Alert</b> or a <b>Popup</b> will be an <b>svg</b> for not having to install any type of external font, and it can be replaced with an icon of your preference<code style="padding: .25rem .5rem;font-size:.85rem;background-color:var(--vs-theme-bg2);border-radius: 3px;">slot="icon"</code>
</VsAlert>

<VsAlert color="success" style="margin:10px 0 0 0 ">
  <template #title>
  Vuesax Docs Icons
  </template>
These documents and examples use the <a href="https://boxicons.com/" target="_blank">boxicons</a> component library, it is not mandatory or necessary for the use of Vuesax but we recommend it for its wide range of icons and how they visually complement the framework
</VsAlert>

</card>

<card subtitle="Title">

## Title

我们可以使用 `slot="title"` 向 Alert 添加描述性标题 

</card>

<card subtitle="HiddenContent">

## Hidden Content <Badge text="New"/>

我们可以隐藏 Alert 的内容，只保留标题以动态显示内容

</card>

<card subtitle="Pagination">

## Pagination <Badge text="New"/>

有时我们需要向用户展示很多内容，但我们不想展示所有文本，使得 Alert 变得非常高

</card>

<card subtitle="Footer">

## footer <Badge text="New"/>

Use the `footer` slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.

使用 `footer` 插槽向 Alert 添加页脚，可以在页脚中添加与用户的交互，例如按钮或复选框

</card>

<card subtitle="ProgressBar">

## Progress bar <Badge text="New"/>

我们可以使用 `progress` 属性和数字（`0 - 100`）向警报添加进度条

</card>

<card subtitle="Closable">

## Closable <Badge text="New"/>

我们可以使用 `closeable` 属性增加关闭 Alert 的图标，该属性是一个 `boolean` 值。

</card>

<card subtitle="TimeClose">

## Time Close <Badge text="New"/>

如果我们需要 Alert 在一段时间后隐藏，可以通过加入一些属性和几行代码来实现

</card>

<script setup>
import Api from "../../../../theme/global-components/template/Alert/API.tsx"
</script>

<Api></Api>

