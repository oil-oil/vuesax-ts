<template>
    <div class="VSContent" id="VSContent" :class="{ 'is-home': frontmatter.layout === 'home' }">
        <slot name="not-found" v-if="page.isNotFound">
            <NotFound class="not-found" />
        </slot>
        <VSHome v-else-if="frontmatter.layout === 'home'"></VSHome>
        <VSDocsPage v-else class="VSDocsPage" />
    </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
import NotFound from '../NotFound.vue'
import VSHome from '../VSContent/VSHome.vue'
import VSDocsPage from './VSDocsPage.vue';
const { page, frontmatter } = useData()
</script>

<style scoped></style>