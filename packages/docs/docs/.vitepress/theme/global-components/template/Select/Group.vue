<template>
  <div class="center">
    <VsSelect v-model="value" labelPlaceholder="Group" class="select">
      <VsOptionGroup>
        <template #title> VueTs </template>
        <VsOption label="Vuesax" value="1">Vuesax</VsOption>
        <VsOption label="Vue" value="2">Vue</VsOption>
        <VsOption label="Javascript" value="3">Javascript</VsOption>
      </VsOptionGroup>
      <VsOptionGroup>
        <template #title> Others </template>
        <VsOption label="Scss" value="4">Scss</VsOption>
        <VsOption label="Typescript" value="5">Typescript</VsOption>
        <VsOption label="Nodejs" value="6">Nodejs</VsOption>
      </VsOptionGroup>
    </VsSelect>
    <VsSelect
      v-model="value2"
      labelPlaceholder="Group Filter"
      filter
      class="select"
    >
      <VsOptionGroup>
        <template #title> VueTs </template>
        <VsOption label="Vuesax" value="1">Vuesax</VsOption>
        <VsOption label="Vue" value="2">Vue</VsOption>
        <VsOption label="Javascript" value="3">Javascript</VsOption>
      </VsOptionGroup>
      <VsOptionGroup>
        <template #title> Others </template>
        <VsOption label="Scss" value="4">Scss</VsOption>
        <VsOption label="Typescript" value="5">Typescript</VsOption>
        <VsOption label="Nodejs" value="6">Nodejs</VsOption>
      </VsOptionGroup>
    </VsSelect>
    <VsSelect
      v-model="value3"
      labelPlaceholder="Group Multiple Filter"
      filter
      multiple
      class="select"
    >
      <VsOptionGroup>
        <template #title> Vuejs </template>
        <VsOption label="Vuesax" value="1">Vuesax</VsOption>
        <VsOption label="Vue" value="2">Vue</VsOption>
        <VsOption label="Javascript" value="3">Javascript</VsOption>
      </VsOptionGroup>
      <VsOptionGroup>
        <template #title> Other </template>
        <VsOption label="Scss" value="4">Scss</VsOption>
        <VsOption label="Typescript" value="5">Typescript</VsOption>
        <VsOption label="Nodejs" value="6">Nodejs</VsOption>
      </VsOptionGroup>
    </VsSelect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsSelect, VsOption, VsOptionGroup } from 'vuesax-ts'

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
