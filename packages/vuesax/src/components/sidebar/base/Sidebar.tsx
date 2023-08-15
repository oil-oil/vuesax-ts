import {
  defineComponent,
  onMounted,
  ref,
  watch,
  provide,
  toRef,
  computed,
  HTMLAttributes,
  PropType
} from 'vue'

import useColor from '@/hooks/useColor'
import { Color, CompWithAttr } from '@/types/utils'
import { setColor } from '@/utils'

const Sidebar = defineComponent({
  name: 'VsSideBar',
  props: {
    color: {
      type: String as PropType<Color>
    },
    modelValue: {
      type: String
    },
    reduce: {
      type: Boolean,
      default: false
    },
    hoverExpand: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    notLineActive: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    textWhite: {
      type: Boolean,
      default: false
    },
    notShadow: {
      type: Boolean,
      default: false
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
    },
    background: {
      type: String,
      default: 'background'
    }
  },
  slots: ['default', 'header', 'footer', 'logo'],
  emits: ['update:modelValue', 'update:open'],
  setup(props, { slots, emit, attrs }) {
    const color = useColor(props.color)
    const rootRef = ref<HTMLElement | null>(null)
    const staticWidth = 260
    const reduceInternal = ref(false)

    const clickCloseSidebar = (evt: MouseEvent) => {
      if (!(evt.target as HTMLElement).closest('.vs-sidebar-content')) {
        emit('update:open', false)
      }
    }
    watch(
      () => props.open,
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
    const sideBarClass = computed(() => [
      'vs-sidebar-content',
      { reduce: reduceInternal.value },
      { open: props.open },
      { notLineActive: props.notLineActive },
      { square: props.square },
      { notShadow: props.notShadow },
      { textWhite: props.textWhite },
      { relative: props.relative },
      { absolute: props.absolute },
      { right: props.right }
    ])

    /**
     *  Control whether the menu is expanded according to ref(reduceInternal)
     */
    const handleReduce = () => {
      if (rootRef.value) {
        if (reduceInternal.value) {
          rootRef.value.style.width = '50px'
        } else {
          rootRef.value.style.width = `${staticWidth}px`
        }
      }
    }

    watch(
      () => props.reduce,
      () => {
        reduceInternal.value = props.reduce
        handleReduce()
      }
    )

    watch(
      () => props.background,
      () => {
        setColor(
          'background',
          props.background,
          rootRef.value as HTMLElement,
          true
        )
      }
    )

    const active = toRef(props, 'modelValue')
    provide('activeValue', {
      active,
      updateActive: (id: string) => {
        emit('update:modelValue', id)
      }
    })

    const mouseEnterEvent = () => {
      if (props.hoverExpand) {
        reduceInternal.value = false
        handleReduce()
      }
    }
    const mouseLeaveEvent = () => {
      if (props.hoverExpand) {
        reduceInternal.value = true
        handleReduce()
      }
    }
    onMounted(() => {
      if (typeof props.reduce === 'boolean') {
        reduceInternal.value = props.reduce
      }
      if (props.hoverExpand) {
        reduceInternal.value = true
      }
      handleReduce()

      if (props.background !== 'background') {
        setColor(
          'background',
          props.background,
          rootRef.value as HTMLElement,
          true
        )
      }

      if (props.textWhite) {
        setColor('text', '#fff', rootRef.value as HTMLElement, true)
      }
    })
    return () => (
      <div
        ref={rootRef}
        class={sideBarClass.value}
        style={{ '--vs-color': color }}
        onMouseenter={mouseEnterEvent}
        onMouseleave={mouseLeaveEvent}
        {...attrs}
      >
        {slots.logo && <div class="vs-sidebar__logo">{slots.logo?.()}</div>}
        {slots.header && (
          <div class="vs-sidebar__header">{slots.header?.()}</div>
        )}
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
