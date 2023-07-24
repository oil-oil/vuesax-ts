<template>
  <div class="center">
    <VsButton
      @click="handleClick"
      :icon="success"
      :upload="sending"
      :color="success ? 'success' : 'primary'"
    >
      <span v-if="!success">
        <i class="bx bx-mail-send" />
        Send
      </span>

      <i class="bx bx-check" v-else />
    </VsButton>

    <VsButton
      :animateInactive="successFace"
      @click="handleClickFace"
      :loading="loadingFace"
      color="facebook"
    >
      <i class="bx bxl-facebook-square" />
      {{ successFace ? "Logout" : "Facebook" }}
      <template #animate> <i class="bx bx-user" /> Login </template>
    </VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VsButton } from "vuesax-ts";

const sending = ref(false);
const success = ref(false);

const loadingFace = ref(false);
const successFace = ref(false);

const handleClick = () => {
  sending.value = true;

  setTimeout(() => {
    sending.value = false;
    success.value = !success.value;
  }, 2000);
};
const handleClickFace = () => {
  loadingFace.value = true;

  setTimeout(() => {
    loadingFace.value = false;
    successFace.value = !successFace.value;
  }, 2000);
};
</script>

<style scoped></style>
