---
prev: Switch
next: Avatar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the select.
      default: primary
      usageUrl: select#color
    - name: disabled
      type: Boolean
      values: true | false
      description: Determine if the select is in the disabled status.
      default: "false"
      usageUrl: select#default
    - name: loading
      type: Boolean
      values: true | false
      description: Determine if the select has a loading animation and is disabled.
      default: "false"
      usageUrl: select#loading
    - name: modelValue
      type: String
      values: String
      description: Determine the value of the select.
      usageUrl: select#default
    - name: placeholder
      type: String
      values: String
      description: Add a placeholder to the select.
      usageUrl: select#label
    - name: label	
      type: String
      values: String
      description: Add a label to the select.
      usageUrl: select#label
    - name: label-placeholder	
      type: String
      values: String
      description: Add a placeholder that when in focus or with value becomes a label.
      usageUrl: select#label
    - name: filter
      type: Boolean
      values: true | false
      description: Add the functionality to filter the select options.
      default: "false"
      usageUrl: select#filter
    - name: multiple
      type: Boolean
      values: true | false
      description: Add the functionality of being able to select several options from a select.
      default: "false"
      usageUrl: select#multiple
    - name: status
      type: String
      values: Vuesax Colors
      description: Change the status of the select to the color provided.	
      usageUrl: select#status
    - name: block
      type: Boolean
      values: true | false
      description: Change the width of the button to fill the parent element.
      default: "false"
    - name: disabled
      type: Boolean
      values: true | false
      description: Determine if the select is in the disabled status.
      default: "false"
slots : 
    - name: message-{color}
      type: slot
      values:
      description: Add a message below the select.
      default: 
      usageUrl: select#message
    - name: noData
      type: slot
      values:
      description: Customize the element that is displayed when there is no data after filtering.
      default: 
      usageUrl: select#filter
---

# Select

<card>

## Default

Add a select element with the `vs-select` component and the `vs-option` sub component

</card>

<card subtitle="Color">

## Color

Change the color of the select with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** and **HEX**)

</card>

<card subtitle="Label">

## Label

Add a label to the select easily with the `label` property, you can also add a `label-placeholder` which as its name says is a placeholder that encourages label, and finally the placeholder with the `placeholder` property

</card>

<card subtitle="Group">

## Group

Group options within the select with the sub-component `VsOptionGroup`, as the required slot is the `title` to add a title to the item group

</card>

<card subtitle="Filter">

## Filter

You can add the functionality of filtering options with the `filter` property, this property is a `boolean`

</card>

<card subtitle="Multiple">

## Multiple

Add the functionality of multiple selection of options with the `multiple` property, this property is a `boolean`

:::tip
The value of the select must be an array
:::

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the select with the `loading` property, this property is a `boolean`

</card>

<card subtitle="Status">

## Status

Change the style of the select to the color passed in the `status` property, the allowed colors are only the main ones of vuesax

</card>

<card subtitle="Message">

## Message

Add an item below the select showing a message to the user

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
