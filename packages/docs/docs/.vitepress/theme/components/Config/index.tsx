import { defineComponent } from 'vue'

import ConfigBtn from './ConfigButton.tsx'
import './style/style.scss'

const ConfigMenu = defineComponent({
  name: 'ConfigMenu',
  setup() {
    return () => (
      <div class={'config'}>
        <ConfigBtn />
      </div>
    )
  }
})
export default ConfigMenu
