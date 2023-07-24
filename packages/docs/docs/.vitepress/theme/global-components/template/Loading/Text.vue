<template>
  <div class="center">
    <VsButton flat :loading="active" @click="handleClick"
      >Open Loading<b>&nbsp;Text</b></VsButton
    >
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLoading } from "vuesax-ts";
import type { VsLoadingProps } from "vuesax-ts";

const active = ref(false);
const props = reactive<VsLoadingProps>({});

const { open, close } = useLoading(props);

const handleClick = () => {
  props.text = "Loading...";
  open();
  active.value = true;
  setTimeout(() => {
    close();
    active.value = false;
  }, 3500);
};
</script>

<style scoped lang="scss">
.center {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
