<template>
  <div style="height: 600px">
    <VsNavbar v-model="activeNavbar">
      <template #left>
        <VsButton flat @click="visible = !visible" icon>
          <i class="bx bx-menu"></i>
        </VsButton>
      </template>
      <VsNavbarItem
        v-for="[key, item] in Object.entries(navbarData)"
        :key="key"
        :id="key"
      >
        {{ item }}
      </VsNavbarItem>
    </VsNavbar>

    <VsSidebar absolute v-model="activeSidebar" v-model:visible="visible">
      <VsSidebarItem v-for="item in menuItems" :key="item.id" :id="item.id">
        <template #icon>
          <i :class="item.icon"></i>
        </template>
        {{ item.label }}
      </VsSidebarItem>
      <template #footer>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <VsAvatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </VsAvatar>

          <VsAvatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </VsAvatar>
        </div>
      </template>
    </VsSidebar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  VsNavbar,
  VsNavbarItem,
  VsAvatar,
  VsButton,
  VsSidebar,
  VsSidebarItem
} from 'vuesax-ts'

const visible = ref(false)
const activeSidebar = ref('home')
const activeNavbar = ref<keyof typeof navbarData>('guide')

const navbarData = {
  guide: 'Guide',
  docs: 'Documents',
  components: 'Components',
  license: 'license'
} as const

const menuItems = [
  { id: 'home', icon: 'bx bx-home', label: 'Home' },
  { id: 'market', icon: 'bx bx-grid-alt', label: 'Market Overview' },
  { id: 'music', icon: 'bx bxs-music', label: 'Music' },
  { id: 'donate', icon: 'bx bxs-donate-heart', label: 'Donate' },
  { id: 'drink', icon: 'bx bx-drink', label: 'Drink' },
  { id: 'shopping', icon: 'bx bxs-shopping-bags', label: 'Shopping' },
  { id: 'chat', icon: 'bx bx-chat', label: 'Chat' }
]
</script>
