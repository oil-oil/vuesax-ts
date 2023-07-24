<template>
    <div class="center">
        <VsCheckbox v-model="option" loading>Loading checked</VsCheckbox>
        <VsCheckbox v-model="option2" loading>Loading unchecked</VsCheckbox>
    </div>
</template>

<script setup lang='ts'>
import { VsCheckbox } from 'vuesax-ts';
import { ref } from 'vue';

const option = ref(true);
const option2 = ref(false);
</script>
