<template>
  <div class="center">
    <VsButton :loading="active" @click="handleClick()">Open Loading</VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLoading } from "vuesax/src/components/index";

const active = ref(false);
const { open, close } = useLoading();

const handleClick = () => {
  open();
  active.value = true;
  setTimeout(() => {
    close();
    active.value = false;
  }, 3500);
};
</script>

<style scoped></style>
