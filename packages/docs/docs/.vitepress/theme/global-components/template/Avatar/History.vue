<template>
  <div class="center">
    <VsAvatar history>
      <img src="/avatars/avatar-5.png" alt="" />
    </VsAvatar>
    <VsAvatar history color="primary">
      <img src="/avatars/avatar-5.png" alt="" />
    </VsAvatar>
    <VsAvatar history color="success">
      <img src="/avatars/avatar-5.png" alt="" />
    </VsAvatar>
    <VsAvatar history historyGradient>
      <img src="/avatars/avatar-5.png" alt="" />
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
