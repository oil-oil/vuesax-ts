import { defineComponent } from 'vue'

import HomePage1 from './HomePage1'
import './style.scss'

const Home = defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <div class="home" style={{ width: '100vw' }}>
        <HomePage1 />
      </div>
    )
  }
})

export default Home
