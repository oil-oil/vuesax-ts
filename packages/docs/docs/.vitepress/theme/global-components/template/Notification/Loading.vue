<template>
  <div class="center">
    <VsButton
      v-for="(notification, index) in notifications"
      :key="index"
      :color="notification.color"
      @click="
        () => {
          handleClick(notification.position, notification.color);
        }
      "
      icon
      ><i :class="notification.iconClass"></i
    ></VsButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Color, Position, VsButton, useNotification } from "vuesax-ts";

const { open, close } = useNotification();

const notifications = [
  {
    position: "bottom-right",
    color: "primary",
    iconClass: "bx bx-border-radius b-r",
  },
  {
    position: "top-right",
    color: "success",
    iconClass: "bx bx-border-radius t-r",
  },
  {
    position: "top-left",
    color: "danger",
    iconClass: "bx bx-border-radius t-l",
  },
  {
    position: "bottom-left",
    color: "warn",
    iconClass: "bx bx-border-radius b-l",
  },
  {
    position: "bottom-center",
    color: "dark",
    iconClass: "bx bx-border-bottom",
  },
  { position: "top-center", color: "#7d33ff", iconClass: "bx bx-border-top" },
  {
    position: "bottom-right",
    color: "rgb(59, 222, 200)",
    iconClass: "bx bx-border-radius b-r",
  },
] as const;

const isLoading = ref(true);

const handleClick = (position?: Position, color?: Color) => {
  const setOpen = open({
    title: "Documentation Vuesax Ts",
    text: "These documents refer to the latest version of vuesax (4.0+),to see the documents of the previous versions you can do it here 👉 Vuesax3.x",
    loading: isLoading,
    position,
    color,
  });
  setTimeout(() => {
    close(setOpen);
  }, 4000);
};
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
