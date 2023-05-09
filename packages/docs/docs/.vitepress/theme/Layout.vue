<script setup lang="ts">
import VSContent from './components/VSContent/index.vue'
import NavBar from './components/VSNavBar/index.vue'
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page } = useData()
console.log('11', useData())
</script>

<template>
  <div v-if="frontmatter.layout !== false" @scroll="" class="Layout">
    <slot name="layout-top" />
    <NavBar class="navbar" />
    <VSContent class="content" />

  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  background-color: white;
  top: 0px;
  z-index: 10;
}
</style>
