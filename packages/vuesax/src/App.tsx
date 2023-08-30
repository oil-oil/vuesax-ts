import { defineComponent, ref } from 'vue'

import { VsSelect, VsOption, VsOptionGroup } from './components'

export default defineComponent({
  setup() {
    const emoji = ['one', 'two', 'three', 'four', 'five']

    const selectValue = ref(0)
    return () => (
      <VsSelect v-model={selectValue.value} placeholder="plh" filter>
        <VsOptionGroup>
          {emoji.map((item, index) => (
            <VsOption value={index} label={item} key={index}></VsOption>
          ))}
        </VsOptionGroup>
      </VsSelect>
    )
  }
})
