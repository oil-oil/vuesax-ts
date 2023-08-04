---
prev: Avatar
next: Radio
last Update: 2023/13/1
---
# Notification

<card>

## Default

<docs-warn />

It generates a notification with the vuesax function (`useNotification`), to use the instance of the notification it is necessary to save it in a variable, for example if you need to close the notification manually or do other functionalities with the instance

:::tip
  The necessary properties are the `title` and the` text` or failing the `content` property
:::

</card>

<card subtitle="Position">

## Position

Change the notification position with the position property

supported values

- `bottom-right` <Badge type="text" text="Default"/>
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

</card>

<card subtitle="Color">

## Color

Use the color property to change the base color of the component and some of the child components, to better understand the handling of colors and themes you can see it.

Allowed values ​​are:

- primary
- success
- danger
- warning
- dark
- RGB
- HEX

</card>

<card subtitle="Icons">

## Icons

Add the icon provided as the value of the `icon` slot to the notification

</card>

<card subtitle="Progress"> 

## Progress

Add a progress bar to the notification, if the value of the `progressAuto` property is `auto` be determined by the `duration` property to reach 100%.

</card>

<card subtitle="Duration">

## Duration

Change the duration of the notification with the `duration` property, the value is numerical and determine the seconds before the bone component is hidden that **10s** equals **10000** as the value

if you need the notification to never be hidden, the duration value would be `none`

</card>

<card subtitle="Square">

## Square

Change the style of the notification with the `square` property so as not to have `border-radius` making it a rectangle

</card>

<card subtitle="Border">

## Border

Change the notification style with the `border` property by adding a border of the color provided as the value

</card>

<card subtitle="Flat">

## Flat

Change the style of the notification with the `flat` property, having this property changes to lighter colors and the text of the color of the `color` property, this property is a boolean so you can only use the value `true`

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the notification, having this property will only show the animation and the content will be hidden

</card>

<card subtitle="Width">

## Width

Change the size of the notification to the total screen with the property `width` and giving it a value of `100%`

If you need the notification to have an automatic size to your content you can do it with the value `auto`

</card>

<card subtitle="Sticky">

## Sticky

You can add a style to the paste component to the nearest corner with the `sticky` property, this property is a `boolean` po which can only have the value `true`

</card>

<card subtitle="Example">

## Example

You can do great things with this component and some others from vuesax, to add any element within the notification we have the property `content` this property can only receive an imported component and that is what it will generate within the notification

</card>

<script setup>
import Api from "../../../theme/global-components/template/Notification/API.tsx"
</script>

<Api></Api>
