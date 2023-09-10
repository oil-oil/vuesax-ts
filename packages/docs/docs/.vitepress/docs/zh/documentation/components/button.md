---
prev: Colors
next: Alert
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改按钮及其子组件的颜色
      default: primary
      usageUrl: button#color
    - name: style button
      type: Prop
      values: flat | border | gradient | transparent | dashed | shadow | relief | floating
      description: 更改按钮的样式和状态
      default:
      usageUrl: button#flat
    - name: active
      type: Boolean
      values: true | false
      description: 确定按钮是否处于激活状态，并将其样式更改为激活状态
      default: "false"
      usageUrl: button#default
    - name: upload
      type: Boolean
      values: true | false
      description: 通过更改样式和添加动画来确定按钮是否处于上传状态
      default: "false"
      usageUrl: button#upload
    - name: href
      type: String
      values: href - link
      description: 为按钮添加外部链接的 href
      default: "false"
      usageUrl: button#href
    - name: blank
      type: Boolean
      values: true | false
      description: as in an html element `a` determines whether a new window is opened or the current one is replaced.
      default: "false"
      usageUrl: button#href
    - name: icon
      type: Boolean
      values: true | false
      description: 确定按钮是否只包含一个图标，添加此属性后，按钮的宽度和高度将相等
      default: "false"
      usageUrl: button#icon
    - name: circle
      type: Boolean
      values: true | false
      description: 更改圆角为圆形样式
      default: "false"
      usageUrl: button#circle
    - name: square
      type: Boolean
      values: true | false
      description: 更改圆角为方形样式
      default: "false"
      usageUrl: button#square
    - name: block
      type: Boolean
      values: true | false
      description: 将按钮宽度改为占满父元素
      default: "false"
      usageUrl: button#block
    - name: animationType
      type: Boolean
      values: true | false
      description: 更改动画类型，该属性仅在设置了动画插槽时有效
      default: "false"
      usageUrl: button#animate
    - name: animateInactive
      type: Boolean
      values: true | false
      description: 确定用户悬停时动画是否激活
      default: "false"
      usageUrl: button#animate
slots : 
    - name: animate
      type: slot
      values:
      description: 用于添加将在动画中显示的元素的插槽
      default: 
      usageUrl: button#animate
---

# Button 按钮

<Card>

## Default

按钮是一个项目的基础组成部分，在 vuesax 中只需要一行代码就能添加一个很棒的按钮

按钮拥有所有的状态，例如 active, focus, hover 等等，使其易用性更强，并提升使用效率。

</Card>

<Card subtitle="Flat">

## Flat

你可以通过添加 `flat`  属性来将按钮设置为扁平样式，该属性是 `boolean` 类型

</Card>

<Card subtitle="Border">

## Border

你可以通过添加 `border`  属性来将按钮设置为带有边框的样式，该属性是 `boolean` 类型

</Card>

<Card subtitle="Gradient">

## Gradient

你可以通过添加 `gradient`  属性来将按钮设置为渐变色背景，该属性是 `boolean` 类型

:::tip 渐变色由 `color` 属性自动生成，在本例中为 `primary` 颜色
:::

</Card>

<Card subtitle="Relief">

## Relief

你可以通过添加 `relief`  属性来将按钮设置为悬浮效果，该属性是 `boolean` 类型

</Card>

<Card subtitle="Transparent">

## Transparent

你可以通过添加 `transparent`  属性来将按钮设置为透明背景，该属性是 `boolean` 类型

</Card>

<Card subtitle="Shadow">

## Shadow

你可以通过添加 `shadow`  属性来将按钮设置为带有阴影的效果，该属性是 `boolean` 类型

</Card>

<Card subtitle="Color">

## Color

使用 `color` 属性和颜色值（例如 **#fff**、**rgba (100, 10, 5)** 或 vuesax 的 **primary**）更改按钮组件的颜色，这只会影响组件，其值可以是动态的

</Card>

<Card subtitle="Icon">

## Icon

如果你需要一个只有图标的按钮,可以使用 `icon` 属性，这个属性是 `boolean` 类型

该属性使按钮具有特定的大小且具有相同的宽度和高度

</Card>

<Card subtitle="IconText">

## Icon - Text

如果你需要带有文字和图标的按钮，可以将它们添加到默认的 `slot` 中

</Card>

<Card subtitle="Circle">

## Circle

你可以使用 `circle` 属性对边角进行完全圆角处理，该属性是 `boolean` 类型

</Card>

<Card subtitle="Square">

## Square

你可以使用 `square` 属性移除所有圆角，该属性是 `boolean` 类型

</Card>

<Card subtitle="Size">

## Size

使用 `size` 属性更改整个按钮（包括字体大小和边框）的大小

- xl
- lg
- md
- sm
- xs

</Card>

<Card subtitle="Loading">

## Loading

你可以使用 `loading` 属性添加加载状态，该属性是 `boolean` 类型

</Card>

<Card subtitle="Upload">

## Upload

你可以使用 `upload` 属性添加向服务器发送或上传数据的状态，该属性 `boolean` 类型

</Card>

<Card subtitle="Block">

## Block

你可以使用 `block` 属性使按钮的宽度占满父级容器，，该属性是  `boolean` 类型。

</Card>

<Card subtitle="Animate">

## Animate

You can create an animation to the component by adding the ``#"animate" `and the content will be the one that appears when the component is animated

你可以通过添加 `#"animate"` 为组件创建动画，而内容将是组件动画时出现的内容，还还可以使用 `animation-type` 属性更改动画类型，允许的值有（`vertical`, `scale`, `rotate`）

</Card>

<Card subtitle="Social">

## Social

在项目中使用社交工具的颜色非常常见，无论是登录按钮还是分享按钮，因此 Vuesax 可让您轻松搜索每种颜色，只需输入名称即可改变组件的整体风格。

支持的颜色: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

</Card>

<Card subtitle="Floating">

## Floating

你可以使用 `floating` 属性轻松制作浮动样式按钮，该属性是 `boolean` 类型。

这些按钮通常执行特定的重要操作，位置固定在下角

</Card>

<Card subtitle="Group">

## Group

如果你需要开发一组按钮，可以使用 `<VsbuttonGroup> </VsbuttonGroup>` 并在默认插槽中放入你要组合的按钮

</Card>

<Card subtitle="Toggle">

## Toggle

这是一个例子，用于展示只需简单的逻辑和几行代码就能实现哪些功能

</Card>

<Card subtitle="Href">

## href

如果需要外部链接按钮，可以使用属性 (`href`: html 外部链接) 来实现

</Card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
