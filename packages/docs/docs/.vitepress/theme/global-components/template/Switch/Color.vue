<template>
  <div class="center">
    <VsSwitch color="primary" v-model="active"></VsSwitch>
    <VsSwitch color="success" v-model="active2"></VsSwitch>
    <VsSwitch color="danger" v-model="active3"></VsSwitch>
    <VsSwitch color="warn" v-model="active4"></VsSwitch>
    <VsSwitch color="dark" v-model="active5"></VsSwitch>
    <VsSwitch color="#7d33ff" v-model="active6"></VsSwitch>
    <VsSwitch color="rgb(59, 222, 200)" v-model="active7"></VsSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsSwitch } from 'vuesax-ts'

const active = ref(true)
const active2 = ref(true)
const active3 = ref(true)
const active4 = ref(true)
const active5 = ref(true)
const active6 = ref(true)
const active7 = ref(true)
</script>
