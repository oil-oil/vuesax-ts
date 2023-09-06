---
prev: Table
next: Sidebar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改导航栏的颜色
      default: primary
    - name: v-model
      type: String
      values: String
      description: 确定当前的选中项
    - name: fixed
      type: Boolean
      values: true | false
      description: 定义导航栏是否固定在屏幕上
      default: "false"
      usageUrl: navbar#default
    - name: shadowScroll
      type: Boolean
      values: true | false
      description: 当与 `targetScroll` 相对应的元素未滚动到顶部时，添加阴影效果
      default: "false"
      usageUrl: navbar#shadowScroll
    - name: shadow
      type: Boolean
      values: true | false
      description: 为导航栏添加阴影
      default: "false"
    - name: hideScroll
      type: Boolean
      values: true | false
      description: 当由 `targetScroll` 指定的元素向下滚动时，隐藏导航栏
      default: "false"
      usageUrl: navbar#hide-scroll
    - name: textWhite
      type: Boolean
      values: true | false
      description: 将导航项的文字颜色更改为白色
      default: "false"
      usageUrl: navbar#color
    - name: square
      type: Boolean
      values: true | false
      description: 将导航栏设置为正方形，将边框半径改为 0
      default: "false"
      usageUrl: navbar#square
    - name: paddingScroll
      type: Boolean
      values: true | false
      description: 确定导航栏是否有填充，用户滚动是否会被移除，从而产生效果
      default: "false"
      usageUrl: navbar#padding-scroll
    - name: targetScroll
      type: String
      values: String
      description: 确定触发滚动事件的元素
      default: "false"
      usageUrl: navbar#hide-scroll
    - name: noLine
      type: Boolean
      values: true | false
      description: 删除导航栏中的激活项的底部横线
      default: "false"
      usageUrl: navbar#no-line
    - name: NavbarItem:id
      type: String
      values: String
      description: 该 id 用于更改父组件 v-model 的值，从而根据用户交互判断激活状态
      usageUrl: navbar#default
    - name: NavbarItem:href
      type: String
      values: url
      description: 使用提供的网址生成一个新标签页
    - name: NavbarItem:target
      type: String
      values: _blank
      description: 确定该标签页是新标签页还是替换当前标签页
slots : 
    - name: left
      type: slot
      description: 在导航左侧添加一个元素
    - name: right
      type: slot
      description: 在导航右侧添加一个元素
      usageUrl: navbar#default
    - name: NavbarGroup:title
      type: slot
      description: 在导航栏中的分组标题元素
      usageUrl: navbar#group
---

# Navbar 导航栏

<card>

## Default

使用 `VsNavbar` 组件快速生成菜单，该组件分为 3 个插槽：左侧（left）、中间（default）、右侧（right），你可以使用这些插槽确定元素的位置，子组件有 `VsNavbarItem` 和 `VsNavbarGroup` 。

</card>

<card subtitle="Color">

## Color

使用颜色属性或直接添加 vuesax 的一种主题颜色来更改组件的`颜色

如果要将文字颜色改为白色，可以使用属性 `textWhite` 来实现

</card>

<card subtitle="HideScroll">

## Hide Scroll

当 `targetScroll` 指定的元素向下滚动时，`hideScroll` 属性会隐藏导航栏。

</card>

<card subtitle="Group">

## Group

你可以使用 `VsNavbarGroup` 组件在一个项中添加元素列表，并在其中添加 `VsNavbarItem` 组件

</card>

<card subtitle="PaddingScroll">

## Padding Scroll

添加组件上下填充的功能，当组件降低时，滚动将被消除，从而产生令人愉悦的效果

</card>

<card subtitle="Square">

## Square

移除 `border-radius` 属性，使组件成为方形

</card>

<card subtitle="ShadowScroll">

## Shadow Scroll

当与 `targetScroll` 相对应的元素没有滚动到顶部时，`shadowScroll` 属性会添加阴影效果。

</card>

<card subtitle="NoLine">

## No Line

消除导航栏的激活效果横线

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>