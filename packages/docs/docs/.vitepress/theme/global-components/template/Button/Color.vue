<template>
  <div class="center">
    <VsButton :active="active === 0" @click="active = 0"> Active </VsButton>
    <VsButton success flat :active="active === 1" @click="active = 1">
      Success
    </VsButton>
    <VsButton danger border :active="active === 2" @click="active = 2">
      Danger
    </VsButton>
    <VsButton warn gradient :active="active === 3" @click="active = 3">
      Warn
    </VsButton>
    <VsButton dark shadow :active="active === 4" @click="active = 4">
      Dark
    </VsButton>
    <VsButton color="#7d33ff" relief :active="active === 5" @click="active = 5">
      Dark
    </VsButton>
    <VsButton
      color="rgb(59,222,200)"
      gradient
      :active="active === 6"
      @click="active = 6"
    >
      Dark
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);
</script>

<style scoped></style>
