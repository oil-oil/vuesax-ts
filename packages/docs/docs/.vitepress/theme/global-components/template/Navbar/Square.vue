<template>
  <div class="container">
    <VsNavbar
      v-model="active"
      square
      background="#7d33ff"
      color="white"
      activeColor="white"
    >
      <VsNavbarItem
        v-for="[key, item] in Object.entries(navbarData)"
        :key="key"
        :id="key"
      >
        {{ item }}
      </VsNavbarItem>
      <template #right>
        <VsButton color="#fff" flat>Login</VsButton>
        <VsButton color="#fff" border style="margin-left: 8px"
          >Get Started</VsButton
        >
      </template>
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
import { VsNavbar, VsNavbarItem, VsButton } from 'vuesax-ts'

const navbarData = {
  guide: 'Guide',
  docs: 'Documents',
  components: 'Components',
  license: 'license'
} as const

const active = ref<keyof typeof navbarData>('guide')
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
