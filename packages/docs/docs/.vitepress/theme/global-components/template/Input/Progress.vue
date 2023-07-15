<template>
  <VsInput
    type="password"
    labelPlaceholder="Password"
    v-model="value"
    :visiblePassword="hasVisiblePassword"
    iconAfter
    :progress="getProgress"
    isIconClick
  >
    <template #icon>
      <div
        v-if="!hasVisiblePassword"
        @click="hasVisiblePassword = !hasVisiblePassword"
      >
        <i class="bx bx-show-alt"></i>
      </div>
      <div v-else @click="hasVisiblePassword = !hasVisiblePassword">
        <i class="bx bx-hide"></i>
      </div>
    </template>

    <template v-if="getProgress >= 100" #message-success>
      Secure password
    </template></VsInput
  >
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { VsInput } from "vuesax/src/components";

const value = ref("");
const hasVisiblePassword = ref(false);
const getProgress = computed(() => {
  let progress = 0;

  // at least one number

  if (/\d/.test(value.value)) {
    progress += 20;
  }

  // at least one capital letter

  if (/(.*[A-Z].*)/.test(value.value)) {
    progress += 20;
  }

  // at menons a lowercase

  if (/(.*[a-z].*)/.test(value.value)) {
    progress += 20;
  }

  // more than 5 digits

  if (value.value.length >= 6) {
    progress += 20;
  }

  // at least one special character

  if (/[^A-Za-z0-9]/.test(value.value)) {
    progress += 20;
  }

  return progress;
});
</script>

<style scoped></style>
