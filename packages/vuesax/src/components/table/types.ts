import { Ref } from 'vue'

export type TableProvider = {
  rootRef: Ref<HTMLElement | undefined>
  selected: (data: unknown) => void
}
