<template>
  <VsCardGroup>
    <VsCard v-for="card in 6" :key="card">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img :src="`/foto${card}.png`" alt="" />
      </template>
      <template #text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </template>
      <template #interactions>
        <VsButton color="danger" icon>
          <i class="bx bx-heart"></i>
        </VsButton>
        <VsButton class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span" style="margin-left: 4px"> 54 </span>
        </VsButton>
      </template>
    </VsCard>
  </VsCardGroup>
</template>

<script setup lang="ts">
import { VsCardGroup, VsCard, VsButton } from 'vuesax-ts'
</script>
