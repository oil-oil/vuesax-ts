<template>
  <div class="center">
    <VsToolTip border>
      <VsButton transparent>Do hover here</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip border color="danger">
      <VsButton color="danger" transparent>Do hover here</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip borderThick color="#7d33ff">
      <VsButton color="#7d33ff" transparent>Do hover here</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
