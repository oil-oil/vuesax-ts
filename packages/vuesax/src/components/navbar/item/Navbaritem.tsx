import { defineComponent, inject, onMounted, ref, watch } from 'vue'

import { NavbarGroupProvider, NavbarProvider } from '../types'

import './style.scss'

const NavbarItem = defineComponent({
  name: 'VsNavbarItem',
  props: {
    id: {
      type: String
    },
    href: {
      type: String
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const elRef = ref<HTMLElement>()

    const provider = inject<NavbarProvider>('navbarProvider')
    const groupProvider = inject<NavbarGroupProvider>('navbarGroupProvider')

    const resetLinePosition = () => {
      if (provider?.active.value === props.id) {
        if (groupProvider?.setGroupLineLeft) {
          groupProvider.setGroupLineLeft()
        } else if (elRef.value) {
          const left = elRef.value.offsetLeft
          provider?.setLineLeft(left)
          const width = elRef.value.scrollWidth
          provider?.setLineWidth(width)
        }
      }
    }

    watch(
      () => provider?.active.value,
      () => {
        resetLinePosition()
      }
    )

    onMounted(() => {
      resetLinePosition()
    })

    const handleClick = () => {
      if (props.href) {
        window.open(props.href, props.target)
      }
    }

    const handleActive = () => {
      if (props.id) {
        provider?.setModel(props.id)
      }
    }

    return () => (
      <button
        class={[
          'vs-navbar__item',
          { active: provider?.active.value === props.id }
        ]}
        onClick={(evt: MouseEvent) => {
          emit('click', evt)
          handleClick()
          handleActive()
          evt.preventDefault()
          evt.stopPropagation()
        }}
        ref={elRef}
      >
        {slots.default?.()}
      </button>
    )
  }
})

export default NavbarItem

export type NavbarItemProps = InstanceType<typeof NavbarItem>['$props']
