---
prev: Button
next: Loading
props : 
    - name: active
      type: Boolean
      values: true | false
      description: Determine if the alert is visible.
      default: primary
      usageUrl: alert#animate
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the alert and some of its sub components.
      default: primary
      usageUrl: alert#color
    - name: type
      type: Prop
      values: solid | border | shadow | gradient | relief 
      description: Change the style of all the alert.
      default: "false"
      usageUrl: alert#solid
    - name: hidden-content
      type: Boolean
      values: Boolean
      description: With this property you can hide the content of the alert.
      default: "false"
      usageUrl: alert#false
    - name: page
      type: Number
      values: Number
      description: Determine the page that is active (this property is linked to the slots='page-{n}').
      default: "false"
      usageUrl: alert#pagination
    - name: progress
      type: Number
      values: 0-100
      description: Add a progress bar to the alert and the value is the percentage of width.
      default: 0
      usageUrl: alert#progress-bar
    - name: closable
      type: Boolean
      values: true | false
      description: Add a button to close the alert (it is necessary to use v-model).
      default: "false"
      usageUrl: alert#closable
slots : 
    - name: icon
      type: slot
      values:
      description: Add an icon to the alert.
      usageUrl: alert#icon
    - name: title
      type: slot
      values:
      description: Add a title to the alert.
      usageUrl: alert#title
    - name: page-{n}
      type: slot
      values: (page-1 - page-{n})
      description: Add the pages to the alert if it is page one would be (slot='page-1').
      usageUrl: alert#title
    - name: footer
      type: slot
      description: Add a footer to the alert.
      usageUrl: alert#footer
---

# Alert

<card>

## Default

Alert is a component used to display important information. They are typically presented in the form of a pop-up or slide-out panel and can display alert, error, success, or information messages.

</card>

<card subtitle="Solid">

## Solid

You can set the alert to a solid color background by adding the `solid` property, the property is a`boolean`

</card>

<card subtitle="Border">

## Border

You can style the alert with a shadow by adding the `border` property, the property is a`boolean` value.

</card>

<card subtitle="Shadow">

## Shadow

You can change the style of the alert by adding the `shadow` property, the property is a`boolean` value.

</card>

<card subtitle="Gradient">

## Gradient

You can change the style of the alert by adding the `gradient` property, the property is a `boolean` value.

</card>

<card subtitle="Relief">

## Relief

You can change the style of the alert by adding the `relief` property, the property is a`boolean` value.

</card>

<card subtitle="Animate">

## Animate

A beautiful and simple animation to show and hide the alert to the user

</card>

<card subtitle="Color">

## Color

Change the color of the entire alert with the `color` property

In this example you can click on the buttons and dynamically change the color value to display it in **VsAlert**

</card>

<card subtitle="Icon">

## Icon

Add an icon to the alert easily with the slot **icon**

</card>

<card subtitle="Title">

## Title

You can add a descriptive title to the alert with the `slot="title"`

</card>

<card subtitle="HiddenContent">

## Hidden Content

You can hide the content of an alert and just leave the title to display the content dynamically

</card>

<card subtitle="Pagination">

## Pagination

There are times when we need to show a lot of content to the user but we don't want to extend the text and make the alert very large and tall

</card>

<card subtitle="Footer">

## footer

Use the `footer` slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.

</card>

<card subtitle="ProgressBar">

## Progress bar

You can add a progress bar to the alert with the `progress` property and a number of (`0 - 100`)

</card>

<card subtitle="Closable">

## Closable

You can add a close alert icon with the `closable` property, the property is a`boolean`

</card>

<card subtitle="TimeClose">

## Time Close

If you need an alert to have time to hide, you can do so by joining some properties and few lines of code

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
