<template>
  <div class="center">
    <VsSelect v-model="value" placeholder="Select">
      <VsOption label="Vuesax" value="1"></VsOption>
      <VsOption label="Vue" value="2"></VsOption>
      <VsOption label="Javascript" value="3"></VsOption>
      <VsOption label="Scss" value="4"></VsOption>
      <VsOption label="Typescript" value="5"></VsOption>
      <VsOption label="Nodejs" value="6"></VsOption>
    </VsSelect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsSelect, VsOption } from 'vuesax-ts'

const value = ref(0)
</script>
