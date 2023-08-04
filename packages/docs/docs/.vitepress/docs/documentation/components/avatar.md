# Avatar

<card>

## Default

<docs-warn />

An avatar component is a tool used to display user or entity images in a webpage or mobile application. They are typically used in places such as a profile page or comments section, and provide a simple and easy way to showcase a user's avatar.

</card>

<card subtitle="Color">

## Color

Change the color of the compound with the `color` property, the colors allowed are the main colors of vuesax and (`HEX`, `RGB`)

</card>

<card subtitle="Size">

## Size

Change the size of the component to the number provided if for example the size value is `60` equivalent to `60px` in height and width

</card>

<card subtitle="Badge">

## Badge

Add a badge to the component with the `badge` property or the slot

You can also change the color to represent a user status as disconnected or connected with colors such as `success` or `danger`, this you do with the `badge-color` property

There are times when you need to use the avatar in a chat environment and for this you can add the `writing` property that adds a writing animation

</card>

<card subtitle="AutoFontAndSplit">

## Auto font and split

If the user has a short name, it is added as it is but if it is a very long text or has several spaces, the text to be displayed will be automatically generated so that it can be seen correctly

:::tip
The maximum length of characters is **5**. When that limit is exceeded, changes are made in the text
:::

</card>

<card subtitle="Circle">

## Circle

Change the border-radius of the entire component to `50%` with the `circle` property making it fully circular

</card>

<card subtitle="Square">

## Square

Change the border-radius of the entire component to `0%` with the `square` property making it completely square

</card>

<card subtitle="History">

## History

It generates a border around the avatar, this is usually used to represent that the user is doing an action or in many cases has a `History`

:::tip
You can make the border a gradient like instagram with the property `history-gradient`
:::

</card>

<card subtitle="Icon">

## Icon

You can put an icon inside an avatar when for example an image is not yet added or is a new user, for this you can simply use the default slot

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the component, this property is a `boolean`

</card>

<card subtitle="Icons">

## Icons

Add a space next to the avatar with the slot `icons` where you can put icons for some dynamic action of that user in specific

</card>

<card subtitle="Group"> 

## Group

You can group several avatar with the parent component `vs-avatar-group`, this component has two interesting properties:

- **max**: determine the maximum number of avatars to show and the rest hides it generating the number in the last avatar shown

- **float**: causes the avatar components to be placed on each other and the grouping of one on top of the other is eliminated.

</card>

<script setup>
import Api from "../../../theme/global-components/template/Avatar/API.tsx"
</script>

<Api></Api>
