/* eslint-disable no-param-reassign */
import { Transition, defineComponent, nextTick, ref, watch } from "vue";

import usePagination from "./usePagination.tsx";
import IconClose from "@/icons/Close.tsx";
import IconPlus from "@/icons/Plus.tsx";
import baseProps from "@/utils/baseProps.ts";

const Alert = defineComponent({
  name: "VsAlert",
  props: {
    ...baseProps,
    value: {
      default: true,
    },
    solid: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    relief: {
      type: Boolean,
      default: false,
    },
    hiddenContent: {
      type: Boolean,
      default: null,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: [Number, String],
      default: 0,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots, emit }) {
    console.log("slots: ", slots);
    const rootRef = ref<HTMLElement>();
    const contentRef = ref<HTMLElement>();

    const { getPagesValue, pagination } = usePagination(props.page, (page) =>
      emit("update:page", page)
    );

    watch(
      () => props.page,
      () => {
        const content = contentRef.value as HTMLElement;
        content.style.minHeight = `${content.scrollHeight}px`;

        nextTick(() => {
          const root = rootRef.value as HTMLElement;
          root.style.height = `${root.scrollHeight - 1}px`;
        });
      }
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

    const handleClickClose = () => {
      emit("input", !props.value);
    };

    const handleClickHidden = () => {
      emit("update:hiddenContent", !props.hiddenContent);
    };

    return () => (
      <Transition ref="el">
        {props.value && (
          <div
            class={[
              "vs-alert",
              { [`vs-alert--solid`]: !!props.solid },
              { [`vs-alert--border`]: !!props.border },
              { [`vs-alert--shadow`]: !!props.shadow },
              { [`vs-alert--gradient`]: !!props.gradient },
              { [`vs-alert--flat`]: !!props.flat },
              { [`vs-alert--relief`]: !!props.relief },
              { [`vs-alert--pages`]: getPagesValue.value.length > 0 },

              // colors
              {
                [`vs-component--primary`]:
                  !baseProps.danger &&
                  !baseProps.success &&
                  !baseProps.warn &&
                  !baseProps.dark &&
                  !baseProps.color,
              },
              { [`vs-component--danger`]: !!baseProps.danger },
              { [`vs-component--warn`]: !!baseProps.warn },
              { [`vs-component--success`]: !!baseProps.success },
              { [`vs-component--dark`]: !!baseProps.dark },
            ]}
          >
            {/* icon */}
            {slots.icon && <div class="vs-alert__icon">{slots.icon()}</div>}

            {/* title */}
            {slots.title && (
              <div
                onClick={handleClickHidden}
                class={[
                  "vs-alert__title",
                  {
                    "vs-alert__title--clickHidden":
                      typeof props.hiddenContent === "boolean",
                  },
                ]}
              >
                {slots.title()}
                {!props.closable &&
                  typeof props.hiddenContent === "boolean" && (
                    <IconPlus less={props.hiddenContent}></IconPlus>
                  )}
              </div>
            )}

            {/* content */}
            <Transition
              onBeforeEnter={beforeEnter}
              onEnter={enter}
              onLeave={leave}
            >
              {!props.hiddenContent && (
                <div class="vs-alert__content" ref="content">
                  <div>
                    <div class="alert__content__text" ref="text">
                      {slots.default?.()}
                      {...getPagesValue.value}
                    </div>
                  </div>
                </div>
              )}
            </Transition>

            {/* close button */}
            {props.closable && (
              <button class="vs-alert__close" onClick={handleClickClose}>
                <IconClose hover="less"></IconClose>
              </button>
            )}
            {slots.footer && (
              <div class="vs-alert__footer">{slots.footer?.()}</div>
            )}

            {/* progress */}
            {!!props.progress && (
              <div class="vs-alert__progress">
                <div
                  class="alert__progress__bar"
                  style={{ width: `${props.progress}%` }}
                ></div>
              </div>
            )}

            {/* pagination */}
            {pagination}
          </div>
        )}
      </Transition>
    );
  },
});

export default Alert;
export type AlertProps = InstanceType<typeof Alert>["$props"];
