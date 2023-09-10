import {
  defineComponent,
  ref,
  watch,
  onMounted,
  Transition,
  HTMLAttributes
} from 'vue'

import { CompWithAttr } from '@/types/utils'

const SidebarGroup = defineComponent({
  name: 'SideBarGroup',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  slots: ['default', 'title'],
  setup(props, { slots }) {
    const innerCollapsed = ref(false)
    const content = ref<HTMLElement>()
    const rootRef = ref<HTMLElement>()

    const handleCollapsed = () => {
      if (content.value) {
        const { scrollHeight } = content.value
        if (props.collapsed) {
          content.value.style.height = `0px`
        } else {
          content.value.style.height = `${scrollHeight - 1}px`
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

    onMounted(() => {
      if (rootRef.value?.querySelector('.active')) {
        innerCollapsed.value = false
      }
      handleCollapsed()
    })

    const onBeforeEnter = (Element: Element) => {
      const el = Element as HTMLElement
      el.style.height = '0'
    }
    const onEnter = (Element: Element, done: () => void) => {
      const el = Element as HTMLElement
      const { scrollHeight } = el
      el.style.height = `${scrollHeight - 1}px`
      done()
    }
    const onLeave = (Element: Element) => {
      const el = Element as HTMLElement
      el.style.minHeight = '0px'
      el.style.height = '0px'
    }

    return () => (
      <div
        class={['vs-sidebar__group', { collapsed: innerCollapsed.value }]}
        ref={rootRef}
      >
        <div
          class="vs-sidebar__group__title"
          onClick={() => {
            innerCollapsed.value = !innerCollapsed.value
          }}
        >
          {slots.title?.()}
        </div>
        <Transition
          onBeforeEnter={onBeforeEnter}
          onEnter={onEnter}
          onLeave={onLeave}
        >
          {!innerCollapsed.value && (
            <div class="vs-sidebar__group__content" ref={content}>
              {slots.default?.()}
            </div>
          )}
        </Transition>
      </div>
    )
  }
})

export default SidebarGroup as CompWithAttr<typeof SidebarGroup, HTMLAttributes>

export type SidebarGroupProps = InstanceType<typeof SidebarGroup>['$props']
