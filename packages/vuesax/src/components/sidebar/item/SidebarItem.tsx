import {
  ButtonHTMLAttributes,
  defineComponent,
  inject,
  PropType,
  Ref
} from 'vue'

import VsIconsArrow from '@/icons/Arrow'
import { Color, CompWithAttr } from '@/types/utils'

import './style.scss'

const SidebarItem = defineComponent({
  name: 'SideBarItem',
  props: {
    color: {
      type: String as PropType<Color>
    },
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
    const { active, updateActive } = inject<{
      active: Ref<string> | null
      updateActive: (id: string) => void
    }>('activeValue', { active: null, updateActive: () => {} })

    const onClick = () => {
      if (props.id) {
        updateActive?.(props.id)
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
          { active: active?.value === props.id, hasIcon: !!slots.icon }
        ]}
        onClick={onClick}
        {...attrs}
      >
        {slots.icon && <div class="vs-sidebar__item__icon">{slots.icon()}</div>}
        <div class="vs-sidebar__item__text">{slots.default?.()}</div>
        <div class="vs-sidebar__item__text-tooltip">{slots.default?.()}</div>
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
