<template>
  <div class="center">
    <VsButton
      flat
      shadow
      @click="
        () => {
          handleClick('bottom-center', undefined, '100%')
        }
      "
      icon
      ><i class="bx bx-border-bottom"></i>
    </VsButton>
    <VsButton
      flat
      @click="
        () => {
          handleClick('bottom-right'), 'primary', 'auto'
        }
      "
      icon
      ><i class="bx bx-border-radius b-r"></i>
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { VsButton, useNotification, Position, Color } from 'vuesax-ts'

const { open, close } = useNotification()

const handleClick = (position?: Position, color?: Color, width?: string) => {
  const setOpen = open({
    title: 'Documentation Vuesax Ts',
    text: 'These documents refer to the latest version of vuesax (4.0+),to see the documents of the previous versions you can do it here 👉 Vuesax3.x',
    position,
    color,
    width
  })
  setTimeout(() => {
    close(setOpen)
  }, 4000)
}
</script>

<style scoped lang="scss">
.vs-button {
  margin: 10px;

  i {
    font-size: 1.4rem;

    &.b-r {
      transform: rotate(90deg);
    }

    &.t-r {
      transform: rotate(0deg);
    }

    &.t-l {
      transform: rotate(-90deg);
    }

    &.b-l {
      transform: rotate(-180deg);
    }
  }
}
</style>
