<script setup lang="ts">
import VSContent from './components/Content/index.vue'
import NavBar from './components/NavBar/index.vue'
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
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
