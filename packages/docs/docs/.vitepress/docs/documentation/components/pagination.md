---
prev: Modal
next: Table
last Update: 2/10/2020, 2:21:50 AM
props : 
    - name: v-model
      type: Number
      values: Number
      description: Determine the page where the user is.
      default: 1
      usageUrl: pagination#default
    - name: color
      type: Vuesax colors, RGB, HEX
      values: String
      description: Change the base color of the component.
      default: "primary"
      usageUrl: pagination#color
    - name: disabled
      type: Boolean
      values: true | false
      description: Determine if the entire component is in the disabled status.
      default: "false"
      usageUrl: pagination#disabled
    - name: noArrow
      type: Boolean
      values: true | false
      description: Remove the arrows (next and back) of the component.
      default: "false"
      usageUrl: pagination#noArrow
    - name: onlyArrow
      type: Boolean
      values: true | false
      description: Remove the items leaving only the arrows (next and back).
      default: "false"
      usageUrl: pagination#onlyArrow
    - name: shape
      type: String
      values: circle | square | dotted | compact
      description: Change the style of the buttons.
      default: "false"
      usageUrl: pagination#circle
    - name: disabledItems	
      type: Number[]
      values: Number[]
      description: Determine which items are in the disabled status.	
      default: "[]"
      usageUrl: pagination#disabledItems
    - name: loadingItems	
      type: Number[]
      values: Number[]
      description: Determine which items are in the loading status.	
      default: "[]"
      usageUrl: pagination#loadingItems
    - name: progress	
      type: Boolean
      values: true | false
      description: Add a progress bar to the component determined by the current page and the total (length) of pages.	
      default: "false"
      usageUrl: pagination#progress
    - name: pageStep	
      type: Number
      values: Number
      description: Change the total pages to be added or subtracted by clicking on the points.
      default: 5
      usageUrl: pagination#pageStep
    - name: infinite	
      type: Boolean
      values: true | false
      description: Determine if the pagination is infinite.
      default: "false"
      usageUrl: pagination#infinite
---

# Pagination

<card>

## Default

Easily add a pagination with the `VsPagination` component, the required properties are `length` and `v-model`

</card>

<card subtitle="Color">

## Color

Use the color property to change the base color of the component and some of the child components, to better understand the handling of colors and themes you can see it here

the allowed values are:

- primary
- success
- danger
- warning
- dark
- RGB
- HEX
</card>

<card subtitle="Disabled">

## Disabled

Change the disabled status of the component with the disabled property, this property is a boolean and you can add it without value

</card>

<card subtitle="NoArrow">

## No Arrow

You can remove the back and next arrows with the `noArrows` property

</card>

<card subtitle="OnlyArrow">

## OnlyArrow

You may need in small spaces to remove the buttons and leave only the arrows for it we have the property `onlyArrows`

</card>

<card subtitle="Circle">

## Circle

If you want to make the pagination circular, you can set the `shape` property to `circle`.

</card>

<card subtitle="Square">

## Square

If you want to make the pagination square, you can set the `shape` property to `circle`.

</card>

<card subtitle="Dotted">

## Dotted

If you want to make the pagination Dotted, you can set the `shape` property to `dotted`.

</card>

<card subtitle="DisabledItems">

## Disabled Items

You can put disabled buttons specific to the pagination component with the `disabledItems` property, this property is an array with the number of the button you want to put in disabled status

</card>

<card subtitle="LoadingItems">

## Loading Items

You can make a button inside the pagination be in the status of loading with the `loadingItems` property, this property is an array with the number of the button that you want to put in the disabled status

</card>

<card subtitle="Compact">

## Compact

Change the style of the entire component by removing the margin between the buttons, you can set the `shape` property to `compact`.

</card>

<card subtitle="Slot">

## Slot

You may need to customize your pagination and for this you can use the default slot between the arrows and replace the items on the pages

</card>

<card subtitle="Progress">

## Progress

Add a progress bar to the pagination by referencing where you find the last page with the `progress` property

</card>

<card subtitle="PageStep">

## Page Step

You can change the number of pages that are added when the user clicks on the points to advance more pages quickly, this can be done with the `pageStep` property and the value would be the number of pages that are added or subtracted (default is 5)

</card>

<card subtitle="Infinite">

## Infinite

You can make the pagination infinite with the `infinite` property, this means that the arrow buttons are no longer in the disabled status.

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api></Api>