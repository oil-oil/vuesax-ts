---
prev: Table
next: Sidebar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the navbar.
      default: primary
    - name: v-model
      type: String
      values: String
      description: Determines the currently active item.
    - name: fixed
      type: Boolean
      values: true | false
      description: Defines if the navbar is fixed on the screen.
      default: "false"
      usageUrl: navbar#default
    - name: shadowScroll
      type: Boolean
      values: true | false
      description: Adds a shadow effect when the element corresponding to the `targetScroll` is not scrolled to the top.
      default: "false"
      usageUrl: navbar#shadow-scroll
    - name: shadow
      type: Boolean
      values: true | false
      description: Add a shadow to the navbar.	
      default: "false"
    - name: hideScroll
      type: Boolean
      values: true | false
      description: Hides the navbar when the element specified by `targetScroll` scrolls down.
      default: "false"
      usageUrl: navbar#hide-scroll
    - name: hideScroll
      type: Boolean
      values: true | false
      description: Hides the navbar when the element specified by `targetScroll` scrolls down.
      default: "false"
      usageUrl: navbar#hideScroll
    - name: textWhite
      type: Boolean
      values: true | false
      description: Change the text color of items to white.	
      default: "false"
      usageUrl: navbar#color
    - name: square
      type: Boolean
      values: true | false
      description: Change the border radius to 0 by making the navbar square.	
      default: "false"
      usageUrl: navbar#square
    - name: paddingScroll
      type: Boolean
      values: true | false
      description: Determines if the navbar has padding and the user scrolling is removed making an effect.
      default: "false"
      usageUrl: navbar#padding-scroll
    - name: targetScroll
      type: String
      values: String
      description: Remove the bottom horizontal line from the activated item in the navbar.
      default: "false"
      usageUrl: navbar#hide-scroll
    - name: noLine
      type: Boolean
      values: true | false
      description: Delete the active line in the navbar.	
      default: "false"
      usageUrl: navbar#no-line
    - name: NavbarItem:id
      type: String
      values: String
      description: It is the id that is used to change the value of the v-model of the parent component and thus be able to determine the active state based on user interaction.	
      usageUrl: navbar#default
    - name: NavbarItem:href
      type: String
      values: url
      description: Generate a new tab with the url provided.
      usageUrl: navbar#default
    - name: NavbarItem:target
      type: String
      values: _blank
      description: Determine if the tab is a new one or if it replaces the current one.
slots : 
    - name: left
      type: slot
      description: Adds an element to the left side of the navbar.
    - name: right
      type: slot
      description: Adds an element to the right of the navbar.
      usageUrl: navbar#default
    - name: NavbarGroup:title
      type: slot
      description: Group title element in navbar.
      usageUrl: navbar#group
---

# Navbar

<card>

## Default

Quickly generate a menu with the `VsNavbar` component, as such the component is divided into 3 slots (left, center (default), right) with which you can determine the location of the elements, as sub components we have `VsNavbarItem` and `VsNavbarGroup`

</card>

<card subtitle="Color">

## Color

Change the navbar's `color` with the color property or by directly adding one of the main vuesax colors

if you want to change the text color to white you can do it with the property `textWhite` 

</card>

<card subtitle="HideScroll">

## Hide Scroll

The `hideScroll` property hides the navbar when the element specified by `targetScroll` scrolls down.

</card>

<card subtitle="Group">

## Group

You can add a list of elements within an item with the `VsNavbarGroup` component and within it add the `VsNavbarItem` components

</card>

<card subtitle="PaddingScroll">

## Padding Scroll

Add the functionality that the component has a padding up and down that when it is lowered the scroll is eliminated giving a pleasant effect

</card>

<card subtitle="Square">

## Square

Making the navbar square by remove the `border-radius` property

</card>

<card subtitle="ShadowScroll">

## Shadow Scroll

The `shadowScroll` property adds a shadow effect when the element corresponding to the `targetScroll` is not scrolled to the top

</card>

<card subtitle="NoLine">

## No Line

Eliminates the active effect line of the navbar

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
