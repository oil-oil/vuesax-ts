# Loading

<card>

## Default

<docs-warn />

Generate a loading with the vuesax function `useLoading(Props)`

</card>

<card subtitle="Type">

## Type <Badge text="Update" type="warn" />

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

## Text <Badge text="New" />

Add a descriptive text of the loading or informing the user that it is loading or that it is missing to load with the property `text`

</card>

<card subtitle="Percent">

## Percent <Badge text="New" />

You can add a string of the percentage of load with the `percent` property, if you need to change that value use the `changePercent` function in the loading instance.

</card>

<card subtitle="Progress">

## Progress <Badge text="New" />

Add a progress bar at the top to indicate the loading progress of the loading with the `progress` property, the value is a number that determines the percentage and the allowed value is (0 - 100)

</card>

<card subtitle="Target">

## Target <Badge text="New" />

Use the loading on a specific dom element using the `target` property and the value can be a string with the `id` or the `class` only if it is unique for the element, you can also use the element itself as per example using `$refs`
</card>


<script setup>
import Api from "../../../theme/global-components/template/Loading/API.tsx"
</script>

<Api></Api>
