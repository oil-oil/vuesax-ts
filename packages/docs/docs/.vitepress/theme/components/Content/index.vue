<template>
    <div class="VSContent" id="VSContent" :class="{ 'is-home': frontmatter.layout === 'home' }">
        <slot name="not-found" v-if="page.isNotFound">
            <NotFound class="not-found" />
        </slot>
        <Home v-else-if="frontmatter.layout === 'home'"></Home>
        <DocsPage v-else class="VSDocsPage" />
    </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
import NotFound from '../NotFound.vue'
import Home from '../Content/Home/Home.vue'
import DocsPage from './DocsPage.vue';
const { page, frontmatter } = useData()
</script>

<style scoped></style>