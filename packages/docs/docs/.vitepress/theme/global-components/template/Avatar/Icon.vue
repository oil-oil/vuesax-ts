<template>
  <div class="center">
    <VsAvatar>
      <i class="bx bx-user"></i>
    </VsAvatar>
    <VsAvatar color="primary">
      <i class="bx bxs-camera"></i>
    </VsAvatar>
    <VsAvatar color="success">
      <i class="bx bx-world"></i>
    </VsAvatar>
    <VsAvatar color="warn">
      <i class="bx bx-support"></i>
    </VsAvatar>
    <VsAvatar color="danger">
      <i class="bx bx-trophy"></i>
    </VsAvatar>
    <VsAvatar color="dark">
      <i class="bx bx-map"></i>
    </VsAvatar>
  </div>
</template>

<script setup lang="ts">
import { VsAvatar } from "vuesax-ts";
</script>

<style scoped>
.vs-avatar-content {
  margin: 0 10px 0 10px;
}
</style>
