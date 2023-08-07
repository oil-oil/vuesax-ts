
#按钮按钮

<Card codesandbox="https://codesandbox.io/embed/reverent-shape-pmyk2?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue">

## Default

<docs-warn />

按钮是一个项目的基础组成部分，在 vuesax 中只需要一行代码就能添加一个很棒的按钮

按钮拥有所有的状态，例如 active, focus, hover 等等，使其易用性更强，并提升使用效率。

</Card>

<Card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark" subtitle="Flat">

## Flat

我们可以通过添加 `flat`  属性来将按钮设置为扁平样式，该属性是 `boolean` 类型

</Card>

<Card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark" subtitle="Border">

## Border

我们可以通过添加 `border`  属性来将按钮设置为带有边框的样式，该属性是 `boolean` 类型

</Card>

<Card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark" subtitle="Gradient">

## Gradient

我们可以通过添加 `gradient`  属性来将按钮设置为渐变色背景，该属性是 `boolean` 类型

:::tip 渐变色由 `color` 属性自动生成，在本例中为 `primary` 颜色
:::

</Card>

<Card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark" subtitle="Relief">

## Relief

我们可以通过添加 `relief`  属性来将按钮设置为悬浮效果，该属性是 `boolean` 类型

</Card>

<Card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark" subtitle="Transparent">

## Transparent

我们可以通过添加 `transparent`  属性来将按钮设置为透明背景，该属性是 `boolean` 类型

</Card>

<Card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark" subtitle="Shadow">

## Shadow

我们可以通过添加 `shadow`  属性来将按钮设置为带有阴影的效果，该属性是 `boolean` 类型 

</Card>

<Card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark" subtitle="Color">

## Color

使用 `color` 属性和颜色值（例如 **#fff**、**rgba (100, 10, 5)** 或 vuesax 的 **primary**）更改按钮组件的颜色，这只会影响组件，其值可以是动态的

</Card>

<Card subtitle="Icon">

## Icon

如果我们需要一个只有图标的按钮,可以使用 `icon` 属性，这个属性是 `boolean` 类型

该属性使按钮具有特定的大小且具有相同的宽度和高度

<div>
  <div>
    <div class="warning custom-block">
      <p class="custom-block-title">
       默认图标
      </p>
      <p>
       默认情况下，Vuesax 不使用任何图标库或字体，因此我们可以自由使用喜欢的图标 所有在某处使用默认图标（例如在 <b>Alert</b> 或<b>Modal</b> 中关闭）的组件都将是 <b>svg</b>，以避免必须安装任何类型的外部源， 并可以通过您喜欢的图标替换为<code>插槽=</code>“图标”
      </p>
    </div>
    <div class="tip custom-block">
      <p class="custom-block-title">
        Vuesax Docs Icons
      </p>
      <p>
        在文档和示例我们使用了图标库 <a target=“_blank” href=“https://boxicons.com/”>boxicons</a>，这对于使用 Vuesax 并非强制性的或必需的，但我们推荐它，因为它具有大量的图标以及它们在视觉上与框架调性相符
      </p>
    </div>
  </div>
</div>

</Card>

<Card subtitle="IconText">

## Icon - Text

如果我们需要带有文字和图标的按钮，可以将它们添加到默认的 `slot` 中。

</Card>

<Card subtitle="Circle">

## Circle

我们可以使用 `circle` 属性对边角进行完全圆角处理，该属性是 `boolean` 类型

</Card>

<Card subtitle="Square">

## Square

我们可以使用 `square` 属性移除所有圆角，该属性是 `boolean` 类型


</Card>

<Card subtitle="Size">

## Size

使用 `size` 属性更改整个按钮（包括字体大小和边框）的大小

- xl
- l
- default
- small
- mini

</Card>

<Card subtitle="Loading">

## Loading

我们可以使用 `loading` 属性添加加载状态，该属性是 `boolean` 类型

</Card>

<Card subtitle="Upload">

## Upload

我们可以使用 `upload` 属性添加向服务器发送或上传数据的状态，该属性 `boolean` 类型

</Card>

<Card subtitle="Block">

## Block

我们可以使用 `block` 属性使按钮的宽度占满父级容器，，该属性是  `boolean` 类型。


</Card>

<Card subtitle="Animate">

## Animate

You can create an animation to the component by adding the ``#"animate" `and the content will be the one that appears when the component is animated

我们可以通过添加 `#"animate"` 为组件创建动画，而内容将是组件动画时出现的内容，还还可以使用 `animation-type` 属性更改动画类型，允许的值有（`vertical`, `scale`, `rotate`）

</Card>

<Card subtitle="Social">

## Social

在项目中使用社交工具的颜色非常常见，无论是登录按钮还是分享按钮，因此 Vuesax 可让您轻松搜索每种颜色，只需输入名称即可改变组件的整体风格。

支持的颜色: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

</Card>

<Card subtitle="Floating">

## Floating


我们可以使用 `floating` 属性轻松制作浮动样式按钮，该属性是 `boolean` 类型。

这些按钮通常执行特定的重要操作，位置固定在下角

</Card>

<Card subtitle="Group">

## Group

如果我们需要开发一组按钮，可以使用 `<VsbuttonGroup> </VsbuttonGroup>` 并在默认插槽中放入我们要组合的按钮

</Card>

<Card subtitle="Toggle">

## Toggle

这是一个例子，用于展示只需简单的逻辑和几行代码就能实现哪些功能

</Card>

<Card subtitle="ToHref">

## To - href

如果需要使用 vue-router 或外部链接等按钮，可以使用属性 (`to`: vue-router 路由) 或 (`href`: html 外部链接) 来实现

</Card>

<script setup>
import Api from "../../../../theme/global-components/template/API"
</script>

<Api></Api>
