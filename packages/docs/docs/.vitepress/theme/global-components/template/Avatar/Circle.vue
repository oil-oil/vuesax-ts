<template>
  <div class="center">
    <VsAvatar circle name="Joel"></VsAvatar>
    <VsAvatar circle name="Fanny"></VsAvatar>
    <VsAvatar circle>
      <img src="/avatars/avatar-1.png" alt="" />
    </VsAvatar>
    <VsAvatar circle badge>
      <img src="/avatars/avatar-6.png" alt="" />
    </VsAvatar>
    <VsAvatar circle writing badgeColor="success">
      <img src="/avatars/avatar-3.png" alt="" />
    </VsAvatar>
    <VsAvatar circle badge badgeColor="warn">
      <img src="/avatars/avatar-4.png" alt="" />
    </VsAvatar>
    <VsAvatar circle history historyGradient>
      <img src="/avatars/avatar-5.png" alt="" />
    </VsAvatar>
  </div>
</template>

<script setup lang="ts">
import { VsAvatar } from 'vuesax-ts'
</script>

<style scoped>
.vs-avatar-content {
  margin: 0 10px 0 10px;
}
</style>
