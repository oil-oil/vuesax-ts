<template>
  <div class="container">
    <VsNavbar
      v-model="active"
      :background="active"
      color="white"
      activeColor="white"
    >
      <VsNavbarItem
        v-for="[key, item] in Object.entries(navbarData)"
        :key="item"
        :id="item"
      >
        {{ key.toUpperCase() }}
      </VsNavbarItem>
    </VsNavbar>
    <div>
      <div class="child">child 1</div>
      <div class="child">child 2</div>
      <div class="child">child 3</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VsNavbar, VsNavbarItem } from 'vuesax-ts'

const navbarData = {
  primary: 'primary',
  success: 'success',
  warn: 'warn',
  dark: 'dark',
  hex: '#7d33ff',
  rgb: 'rgb(59, 222, 200)'
} as const

const active = ref<(typeof navbarData)[keyof typeof navbarData]>('primary')
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  height: 400px;
  width: 100%;
  overflow: auto;

  .child {
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;
  }
}
</style>
