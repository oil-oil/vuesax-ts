import {
  ref,
  createApp,
  onMounted,
  onUnmounted,
  App,
  computed,
  watch,
} from "vue";

import Loading, { LoadingProps } from "./Loading";

type LoadingHookProps = Omit<LoadingProps, "isVisible">;

const useLoading = (props: LoadingHookProps | null) => {
  const isVisible = ref(false);

  const LoadingDom = document.createElement("div");

  const app = computed(() =>
    createApp(Loading, {
      ...props,
      isVisible: isVisible.value,
    })
  );

  const mountLoading = () => {
    app.value.mount(LoadingDom);
    document.body.appendChild(LoadingDom);
    document.body.style.overflowY = "hidden";
  };

  const unMountLoading = () => {
    app.value.unmount();
    document.body.removeChild(LoadingDom);
    document.body.style.overflowY = "auto";
  };

  watch(isVisible, () => {
    if (isVisible.value) {
      mountLoading();
    } else {
      unMountLoading();
    }
  });

  onMounted(() => {
    mountLoading();
  });

  onUnmounted(() => {
    unMountLoading();
  });

  const open = () => {
    isVisible.value = true;
  };

  const close = () => {
    isVisible.value = false;
  };

  return { open, close };
};

export default useLoading;
