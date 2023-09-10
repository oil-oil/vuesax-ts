import { ButtonHTMLAttributes, defineComponent, inject } from 'vue'

import { SidebarProvider } from '../types'
import { VsToolTip } from '@/components'
import VsIconsArrow from '@/icons/Arrow'
import { CompWithAttr } from '@/types/utils'

import './style.scss'

const SidebarItem = defineComponent({
  name: 'SideBarItem',
  props: {
    href: {
      type: String
    },
    target: {
      type: String,
      default: '_blank'
    },
    value: {
      type: String
    },
    id: {
      type: String
    },
    arrow: {
      type: Boolean
    }
  },
  slots: ['default', 'icon', 'arrow'],
  emits: ['click'],
  setup(props, { slots, attrs, emit }) {
    const sidebarProvider = inject<SidebarProvider | null>(
      'sidebarProvider',
      null
    )

    const onClick = () => {
      if (props.id) {
        sidebarProvider?.updateActive?.(props.id)
      }
      if (props.href) {
        window.open(props.href, props.target)
      }
      emit('click')
    }

    return () => (
      <button
        class={[
          'vs-sidebar__item',
          {
            active: sidebarProvider?.active.value === props.id,
            hasIcon: !!slots.icon
          }
        ]}
        onClick={onClick}
        {...attrs}
      >
        <VsToolTip
          disabled={!sidebarProvider?.collapsed.value}
          position="right"
          v-slots={{
            tooltip: () => slots.default?.()
          }}
        >
          {slots.icon && (
            <div class="vs-sidebar__item__icon">{slots.icon()}</div>
          )}
        </VsToolTip>

        {!sidebarProvider?.collapsed.value && (
          <div class="vs-sidebar__item__text">{slots.default?.()}</div>
        )}

        {(slots.arrow || props.arrow) && (
          <div class="vs-sidebar__item__arrow">
            {(slots.arrow && <div>{slots.arrow?.()}</div>) || <VsIconsArrow />}
          </div>
        )}
      </button>
    )
  }
})

export default SidebarItem as CompWithAttr<
  typeof SidebarItem,
  ButtonHTMLAttributes
>

export type SidebarItemProps = InstanceType<typeof SidebarItem>['$props']
