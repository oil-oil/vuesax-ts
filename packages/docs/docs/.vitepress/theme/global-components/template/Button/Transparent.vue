<template>
  <div class="center">
    <VsButton transparent :active="active === 0" @click="active = 0">
      Active
    </VsButton>
    <VsButton transparent :active="active === 1" @click="active = 1">
      Default
    </VsButton>
    <VsButton transparent disabled> Disabled </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsButton } from 'vuesax-ts'

const active = ref(0)
</script>
