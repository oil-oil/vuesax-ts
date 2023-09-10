import {
  defineComponent,
  onMounted,
  ref,
  watch,
  provide,
  toRef,
  HTMLAttributes,
  PropType
} from 'vue'

import { SidebarProvider } from '../types'
import useColor from '@/hooks/useColor'
import { Color, CompWithAttr } from '@/types/utils'

const Sidebar = defineComponent({
  name: 'VsSideBar',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'text'
    },
    activeColor: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    background: {
      type: String as PropType<Color>,
      default: 'white'
    },
    modelValue: {
      type: String
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    hoverExpand: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    noLine: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    },
    relative: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  slots: ['default', 'title', 'footer', 'logo'],
  emits: ['update:modelValue', 'update:visible'],
  setup(props, { slots, emit, attrs }) {
    const { color } = useColor(toRef(props, 'color'))
    const { color: bgColor } = useColor(toRef(props, 'background'))
    const { color: activeColor } = useColor(toRef(props, 'activeColor'))

    const rootRef = ref<HTMLElement | null>(null)
    const staticWidth = 260
    const innerCollapsed = ref(false)

    const clickCloseSidebar = (evt: MouseEvent) => {
      if (!(evt.target as HTMLElement).closest('.vs-sidebar-content')) {
        emit('update:visible', false)
      }
    }

    watch(
      () => props.visible,
      (val: boolean) => {
        if (val) {
          setTimeout(() => {
            window.addEventListener('click', clickCloseSidebar)
          }, 200)
        } else {
          window.removeEventListener('click', clickCloseSidebar)
        }
      }
    )

    /**
     *  Control whether the menu is expanded according to ref(innerCollapsed)
     */
    const handleCollapsed = () => {
      if (rootRef.value) {
        if (innerCollapsed.value) {
          rootRef.value.style.width = '50px'
        } else {
          rootRef.value.style.width = `${staticWidth}px`
        }
      }
    }

    watch(
      () => props.collapsed,
      () => {
        innerCollapsed.value = props.collapsed
        handleCollapsed()
      }
    )

    provide<SidebarProvider>('sidebarProvider', {
      active: toRef(props, 'modelValue'),
      updateActive: (id: string) => {
        emit('update:modelValue', id)
      },
      collapsed: innerCollapsed
    })

    const mouseEnterEvent = () => {
      if (props.hoverExpand) {
        innerCollapsed.value = false
        handleCollapsed()
      }
    }
    const mouseLeaveEvent = () => {
      if (props.hoverExpand) {
        innerCollapsed.value = true
        handleCollapsed()
      }
    }

    onMounted(() => {
      innerCollapsed.value = props.collapsed
      if (props.hoverExpand) {
        innerCollapsed.value = true
      }
      handleCollapsed()
    })

    return () => (
      <div
        ref={rootRef}
        class={[
          'vs-sidebar-content',
          { collapsed: innerCollapsed.value },
          { visible: props.visible },
          { noLine: props.noLine },
          { square: props.square },
          { shadow: props.shadow },
          { relative: props.relative },
          { absolute: props.absolute },
          { right: props.right }
        ]}
        style={{
          '--vs-color': color.value,
          '--vs-background': bgColor.value,
          '--vs-active-color': activeColor.value
        }}
        onMouseenter={mouseEnterEvent}
        onMouseleave={mouseLeaveEvent}
        {...attrs}
      >
        {slots.logo && <div class="vs-sidebar__logo">{slots.logo?.()}</div>}
        {slots.title && <div class="vs-sidebar__title">{slots.title?.()}</div>}
        {<div class="vs-sidebar">{slots.default?.()}</div>}
        {slots.footer && (
          <div class="vs-sidebar__footer">{slots.footer?.()}</div>
        )}
      </div>
    )
  }
})

export default Sidebar as CompWithAttr<typeof Sidebar, HTMLAttributes>

export type SidebarProps = InstanceType<typeof Sidebar>['$props']
