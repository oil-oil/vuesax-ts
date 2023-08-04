# Checkbox

<card>

## Default

<docs-warn />

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

Change the icon inside the checkbox component with the`slot="icon"`

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
import Api from "../../../theme/global-components/template/Checkbox/API.tsx"
</script>

<Api></Api>
