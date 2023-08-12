<template>
  <div class="center">
    <VsRadio v-model="value" value="1" loading>Option 1</VsRadio>
    <VsRadio v-model="value" value="2" loading>Option 2</VsRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsRadio } from 'vuesax-ts'

const value = ref('1')
</script>

<style scoped></style>
