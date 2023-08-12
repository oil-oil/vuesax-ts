<template>
  <div class="center">
    <VsToolTip noArrow left>
      <VsButton>Left</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip noArrow top>
      <VsButton>Top</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip noArrow bottom>
      <VsButton>Bottom</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip noArrow right>
      <VsButton>Right</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
