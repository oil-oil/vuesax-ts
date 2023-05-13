<template>
    <div class="home">
        <HomePage1 />
    </div>
</template>

<script setup lang='ts'>
import HomePage1 from './HomePage1.vue'
import { useData } from 'vitepress';

console.log("usedata", useData())
</script>

<style scoped>
.home {
    width: 100vw;
}
</style>