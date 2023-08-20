/* eslint-disable no-param-reassign */
import {
  PropType,
  Transition,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  toRefs,
  watch
} from 'vue'

import { beforeEnter, enter, leave } from './transition.ts'
import usePagination from './usePagination.tsx'
import useColor from '@/hooks/useColor.ts'
import IconClose from '@/icons/Close'
import IconPlus from '@/icons/Plus'
import './style.scss'
import { Color } from '@/types/utils.ts'

const Alert = defineComponent({
  name: 'VsAlert',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    isShow: {
      type: Boolean,
      default: true
    },
    solid: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    relief: {
      type: Boolean,
      default: false
    },
    hiddenContent: {
      type: Boolean,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    progress: {
      type: [Number, String],
      default: 0
    },
    page: {
      type: Number,
      default: 0
    }
  },
  slots: ['default', 'icon', 'title'],
  emits: ['update:page', 'update:hiddenContent', 'update:isShow'],
  setup(props, { slots, emit }) {
    const { getColor } = useColor()
    const color = getColor(props.color)
    const { page } = toRefs(props)
    const rootRef = ref<HTMLElement | null>(null)
    const contentRef = ref<HTMLElement | null>(null)

    const { getPagesValue, pagination } = usePagination({
      page,
      changePage: (newPage: number) => {
        emit('update:page', newPage)
      },
      slots
    })

    /**
     * Set the rootRef height to its actual height - 1px to avoid scrollbars
     */
    const resetRootHeight = () => {
      const root = rootRef.value as HTMLElement
      if (root && root.style) {
        root.style.height = `${root.scrollHeight - 1}px`
      }
    }

    /**
     * Set the minimum height of contentRef to its actual height to ensure that the content is fully displayed
     */
    const resetContentHeight = () => {
      const content = contentRef.value as HTMLElement
      if (content && content.style) {
        content.style.minHeight = `${content.scrollHeight}px`
      }
    }

    onMounted(() => {
      resetRootHeight()
      resetContentHeight()
    })

    watch(
      () => props.page,
      () => {
        nextTick(() => {
          resetContentHeight()
          resetRootHeight()
        })
      }
    )

    watch(
      () => props.hiddenContent,
      () => {
        if (!props.isShow) {
          return
        }
        const root = rootRef.value as HTMLElement
        const content = contentRef.value as HTMLElement
        if (!props.hiddenContent) {
          root.style.height = 'auto'
          setTimeout(() => {
            resetRootHeight()
          }, 250)
        } else {
          root.style.height = `${root.scrollHeight - content.scrollHeight}px`
          root.style.width = '100%'
        }
      }
    )

    const handleClickClose = () => {
      emit('update:isShow', !props.isShow)
    }

    const handleClickHidden = () => {
      emit('update:hiddenContent', !props.hiddenContent)
    }

    return () => (
      <Transition onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave}>
        {props.isShow && (
          <div
            ref={rootRef}
            class={[
              'vs-alert',
              {
                'vs-alert--solid': !!props.solid,
                'vs-alert--border': !!props.border,
                'vs-alert--shadow': !!props.shadow,
                'vs-alert--gradient': !!props.gradient,
                'vs-alert--flat': !!props.flat,
                'vs-alert--relief': !!props.relief,
                'vs-alert--pages': getPagesValue.value.length > 0
              }
            ]}
            style={{ '--vs-color': color }}
          >
            {/* icon */}
            {slots.icon && <div class="vs-alert__icon">{slots.icon()}</div>}

            {/* title */}
            {slots.title && (
              <div
                onClick={handleClickHidden}
                class={[
                  'vs-alert__title',
                  {
                    'vs-alert__title--clickHidden':
                      typeof props.hiddenContent === 'boolean'
                  }
                ]}
              >
                {slots.title()}
                {!props.closable &&
                  typeof props.hiddenContent === 'boolean' && (
                    <IconPlus less={props.hiddenContent}></IconPlus>
                  )}
              </div>
            )}

            {/* content */}
            <Transition
              onBeforeEnter={beforeEnter}
              onEnter={enter}
              onLeave={leave}
            >
              {!props.hiddenContent && (
                <div class="vs-alert__content" ref={contentRef}>
                  <div class="vs-alert__content__text">
                    {slots.default?.()}
                    {...getPagesValue.value}
                  </div>
                  {pagination()}
                </div>
              )}
            </Transition>

            {/* close button */}
            {props.closable && (
              <button class="vs-alert__close" onClick={handleClickClose}>
                <IconClose hover="less"></IconClose>
              </button>
            )}
            {slots.footer && (
              <div class="vs-alert__footer">{slots.footer?.()}</div>
            )}

            {/* progress */}
            {!!props.progress && (
              <div class="vs-alert__progress">
                <div
                  class="vs-alert__progress__bar"
                  style={{ width: `${props.progress}%` }}
                ></div>
              </div>
            )}
          </div>
        )}
      </Transition>
    )
  }
})

export default Alert
export type AlertProps = InstanceType<typeof Alert>['$props']
