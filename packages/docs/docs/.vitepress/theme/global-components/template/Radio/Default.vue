<template>
    <div class="center">
        <VsRadio v-model="value" value="1">Option A</VsRadio>
        <VsRadio v-model="value" value="2">Option B</VsRadio>
        <VsRadio v-model="value" value="3">Option C</VsRadio>
        <VsRadio v-model="value" value="4">Option D</VsRadio>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { VsRadio } from 'vuesax-ts';

const value = ref("")
</script>

<style scoped lang="scss">
.center {
    display: flex;
    flex-direction: column;

    .vs-radio-content {
        margin: 5px 0;
    }
}
</style>