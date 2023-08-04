<template>
  <div class="center">
    <VsSwitch indeterminate v-model="active"></VsSwitch>
    <VsSwitch indeterminate v-model="active2"></VsSwitch>
    <VsSwitch indeterminate v-model="active3" disable></VsSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsSwitch } from "vuesax-ts";

const active = ref(false);
const active2 = ref(true);
const active3 = ref(false);
</script>
