<template>
    <div class="center">
        <VsAvatar loading badge><img src="/avatars/avatar-5.png" alt=""></VsAvatar>
        <VsAvatar loading badge badgeColor="danger"><img src="/avatars/avatar-6.png" alt=""></VsAvatar>
        <VsAvatar loading badge badgeColor="danger">
            <template #badge>
                Off
            </template><img src="/avatars/avatar-2.png" alt="">
        </VsAvatar>
        <VsAvatar loading badge badgeColor="success">
            <template #badge>
                28
            </template><img src="/avatars/avatar-6.png" alt="">
        </VsAvatar>
        <VsAvatar loading badge badgeColor="warn">
            <template #badge>
                <i class='bx bxs-bell-off'></i>
            </template>
            <img src="/avatars/avatar-3.png" alt="">
        </VsAvatar>
        <VsAvatar loading badge writing badgeColor="rgb(59,222,200)">
            <img src="/avatars/avatar-4.png" alt="">
        </VsAvatar>
        <VsAvatar loading badge badgePosition="top-right" badgeColor="#7d33ff">
            <img src="/avatars/avatar-5.png" alt="">
        </VsAvatar>
    </div>
</template>

<script setup lang='ts'>
import { VsAvatar } from "vuesax-ts"
</script>

<style scoped>
.vs-avatar-content {
    margin: 0 10px 0 10px;
}
</style>