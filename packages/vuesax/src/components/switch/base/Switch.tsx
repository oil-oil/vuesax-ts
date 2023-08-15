/* eslint-disable no-param-reassign */
import { InputHTMLAttributes, PropType, defineComponent } from 'vue'

import './style.scss'

import useColor from '@/hooks/useColor'
import { Color, CompWithAttr } from '@/types/utils'

const Switch = defineComponent({
  name: 'VsSwitch',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  slots: ['circle', 'on', 'off'],
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const color = useColor(props.color)

    return () => (
      <div
        class={[
          'vs-switch',
          {
            'vs-switch--loading': props.loading,
            'vs-switch--square': props.square,
            'vs-switch--indeterminate': props.indeterminate,
            'vs-switch--icon': props.icon
          }
        ]}
        style={{ '--vs-color': color }}
      >
        <input
          type="checkbox"
          checked={props.modelValue}
          onChange={(e) => {
            emit('update:modelValue', (e.target as HTMLInputElement).checked)
          }}
          class="vs-switch__input"
          {...attrs}
        ></input>
        <div class="vs-switch__circle">{slots.circle?.()}</div>
        <div class="vs-switch__text on">
          {slots.on?.() || slots.default?.()}
        </div>
        <div class="vs-switch__text off">
          {slots.off?.() || slots.default?.()}
        </div>

        <div class="vs-switch__background"></div>
      </div>
    )
  }
})

export default Switch as CompWithAttr<typeof Switch, InputHTMLAttributes>

export type SwitchProps = InstanceType<typeof Switch>['$props']
