<template>
    <div>
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
        <ul>
            <li><a href="/markdown-examples.html">Markdown Examples</a></li>
            <li><a href="/api-examples.html">API Examples</a></li>
            <li><a href="/button.html">button</a></li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
const { site } = useData()
</script>

<style scoped></style>