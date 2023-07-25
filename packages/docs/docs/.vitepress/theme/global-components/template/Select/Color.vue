<template>
    <div class="center">
        <VsSelect v-for="(color, index) in colors" :key="index" :color="color.color" v-model="color.value"
            placeholder="Select" class="select">
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
    { color: "success", value: 0 },
    { color: "warn", value: 0 },
    { color: "dark", value: 0 },
    { color: "#7d33ff", value: 0 },
    { color: "rgb(59,222,200)", value: 0 },
])
</script>

<style scoped>
.select {
    margin: 10px;
    width: 30%;
}
</style>