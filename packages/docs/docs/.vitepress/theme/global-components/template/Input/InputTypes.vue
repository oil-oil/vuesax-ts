<template>
  <div class="center">
    <VsInput label="Text" type="text" v-model="value.text"></VsInput>
    <VsInput
      label="Password"
      type="password"
      v-model="value.password"
    ></VsInput>
    <VsInput label="Search" type="search" v-model="value.search"></VsInput>
    <VsInput label="Number" type="number" v-model="value.number"></VsInput>
    <VsInput label="Url" type="url" v-model="value.url"></VsInput>
    <VsInput label="time" type="time" v-model="value.time"></VsInput>
    <VsInput label="date" type="date" v-model="value.date"></VsInput>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { VsInput } from "vuesax-ts";

const value = reactive({
  text: "",
  password: "",
  search: "",
  number: "",
  url: "",
  time: "",
  date: "",
});
</script>

<style scoped lang="scss">
.vs-input-parent {
  margin: 10px 5px;
}
</style>
