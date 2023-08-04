<template>
  <div class="content">
    <div class="flex">
      <p>Email message</p>
      <VsSwitch v-model="active"></VsSwitch>
    </div>
    <div class="flex">
      <p>Change theme</p>
      <VsSwitch v-model="active2">
        <template #circle>
          <i v-if="!active2" class="bx bxs-moon"></i>
          <i v-else class="bx bxs-sun"></i>
        </template>
      </VsSwitch>
    </div>
    <div class="flex">
      <p>Desktop notifications</p>
      <VsSwitch color="warn" v-model="active3">
        <i class="bx bxs-message"></i>
      </VsSwitch>
    </div>
    <div class="flex">
      <p>Type of user</p>
      <VsSwitch v-model="active4">
        <template #on> Admin </template>
        <template #off> Default </template>
      </VsSwitch>
    </div>
    <div class="flex">
      <p>Allow to send test data to improve this product</p>
      <VsSwitch color="success" v-model="active5"
        ><template #off>
          <i class="bx bx-x"></i>
        </template>
        <template #on>
          <i class="bx bx-check"></i>
        </template>
      </VsSwitch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsSwitch } from "vuesax-ts";

const active = ref(true);
const active2 = ref(false);
const active3 = ref(false);
const active4 = ref(true);
const active5 = ref(true);
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  color: var(--vs-theme-color);
  font-size: 0.85rem;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
