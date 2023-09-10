---
prev: Table
next: Sidebar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改导航栏字体的颜色
      default: primary
      usageUrl: navbar#color
    - name: activeColor
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改导航栏激活项时字体的颜色
      default: primary
      usageUrl: navbar#color
    - name: background
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改导航栏背景的颜色.
      default: white
    - name: v-model
      type: String
      values: String
      description: 确定当前的选中项
      usageUrl: navbar#color
    - name: fixed
      type: Boolean
      values: true | false
      description: 定义导航栏是否固定在屏幕上
      default: "false"
      usageUrl: navbar#default
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
    - name: NavbarGroup#title
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

你可以使用 `color` 修改导航栏的字体颜色，使用 `activeColor` 修改导航栏激活项的颜色，使用 `background` 修改导航栏的背景颜色

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

<card subtitle="NoLine">

## No Line

你可以使用 `Noline` 属性移除导航栏的激活效果横线

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
