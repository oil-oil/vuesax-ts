---
prev: Avatar
next: Radio
last Update: 2023/13/1
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the radio.
      default: primary
      usageUrl: radio#color
    - name: disabled
      type: Boolean
      values: true | false
      description: Determine if the component is in the disabled state.
      default: false
      usageUrl: radio#default
    - name: loading
      type: Boolean
      values: true | false
      description: Determine if the component has a loading animation and is disabled.
      default: false
      usageUrl: radio#loading
    - name: value
      type: String
      values: String
      description: Determine the value of the radio input.
      default: 
      usageUrl: radio#default
slots : 
    - name: default
      type: slot
      values:
      description: Add a label to the component.
      default: 
      usageUrl: radio#default
    - name: icon
      type: slot
      values:
      description: Add an icon inside the radio.
      default: 
      usageUrl: radio#default
---

# Radio

<card>

## Default

<docs-warn />

Add the radio type input with the component `<vs-radio />`

</card>

<card subtitle="Color">

## Color

<coloren />

</card>

<card subtitle="Label">

## Label

Add a label to the radio with the `default` slot, if you need the label to be before the radio you can use the `label-before` property

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the component, when the radio has this property active it is as if it were in `disabled`

</card>

<card subtitle="Icon">

## Icon

Add an icon inside the radio with the `icon` slot

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api></Api>
