---
prev: Alert
next: Input
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the loading animation.
      default: primary
      usageUrl: loading#color
    - name: type
      type: String
      values: waves | corners | border | points | square | gradient | rectangle | circles | square-rotate | scale
      description: Change the animation of the loading.
      default:
      usageUrl: loading#type
    - name: text
      type: String
      values: String
      description: Add a text below the loading animation.
      default: 
      usageUrl: loading#text
    - name: percent
      type: String
      values: (0% - 100%)
      description: Add a percentage text inside the loading.
      default: 
      usageUrl: loading#percent
    - name: progress
      type: Number
      values: (0 - 100)
      description: Add a progress bar to the loading and the progress would be the value.
      default: 
      usageUrl: loading#percent
    - name: opacity
      type: String
      values: (0 - 1)
      description: Change the opacity of the background.
      default: 0.6
      usageUrl: loading#background
    - name: scale
      type: String
      values: (0 - 1)
      description: Change the size of the loading animation.
      default: 1
      usageUrl: loading#type
---
# Loading

<card>

## Default

Generate a loading with the vuesax function `useLoading(Props)`

</card>

<card subtitle="Type">

## Type

Change the type of loading with the option `type`

Tipos de loading:

- waves
- corners
- border
- points
- square
- gradient
- rectangle
- circles
- square-rotate
- scale

::: tip
  Click on the example loading to open it in the whole page
:::

</card>

<card subtitle="Color">

## Color

Change the color of the loading animation with the property `color`, the colors can be the main ones of vuesax or (**RGB**, **HEX**)

</card>

<card subtitle="Background">

## Background

You can change the loading background with the property `loading`

</card>

<card subtitle="Text">

## Text

Add a descriptive text of the loading or informing the user that it is loading or that it is missing to load with the property `text`

</card>

<card subtitle="Percent">

## Percent

You can add a string of the percentage of load with the `percent` property, if you need to change that value use the `changePercent` function in the loading instance.

</card>

<card subtitle="Progress">

## Progress

Add a progress bar at the top to indicate the loading progress of the loading with the `progress` property, the value is a number that determines the percentage and the allowed value is (0 - 100)

</card>

<card subtitle="Target">

## Target

If you want use the loading on a specific dom element. Put the loading in a parent container positioned as a relative.And set `isVisible` value.
</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
