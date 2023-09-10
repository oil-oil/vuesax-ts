import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  Transition,
  PropType,
  toRef
} from 'vue'

import useColor from '@/hooks/useColor'
import { Color, Position } from '@/types/utils'
import { insertBody, setCordsPosition } from '@/utils'

const Tooltip = defineComponent({
  name: 'VsToolTip',
  props: {
    color: {
      type: String as PropType<Color>
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String as PropType<Position>,
      default: 'top'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    interactivity: {
      type: Boolean,
      default: false
    },
    noArrow: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    borderThick: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: null
    }
  },
  slots: ['default', 'tooltip'],
  setup(props, { slots, emit }) {
    const { color } = useColor(toRef(props, 'color'))
    const activeTooltip = ref(false)
    const isHoverTooltip = ref(false)
    const contentRef = ref<HTMLElement>()
    const tooltipRef = ref<HTMLElement>()

    const insertTooltip = () => {
      if (tooltipRef.value && contentRef.value) {
        insertBody(tooltipRef.value)

        setCordsPosition(tooltipRef.value, contentRef.value, props.position)
      }
    }

    const handlerMouseEnter = () => {
      if (props.delay) {
        setTimeout(() => {
          activeTooltip.value = true
          nextTick(() => {
            insertTooltip()
          })
        }, Number(props.delay))
      } else {
        activeTooltip.value = true
        nextTick(() => {
          insertTooltip()
        })
      }
    }

    const removeTooltip = () => {
      activeTooltip.value = false
      emit('update:modelValue', false)
    }

    const handleResize = () => {
      const TooltipRef = tooltipRef.value as HTMLElement
      const ContentRef = contentRef.value as HTMLElement
      if (!TooltipRef) {
        return
      }
      nextTick(() => {
        setCordsPosition(TooltipRef, ContentRef, props.position)
      })

      for (let index = 0; index < 300; index += 1) {
        setTimeout(() => {
          setCordsPosition(TooltipRef, ContentRef, props.position)
        })
      }
    }

    const handleMouseDownDisabled = (evt: any) => {
      if (
        !evt.target?.closest('.vs-tooltip') &&
        !evt.target?.closest('.vs-tooltip-content')
      ) {
        removeTooltip()
      }
    }
    watch(
      () => props.modelValue,
      (val: boolean) => {
        activeTooltip.value = val
        if (val) {
          nextTick(() => {
            insertTooltip()
          })
        }
      }
    )

    onMounted(() => {
      window.addEventListener('popstate', () => {
        const tooltips = document.querySelectorAll('.vs-tooltip')
        tooltips.forEach((tooltip) => {
          tooltip.remove()
        })
      })

      window.addEventListener('resize', handleResize)
      if (props.disabled) {
        window.addEventListener('mousedown', handleMouseDownDisabled)
      }

      window.addEventListener('touchstart', handleMouseDownDisabled)
    })

    onUnmounted(() => {
      activeTooltip.value = false
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousedown', handleMouseDownDisabled)
      const tooltips = document.querySelectorAll('.vs-tooltip')
      tooltips.forEach((tooltip) => {
        tooltip.remove()
      })
    })

    return () => (
      <div
        class="vs-tooltip-content"
        ref={contentRef}
        onMouseenter={() => {
          if (!props.disabled) {
            handlerMouseEnter()
          }
        }}
        onMouseleave={() => {
          if (!props.disabled) {
            if (props.interactivity) {
              setTimeout(() => {
                if (!isHoverTooltip.value) {
                  removeTooltip()
                }
              }, 250)
            } else {
              removeTooltip()
            }
          }
        }}
      >
        <Transition name="vs-tooltip">
          {activeTooltip.value && (
            <div
              ref={tooltipRef}
              style={{ '--vs-color': color.value }}
              class={[
                'vs-tooltip',
                {
                  [props.position]: true,
                  shadow: props.shadow,
                  noArrow: props.noArrow,
                  square: props.square,
                  circle: props.circle,
                  border: props.border,
                  borderThick: props.borderThick,
                  loading: props.loading
                }
              ]}
              onMouseenter={() => {
                if (props.interactivity) {
                  isHoverTooltip.value = true
                }
              }}
              onMouseleave={() => {
                if (props.interactivity) {
                  isHoverTooltip.value = false
                  removeTooltip()
                }
              }}
            >
              {slots.tooltip?.()}
              {props.loading && <div class="vs-tooltip__loading"></div>}
            </div>
          )}
        </Transition>
        {slots.default?.()}
      </div>
    )
  }
})

export default Tooltip

export type ToolTipProps = InstanceType<typeof Tooltip>['$props']
