import { defineComponent, provide, ref, toRef } from 'vue'
import './style.scss'

const AvatarGroup = defineComponent({
  name: 'VsAvatarGroup',
  props: {
    max: {
      type: Number
    },
    float: {
      type: Boolean,
      default: false
    }
  },
  slots: ['default'],
  setup(props, { slots }) {
    const max = toRef(props, 'max')
    const avatars = ref<string[]>([])
    const avatarsPlus = () => {
      avatars.value.push(`${avatars.value.length}`)
    }
    provide('max', max)
    provide('avatarsPlus', avatarsPlus)
    provide('avatars', avatars)
    return () => (
      <div class={['vs-avatar__group', { float: props.float }]}>
        {slots.default?.()}
      </div>
    )
  }
})
export default AvatarGroup

export type AvatarGroupProps = InstanceType<typeof AvatarGroup>['$props']
