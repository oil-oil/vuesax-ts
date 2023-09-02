---
prev: Input
next: Switch
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the component and some of its sub components.
      default: primary
      usageUrl: checkbox#color
    - name: v-model
      type: Boolean
      values: true | false
      description: determine the value of the checkbox and data anchor.
      default: "false"
      usageUrl: checkbox#default
    - name: loading
      type: Boolean
      values: true | false
      description: Add a loading animation and disable the input.
      default: "false"
      usageUrl: checkbox#loading
    - name: lineThrough
      type: Boolean
      values: true | false
      description: Add a line in the center of the label when checked.
      default: "false"
      usageUrl: checkbox#linethrough
    - name: indeterminate
      type: Boolean
      values: true | false
      description: Add a line in the center of the label when checked.
      default: "false"
      usageUrl: checkbox#indeterminate
    - name: labelBefore
      type: Boolean
      values: true | false
      description: Change the position of the label.	
      default: "false"
      usageUrl: checkbox#label
    - name: checked
      type: Boolean
      values: true | false
      description: Determine if the component is initially in check (this changes the property computed in v-model to true).
      default: "false"
      usageUrl: checkbox#boolean-value
slots : 
    - name: icon
      type: slot
      values:
      description: Change the component icon.
      default: 
      usageUrl: checkbox#icon
    - name: default
      type: slot
      values:
      description: Add a label to the component.
      default: 
      usageUrl: checkbox#default
---

# Checkbox

<card>

## Default

Add a checkbox type input easily and with a beautiful animation

</card>

<card subtitle="Color">

## color

Change the color of the component with the `color` property, the allowed values ​​are (main colors of vuesax, RGB, HEX)

</card>

<card subtitle="BooleanValue">

## Boolean Value

By default the component is used with a boolean value that when being checked returns `true` and when not being checked returns `false`

</card>

<card subtitle="Icon">

## Icon

Change the icon inside the checkbox component with the `slot="icon"`

<utils-icon />

</card>

<card subtitle="Label">

## Label

Add a label to the checkbox with the default slot of the component

</card>

<card subtitle="Loading">

## Loading

Add a loading status to the component with the property `loading`

</card>

<card subtitle="LineThrough">

## LineThrough

Add a line in the middle of the label when the checkbox is checked with the property `line-through`

</card>

<card subtitle="Indeterminate">

## Indeterminate

There are some cases where you have several checkboxes and you need one that manages all the others for this you can do it with the indeterminate property that adds a different style to the checkbox

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
