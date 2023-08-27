import { ref, createApp, onMounted, onUnmounted, computed, VNode } from 'vue'

import Modal, { ModalProps } from './Modal'
import { VsButton } from '@/components'

type ModalHookProps = Omit<ModalProps, 'modelValue'> & {
  title?: string
  content?: VNode
  cancelText?: string
  confirmText?: string
  showCancel?: boolean
  showConfirm?: boolean
  noFooter?: boolean
}

const useModal = (props: ModalHookProps) => {
  const isVisible = ref(false)

  const open = () => {
    isVisible.value = true
  }

  const close = () => {
    isVisible.value = false
  }

  let ModalDom: HTMLDivElement
  const app = computed(() =>
    createApp({
      render: () => (
        <Modal
          v-model={isVisible.value}
          {...props}
          v-slots={{
            header: () => (
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {props.title}
              </span>
            ),
            footer: () =>
              !props.noFooter && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end'
                  }}
                >
                  {props.showCancel && (
                    <VsButton
                      transparent
                      color="dark"
                      onClick={() => {
                        close()
                      }}
                    >
                      {props.cancelText || 'Cancel'}
                    </VsButton>
                  )}
                  {props.showConfirm && (
                    <VsButton transparent>
                      {props.confirmText || 'Confirm'}
                    </VsButton>
                  )}
                </div>
              )
          }}
        >
          {props.content}
        </Modal>
      )
    })
  )

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
