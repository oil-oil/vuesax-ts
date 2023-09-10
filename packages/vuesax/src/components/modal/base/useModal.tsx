import {
  ref,
  createApp,
  onMounted,
  onUnmounted,
  computed,
  VNode,
  ComputedRef
} from 'vue'

import Modal, { ModalProps } from './Modal'
import { VsButton } from '@/components'
import { exclude } from '@/utils/shared'

export type ModalHookProps = Omit<ModalProps, 'modelValue'> & {
  title?: string
  content?: VNode
  cancelText?: string
  confirmText?: string
  showCancel?: boolean
  showConfirm?: boolean
  noFooter?: boolean
  onCancel?: (close: () => void) => void
  onConfirm?: (close: () => void) => void
}

const useModal = (props: ComputedRef<ModalHookProps>) => {
  const visible = ref(false)

  const open = () => {
    visible.value = true
  }

  const close = () => {
    visible.value = false
  }

  let ModalDom: HTMLDivElement
  const app = computed(() => {
    const componentProps = exclude(props.value, [
      'title',
      'content',
      'cancelText',
      'confirmText',
      'showCancel',
      'showConfirm',
      'noFooter'
    ])
    return createApp({
      render: () => (
        <Modal
          {...componentProps}
          v-model={visible.value}
          v-slots={{
            header: () => (
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {props.value.title}
              </span>
            ),
            footer: () =>
              !props.value.noFooter && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end'
                  }}
                >
                  {props.value.showCancel && (
                    <VsButton
                      transparent
                      color="dark"
                      onClick={() => {
                        if (props.value.onCancel) {
                          props.value.onCancel(close)
                        } else {
                          close()
                        }
                      }}
                    >
                      {props.value.cancelText || 'Cancel'}
                    </VsButton>
                  )}
                  {props.value.showConfirm && (
                    <VsButton
                      transparent
                      onClick={() => {
                        props.value.onConfirm?.(close)
                      }}
                    >
                      {props.value.confirmText || 'Confirm'}
                    </VsButton>
                  )}
                </div>
              )
          }}
        >
          {props.value.content}
        </Modal>
      )
    })
  })

  const mountModal = () => {
    app.value.mount(ModalDom)
    document.body.appendChild(ModalDom)
  }

  const unMountModal = () => {
    app.value.unmount()
    document.body.removeChild(ModalDom)
  }

  onMounted(() => {
    ModalDom = document.createElement('div')
    mountModal()
  })

  onUnmounted(() => {
    unMountModal()
  })

  return { open, close }
}

export default useModal
