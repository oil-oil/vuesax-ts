<template>
  <div class="center">
    <VsRadio v-model="value" value="1" color="primary">Primary</VsRadio>
    <VsRadio v-model="value" value="2" color="success">Success</VsRadio>
    <VsRadio v-model="value" value="3" color="danger">Danger</VsRadio>
    <VsRadio v-model="value" value="4" color="warn">Warn</VsRadio>
    <VsRadio v-model="value" value="5" color="dark">Dark</VsRadio>
    <VsRadio v-model="value" value="6" color="#7d33ff">HEX</VsRadio>
    <VsRadio v-model="value" value="7" color="rgb( 59, 222, 200)">RGB</VsRadio>
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
