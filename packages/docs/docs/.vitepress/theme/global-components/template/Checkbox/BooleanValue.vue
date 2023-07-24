<template>
    <div class="center">
        <VsCheckbox v-model="option1">{{ option1 }}</VsCheckbox>
        <VsCheckbox v-model="option2">{{ option2 }}</VsCheckbox>
    </div>
</template>

<script setup lang='ts'>
import { VsCheckbox } from 'vuesax-ts';
import { ref } from 'vue';

const option1 = ref(true);
const option2 = ref(false)
</script>
