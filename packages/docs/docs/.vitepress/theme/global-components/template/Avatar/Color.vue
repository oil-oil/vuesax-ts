<template>
    <div class="center">
        <VsAvatar name="Primary" color="primary"></VsAvatar>
        <VsAvatar name="Success" color="success"></VsAvatar>
        <VsAvatar name="Danger" color="danger"></VsAvatar>
        <VsAvatar name="Warn" color="warn"></VsAvatar>
        <VsAvatar name="Dark" color="dark"></VsAvatar>
        <VsAvatar name="HEX" color="#7d33ff"></VsAvatar>
        <VsAvatar name="RGB" color="rgb(59,222,200)"></VsAvatar>
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