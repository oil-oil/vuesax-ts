<template>
  <div class="center">
    <VsSwitch color="primary" v-model="active">
      <template #off>
        <i class="bx bxs-volume-mute"></i>
      </template>
      <template #on>
        <i class="bx bxs-volume-full"></i>
      </template>
    </VsSwitch>
    <VsSwitch color="danger" v-model="active2">
      <i class="bx bxs-microphone"></i>
    </VsSwitch>
    <VsSwitch color="success" v-model="active3">
      <template #off>
        <i class="bx bx-x"></i>
      </template>
      <template #on>
        <i class="bx bx-check"></i>
      </template>
    </VsSwitch>
    <VsSwitch color="warn" v-model="active4">
      <template #off>
        <i class="bx bxs-plane-alt"></i>
      </template>
      <template #on> Active </template>
    </VsSwitch>
    <VsSwitch color="dark" v-model="active5">
      <template #circle>
        <i v-if="!active5" class="bx bxs-moon"></i>
        <i v-else class="bx bxs-sun"></i>
      </template>
    </VsSwitch>
    <VsSwitch color="#7d33ff" v-model="active6">
      <template #circle>
        <i v-if="active6" class="bx bxl-instagram-alt"></i>
        <i v-else class="bx bxl-instagram"></i>
      </template>
    </VsSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsSwitch } from 'vuesax-ts'

const active = ref(false)
const active2 = ref(false)
const active3 = ref(false)
const active4 = ref(false)
const active5 = ref(false)
const active6 = ref(false)
</script>
