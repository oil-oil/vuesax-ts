<template>
  <div class="center">
    <VsCheckbox v-model="option">option</VsCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsCheckbox } from 'vuesax-ts'

const option = ref(true)
</script>
