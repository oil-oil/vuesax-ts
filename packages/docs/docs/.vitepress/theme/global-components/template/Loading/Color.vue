<template>
  <div class="center">
    <div class="select-color" :style="{ backgroundColor: `${color}` }">
      <input v-model="color" type="color" />
      <i class="bx bxs-color-fill" />
    </div>
    <div class="content">
      <div class="box-loading" @click="handleClick()">
        <VsLoading style="position: relative" :color="color" />
        <span class="title" :style="{ color: `${color}` }">{{
          "default"
        }}</span>
      </div>
      <div
        v-for="(type, typeIndex) in types"
        :key="typeIndex"
        class="box-loading"
        @click="handleClick(type)"
      >
        <VsLoading :type="type" style="position: relative" :color="color" />
        <span class="title" :style="{ color: `${color}` }">{{ type }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLoading } from "vuesax/src/components";
import type { VsLoadingProps } from "vuesax/src/components";

const color = ref("#D5397B");
const props = reactive<VsLoadingProps>({});

const { open, close } = useLoading(props);

const types = [
  "border",
  "waves",
  "corners",
  "points",
  "square",
  "gradient",
  "rectangle",
  "circles",
  "square-rotate",
  "scale",
] as const;

const handleClick = (type?: VsLoadingProps["type"]) => {
  props.type = type;
  props.color = color.value;
  open();
  setTimeout(() => {
    close();
  }, 3500);
};
</script>

<style scoped lang="scss">
.center {
  display: flex;
  flex-direction: column;
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
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .box-loading {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    user-select: none;
    cursor: pointer;
    transition: all 0.25s ease;
    padding: 20px;
    &:hover {
      box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.17);
      transition: all 0.25s ease;
      transform: translateY(-10px);
    }
    div {
      width: 80px;
      height: 80px;
    }
  }
  .title {
    font-weight: bold;
    font-size: 0.9rem;
    color: rgb(var(--vs-primary));
  }
}
</style>
