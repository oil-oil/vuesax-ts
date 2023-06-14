import { defineComponent, ref, watch } from "vue";

import {
  VsButton,
  VsOption,
  VsOptionGroup,
  VsSelect,
  VsSwitch,
} from "./components";

const activeTooltip1 = ref(false);
const active = ref("home");
export default defineComponent({
  setup() {
    const select = ref([]);

    return () => (
      <>
        <VsSelect v-model={select.value} label="filter" filter multiple>
          <VsOptionGroup title="Vue.js">
            <VsOption label="Vuesax" value="1">
              Vuesax
            </VsOption>
            <VsOption label="Vue" value="2">
              Vue
            </VsOption>
            <VsOption label="Javascript" value="3">
              Javascript
            </VsOption>
            <VsOption label="Sass" value="4">
              Sass
            </VsOption>
            <VsOption label="Typescript" value="5">
              Typescript
            </VsOption>
            <VsOption label="Webpack" value="6">
              Webpack
            </VsOption>
            <VsOption label="Nodejs" value="7">
              Nodejs
            </VsOption>
          </VsOptionGroup>

          <VsOption label="Vuesax" value="1">
            Vuesax
          </VsOption>
          <VsOption label="Vue" value="2">
            Vue
          </VsOption>
          <VsOption label="Javascript" value="3">
            Javascript
          </VsOption>
          <VsOption label="Sass" value="4">
            Sass
          </VsOption>
          <VsOption label="Typescript" value="5">
            Typescript
          </VsOption>
          <VsOption label="Webpack" value="6">
            Webpack
          </VsOption>
          <VsOption label="Nodejs" value="7">
            Nodejs
          </VsOption>
        </VsSelect>
      </>
    );
  },
});
