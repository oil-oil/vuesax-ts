<template>
  <div style="height: 600px">
    <VsSidebar absolute v-model="active">
      <div v-for="(item, index) in menuItems" :key="item.id">
        <VsSidebarGroup v-if="item.group">
          <template #title>
            <VsSidebarItem :id="item.id" arrow>
              <template #icon>
                <i :class="item.icon"></i>
              </template>
              {{ item.label }}
            </VsSidebarItem>
          </template>
          <VsSidebarItem
            v-for="(groupItem, groupKey) in menuItems[index].group"
            :id="groupItem.id"
            :key="groupKey"
          >
            <template #icon>
              <i :class="groupItem?.icon"></i>
            </template>
            {{ groupItem?.label }}
          </VsSidebarItem>
        </VsSidebarGroup>

        <VsSidebarItem :id="item.id" v-else>
          <template #icon>
            <i :class="item.icon"></i>
          </template>
          {{ item.label }}
        </VsSidebarItem>
      </div>

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
import { VsAvatar, VsSidebar, VsSidebarItem, VsSidebarGroup } from 'vuesax-ts'

const active = ref('home')

const menuItems = [
  { id: 'home', icon: 'bx bx-home', label: 'Home' },
  { id: 'market', icon: 'bx bx-grid-alt', label: 'Market Overview' },
  { id: 'music', icon: 'bx bxs-music', label: 'Music' },
  {
    icon: 'bx bx-group',
    label: 'Social media',
    group: [
      { id: 'instagram', icon: 'bx bxl-instagram', label: 'Instagram' },
      { id: 'twitter', icon: 'bx bxl-twitter', label: 'Twitter' },
      { id: 'facebook', icon: 'bx bxl-facebook', label: 'Facebook' }
    ]
  },
  { id: 'donate', icon: 'bx bxs-donate-heart', label: 'Donate' },
  { id: 'drink', icon: 'bx bx-drink', label: 'Drink' },
  { id: 'shopping', icon: 'bx bxs-shopping-bags', label: 'Shopping' },
  { id: 'chat', icon: 'bx bx-chat', label: 'Chat' }
]
</script>
