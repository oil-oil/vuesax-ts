import {
  PropType,
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
} from "vue";

import "./style.scss";

import { BaseProps } from "@/hooks/useBase";
import IconArrow from "@/icons/Arrow";
import { getColor } from "@/utils";

const Pagination = defineComponent({
  name: "VsPagination",
  props: {
    ...BaseProps,
    modelValue: {
      type: Number,
      default: 1,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Boolean,
      default: false,
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    onlyArrow: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String as PropType<"circle" | "square" | "dotted">,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledItems: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    loadingItems: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    length: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 9,
    },
    dottedNumber: {
      type: Number,
      default: 5,
    },
  },
  slots: ["default"],
  emit: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const innerValue = ref<number>(0);
    const paginationRef = ref<HTMLElement>();
    const activeClassMove = ref<boolean>(false);
    const leftActive = ref<number>(0);

    const buttonArrRef = computed<HTMLElement[]>(() => {
      if (paginationRef.value) {
        return (
          Array.from(paginationRef.value.childNodes) as HTMLElement[]
        ).filter((item) => item.tagName === "BUTTON");
      }
      return [];
    });

    const isDisabledItem = (item: number) =>
      props.disabledItems?.indexOf(item) !== -1;

    const isLoadingItem = (item: number) =>
      props.loadingItems?.indexOf(item) !== -1;

    const resetActivePosition = () => {
      nextTick(() => {
        const activeIndex = buttonArrRef.value.findIndex(
          (item) => Number(item.innerText) === props.modelValue
        );
        const paginationLeftOffset = paginationRef.value?.offsetLeft as number;
        const buttonLeftOffset = buttonArrRef.value[activeIndex].offsetLeft;
        leftActive.value = buttonLeftOffset + paginationLeftOffset;

        setTimeout(() => {
          activeClassMove.value = false;
        }, 300);
      });
    };

    watch(
      () => props.length,
      () => {
        resetActivePosition();
      }
    );

    watch(
      () => props.modelValue,
      (_, preValue) => {
        if (
          isDisabledItem(props.modelValue) ||
          isLoadingItem(props.modelValue)
        ) {
          let value = props.modelValue;
          if (value > preValue) {
            value += 1;
          } else {
            value -= 1;
          }

          if (value > props.length) {
            value = props.infinite ? 1 : preValue;
          } else if (value <= 0) {
            value = props.infinite ? props.length : preValue;
          }

          innerValue.value = value;
        } else {
          innerValue.value = props.modelValue;
          if (paginationRef.value) {
            activeClassMove.value = true;
            resetActivePosition();
          }
        }
      }
    );

    onMounted(() => {
      innerValue.value = props.modelValue;
      resetActivePosition();
    });

    const computedProgress = computed(
      () => (props.modelValue * 100) / props.length
    );

    const renderDotted = (text = "...") => (
      <div
        class={[
          "vs-pagination__dotted",
          {
            next: props.modelValue === props.length ? false : text === "...>",
          },
        ]}
        onClick={() => {
          if (props.modelValue === props.length || text !== "...>") {
            innerValue.value -= props.dottedNumber;
          } else if (text === "...>") {
            innerValue.value += props.dottedNumber;
          }

          if (innerValue.value > props.length) {
            innerValue.value = props.length;
          } else if (innerValue.value < 1) {
            innerValue.value = 1;
          }
          emit("update:modelValue", innerValue.value);
        }}
      >
        <span class="dotted">...</span>
        <span class="con-arrows">
          <IconArrow />
          <IconArrow />
        </span>
      </div>
    );

    const renderButton = (page: number) => (
      <button
        class={[
          "vs-pagination__button",
          {
            active: page === props.modelValue,
            prevActive: page === props.modelValue - 1,
            nextActive: page === props.modelValue + 1,
            disabled: isDisabledItem(page),
            loading: isLoadingItem(page),
          },
        ]}
        onClick={() => {
          emit("update:modelValue", page);
        }}
      >
        {props.shape === "dotted" ? null : page}
      </button>
    );

    const renderButtons = (array: ("...>" | "<..." | number)[]) => {
      const buttons: JSX.Element[] = [];

      array.forEach((item) => {
        if (item === "...>" || item === "<...") {
          buttons.push(renderDotted(item));
        } else {
          buttons.push(renderButton(item));
        }
      });

      return buttons;
    };

    const getButtons = (start = 1, end = 6) => {
      const buttons: number[] = [];
      Array.from({ length: end - start + 1 }).forEach((_, index) => {
        buttons.push(start + index);
      });

      return buttons;
    };

    const getPages = computed(() => {
      const length = Number(props.length);
      const even = props.max % 2 === 0 ? 1 : 0;
      const prevRange = Math.floor(props.max / 2);
      const nextRange = length - prevRange + 1 + even;

      if (
        props.modelValue >= prevRange &&
        props.modelValue <= nextRange &&
        props.shape !== "dotted"
      ) {
        const start = props.modelValue - prevRange + 2;
        const end = props.modelValue + prevRange - 2 - even;

        return renderButtons([
          1,
          "<...",
          ...getButtons(start, end),
          "...>",
          props.length,
        ]);
      }
      if (props.shape !== "dotted" && props.length > 6) {
        return renderButtons([
          ...getButtons(1, prevRange),
          "...>",
          ...getButtons(nextRange, length),
        ]);
      }
      if (props.shape === "dotted" || props.length <= 6) {
        return renderButtons([
          ...getButtons(1, props.length === 0 ? 1 : props.length),
        ]);
      }

      return [];
    });

    return () => (
      <div
        class={[
          "vs-pagination-content",
          {
            buttonsDotted: props.shape === "dotted",
            circle: props.shape === "circle",
            square: props.shape === "square",
            disabled: props.disabled,
            noMargin: props.noMargin,
            "vs-component--primary":
              !props.danger &&
              !props.success &&
              !props.warn &&
              !props.dark &&
              !props.color,
            "vs-component--danger": !!props.danger,
            "vs-component--warn": !!props.warn,
            "vs-component--success": !!props.success,
            "vs-component--dark": !!props.dark,
          },
        ]}
        style={{ "--vs-color": props.color ? getColor(props.color) : "" }}
      >
        {!props.onlyArrow && !slots.default?.() && (
          <div
            class={["vs-pagination__active", { move: activeClassMove.value }]}
            style={{ left: `${leftActive.value}px` }}
          >
            {props.shape === "dotted" ? "" : props.modelValue}
          </div>
        )}

        {/* prev button */}
        {props.showArrow && (
          <button
            class="vs-pagination__arrow prev"
            disabled={props.infinite ? false : props.modelValue <= 1}
            onClick={() => {
              if (innerValue.value > 0) {
                emit("update:modelValue", innerValue);
              } else if (props.infinite) {
                emit("update:modelValue", props.length);
              }
            }}
          >
            {slots.arrowPrev ? slots.arrowPrev : <IconArrow />}
          </button>
        )}

        {slots.default && (
          <div class="vs-pagination__slot">{slots.default?.()}</div>
        )}

        {!props.onlyArrow && !slots.default?.() && (
          <div class="vs-pagination" ref={paginationRef}>
            {getPages.value}
          </div>
        )}

        {/* next button */}
        {props.showArrow && (
          <button
            class="vs-pagination__arrow next"
            disabled={props.infinite ? false : props.modelValue >= props.length}
            onClick={() => {
              innerValue.value += 1;
              if (innerValue.value <= props.length) {
                emit("update:modelValue", innerValue.value);
              } else {
                emit("update:modelValue", 1);
              }
            }}
          >
            {slots.arrowNext ? slots.arrowNext() : <IconArrow />}
          </button>
        )}

        {props.progress && (
          <div class="vs-pagination__progress">
            <div class="progress" style={{ width: computedProgress.value }} />
          </div>
        )}
      </div>
    );
  },
});

export default Pagination;

export type InputProps = InstanceType<typeof Pagination>["$props"];
