---
prev: Loading
next: Checkbox
props : 
    - name: placeholder
      type: String
      values: String
      description: Add a placeholder to the input.
      default: 
      usageUrl: input#label-placeholder
    - name: label
      type: String
      values: string
      description: Add a label above the input.
      default: 
      usageUrl: input#label
    - name: labelPlaceholder
      type: String
      values: string
      description: Add a placeholder converts to focus on a label.
      default: 
      usageUrl: input#label-placeholder
    - name: color
      type: String
      values: VuesaxColors | RGB | HEX
      description: Change input color.
      default: "null"
      usageUrl: input#color
    - name: status
      type: String
      values: VuesaxColors | RGB | HEX
      description: Change the background color of the input by changing its status.
      default: 
      usageUrl: input#status
    - name: progress
      type: Number
      values: 0 - 100
      description: Add a progress bar starting in red and ending in green.
      default: 0
      usageUrl: input#progress
    - name: loading
      type: Boolean
      values: true | false
      description: Add a loading animation to the input.
      default: "false"
      usageUrl: input#loading
    - name: type
      type: String
      values: Html Type
      description: Change the type of input (html values).
      default: text
      usageUrl: input#input-type
    - name: border
      type: Boolean
      values: true | false
      description: Change input to bottom border style
      default: "false"
      usageUrl: input#border
    - name: shadow
      type: Boolean
      values: true | false
      description: Add a shadow to the input.
      default: "false"
      usageUrl: input#shadow
    - name: iconAfter
      type: Boolean
      values: true | false
      description: Put the icon after the input.
      default: "false"
      usageUrl: input#icon
    - name: visiblePassword
      type: Boolean
      values: true | false
      description: If the input is of the password type, it is modified to show the password.
      default: "false"
      usageUrl: input#input-type
slots : 
    - name: icon
      type: slot
      values:
      description: Add an icon to the input.
      default: 
      usageUrl: input#icon
    - name: message
      type: slot
      values:
      description: Add an informative text below the input.
      default: 
      usageUrl: input#message
---

# Input

<card>

## Default

Add an elements input facilitate with the component `<VsInput>`

</card>

<card subtitle="Label">

## Label

Add a label to the input with the property `label`

</card>

<card subtitle="LabelPlaceholder">

## Label Placeholder

You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input with the property `label-placeholder`

</card>

<card subtitle="Color">

## Color

Change the color of the input and add a border below with the `color` property, the allowed values ​​are the main colors of vuesax and the custom colors (**RGB**, **HEX**)

</card>

<card subtitle="Icon">

## icon

Add an icon to the input easily with the slot icon if you want the icon to be before the input you can do it with the property `icon-before`

</card>

<card subtitle="Message">

## Message

You can add a message below the input with the `slot="message-{vuesax color}"` to report that a field is missing or the value is wrong

</card>

<card subtitle="Status">

## Status

Change the color of the input for some state, the allowed states are (primary, success, danger, warn, dark)

</card>

<card subtitle="Progress">

## Progress

Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).

:::tip
  The example validates that the password has at least

- A special character
  - More than 6 digits
  - One lower case letter
  - An uppercase letter
  - A number
:::

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the input with the `loading` property, the property is a `Boolean`

</card>

<card subtitle="InputTypes">

## Input types

Change the type of input with the `type` property as a native html input, the default value is `text`

</card>

<card subtitle="Border">

## Border

Use the `border` property to add a border to the input, the property is a `Boolean`

</card>

<card subtitle="Shadow">

## Shadow

Use the `shadow` property to add a shadow to the input, the property is a `Boolean`

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
