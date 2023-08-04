# Select

<card>

## Default

<docs-warn />

Add a select element with the `vs-select` component and the `vs-option` sub component

</card>

<card subtitle="Color">

## Color

Change the color of the component with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** and **HEX**)

</card>


<card subtitle="Label">

## Label

Add a label to the select easily with the `label` property, you can also add a `label-placeholder` which as its name says is a placeholder that encourages label, and finally the placeholder with the `placeholder` property

</card>


<card subtitle="Group">

## Group

Group options within the select with the sub-component `vs-option-group`, as the required slot is the `title` to add a title to the item group

</card>

<card subtitle="Filter">

## Filter <Badge text="New"/>

You can add the functionality of filtering options with the `filter` property, this property is a `boolean` so you can add it without any value

</card>

<card subtitle="Multiple">

## Multiple

Add the functionality of multiple selection of options with the `multiple` property, this property is a `boolean` so you can add it without any value

:::tip
The value of the select must be an array
:::

</card>

<card subtitle="Loading">

## Loading <Badge text="New"/>

Add a loading animation to the select with the `loading` property, this property is a `boolean` so you can add it without any value

</card>

<card subtitle="State">

## State <Badge text="New"/>

Change the style of the component to the color passed in the `state` property, the allowed colors are only the main ones of vuesax

:::tip
This property can be used to indicate a missing field to the user or when something is ready.
:::

</card>

<card subtitle="Message">

## Message <Badge text="New"/>

Add an item below the select showing a message to the user

</card>

<script setup>
import Api from "../../../theme/global-components/template/Select/API.tsx"
</script>

<Api></Api>
