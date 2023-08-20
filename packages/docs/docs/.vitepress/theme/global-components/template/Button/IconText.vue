<template>
  <div class="center">
    <VsButton :active="active === 0" @click="active = 0">
      <i class="bx bx-home-alt" />Home
    </VsButton>
    <VsButton color="success" flat :active="active === 1" @click="active = 1">
      <i class="bx bxs-phone-call" />Call
    </VsButton>
    <VsButton color="danger" border :active="active === 2" @click="active = 2">
      <i class="bx bxs-heart" />Like
    </VsButton>
    <VsButton color="warn" gradient :active="active === 3" @click="active = 3">
      <i class="bx bxs-bell-ring" />Notifications
    </VsButton>
    <VsButton color="#7d33ff" relief :active="active === 4" @click="active = 4">
      <i class="bx bxs-paper-plane" />Send
    </VsButton>
    <VsButton
      color="rgb(59, 222, 200)"
      gradient
      :active="active === 5"
      @click="active = 5"
    >
      <i class="bx bxs-purchase-tag" />Save
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsButton } from 'vuesax-ts'

const active = ref(0)
</script>
