<template>
  <div class="center">
    <VsButton :active="active === 0" @click="active = 0" border>
      Active
    </VsButton>
    <VsButton :active="active === 1" @click="active = 1" border>
      Default
    </VsButton>
    <VsButton border disabled> Disabled </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);
</script>

<style scoped></style>
