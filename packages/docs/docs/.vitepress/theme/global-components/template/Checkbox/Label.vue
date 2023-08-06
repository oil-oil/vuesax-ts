<template>
  <div class="center">
    <VsCheckbox v-model="option">Label</VsCheckbox>
    <VsCheckbox v-model="option2" labelBefore>Label Before</VsCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsCheckbox } from 'vuesax-ts'

const option = ref(true)
const option2 = ref(false)
</script>
