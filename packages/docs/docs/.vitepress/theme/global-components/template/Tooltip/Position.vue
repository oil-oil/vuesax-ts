<template>
  <div class="center">
    <VsToolTip left>
      <VsButton>Left</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip top>
      <VsButton>Top</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip bottom>
      <VsButton>Bottom</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip right>
      <VsButton>Right</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
