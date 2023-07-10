
# Alert

<card>

## Default

<docs-warn />

Easily generate an alert with this component apart from functionalities such as hiding it and showing its color change and title icons among other things

</card>

<card subtitle="Solid">

## Solid <Badge text="New"/>

You can change the style of the component by adding the `solid` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Border">

## Border <Badge text="New"/>

You can change the style of the component by adding the `border` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Shadow">

## Shadow <Badge text="New"/>

You can change the style of the component by adding the `shadow` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Gradient">

## Gradient <Badge text="New"/>

You can change the style of the component by adding the `gradient` property, the property is a `boolean` so you can add it without any value.

</card>

<card subtitle="Relief">

## Relief <Badge text="New"/>

You can change the style of the component by adding the `relief` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="Animate">

## Animate

A beautiful and simple animation to show and hide the alert to the user


</card>

<card subtitle="Color">

## Color

Change the color of the entire alert with the `color` property

In this example you can click on the buttons and dynamically change the color value to display it in the component **VsAlert**

</card>

<card subtitle="Icon">

## Icon

Add an icon to the alert easily with the slot **icon**

<VsAlert warn >
  <template #title>
  Default Icons
  </template>
Vuesax does not use any library or default icon source, with this we give you the freedom to use the one you prefer All the components that use a default icon somewhere like the close one in an <b>Alert</b> or a <b>Popup</b> will be an <b>svg</b> for not having to install any type of external font, and it can be replaced with an icon of your preference<code style="padding: .25rem .5rem;font-size:.85rem;background-color:var(--vs-theme-bg2);border-radius: 3px;">slot="icon"</code>
</VsAlert>

<VsAlert success style="margin:10px 0 0 0 ">
  <template #title>
  Vuesax Docs Icons
  </template>
These documents and examples use the <a href="https://boxicons.com/" target="_blank">boxicons</a> component library, it is not mandatory or necessary for the use of Vuesax but we recommend it for its wide range of icons and how they visually complement the framework
</VsAlert>

</card>

<card subtitle="Title">

## Title

You can add a descriptive title to the alert with the `slot="title"`

</card>

<card subtitle="HiddenContent">

## Hidden Content <Badge text="New"/>

You can hide the content of an alert and just leave the title to display the content dynamically

</card>

<card subtitle="Pagination">

## Pagination <Badge text="New"/>

There are times when we need to show a lot of content to the user but we don't want to extend the text and make the alert very large and tall

</card>

<card subtitle="Footer">

## footer <Badge text="New"/>

Use the `footer` slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.

</card>

<card subtitle="Progress">

## Progress bar <Badge text="New"/>

You can add a progress bar to the alert with the progress property and a number of (`0 - 100`)

</card>

<card subtitle="Closable">

## Closable <Badge text="New"/>

You can add a close alert icon with the `closable` property, the property is a` boolean` so you can add it without any value.

</card>

<card subtitle="TimeClose">

## Time Close <Badge text="New"/>

If you need an alert to have time to hide, you can do so by joining some properties and few lines of code

</card>

<script setup>
import Api from "../../../theme/global-components/template/Alert/Api.tsx"
</script>

<Api></Api>

