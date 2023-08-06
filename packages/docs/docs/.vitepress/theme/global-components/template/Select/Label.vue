<template>
  <div class="center">
    <VsSelect v-model="value" label="Label" class="select">
      <VsOption label="Vuesax" value="1">Vuesax</VsOption>
      <VsOption label="Vue" value="2">Vue</VsOption>
      <VsOption label="Javascript" value="3">Javascript</VsOption>
      <VsOption label="Scss" value="4">Scss</VsOption>
      <VsOption label="Typescript" value="5">Typescript</VsOption>
      <VsOption label="Nodejs" value="6">Nodejs</VsOption>
    </VsSelect>
    <VsSelect
      v-model="value2"
      labelPlaceholder="LabelPlaceholder"
      class="select"
    >
      <VsOption label="Vuesax" value="1">Vuesax</VsOption>
      <VsOption label="Vue" value="2">Vue</VsOption>
      <VsOption label="Javascript" value="3">Javascript</VsOption>
      <VsOption label="Scss" value="4">Scss</VsOption>
      <VsOption label="Typescript" value="5">Typescript</VsOption>
      <VsOption label="Nodejs" value="6">Nodejs</VsOption>
    </VsSelect>
    <VsSelect v-model="value3" placeholder="Placeholder" class="select">
      <VsOption label="Vuesax" value="1">Vuesax</VsOption>
      <VsOption label="Vue" value="2">Vue</VsOption>
      <VsOption label="Javascript" value="3">Javascript</VsOption>
      <VsOption label="Scss" value="4">Scss</VsOption>
      <VsOption label="Typescript" value="5">Typescript</VsOption>
      <VsOption label="Nodejs" value="6">Nodejs</VsOption>
    </VsSelect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsSelect, VsOption } from 'vuesax-ts'

const value = ref()
const value2 = ref()
const value3 = ref()
</script>

<style scoped>
.center {
  align-items: flex-end;
}

.select {
  margin: 10px;
  width: 30%;
}
</style>
