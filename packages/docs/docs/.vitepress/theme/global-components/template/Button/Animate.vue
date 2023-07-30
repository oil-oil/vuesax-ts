<template>
  <div class="center">
    <VsButton :active="active === 0" @click="active = 0">
      Home
      <template #animate>
        <i class="bx bx-home-alt" />
      </template>
      <i class="bx bx-home-alt" />
    </VsButton>
    <VsButton color="success" flat animationType="vertical" :active="active === 1" @click="active = 1">
      vertical
      <template #animate> <i class="bx bx-mail-send" /> Send </template>
    </VsButton>
    <VsButton gradient color="warn" animationType="scale" :active="active === 2" @click="active = 2"
      style="min-width: 60px">
      <i class="bx bxs-shopping-bag" />
      <template #animate> Store </template>
    </VsButton>
    <VsButton icon relief color="danger" animationType="rotate" :active="active === 3" @click="active = 3">
      <i class="bx bx-like" />
      <template #animate>
        <i class="bx bxs-like" />
      </template>
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsButton } from "vuesax-ts";

const active = ref(0);
</script>

<style scoped></style>
