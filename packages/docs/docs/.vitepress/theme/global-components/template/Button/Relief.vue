<template>
  <div class="center">
    <VsButton relief :active="active === 0" @click="active = 0">
      Active
    </VsButton>
    <VsButton relief :active="active === 1" @click="active = 1">
      Default
    </VsButton>
    <VsButton relief disabled> Disabled </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsButton } from "vuesax-ts";

const active = ref(0);
</script>

<style scoped></style>
