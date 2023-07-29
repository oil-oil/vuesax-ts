<template>
  <div class="center">
    <VsButton :active="active === 0" @click="active = 0"> Active </VsButton>
    <VsButton color="success" flat :active="active === 1" @click="active = 1">
      Success
    </VsButton>
    <VsButton color="danger" border :active="active === 2" @click="active = 2">
      Danger
    </VsButton>
    <VsButton color="warn" gradient :active="active === 3" @click="active = 3">
      Warn
    </VsButton>
    <VsButton color="dark" :active="active === 4" @click="active = 4">
      Dark
    </VsButton>
    <VsButton color="#7d33ff" relief :active="active === 5" @click="active = 5">
      RGB
    </VsButton>
    <VsButton color="rgb(59, 222, 200)" gradient :active="active === 6" @click="active = 6">
      HEX
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsButton } from "vuesax-ts";

const active = ref(0);
</script>

<style scoped></style>
