<template>
  <div class="center">
    <VsSwitch v-model="loading"> Active loading </VsSwitch>
    <VsSwitch v-model="active2" :loading="loading"> </VsSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsSwitch } from "vuesax-ts";

const active2 = ref(false);
const loading = ref(true);
</script>
