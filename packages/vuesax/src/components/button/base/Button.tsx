import { PropType, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { Size } from "@/types/size";
import baseProps from "@/utils/baseProps";
import ripple, { rippleCut, rippleReverse } from "@/utils/ripple/index";

const Button = defineComponent({
  name: "VsButton",
  props: {
    ...baseProps,
    disabled: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: String,
      default: "",
    },
    activeDisabled: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
    relief: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    floating: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<Size>,
      default: "md",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    upload: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    animationType: {
      type: String,
      default: "",
    },
    animateInactive: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    blank: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["default", "animate"],
  emits: ["click"],
  setup(props, { slots, attrs, emit }) {
    const buttonRef = ref<Element>();
    const router = useRouter();

    const animateSlot = (
      <div
        class={[
          "vs-button__animate",
          {
            [`vs-button__animate--${props?.animationType}`]:
              props?.animationType,
          },
        ]}
      ></div>
    );

    const loadingElement = <div class="vs-button__loading"></div>;

    const buttonClass = [
      "vs-button",
      `vs-button--size-${props.size}`,
      { [`vs-button--${props.componentColor}`]: props.componentColor },
      { "vs-button--fff": props.color === "#fff" },
      { "vs-button--active": props.active },
      { "vs-button--active-disabled": props.activeDisabled },
      { "vs-button--icon": props.icon },
      { "vs-button--circle": props.circle },
      { "vs-button--square": props.square },
      { "vs-button--loading": props.loading },
      { "vs-button--upload": props.upload },
      { "vs-button--block": props.block },
      { "vs-button--animate": slots.animate },
      { [`vs-button--animate-${props.animationType}`]: props.animationType },
      { "vs-button--animate-inactive": props.animateInactive },
      {
        "vs-button--primary":
          !props.danger &&
          !props.success &&
          !props.warn &&
          !props.dark &&
          !props.color,
      },
      { "vs-button--danger": props.danger },
      { "vs-button--warn": props.warn },
      { "vs-button--success": props.success },
      { "vs-button--dark": props.dark },
      {
        "vs-button--default":
          !props.flat &&
          !props.border &&
          !props.gradient &&
          !props.relief &&
          !props.transparent &&
          !props.shadow &&
          !props.floating,
      },
      { "vs-button--flat": props.flat },
      { "vs-button--border": props.border },
      { "vs-button--gradient": props.gradient },
      { "vs-button--relief": props.relief },
      { "vs-button--transparent": props.transparent },
      { "vs-button--shadow": props.shadow },
      { "vs-button--floating": props.floating },
    ];

    const handleMouseDown = (evt: MouseEvent) => {
      if (props.ripple === "reverse") {
        rippleReverse(evt);
      } else if (props.ripple === "cut") {
        rippleCut(evt);
      } else if (props.flat) {
        ripple(
          evt,
          (props.componentColor || props.color || "primary") &&
            !props.active &&
            document.activeElement !== buttonRef.value
            ? "inherit"
            : null,
          props.flat &&
            !props.active &&
            document.activeElement !== buttonRef.value
        );
      } else {
        ripple(evt, null, false);
      }
    };

    const onClick = (evt: MouseEvent) => {
      if (props.to) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, (props.blank && "_blank") || "_self");
      }
      emit("click", evt);
    };

    return () => (
      <button
        {...attrs}
        class={buttonClass}
        style={{ "--vs-color": props.color ? props.getColor(props.color) : "" }}
        onMousedown={(e) => handleMouseDown(e)}
        onClick={onClick}
        disabled={props.disabled}
        ref="buttonRef"
      >
        <div class="vs-button__content">{slots.default?.()}</div>
        {slots.animate?.() && animateSlot}
        {props.loading && loadingElement}
      </button>
    );
  },
});

export default Button;

export type ButtonProps = InstanceType<typeof Button>["$props"];
