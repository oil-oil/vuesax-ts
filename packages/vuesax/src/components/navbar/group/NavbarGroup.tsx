import { defineComponent, inject, provide, ref } from 'vue'

import { NavbarGroupProvider, NavbarProvider } from '../types'

import './style.scss'

const NavbarGroup = defineComponent({
  name: 'VsNavbarGroup',
  slots: ['default', 'items'],
  setup(_, { slots }) {
    const elRef = ref<HTMLElement>()
    const itemRef = ref<HTMLElement>()
    const provider = inject<NavbarProvider>('navbarProvider')

    const setGroupLineLeft = () => {
      if (elRef.value && itemRef.value) {
        const left = elRef.value.offsetLeft
        provider?.setLineLeft(left)
        const width = itemRef.value.scrollWidth
        provider?.setLineWidth(width)
      }
    }

    provide<NavbarGroupProvider>('navbarGroupProvider', { setGroupLineLeft })

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
