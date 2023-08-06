<template>
  <div class="center">
    <VsCheckbox v-model="option" loading>Loading checked</VsCheckbox>
    <VsCheckbox v-model="option2" loading>Loading unchecked</VsCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsCheckbox } from 'vuesax-ts'

const option = ref(true)
const option2 = ref(false)
</script>
