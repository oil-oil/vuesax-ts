<template>
  <div>
    <VsButton @click="handleClick">Open</VsButton>
  </div>
</template>

<script setup lang='ts'>
import { VsButton, useNotification } from "./components";

const { open } = useNotification()
const handleClick = () => {
  open({
    title:"wdwdwd",
    text:"sdawdawdadadawdawd",
    border:true,
    flat:true,
    color:"danger",
  })
}
</script>

<style scoped></style>
