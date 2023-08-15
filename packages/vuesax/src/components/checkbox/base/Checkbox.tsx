/* eslint-disable no-param-reassign */
import { nanoid } from 'nanoid'
import { InputHTMLAttributes, PropType, defineComponent, ref } from 'vue'

import './style.scss'
import useColor from '@/hooks/useColor'
import VsIconsCheck from '@/icons/Check'
import { Color, CompWithAttr } from '@/types/utils'

const Checkbox = defineComponent({
  name: 'VsCheckbox',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    lineThrough: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    labelBefore: {
      type: Boolean,
      default: false
    }
  },
  slots: ['icon'],
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const color = useColor(props.color)
    const checkboxAttrs = attrs as InputHTMLAttributes
    const uniqueId = checkboxAttrs?.id || nanoid()

    const innerCheck = ref(props.checked)

    return () => (
      <>
        <div
          style={{ '--vs-color': color }}
          class={[
            'vs-checkbox-content',
            {
              'vs-checkbox--checked': props.modelValue || innerCheck.value,
              'vs-checkbox--disabled': checkboxAttrs.disabled,
              'vs-checkbox--loading': props.loading,
              'vs-checkbox--label-before': props.labelBefore
            }
          ]}
        >
          <div class="vs-checkbox-con">
            <input
              class="vs-checkbox"
              type="checkbox"
              checked={props.checked || props.modelValue}
              onChange={(e) => {
                emit(
                  'update:modelValue',
                  (e.target as HTMLInputElement).checked
                )
                innerCheck.value = (e.target as HTMLInputElement).checked
              }}
              {...checkboxAttrs}
              id={uniqueId}
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
                'vs-checkbox-label',
                {
                  lineThrough: props.lineThrough
                }
              ]}
              for={uniqueId}
            >
              {slots?.default()}
            </label>
          )}
        </div>
      </>
    )
  }
})

export default Checkbox as CompWithAttr<typeof Checkbox, InputHTMLAttributes>

export type CheckboxProps = InstanceType<typeof Checkbox>['$props']
