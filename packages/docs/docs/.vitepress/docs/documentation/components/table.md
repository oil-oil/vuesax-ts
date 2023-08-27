# Table

<card>

## Default

Create a table simply with the `VsTable` component and its `VsTr`, `VsTd`, `VsTh` components.

This component has a different logic for better data management and freer customization according to needs.

</card>

<card subtitle="Striped">

## Striped

You can easily strip the table with the `striped` property

</card>

<card subtitle="Pagination">

## Pagination

You can add the pagination functionality for the table using the #footer slot and the `VsPagination` component

</card>

<card subtitle="SingleSelected">

## Single Selected

You can do multiple select functionality in the table with the v-model property with its value being an array

</card>

<card subtitle="MultipleSelected">

## Multiple Selected

You can add the select functionality with a v-model in the table and the `isSelected` property

</card>

<card subtitle="ExpandData">

## Expand Data

To add a `tr` that can display expanded data use the `#expand` slot inside the `VsTr` component.

</card>

<card subtitle="EditData">

## Edit Data

You can edit the data inside the table easily using the `VsModal` component and the magic of vuejs

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
