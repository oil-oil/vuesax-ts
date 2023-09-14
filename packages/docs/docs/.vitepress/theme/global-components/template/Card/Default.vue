<template>
  <VsCard>
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="/foto5.png" alt="" />
    </template>
    <template #text>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </template>
    <template #interactions>
      <VsButton color="danger" icon>
        <i class="bx bx-heart"></i>
      </VsButton>
      <VsButton shadow>
        <i class="bx bx-chat"></i>
        <span style="margin-left: 4px"> 54 </span>
      </VsButton>
    </template>
  </VsCard>
</template>

<script setup lang="ts">
import { VsCard, VsButton } from 'vuesax-ts'
</script>
