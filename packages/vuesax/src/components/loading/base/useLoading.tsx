import {
  ref,
  createApp,
  onMounted,
  onUnmounted,
  computed,
  h,
  inject
} from 'vue'

import Loading, { LoadingProps } from './Loading'
import { vuesaxOptionsKey } from '@/utils/defineVuesaxOptions'

type LoadingHookProps = Omit<LoadingProps, 'isVisible'>

const useLoading = (props?: LoadingHookProps) => {
  const vuesaxOptions = inject(vuesaxOptionsKey)
  let LoadingDom: HTMLDivElement
  const isVisible = ref(false)

  const app = computed(() =>
    createApp({
      render: () =>
        h(Loading, {
          ...props,
          isVisible: isVisible.value,
          style: {
            position: 'fixed'
          }
        })
    }).provide(vuesaxOptionsKey, vuesaxOptions)
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
