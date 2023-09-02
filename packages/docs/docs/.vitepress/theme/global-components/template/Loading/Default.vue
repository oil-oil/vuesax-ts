<template>
  <div class="center">
    <VsButton :loading="active" @click="handleClick()">Open Loading</VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsButton, useLoading } from 'vuesax-ts'

const active = ref(false)
const { open, close } = useLoading()

const handleClick = () => {
  open()
  active.value = true
  setTimeout(() => {
    close()
    active.value = false
  }, 350000)
}
</script>
