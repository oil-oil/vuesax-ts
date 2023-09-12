import { Ref } from 'vue'

import { Color } from '@/types/utils'

export type SelectValue = string[] | string | number | number[]

export type Option = {
  uid: string
  label?: string
  value?: string | number
  disabled: boolean
  hiddenOption: boolean
  hiddenOptionGroup: boolean
  el: HTMLElement
}

export type SelectProvider = {
  value: Ref<SelectValue | undefined>
  textFilter: Ref<string>
  multiple: Ref<boolean>

  onClickOption: ({
    value,
    label
  }: {
    value?: Option['value']
    label?: string
  }) => void
  hoverOption: Ref<number>
  childOptions: Ref<Option[]>
  isTargetSelect: Ref<boolean>
  isTargetClose: Ref<boolean>
  color: Ref<Color | undefined>
}
