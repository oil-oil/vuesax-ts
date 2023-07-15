<template>
  <div class="center">
    <VsInput
      primary
      placeholder="Primary"
      state="primary"
      v-model="value"
    ></VsInput>
    <VsInput success placeholder="Success Icon" state="success" v-model="value">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
    </VsInput>
    <VsInput
      danger
      iconAfter
      placeholder="Danger Icon After"
      state="danger"
      v-model="value"
    >
      <template #icon>
        <i class="bx bx-mail-send"></i>
      </template>
    </VsInput>
    <VsInput
      warn
      state="warn"
      label="Warn"
      placeholder="Label Warn"
      v-model="value"
    ></VsInput>
    <VsInput
      dark
      state="dark"
      labelPlaceholder="Dark"
      v-model="value"
    ></VsInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsInput } from "vuesax/src/components";

const value = ref();
</script>

<style scoped lang="scss">
.vs-input-parent {
  margin: 10px 5px;
}
</style>
