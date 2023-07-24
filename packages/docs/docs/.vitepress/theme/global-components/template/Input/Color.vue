<template>
  <div class="center">
    <VsInput primary placeholder="Primary" v-model="value"></VsInput>
    <VsInput success placeholder="Success Icon" v-model="value">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
    </VsInput>
    <VsInput danger iconAfter placeholder="Danger Icon After" v-model="value">
      <template #icon>
        <i class="bx bx-mail-send"></i>
      </template>
    </VsInput>
    <VsInput
      danger
      label="Warn"
      placeholder="Label Warn"
      v-model="value"
    ></VsInput>
    <VsInput dark labelPlaceholder="Dark" v-model="value"></VsInput>
    <VsInput color="#7d33ff" labelPlaceholder="HEX" v-model="value"></VsInput>
    <VsInput
      color="rgb(59,222,200)"
      labelPlaceholder="RGB"
      v-model="value"
    ></VsInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsInput } from "vuesax-ts";

const value = ref();
</script>

<style scoped lang="scss">
.vs-input-parent {
  margin: 10px 5px;
}
</style>
