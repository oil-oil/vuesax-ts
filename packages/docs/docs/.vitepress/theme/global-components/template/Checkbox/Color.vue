<template>
  <div class="center">
    <VsCheckbox v-model="primary">Primary</VsCheckbox>
    <VsCheckbox v-model="success" color="success">Success</VsCheckbox>
    <VsCheckbox v-model="danger" color="danger">Danger</VsCheckbox>
    <VsCheckbox v-model="warn" color="warn">Warning</VsCheckbox>
    <VsCheckbox v-model="dark" color="dark">Dark</VsCheckbox>
    <VsCheckbox v-model="hex" colo="#7d33ff">HEX</VsCheckbox>
    <VsCheckbox v-model="rgb" color="rgb(59, 222, 200)">RGB</VsCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsCheckbox } from 'vuesax-ts'

const primary = ref(true)
const success = ref(true)
const danger = ref(true)
const warn = ref(true)
const dark = ref(true)
const hex = ref(true)
const rgb = ref(true)
</script>
