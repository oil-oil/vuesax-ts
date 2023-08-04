<template>
  <div class="noti-user-example">
    <header>
      <VsAvatar><img src="/avatars/avatar-8.png" alt="" /></VsAvatar>
      <b>Sally Willis</b>
      <VsAvatarGroup :max="7">
        <VsAvatar><img src="/avatars/avatar-1.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-2.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-3.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-4.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-5.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-6.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-8.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-9.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-10.png" alt="" /></VsAvatar>
        <VsAvatar><img src="/avatars/avatar-10.png" alt="" /></VsAvatar>
      </VsAvatarGroup>
    </header>
    <div class="content-user">
      <p>
        <b>Sally Willis</b>
        liked your post and <b>9</b>
        other users
      </p>
      <VsButton shadow><i class="bx bx-chevron-right"></i></VsButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VsAvatar, VsAvatarGroup, VsButton } from "vuesax-ts";
</script>

<style scoped lang="scss">
.noti-user-example {
  margin: 8px 8px 1px 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    b {
      font-size: 0.9rem;
      margin: 0 50px 0 10px;
    }

    .vs-avatar__group:not(.float) .vs-avatar-content {
      margin-left: -20px;
      position: relative;
      z-index: 2;
    }
  }

  .content-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;

    p {
      width: 200px;
    }

    .vs-button {
      i {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
