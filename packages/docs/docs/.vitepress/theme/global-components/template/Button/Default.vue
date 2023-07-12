<template>
  <div class="center">
    <VsButton :active="active === 0" @click="active = 0"> Active </VsButton>
    <VsButton :active="active === 1" @click="active = 1"> Default </VsButton>
    <VsButton disabled> Disabled </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);
</script>

<style scoped></style>
