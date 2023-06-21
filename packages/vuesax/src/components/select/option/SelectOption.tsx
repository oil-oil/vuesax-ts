import { nanoid } from "nanoid/non-secure";
import {
  ButtonHTMLAttributes,
  computed,
  defineComponent,
  inject,
  onMounted,
  ref,
  watch,
} from "vue";

import VsCheckbox from "../../checkbox/base/Checkbox";
import { SelectProvider } from "../types";

import "./style.scss";

const SelectOption = defineComponent({
  name: "VsSelectOption",
  props: {
    value: {
      type: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: null,
    },
  },
  setup(props, { slots, attrs }) {
    const uniqueId = nanoid();
    const optionRef = ref<HTMLElement>();
    const activeOption = ref<boolean>(false);
    const hiddenOption = ref<boolean>(false);

    const provider = inject<SelectProvider>("provider");

    const isActive = computed(() =>
      typeof provider?.value?.value === "number"
        ? provider?.value?.value === props.value
        : (provider?.value.value || []).indexOf(props.value) !== -1
    );

    const isHover = computed(
      () =>
        provider?.uids?.value.findIndex((item) => item === uniqueId) ===
        provider?.hoverOption?.value
    );

    watch(
      () => provider?.textFilter?.value,
      (val) => {
        if (val) {
          if (props.label.toLowerCase().indexOf(val.toLowerCase()) === -1) {
            hiddenOption.value = true;
          } else {
            hiddenOption.value = false;
          }
        } else {
          hiddenOption.value = false;
        }
      }
    );

    onMounted(() => {
      provider?.childOptions?.value.push({
        value: props.value,
        label: props.label,
        disabled: props.disabled,
        hiddenOption: hiddenOption.value,
        hiddenOptionGroup: false,
        el: optionRef.value as HTMLElement,
      });

      provider?.uids?.value.push(uniqueId);

      activeOption.value = isActive.value;
      provider?.setHover?.();
    });

    return () => (
      <button
        ref={optionRef}
        class={[
          "vs-select__option",
          {
            activeOption: isActive.value,
            isHover: isHover.value,
            isMultiple: provider?.multiple?.value,
            hiddenOption: hiddenOption?.value,
          },
        ]}
        onMousedown={() => {
          provider?.onClickOption?.(props.value, props.label);
          console.log('props.label: ', props.label);
        }}
        onBlur={() => {
          if (provider?.targetSelect?.value && provider?.targetClose?.value) {
            activeOption.value = false;
          }
        }}
        {...attrs}
      >
        {provider?.multiple?.value ? (
          <VsCheckbox modelValue={isActive.value}>
            {slots.default?.() || props.label}
          </VsCheckbox>
        ) : (
          slots.default?.()  || props.label
        )}
      </button>
    );
  },
});

export default SelectOption as CompWithAttr<
  typeof SelectOption,
  ButtonHTMLAttributes
>;

export type SelectOptionProps = InstanceType<typeof SelectOption>["$props"];
