import {
  PropType,
  defineComponent,
  onMounted,
  onUnmounted,
  provide,
  ref,
  toRef
} from 'vue'

import { NavbarProvider } from '../types'
import useColor from '@/hooks/useColor'
import useThrottle from '@/hooks/useThrottle'
import './style.scss'
import { Color } from '@/types/utils'

const Navbar = defineComponent({
  name: 'VsNavbar',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'text'
    },
    activeColor: {
      type: String as PropType<Color>,
      default: 'text'
    },
    backgroud: {
      type: String as PropType<Color>,
      default: 'white'
    },
    modelValue: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    },
    hideScroll: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    paddingScroll: {
      type: Boolean,
      default: false
    },
    noLine: {
      type: Boolean,
      default: false
    },
    targetScroll: {
      type: String
    }
  },
  slots: ['default', 'left', 'right'],
  setup(props, { slots, emit }) {
    const { color } = useColor(toRef(props, 'color'))
    const { color: bgColor } = useColor(toRef(props, 'backgroud'))
    const { color: activeColor } = useColor(toRef(props, 'activeColor'))

    const lineLeft = ref(0)
    const lineWidth = ref(0)
    const scrollTop = ref(0)
    const hidden = ref(false)
    const paddingScrollActive = ref(false)

    const elRef = ref<HTMLElement>()
    const leftRef = ref<HTMLElement>()
    const centerRef = ref<HTMLElement>()
    const rightRef = ref<HTMLElement>()

    const setModel = (id: string) => {
      emit('update:modelValue', id)
    }

    const setLineLeft = (left: number) => {
      lineLeft.value = left
    }

    const setLineWidth = (width: number) => {
      lineWidth.value = width
    }

    provide<NavbarProvider>('navbarProvider', {
      active: toRef(props, 'modelValue'),
      setLineLeft,
      setLineWidth,
      setModel
    })

    const onScroll = useThrottle(() => {
      const scrollT = props.targetScroll
        ? document.querySelector(props.targetScroll)?.scrollTop
        : window.scrollY

      if (props.hideScroll) {
        if (scrollT && Math.sign(scrollT - scrollTop.value) === 1) {
          hidden.value = true
        } else {
          hidden.value = false
        }
      }

      if (props.paddingScroll) {
        if (scrollT && scrollT > 0) {
          paddingScrollActive.value = false
        } else {
          paddingScrollActive.value = true
        }
      }

      if (scrollT) scrollTop.value = scrollT
    }, 200)

    const onResize = useThrottle(() => {
      const active = elRef.value?.querySelector(
        '.vs-navbar__item.active'
      ) as HTMLElement
      if (active) {
        setLineLeft(active.offsetLeft)
      } else {
        lineWidth.value = 0
      }
    }, 200)

    onMounted(() => {
      if (props.targetScroll && (props.hideScroll || props.paddingScroll)) {
        ;(
          document.querySelector(props.targetScroll) || window
        ).addEventListener('scroll', onScroll)
      }
      window.addEventListener('resize', onResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    })

    return () => (
      <div
        class={[
          'vs-navbar-content',
          {
            fixed: props.fixed,
            shadow: props.shadow,
            hidden: hidden.value,
            paddingScroll: paddingScrollActive.value,
            square: props.square,
            'vs-component--is-color': props.color
          }
        ]}
        style={{
          '--vs-color': color.value,
          '--vs-backgroud': bgColor.value,
          '--vs-active-color': activeColor.value
        }}
        ref={elRef}
      >
        <div class="vs-navbar">
          <div class="vs-navbar__left" ref={leftRef}>
            {slots.left?.()}
          </div>

          <div class="vs-navbar__center" ref={centerRef}>
            {slots.default?.()}
          </div>

          <div class="vs-navbar__right" ref={rightRef}>
            {slots.right?.()}
          </div>
        </div>
        {!props.noLine && (
          <div
            class="vs-navbar__line"
            style={{
              left: `${lineLeft.value}px`,
              width: `${lineWidth.value}px`
            }}
          />
        )}
      </div>
    )
  }
})

export default Navbar

export type NavbarProps = InstanceType<typeof Navbar>['$props']
