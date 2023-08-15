<template>
  <div class="center colors">
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="card"
      :style="{
        ...getHoverStyle(vuesaxColor[color], index),
        background: `rgb(${vuesaxColor[color]})`
      }"
      @mouseenter="
        () => {
          isHover.flag = true
          isHover.index = index
        }
      "
      @mouseleave="
        () => {
          isHover.flag = false
          isHover.index = -1
        }
      "
    >
      {{ color }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Color, color as vuesaxColor } from 'vuesax-ts'

const isHover = reactive({ flag: false, index: -1 })
const getHoverStyle = (color: Color[keyof Color], index: number) =>
  isHover.flag && isHover.index === index
    ? {}
    : {
        boxShadow: `0px 20px 35px -10px rgba(${color},0.5)`,
        transform: 'translate(0, -5px)'
      }

const colors = ['primary', 'success', 'danger', 'warn', 'dark'] as const
</script>

<style scoped lang="scss">
@function -color($color, $alpha: 1) {
  @return unquote('rgba(var(--vs-#{$color}), #{$alpha})');
}

.colors {
  padding-bottom: 50px;
  div {
    color: #fff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 10px;
    border-radius: 6px 20px 20px 20px;
    transition: all 0.25s ease;
    cursor: default;
  }
}
</style>
