<template>
    <div class="center">
        <VsCheckbox v-model="option" indeterminate>Indeterminate</VsCheckbox>
    </div>
</template>

<script setup lang='ts'>
import { VsCheckbox } from 'vuesax-ts';
import { ref } from 'vue';

const option = ref(true);
</script>
