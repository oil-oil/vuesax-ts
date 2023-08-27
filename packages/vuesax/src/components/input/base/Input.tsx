/* eslint-disable no-param-reassign */
import {
  InputHTMLAttributes,
  PropType,
  Transition,
  computed,
  defineComponent,
  toRef
} from 'vue'

import './style.scss'

import useColor from '@/hooks/useColor'
import { Color, CompWithAttr } from '@/types/utils'

type Status = 'primary' | 'warn' | 'danger' | 'success' | 'dark'
const Input = defineComponent({
  name: 'VsInput',
  props: {
    color: {
      type: String as PropType<Color>
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    labelPlaceholder: {
      default: ''
    },
    label: {
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    iconAfter: {
      type: Boolean,
      default: false
    },
    visiblePassword: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Number
    },
    border: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    textWhite: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    isIconClick: {
      type: Boolean,
      default: false
    },
    status: {
      type: String as PropType<Status>
    }
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const { color } = useColor(toRef(props, 'color'))

    const id = computed(() => `vs-input--${attrs.id || 'id'}`)

    const beforeEnter = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0px'
    }

    const enter = (element: Element, done: () => void) => {
      const el = element as HTMLElement
      const h = el.scrollHeight
      el.style.height = `${h - 1}px`
      done()
    }

    const leave = (element: Element) => {
      const el = element as HTMLElement
      el.style.minHeight = '0px'
      el.style.height = '0px'
    }

    const getMessage = (type: Status) => (
      <Transition onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave}>
        {!!slots[`message-${type}`] && (
          <div class={['vs-input__message', `vs-input__message--${type}`]}>
            {slots[`message-${type}`]?.()}
          </div>
        )}
      </Transition>
    )

    const loading = <div class="vs-input__loading" />
    return () => (
      <div
        class={[
          'vs-input-parent',
          {
            [`vs-input-parent--status-${props.status}`]: !!props.status,
            'vs-input-parent--border': !!props.border,
            'vs-input-parent--shadow': !!props.shadow,
            'vs-input-content--has-label':
              props.label || props.labelPlaceholder,
            block: props.block,
            transparent: props.transparent,
            textWhite: props.textWhite,
            square: props.square,
            // colors
            'vs-component--is-color': !!props.color
          }
        ]}
        style={{ '--vs-color': color.value }}
      >
        {/* input content */}
        <div
          class={[
            'vs-input-content',
            { 'vs-input-content--has-color': props.color },
            {
              'vs-input-content--has-label':
                props.label || props.labelPlaceholder
            }
          ]}
        >
          <input
            value={props.modelValue}
            class={[
              'vs-input',
              { 'vs-input--has-icon': slots.icon },
              { 'vs-input--has-icon--after': props.iconAfter }
            ]}
            onInput={(e) => {
              emit('update:modelValue', (e.target as HTMLInputElement)?.value)
            }}
            {...attrs}
            placeholder=""
            id={id.value}
            type={props.visiblePassword ? 'text' : (attrs.type as string)}
          />

          {/* placeholder */}
          {props.label && (
            <label
              for={id.value}
              class={[
                'vs-input__label',
                { 'vs-input__label--hidden': props.modelValue !== '' }
              ]}
            >
              {attrs.placeholder}
            </label>
          )}

          {/* label */}
          <label
            for={id.value}
            class={[
              'vs-input__label',
              { 'vs-input__label--placeholder': props.labelPlaceholder },
              {
                'vs-input__label--hidden':
                  props.modelValue !== '' ||
                  attrs.type === 'date' ||
                  attrs.type === 'time'
              },
              { 'vs-input__label--label': props.label }
            ]}
          >
            {props.label || attrs.placeholder || props.labelPlaceholder}
          </label>

          {/* icon */}
          {slots.icon && (
            <span
              class={[
                'vs-input__icon',
                { 'vs-input__icon--after': props.iconAfter },
                { 'vs-input__icon--click': props.isIconClick }
              ]}
            >
              {slots.icon()}
            </span>
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
        {typeof props.progress !== 'undefined' && (
          <div
            class={[
              'vs-input__progress',
              { 'vs-input__progress--danger': props.progress < 33 },
              {
                'vs-input__progress--warn':
                  props.progress < 66 && props.progress > 33
              },
              { 'vs-input__progress--success': props.progress > 66 }
            ]}
          >
            <div
              class="vs-input__progress__bar"
              style={{
                width: `${props.progress}%`
              }}
            />
          </div>
        )}

        {/* message */}
        {(['success', 'warn', 'danger', 'primary'] as const).map((message) =>
          getMessage(message)
        )}
      </div>
    )
  }
})

export default Input as CompWithAttr<typeof Input, InputHTMLAttributes>

export type InputProps = InstanceType<typeof Input>['$props']
