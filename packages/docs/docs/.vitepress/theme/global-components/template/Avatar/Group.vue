<template>
  <div class="center">
    <VsAvatarGroup :max="7">
      <VsAvatar><img src="/avatars/avatar-10.png" /></VsAvatar>
      <VsAvatar><img src="/avatars/avatar-9.png" /></VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-8.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-7.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-6.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-5.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-4.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-3.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-2.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-1.png" />
      </VsAvatar>
    </VsAvatarGroup>
    <VsAvatarGroup :max="8" float>
      <VsAvatar><img src="/avatars/avatar-10.png" /></VsAvatar>
      <VsAvatar><img src="/avatars/avatar-9.png" /></VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-8.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-7.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-6.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-5.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-4.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-3.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-2.png" />
      </VsAvatar>
      <VsAvatar>
        <img src="/avatars/avatar-1.png" />
      </VsAvatar>
    </VsAvatarGroup>
  </div>
</template>

<script setup lang="ts">
import { VsAvatar, VsAvatarGroup } from 'vuesax-ts'
</script>

<style scoped>
.VsAvatar-content {
  margin: 0 15px 0 15px;
}
</style>
