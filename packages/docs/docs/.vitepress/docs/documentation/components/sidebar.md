---
prev: Sidebar
next: Card
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the text color of the siderbar.
      default: primary
      usageUrl: sidebar#color
    - name: activeColor
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the active item text color of the siderbar.
      default: primary
      usageUrl: sidebar#color
    - name: background
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the background color of the siderbar.
      default: white
      usageUrl: sidebar#color
    - name: v-model
      type: String
      values: String
      description: Determines the currently active item.
    - name: absolute	
      type: Boolean
      values: true | false
      description: Determine if the sidebar is of absolute position.
      default: "false"
    - name: relative	
      type: Boolean
      values: true | false
      description: Determine if the sidebar is of relative position.
      default: "false"
    - name: shadow
      type: Boolean
      values: true | false
      description: Add a shadow to the sidebar.	
      default: "true"
    - name: collapsed
      type: Boolean
      values: true | false
      description: Determines whether the sidebar width is collapsed.
      default: "false"
      usageUrl: sidebar#collapse
    - name: hoverExpand
      type: Boolean
      values: true | false
      description: Expands the menu when the mouse is hovering over the sidebar and collapses it when the mouse is moving out.
      default: "false"
      usageUrl: sidebar#hover-expand
    - name: square
      type: Boolean
      values: true | false
      description: Change the border radius to 0 by making the sidebar square.	
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
      description: Determines if the component is positioned to the right.
      default: "false"
      usageUrl: sidebar#right
    - name: SidebarItem:id
      type: String
      values: String
      description: It is the id that is used to change the value of the v-model of the parent component and thus be able to determine the active state based on user interaction.	
      usageUrl: sidebar#default
    - name: SidebarItem:href
      type: String
      values: url
      description: Generate a new tab with the url provided.
      usageUrl: sidebar#default
    - name: SidebarItem:target
      type: String
      values: _blank
      description: Determine if the tab is a new one or if it replaces the current one.
slots : 
    - name: logo
      type: slot
      description: Add elements on top of the entire sidebar.	
    - name: footer
      type: slot
      description: Add the elements at the bottom of the sidebar.	
      usageUrl: sidebar#default
    - name: header
      type: slot
      description: Add the elements below the logo and above the items.
    - name: SidebarGroup#title
      type: slot
      description: Title element in sidebar group.
      usageUrl: sidebar#group
    - name: SidebarItem#icon
      type: slot
      description: For placing icon elements.
      usageUrl: sidebar#default
    - name: SidebarItem#arrow
      type: slot
      description: For placing custom arrow icon elements.
---

# Sidebar

<card>

## Default

Add a sidebar menu with the `VsSidebar` component, there are two subcomponents `VsSidebarItem` and `VsSidebarGroup`

</card>

<card subtitle="Group">

## Group

You can group items and hide them with the `VsSidebarGroup` sub-component.

</card>

<card subtitle="Collapsed">

## Collapse

You can use the `collapsed` property to make the sidebar 50px wide and display only the icon.

</card>

<card subtitle="HoverExpand">

## Hover Expand

You can add the functionality to expand and collapse the sidebar with the mouse, with the property `hoverExpand`

</card>

<card subtitle="Color">

## Color

You can use `color` to change the font color of the sidebar, `activeColor` to change the color of the active items in the sidebar, and `background` to change the background of the sidebar.

</card>

<card subtitle="Visible">

## Visible

You can define if the sidebar is visible or hidden with the `visible` property, this property by default is `true`

</card>

<card subtitle="Right">

## Position Right

You can use the `right` property to change the sidebar to a right-handed layout

</card>

<card subtitle="Square">

## Square

You can use `square` property making the sidebar square by remove the `border-radius`

</card>

<card subtitle="NoLine">

## No Line

You can use `noLine` property remove the active effect line of the sidebar

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>