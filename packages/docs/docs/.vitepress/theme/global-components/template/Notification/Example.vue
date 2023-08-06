<template>
  <div class="center">
    <VsButton
      border
      @click="
        () => {
          handleClick(user)
        }
      "
      >Example User</VsButton
    >
    <VsButton
      border
      @click="
        () => {
          handleClick(cookie)
        }
      "
      >Example Cookie</VsButton
    >
    <VsButton
      border
      @click="
        () => {
          handleClick(call)
        }
      "
      >Example Call</VsButton
    >
  </div>
</template>

<script setup lang="ts">
import { Component, h } from 'vue'
import { VsButton, useNotification } from 'vuesax-ts'

import call from './call.vue'
import cookie from './cookie.vue'
import user from './user.vue'

const { open } = useNotification()
const handleClick = (example: Component) => {
  open({
    width: 'auto',
    content: h(example)
  })
}
</script>
