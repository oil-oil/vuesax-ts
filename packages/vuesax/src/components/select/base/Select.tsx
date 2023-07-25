import { nanoid } from "nanoid/non-secure";
import {
  InputHTMLAttributes,
  PropType,
  Transition,
  VNode,
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  toRef,
  watch,
} from "vue";

import { beforeEnter, enter, leave } from "./transition";
import { Option, SelectProvider } from "../types";
import useBaseProps, { BaseProps } from "@/hooks/useBase";
import IconArrow from "@/icons/Arrow";
import IconClose from "@/icons/Close";
import { getColor, insertBody, removeBody, setCords } from "@/utils";
import "./style.scss";

const Select = defineComponent({
  name: "VsSelect",
  props: {
    ...BaseProps,
    modelValue: {
      type: [Array, String] as PropType<string[] | string>,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    labelPlaceholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    collapseChips: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "blur", "focus"],
  slots: ["default", "noData"],
  setup(props, { slots, attrs, emit }) {
    const selectAttrs = attrs as InputHTMLAttributes;
    const uniqueId = selectAttrs?.id || nanoid();

    const optionRef = ref<HTMLElement>();
    const selectRef = ref<HTMLElement>();
    const chipsRef = ref<HTMLElement>();
    const inputRef = ref<HTMLElement>();
    const chipsInputRef = ref<HTMLElement>();
    const placeholderRef = ref<HTMLElement>();
    const contentRef = ref<HTMLElement>();

    const uids = ref<string[]>([]);
    const valueLabel = ref<{ label: string; value: string }[] | string>();
    const isOptionsShow = ref(false);
    const hoverOption = ref(-1);
    const childOptions = ref<Option[]>([]);
    const isFilterActive = ref(false);
    const textFilter = ref("");
    const targetSelect = ref(false);
    const isInputHover = ref(false);
    const targetClose = ref(false);

    const { isColorDark } = useBaseProps(props);

    const insertOptions = () => {
      const options = optionRef.value as HTMLElement;
      const selects = selectRef.value as HTMLElement;

      insertBody(options, document.body);
      setCords(options, selects);
    };

    const setHover = () => {
      let index = -1;
      childOptions.value.forEach((item, i) => {
        if (item.value === (props.modelValue as string)) {
          index = i;
        }
      });

      hoverOption.value = index;
    };

    const getValue = () => {
      if (props.modelValue) {
        const filterOptions = childOptions.value.filter((option) =>
          typeof props.modelValue === "number"
            ? props.modelValue === option.value
            : props.modelValue?.indexOf(option.value) !== -1
        );

        const label: { label: string; value: string }[] = [];
        filterOptions.forEach((item) => {
          label.push({
            label: item.label,
            value: item.value,
          });
        });

        label.sort(
          (a, b) =>
            props.modelValue!.indexOf(a.value) -
            props.modelValue!.indexOf(b.value)
        );
        valueLabel.value = label;
      }
    };

    const computedValueLabel = computed(() => {
      if (Array.isArray(valueLabel.value)) {
        return valueLabel.value.map((item) => item.label);
      }
      return valueLabel.value;
    });

    const handleBlur = () => {
      nextTick(() => {
        isOptionsShow.value = false;
      });
      emit("blur");
      setHover();
      if (isOptionsShow.value) {
        textFilter.value = "";
        if (!props.multiple) {
          isFilterActive.value = false;
        }
      }
    };

    const handleWindowClick = (evt: Event) => {
      if (!isInputHover.value) {
        handleBlur();
      }

      if (props.filter && !isOptionsShow.value) {
        isFilterActive.value = false;
      }

      if (
        evt.target === inputRef.value &&
        isOptionsShow.value &&
        !props.filter
      ) {
        handleBlur();
        setTimeout(() => {
          (inputRef.value as HTMLElement).blur();
        }, 100);
      }
    };

    const onClickOption = (value: string | null, label: string) => {
      let newValue;
      const oldValue = props.modelValue || [];
      if (props.multiple && value) {
        const index = props.modelValue?.indexOf(value);
        if (index === -1) {
          newValue = [...oldValue, value];
        } else {
          newValue = [...oldValue].filter((_, i) => i !== index);
        }
      } else {
        newValue = value;
        valueLabel.value = label;
      }

      emit("update:modelValue", newValue);

      setTimeout(() => {
        if (props.multiple && isOptionsShow.value) {
          (chipsRef.value as HTMLElement).focus();
        }
      }, 10);
      if (!props.multiple) {
        handleBlur();
      }
    };

    const chips = computed(() => {
      const chip = (
        item: { value: string | null; label: string },
        isCollapse: boolean
      ): VNode => (
        <span
          class={["vs-select__chips__chip", { isCollapse }]}
          data-value={item.value}
        >
          {item.label}
          {!isCollapse && (
            <span
              class="vs-select__chips__chip__close"
              onClick={() => {
                setTimeout(() => {
                  targetClose.value = false;
                }, 100);
                if (!isOptionsShow.value) {
                  (chipsRef.value as HTMLElement).blur();
                  if (props.filter) {
                    (chipsInputRef.value as HTMLElement).blur();
                  }
                }
                onClickOption(item.value, item.label);
              }}
            >
              <IconClose hover="less" />
            </span>
          )}
        </span>
      );

      let tempChips: VNode[] = [];

      if (Array.isArray(valueLabel.value)) {
        valueLabel.value.forEach((item) => {
          tempChips.push(chip(item, false));
        });
      }

      if (props.collapseChips && tempChips.length > 1) {
        tempChips = [
          tempChips[0],
          chip({ label: `+${tempChips.length - 1}`, value: null }, true),
        ];
      }

      return tempChips;
    });

    const onBlur = (evt: FocusEvent) => {
      if (!props.multiple) {
        handleBlur();
      } else if (!evt.relatedTarget) {
        handleBlur();
      } else if (
        !isInputHover.value ||
        (!targetSelect.value && !isOptionsShow.value)
      ) {
        handleBlur();
      }
      if (props.filter) {
        isFilterActive.value = false;
      }
    };

    const handleKeydown = (evt: KeyboardEvent) => {
      const options = optionRef.value as HTMLElement;
      Array.from({ length: 300 }).forEach((_, index) => {
        setTimeout(() => {
          setCords(options, selectRef.value as HTMLElement);
        }, index);
      });

      if (evt.code === "ArrowDown") {
        evt.preventDefault();
        if (hoverOption.value < childOptions.value.length - 1) {
          hoverOption.value += 1;
        } else {
          hoverOption.value = 0;
        }
      } else if (evt.code === "ArrowUp") {
        evt.preventDefault();

        if (hoverOption.value > 0) {
          hoverOption.value -= 1;
        } else {
          hoverOption.value = childOptions.value.length - 1;
        }
      } else if (evt.code === "Enter") {
        evt.preventDefault();
        if (hoverOption.value !== -1) {
          if (!childOptions.value[hoverOption.value].disabled) {
            onClickOption(
              childOptions.value[hoverOption.value].value,
              childOptions.value[hoverOption.value].label
            );
            if (!props.multiple) {
              handleBlur();
              (inputRef.value as HTMLElement).blur();
            }
          }
        }
      }

      if (hoverOption.value !== -1) {
        (contentRef.value as HTMLElement).scrollTop =
          childOptions.value[hoverOption.value].el.offsetTop - 66;
      }
    };

    const isNoData = computed(
      () =>
        childOptions.value.filter(
          (option) => !option.hiddenOptionGroup || !option.hiddenOption
        ).length === 0
    );

    const handleResize = () => {
      if (optionRef.value) {
        nextTick(() => {
          setCords(optionRef.value!, selectRef.value!);
        });

        Array.from({ length: 300 }).forEach((_, index) => {
          setTimeout(() => {
            setCords(optionRef.value!, selectRef.value!);
          }, index);
        });
      }
    };

    const handleScroll = () => {
      if (optionRef.value) {
        setCords(optionRef.value!, selectRef.value!);
      }
    };

    const getMessage = (type: string) => (
      <Transition onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave}>
        {!!slots[`message-${type}`] && (
          <div class={["vs-select__message", `vs-select__message--${type}`]}>
            {slots[`message-${type}`]?.()}
          </div>
        )}
      </Transition>
    );

    const resetPlaceholderTransition = () => {
      if (placeholderRef.value) {
        (placeholderRef.value as HTMLElement).style.transition =
          textFilter.value ? "0s" : "";
      }
    };

    watch(textFilter, () => {
      resetPlaceholderTransition();
    });

    watch(
      () => props.modelValue,
      () => {
        getValue();
        setTimeout(() => {
          emit("update:modelValue", props.modelValue);
        }, 10);

        if (props.multiple) {
          nextTick(() => {
            const height = chipsRef.value?.scrollHeight;
            inputRef.value!.style.height = `${height}px`;
            const options = optionRef.value!;
            if (isOptionsShow.value) {
              nextTick(() => {
                setCords(options, selectRef.value!);
              });
            }
          });
        }

        resetPlaceholderTransition();
      }
    );

    watch(isOptionsShow, () => {
      if (isOptionsShow.value) {
        nextTick(() => {
          insertOptions();
        });
      }
      childOptions.value = [];
      uids.value = [];
    });

    onMounted(() => {
      getValue();

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      handleBlur();
      if (optionRef.value) {
        removeBody(optionRef.value, document.body);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    });

    provide<SelectProvider>("provider", {
      value: toRef(props, "modelValue"),
      textFilter,
      multiple: toRef(props, "multiple"),
      onClickOption,
      uids,
      hoverOption,
      setHover,
      childOptions,
      targetSelect,
      targetClose,
      color: toRef(props, "color"),
    });

    return () => (
      <div
        class={[
          "vs-select-content",
          {
            block: props.block,
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
        style={{
          "--vs-color": props.color ? getColor(props.color) : "",
          marginTop: props.label ? "32px" : "0",
        }}
        ref={selectRef}
      >
        {/* select content */}
        <div
          class={[
            "vs-select",
            {
              [`vs-select--state-${props.state}`]: props.state,
              "vs-select--disabled": selectAttrs.disabled,
              "show-options": isOptionsShow.value,
              loading: props.loading,
            },
          ]}
          onMouseleave={(e) => {
            if (e.relatedTarget !== optionRef.value) {
              isInputHover.value = false;
              targetSelect.value = false;
            }
          }}
          onMouseenter={() => {
            isInputHover.value = true;
          }}
        >
          {/* input */}
          <input
            readonly={!props.filter}
            {...selectAttrs}
            id={uniqueId}
            ref={inputRef}
            class={[
              "vs-select__input",
              {
                multiple: props.multiple,
                simple: !props.multiple && !props.filter,
              },
            ]}
            value={
              isFilterActive.value ? textFilter.value : computedValueLabel.value
            }
            onKeydown={handleKeydown}
            onFocus={(e) => {
              isOptionsShow.value = true;
              emit("focus", e);
              if (props.filter) {
                isFilterActive.value = true;
              }
              window.addEventListener("mousedown", handleWindowClick);
            }}
            onInput={(e) => {
              textFilter.value = (e.target as HTMLInputElement)?.value;
            }}
          ></input>

          {/* label */}
          {(!props.multiple || props.label) && (
            <label
              class={[
                "vs-select__label",
                {
                  "vs-select__label--placeholder": props.labelPlaceholder,
                  "vs-select__label--label": props.label,
                  "vs-select__label--hidden":
                    !textFilter.value && textFilter.value,
                },
              ]}
              for={uniqueId}
            >
              {props.labelPlaceholder || props.label}
            </label>
          )}

          {/* placeholder */}
          {!props.multiple && !props.label && (
            <label
              class={[
                "vs-select__label",
                {
                  "vs-select__label--hidden":
                    props.modelValue || textFilter.value,
                },
              ]}
              ref={placeholderRef}
              for={uniqueId}
            >
              {props.placeholder}
            </label>
          )}

          {/* chips */}
          {props.multiple && (
            <button
              class="vs-select__chips"
              ref={chipsRef}
              onKeydown={handleKeydown}
              onFocus={(e) => {
                if (!targetClose.value) {
                  isOptionsShow.value = true;
                  emit("focus", e);
                }
                if (props.filter && props.multiple) {
                  chipsInputRef.value?.focus();
                }
              }}
              onBlur={onBlur}
            >
              {...chips.value}
              {props.filter && (
                <input
                  class="vs-select__chips__input"
                  ref={chipsInputRef}
                  placeholder={selectAttrs.placeholder}
                  id={uniqueId}
                  value={textFilter.value}
                  onFocus={(e) => {
                    if (!targetClose.value) {
                      isOptionsShow.value = true;
                      emit("focus", e);
                    }
                  }}
                  onBlur={onBlur}
                  onInput={(e) => {
                    textFilter.value = (e.target as HTMLInputElement).value;
                  }}
                ></input>
              )}
            </button>
          )}

          {/* options */}
          <Transition name="vs-select">
            {isOptionsShow.value && (
              <div
                class={[
                  "vs-select__options",
                  {
                    isColorDark: isColorDark.value,
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
                style={{
                  "--vs-color": props.color ? getColor(props.color) : "",
                }}
                ref={optionRef}
                onMouseleave={() => {
                  targetSelect.value = false;
                  isInputHover.value = false;
                }}
                onMouseenter={() => {
                  targetSelect.value = true;
                  isInputHover.value = true;
                }}
              >
                <div class="vs-select__options__content" ref={contentRef}>
                  {isNoData.value && (
                    <div class="vs-select__options__content__not-data">
                      {slots.noData?.() || "No data available"}
                    </div>
                  )}
                  {slots.default?.()}
                </div>
              </div>
            )}
          </Transition>

          {/* loading */}
          {props.loading && <div class="vs-select__loading" />}

          {/* icon */}
          <IconArrow
            onClick={() => {
              if (isOptionsShow.value) {
                isOptionsShow.value = false;
              } else {
                inputRef.value?.focus();
              }
            }}
          ></IconArrow>
        </div>

        {/* message */}
        {["success", "danger", "warn", "primary"].map((type) =>
          getMessage(type)
        )}
      </div>
    );
  },
});

export default Select as CompWithAttr<typeof Select, InputHTMLAttributes>;

export type SelectProps = InstanceType<typeof Select>["$props"];
