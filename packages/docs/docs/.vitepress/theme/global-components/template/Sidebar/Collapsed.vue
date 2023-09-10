<template>
  <div style="height: 600px">
    <VsSidebar absolute v-model="active" collapsed>
      <VsSidebarItem v-for="item in menuItems" :key="item.id" :id="item.id">
        <template #icon>
          <i :class="item.icon"></i>
        </template>
        {{ item.label }}
      </VsSidebarItem>
      <template #footer>
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
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
import { VsAvatar, VsSidebar, VsSidebarItem } from 'vuesax-ts'

const active = ref('home')

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
