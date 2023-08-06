<template>
  <div class="center">
    <VsButton
      @click="
        () => {
          handleClick()
        }
      "
      icon
      border
      ><i class="bx bx-border-radius b-r"></i
    ></VsButton>
    <VsButton
      @click="
        () => {
          handleClick('top-right')
        }
      "
      icon
      border
      ><i class="bx bx-border-radius t-r"></i
    ></VsButton>
    <VsButton
      @click="
        () => {
          handleClick('top-left')
        }
      "
      icon
      border
      ><i class="bx bx-border-radius t-l"></i
    ></VsButton>
    <VsButton
      @click="
        () => {
          handleClick('bottom-left')
        }
      "
      icon
      border
      ><i class="bx bx-border-radius b-l"></i>
    </VsButton>
    <VsButton
      @click="
        () => {
          handleClick('bottom-center')
        }
      "
      icon
      border
      ><i class="bx bx-border-bottom"></i
    ></VsButton>
    <VsButton
      @click="
        () => {
          handleClick('top-center')
        }
      "
      icon
      border
      ><i class="bx bx-border-top"></i
    ></VsButton>
  </div>
</template>

<script setup lang="ts">
import { Position, VsButton, useNotification } from 'vuesax-ts'

const { open, close } = useNotification()
const handleClick = (position?: Position) => {
  const setOpen = open({
    title: 'Documentation Vuesax Ts',
    text: 'These documents refer to the latest version of vuesax (4.0+),to see the documents of the previous versions you can do it here 👉 Vuesax3.x',
    position
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
