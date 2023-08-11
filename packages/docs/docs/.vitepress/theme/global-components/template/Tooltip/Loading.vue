<template>
  <div class="center">
    <VsToolTip loading>
      <VsButton flat> Do hover here </VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip loading>
      <VsButton flat> Do hover here </VsButton>
      <template #tooltip></template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
