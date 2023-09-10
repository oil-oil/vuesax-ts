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
import { VuesaxOptions, vuesaxOptionsKey } from '@/utils/defineVuesaxOptions'

export type LoadingHookProps = Omit<LoadingProps, 'visible'>

const useLoading = (props?: LoadingHookProps) => {
  const vuesaxOptions = inject<VuesaxOptions | null>(vuesaxOptionsKey, null)
  let LoadingDom: HTMLDivElement
  const visible = ref(false)

  const app = computed(() =>
    createApp({
      render: () =>
        h(Loading, {
          ...props,
          visible: visible.value,
          fixed: true
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
    setTimeout(() => {
      document.body.removeChild(LoadingDom)
    }, 500)
  }

  onMounted(() => {
    mountLoading()
    LoadingDom = document.createElement('div')
  })

  onUnmounted(() => {
    unMountLoading()
  })

  const open = () => {
    visible.value = true
  }

  const close = () => {
    visible.value = false
  }

  return { open, close, isLoading: visible }
}

export default useLoading
