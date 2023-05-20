import { computed, onMounted, ref } from "vue";

import { getColor } from "../utils";

export const BaseProps = {
  color: {
    type: String,
    default: null,
  },
  danger: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  warn: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  componentColor: {
    type: String,
    default: null,
  },
};

type BasePropsType = {
  [Key in keyof typeof BaseProps]: ReturnType<
    InstanceType<(typeof BaseProps)[Key]["type"]>["valueOf"]
  >;
} & { [key in string]: any };

const useBaseProps = (baseProps: BasePropsType) => {
  const baseColor = ref<null | string>();

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
