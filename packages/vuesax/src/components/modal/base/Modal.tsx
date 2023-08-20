import {
  HTMLAttributes,
  PropType,
  Teleport,
  Transition,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch
} from 'vue'

import './style.scss'
import { Color } from '@/components'
import useColor from '@/hooks/useColor'
import IconClose from '@/icons/Close'

const Modal = defineComponent({
  name: 'VsModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    loading: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    blur: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    fitContent: {
      type: Boolean,
      default: false
    },
    scroll: {
      type: Boolean,
      default: false
    },
    centerHeader: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'close'],
  slots: ['header', 'footer'],
  setup(props, { emit, attrs, slots }) {
    const { getColor } = useColor()
    const color = getColor(props.color)
    const modalAttrs = attrs as HTMLAttributes
    const rebound = ref(false)
    const modalContentRef = ref<HTMLElement>()

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !props.preventClose) {
        emit('update:modelValue', false)
      }
    }

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          if (props.lockScroll) {
            document.body.style.overflow = 'hidden'
          }
        } else if (props.lockScroll) {
          document.body.style.overflow = ''
          window.removeEventListener('keydown', onEsc)
        }
      }
    )

    onMounted(() => {
      window.addEventListener('keydown', onEsc)
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', onEsc)
    })

    return () => (
      <Teleport to="body">
        <Transition name="vs-modal">
          {props.modelValue && (
            <div
              ref={modalContentRef}
              class={[
                'vs-modal-content',
                { blur: props.blur, fullScreen: props.fullScreen }
              ]}
              onClick={(e) => {
                const modalTarget = e.target as HTMLElement
                if (!modalTarget.closest('.vs-modal') && !props.preventClose) {
                  emit('update:modelValue', !props.modelValue)
                  emit('close')
                }

                if (props.preventClose && !modalTarget.closest('.vs-modal')) {
                  rebound.value = true
                  setTimeout(() => {
                    rebound.value = false
                  }, 300)
                }
              }}
            >
              <div
                style={{ '--vs-color': color }}
                class={[
                  'vs-modal',
                  {
                    'vs-modal--fullScreen': props.fullScreen,
                    'vs-modal--rebound': rebound.value,
                    'vs-modal--square': props.square,
                    'vs-modal--fitContent': props.fitContent,
                    'vs-modal--scroll': props.scroll,
                    'vs-modal--loading': props.loading,
                    'vs-modal--centerHeader': props.centerHeader
                  }
                ]}
                {...modalAttrs}
              >
                {/* loading */}
                {props.loading && (
                  <div class="vs-modal__loading">
                    <div class="vs-modal__loading__load" />
                  </div>
                )}

                {/* close button */}
                {props.showClose && (
                  <button
                    class="vs-modal__close"
                    onClick={() => {
                      emit('update:modelValue', !props.modelValue)
                      emit('close')
                    }}
                  >
                    <IconClose hover="x" />
                  </button>
                )}

                {/* header */}
                {slots.header && (
                  <header class="vs-modal__header">{slots.header?.()}</header>
                )}

                {/* content */}
                <div
                  class={[
                    'vs-modal__content',
                    {
                      notFooter: !slots.footer
                    }
                  ]}
                >
                  {slots.default?.()}
                </div>

                {/* footer */}
                {slots.footer && (
                  <footer class="vs-modal__footer">{slots.footer?.()}</footer>
                )}
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    )
  }
})

export default Modal
export type ModalProps = InstanceType<typeof Modal>['$props']
