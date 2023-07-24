<template>
  <div class="center">
    <VsButton flat :loading="active" @click="handleClick"
      >Open Loading<b>&nbsp;Progress</b></VsButton
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
const progress = ref(0);

const handleClick = () => {
  open();
  active.value = true;

  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1;
      props.progress = progress.value;
    }
  }, 40);
  setTimeout(() => {
    close();
    active.value = false;
    clearInterval(interval);
    progress.value = 0;
  }, 4100);
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
