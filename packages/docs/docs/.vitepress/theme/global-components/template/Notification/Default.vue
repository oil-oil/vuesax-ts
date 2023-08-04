<template>
  <div class="center">
    <VsButton @click="handleClick">Open Notification</VsButton>
  </div>
</template>

<script setup lang="ts">
import { VsButton, useNotification } from "vuesax-ts";

const { open, close } = useNotification();
const handleClick = () => {
  const setOpen = open({
    title: "Documentation Vuesax Ts",
    text: "These documents refer to the latest version of vuesax (4.0+),to see the documents of the previous versions you can do it here 👉 Vuesax3.x",
  });
  setTimeout(() => {
    close(setOpen);
  }, 4000);
};
</script>
