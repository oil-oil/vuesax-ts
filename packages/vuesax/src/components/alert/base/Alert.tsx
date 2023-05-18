/* eslint-disable no-param-reassign */
import {
  Transition,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  toRefs,
  watch,
} from "vue";

import usePagination from "./usePagination.tsx";
import useTransition from "./useTransition.ts";
import IconClose from "@/icons/Close";
import IconPlus from "@/icons/Plus";
import baseProps from "@/utils/baseProps.ts";

import "./style.scss";

const Alert = defineComponent({
  name: "VsAlert",
  props: {
    ...baseProps,
    isShow: {
      type: Boolean,
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
  slots: ["default", "icon", "title"],
  emits: ["update:page", "update:hiddenContent", "input"],
  setup(props, { slots, emit }) {
    const { page } = toRefs(props);
    const rootRef = ref<HTMLElement | null>(null);
    const contentRef = ref<HTMLElement | null>(null);

    const { getPagesValue, pagination } = usePagination({
      page,
      changePage: (newPage: number) => {
        emit("update:page", newPage);
      },
      slots,
    });

    const { enter, beforeEnter, leave } = useTransition();

    /**
     * Set the rootRef height to its actual height - 1px to avoid scrollbars
     */
    const resetRootHeight = () => {
      const root = rootRef.value as HTMLElement;
      if (root && root.style) {
        root.style.height = `${root.scrollHeight - 1}px`;
      }
    };

    /**
     * Set the minimum height of contentRef to its actual height to ensure that the content is fully displayed
     */
    const resetContentHeight = () => {
      const content = contentRef.value as HTMLElement;
      if (content && content.style) {
        content.style.minHeight = `${content.scrollHeight}px`;
      }
    };

    onMounted(() => {
      resetRootHeight();
      resetContentHeight();
    });

    watch(
      () => props.page,
      () => {
        nextTick(() => {
          resetContentHeight();
          resetRootHeight();
        });
      }
    );

    watch(
      () => props.hiddenContent,
      () => {
        if (!props.isShow) {
          return;
        }
        const root = rootRef.value as HTMLElement;
        const content = contentRef.value as HTMLElement;
        if (!props.hiddenContent) {
          root.style.height = "auto";
          setTimeout(() => {
            resetRootHeight();
          }, 250);
        } else {
          root.style.height = `${root.scrollHeight - content.scrollHeight}px`;
        }
      }
    );

    const handleClickClose = () => {
      emit("input", !props.isShow);
    };

    const handleClickHidden = () => {
      emit("update:hiddenContent", !props.hiddenContent);
    };

    return () => (
      <Transition>
        {props.isShow && (
          <div
            ref={rootRef}
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
                <div class="vs-alert__content" ref={contentRef}>
                  <div class="vs-alert__content__text">
                    {slots.default?.()}
                    {...getPagesValue.value}
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
            {!props.hiddenContent && pagination()}
          </div>
        )}
      </Transition>
    );
  },
});

export default Alert;
export type AlertProps = InstanceType<typeof Alert>["$props"];
