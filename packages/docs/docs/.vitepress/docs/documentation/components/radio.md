---
prev: Avatar
next: Radio
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
      description: Determine if the radio is in the disabled status.
      default: "false"
      usageUrl: radio#default
    - name: loading
      type: Boolean
      values: true | false
      description: Determine if the radio has a loading animation and is disabled.
      default: "false"
      usageUrl: radio#loading
    - name: value
      type: String
      values: String
      description: Determine the value of the radio input.
      usageUrl: radio#default
slots : 
    - name: default
      type: slot
      values:
      description: Add a label to the radio.
      usageUrl: radio#default
    - name: icon
      type: slot
      values:
      description: Add an icon inside the radio.
      usageUrl: radio#default
---

# Radio

<card>

## Default

Add the radio type input with the component `<VsRadio />`

</card>

<card subtitle="Color">

## Color

</card>

<card subtitle="Label">

## Label

Add a label to the radio with the `default` slot, if you need the label to be before the radio you can use the `label-before` property

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the radio, when the radio has this property active it is as if it were in `disabled`

</card>

<card subtitle="Icon">

## Icon

Add an icon inside the radio with the `icon` slot

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
