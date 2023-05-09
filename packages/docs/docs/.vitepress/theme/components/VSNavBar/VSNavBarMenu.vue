<template>
    <div v-if="theme.nav" class="navbar-menu">
        <template v-for="item in theme.nav" :key="item.text">
            <VSNavBarMenuLink v-if="'link' in item" :item="item" />
            <VSNavBarMenuGroup v-else :item="item" />
        </template>
    </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
const { theme } = useData()
</script>

<style scoped></style>