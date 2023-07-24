<template>
  <div class="center">
    <div class="select-color" :style="{ backgroundColor: `${color}` }">
      <input v-model="color" type="color" />
      <i class="bx bxs-color-fill" />
    </div>
    <VsButton flat :loading="active" :color="color" @click="handleClick"
      >Open Loading</VsButton
    >
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLoading } from "vuesax-ts";
import type { VsLoadingProps } from "vuesax-ts";

const color = ref("#7A76CB");
const active = ref(false);
const props = reactive<VsLoadingProps>({});

const { open, close } = useLoading(props);

const handleClick = () => {
  props.background = color.value;
  props.color = "#fff";
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
  .select-color {
    border-radius: 10px;
    border: 4px solid var(--vs-theme-layout);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    &:hover {
      transform: translate(0, -4px);
      box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.1);
    }
    input {
      opacity: 0;
      width: 30px;
      height: 30px;
      border: 0px;
      cursor: pointer;
    }
    i {
      position: absolute;
      color: var(--vs-theme-layout);
      pointer-events: none;
    }
  }
}
</style>
