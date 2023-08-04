<template>
  <div class="center">
    <VsAvatar>
      <img src="/avatars/avatar-1.png" alt="" />
      <template #icons>
        <i class="bx bxl-facebook-square"></i>
        <i class="bx bxl-github"></i>
        <i class="bx bxl-twitter"></i>
      </template>
    </VsAvatar>
    <VsAvatar badge badgeColor="danger" badgePosition="bottom-left">
      <img src="/avatars/avatar-8.png" alt="" />
      <template #icons>
        <i class="bx bxl-twitch"></i>
        <i class="bx bxl-discord"></i>
      </template>
    </VsAvatar>
    <VsAvatar loading badge badgeColor="success" badgePosition="top-left">
      <img src="/avatars/avatar-9.png" alt="" />
      <template #icons>
        <i class="bx bxl-patreon"></i>
        <i class="bx bxl-linkedin-square"></i>
        <i class="bx bx-link"></i>
      </template>
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
