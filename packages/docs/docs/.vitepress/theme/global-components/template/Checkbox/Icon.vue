<template>
  <div class="content">
    <VsCheckbox v-model="option1">
      <template #icon>
        <i class="bx bx-check"></i>
      </template>
    </VsCheckbox>
    <VsCheckbox color="success" v-model="option2">
      <template #icon>
        <i class="bx bx-check-double"></i>
      </template>
    </VsCheckbox>
    <VsCheckbox color="danger" v-model="option3">
      <template #icon>
        <i class="bx bx-x"></i>
      </template>
    </VsCheckbox>
    <VsCheckbox color="warn" v-model="option4">
      <template #icon>
        <i class="bx bxs-shield"></i>
      </template>
    </VsCheckbox>
    <VsCheckbox color="dark" v-model="option5">
      <template #icon>
        <i class="bx bxs-heart"></i>
      </template>
    </VsCheckbox>
    <VsCheckbox color="#7d33ff" v-model="option6">
      <template #icon>
        <i class="bx bx-brightness"></i>
      </template>
    </VsCheckbox>
    <VsCheckbox color="rgb(59, 222, 200)" v-model="option7">
      <template #icon>
        <i class="bx bxs-paint"></i>
      </template>
    </VsCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsCheckbox } from "vuesax-ts";

const option1 = ref(false);
const option2 = ref(false);
const option3 = ref(false);
const option4 = ref(false);
const option5 = ref(false);
const option6 = ref(false);
const option7 = ref(false);
</script>

<style scoped>
.content {
  display: flex;
}
</style>
