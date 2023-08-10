<template>
  <div class="center">
    <VsToolTip notArrow left>
      <VsButton>Left</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip notArrow top>
      <VsButton>Top</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip notArrow bottom>
      <VsButton>Bottom</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip notArrow right>
      <VsButton>Right</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
