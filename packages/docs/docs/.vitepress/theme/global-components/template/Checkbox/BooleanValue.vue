<template>
  <div class="center">
    <VsCheckbox v-model="option1">{{ option1 }}</VsCheckbox>
    <VsCheckbox v-model="option2">{{ option2 }}</VsCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsCheckbox } from "vuesax-ts";

const option1 = ref(true);
const option2 = ref(false);
</script>
