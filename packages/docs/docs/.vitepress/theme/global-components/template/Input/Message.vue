<template>
  <div class="center">
    <VsInput placeholder="Email" v-model="email">
      <template #message-success> Email Valid </template></VsInput
    >
    <VsInput placeholder="Name" v-model="name">
      <template #message-danger> Required </template></VsInput
    >
    <VsInput type="password" placeholder="Password" v-model="password">
      <template #message-warn> Insecure password </template></VsInput
    >
    <VsInput
      placeholder="vuesax@gmail.com"
      label="Example Regex Validation"
      v-model="value"
    >
      <template #message-warn v-if="!validEmail || value === ''">
        Email Invalid
      </template>
      <template #message-success v-else-if="validEmail && value !== ''">
        Email Valid
      </template></VsInput
    >
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { VsInput } from 'vuesax-ts'

const email = ref('vuesax@gmail.com')
const name = ref()
const password = ref()
const value = ref()
const validEmail = computed(() =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value.value)
)
</script>

<style scoped lang="scss">
.vs-input-parent {
  margin: 15px 5px;
}
</style>
