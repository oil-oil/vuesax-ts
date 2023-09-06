<template>
  <div>
    <VsNavbar v-model="active">
      <VsNavbarGroup>
        <template #title> Docs </template>
        <VsNavbarItem
          v-for="[key, item] in Object.entries(docs)"
          :key="key"
          :id="key"
        >
          {{ item }}
        </VsNavbarItem>
      </VsNavbarGroup>

      <VsNavbarGroup>
        <template #title> Ecosystem </template>
        <h5 class="title">Social</h5>

        <VsNavbarItem
          v-for="[key, item] in Object.entries(ecosystem)"
          :key="key"
          :id="key"
        >
          {{ item }}
        </VsNavbarItem>
      </VsNavbarGroup>

      <VsNavbarItem id="license"> License </VsNavbarItem>
      <template #right>
        <VsButton flat>Login</VsButton>
        <VsButton>Get Started</VsButton>
      </template>
    </VsNavbar>
    <div class="square">
      <div class="child">child 1</div>
      <div class="child">child 2</div>
      <div class="child">child 3</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VsNavbar, VsNavbarGroup, VsNavbarItem, VsButton } from 'vuesax-ts'

const docs = { guide: 'Guide', docs: 'Documents', components: 'Components' }
const ecosystem = { github: 'Github', discord: 'Discord', twitter: 'Twitter' }

const active = ref<string>('')
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  margin: 0;
  padding: 5px;
}

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
