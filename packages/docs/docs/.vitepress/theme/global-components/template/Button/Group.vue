<template>
  <div class="center">
    <VsButtonGroup>
      <VsButton :active="active === 0" @click="active = 0"> One </VsButton>
      <VsButton :active="active === 1" @click="active = 1"> Two </VsButton>
      <VsButton :active="active === 2" @click="active = 2"> Three </VsButton>
      <VsButton :active="active === 3" @click="active = 3"> four </VsButton>
    </VsButtonGroup>

    <VsButtonGroup>
      <VsButton flat icon :active="active === 4" @click="active = 4">
        <i class="bx bx-play" />
      </VsButton>
      <VsButton flat icon :active="active === 5" @click="active = 5">
        <i class="bx bx-pause" />
      </VsButton>
      <VsButton flat icon :active="active === 6" @click="active = 6">
        <i class="bx bx-fast-forward" />
      </VsButton>
      <VsButton flat icon :active="active === 7" @click="active = 7">
        <i class="bx bx-shuffle" />
      </VsButton>
    </VsButtonGroup>

    <VsButtonGroup>
      <VsButton border :active="active === 8" @click="active = 8">
        <i class="bx bxs-pencil" /> Edit
      </VsButton>
      <VsButton border icon :active="active === 9" @click="active = 9">
        <i class="bx bx-font-color" />
      </VsButton>
      <VsButton border icon :active="active === 10" @click="active = 10">
        <i class="bx bx-align-middle" />
      </VsButton>
      <VsButton border :active="active === 11" @click="active = 11">
        <i class="bx bx-font-size" /> Font size
      </VsButton>
    </VsButtonGroup>

    <VsButtonGroup>
      <VsButton relief :active="active === 12" @click="active = 12">
        <i class="bx bx-home-alt" /> Home
      </VsButton>
      <VsButton relief :active="active === 13" @click="active = 13">
        <i class="bx bxs-phone-call" /> Contact
      </VsButton>
      <VsButton relief loading :active="active === 14" @click="active = 14">
        <i class="bx bxs-cart-alt" /> Products
      </VsButton>
      <VsButton relief upload :active="active === 15" @click="active = 15">
        <i class="bx bxs-envelope" /> Send
      </VsButton>
    </VsButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);
</script>

<style scoped></style>
