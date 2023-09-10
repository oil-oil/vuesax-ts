<template>
  <div style="height: 600px">
    <VsSidebar absolute v-model="active" hoverExpand>
      <VsSidebarItem v-for="item in menuItems" :key="item.id" :id="item.id">
        <template #icon>
          <i :class="item.icon"></i>
        </template>
        {{ item.label }}
      </VsSidebarItem>
    </VsSidebar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsSidebar, VsSidebarItem } from 'vuesax-ts'

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
