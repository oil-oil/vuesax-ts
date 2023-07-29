<template>
    <div class="center">
        <VsSelect v-for="(color, index) in colors" :key="index" :color="color.color" v-model="color.value"
            :placeholder="color.color" class="select">
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
import { onMounted, ref } from "vue";
import { VsSelect, VsOption } from "vuesax-ts"

onMounted(() => {
    console.log(colors.value)
})
const colors = ref([
    { color: "danger", value: "1" },
    { color: "success", value: "2" },
    { color: "warn", value: "3" },
    { color: "dark", value: "4" },
    { color: "#7d33ff", value: "5" },
    { color: "rgb(59, 222, 200)", value: "6" },
])
</script>

<style scoped>
.select {
    margin: 10px;
    width: 30%;
}
</style>