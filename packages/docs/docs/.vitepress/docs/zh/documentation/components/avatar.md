#头像头像

<card>

## Default

<docs-warn />

头像组件通常用于个人资料页面或评论区等地方，为展示用户头像提供了一种简单易行的方法。

</card>

<card subtitle="Color">

## Color

使用 `color` 属性更改头像的颜色，允许传入 vuesax 的主题色或（`HEX`, `RGB`）

</card>

<card subtitle="Size">

## Size

将组件的大小更改为所提供的数字，例如传入大小值为 `60` 相当于高度和宽度均为 `60px`

</card>

<card subtitle="Badge">

## Badge

使用 `badge` 属性或插槽为组件添加徽章

您还可以使用 `badge-color` 属性改变徽章的颜色，用`success`（成功）或`danger`（危险）等颜色来表示断开或连接的用户状态。

有时您需要在聊天环境中使用头像，为此您可以添加 `writing` 属性，该属性可添加书写动画

</card>

<card subtitle="AutoFontAndSplit">

## Auto font and split

如果用户的姓名很短，则按原样添加，但如果是很长的文本或其中有几个空格，则会自动生成需要显示的文本，以便正确显示

:::tip
最大字符长度为 **5**。超过该限制文本将被修改。
:::

</card>

<card subtitle="Circle">

## Circle

`circle` 属性会将整个组件的圆角改为 `50%`，使其成为完全的圆形

</card>

<card subtitle="Square">

## Square

`square` 属性会将整个组件的圆角改为 `0%`，使其成为完全的方行

</card>

<card subtitle="History">

## History <Badge/>

`history` 属性在头像周围生成一个边框，通常用来表示用户正在进行某个操作，或者在很多情况下表示用户有 "历史"。

:::tip
我们可以通过 `history-gradient` 属性将边框设置为类似 instagram 的渐变渐变色 
:::

</card>

<card subtitle="Icon">

## Icon

我们可以在头像中添加一个图标,例如当尚未添加或为新用户时，我们只需使用默认插槽即可。

</card>

<card subtitle="Loading">

## Loading

`loading` 属性可以为组件添加加载动画，该属性为 `boolean` 类型

</card>

<card subtitle="Icons">

## Icons

在头像旁边添加一个空间，在这个空间中，问可以为该用户的某些特定动态操作放置图标。

</card>

<card subtitle="Group"> 

## Group

我们可以使用父组件 `vs-avatar-group` 对多个头像进行分组，该组件有两个有趣的属性：

- **max**: 确定要显示的头像的最大数量，其余隐藏的头像会生成最后显示的头像中的数字

- **float**: 会使头像组件相互叠加，去除了一个组件叠加另一个组件的效果。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API"
</script>

<Api></Api>
