<template>
    <div class="Nav">
        <NavBarTitle class="NavBarTitle" />
    </div>
</template>

<script setup lang='ts'>
import NavBarTitle from './VSNavBarTitle.vue'
import { useData } from 'vitepress';
const { site } = useData()
</script>

<style scoped>
.Nav {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 70px;
    width: 100%;
}

.NavBarTitle {
    width: 150px;
}
</style>