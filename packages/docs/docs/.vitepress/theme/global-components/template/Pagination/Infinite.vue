<template>
  <div class="center">
    <VsPagination v-model="page" :length="20" infinite />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsPagination } from 'vuesax-ts'

const page = ref(1)
</script>
