---
prev: Modal
next: Table
last Update: 2/10/2020, 2:21:50 AM
props : 
    - name: title
      type: String
      values: string
      description: Add a title to the notification.
      default: 
      usageUrl: notification#default
    - name: text
      type: String
      values: string
      description: Add a text to the notification.
      default:
      usageUrl: notification#default
    - name: position
      type: String
      values: bottom-right | top-right | top-center | top-left | bottom-left | bottom-center
      description: Change the position of the component.
      default: bottom-right
      usageUrl: notification#position
    - name: color
      type: String
      values: VuesaxColors | RGB | HEX
      description: Add a background color to the notification.
      default: 
      usageUrl: notification#color
    - name: border
      type: String
      values: VuesaxColors | RGB | HEX
      description: Add a color border to the notification.
      default: 
      usageUrl: notification#border
    - name: duration
      type: Number
      values: number
      description: Determine the time until the notification is hidden.
      default: 4000
      usageUrl: notification#duration
    - name: buttonClose
      type: Boolean
      values: true | false
      description: Determine the time until the notification is hidden.
      default: "true"
      usageUrl: notification#default
    - name: flat
      type: Boolean
      values: true | false
      description: Change the notification style to flat.
      default: "false"
      usageUrl: notification#flat
    - name: sticky
      type: Boolean
      values: true | false
      description: Change the position of the notification attached to the nearest corner.	
      default: "false"
      usageUrl: notification#sticky
    - name: square
      type: Boolean
      values: true | false
      description: Determine if the notification is square and remove the border-radius.
      default: "false"
      usageUrl: notification#square
    - name: width
      type: String
      values: 100% | auto
      description: Determine the width of the notification.
      default: 340px
      usageUrl: notification#width
    - name: loading
      type: Boolean
      values: true | false
      description: Determine if the notification has a loading animation.
      default: "false"
      usageUrl: notification#loading
    - name: progressAuto
      type: Boolean
      values: true | false
      description: Enable an auto-incrementing progress bar
      default: "false"
      usageUrl: notification#progress
    - name: noPadding
      type: Boolean
      values: true | false
      description: Remove padding from notification.
      default: "false"
      usageUrl: notification#example
    - name: icon
      type: VNode
      values: VNode
      description: Add an icon at the notification beginning
      default: 
      usageUrl: notification#icons
    - name: content
      type: VNode
      values: VNode
      description: Change the content of the notification to the one provided as a value
      default: 
      usageUrl: notification#example
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

Change the disabled state of the component with the disabled property, this property is a boolean and you can add it without value

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

You can make a button inside the pagination be in the state of loading with the `loadingItems` property, this property is an array with the number of the button that you want to put in the disabled state

</card>

<card subtitle="Compact">

## Compact

Change the style of the entire component by removing the margin between the buttons, you can set the `shape` property to `compact`.

</card>

<card subtitle="Slot">

## Slot

You may need to customize your pagination and for this you can use the default slot between the arrows and replace the items on the pages

</card>
