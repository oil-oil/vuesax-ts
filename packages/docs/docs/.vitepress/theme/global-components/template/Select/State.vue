<template>
    <div class="center">
        <VsSelect v-for="(color, index) in colors" :key="index" :state="color.color" v-model="color.value"
            :labelPlaceholder="color.color" class="select">
            <VsOption label="Vuesax" value="1">Vuesax</VsOption>
            <VsOption label="Vue" value="2">Vue</VsOption>
            <VsOption label="Javascript" value="3">Javascript</VsOption>
            <VsOption label="Scss" value="4">Scss</VsOption>
            <VsOption label="Typescript" value="5">Typescript</VsOption>
            <VsOption label="Nodejs" value="6">Nodejs</VsOption>
        </VsSelect>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { VsSelect, VsOption } from "vuesax-ts"

const colors = ref([
    { color: "danger", value: 0 },
    { color: "success", value: 1 },
    { color: "warn", value: 2 },
    { color: "dark", value: 3 },
    { color: "primary", value: 4 },
])
</script>

<style scoped>
.select {
    margin: 10px;
    margin-top: 15px !important;
    width: 30%;
}
</style>