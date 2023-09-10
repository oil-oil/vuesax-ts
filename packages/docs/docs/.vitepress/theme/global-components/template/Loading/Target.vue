<template>
  <div class="center">
    <div class="button-div">
      <VsButton border :loading="active" @click="handleClick"
        >Open Loading<b>&nbsp;Target</b></VsButton
      >
    </div>
    <div ref="contentRef" class="content-div">
      <span>I am the container</span>
      <span>of the</span>
      <b>loading</b>
      <VsLoading :visible="visible"></VsLoading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsLoading, VsButton } from 'vuesax-ts'

const active = ref(false)
const visible = ref(false)

const handleClick = () => {
  visible.value = true
  active.value = true
  setTimeout(() => {
    visible.value = false
    active.value = false
  }, 3500)
}
</script>

<style scoped lang="scss">
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
  .button-div {
    display: flex;
    justify-items: center;
  }
  .content-div {
    position: relative;
    font-size: 0.85rem;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 25px -10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 150px;
    border-radius: 20px;
  }
}
</style>
