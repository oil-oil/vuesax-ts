<template>
  <div class="center">
    <VsButton :loading="active" @click="handleClick">Open Alert 10s</VsButton>
    <VsAlert :progress="progress" :isShow="active">
      <template #title> Vuesax Framework </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a
      <b>UI components framework</b> created with
      <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for
      all types of developed from the frontend lover to the backend that wants
      to easily create your visual approach to the end user
    </VsAlert>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsAlert } from "vuesax-ts";

const progress = ref(0);
const active = ref(false);

const handleClick = () => {
  active.value = true;
  const interval = setInterval(() => {
    progress.value += 1;
  }, 100);

  setTimeout(() => {
    active.value = false;
    progress.value = 0;
    clearInterval(interval);
  }, 10000);
};
</script>

<style scoped></style>
