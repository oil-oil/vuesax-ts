<template>
  <div class="center">
    <VsInput placeholder="User name" v-model="name">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
    </VsInput>
    <VsInput
      type="password"
      placeholder="Password"
      iconAfter
      v-model="password"
    >
      <template #icon>
        <i class="bx bx-lock-open-alt"></i>
      </template>
    </VsInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsInput } from 'vuesax-ts'

const name = ref()
const password = ref()
</script>
