<template>
  <div class="center">
    <VsAlert :color="color">
      <template #title> Vuesax Framework </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a
      <b>UI components framework</b> created with
      <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for
      all types of developed from the frontend lover to the backend that wants
      to easily create your visual approach to the end user
    </VsAlert>
    <div class="flex">
      <VsButton
        :active="color === 'primary'"
        @click="color = 'primary'"
        flat
        color="primary"
        >Primary</VsButton
      >
      <VsButton
        :active="color === 'success'"
        @click="color = 'success'"
        flat
        success
        >Success</VsButton
      >
      <VsButton
        :active="color === 'danger'"
        @click="color = 'danger'"
        flat
        danger
        >Danger</VsButton
      >
      <VsButton
        :active="color === 'warn'"
        @click="color = 'warn'"
        flat
        color="warn"
        >Warn</VsButton
      >
      <VsButton
        :active="color === 'dark'"
        @click="color = 'dark'"
        flat
        color="dark"
        >Dark</VsButton
      >
      <VsButton
        :active="color === '#7d33ff'"
        @click="color = '#7d33ff'"
        flat
        color="#7d33ff"
        >HEX</VsButton
      >
      <VsButton
        :active="color === 'rgb(59, 222, 200)'"
        @click="color = 'rgb(59, 222, 200)'"
        flat
        color="rgb(59, 222, 200)"
        >RGB</VsButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsAlert } from "vuesax-ts";

const color = ref("primary");
</script>

<style scoped>
.flex {
  display: flex;
  justify-items: center;
}

.vs-button--active {
  border-radius: 0 0 12px 12px;
  transform: translateY(-5px);
}
</style>
