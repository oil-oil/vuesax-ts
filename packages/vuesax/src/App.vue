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
    color: "success",
  })
}
</script>

<style scoped></style>
