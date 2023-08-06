<template>
  <div class="center">
    <VsAvatar name="Lily" size="30"></VsAvatar>
    <VsAvatar name="Evan You" size="40"></VsAvatar>
    <VsAvatar><i class="bx bx-user"></i></VsAvatar>
    <VsAvatar color="primary" size="60" badge badgeColor="danger"
      ><i class="bx bxs-hot"></i
    ></VsAvatar>
    <VsAvatar color="dark" size="70" badge badgeColor="success"
      ><img src="/avatars/avatar-4.png" alt="" />
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
