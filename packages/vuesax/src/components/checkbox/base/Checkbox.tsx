/* eslint-disable no-param-reassign */
import { InputHTMLAttributes, defineComponent, watch } from "vue";

import VsIconsCheck from "../../../icons/Check";
import "./style.scss";
import { BaseProps } from "@/hooks/useBase";
import { getColor } from "@/utils";

const Checkbox = defineComponent({
  name: "VsCheckbox",
  props: {
    ...BaseProps,
    modelValue: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    lineThrough: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    checkedForce: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    labelBefore: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["icon"],
  emits: ["update:modelValue"],
  setup(props, { attrs, slots, emit }) {
    const checkboxAttrs = attrs as InputHTMLAttributes;
    return () => (
      <>
        <div
          style={{ "--vs-color": props.color ? getColor(props.color) : "" }}
          class={[
            "vs-checkbox-content",
            { "vs-checkbox--checked": props.modelValue },
            { "vs-checkbox--disabled": checkboxAttrs.disabled },
            { "vs-checkbox--loading": props.loading },
            { "vs-checkbox--label-before": props.labelBefore },

            // colors
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
        >
          <div class="vs-checkbox-con">
            <input
              class="vs-checkbox"
              {...attrs}
              type="checkbox"
              id={checkboxAttrs.id}
              checked={props.modelValue}
              onChange={(e) => {
                emit(
                  "update:modelValue",
                  (e.target as HTMLInputElement).checked
                );
              }}
            ></input>
            <div class="vs-checkbox-mask">
              {!slots.icon && (
                <VsIconsCheck
                  indeterminate={props.indeterminate}
                ></VsIconsCheck>
              )}
              {slots.icon?.()}
            </div>
          </div>
          {slots.default && (
            <label
              class={[
                "vs-checkbox-label",
                {
                  lineThrough: props.lineThrough,
                },
              ]}
              for={checkboxAttrs.id}
            >
              {slots?.default()}
            </label>
          )}
        </div>
      </>
    );
  },
});

export default Checkbox as CompWithAttr<typeof Checkbox, InputHTMLAttributes>;

export type InputProps = InstanceType<typeof Checkbox>["$props"];
