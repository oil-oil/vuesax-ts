<template>
    <div class="center">
        <VsRadio v-model="value" value="1">Label</VsRadio>
        <VsRadio v-model="value" value="2" labelBefore>Label Before</VsRadio>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { VsRadio } from 'vuesax-ts';

const value = ref("")
</script>

<style scoped></style>