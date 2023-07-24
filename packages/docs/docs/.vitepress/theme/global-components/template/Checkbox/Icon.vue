<template>
    <div class="content">
        <VsCheckbox v-model="option1">
            <template #icon>
                <i class='bx bx-check'></i>
            </template>
        </VsCheckbox>
        <VsCheckbox success v-model="option2">
            <template #icon>
                <i class='bx bx-check-double'></i>
            </template>
        </VsCheckbox>
        <VsCheckbox danger v-model="option3">
            <template #icon>
                <i class='bx bx-x'></i>
            </template>
        </VsCheckbox>
        <VsCheckbox warn v-model="option4">
            <template #icon>
                <i class='bx bxs-shield'></i>
            </template>
        </VsCheckbox>
        <VsCheckbox dark v-model="option5">
            <template #icon>
                <i class='bx bxs-heart'></i>
            </template>
        </VsCheckbox>
        <VsCheckbox color="#7d33ff" v-model="option6">
            <template #icon>
                <i class='bx bx-brightness'></i>
            </template>
        </VsCheckbox>
        <VsCheckbox color="rgb(59,222,200)" v-model="option7">
            <template #icon>
                <i class='bx bxs-paint'></i>
            </template>
        </VsCheckbox>
    </div>
</template>

<script setup lang='ts'>
import { VsCheckbox } from 'vuesax-ts';
import { ref } from 'vue';

const option1 = ref([]);
const option2 = ref([]);
const option3 = ref([]);
const option4 = ref([]);
const option5 = ref([]);
const option6 = ref([]);
const option7 = ref([]);
</script>

<style scoped>
.content {
    display: flex;
}
</style>
