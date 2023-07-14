<template>
  <VsInput labelPlaceholder="Country" v-model="value"></VsInput>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsInput } from "vuesax/src/components";

const value = ref();
</script>

<style scoped></style>
