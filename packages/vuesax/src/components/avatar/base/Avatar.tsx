import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  inject,
  Ref,
  HTMLAttributes,
  PropType
} from 'vue'

import useColor from '@/hooks/useColor'
import { Color, CompWithAttr } from '@/types/utils'
import './style.scss'
import { setColor } from '@/utils'

type BadgeType = 'bottom-left' | 'top-right' | 'top-left'

const Avatar = defineComponent({
  name: 'VsAvatar',
  props: {
    color: {
      type: String as PropType<Color>
    },
    badgePosition: {
      type: String as PropType<BadgeType>,
      default: 'bottom-right'
    },
    pointer: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    historyGradient: {
      type: Boolean,
      default: false
    },
    writing: {
      type: Boolean,
      default: false
    },
    badge: {
      type: Boolean,
      default: false
    },
    badgeColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    name: {
      type: String
    }
  },
  slots: ['default', 'icons', 'badge'],
  setup(props, { slots, attrs }) {
    const { getColor } = useColor()
    const color = getColor(props.color)
    const textLength = ref(0)
    const index = ref<number>(0)
    const badgeRef = ref<HTMLElement>()

    const max = inject<Ref<number> | null>('max', null)
    const avatars = inject<Ref<string[]>>('avatars', ref([]))
    const avatarsPlus = inject<() => void>('avatarsPlus', () => {}, false)

    const contentLetters = computed(() => {
      if (props.name) {
        const text = props.name.trim()
        const namePart = text.split(/\s/g)
        if (namePart.length > 1) {
          let result = ''
          namePart.forEach((item) => {
            result += item[0]
          })
          if (result.length < 6) {
            return result.toUpperCase()
          }
          return result[0].toUpperCase()
        }
        if (namePart[0].length < 6) {
          return namePart[0]
        }
        return namePart[0][0].toUpperCase()
      }
      return ''
    })

    watch(
      contentLetters,
      () => {
        textLength.value = contentLetters.value?.length
      },
      { immediate: true }
    )

    onMounted(() => {
      if (badgeRef.value && props.badgeColor) {
        setColor('badge', props.badgeColor, badgeRef.value)
        badgeRef.value.classList.add('vs-change-color-badge')
      }
      index.value = avatars?.value.length
      avatarsPlus()
    })

    const isHidden = computed(() => {
      if (index.value && max?.value) {
        return index.value > max.value - 1
      }
      return false
    })

    const isLatest = computed(() => {
      if (index.value && max?.value) {
        return index.value === max.value - 1
      }
      return false
    })

    watch(
      () => props.badgeColor,
      () => {
        if (badgeRef.value) {
          setColor('badge', props.badgeColor, badgeRef.value)
          badgeRef.value.classList.add('vs-change-color-badge')
        }
      }
    )

    const writing = () => (
      <div class="vs-avatar__points">
        <div class="vs-avatar__points__point"></div>
        <div class="vs-avatar__points__point"></div>
        <div class="vs-avatar__points__point"></div>
      </div>
    )

    const badge = () => (
      <div
        class={[
          'vs-avatar__badge',
          {
            isSlot: slots.badge,
            writing: props.writing,
            'top-right': props.badgePosition === 'top-right',
            'top-left': props.badgePosition === 'top-left',
            'bottom-left': props.badgePosition === 'bottom-left'
          }
        ]}
        ref={badgeRef}
      >
        {props.writing ? writing() : slots.badge?.()}
      </div>
    )

    const avatar = () => (
      <div
        class={[
          'vs-avatar',
          { [`vs-avatar--letter--${textLength.value}`]: textLength.value > 2 }
        ]}
      >
        {props.name && contentLetters.value}
        {slots.default?.()}
      </div>
    )

    const loading = () => (
      <div class="vs-avatar__loading">
        <div class="vs-avatar__loading__animate"></div>
      </div>
    )

    const latest = () => (
      <div class="vs-avatar__latest">
        {`+${avatars.value.length - index.value - 1}`}
      </div>
    )

    const icons = () => <div class="vs-avatar__icons">{slots.icons?.()}</div>

    const avatarAttrs = attrs as HTMLAttributes
    return () => (
      <div
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
          cursor: props.pointer ? 'pointer' : 'default',
          '--vs-color': color
        }}
        class={[
          'vs-avatar-content',
          {
            history: props.history,
            'history--gradient': props.historyGradient,
            'vs-avatar-content--circle': props.circle,
            'vs-avatar-content--square': props.square,
            'vs-avatar-content--hidden': isHidden.value,
            'vs-avatar-content--latest': isLatest.value,
            'vs-avatar-content--hasIcons': slots.icons,
            'vs-avatar-content--size': props.size,
            'vs-component--is-color': !!props.color
          }
        ]}
        {...avatarAttrs}
      >
        {props.loading && loading()}
        {avatar()}
        {slots.badge ? badge() : props.badge && badge()}
        {isLatest.value && latest()}
        {slots.icons && icons()}
      </div>
    )
  }
})
export default Avatar as CompWithAttr<typeof Avatar, HTMLAttributes>

export type AvatarProps = InstanceType<typeof Avatar>['$props']
