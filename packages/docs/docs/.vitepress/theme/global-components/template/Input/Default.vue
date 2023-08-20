<template>
  <VsInput placeholder="Name" v-model="value"></VsInput>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsInput } from 'vuesax-ts'

const value = ref('')
</script>
