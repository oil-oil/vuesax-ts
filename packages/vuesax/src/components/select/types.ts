import { Ref } from 'vue'

import { Color } from '@/types/utils'

export type Option = {
  label: string
  value: string
  disabled: boolean
  hiddenOption: boolean
  hiddenOptionGroup: boolean
  el: HTMLElement
}

export type SelectProvider = {
  value: Ref<string[] | string | undefined>
  textFilter: Ref<string>
  multiple: Ref<boolean>
  onClickOption: (value: string | null, label: string) => void
  uids: Ref<string[]>
  hoverOption: Ref<number>
  childOptions: Ref<Option[]>
  targetSelect: Ref<boolean>
  targetClose: Ref<boolean>
  color: Ref<Color | undefined>
}
