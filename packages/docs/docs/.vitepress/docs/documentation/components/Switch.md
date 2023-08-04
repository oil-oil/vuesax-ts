# Switch

<card>

## Default

<docs-warn />

Generate a switch element easily with beautiful animations and functionality

</card>

<card subtitle="Color">

## Color

Change the color of the component when it is in active state, the allowed values ​​are (main colors of vuesax, RGB, HEX)

</card>

<card subtitle="Text">

## Text

Add a text to the switch with the default slot or if you need a different text for each state of the component you can use the `on` or `off` slots

:::tip Self-adjusting
  The component conforms to the text to be displayed by the state in which it is located
:::

</card>

<card subtitle="Icons">

## Icons

Add icons to the component in the default slot or the `on` or `off` status slots

</card>

<card subtitle="Loading">

## Loading <Badge text="New"/>

Add a loading animation to the component with the `loading` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Indeterminate">

## Indeterminate <Badge text="New"/>

Add an undetermined state to the compound with the `indeterminate` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Square">

## Square <Badge text="New"/>

Change the circular style to square with the `square` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Example">

## Example

A usual example when using the switch component

</card>

<script setup>
import Api from "../../../theme/global-components/template/Switch/API.tsx"
</script>

<Api></Api>