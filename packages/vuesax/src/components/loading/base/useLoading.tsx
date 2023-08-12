import {
  ref,
  createApp,
  onMounted,
  onUnmounted,
  computed,
  h,
  watch,
  nextTick
} from 'vue'

import Loading, { LoadingProps } from './Loading'

type LoadingHookProps = Omit<LoadingProps, 'isVisible'>

const useLoading = (props?: LoadingHookProps) => {
  let LoadingDom: HTMLDivElement
  const isVisible = ref(false)

  const app = computed(() =>
    createApp({
      render: () => h(Loading, { ...props, isVisible: isVisible.value })
    })
  )

  const mountLoading = () => {
    LoadingDom = document.createElement('div')
    app.value.mount(LoadingDom)
    document.body.appendChild(LoadingDom)
  }

  const unMountLoading = () => {
    app.value.unmount()
    document.body.removeChild(LoadingDom)
  }

  watch(isVisible, () => {
    if (isVisible.value) {
      nextTick(() => {
        const vsLoading = LoadingDom.querySelector('.vs-loading') as HTMLElement
        if (vsLoading) {
          vsLoading.style.position = 'fixed'
        }
      })
    }
  })

  onMounted(() => {
    mountLoading()
    LoadingDom = document.createElement('div')
  })

  onUnmounted(() => {
    unMountLoading()
  })

  const open = () => {
    isVisible.value = true
  }

  const close = () => {
    isVisible.value = false
  }

  return { open, close, isLoading: isVisible }
}

export default useLoading
export type { LoadingHookProps }
