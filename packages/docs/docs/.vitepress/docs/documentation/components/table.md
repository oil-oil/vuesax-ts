---
prev: Pagination
next: Navbar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: Change the color of the table.
      default: primary
    - name: striped
      type: Boolean
      values: true | false
      description: Add stripes to the gray VsTr.	
      default: "false"
      usageUrl: table#striped
    - name: multiple
      type: Boolean 
      values: true | false
      description: Determines whether the column will have border radius when selected, remove border radius when set to true.
      default: "false"
      usageUrl: table#multiple-selected
    - name: VsTr:isSelected
      type: Boolean 
      values: true | false
      description: Determines if the component is in the selected status.
      default: "false"
      usageUrl: table#single-selected
    - name: VsTr:expand
      type: Boolean 
      values: true | false
      description: Determines if the component is in the expanded status.
      default: "false"
      usageUrl: table#expand-data
    - name: VsTh:sort
      type: Boolean 
      values: true | false
      description: Add the sort arrows to the corresponding th.
      default: "false"
      usageUrl: table#search-and-sort
    - name: VsTd:checkbox
      type: Boolean 
      values: true | false
      description: Determines if the component is checkbox style, width becomes smaller when set to true.
      default: "false"
      usageUrl: table#multiple-selected
    - name: VsTd:edit
      type: Boolean 
      values: true | false
      description: Determines if the component is edit style, sets the underline when set to true.
      default: "false"
      usageUrl: table#edit-data
slots : 
    - name: header
      type: slot
      values:
      description: Space to put an element at the top of the table such as the input search.
      usageUrl: table#search-and-sort
    - name: thead
      type: slot
      values:
      description: Space representing thead element of the table where the `VsTh` components will be placed.
      usageUrl: table#default
    - name: tbody
      type: slot
      values:
      description: Represents the tbody element in the table and here we will put the `VsTr` components.
      usageUrl: table#default
    - name: header
      type: slot
      values:
      description: Space to put an element at the bottom of the table such as the pagination.
      usageUrl: table#pagination
    - name: notFount
      type: slot
      values:
      description: Change the item to display when there are no items in the table.
      usageUrl: table#search-and-sort
    - name: VsTr:#expand
      type: slot
      values:
      description: Represents the interior of the VsTr when it is expanded.
      usageUrl: table#expand-data
---

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

You can achieve the table selected effect by using the `isSelected` property.

</card>

<card subtitle="MultipleSelected">

## Multiple Selected

You can achieve the table multi-select effect by using the `isSelected` property and the `checkbox` property.

</card>

<card subtitle="ExpandData">

## Expand Data

To add a `tr` that can display expanded data use the `#expand` slot inside the `VsTr` component.

</card>

<card subtitle="EditData">

## Edit Data

You can edit the data inside the table easily using the `VsModal` component and the magic of vuejs

</card>

<card subtitle="Search&Sort">

## Search and sort

You can use the `#header` slot and `sort` property to implement table searching and table sorting.

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
