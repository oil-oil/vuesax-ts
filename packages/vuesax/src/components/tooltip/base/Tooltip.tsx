import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  Transition,
} from "vue";

import { BaseProps } from "@/hooks/useBase";
import { getColor, insertBody, setCordsPosition } from "@/utils";

const Tooltip = defineComponent({
  name: "VsToolTip",
  props: {
    ...BaseProps,
    modelValue: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    notHover: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    interactivity: {
      type: Boolean,
      default: false,
    },
    notArrow: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    borderThick: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: null,
    },
  },
  slots: ["default", "tooltip"],
  setup(props, { slots, emit }) {
    const activeTooltip = ref(false);
    const isHoverTooltip = ref(false);
    const contentRef = ref<HTMLElement>();
    const tooltipRef = ref<HTMLElement>();

    const insertTooltip = () => {
      //   const TooltipRef = tooltipRef.value;
      const TooltipRef = document.querySelector(".vs-tooltip") as HTMLElement;
      if (TooltipRef && contentRef.value) {
        insertBody(TooltipRef);

        let position = "top";
        if (props.bottom) {
          position = "bottom";
        } else if (props.left) {
          position = "left";
        } else if (props.right) {
          position = "right";
        }
        setCordsPosition(TooltipRef, contentRef.value, position);
      }
    };

    const handlerMouseEnter = () => {
      if (props.delay) {
        setTimeout(() => {
          activeTooltip.value = true;
          nextTick(() => {
            insertTooltip();
          });
        }, Number(props.delay));
      } else {
        activeTooltip.value = true;
        nextTick(() => {
          insertTooltip();
        });
      }
    };

    const removeTooltip = () => {
      activeTooltip.value = false;
      emit("update:modelValue", false);
    };

    const handleResize = () => {
      let position = "top";
      if (props.bottom) {
        position = "bottom";
      } else if (props.left) {
        position = "left";
      } else if (props.right) {
        position = "right";
      }
      const TooltipRef = tooltipRef.value as HTMLElement;
      const ContentRef = contentRef.value as HTMLElement;
      if (!TooltipRef) {
        return;
      }
      nextTick(() => {
        setCordsPosition(TooltipRef, ContentRef, position);
      });

      for (let index = 0; index < 300; index += 1) {
        setTimeout(() => {
          setCordsPosition(TooltipRef, ContentRef, position);
        });
      }
    };

    const handleMouseDownNotHover = (evt: any) => {
      if (
        !evt.target?.closest(".vs-tooltip") &&
        !evt.target?.closest(".vs-tooltip-content")
      ) {
        removeTooltip();
      }
    };
    watch(
      () => props.modelValue,
      (val: boolean) => {
        activeTooltip.value = val;
        if (val) {
          nextTick(() => {
            insertTooltip();
          });
        }
      }
    );

    onMounted(() => {
      window.addEventListener("popstate", () => {
        const tooltips = document.querySelectorAll(".vs-tooltip");
        tooltips.forEach((tooltip) => {
          tooltip.remove();
        });
      });

      window.addEventListener("resize", handleResize);
      if (props.notHover) {
        window.addEventListener("mousedown", handleMouseDownNotHover);
      }

      window.addEventListener("touchstart", handleMouseDownNotHover);
    });
    onUnmounted(() => {
      activeTooltip.value = false;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleMouseDownNotHover);
      const tooltips = document.querySelectorAll(".vs-tooltip");
      tooltips.forEach((tooltip) => {
        tooltip.remove();
      });
    });

    const tooltip = (
      <div
        ref={tooltipRef}
        style={{ "--vs-color": props.color ? getColor(props.color) : "" }}
        class={[
          "vs-tooltip",
          {
            top: !props.bottom && !props.left && !props.right,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            shadow: props.shadow,
            notArrow: props.notArrow,
            square: props.square,
            circle: props.circle,
            border: props.border,
            borderThick: props.borderThick,
            loading: props.loading,
          },
          // colors
          { "vs-component--primary": props.color === "primary" },
          { "vs-component--danger": props.color === "danger" },
          { "vs-component--warn": props.color === "warn" },
          { "vs-component--success": props.color === "success" },
          { "vs-component--dark": props.color === "dark" },
        ]}
      >
        {slots.tooltip?.()}
        {props.loading && <div class="vs-tooltip__loading"></div>}
      </div>
    );

    return () => (
      <div
        class="vs-tooltip-content"
        ref={contentRef}
        onMouseenter={() => {
          if (!props.notHover) {
            handlerMouseEnter();
          }
        }}
        onMouseleave={() => {
          if (!props.notHover) {
            if (props.interactivity) {
              setTimeout(() => {
                if (!isHoverTooltip.value) {
                  removeTooltip();
                }
              }, 250);
            } else {
              removeTooltip();
            }
          }
        }}
      >
        <Transition name="vs-tooltip">
          {activeTooltip.value && tooltip}
        </Transition>
        {slots.default?.()}
      </div>
    );
  },
});

export default Tooltip;

export type ToolTipProps = InstanceType<typeof Tooltip>["$props"];
