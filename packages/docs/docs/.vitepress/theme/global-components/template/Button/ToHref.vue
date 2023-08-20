<template>
  <div class="center">
    <VsButton to="/" flat> To - vue-router </VsButton>
    <VsButton href="http://vuesax.com/" color="success" flat>
      Href - Replace Url
    </VsButton>
    <VsButton href="http://vuesax.com/" blank color="danger" flat>
      Href - Open External (blank)
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { VsButton } from 'vuesax-ts'
</script>
