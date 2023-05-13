<template>
    <div v-if="theme.nav" class="navbar-menu">
        <template v-for="item in theme.nav" :key="item.text">
            <NavBarMenuLink v-if="'link' in item" :item="item" />
            <NavBarMenuGroup v-else :item="item" />
        </template>
    </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
const { theme } = useData()
</script>

<style scoped>
.VPNavBarMenu {
    display: none;
}

@media (min-width: 768px) {
    .VPNavBarMenu {
        display: flex;
    }
}
</style>