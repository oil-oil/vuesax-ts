<template>
  <div class="center">
    <VsToolTip square>
      <VsButton square flat> Do hover here </VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
