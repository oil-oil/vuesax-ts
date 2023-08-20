<template>
  <VsInput label="Name" placeholder="Evan You" v-model="value"></VsInput>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsInput } from 'vuesax-ts'

const value = ref()
</script>
