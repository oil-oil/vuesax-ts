<template>
    <div class="center">
        <VsSwitch v-model="active">Suscribe</VsSwitch>
        <VsSwitch v-model="active2">
            <template #off>
                off
            </template>
            <template #on>
                on
            </template>
        </VsSwitch>
        <VsSwitch v-model="active3">
            <template #off>
                default
            </template>
            <template #on>
                Premium
            </template>
        </VsSwitch>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { VsSwitch } from "vuesax-ts";

const active = ref(false)
const active2 = ref(true)
const active3 = ref(false)
</script>
