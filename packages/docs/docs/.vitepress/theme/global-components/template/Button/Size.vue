<template>
  <div class="center">
    <VsButton size="xl" :active="active === 0" @click="active = 0">
      XL size
    </VsButton>
    <VsButton size="lg" :active="active === 1" @click="active = 1">
      LG size
    </VsButton>
    <VsButton size="md" :active="active === 2" @click="active = 2">
      MD size
    </VsButton>
    <VsButton size="sm" :active="active === 3" @click="active = 3">
      SM size
    </VsButton>
    <VsButton size="xs" :active="active === 4" @click="active = 4">
      XS size
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsButton } from 'vuesax-ts'

const active = ref(0)
</script>
