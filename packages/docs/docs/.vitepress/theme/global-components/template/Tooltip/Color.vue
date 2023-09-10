<template>
  <div class="center">
    <VsToolTip>
      <VsButton shadow>Default</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="primary">
      <VsButton flat color="primary">Primary</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="success">
      <VsButton color="success" flat>Success</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="danger">
      <VsButton color="danger" flat>Danger</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="warn">
      <VsButton color="warn" flat>Warn</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="dark">
      <VsButton color="dark" flat>Dark</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="#7d33ff">
      <VsButton color="#7d33ff" flat>HEX</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
    <VsToolTip color="rgb( 59, 222, 200)">
      <VsButton color="rgb( 59, 222, 200)" flat>RGB</VsButton>
      <template #tooltip> This is a beautiful button </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { VsToolTip, VsButton } from 'vuesax-ts'
</script>
