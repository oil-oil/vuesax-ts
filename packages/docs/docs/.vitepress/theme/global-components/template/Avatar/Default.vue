<template>
  <div class="center">
    <VsAvatar name="Lily"></VsAvatar>
    <VsAvatar name="Evan You"></VsAvatar>
    <VsAvatar>
      <i class="bx bx-user"></i>
    </VsAvatar>
    <VsAvatar color="primary">
      <i class="bx bxs-hot"></i>
    </VsAvatar>
    <vs-avatar>
      <img src="/avatars/avatar-5.png" />
    </vs-avatar>
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
