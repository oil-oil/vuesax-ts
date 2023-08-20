<template>
  <div class="center">
    <VsPagination
      v-model="page"
      :disabledItems="[3, 4, 9, 10, 11, 12, 19]"
      :length="20"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsPagination } from 'vuesax-ts'

const page = ref(1)
</script>
