import { Ref } from 'vue'

export type TableProvider = {
  rootRef: Ref<HTMLElement | undefined>
  activeSort: Ref<number>
}
