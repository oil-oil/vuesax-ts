<template>
  <div class="center">
    <VsRadio v-model="value" value="1" color="primary">
      Yen
      <template #icon>
        <i class="bx bx-yen"></i>
      </template>
    </VsRadio>
    <VsRadio v-model="value" value="2" color="success">
      Won
      <template #icon>
        <i class="bx bx-won"></i>
      </template>
    </VsRadio>
    <VsRadio v-model="value" value="3" color="danger">
      Pound
      <template #icon>
        <i class="bx bx-pound"></i>
      </template>
    </VsRadio>
    <VsRadio v-model="value" value="4" color="warn">
      Euro
      <template #icon>
        <i class="bx bx-euro"></i>
      </template>
    </VsRadio>
    <VsRadio v-model="value" value="5" color="dark">
      Rupee
      <template #icon>
        <i class="bx bx-rupee"></i>
      </template>
    </VsRadio>
    <VsRadio v-model="value" value="6" color="#7d33ff">
      Bitcoin
      <template #icon>
        <i class="bx bx-bitcoin"></i>
      </template>
    </VsRadio>
    <VsRadio v-model="value" value="7" color="rgb( 59, 222, 200)">
      Dollar
      <template #icon>
        <i class="bx bx-dollar"></i>
      </template>
    </VsRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsRadio } from 'vuesax-ts'

const value = ref('')
</script>

<style scoped lang="scss">
.center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .vs-radio-content {
    margin: 5px 0;
  }
}
</style>
