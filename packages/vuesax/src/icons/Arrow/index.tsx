import { HTMLAttributes, defineComponent } from 'vue'

import './style.scss'
import { CompWithAttr } from '@/types/utils'

const IconArrow = defineComponent({
  props: {
    less: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    return () => (
      <i
        {...attrs}
        ref="icon"
        class={[
          'vs-icon-arrow',
          {
            less: props.less
          }
        ]}
      ></i>
    )
  }
})

export default IconArrow as CompWithAttr<typeof IconArrow, HTMLAttributes>
