import { defineComponent, ref, watch } from "vue";

import { VsCard, VsButton } from "./components";

const activeTooltip1 = ref(false);
const active = ref("home");
export default defineComponent({
  setup() {
    const select = ref([]);

    return () => (
      <VsCard
        type="4"
        v-slots={{
          title: () => <h3>pot with a plant</h3>,
          img: () => <img src="../public/foto1.png" />,
          text: () => (
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          ),
          interactions: () => (
            <>
              <VsButton danger icon>
                <i class="bx bx-heart"></i>
              </VsButton>
              <VsButton class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">54</span>
              </VsButton>
            </>
          ),
        }}
      ></VsCard>
    );
  },
});
