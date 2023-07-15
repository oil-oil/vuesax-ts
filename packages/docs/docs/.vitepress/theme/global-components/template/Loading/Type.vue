<template>
  <div class="center">
    <div class="box-loading" @click="handleClick()">
      <VsLoading style="position: relative" />
      <span class="title">{{ "default" }}</span>
    </div>
    <div
      v-for="(type, typeIndex) in types"
      :key="typeIndex"
      class="box-loading"
      @click="handleClick(type)"
    >
      <VsLoading :type="type" style="position: relative" />
      <span class="title">{{ type }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { VsLoading, useLoading } from "vuesax/src/components";
import type { VsLoadingProps } from "vuesax/src/components";

const selectType = reactive<VsLoadingProps>({});
const { open, close } = useLoading(selectType);
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
  selectType.type = type;
  open();
  setTimeout(() => {
    close();
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
</style>
