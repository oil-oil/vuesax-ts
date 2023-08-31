---
prev: Avatar
next: Radio
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

# Notification

<card>

## Default

It generates a notification with the vuesax hook (`useNotification`)

:::tip
  The necessary properties are the `title` and the`text` or failing the `content` property
:::

</card>

<card subtitle="Position">

## Position

Change the notification position with the `position` property

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

Use the `color` property to change the base color of the component and some of the child components, to better understand the handling of colors and themes you can see it.

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
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>
