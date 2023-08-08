<template>
  <div class="center">
    <VsToolTip circle>
      <VsButton circle flat> Do hover here </VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
