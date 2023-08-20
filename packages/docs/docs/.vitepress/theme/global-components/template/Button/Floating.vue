<template>
  <div class="center">
    <VsButton circle icon floating>
      <i class="bx bx-plus" />
    </VsButton>

    <VsButton color="whatsapp" circle icon floating>
      <i class="bx bxl-whatsapp" />
    </VsButton>

    <VsButton color="#ff3e4e" circle icon floating>
      <i class="bx bx-up-arrow-alt" />
    </VsButton>

    <VsButton circle icon disabled floating>
      <i class="bx bxs-chat" />
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { VsButton } from 'vuesax-ts'
</script>
