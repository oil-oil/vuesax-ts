import { defineComponent } from 'vue'
import './style.scss'

const IconClose = defineComponent({
  props: {
    hover: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return () => (
      <i
        ref="icon"
        class={['vs-icon-close', `vs-icon-hover-${props.hover}`]}
      ></i>
    )
  }
})

export default IconClose
