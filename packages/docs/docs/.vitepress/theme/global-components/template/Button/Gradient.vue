<template>
  <div class="center">
    <VsButton gradient :active="active === 0" @click="active = 0">
      Active
    </VsButton>
    <VsButton gradient :active="active === 1" @click="active = 1">
      Default
    </VsButton>
    <VsButton gradient disabled> Disabled </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsButton } from "vuesax-ts";

const active = ref(0);
</script>

<style scoped></style>
