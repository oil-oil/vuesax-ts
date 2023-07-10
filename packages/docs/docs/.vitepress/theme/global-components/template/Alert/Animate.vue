<template>
  <div class="center">
    <VsButton @click="activeShow = !activeShow">{{
      activeShow ? "Close Alert" : "Show Alert"
    }}</VsButton>
    <VsAlert closable v-model:isShow="activeShow">
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

const activeShow = ref(true);
</script>

<style scoped></style>
