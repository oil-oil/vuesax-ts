import { computed, onMounted, ref, withDefaults, defineProps } from "vue";

import { getColor } from "../utils/index";

type BaseProps = {
  color: string | null;
  getColor: () => any;
  danger: boolean;
  success: boolean;
  warn: boolean;
  dark: boolean;
  primary: boolean;
  active: boolean;
  componentColor: null | string;
};

const useBaseProps = () => {
  const baseColor = ref<null | string>();

  const baseProps = withDefaults(defineProps<BaseProps>(), {
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
    primary: false,
    active: false,
  });

  const isColorDark = computed(
    () =>
      baseProps.color === "dark" ||
      baseProps.dark ||
      baseProps.componentColor === "dark"
  );

  const isColor = computed(
    () =>
      !!baseProps.color ||
      !!baseProps.primary ||
      !!baseProps.success ||
      !!baseProps.warn ||
      !!baseProps.danger ||
      !!baseProps.dark
  );

  onMounted(() => {
    if (baseProps.color) {
      baseColor.value = getColor(baseProps.color);
    }
  });

  return { baseProps, isColor, isColorDark };
};

export default useBaseProps;
