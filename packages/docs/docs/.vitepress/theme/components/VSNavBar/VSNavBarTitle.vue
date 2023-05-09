<template>
    <div class="navbar-title">
        <a href="/">
            <slot name="nav-bar-title-before" />
            <img v-if="theme.logo" class="logo" :src="theme.logo" />
            <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
            <template v-else-if="theme.siteTitle === undefined">{{ site.title }}</template>
            <slot name="nav-bar-title-after" />
        </a>
    </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
const { theme, site } = useData()
</script>

<style scoped>
.navbar-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>