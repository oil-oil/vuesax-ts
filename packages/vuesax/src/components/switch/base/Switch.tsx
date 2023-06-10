/* eslint-disable no-param-reassign */
import { InputHTMLAttributes, defineComponent, ref, watch } from "vue";

import "./style.scss";
import { BaseProps } from "@/hooks/useBase";
import { getColor } from "@/utils";

const Switch = defineComponent({
  name: "VsSwitch",
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
    square: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["circle", "on", "off"],
  emits: ["update:modelValue"],
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={[
          "vs-switch",
          {
            "vs-switch--loading": props.loading,
            "vs-switch--square": props.square,
            "vs-switch--indeterminate": props.indeterminate,
            "vs-switch--icon": props.icon,
          },
          {
            [`vs-component--primary`]:
              !props.danger &&
              !props.success &&
              !props.warn &&
              !props.dark &&
              !props.color,
          },
          { [`vs-component--danger`]: !!props.danger },
          { [`vs-component--warn`]: !!props.warn },
          { [`vs-component--success`]: !!props.success },
          { [`vs-component--dark`]: !!props.dark },
        ]}
        style={{ "--vs-color": props.color ? getColor(props.color) : "" }}
      >
        <input
          type="checkbox"
          checked={props.modelValue}
          onChange={(e) => {
            emit("update:modelValue", (e.target as HTMLInputElement).checked);
          }}
          class="vs-switch__input"
          {...attrs}
        ></input>
        <div class="vs-switch__circle">{slots.circle?.()}</div>
        <div class="vs-switch__text on">
          {slots.on?.() || slots.default?.()}
        </div>
        <div class="vs-switch__text off">
          {slots.off?.() || slots.default?.()}
        </div>

        <div class="vs-switch__background"></div>
      </div>
    );
  },
});

export default Switch as CompWithAttr<typeof Switch, InputHTMLAttributes>;

export type InputProps = InstanceType<typeof Switch>["$props"];
