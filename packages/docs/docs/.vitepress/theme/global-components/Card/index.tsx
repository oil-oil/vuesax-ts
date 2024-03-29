import { useData } from 'vitepress'
import { defineComponent, DefineComponent } from 'vue'

import Codex from '../Codex'
import './Card.scss'

const exampleComponentsArr: [string, { default: DefineComponent }][] =
  Object.entries(
    (import.meta as any).glob('../template/**/*.vue', { eager: true })
  )

const Card = defineComponent({
  name: 'Card',
  props: {
    renderExample: {
      type: Boolean,
      default: true
    },
    renderCode: {
      type: Boolean,
      default: true
    },
    subtitle: {
      type: String,
      default: 'Default'
    }
  },
  slots: ['default'],
  setup(props, { slots }) {
    const { theme, page } = useData<{ mobileActive: boolean }>()

    return () => (
      <div class="card">
        <div class="text">{slots.default?.()}</div>
        {props.renderExample && (
          <div class={['example', { mobile: theme.value.mobileActive }]}>
            <div class="center">
              {exampleComponentsArr.map((arr) => {
                if (
                  arr[0] ===
                  `../template/${page.value.title.split(' ')[0]}/${
                    props.subtitle
                  }.vue`
                ) {
                  const Example = arr[1].default
                  return <Example />
                }
                return ''
              })}
            </div>
          </div>
        )}
        {props.renderCode && (
          <div class="slotcode">
            <Codex subtitle={props.subtitle} />
          </div>
        )}
      </div>
    )
  }
})
export default Card
