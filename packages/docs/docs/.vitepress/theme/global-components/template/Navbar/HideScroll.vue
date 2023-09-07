<template>
  <div>
    <VsNavbar v-model="active" hideScroll targetScroll="#hide-scroll-content">
      <VsNavbarItem
        v-for="[key, item] in Object.entries(navbarData)"
        :key="key"
        :id="key"
      >
        {{ item }}
      </VsNavbarItem>
      <template #right>
        <VsButton flat>Login</VsButton>
        <VsButton>Get Started</VsButton>
      </template>
    </VsNavbar>
    <div class="square" id="hide-scroll-content">
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
.square {
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
