import { defineComponent, HTMLAttributes, PropType } from 'vue'

import './style.scss'
import { Color, CompWithAttr } from '@/types/utils'

const Card = defineComponent({
  name: 'VsCard',
  props: {
    color: {
      type: String as PropType<Color>
    },
    type: {
      type: [String, Boolean],
      default: '1'
    }
  },
  slots: ['title', 'text', 'buttons', 'interactions'],
  setup(props, { slots, attrs }) {
    const cardAttrs = attrs as HTMLAttributes

    return () => (
      <div class={['vs-card-content', `type-${props.type}`]}>
        <div class="vs-card" {...cardAttrs}>
          {slots.img && (
            <div class="vs-card__img">
              {slots.img?.()}
              {slots.interactions && (
                <div class="vs-card__interactions">
                  {slots.interactions?.()}
                </div>
              )}
            </div>
          )}
          {slots.text && (
            <div class="vs-card__text">
              {slots.title && (
                <div class="vs-card__title">{slots.title?.()}</div>
              )}
              {slots.text?.()}
            </div>
          )}
          {slots.button && (
            <div class="vs-card__buttons">{slots.buttons?.()}</div>
          )}
        </div>
      </div>
    )
  }
})
export default Card as CompWithAttr<typeof Card, HTMLAttributes>

export type CardProps = InstanceType<typeof Card>['$props']
