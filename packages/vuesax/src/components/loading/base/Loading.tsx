import { PropType, Transition, defineComponent, ref, toRef } from 'vue'
import './style.scss'

import useColor from '@/hooks/useColor'
import { Color } from '@/types/utils'

type LoadingType =
  | 'waves'
  | 'corners'
  | 'points'
  | 'square'
  | 'border'
  | 'gradient'
  | 'rectangle'
  | 'circles'
  | 'square-rotate'
  | 'scale'

const Loading = defineComponent({
  name: 'VsLoading',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    background: {
      type: String as PropType<Color>,
      default: '255, 255, 255'
    },
    text: {
      type: String,
      default: null
    },
    type: {
      type: String as PropType<LoadingType>,
      default: null
    },
    opacity: {
      type: String,
      default: '0.6'
    },
    percent: {
      type: String,
      default: null
    },
    progress: {
      type: Number,
      default: null
    },
    scale: {
      type: String,
      default: null
    },
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:isVisible', 'update:text'],
  setup(props) {
    const rootRef = ref<HTMLElement>()
    const colorRef = toRef(props, 'color')
    const bgColorRef = toRef(props, 'background')

    const color = useColor(colorRef)
    const bgColor = useColor(bgColorRef)

    return () => (
      <Transition name="loading">
        {props.isVisible && (
          <div
            ref={rootRef}
            style={{
              background: `rgba(${bgColor.value},${props.opacity})`
            }}
            class={[
              'vs-loading',
              `vs-loading--${props.type || 'default'}`,
              { 'vs-loading--background': !!props.background }
            ]}
          >
            <div
              class="vs-loading__load"
              style={{ transform: `scale(${props.scale})` }}
            >
              <div
                class="vs-loading__load__animation"
                style={{ '--vs-color': color.value }}
              >
                {props.percent && (
                  <div class="vs-loading__load__percent">{props.percent}</div>
                )}
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    class={`vs-loading__load__animation__${item}`}
                  />
                ))}
              </div>
              {props.text && (
                <div class="vs-loading__load__text">{props.text}</div>
              )}
            </div>

            {props.progress && (
              <div class="vs-loading__progress">
                <div
                  class="vs-loading__progress__bar"
                  style={{ width: `${props.progress}%` }}
                />
              </div>
            )}
          </div>
        )}
      </Transition>
    )
  }
})

export default Loading

export type LoadingProps = InstanceType<typeof Loading>['$props']
