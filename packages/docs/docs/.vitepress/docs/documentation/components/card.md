---
prev: Sidebar
props : 
    - name: type
      type: String
      values: 1,2,3,4,5
      description: Change the style of the letter and the position of the internals.
      default: 1
      usageUrl: card#Type2
slots : 
    - name: text
      type: slot
      description: Add text to the card in the section determined by the card type.	
      usageUrl: card#default
    - name: title
      type: slot
      description: Add the title to the card in the section determined by the type of card.
      usageUrl: card#default
    - name: buttons
      type: slot
      description: Add the buttons to the card in the section determined by the type of card.
      usageUrl: card#default
    - name: interactions
      type: slot
      description: Add the interactions to the card in the section determined by the card type.
      usageUrl: card#default
    - name: img
      type: slot
      description: Add the image or video to the card in the section determined by the type of card.
      usageUrl: card#default
---

# Card

<card>

## Default

Add a card with the `VsCard` component for the structure of this component we have several slots:

- title
- text
- buttons
- interactions
- img

</card>

<card subtitle="Type2">

## Type 2

The `type` property is `2` corresponding to the card style:

</card>

<card subtitle="Type3">

## Type 3

The `type` property is `3` corresponding to the card style:


</card>

<card subtitle="Type4">

## Type 4

The `type` property is `4` corresponding to the card style:


</card>

<card subtitle="Type5">

## Type 5

The `type` property is `5` corresponding to the card style:


</card>

<card subtitle="Group">

## Group

To have a group of scrolling cards you can use the `VsCardGroup` component

</card>

<script setup>
import Api from "../../../theme/global-components/template/API.tsx"
</script>

<Api/>