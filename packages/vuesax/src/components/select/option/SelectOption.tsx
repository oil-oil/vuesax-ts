import { nanoid } from 'nanoid/non-secure'
import {
  ButtonHTMLAttributes,
  PropType,
  computed,
  defineComponent,
  inject,
  onMounted,
  ref,
  watch
} from 'vue'

import './style.scss'
import VsCheckbox from '../../checkbox/base/Checkbox'
import { SelectProvider, Option } from '../types'
import { CompWithAttr } from '@/types/utils'
import { isNil } from '@/utils/shared'

const SelectOption = defineComponent({
  name: 'VsSelectOption',
  props: {
    value: {
      type: [String, Number] as PropType<Option['value']>
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  },
  setup(props, { slots, attrs }) {
    const uniqueId = nanoid()
    const optionRef = ref<HTMLElement>()
    const activeOption = ref<boolean>(false)
    const hiddenOption = ref<boolean>(false)

    const provider = inject<SelectProvider>('provider')

    const isActive = computed(() =>
      typeof provider?.value?.value === 'number'
        ? provider?.value?.value === props.value
        : ((provider?.value.value || []) as (string | number)[]).indexOf(
            props.value as any
          ) !== -1
    )

    const isHover = computed(
      () =>
        provider?.childOptions?.value.findIndex(
          (item) => item.uid === uniqueId
        ) === provider?.hoverOption?.value
    )

    watch(
      () => provider?.textFilter?.value,
      (val) => {
        if (val) {
          if (props.label?.toLowerCase().indexOf(val.toLowerCase()) === -1) {
            hiddenOption.value = true
          } else {
            hiddenOption.value = false
          }
        } else {
          hiddenOption.value = false
        }
        const index = provider?.childOptions?.value.findIndex(
          (item) => item.uid === uniqueId
        )
        if (!isNil(index) && index !== -1) {
          provider!.childOptions.value[index!] = {
            ...provider!.childOptions.value[index!],
            hiddenOption: hiddenOption.value
          }
        }
      }
    )

    onMounted(() => {
      provider?.childOptions?.value.push({
        value: props.value,
        label: props.label,
        disabled: props.disabled,
        hiddenOption: hiddenOption.value,
        hiddenOptionGroup: false,
        el: optionRef.value as HTMLElement,
        uid: uniqueId
      })

      activeOption.value = isActive.value
    })

    return () => (
      <button
        ref={optionRef}
        class={[
          'vs-select__option',
          {
            activeOption: isActive.value,
            isHover: isHover.value,
            isMultiple: provider?.multiple?.value,
            hiddenOption: hiddenOption?.value
          }
        ]}
        onMousedown={() => {
          provider?.onClickOption?.({ value: props.value, label: props.label })
        }}
        onBlur={() => {
          if (
            provider?.isTargetSelect?.value &&
            provider?.isTargetClose?.value
          ) {
            activeOption.value = false
          }
        }}
        {...attrs}
      >
        {provider?.multiple?.value ? (
          <VsCheckbox modelValue={isActive.value} color={provider.color.value}>
            {slots.default?.() || props.label}
          </VsCheckbox>
        ) : (
          slots.default?.() || props.label
        )}
      </button>
    )
  }
})

export default SelectOption as CompWithAttr<
  typeof SelectOption,
  ButtonHTMLAttributes
>

export type SelectOptionProps = InstanceType<typeof SelectOption>['$props']
