import { defineComponent, inject, provide, ref } from 'vue'

import { NavbarGroupProvider, NavbarProvider } from '../types'

import './style.scss'

const NavbarGroup = defineComponent({
  name: 'VsNavbarGroup',
  slots: ['title', 'default'],
  setup(_, { slots }) {
    const elRef = ref<HTMLElement>()
    const itemRef = ref<HTMLElement>()
    const provider = inject<NavbarProvider | null>('navbarProvider', null)

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
          {slots.title?.()}
          <i class="arrow bx bx-chevron-down"></i>
        </button>
        <div class="vs-navbar__group__items">{slots.default?.()}</div>
      </div>
    )
  }
})
export default NavbarGroup

export type NavbarGroupProps = InstanceType<typeof NavbarGroup>['$props']
