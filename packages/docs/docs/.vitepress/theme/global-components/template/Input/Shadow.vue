<template>
  <div class="center">
    <VsInput shadow placeholder="Name" v-model="value.name"></VsInput>
    <VsInput
      shadow
      placeholder="Password"
      type="password"
      v-model="value.password"
      color="#7d33ff"
    >
      <template #icon>
        <i class="bx bx-lock-open-alt"></i>
      </template>
    </VsInput>
    <VsInput
      shadow
      labelPlaceholder="Address"
      iconAfter
      v-model="value.address"
      warn
    >
      <template #icon>
        <i class="bx bxl-bitcoin"></i>
      </template>
    </VsInput>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { VsInput } from "vuesax-ts";

const value = reactive({
  name: "",
  password: "",
  address: "",
});
</script>

<style scoped>
.vs-input-parent {
  margin: 10px 15px;
}
</style>
