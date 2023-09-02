---
prev: Tooltip
next: Pagination
props : 
    - name: v-model
      type: Boolean
      values: true | false
      description: Determine if the dialogue is visible or hidden.
      default: "false"
      usageUrl: modal#default
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the loading animation.
      default: primary
    - name: loading
      type: Boolean
      values: true | false
      description: Add a loading animation to the dialog.
      default: "false"
      usageUrl: modal#loading
    - name: noClose
      type: Boolean
      values: true | false
      description: Remove the close button from the dialog.
      default: "false"
      usageUrl: loading#noClose
    - name: scroll
      type: Boolean
      values: true | false
      description: Makes the content a maximum high and gives the possibility to overflow the content add scroll.
      default: "false"
      usageUrl: loading#scroll
    - name: lockScroll
      type: Boolean
      values: true | false
      description: When the dialog is opened, the page scroll is deleted.
      default: "false"
      usageUrl: loading#lockScroll
    - name: fullScreen
      type: Boolean
      values: true | false
      description: Makes the dialog the size of the window.	
      default: "false"
      usageUrl: loading#fullScreen
    - name: blur
      type: Boolean
      values: true | false
      description: Makes all elements blur when the dialog opens.
      default: "false"
      usageUrl: loading#blur
    - name: square
      type: Boolean
      values: true | false
      description: Remove the border radius from the dialog.
      default: "false"
      usageUrl: loading#square
    - name: preventClose
      type: Boolean
      values: true | false
      description: It makes the dialog cannot be closed by clicking outside or by pressing the esc key.
      default: "false"
      usageUrl: loading#square
    - name: v-on:close
      type: Methods
      values: function
      description: return function when closing the dialog.	
      default: "false"
      usageUrl: loading#square
---

# Modal

<card>

## Default

It generates a Modal with the vs-modal component, this component is very customizable since it provides a slot to put and make any type of interface to the user's need

</card>

<card subtitle="Type">

## Type

You can easily create the most common types of dialogs such as Alert, Confirm or Prompt using the different slots for the structure of the header, default, footer

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the dialog with the `loading` property

</card>

<card subtitle="NoClose">

## No close

You can remove the close button by set the `showClose` property to `false`

</card>

<card subtitle="Scroll">

## Scroll

There are cases where you need a scroll because there is a lot of information within the dialog for this you can use the `scroll` property

</card>

<card subtitle="LockScroll">

## LockScroll

If you need to remove the page scroll when opening the dialog you can do it with the `lockScroll` property

</card>

<card subtitle="Nested">

## Nested Dialogs

You can nest as many `VsModal` as you need without problem

</card>

<card subtitle="FullScreen">

## Full Screen

If you need the dialog to be the total window size you can do it with the `fullScreen` property

</card>

<card subtitle="Blur">

## Blur

You can add a blur style to all the elements behind the dialog with the `blur` property, this functionality depends on the css property backdrop-filter

</card>

<card subtitle="Square">

## Square

Change the dialog style by removing the border radius and making it rectangular

</card>

<card subtitle="PreventClose">

## Prevent Close

With the `preventClose` property you do not close the dialog by clicking outside or pressing the esc key

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
