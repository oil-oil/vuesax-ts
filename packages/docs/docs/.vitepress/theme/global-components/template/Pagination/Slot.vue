<template>
  <div class="center">
    <VsPagination v-model="page" :length="20">
      <VsSelect v-model="page">
        <VsOption
          v-for="numberPage in 20"
          :label="`${numberPage}`"
          :value="numberPage"
          :key="numberPage"
        >
          {{ numberPage }}
        </VsOption>
      </VsSelect></VsPagination
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsPagination, VsSelect, VsOption } from 'vuesax-ts'

const page = ref(1)
</script>

<style lang="scss" scoped>
.vs-select-content {
  max-width: 60px;
}
</style>
