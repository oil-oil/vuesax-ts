---
prev: Sidebar
next: Card
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改侧边栏字体颜色
      default: primary
      usageUrl: sidebar#color
    - name: activeColor
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改侧边栏激活项字体颜色
      default: primary
      usageUrl: sidebar#color
    - name: background
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 修改侧边栏激活项背景颜色
      default: white
      usageUrl: sidebar#color
    - name: v-model
      type: String
      values: String
      description: 确定当前激活的项目
    - name: absolute	
      type: Boolean
      values: true | false
      description: 确定侧边栏是否为绝对定位
      default: "false"
    - name: relative	
      type: Boolean
      values: true | false
      description: 确定侧边栏是否为相对定位
      default: "false"
    - name: shadow
      type: Boolean
      values: true | false
      description: 为侧边栏添加阴影
      default: "true"
    - name: collapsed
      type: Boolean
      values: true | false
      description: 确定边栏宽度是否折叠
      default: "false"
      usageUrl: sidebar#collapse
    - name: hoverExpand
      type: Boolean
      values: true | false
      description: 当鼠标悬停在侧边栏上时，展开菜单；当鼠标移出时，折叠菜单
      default: "false"
      usageUrl: sidebar#hover-expand
    - name: square
      type: Boolean
      values: true | false
      description: 将边框半径改为 0，将侧边栏设置为正方形
      default: "false"
      usageUrl: sidebar#square
    - name: noLine
      type: Boolean
      values: true | false
      description: Delete the active line in the sidebar.	
      default: "false"
      usageUrl: sidebar#no-line
    - name: right
      type: Boolean
      values: true | false
      description: 删除侧边栏激活项的横线
      default: "false"
      usageUrl: sidebar#right
    - name: SidebarItem:id
      type: String
      values: String
      description: 该 id 用于更改父组件 v-model 的值，从而根据用户交互确定活动状态。
      usageUrl: sidebar#default
    - name: SidebarItem:href
      type: String
      values: url
      description: 使用提供的网址生成一个新标签页
      usageUrl: sidebar#default
    - name: SidebarItem:target
      type: String
      values: _blank
      description: 确定该标签页是新标签页还是替换当前标签页
slots : 
    - name: logo
      type: slot
      description: 在侧边栏顶部添加元素
    - name: footer
      type: slot
      description: 在侧边栏底部添加元素
      usageUrl: sidebar#default
    - name: header
      type: slot
      description: 在 logo 下方选项上方添加元素。
    - name: SidebarGroup#title
      type: slot
      description: 侧边栏组中的标题元素
      usageUrl: sidebar#group
    - name: SidebarItem#icon
      type: slot
      description: 用于放置图标元素
      usageUrl: sidebar#default
    - name: SidebarItem#arrow
      type: slot
      description: 用于放置自定义箭头图标元素
---

# Sidebar 侧边栏

<card>

## Default

使用 `VsSidebar` 组件添加侧边栏菜单，其中有两个子组件 `VsSidebarItem` 和`VsSidebarGroup`

</card>

<card subtitle="Group">

## Group

你可以使用 `VsSidebarGroup` 子组件对项目进行分组和隐藏。

</card>

<card subtitle="Collapsed">

## Collapse

你可以使用 `collapsed` 属性使边栏宽度为 `50px`，并只显示图标。

</card>

<card subtitle="HoverExpand">

## Hover Expand

你可以使用属性 `hoverExpand` 添加用鼠标展开或折叠侧边栏的功能。

</card>

<card subtitle="Color">

## Color

你可以使用 `color` 更改侧边栏的字体颜色，使用 `activeColor` 更改侧边栏中激活项的颜色，使用 `background` 更改侧边栏的背景。

</card>

<card subtitle="Visible">

## Visible

你可以使用 `visible` 属性定义侧边栏是可见还是隐藏，默认情况下该属性为 `true`

</card>

<card subtitle="Right">

## Position Right

你可以使用 `right` 属性将侧边栏更改为右侧布局

</card>

<card subtitle="Square">

## Square

你可以使用 `square` 属性，删除 `border-radius` 边框半径，使侧边栏变成正方形。

</card>

<card subtitle="NoLine">

## No Line

你可以使用 `noLine` 属性移除侧边栏的激活效果线

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>