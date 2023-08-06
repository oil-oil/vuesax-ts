<template>
  <div class="center">
    <VsButton flat :loading="active" @click="handleClick"
      >Open Loading<b>&nbsp;Percent</b></VsButton
    >
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useLoading } from 'vuesax-ts'
import type { VsLoadingProps } from 'vuesax-ts'

const active = ref(false)
const props = reactive<VsLoadingProps>({})

const { open, close } = useLoading(props)
const percent = ref(0)

const handleClick = () => {
  props.percent = `${percent.value}%`
  open()
  active.value = true
  const interval = setInterval(() => {
    if (percent.value < 100) {
      percent.value += 1
      props.percent = `${percent.value}%`
    }
  }, 40)
  setTimeout(() => {
    close()
    active.value = false
    clearInterval(interval)
    percent.value = 0
  }, 4800)
}
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
