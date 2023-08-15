import { nanoid } from 'nanoid'
import { InputHTMLAttributes, PropType, computed, defineComponent } from 'vue'

import useColor from '@/hooks/useColor'
import { Color, CompWithAttr } from '@/types/utils'

import './style.scss'

const Radio = defineComponent({
  name: 'VsRadio',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    modelValue: {
      type: String
    },
    value: {
      type: String
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
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
  slots: ['default', 'icon'],
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const color = useColor(props.color)
    const inputAttrs = attrs as InputHTMLAttributes
    const uniqueId = inputAttrs?.id || nanoid()

    const isChecked = computed(() => props.modelValue === props.value)

    const radioInput = () => (
      <input
        type="radio"
        id={uniqueId}
        value={props.modelValue}
        name={props.name || props.modelValue}
        checked={isChecked.value}
        onInput={() => {
          emit('update:modelValue', props.value)
        }}
      />
    )

    const radioEffect = () => (
      <span class="vs-radio__effect">
        <span class="vs-radio__effect__icon">{slots.icon?.()}</span>
        <span class="vs-radio__effect__loading"></span>
      </span>
    )

    const label = () => (
      <label class="vs-radio__label" for={uniqueId}>
        {slots.default?.()}
      </label>
    )

    const radio = () => (
      <div class="vs-radio">
        {radioInput()}
        {radioEffect()}
      </div>
    )

    return () => (
      <div
        class={[
          'vs-radio-content',
          {
            disabled: props.disabled,
            loading: props.loading,
            active: isChecked.value
          }
        ]}
        style={{ '--vs-color': color }}
      >
        {props.labelBefore && label()}
        {radio()}
        {!props.labelBefore && label()}
      </div>
    )
  }
})

export default Radio as CompWithAttr<typeof Radio, InputHTMLAttributes>
export type RadioProps = InstanceType<typeof Radio>['$props']
