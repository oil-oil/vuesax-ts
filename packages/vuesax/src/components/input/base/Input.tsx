/* eslint-disable no-param-reassign */
import {
  InputHTMLAttributes,
  Transition,
  computed,
  defineComponent,
} from "vue";

import { BaseProps } from "@/hooks/useBase";

import "./style.scss";

const Input = defineComponent({
  name: "VsInput",
  props: {
    ...BaseProps,
    value: {
      type: [String, Number],
      default: "",
    },
    labelPlaceholder: {
      default: "",
    },
    label: {
      default: "",
    },
    block: {
      type: Boolean,
      default: false,
    },
    iconAfter: {
      type: Boolean,
      default: false,
    },
    visiblePassword: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    state: {
      type: String,
    },
    progress: {
      type: Number,
    },
    border: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    textWhite: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const id = computed(() => `vs-input--${attrs.id || "id"}`);
    const hasColor = computed(
      () =>
        props.color ||
        props.primary ||
        props.danger ||
        props.success ||
        props.dark ||
        props.warn
    );

    const beforeEnter = (element: Element) => {
      const el = element as HTMLElement;
      el.style.height = "0px";
    };

    const enter = (element: Element, done: () => void) => {
      const el = element as HTMLElement;
      const h = el.scrollHeight;
      el.style.height = `${h - 1}px`;
      done();
    };

    const leave = (element: Element) => {
      const el = element as HTMLElement;
      el.style.minHeight = "0px";
      el.style.height = "0px";
    };

    const getMessage = (type: Status) => (
      <Transition onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave}>
        {!!slots[`message-${type}`] && (
          <div class={["vs-input__message", `vs-input__message--${type}`]}>
            {slots[`message-${type}`]?.()}
          </div>
        )}
      </Transition>
    );

    const loading = <div class="vs-input__loading" />;

    return () => (
      <div
        class={[
          "vs-input-parent",
          { [`vs-input-parent--state-${props.state}`]: !!props.state },
          { "vs-input-parent--border": !!props.border },
          { "vs-input-parent--shadow": !!props.shadow },
          {
            "vs-input-content--has-label":
              props.label || props.labelPlaceholder,
          },
          { block: props.block },
          { transparent: props.transparent },
          { textWhite: props.textWhite },
          { square: props.square },

          // colors
          {
            "vs-component--primary":
              !props.danger &&
              !props.success &&
              !props.warn &&
              !props.dark &&
              !props.color,
          },
          { "vs-component--danger": !!props.danger },
          { "vs-component--warn": !!props.warn },
          { "vs-component--success": !!props.success },
          { "vs-component--dark": !!props.dark },
          { "vs-component--is-color": !!props.color },
        ]}
      >
        {/* input content */}
        <div
          class={[
            "vs-input-content",
            { "vs-input-content--has-color": hasColor.value },
            {
              "vs-input-content--has-label":
                props.label || props.labelPlaceholder,
            },
          ]}
        >
          <input
            value={props.value}
            class={[
              "vs-input",
              { "vs-input--has-icon": slots.icon },
              { "vs-input--has-icon--after": props.iconAfter },
            ]}
            onChange={(e) => {
              emit("input", (e.target as HTMLInputElement)?.value);
            }}
            {...attrs}
            placeholder=""
            id={id.value}
            type={props.visiblePassword ? "text" : (attrs.type as string)}
          />

          {/* placeholder */}
          {props.label && (
            <label
              for={id.value}
              class={[
                "vs-input__label",
                { "vs-input__label--hidden": props.value !== "" },
              ]}
            >
              {attrs.placeholder}
            </label>
          )}

          {/* label */}
          <label
            for={id.value}
            class={[
              "vs-input__label",
              { "vs-input__label--placeholder": props.labelPlaceholder },
              {
                "vs-input__label--hidden":
                  props.value !== "" ||
                  attrs.type === "date" ||
                  attrs.type === "time",
              },
              { "vs-input__label--label": props.label },
            ]}
          >
            {props.label || attrs.placeholder || props.labelPlaceholder}
          </label>

          {/* icon */}
          {slots.icon && (
            <span
              class={[
                "vs-input__icon",
                { "vs-input__icon--after": props.iconAfter },
                { "vs-input__icon--click": !!attrs["click-icon"] },
              ]}
            ></span>
          )}
          {props.loading && loading}

          {/* effect */}
          <div class="vs-input__affects">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} class={`vs-input__affects__${i}`} />
            ))}
          </div>
        </div>

        {/* progress */}
        {typeof props.progress !== "undefined" && (
          <div
            class={[
              "vs-input__progress",
              { "vs-input__progress--danger": props.progress < 33 },
              {
                "vs-input__progress--warn":
                  props.progress < 66 && props.progress > 33,
              },
              { "vs-input__progress--success": props.progress > 66 },
            ]}
          >
            <div
              class="vs-input__progress__bar"
              style={{
                width: `${props.progress}%`,
              }}
            />
          </div>
        )}

        {/* message */}
        {(["success", "warn", "danger", "primary"] as const).map((message) =>
          getMessage(message)
        )}
      </div>
    );
  },
});

export default Input as CompWithAttr<typeof Input, InputHTMLAttributes>;

export type InputProps = InstanceType<typeof Input>["$props"];
