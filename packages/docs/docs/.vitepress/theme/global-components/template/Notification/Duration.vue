<template>
    <div class="center">
        <VsButton border @click="() => { handleClick(4000) }">Duration default (4s)</VsButton>
        <VsButton border @click="() => { handleClick(6000) }">Duration 6s</VsButton>
        <VsButton border @click="() => { handleClick(10000) }">Duration 10s</VsButton>
    </div>
</template>

<script setup lang='ts'>
import { VsButton, useNotification } from "vuesax-ts"
const { open } = useNotification()
const handleClick = (duration?: number) => {
    open({
        title: "Documentation Vuesax Ts",
        text: "These documents refer to the latest version of vuesax (4.0+),to see the documents of the previous versions you can do it here 👉 Vuesax3.x",
        progressAuto: true,
        duration: duration
    })
}
</script>
