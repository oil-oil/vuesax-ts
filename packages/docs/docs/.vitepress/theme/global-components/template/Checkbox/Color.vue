<template>
    <div class="center">
        <VsCheckbox v-model="primary">Primary</VsCheckbox>
        <VsCheckbox v-model="success" success>Success</VsCheckbox>
        <VsCheckbox v-model="danger" danger>Danger</VsCheckbox>
        <VsCheckbox v-model="warn" warn>Warning</VsCheckbox>
        <VsCheckbox v-model="dark" dark>Dark</VsCheckbox>
        <VsCheckbox v-model="hex" colo="#7d33ff">HEX</VsCheckbox>
        <VsCheckbox v-model="rgb" color="rgb(59,222,200)">RGB</VsCheckbox>
    </div>
</template>

<script setup lang='ts'>
import { VsCheckbox } from 'vuesax-ts';
import { ref } from 'vue';

const primary = ref(true);
const success = ref(true);
const danger = ref(true);
const warn = ref(true);
const dark = ref(true);
const hex = ref(true);
const rgb = ref(true);
</script>
