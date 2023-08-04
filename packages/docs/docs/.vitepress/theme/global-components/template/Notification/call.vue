<template>
  <div class="noti-call-example">
    <img src="/woman.jpg" alt="" />
    <footer>
      <VsButton color="dark"><i class="bx bx-video-off"></i></VsButton>
      <VsButton color="success"><i class="bx bxs-phone-call"></i></VsButton>
      <VsButton color="dark"><i class="bx bx-microphone-off"></i></VsButton>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { VsButton } from "vuesax-ts";
</script>

<style scoped lang="scss">
.noti-call-example {
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    margin: -25px;
    height: 100px;
    bottom: 0;
    left: 0;
    z-index: 9998;
    background-image: linear-gradient(180deg, transparent, #000);
  }

  img {
    min-height: 250px;
    max-height: 250px;
    margin: -25px;
    position: relative;
  }

  footer {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 9999;
    margin: 10px;

    .vs-button {
      margin: 0 10px -15px 10px;
    }
  }
}
</style>
