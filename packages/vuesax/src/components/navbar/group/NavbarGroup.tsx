import { defineComponent, inject, provide, ref } from 'vue'

import { NavbarProvider } from '../types'

import './style.scss'

const NavbarGroup = defineComponent({
  name: 'VsNavbarGroup',
  slots: ['default', 'items'],
  setup(_, { slots }) {
    const elRef = ref<HTMLElement>()
    const itemRef = ref<HTMLElement>()
    const provider = inject<NavbarProvider>('provider')

    const setLeftLineGroup = () => {
      if (elRef.value && itemRef.value) {
        const left = elRef.value.offsetLeft
        provider?.setLeftLine(left)
        const width = itemRef.value.scrollWidth
        provider?.setWidthLine(width)
      }
    }

    provide('setLeftLineGroup', setLeftLineGroup)

    return () => (
      <div class="vs-navbar__group" ref={elRef}>
        <button class="vs-navbar__group__item" ref={itemRef}>
          {slots.default?.()}
          <i class="arrow bx bx-chevron-down"></i>
        </button>
        <div class="vs-navbar__group__items">{slots.items?.()}</div>
      </div>
    )
  }
})
export default NavbarGroup

export type NavbarGroupProps = InstanceType<typeof NavbarGroup>['$props']
